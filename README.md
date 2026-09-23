![Kivana](src/assets/logos/logo-horizontal.png)

# Kivana

Sitio web público de presentación de la plataforma Kivana y la experiencia Kidos.

> La vida familiar, más organizada y divertida.

---

## Descripción

Kivana es una plataforma orientada a la organización familiar. Este repositorio contiene el sitio web público oficial para la presentación del producto, sus herramientas de organización (calendarios, tareas compartidas, listas y recordatorios) y la experiencia de gamificación de hábitos cotidianos **Kidos**.

El sitio incluye información institucional, catálogo de funcionalidades, preguntas frecuentes, formulario de contacto y contenido legal del servicio.

---

## Tecnologías

* **Astro** — generación del sitio web estático y sistema de rutas.
* **TypeScript** — tipado estático.
* **HTML5** — estructura web semántica y accesible.
* **CSS** — estilos modulares, variables CSS y diseño adaptativo.
* **@astrojs/sitemap** — generación automática del mapa del sitio.

---

## Estándares y convenciones

* **HTML Semántico**: Estructuración clara de contenido para buscadores y accesibilidad.
* **Metodología BEM**: Convención de nomenclatura para clases CSS modulares.
* **Diseño Responsivo**: Adaptación fluida a dispositivos móviles, tabletas y computadoras.
* **Accesibilidad**: Uso de atributos ARIA y navegación accesible por teclado.
* **Variables CSS Centralizadas**: Gestión unificada de la paleta gráfica y fuentes globales.
* **Componentes Reutilizables**: Modularización de la interfaz en `src/componentes/`.

---

## Requisitos

* **Node.js**: Versión LTS compatible con la versión actual del proyecto (`v18.17.0` o superior).
* **npm**: Gestor de paquetes oficial de Node.js.

---

## Instalación

1. Clonar el repositorio oficial:

```bash
git clone <REPOSITORIO_OFICIAL>
```

2. Acceder al directorio del proyecto:

```bash
cd <DIRECTORIO_DEL_PROYECTO>
```

3. Instalar las dependencias:

```bash
npm install
```

---

## Desarrollo local

Para iniciar el servidor de desarrollo local con recarga en tiempo real:

```bash
npm run dev
```

El servidor estará disponible por defecto en:

```text
http://localhost:4321
```

---

## Comandos disponibles

| Comando | Descripción |
| ------- | ----------- |
| `npm run dev` | Inicia el servidor de desarrollo local con recarga en tiempo real. |
| `npm start` | Alias para iniciar el servidor de desarrollo local. |
| `npm run build` | Compila y genera el sitio estático de producción en el directorio `dist/`. |
| `npm run preview` | Previsualiza localmente el build generado en `dist/`. |
| `npm run astro` | Ejecuta la interfaz de línea de comandos (CLI) de Astro. |

---

## Arquitectura

El proyecto está estructurado siguiendo la arquitectura estática de Astro:

* **Páginas (`src/pages/`)**: Define las rutas públicas mediante enrutamiento basado en archivos.
* **Plantillas (`src/plantillas/`)**: Layouts base (`PlantillaBase.astro`) con el cascarón HTML común y metadatos SEO.
* **Componentes (`src/componentes/`)**: Subdivididos en `comunes/` (estructurales) y `ui/` (elementos interactivos).
* **Estilos (`src/estilos/`)**: Hojas de estilo globales (`variables.css`, `tipografia.css`, `global.css`, `utilidades.css`).
* **Datos estáticos (`src/datos/`)**: Información estática estructurada en TypeScript (`navegacion.ts`, `preguntas.ts`).
* **Assets (`src/assets/`)**: Imágenes e ilustraciones optimizadas por Astro.
* **Archivos públicos (`public/`)**: Recursos de acceso directo (fuentes, favicon, `robots.txt`, `sitemap.xml`).

### Aliases de TypeScript

Configurados en `tsconfig.json` para simplificar las importaciones:

```text
@/*            -> src/*
@componentes/* -> src/componentes/*
@plantillas/*  -> src/plantillas/*
@datos/*       -> src/datos/*
@estilos/*     -> src/estilos/*
@assets/*      -> src/assets/*
```

---

