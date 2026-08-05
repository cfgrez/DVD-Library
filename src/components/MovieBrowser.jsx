import React, { useState, useMemo } from 'react';
import { Search, Check, Plus, X } from 'lucide-react';
import { expandedMoviesDatabase, allCategories, allRatings } from '../data/moviesDB-expanded';

// Genera un gradiente estable a partir del titulo (misma pelicula = mismo color)
function coverGradient(title) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = (hash * 31 + title.charCodeAt(i)) % 360;
  }
  const h2 = (hash + 45) % 360;
  return `linear-gradient(145deg, hsl(${hash}, 45%, 28%), hsl(${h2}, 50%, 15%))`;
}

// Convierte una pelicula del catalogo al formato que usa la biblioteca
export function movieToDVD(movie) {
  return {
    sourceId: movie.id,
    titulo: movie.name,
    año: movie.year ? String(movie.year) : '',
    region: '',
    genre: movie.categories?.[0] || '',
    edad: movie.edad || 'N/D',
    actores: (movie.actors || []).join(', '),
    caratula: movie.poster || '',
    notas: movie.director ? `Director: ${movie.director}` : ''
  };
}

const PAGE_SIZE = 60;

export default function MovieBrowser({ dvds = [], onToggleMovie }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const categories = useMemo(() => ['All', ...allCategories], []);

  // La fuente de verdad es la biblioteca, no una lista aparte
  const ownedIds = useMemo(
    () => new Set(dvds.map((d) => d.sourceId).filter((id) => id !== undefined)),
    [dvds]
  );

  const filteredMovies = useMemo(() => {
    let list = expandedMoviesDatabase;

    if (selectedCategory !== 'All') {
      list = list.filter((m) => m.categories.includes(selectedCategory));
    }

    if (selectedRating !== 'All') {
      list = list.filter((m) =>
        selectedRating === 'N/D' ? !m.edad : m.edad === selectedRating
      );
    }

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.director.toLowerCase().includes(q) ||
          m.actors.some((a) => a.toLowerCase().includes(q))
      );
    }

    return list;
  }, [searchQuery, selectedCategory, selectedRating]);

  const visibleMovies = filteredMovies.slice(0, visibleCount);

  const handleSearch = (value) => {
    setSearchQuery(value);
    setVisibleCount(PAGE_SIZE);
  };

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  const handleRating = (r) => {
    setSelectedRating(r);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="movie-browser">
      <div className="browser-header">
        <h2>Explorar películas</h2>
        <p className="owned-badge">
          {filteredMovies.length} de {expandedMoviesDatabase.length} títulos · tienes {ownedIds.size} en tu
          biblioteca
        </p>
      </div>

      <div className="search-section">
        <div className="search-input-wrapper">
          <Search size={20} />
          <input
            type="text"
            placeholder="Busca por título, director o actor..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button onClick={() => handleSearch('')} className="clear-search" aria-label="Limpiar búsqueda">
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      <div className="categories-section">
        <h3>Géneros</h3>
        <div className="categories-list">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategory(cat)}
            >
              {cat === 'All' ? 'Todos' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="categories-section">
        <h3>Clasificación por edad</h3>
        <div className="categories-list">
          {['All', ...allRatings, 'N/D'].map((r) => (
            <button
              key={r}
              className={`category-btn ${selectedRating === r ? 'active' : ''}`}
              onClick={() => handleRating(r)}
            >
              {r === 'All' ? 'Todas' : r}
            </button>
          ))}
        </div>
      </div>

      <div className="movies-grid">
        {visibleMovies.length > 0 ? (
          visibleMovies.map((movie) => {
            const owned = ownedIds.has(movie.id);
            return (
              <div key={movie.id} className={`movie-item ${owned ? 'owned' : ''}`}>
                <div className="movie-poster-wrapper">
                  {movie.poster ? (
                    <img
                      src={movie.poster}
                      alt={movie.name}
                      className="movie-poster"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fb = e.target.nextElementSibling;
                        if (fb) fb.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    className="movie-poster-fallback"
                    style={{
                      display: movie.poster ? 'none' : 'flex',
                      background: coverGradient(movie.name)
                    }}
                  >
                    <span className="fb-title">{movie.name}</span>
                    <span className="fb-year">{movie.year || ''}</span>
                  </div>
                  {movie.edad && <div className="age-badge">{movie.edad}</div>}
                  {owned && (
                    <div className="owned-check" title="Ya está en tu biblioteca">
                      <Check size={16} />
                    </div>
                  )}
                </div>

                <div className="movie-info">
                  <h4 title={movie.name}>{movie.name}</h4>
                  <p className="movie-year">{movie.year || 'Año desconocido'}</p>
                  <p className="movie-director" title={movie.director}>
                    {movie.director}
                  </p>
                  <p className="movie-genres">{movie.categories.join(', ')}</p>
                </div>

                <button
                  className={`own-button ${owned ? 'owned' : ''}`}
                  onClick={() => onToggleMovie && onToggleMovie(movie)}
                >
                  {owned ? (
                    <>
                      <Check size={16} /> En mi biblioteca
                    </>
                  ) : (
                    <>
                      <Plus size={16} /> Agregar
                    </>
                  )}
                </button>
              </div>
            );
          })
        ) : (
          <div className="no-results">
            <p>No se encontraron películas con esos criterios</p>
          </div>
        )}
      </div>

      {visibleCount < filteredMovies.length && (
        <div className="load-more-wrapper">
          <button className="btn load-more" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
            Mostrar más ({filteredMovies.length - visibleCount} restantes)
          </button>
        </div>
      )}
    </div>
  );
}
