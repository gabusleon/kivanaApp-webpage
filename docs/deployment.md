# Proceso y configuración de despliegue

Este documento describe la configuración de despliegue del sitio web público de Kivana mediante GitHub Pages y GitHub Actions.

---

## Plataforma de despliegue

El sitio web público de Kivana se despliega como un sitio estático en **GitHub Pages** mediante un workflow automatizado de **GitHub Actions**.

---

## Workflow de despliegue

La automatización se encuentra definida en:

* **Workflow:** `.github/workflows/deploy.yml`

### Disparadores

El workflow puede ejecutarse bajo las siguientes condiciones:

1. **Automático:** cuando se realiza un `push` a la rama principal (`main`).
2. **Manual:** mediante `workflow_dispatch` desde la interfaz de GitHub Actions.

---

## Etapas del proceso

El workflow consta de dos jobs principales.

### 1. Job `build`

Responsable de preparar la versión de producción del sitio.

* **Entorno:** `ubuntu-latest`
* **Obtención del código:** `actions/checkout@v6`
* **Compilación:** `withastro/action@v6`

La compilación genera los archivos estáticos de producción del proyecto Astro.

### 2. Job `deploy`

Responsable de publicar los archivos generados en GitHub Pages.

* **Entorno:** `ubuntu-latest`
* **Dependencia:** requiere que el job `build` finalice correctamente.
* **Entorno de GitHub:** `github-pages`
* **Publicación:** `actions/deploy-pages@v5`

---

## Permisos y autenticación

El workflow utiliza los mecanismos de autenticación proporcionados por GitHub Actions y OIDC para realizar el despliegue, sin almacenar claves privadas ni tokens personales en el repositorio.

Los permisos configurados incluyen:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

* `contents: read`: permite al workflow acceder al código del repositorio.
* `pages: write`: permite publicar el sitio en GitHub Pages.
* `id-token: write`: permite utilizar autenticación mediante OIDC.

---

## Configuración necesaria

Para que el despliegue funcione correctamente, la configuración de GitHub Pages y de Astro debe corresponder al repositorio y entorno utilizados en producción.

### GitHub Pages

En el repositorio:

1. Acceder a **Settings → Pages**.
2. En **Build and deployment → Source**, seleccionar **GitHub Actions**.

### Configuración de Astro

En `astro.config.mjs`, verificar que los valores de:

* `site`
* `base`

correspondan al dominio y ruta utilizados por el sitio en producción.

Esto es especialmente importante cuando el proyecto se publica bajo una ruta de repositorio de GitHub Pages.

---

## Despliegue manual

Además del despliegue automático, el workflow puede ejecutarse manualmente mediante `workflow_dispatch` desde la sección **Actions** del repositorio.

---

## Salida de producción

El comando:

```bash
npm run build
```

genera la versión estática de producción en:

```text
dist/
```

Estos archivos constituyen la salida que puede ser publicada por una plataforma compatible con sitios estáticos.

---

## Plataformas de alojamiento alternativas

La salida generada en `dist/` puede servirse mediante otras plataformas o servidores compatibles con sitios estáticos, como:

* NGINX
* Apache
* Vercel
* Netlify
* Cloudflare Pages
* AWS S3 / CloudFront

La configuración oficial del proyecto, sin embargo, está orientada a **GitHub Pages**.
