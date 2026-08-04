# 🚀 Guía de Despliegue en Cloudflare Pages

Esta guía te lleva paso a paso por el proceso de desplegar tu aplicación de Biblioteca de DVD en Cloudflare Pages de forma **totalmente gratuita**.

## Requisitos Previos

- Cuenta de GitHub (gratis)
- Cuenta de Cloudflare (gratis)
- Node.js 16+ instalado localmente

## Paso 1: Preparar tu Repositorio GitHub

### 1.1 Si ya tienes Git instalado:

```bash
# Ve a la carpeta del proyecto
cd dvd-library

# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "Initial commit: DVD Library application"

# Cambia el nombre de la rama a main
git branch -M main
```

### 1.2 Crear un repositorio nuevo en GitHub

1. Ve a [GitHub.com](https://github.com/new)
2. Ingresa el nombre: `dvd-library`
3. Selecciona "Private" o "Public" según prefieras
4. **NO** inicialices con README (ya lo tenemos)
5. Haz clic en "Create repository"

### 1.3 Conectar con GitHub

Después de crear el repositorio, GitHub te mostrará comandos. Copia y ejecuta:

```bash
git remote add origin https://github.com/TU-USUARIO/dvd-library.git
git branch -M main
git push -u origin main
```

Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

## Paso 2: Conectar Cloudflare Pages a tu Repositorio

### 2.1 Acceder a Cloudflare

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Si no tienes cuenta, crea una (es gratis)
3. En el panel izquierdo, selecciona **"Pages"**

### 2.2 Crear nuevo proyecto

1. Haz clic en **"Create a project"**
2. Selecciona **"Connect to Git"**
3. Autoriza a Cloudflare acceder a tu cuenta de GitHub
4. Selecciona el repositorio `dvd-library`
5. Selecciona rama: `main`

### 2.3 Configurar build

En la pantalla de configuración, asegúrate que esté:

| Campo | Valor |
|-------|-------|
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (por defecto) |
| **Environment variables** | (dejar vacío) |

Haz clic en **"Save and Deploy"**

### 2.4 Esperar el despliegue

Cloudflare compilará y desplegará tu aplicación automáticamente. Verás:
- Estatus en progreso (azul)
- Luego éxito (verde) cuando termine

## Paso 3: Acceder a tu Aplicación

Una vez completado el despliegue:

1. Verás una URL como: `https://dvd-library.pages.dev`
2. Haz clic en ella para abrir tu aplicación
3. **¡Tu biblioteca de DVD está lista!**

## Paso 4: Cambiar el Dominio (Opcional)

Si tienes un dominio propio:

1. Ve a **Settings** en tu proyecto de Pages
2. En **Custom domains**, haz clic en **"Add custom domain"**
3. Ingresa tu dominio (ej: `dvds.tudominio.com`)
4. Sigue las instrucciones para apuntar el DNS

## Actualizaciones Futuras

Cloudflare desplegará automáticamente cualquier cambio que hagas:

```bash
# Hacer cambios locales
# Luego:
git add .
git commit -m "Descripción de cambios"
git push origin main

# ¡Cloudflare desplegará automáticamente!
```

## Solución de Problemas

### El build falla con "npm: not found"
- Verifica que tu proyecto tiene `package.json`
- Asegúrate de que `npm install` funciona localmente

### La aplicación se ve rota en Cloudflare Pages
- Verifica que el archivo `dist/index.html` existe después de `npm run build`
- Confirma que `public/_redirects` está en su lugar

### Los datos no persisten
- Los datos se guardan en localStorage del navegador
- Usa la función "Exportar JSON" para hacer backup
- Cuando importes, copia el archivo JSON

### La API de OMDb no funciona
- Verifica tu conexión a Internet
- La búsqueda funciona sin API key en modo básico
- Si necesitas más búsquedas, consigue una API key en [OMDb API](http://www.omdbapi.com/apikey.aspx)

## Configuración Avanzada

### Usar una API Key de OMDb propia

1. Ve a [OMDb API](http://www.omdbapi.com/apikey.aspx)
2. Obtén una API key gratuita
3. En tu proyecto de Cloudflare Pages, ve a **Settings** → **Environment variables**
4. Agrega:
   - Variable name: `VITE_OMDB_API_KEY`
   - Value: `tu-api-key-aqui`
5. En `src/components/DVDForm.jsx`, cambia:
```javascript
const OMDb_API_KEY = import.meta.env.VITE_OMDB_API_KEY || 'k_fx7nk87h';
```

### Personalizar el dominio

Cada despliegue tiene una URL automática. Para usar tu propio dominio:

1. Si tienes Cloudflare para tu dominio:
   - Simplemente agrega el dominio en Settings → Custom domains
   - Se configurará automáticamente

2. Si tu dominio no está en Cloudflare:
   - Apunta tu DNS A record a `pages.dev`
   - Luego configura en Cloudflare Pages

## Información Útil

- **Plan de Cloudflare Pages**: Gratuito
- **Límite de compilaciones**: 500/mes (más que suficiente)
- **Almacenamiento**: Ilimitado
- **Ancho de banda**: Ilimitado
- **SSL/HTTPS**: Incluido automáticamente

## Próximos Pasos

Ahora que tu aplicación está en línea:

1. **Compartir**: Envía el enlace a amigos y familia
2. **Personalizar**: Agrega más funciones según necesites
3. **Hacer backup**: Regularmente exporta tu biblioteca como JSON
4. **Monitorear**: Revisa los logs en Cloudflare si hay problemas

---

**¡Felicidades! Tu biblioteca de DVD está en línea** 🎉🍿
