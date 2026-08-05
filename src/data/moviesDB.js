// 🎬 Base de Datos de Películas con Caratulas
// Películas populares con URLs de imágenes

export const moviesDatabase = [
  {
    id: 1,
    name: "Avatar",
    year: 2009,
    runtime: 162,
    categories: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    director: "James Cameron",
    writers: ["James Cameron"],
    actors: ["Sam Worthington", "Zoe Saldana", "Stephen Lang"],
    poster: "https://ia.media-imdb.com/images/M/MV5BMjEyOTYzOTY0NV5BMl5BanBnXkFtZTcwOTAyNDI3OA@@._V1_SX300.jpg",
    storyline: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
  },
  {
    id: 2,
    name: "The Matrix",
    year: 1999,
    runtime: 136,
    categories: ["Action", "Sci-Fi"],
    director: "The Wachowskis",
    writers: ["The Wachowskis"],
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    poster: "https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTAwLWI5ZTUtMTY4ZmQ3MjUyODRlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    storyline: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    id: 3,
    name: "Inception",
    year: 2010,
    runtime: 148,
    categories: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    writers: ["Christopher Nolan"],
    actors: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
    poster: "https://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    storyline: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    id: 4,
    name: "Titanic",
    year: 1997,
    runtime: 194,
    categories: ["Drama", "Romance"],
    director: "James Cameron",
    writers: ["James Cameron"],
    actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    poster: "https://ia.media-imdb.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZDZhLWJGY2EtYzUyMDAxODg3NTk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    storyline: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
  },
  {
    id: 5,
    name: "The Dark Knight",
    year: 2008,
    runtime: 152,
    categories: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    writers: ["Jonathan Nolan", "Christopher Nolan"],
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    poster: "https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODUxN15BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX300.jpg",
    storyline: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests to fight injustice."
  },
  {
    id: 6,
    name: "Forrest Gump",
    year: 1994,
    runtime: 142,
    categories: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    writers: ["Winston Groom", "Eric Roth"],
    actors: ["Tom Hanks", "Sally Field", "Gary Sinise"],
    poster: "https://ia.media-imdb.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Ym9hLWNmMjctMzVmZDkwMjU4ZjZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    storyline: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
  },
  {
    id: 7,
    name: "Jurassic Park",
    year: 1993,
    runtime: 127,
    categories: ["Adventure", "Sci-Fi", "Thriller"],
    director: "Steven Spielberg",
    writers: ["Michael Crichton", "David Koepp"],
    actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    poster: "https://ia.media-imdb.com/images/M/MV5BMjM2MDg3NjctN2U3OC00OTg0LWEwYWMtZDEwNWQwMjU1ZjZlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    storyline: "A pragmatic paleontologist touring an almost complete theme park is tasked with protecting a couple of kids along with his nemesis, a romance-in-the-making zoologist."
  },
  {
    id: 8,
    name: "Pulp Fiction",
    year: 1994,
    runtime: 154,
    categories: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    writers: ["Quentin Tarantino", "Roger Avary"],
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    poster: "https://ia.media-imdb.com/images/M/MV5BNjQ3NWQwMzItMzAwYy00ODk0LTg4YjYtODI5ZjA4YTljMGQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    storyline: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    id: 9,
    name: "The Shawshank Redemption",
    year: 1994,
    runtime: 142,
    categories: ["Drama"],
    director: "Frank Darabont",
    writers: ["Stephen King", "Frank Darabont"],
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    poster: "https://ia.media-imdb.com/images/M/MV5BNDE3ODcyODMtY2YzZC00NmNhLWJmIjgtNTA4NzVmNzQwYTkwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    storyline: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    id: 10,
    name: "Interstellar",
    year: 2014,
    runtime: 169,
    categories: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    writers: ["Jonathan Nolan", "Christopher Nolan"],
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    poster: "https://ia.media-imdb.com/images/M/MV5BZjdkOTU3MDctMzg5Ni00NGE3LWJmNjAtNTA4NzVmNzQwYTkwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    storyline: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 11,
    name: "The Godfather",
    year: 1972,
    runtime: 175,
    categories: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    writers: ["Mario Puzo", "Francis Ford Coppola"],
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    poster: "https://ia.media-imdb.com/images/M/MV5BM2MyNjYxNmUtYTAwNC00MTYxLWJmNjAtYzM0M2U0ZjUwMTljXkEyXkFqcGdeQXVyNzU1OTQwMTI@._V1_SX300.jpg",
    storyline: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son."
  },
  {
    id: 12,
    name: "Gladiator",
    year: 2000,
    runtime: 155,
    categories: ["Action", "Adventure", "Drama"],
    director: "Ridley Scott",
    writers: ["David Franzoni", "John Logan"],
    actors: ["Russell Crowe", "Joaquin Phoenix", "Lucilla"],
    poster: "https://ia.media-imdb.com/images/M/MV5BMDljNTQ5OWEtMTVjOC00ZWQzLWEyMmYtMDg2N2Y0YzhlMWVlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    storyline: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
  },
  {
    id: 13,
    name: "The Lion King",
    year: 1994,
    runtime: 88,
    categories: ["Animation", "Adventure", "Family"],
    director: "Roger Allers, Rob Minkoff",
    writers: ["Irene Mecchi", "Jonathan Roberts"],
    actors: ["James Earl Jones", "Jeremy Irons", "Matthew Broderick"],
    poster: "https://ia.media-imdb.com/images/M/MV5BYTYxNGMyNWYtMjE3MS00MzNjLWFjNmYtMDk3N2FmNGU5NjkxXkEyXkFqcGdeQXVyNjY5NDk5NTA@._V1_SX300.jpg",
    storyline: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
  },
  {
    id: 14,
    name: "Back to the Future",
    year: 1985,
    runtime: 116,
    categories: ["Adventure", "Comedy", "Sci-Fi"],
    director: "Robert Zemeckis",
    writers: ["Robert Zemeckis", "Bob Gale"],
    actors: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    poster: "https://ia.media-imdb.com/images/M/MV5BZjc2MzU0ZWYtMjZjMC00OWUyLWI4N2QtYzFkMzMwZGM5ZTdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    storyline: "A teenager is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend, the maverick scientist Doc Brown."
  },
  {
    id: 15,
    name: "Dune",
    year: 2021,
    runtime: 156,
    categories: ["Action", "Adventure", "Drama", "Sci-Fi"],
    director: "Denis Villeneuve",
    writers: ["Jon Spaihts", "Denis Villeneuve"],
    actors: ["Timothée Chalamet", "Zendaya", "Oscar Isaac"],
    poster: "https://ia.media-imdb.com/images/M/MV5BN2FjNmEtNzUwLWE5NTAtODliYi00YTg2LWFhZTEtZTU3NGVjMGE3OTczXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    storyline: "Paul Atreides, a brilliant young man, must travel to the most dangerous planet in the universe to ensure the future of his family and people."
  }
];

// Función para buscar película por nombre
export const searchMovieByName = (query) => {
  if (!query) return null;
  
  const lowerQuery = query.toLowerCase().trim();
  
  return moviesDatabase.find(movie => 
    movie.name.toLowerCase().includes(lowerQuery)
  );
};

// Función para obtener película por año
export const getMoviesByYear = (year) => {
  return moviesDatabase.filter(movie => movie.year === year);
};

// Función para obtener películas por categoría
export const getMoviesByCategory = (category) => {
  return moviesDatabase.filter(movie => 
    movie.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
  );
};

// Función para buscar películas
export const searchMovies = (query) => {
  if (!query) return [];
  
  const lowerQuery = query.toLowerCase().trim();
  
  return moviesDatabase.filter(movie =>
    movie.name.toLowerCase().includes(lowerQuery) ||
    movie.director.toLowerCase().includes(lowerQuery) ||
    movie.actors.some(actor => actor.toLowerCase().includes(lowerQuery))
  );
};

// Exportar toda la BD
export default moviesDatabase;
