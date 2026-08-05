// 📀 Base de Datos de DVDs con Códigos de Barras Reales
// Esta es una base de datos comunitaria que se construye con el tiempo

export const dvdDatabase = {
  // Formato: 'código_de_barras': { título, año, actores, género, sinopsis }
  
  // Ejemplos iniciales (agregaremos más)
  '8414533010795': {
    titulo: 'Avatar',
    año: 2009,
    actores: 'Sam Worthington, Zoe Saldana, Stephen Lang',
    genre: 'Ficción Científica, Aventura',
    edad: 'PG-13',
    sinopsis: 'Un parapléjico de Guerra de Mentes se convierte en guerrero.',
    caratula: 'https://m.media-amazon.com/images/M/MV5BMjEyOTYzOTY0NV5BMl5BanBnXkFtZTcwOTAyNDI3OA@@._V1_SX300.jpg'
  },
  
  '031398134626': {
    titulo: 'The Matrix',
    año: 1999,
    actores: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
    genre: 'Ficción Científica, Acción',
    edad: 'R',
    sinopsis: 'Un hacker descubre la realidad y se une a una rebelión.',
    caratula: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTAwLWI5ZTUtMTY4ZmQ3MjUyODRlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
  },

  // AQUÍ AGREGA TUS CÓDIGOS:
  // '1234567890': {
  //   titulo: 'Nombre de la película',
  //   año: 2020,
  //   actores: 'Actor 1, Actor 2',
  //   genre: 'Género',
  //   edad: 'PG-13',
  //   sinopsis: 'Sinopsis corta...',
  //   caratula: 'https://...'
  // }
};

// Función para buscar DVD por código de barras
export const searchDVDByBarcode = (barcode) => {
  return dvdDatabase[barcode] || null;
};

// Función para agregar un nuevo DVD
export const addDVDBarcode = (barcode, dvdInfo) => {
  dvdDatabase[barcode] = dvdInfo;
  console.log(`✅ DVD agregado: ${barcode} → ${dvdInfo.titulo}`);
};

// Función para obtener todos los códigos registrados
export const getAllRegisteredBarcodes = () => {
  return Object.keys(dvdDatabase);
};

// Función para validar si un código existe
export const barcodeExists = (barcode) => {
  return barcode in dvdDatabase;
};

