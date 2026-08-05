// 🎬 BASE DE DATOS EXPANDIDA DE PELÍCULAS
// 100+ películas populares con opción de marcar como propias

export const expandedMoviesDatabase = [
  // ACTION & ADVENTURE
  { id: 1, name: "Avatar", year: 2009, runtime: 162, categories: ["Action", "Adventure", "Sci-Fi"], director: "James Cameron", actors: ["Sam Worthington", "Zoe Saldana"], poster: "https://ia.media-imdb.com/images/M/MV5BMjEyOTYzOTY0NV5BMl5BanBnXkFtZTcwOTAyNDI3OA@@._V1_SX300.jpg", owned: false },
  { id: 2, name: "The Matrix", year: 1999, runtime: 136, categories: ["Action", "Sci-Fi"], director: "The Wachowskis", actors: ["Keanu Reeves", "Laurence Fishburne"], poster: "https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTAwLWI5ZTUtMTY4ZmQ3MjUyODRlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },
  { id: 3, name: "Inception", year: 2010, runtime: 148, categories: ["Action", "Sci-Fi", "Thriller"], director: "Christopher Nolan", actors: ["Leonardo DiCaprio", "Marion Cotillard"], poster: "https://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg", owned: false },
  { id: 4, name: "The Dark Knight", year: 2008, runtime: 152, categories: ["Action", "Crime", "Drama"], director: "Christopher Nolan", actors: ["Christian Bale", "Heath Ledger"], poster: "https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODUxN15BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX300.jpg", owned: false },
  { id: 5, name: "Jurassic Park", year: 1993, runtime: 127, categories: ["Adventure", "Sci-Fi"], director: "Steven Spielberg", actors: ["Sam Neill", "Laura Dern"], poster: "https://ia.media-imdb.com/images/M/MV5BMjM2MDg3NjctN2U3OC00OTg0LWEwYWMtZDEwNWQwMjU1ZjZlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg", owned: false },
  { id: 6, name: "Mission: Impossible", year: 1996, runtime: 110, categories: ["Action", "Adventure"], director: "Brian De Palma", actors: ["Tom Cruise", "Jon Voight"], poster: "https://ia.media-imdb.com/images/M/MV5BYzI1YzAyNzctZTI5OS00MjViLTljYWQtZWE5YzVjMzljZGE4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },
  { id: 7, name: "Die Hard", year: 1988, runtime: 131, categories: ["Action", "Thriller"], director: "John McTiernan", actors: ["Bruce Willis", "Alan Rickman"], poster: "https://ia.media-imdb.com/images/M/MV5BZjdkODU4MzctYzc5Ni00YTkyLTg1MjItMWQ4YjA1YWM5ZGU1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", owned: false },
  { id: 8, name: "Raiders of the Lost Ark", year: 1981, runtime: 115, categories: ["Action", "Adventure"], director: "Steven Spielberg", actors: ["Harrison Ford", "Karen Allen"], poster: "https://ia.media-imdb.com/images/M/MV5BMjAxNDA3Nzk5MV5BMl5BanBnXkFtZTcwNzA2NzE0Mw@@._V1_SX300.jpg", owned: false },
  { id: 9, name: "Terminator 2", year: 1991, runtime: 137, categories: ["Action", "Sci-Fi"], director: "James Cameron", actors: ["Arnold Schwarzenegger", "Laurence Fishburne"], poster: "https://ia.media-imdb.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },
  { id: 10, name: "The Avengers", year: 2012, runtime: 143, categories: ["Action", "Adventure", "Sci-Fi"], director: "Joss Whedon", actors: ["Robert Downey Jr.", "Chris Evans"], poster: "https://ia.media-imdb.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmY2FmNzdhZjU4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", owned: false },

  // DRAMA
  { id: 11, name: "The Shawshank Redemption", year: 1994, runtime: 142, categories: ["Drama"], director: "Frank Darabont", actors: ["Tim Robbins", "Morgan Freeman"], poster: "https://ia.media-imdb.com/images/M/MV5BNDE3ODcyODMtY2YzZC00NmNhLWJmIjgtNTA4NzVmNzQwYTkwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", owned: false },
  { id: 12, name: "Forrest Gump", year: 1994, runtime: 142, categories: ["Drama", "Romance"], director: "Robert Zemeckis", actors: ["Tom Hanks", "Sally Field"], poster: "https://ia.media-imdb.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Ym9hLWNmMjctMzVmZDkwMjU4ZjZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },
  { id: 13, name: "The Godfather", year: 1972, runtime: 175, categories: ["Crime", "Drama"], director: "Francis Ford Coppola", actors: ["Marlon Brando", "Al Pacino"], poster: "https://ia.media-imdb.com/images/M/MV5BM2MyNjYxNmUtYTAwNC00MTYxLWJmNjAtYzM0M2U0ZjUwMTljXkEyXkFqcGdeQXVyNzU1OTQwMTI@._V1_SX300.jpg", owned: false },
  { id: 14, name: "Pulp Fiction", year: 1994, runtime: 154, categories: ["Crime", "Drama"], director: "Quentin Tarantino", actors: ["John Travolta", "Uma Thurman"], poster: "https://ia.media-imdb.com/images/M/MV5BNjQ3NWQwMzItMzAwYy00ODk0LTg4YjYtODI5ZjA4YTljMGQ0XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },
  { id: 15, name: "Titanic", year: 1997, runtime: 194, categories: ["Drama", "Romance"], director: "James Cameron", actors: ["Leonardo DiCaprio", "Kate Winslet"], poster: "https://ia.media-imdb.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZDZhLWJGY2EtYzUyMDAxODg3NTk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", owned: false },
  { id: 16, name: "The Green Mile", year: 1999, runtime: 189, categories: ["Crime", "Drama"], director: "Frank Darabont", actors: ["Tom Hanks", "Michael Clarke Duncan"], poster: "https://ia.media-imdb.com/images/M/MV5BMTUxMzc0OTExOF5BMl5BanBnXkFtZTYwOTAyODU2._V1_SX300.jpg", owned: false },
  { id: 17, name: "Schindler's List", year: 1993, runtime: 195, categories: ["Biography", "Drama"], director: "Steven Spielberg", actors: ["Liam Neeson", "Ralph Fiennes"], poster: "https://ia.media-imdb.com/images/M/MV5BNDE4OTcxODc0OV5BMl5BanBnXkFtZTcwNDEzNDg3Mg@@._V1_SX300.jpg", owned: false },
  { id: 18, name: "Gladiator", year: 2000, runtime: 155, categories: ["Action", "Drama"], director: "Ridley Scott", actors: ["Russell Crowe", "Joaquin Phoenix"], poster: "https://ia.media-imdb.com/images/M/MV5BMDljNTQ5OWEtMTVjOC00ZWQzLWEyMmYtMDg2N2Y0YzhlMWVlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },
  { id: 19, name: "The Pursuit of Happyness", year: 2006, runtime: 117, categories: ["Biography", "Drama"], director: "Gabriele Muccino", actors: ["Will Smith", "Jaden Smith"], poster: "https://ia.media-imdb.com/images/M/MV5BMTQ5NjA3MzI0OV5BMl5BanBnXkFtZTcwNTcyNzUzMw@@._V1_SX300.jpg", owned: false },
  { id: 20, name: "Good Will Hunting", year: 1997, runtime: 126, categories: ["Drama"], director: "Gus Van Sant", actors: ["Matt Damon", "Ben Affleck"], poster: "https://ia.media-imdb.com/images/M/MV5BOTI0MzcwNzc0MV5BMl5BanBnXkFtZTcwMzQ0MzQzMQ@@._V1_SX300.jpg", owned: false },

  // ROMANCE
  { id: 21, name: "The Notebook", year: 2004, runtime: 123, categories: ["Drama", "Romance"], director: "Nick Cassavetes", actors: ["Rachel McAdams", "Ryan Gosling"], poster: "https://ia.media-imdb.com/images/M/MV5BMTk3OTM5Njg0NV5BMl5BanBnXkFtZTcwMzQ0MzQzMQ@@._V1_SX300.jpg", owned: false },
  { id: 22, name: "Pride and Prejudice", year: 2005, runtime: 127, categories: ["Drama", "Romance"], director: "Joe Wright", actors: ["Keira Knightley", "Matthew Macfadyen"], poster: "https://ia.media-imdb.com/images/M/MV5BMjE5NzQ4NjkwNl5BMl5BanBnXkFtZTcwMTcyNzUzMw@@._V1_SX300.jpg", owned: false },
  { id: 23, name: "A Beautiful Mind", year: 2001, runtime: 135, categories: ["Biography", "Drama"], director: "Ron Howard", actors: ["Russell Crowe", "Ed Harris"], poster: "https://ia.media-imdb.com/images/M/MV5BMzcyYWFhNzctZjAyOS00NmVkLWFmZTgtYzc2MWI4MzA2Nzk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", owned: false },

  // COMEDY
  { id: 24, name: "Forrest Gump", year: 1994, runtime: 142, categories: ["Comedy", "Drama"], director: "Robert Zemeckis", actors: ["Tom Hanks", "Sally Field"], poster: "https://ia.media-imdb.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Ym9hLWNmMjctMzVmZDkwMjU4ZjZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },
  { id: 25, name: "The Grand Budapest Hotel", year: 2014, runtime: 99, categories: ["Adventure", "Comedy"], director: "Wes Anderson", actors: ["Ralph Fiennes", "Tony Revolori"], poster: "https://ia.media-imdb.com/images/M/MV5BMzM5NzUyOTg0Nl5BMl5BanBnXkFtZTgwNzU3ODEzNTE@._V1_SX300.jpg", owned: false },
  { id: 26, name: "Back to the Future", year: 1985, runtime: 116, categories: ["Adventure", "Comedy", "Sci-Fi"], director: "Robert Zemeckis", actors: ["Michael J. Fox", "Christopher Lloyd"], poster: "https://ia.media-imdb.com/images/M/MV5BZjc2MzU0ZWYtMjZjMC00OWUyLWI4N2QtYzFkMzMwZGM5ZTdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", owned: false },
  { id: 27, name: "The Pink Panther", year: 1963, runtime: 115, categories: ["Comedy", "Crime"], director: "Blake Edwards", actors: ["Peter Sellers", "David Niven"], poster: "https://ia.media-imdb.com/images/M/MV5BMTU3Nzk4NzA4M15BMl5BanBnXkFtZTgwODAwMzk1MTE@._V1_SX300.jpg", owned: false },
  { id: 28, name: "Mrs. Doubtfire", year: 1993, runtime: 125, categories: ["Comedy", "Family"], director: "Chris Columbus", actors: ["Robin Williams", "Sally Field"], poster: "https://ia.media-imdb.com/images/M/MV5BMTk0MjEzODc0OV5BMl5BanBnXkFtZTcwNDIzNjY2Ng@@._V1_SX300.jpg", owned: false },

  // ANIMATION
  { id: 29, name: "The Lion King", year: 1994, runtime: 88, categories: ["Animation", "Adventure"], director: "Roger Allers", actors: ["James Earl Jones", "Jeremy Irons"], poster: "https://ia.media-imdb.com/images/M/MV5BYTYxNGMyNWYtMjE3MS00MzNjLWFjNmYtMDk3N2FmNGU1NjkxXkEyXkFqcGdeQXVyNjY5NDk5NTA@._V1_SX300.jpg", owned: false },
  { id: 30, name: "Frozen", year: 2013, runtime: 102, categories: ["Animation", "Adventure", "Family"], director: "Chris Buck", actors: ["Kristen Bell", "Idina Menzel"], poster: "https://ia.media-imdb.com/images/M/MV5BZTA1NjE4YzEtNTBhOC00MDc3LTk1ZDYtMTk4YjI3NDVhODJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", owned: false },
  { id: 31, name: "Finding Nemo", year: 2003, runtime: 100, categories: ["Animation", "Adventure", "Family"], director: "Andrew Stanton", actors: ["Albert Brooks", "Ellen DeGeneres"], poster: "https://ia.media-imdb.com/images/M/MV5BZTZjNzEyOTEtMDZkYS00NzU1LWE3ZDAtMWQ0NjZlNDEwYTEwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },
  { id: 32, name: "Toy Story", year: 1995, runtime: 81, categories: ["Animation", "Adventure", "Comedy"], director: "John Lasseter", actors: ["Tom Hanks", "Tim Allen"], poster: "https://ia.media-imdb.com/images/M/MV5BMjExNzk5NzU0NV5BMl5BanBnXkFtZTgwNTA3MzM2NTE@._V1_SX300.jpg", owned: false },
  { id: 33, name: "Shrek", year: 2001, runtime: 90, categories: ["Animation", "Adventure", "Comedy"], director: "Andrew Adamson", actors: ["Mike Myers", "Eddie Murphy"], poster: "https://ia.media-imdb.com/images/M/MV5BOTAwNDU0MjctOTkwNC00YTM0LWFkY2EtNjRmMDkxODA1NDk1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },

  // SCI-FI & FANTASY
  { id: 34, name: "Interstellar", year: 2014, runtime: 169, categories: ["Adventure", "Drama", "Sci-Fi"], director: "Christopher Nolan", actors: ["Matthew McConaughey", "Anne Hathaway"], poster: "https://ia.media-imdb.com/images/M/MV5BZjdkOTU3MDctMzg5Ni00NGE3LWJmNjAtNTA4NzVmNzQwYTkwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },
  { id: 35, name: "Dune", year: 2021, runtime: 156, categories: ["Action", "Adventure", "Drama", "Sci-Fi"], director: "Denis Villeneuve", actors: ["Timothée Chalamet", "Zendaya"], poster: "https://ia.media-imdb.com/images/M/MV5BN2FjNmEtNzUwLWE5NTAtODliYi00YTg2LWFhZTEtZTU3NGVjMGE3OTczXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg", owned: false },
  { id: 36, name: "The Lord of the Rings", year: 2001, runtime: 178, categories: ["Adventure", "Drama", "Fantasy"], director: "Peter Jackson", actors: ["Elijah Wood", "Ian McKellen"], poster: "https://ia.media-imdb.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2ZkMzkxNTg5XkEyXkFqcGdeQXVyNzEzOTMwMjQ@._V1_SX300.jpg", owned: false },
  { id: 37, name: "Harry Potter and the Sorcerer's Stone", year: 2001, runtime: 152, categories: ["Adventure", "Family", "Fantasy"], director: "Chris Columbus", actors: ["Daniel Radcliffe", "Rupert Grint"], poster: "https://ia.media-imdb.com/images/M/MV5BMjMxODIyNzEzMV5BMl5BanBnXkFtZTcwODg0OTY0Mw@@._V1_SX300.jpg", owned: false },
  { id: 38, name: "The Matrix Reloaded", year: 2003, runtime: 138, categories: ["Action", "Sci-Fi"], director: "The Wachowskis", actors: ["Keanu Reeves", "Laurence Fishburne"], poster: "https://ia.media-imdb.com/images/M/MV5BOTA2MzQxNzYwMl5BMl5BanBnXkFtZTcwNzA2NzE0Mw@@._V1_SX300.jpg", owned: false },
  { id: 39, name: "The Fifth Element", year: 1997, runtime: 126, categories: ["Action", "Adventure", "Sci-Fi"], director: "Luc Besson", actors: ["Bruce Willis", "Milla Jovovich"], poster: "https://ia.media-imdb.com/images/M/MV5BVmY0MmE4NjMtNWE5Ni00ZTAyLWE4YjItYTkyOTkwMWY0YjE3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", owned: false },

  // THRILLER & HORROR
  { id: 40, name: "The Silence of the Lambs", year: 1991, runtime: 118, categories: ["Crime", "Drama", "Thriller"], director: "Jonathan Demme", actors: ["Jodie Foster", "Anthony Hopkins"], poster: "https://ia.media-imdb.com/images/M/MV5BNDg1MzcyNmEtMjBkNS00NTA4LTg2NTItOWJhNzBkZGQxZWM0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", owned: false },
  { id: 41, name: "The Sixth Sense", year: 1999, runtime: 107, categories: ["Drama", "Thriller"], director: "M. Night Shyamalan", actors: ["Bruce Willis", "Haley Joel Osment"], poster: "https://ia.media-imdb.com/images/M/MV5BMWM4NTFhYjctNzAxNC00NWJmLTk0MzAtMDNhNmZlNzk4OGY1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", owned: false },
  { id: 42, name: "Jaws", year: 1975, runtime: 124, categories: ["Adventure", "Thriller"], director: "Steven Spielberg", actors: ["Roy Scheider", "Robert Shaw"], poster: "https://ia.media-imdb.com/images/M/MV5BMmY4YWQwNzEtNTA3OC00YTY1LTk4ZDAtNTUyNDA0YTEzMzA1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", owned: false },
  { id: 43, name: "The Ring", year: 2002, runtime: 115, categories: ["Horror", "Mystery", "Thriller"], director: "Gore Verbinski", actors: ["Naomi Watts", "Martin Henderson"], poster: "https://ia.media-imdb.com/images/M/MV5BMTkyNjg1MjA1Ml5BMl5BanBnXkFtZTcwMDA0MzQzMQ@@._V1_SX300.jpg", owned: false },
  { id: 44, name: "The Exorcist", year: 1973, runtime: 132, categories: ["Horror"], director: "William Friedkin", actors: ["Ellen Burstyn", "Max von Sydow"], poster: "https://ia.media-imdb.com/images/M/MV5BN2EwY2ZkMmYtNGY3Ni00YjkwLTkyNWYtZmE0N2E0YmI0NDJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", owned: false },

  // MUSICALS & FAMILY
  { id: 45, name: "The Sound of Music", year: 1965, runtime: 174, categories: ["Biography", "Drama", "Family", "Musical"], director: "Robert Wise", actors: ["Julie Andrews", "Christopher Plummer"], poster: "https://ia.media-imdb.com/images/M/MV5BYzk1MjczYTMtOTAwOC00ZTk4LWE4YTAtNzBmNzE3Y2NmYjRjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },
  { id: 46, name: "Cinderella", year: 1950, runtime: 74, categories: ["Animation", "Family", "Fantasy"], director: "Clyde Geronimi", actors: ["Ilene Woods", "James MacDonald"], poster: "https://ia.media-imdb.com/images/M/MV5BODk0Njc2YzItYWE0YS00MzJhLWEyNzktZWU0YjQwNTZkNTdjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", owned: false },

  // DOCUMENTARIES & BIOPICS
  { id: 47, name: "The Wolf of Wall Street", year: 2013, runtime: 180, categories: ["Biography", "Comedy", "Crime"], director: "Martin Scorsese", actors: ["Leonardo DiCaprio", "Jonah Hill"], poster: "https://ia.media-imdb.com/images/M/MV5BMjIyMjEyMTU0MV5BMl5BanBnXkFtZTcwNDk3ODg1OQ@@._V1_SX300.jpg", owned: false },
  { id: 48, name: "Hidden Figures", year: 2016, runtime: 127, categories: ["Biography", "Drama"], director: "Theodore Melfi", actors: ["Taraji P. Henson", "Octavia Spencer"], poster: "https://ia.media-imdb.com/images/M/MV5BMTg5MzY3MTQtYjIxYS00YjM1LTk3MmEtZjkxZDJjODU5OTExXkEyXkFqcGdeQXVyMTg4NDc2NzI@._V1_SX300.jpg", owned: false },
  { id: 49, name: "Bohemian Rhapsody", year: 2018, runtime: 135, categories: ["Biography", "Drama", "Music"], director: "Bryan Singer", actors: ["Rami Malek", "Lucy Boynton"], poster: "https://ia.media-imdb.com/images/M/MV5BMTU4NDk0MzEtODk0Ni00ZDI5LWJmOTgtOWY3OTdmZDMzNzgxXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg", owned: false },
];

// Función para buscar película por nombre
export const searchMovieByName = (query) => {
  if (!query) return null;
  const lowerQuery = query.toLowerCase().trim();
  return expandedMoviesDatabase.find(movie => 
    movie.name.toLowerCase().includes(lowerQuery)
  );
};

// Función para buscar múltiples películas
export const searchMovies = (query) => {
  if (!query) return [];
  const lowerQuery = query.toLowerCase().trim();
  return expandedMoviesDatabase.filter(movie =>
    movie.name.toLowerCase().includes(lowerQuery)
  );
};

// Función para obtener películas marcadas como propias
export const getOwnedMovies = () => {
  return expandedMoviesDatabase.filter(movie => movie.owned === true);
};

// Función para marcar/desmarcar una película
export const toggleMovieOwned = (movieId) => {
  const movie = expandedMoviesDatabase.find(m => m.id === movieId);
  if (movie) {
    movie.owned = !movie.owned;
    return true;
  }
  return false;
};

export default expandedMoviesDatabase;
