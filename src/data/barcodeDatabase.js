// 📀 Base de Datos Local de Códigos de Barras para DVDs
// Expande esta lista con los códigos de tus DVDs

export const barcodeDatabase = {
  // Formato: 'código_de_barras': 'Título de la Película'
  
  // Películas Populares (Ejemplos)
  '8414533010795': 'Avatar',
  '031398134626': 'The Matrix',
  
  // Agrega tus códigos aquí:
  // '123456789012': 'Título de tu película',
  // '123456789013': 'Otra película',
  
  // Notas:
  // - Los códigos deben ser strings (texto)
  // - El título debe ser exacto (como aparece en IMDb)
  // - Cuando agregues un código, la app lo buscará automáticamente
};

// Función para buscar en la base de datos local
export const searchBarcodeLocally = (barcode) => {
  return barcodeDatabase[barcode] || null;
};

// Función para agregar nuevos códigos
export const addBarcodeMapping = (barcode, title) => {
  barcodeDatabase[barcode] = title;
  console.log(`✅ Código agregado: ${barcode} → ${title}`);
};

// Función para obtener todos los códigos registrados
export const getAllBarcodes = () => {
  return Object.entries(barcodeDatabase).map(([code, title]) => ({
    barcode: code,
    title
  }));
};
