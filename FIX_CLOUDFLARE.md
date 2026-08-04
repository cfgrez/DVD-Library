# 🔧 Solución: Error de Deploy en Cloudflare Pages

## ❌ Problema Detectado

```
✘ [ERROR] The version of Vite used in the project ("5.4.21") 
cannot be automatically configured. Please update the Vite version 
to at least "6.0.0" and try again.
```

**Causa**: Cloudflare está intentando usar `wrangler deploy` (Workers) en lugar de `npm run build` (Pages)

---

## ✅ Solución Rápida (5 pasos)

### Paso 1: En Cloudflare Dashboard

1. Ve a **Pages** → Tu proyecto **dvd-library**
2. Selecciona **Settings** en la barra de arriba
3. Ve a **Build & Deployments**

### Paso 2: Configurar el Comando de Build

Busca **Build settings** y modifica:

| Campo | Valor Correcto |
|-------|---|
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` |

⚠️ **IMPORTANTE**: El build command debe ser **exactamente** `npm run build`

### Paso 3: Eliminar Variables de Entorno Innecesarias

En la misma página, ve a **Environment variables**:
- Si hay variables que mencionan `wrangler` → Elimínalas
- Deja vacío (sin variables de entorno)

### Paso 4: Limpiar Caché

1. Ve a **Deployments**
2. En el deployment fallido, busca un botón que diga "Redeploy" o "Retry"
3. Haz clic en él

### Paso 5: Verificar el Despliegue

Espera a que termine. Deberías ver:
- ✅ Build: Success
- ✅ Deploy: Success

---

## 🚀 Si Eso No Funciona

### Opción A: Trigger Manual

1. Push un cambio pequeño a GitHub:
```bash
git commit --allow-empty -m "Trigger rebuild"
git push origin main
```

Cloudflare detectará el cambio y recompilará automáticamente.

### Opción B: Reconfigurar Desde Cero

1. En Cloudflare Pages:
   - Selecciona tu proyecto
   - **Settings** → **Build & Deployments**
   - Haz clic en el icono de **X** para desconectar de Git

2. Reconecta:
   - **+ Add project** → **Connect to Git**
   - Selecciona el repositorio nuevamente
   - Asegúrate de configurar exactamente:
     - Build command: `npm run build`
     - Output directory: `dist`

3. Haz clic en **Deploy**

---

## 📋 Checklist de Verificación

- [ ] Build command es `npm run build` (no `npm run build && npm run deploy`)
- [ ] Output directory es `dist`
- [ ] No hay variables de entorno innecesarias
- [ ] El archivo `package.json` tiene los scripts:
  ```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
  ```
- [ ] El archivo `vite.config.js` existe y es válido
- [ ] El archivo `index.html` existe en la raíz

---

## 🧪 Verificar Localmente (Opcional)

Para estar seguro de que funciona:

```bash
# 1. Limpiar dependencias
rm -rf node_modules bun.lockb

# 2. Reinstalar
npm install

# 3. Compilar localmente
npm run build

# 4. Ver el resultado
ls -la dist/
# Debería mostrar: index.html, index.js, etc.
```

Si todo funciona localmente, funcionará en Cloudflare.

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué dice "wrangler"?**  
R: Cloudflare automáticamente detectó Vite y asumió que era un Worker. Pages usa una configuración diferente.

**P: ¿Necesito un archivo wrangler.toml?**  
R: Cloudflare Pages lo ignora. El archivo que importa es `package.json`.

**P: ¿Por qué sigue fallando?**  
R: Verifica que tu `package.json` tenga exactamente:
```json
"build": "vite build"
```

**P: ¿Cuánto tarda el deploy?**  
R: Entre 2-5 minutos normalmente.

---

## 🔗 Recursos Útiles

- Documentación oficial: https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite-project/
- Troubleshooting: https://developers.cloudflare.com/pages/troubleshooting/

---

**Si sigue fallando después de estos pasos, contacta a Cloudflare Support con el error exacto.**
