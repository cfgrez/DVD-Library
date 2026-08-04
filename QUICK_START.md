# ⚡ Inicio Rápido (5 minutos)

## Opción A: Solo Código (Copiar-Pegar)

Si quieres el proyecto listo ya:

```bash
# 1. Clonar este repo
git clone https://github.com/tu-usuario/dvd-library.git
cd dvd-library

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev

# Abre http://localhost:5173 en tu navegador
```

---

## Opción B: Desplegar en Cloudflare (Gratis)

### En 3 pasos:

**Paso 1:** Pushea a GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

**Paso 2:** Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
- Pages → Create a project → Connect to Git
- Selecciona tu repo `dvd-library`

**Paso 3:** Configura:
- Build command: `npm run build`
- Output: `dist`
- Haz clic en Deploy

**¡Listo!** Tu app estará en `https://dvd-library.pages.dev`

---

## Características Principales

✅ Buscar DVD por código de barras  
✅ Ordenar por: Título, Año, Género, Edad  
✅ Filtrar por género  
✅ Guardar automáticamente en el navegador  
✅ Exportar/Importar JSON  
✅ Diseño responsive (móvil, tablet, desktop)  
✅ Totalmente gratuito  

---

## Primeros Pasos en la App

1. **Agregar DVD**: Clic en "+ Agregar DVD"
2. **Buscar**: Ingresa código de barras o título
3. **Completar**: Los datos se llenan automáticamente
4. **Clasificar**: Usa los dropdowns para ordenar/filtrar
5. **Ver detalles**: Haz clic en ↓ para expandir

---

## Preguntas Comunes

**P: ¿Dónde se guardan mis datos?**  
R: En localStorage de tu navegador (seguro, privado, local)

**P: ¿Puedo usar en múltiples dispositivos?**  
R: Exporta JSON en un dispositivo, importa en otro

**P: ¿Cuesta dinero?**  
R: No, todo es gratis (Vite, React, Cloudflare Pages)

**P: ¿Puedo agregar mis propias características?**  
R: Sí, modifica los archivos en `src/`

---

## Archivos Importantes

```
src/
  App.jsx           ← Lógica principal
  components/
    DVDForm.jsx     ← Agregar DVDs
    DVDLibrary.jsx  ← Ver DVDs
  App.css           ← Estilos
```

---

## Comandos Útiles

```bash
npm run dev      # Desarrollo local
npm run build    # Compilar para producción
npm run preview  # Ver la compilación localmente
```

---

**Más ayuda:** Ver `DEPLOY.md` para despliegue detallado, `README.md` para documentación completa.
