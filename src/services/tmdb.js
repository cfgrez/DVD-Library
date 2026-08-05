// Servicio de The Movie Database (TMDB)
// La API key NO va en el codigo: se guarda en el navegador del usuario.

const BASE = 'https://api.themoviedb.org/3';
const IMG = 'https://image.tmdb.org/t/p/w500';
const KEY_STORAGE = 'tmdbApiKey';

// Ids de genero de TMDB (estables). Traducidos para mostrar.
const GENRES = {
  28: 'Acción',
  12: 'Aventura',
  16: 'Animación',
  35: 'Comedia',
  80: 'Crimen',
  99: 'Documental',
  18: 'Drama',
  10751: 'Familia',
  14: 'Fantasía',
  36: 'Historia',
  27: 'Terror',
  10402: 'Música',
  9648: 'Misterio',
  10749: 'Romance',
  878: 'Ciencia ficción',
  10770: 'Película de TV',
  53: 'Suspenso',
  10752: 'Bélica',
  37: 'Western'
};

export function getApiKey() {
  return localStorage.getItem(KEY_STORAGE) || '';
}

export function setApiKey(key) {
  const clean = (key || '').trim();
  if (clean) {
    localStorage.setItem(KEY_STORAGE, clean);
  } else {
    localStorage.removeItem(KEY_STORAGE);
  }
}

export function hasApiKey() {
  return getApiKey().length > 0;
}

async function request(path, params = {}) {
  const key = getApiKey();
  if (!key) throw new Error('SIN_KEY');

  const url = new URL(BASE + path);
  url.searchParams.set('api_key', key);
  url.searchParams.set('language', 'es-CL');
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url);
  if (res.status === 401) throw new Error('KEY_INVALIDA');
  if (!res.ok) throw new Error('ERROR_TMDB_' + res.status);
  return res.json();
}

/** Comprueba que la key sirve. Devuelve true o lanza un error con codigo. */
export async function testApiKey(key) {
  const url = new URL(BASE + '/configuration');
  url.searchParams.set('api_key', (key || '').trim());
  const res = await fetch(url);
  if (res.status === 401) throw new Error('KEY_INVALIDA');
  if (!res.ok) throw new Error('ERROR_TMDB_' + res.status);
  return true;
}

/** Busca peliculas por titulo. Devuelve resultados en el formato del catalogo. */
export async function searchTMDB(query, page = 1) {
  if (!query || !query.trim()) return { results: [], totalResults: 0, totalPages: 0 };

  const data = await request('/search/movie', {
    query: query.trim(),
    page,
    include_adult: 'false'
  });

  return {
    results: (data.results || []).map(toMovie),
    totalResults: data.total_results || 0,
    totalPages: data.total_pages || 0
  };
}

/** Convierte un resultado de TMDB al formato que usa el catalogo local. */
function toMovie(r) {
  return {
    id: `tmdb-${r.id}`,
    tmdbId: r.id,
    name: r.title || r.original_title || 'Sin título',
    originalName: r.original_title || '',
    year: r.release_date ? parseInt(r.release_date.slice(0, 4), 10) : 0,
    runtime: 0,
    categories: (r.genre_ids || []).map((g) => GENRES[g]).filter(Boolean).slice(0, 3),
    director: '',
    actors: [],
    edad: '',
    poster: r.poster_path ? IMG + r.poster_path : '',
    overview: r.overview || '',
    fromTMDB: true
  };
}

/**
 * Trae los datos completos de una pelicula: director, reparto, duracion
 * y clasificacion por edad chilena (con respaldo a la de EE.UU.).
 */
export async function getMovieDetails(tmdbId) {
  const d = await request(`/movie/${tmdbId}`, {
    append_to_response: 'release_dates,credits'
  });

  const crew = d.credits?.crew || [];
  const director = crew
    .filter((p) => p.job === 'Director')
    .map((p) => p.name)
    .join(', ');

  const actors = (d.credits?.cast || []).slice(0, 3).map((p) => p.name);

  return {
    id: `tmdb-${d.id}`,
    tmdbId: d.id,
    name: d.title || d.original_title,
    originalName: d.original_title || '',
    year: d.release_date ? parseInt(d.release_date.slice(0, 4), 10) : 0,
    runtime: d.runtime || 0,
    categories: (d.genres || []).map((g) => g.name).slice(0, 3),
    director,
    actors,
    edad: pickCertification(d.release_dates?.results),
    poster: d.poster_path ? IMG + d.poster_path : '',
    overview: d.overview || '',
    fromTMDB: true
  };
}

/** Prefiere la clasificacion chilena; si no existe usa la de EE.UU. */
function pickCertification(results) {
  if (!Array.isArray(results)) return '';

  const find = (code) => {
    const country = results.find((r) => r.iso_3166_1 === code);
    if (!country) return '';
    const withCert = (country.release_dates || []).find(
      (rd) => rd.certification && rd.certification.trim()
    );
    return withCert ? withCert.certification.trim() : '';
  };

  return find('CL') || find('US') || '';
}

export { GENRES };
