import React, { useState, useMemo } from 'react';
import { Search, Check, Plus, X, Globe, Loader } from 'lucide-react';
import { expandedMoviesDatabase, allCategories, allRatings } from '../data/moviesDB-expanded';
import { hasApiKey, searchTMDB, getMovieDetails } from '../services/tmdb';
import TMDBSettings from './TMDBSettings';

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
    notas: [
      movie.director ? `Director: ${movie.director}` : '',
      movie.originalName && movie.originalName !== movie.name
        ? `Título original: ${movie.originalName}`
        : '',
      movie.overview || ''
    ]
      .filter(Boolean)
      .join('\n\n')
  };
}

const PAGE_SIZE = 60;

export default function MovieBrowser({ dvds = [], onToggleMovie }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [tmdbResults, setTmdbResults] = useState([]);
  const [tmdbLoading, setTmdbLoading] = useState(false);
  const [tmdbError, setTmdbError] = useState('');
  const [tmdbSearched, setTmdbSearched] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [keyPresent, setKeyPresent] = useState(hasApiKey());
  const [addingId, setAddingId] = useState(null);

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


  const buscarEnTMDB = async () => {
    const q = searchQuery.trim();
    if (!q) return;

    setTmdbLoading(true);
    setTmdbError('');
    try {
      const { results } = await searchTMDB(q);
      const yaEnCatalogo = new Set(
        filteredMovies.map((m) => `${m.name.toLowerCase()}|${m.year}`)
      );
      // no repetir lo que ya salio en la busqueda local
      setTmdbResults(
        results.filter((r) => !yaEnCatalogo.has(`${r.name.toLowerCase()}|${r.year}`))
      );
      setTmdbSearched(q);
    } catch (err) {
      setTmdbResults([]);
      if (err.message === 'SIN_KEY') {
        setTmdbError('Necesitas configurar tu API key de TMDB.');
        setShowSettings(true);
      } else if (err.message === 'KEY_INVALIDA') {
        setTmdbError('TMDB rechazó la key. Revísala en Configurar búsqueda online.');
        setShowSettings(true);
      } else {
        setTmdbError('No se pudo conectar con TMDB. Revisa tu conexión.');
      }
    } finally {
      setTmdbLoading(false);
    }
  };

  // Al agregar una pelicula de TMDB pedimos los datos completos
  // (director, reparto y clasificacion chilena), que la busqueda no trae.
  const agregarDesdeTMDB = async (movie) => {
    if (onToggleMovie && ownedIds.has(movie.id)) {
      onToggleMovie(movie);
      return;
    }
    setAddingId(movie.id);
    try {
      const full = await getMovieDetails(movie.tmdbId);
      if (onToggleMovie) onToggleMovie(full);
    } catch (err) {
      // si fallan los detalles guardamos lo que ya tenemos
      if (onToggleMovie) onToggleMovie(movie);
    } finally {
      setAddingId(null);
    }
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

      <div className="tmdb-toggle-row">
        <button className="btn btn-secondary" onClick={() => setShowSettings((v) => !v)}>
          <Globe size={16} />
          {keyPresent ? 'Búsqueda online activa' : 'Configurar búsqueda online'}
        </button>
      </div>

      {showSettings && (
        <TMDBSettings
          onKeyChange={(k) => {
            setKeyPresent(Boolean(k));
            if (k) setShowSettings(false);
          }}
        />
      )}

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

      {searchQuery.trim() && (
        <div className="tmdb-section">
          <div className="tmdb-section-head">
            <h3>
              ¿No está en el catálogo? Búscala en TMDB
              {tmdbSearched && tmdbResults.length > 0 && ` — ${tmdbResults.length} resultados`}
            </h3>
            <button className="btn btn-primary" onClick={buscarEnTMDB} disabled={tmdbLoading}>
              {tmdbLoading ? <Loader size={16} className="spin" /> : <Globe size={16} />}
              {tmdbLoading ? 'Buscando...' : `Buscar "${searchQuery.trim()}" online`}
            </button>
          </div>

          {tmdbError && <div className="error-box">{tmdbError}</div>}

          {tmdbSearched && !tmdbLoading && tmdbResults.length === 0 && !tmdbError && (
            <p className="tmdb-empty">TMDB tampoco encontró resultados para "{tmdbSearched}".</p>
          )}

          {tmdbResults.length > 0 && (
            <div className="movies-grid">
              {tmdbResults.map((movie) => {
                const owned = ownedIds.has(movie.id);
                const cargando = addingId === movie.id;
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
                      <div className="tmdb-tag">TMDB</div>
                      {owned && (
                        <div className="owned-check">
                          <Check size={16} />
                        </div>
                      )}
                    </div>

                    <div className="movie-info">
                      <h4 title={movie.name}>{movie.name}</h4>
                      <p className="movie-year">{movie.year || 'Año desconocido'}</p>
                      <p className="movie-genres">{movie.categories.join(', ')}</p>
                    </div>

                    <button
                      className={`own-button ${owned ? 'owned' : ''}`}
                      onClick={() => agregarDesdeTMDB(movie)}
                      disabled={cargando}
                    >
                      {cargando ? (
                        <>
                          <Loader size={16} className="spin" /> Agregando
                        </>
                      ) : owned ? (
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
              })}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
