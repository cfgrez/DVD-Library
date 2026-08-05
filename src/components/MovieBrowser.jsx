import React, { useState, useEffect } from 'react';
import { Search, Check, X } from 'lucide-react';
import { expandedMoviesDatabase, allCategories } from '../data/moviesDB-expanded';

// Genera un gradiente estable a partir del titulo (misma pelicula = mismo color)
function coverGradient(title) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = (hash * 31 + title.charCodeAt(i)) % 360;
  }
  const h2 = (hash + 45) % 360;
  return `linear-gradient(145deg, hsl(${hash}, 45%, 28%), hsl(${h2}, 50%, 15%))`;
}

export default function MovieBrowser({ onMoviesChanged }) {
  const [allMovies, setAllMovies] = useState(() =>
    expandedMoviesDatabase.map((m) => ({ ...m, owned: false }))
  );
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ownedCount, setOwnedCount] = useState(0);

  const categories = ['All', ...allCategories];

  // Cargar estado guardado al montar
  useEffect(() => {
    const savedState = localStorage.getItem('moviesOwned');
    if (savedState) {
      try {
        const owned = JSON.parse(savedState);
        setAllMovies((prev) =>
          prev.map((movie) => ({ ...movie, owned: owned[movie.id] === true }))
        );
      } catch (e) {
        console.warn('No se pudo leer la seleccion guardada:', e);
      }
    }
  }, []);

  // El contador siempre refleja el estado actual
  useEffect(() => {
    setOwnedCount(allMovies.filter((m) => m.owned).length);
  }, [allMovies]);

  // Actualizar películas filtradas cuando cambia la búsqueda o categoría
  useEffect(() => {
    let filtered = allMovies;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(movie =>
        movie.categories.includes(selectedCategory)
      );
    }

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(movie =>
        movie.name.toLowerCase().includes(lowerQuery) ||
        movie.director.toLowerCase().includes(lowerQuery) ||
        movie.actors.some(actor => actor.toLowerCase().includes(lowerQuery))
      );
    }

    setFilteredMovies(filtered);
  }, [searchQuery, selectedCategory, allMovies]);

  const toggleMovie = (movieId) => {
    const updatedMovies = allMovies.map(movie =>
      movie.id === movieId ? { ...movie, owned: !movie.owned } : movie
    );
    setAllMovies(updatedMovies);

    // Guardar en localStorage
    const ownedMovies = {};
    updatedMovies.forEach(movie => {
      if (movie.owned) {
        ownedMovies[movie.id] = true;
      }
    });
    localStorage.setItem('moviesOwned', JSON.stringify(ownedMovies));
    
    if (onMoviesChanged) {
      onMoviesChanged(updatedMovies.filter(m => m.owned));
    }
  };

  return (
    <div className="movie-browser">
      <div className="browser-header">
        <h2>🎬 Explora Películas ({filteredMovies.length} encontradas)</h2>
        <p className="owned-badge">Tu biblioteca: {ownedCount} películas</p>
      </div>

      {/* Búsqueda */}
      <div className="search-section">
        <div className="search-input-wrapper">
          <Search size={20} />
          <input
            type="text"
            placeholder="Busca por título, director, actor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="clear-search"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Categorías */}
      <div className="categories-section">
        <h3>Géneros</h3>
        <div className="categories-list">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de películas */}
      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <div key={movie.id} className={`movie-item ${movie.owned ? 'owned' : ''}`}>
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
                    background: coverGradient(movie.name),
                  }}
                >
                  <span className="fb-title">{movie.name}</span>
                  <span className="fb-year">{movie.year || ''}</span>
                </div>
              </div>

              <div className="movie-info">
                <h4 title={movie.name}>{movie.name}</h4>
                <p className="movie-year">{movie.year}</p>
                <p className="movie-director">{movie.director}</p>
                <p className="movie-genres">{movie.categories.join(', ')}</p>
              </div>

              <button
                className={`own-button ${movie.owned ? 'owned' : ''}`}
                onClick={() => toggleMovie(movie.id)}
              >
                {movie.owned ? (
                  <>
                    <Check size={16} />
                    Tengo esta
                  </>
                ) : (
                  <>
                    <X size={16} />
                    Agregar
                  </>
                )}
              </button>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No se encontraron películas</p>
          </div>
        )}
      </div>
    </div>
  );
}
