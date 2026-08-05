# 📀 Mi Biblioteca de DVD

Una aplicación web moderna para catalogar, organizar y gestionar tu colección de DVDs. Busca por código de barras, clasifica por título, año, región, género, clasificación de edad y más.

## ✨ Características

- **Búsqueda por código de barras**: Ingresa el código de barras o el título de la película para buscar automáticamente en la base de datos de OMDb
- **Catalogación completa**: Almacena título, año, región/zona, género, clasificación de edad, actores y foto de carátula
- **Clasificación flexible**: Ordena por título, año, género, clasificación de edad o fecha de adición
- **Filtrado por género**: Filtra tu biblioteca para ver solo las películas que te interesan
- **Almacenamiento local**: Los datos se guardan automáticamente en el navegador (localStorage)
- **Exportación/Importación**: Descarga tu biblioteca como JSON para hacer copias de seguridad o compartir
- **Interfaz responsive**: Funciona perfectamente en escritorio, tablet y teléfono
- **Diseño moderno**: Interfaz elegante con tema oscuro y animaciones suaves

## 🚀 Inicio Rápido

### Requisitos
- Node.js 16+
- npm o yarn

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/dvd-library.git
cd dvd-library
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

4. **Compilar para producción**
```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## 🌐 Desplegar en Cloudflare Pages

### Opción 1: Mediante Git (Recomendado)

1. **Pushear a GitHub**
```bash
git init
git add .
git commit -m "Initial commit: DVD Library app"
git branch -M main
git remote add origin https://github.com/tu-usuario/dvd-library.git
git push -u origin main
```

2. **Conectar a Cloudflare Pages**
   - Ir a [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Seleccionar "Pages" en el menú lateral
   - Hacer clic en "Create a project" → "Connect to Git"
   - Seleccionar tu repositorio
   - Configurar el build:
     - **Framework preset**: Vite
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Hacer clic en "Save and Deploy"

Cloudflare desplegará automáticamente tu aplicación en cada push a `main`.

### Opción 2: Despliegue Manual

1. **Compilar localmente**
```bash
npm run build
```

2. **Instalar Wrangler CLI**
```bash
npm install -g wrangler
```

3. **Autenticarse con Cloudflare**
```bash
wrangler login
```

4. **Desplegar**
```bash
wrangler pages deploy dist/
```

## 📖 Cómo Usar

### Agregar un DVD

1. Haz clic en **"+ Agregar DVD"**
2. **Opción A - Búsqueda automática**:
   - Ingresa el código de barras o el título de la película
   - Haz clic en "🔍 Buscar"
   - La aplicación buscará en la base de datos de OMDb y rellenará automáticamente los datos
3. **Opción B - Entrada manual**:
   - Si la búsqueda falla, completa los campos manualmente
   - Asegúrate de ingresar al menos el título
4. Haz clic en "✓ Agregar DVD a la Biblioteca"

### Gestionar tu Biblioteca

- **Ordenar**: Usa el dropdown "Ordenar por" para cambiar el orden de la biblioteca
- **Filtrar**: Selecciona un género en "Filtrar por género" para ver solo esas películas
- **Ver detalles**: Haz clic en la flecha para expandir y ver información completa de un DVD
- **Eliminar**: Haz clic en el ícono de papelera para eliminar un DVD

### Exportar e Importar

- **Exportar**: Haz clic en "⚙️ Opciones" → "Exportar JSON" para descargar tu biblioteca
- **Importar**: Haz clic en "⚙️ Opciones" → "Importar JSON" para restaurar una copia de seguridad

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework UI
- **Vite**: Herramienta de build rápida
- **OMDb API**: Para búsqueda de películas
- **localStorage**: Para almacenamiento persistente
- **CSS3**: Estilos modernos con degradados y animaciones
- **Cloudflare Pages**: Hosting gratuito

## 📝 Estructura del Proyecto

```
dvd-library/
├── src/
│   ├── components/
│   │   ├── DVDForm.jsx       # Formulario para agregar DVDs
│   │   └── DVDLibrary.jsx    # Grid de DVDs
│   ├── App.jsx               # Componente principal
│   ├── App.css               # Estilos
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── index.html                # Archivo HTML base
├── package.json              # Dependencias
├── vite.config.js            # Configuración de Vite
├── .gitignore                # Git ignore
└── README.md                 # Este archivo
```

## 🔐 Privacidad y Seguridad

- **Datos locales**: Tu biblioteca se almacena solo en tu navegador (localStorage)
- **Sin servidor**: No se envían datos a un servidor externo
- **OMDb API**: Solo se consulta la API de OMDb para búsqueda de películas (llave gratuita)
- **Exportación segura**: Puedes exportar tu biblioteca en cualquier momento como backup

## 🐛 Solución de Problemas

### La búsqueda no funciona
- Verifica tu conexión a Internet
- La API de OMDb tiene un límite de 1000 peticiones/día (plan gratuito)
- Intenta ingresando el título exacto de la película

### Los datos no se guardan
- Verifica que localStorage esté habilitado en tu navegador
- Abre la consola (F12) para ver si hay errores
- Intenta limpiar la caché del navegador

### Problemas de despliegue en Cloudflare Pages
- Verifica que el comando de build sea: `npm run build`
- El directorio de salida debe ser: `dist`
- Asegúrate de tener un archivo `package.json` en la raíz

## 📄 Licencia

MIT - Siéntete libre de usar esta aplicación personal o comercialmente.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Soporte

Si encuentras algún problema o tienes sugerencias, abre un issue en GitHub.

---

**Disfruta catalogando tu colección de DVDs** 🎬📀