## Estructura del proyecto

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml            # Workflow de build y despliegue
├── docs/
│   ├── deployment.md             # Documentación detallada de despliegue
│   └── formspree.md              # Documentación del formulario de contacto
├── public/
│   ├── fonts/                    # Fuentes tipográficas locales
│   ├── favicon.png               # Icono del sitio
│   ├── robots.txt                # Directivas de motores de búsqueda
│   └── sitemap.xml               # Mapa del sitio
├── src/
│   ├── assets/                   # Recursos gráficos e imágenes
│   ├── componentes/              # Componentes de interfaz
│   │   ├── comunes/
│   │   └── ui/
│   ├── datos/                    # Archivos de datos en TypeScript
│   ├── estilos/                  # Archivos de estilo y variables CSS
│   ├── pages/                    # Rutas y páginas públicas
│   └── plantillas/               # Layout base del sitio
├── astro.config.mjs              # Configuración de Astro
├── package.json                  # Scripts y dependencias
├── tsconfig.json                 # Configuración de TypeScript y aliases
└── README.md                     # Documentación principal del proyecto
```

---

## Rutas

| Ruta | Descripción |
| ---- | ----------- |
| `/` | Página principal de presentación de Kivana. |
| `/funcionalidades` | Presentación de las herramientas de organización familiar. |
| `/kidos` | Explicación de la experiencia de gamificación de hábitos para niños. |
| `/nosotros` | Propósito, historia, misión y valores de Kivana. |
| `/faq` | Preguntas frecuentes sobre el uso de la plataforma. |
| `/contacto` | Formulario de contacto e información de atención. |
| `/privacy` | Política de privacidad oficial. |
| `/terms` | Términos y condiciones del servicio. |
| `/delete-account` | Información sobre la eliminación de cuenta. |

---

## Sistema visual

La identidad visual está centralizada en `src/estilos/variables.css`:

* **Azul marino**: `#163C50` (`--color-azul`)
* **Menta**: `#6BAD99` (`--color-menta`)
* **Amarillo**: `#FED17A` (`--color-amarillo`)
* **Coral**: `#E98C78` (`--color-coral`)
* **Crema**: `#FEF8F0` (`--color-crema`)
* **Blanco**: `#FFFFFF` (`--color-blanco`)

**Tipografías**: Títulos en `Fredoka` (`--fuente-titulos`) y cuerpo de texto en `Nunito Sans` (`--fuente-cuerpo`).

---

## SEO y accesibilidad

* **SEO**: Títulos y meta descripciones por página, Open Graph, etiquetas canónicas, sitemap XML y directivas robots.
* **Accesibilidad**: HTML5 semántico, atributos `alt` en imágenes, gestión de estados de formulario mediante `aria-live` y compatibilidad con navegación por teclado.

---

## Configuración

El proyecto no requiere variables de entorno para su ejecución local.

Las configuraciones específicas de servicios externos se documentan en `docs/`.

---

## Desarrollo y mantenimiento

* Reutilizar componentes existentes antes de crear nuevos.
* Mantener los colores y valores de diseño en `src/estilos/variables.css`.
* Preservar la nomenclatura BEM y el HTML semántico.
* Optimizar imágenes antes de incorporarlas al proyecto.
* Evitar incluir credenciales o secretos en el repositorio.

---

## Verificación local

Antes de crear un Pull Request:

1. Ejecutar el servidor de desarrollo y revisar visualmente los cambios:

```bash
npm run dev
```
2. Generar el build de producción:

```bash
npm run build
```
3. Previsualizar el build generado:

```bash
npm run preview
```

---

## Despliegue

El despliegue está automatizado mediante GitHub Actions y publica la compilación estática del proyecto en GitHub Pages tras cada commit en la rama principal (`main`).

Para más detalles, consulta la documentación específica en [docs/deployment.md](docs/deployment.md).

---

## Flujo de trabajo

1. Crear una rama de trabajo local.
2. Realizar los cambios necesarios.
3. Ejecutar la verificación local (`npm run build`).
4. Crear un Pull Request hacia la rama principal.
5. Revisar e integrar los cambios.

---

## Alcance del proyecto

### Incluye

* Sitio web público e informativo del ecosistema Kivana y Kidos.
* Formulario de contacto interactivo.
* Contenido legal y preguntas frecuentes.
* Optimización SEO y generación de sitemap.

### No incluye

* Autenticación o inicio de sesión de usuarios.
* Base de datos o servidor backend propio.
* Aplicación móvil ni lógica cliente-servidor de Kivana.

---

## Documentación adicional

Para información específica de configuración o mantenimiento, consulta la documentación correspondiente antes de modificar estas integraciones.
La documentación específica de configuración y mantenimiento se encuentra en:

- [docs/formspree.md](docs/formspree.md) — configuración y mantenimiento del formulario de contacto.
- [docs/deployment.md](docs/deployment.md) — proceso y configuración específica de despliegue.
