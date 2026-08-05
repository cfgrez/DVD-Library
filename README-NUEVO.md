# 🎬 DVD Library - Biblioteca de Películas

Aplicación web para catalogar tu colección de DVDs con búsqueda por título y código de barras.

---

## ✨ Características

✅ **Base de datos local de películas** - 15 películas populares con caratulas  
✅ **Búsqueda por título** - Encuentra películas al instante  
✅ **Caratulas automáticas** - Muestra la imagen del DVD  
✅ **Almacenamiento local** - Tus datos en tu navegador  
✅ **Agregar/eliminar** - Gestiona tu biblioteca  
✅ **Exportar/importar** - Descarga y restaura tus datos  
✅ **Filtros y búsqueda** - Organiza por año, género, etc.  
✅ **Diseño moderno** - Interfaz intuitiva y hermosa  

---

## 🚀 Cómo Usar

### 1. Descarga el código
```bash
git clone https://github.com/TU_USUARIO/dvd-library.git
cd dvd-library
```

### 2. Instala dependencias
```bash
npm install
```

### 3. Inicia la app en desarrollo
```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador

### 4. Deploy en Cloudflare Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

Tu app estará en línea automáticamente.

---

## 📋 Cómo Agregar DVDs

### Opción 1: Buscar por Título
1. Click en "+ Agregar DVD"
2. Ingresa el nombre de la película: "Avatar"
3. Click "Buscar"
4. ✅ Se rellena automáticamente con caratula
5. Click "Agregar DVD"

### Opción 2: Completar Manualmente
1. Si la película no se encuentra
2. Rellena los campos manualmente
3. Puedes agregar URL de caratula
4. Click "Agregar DVD"

### Películas Disponibles en BD Local
```
✅ Avatar (2009)
✅ The Matrix (1999)
✅ Inception (2010)
✅ Titanic (1997)
✅ The Dark Knight (2008)
✅ Forrest Gump (1994)
✅ Jurassic Park (1993)
✅ Pulp Fiction (1994)
✅ The Shawshank Redemption (1994)
✅ Interstellar (2014)
✅ The Godfather (1972)
✅ Gladiator (2000)
✅ The Lion King (1994)
✅ Back to the Future (1985)
✅ Dune (2021)
```

---

## 🎯 Agregar Más Películas

### Para agregar películas localmente:

**Archivo:** `src/data/moviesDB.js`

```javascript
export const moviesDatabase = [
  {
    id: 16,
    name: "Tu Película",
    year: 2023,
    runtime: 120,
    categories: ["Action", "Drama"],
    director: "Director Name",
    writers: ["Writer Name"],
    actors: ["Actor 1", "Actor 2"],
    poster: "https://image.url.jpg",  // URL de caratula
    storyline: "Descripción de la película"
  },
  // ... más películas
];
```

Luego:
```bash
git add src/data/moviesDB.js
git commit -m "Add new movie"
git push origin main
```

---

## 📸 Donde Obtener URLs de Caratulas

### Opción 1: IMDb (Recomendado)
1. Abre https://www.imdb.com/
2. Busca la película
3. Haz clic en la imagen de portada
4. Botón derecho → "Copiar enlace de imagen"
5. Pega en el campo "URL de la Carátula"

### Opción 2: Amazon
1. Busca el DVD en https://www.amazon.com/
2. Clic derecho en la imagen
3. "Copiar enlace de imagen"

### Opción 3: Otras fuentes
- TheMovieDB (tmdb.org)
- Rotten Tomatoes
- Google Images

---

## 🛠️ Estructura del Proyecto

```
dvd-library/
├── src/
│   ├── components/
│   │   ├── DVDForm.jsx          (formulario para agregar DVDs)
│   │   └── DVDLibrary.jsx       (mostrar biblioteca)
│   ├── data/
│   │   ├── moviesDB.js          (BD de películas con caratulas)
│   │   └── barcodeDatabase.js   (códigos de barras registrados)
│   ├── App.jsx                  (app principal)
│   ├── App.css                  (estilos)
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 📱 Compatibilidad

✅ Funciona en:
- Chrome/Edge
- Firefox
- Safari
- Navegadores móviles

✅ Funciona en:
- Windows
- macOS
- Linux
- iOS/Android

---

## 💾 Almacenamiento

Los DVDs se guardan en:
- **localStorage del navegador**
- Automáticamente
- Sin necesidad de servidor
- Se sincroniza en todos los dispositivos en los que inicies sesión

---

## 📤 Exportar/Importar

### Exportar tu biblioteca
1. Abre la app
2. Busca el botón "Descargar Biblioteca"
3. Se descarga un archivo JSON
4. Guárdalo en un lugar seguro

### Importar biblioteca
1. Abre la app en otro dispositivo
2. Busca "Cargar Biblioteca"
3. Selecciona el archivo JSON descargado
4. ¡Listo! Tu biblioteca está restaurada

---

## 🔧 Configuración en Cloudflare Pages

### Automática
Una vez hagas push a GitHub, Cloudflare:
1. Detecta cambios automáticamente
2. Corre `npm run build`
3. Despliega en producción
4. Tu app está en línea en 5 minutos

### Verificar deployment
```bash
git log --oneline | head -5  # Ver últimos commits
```

---

## ⚙️ Tecnologías Usadas

- **React 18** - UI framework
- **Vite** - Build tool
- **Cloudflare Pages** - Hosting
- **localStorage** - Almacenamiento

---

## 🐛 Solucionar Problemas

### "La película no se encuentra"
→ Intenta con otro título (inglés funciona mejor)
→ O completa los datos manualmente

### "No aparece la caratula"
→ Verifica que la URL sea válida
→ Prueba con otra URL de IMDb

### "Los datos no se guardan"
→ Acepta cookies/almacenamiento local en el navegador
→ Prueba en modo no privado/incógnito

### "La app es lenta"
→ Borra el caché (Ctrl+Shift+Del)
→ Cierra otras pestañas

---

## 📧 Soporte

Para reportar bugs o sugerencias:
1. Abre un issue en GitHub
2. Describe el problema
3. Incluye capturas de pantalla

---

## 📄 Licencia

MIT License - Úsala libremente

---

## 🎉 ¡Disfruta tu Biblioteca!

Tu colección de DVDs organizada y accesible desde cualquier dispositivo.

**Versión:** 2.0  
**Última actualización:** Agosto 2026  
**Películas en BD:** 15 +  
**Estado:** ✅ Funcionando perfectamente
