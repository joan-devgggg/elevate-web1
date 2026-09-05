# Elevate Web

Landing de la agencia (diseño web + SEO para negocios locales de España). Una sola página,
en español, monolingüe.

## LO PRIMERO: la app de React no se ejecuta

**El sitio publicado es `index.html`, un HTML estático escrito a mano en la raíz del repo.**
No es un detalle histórico: es cómo funciona hoy.

- `index.html` **no carga** `src/main.tsx` ni tiene `<div id="root">`. Es HTML plano con el
  CSS y el JavaScript en línea, dentro del propio fichero.
- `npm run build` **no genera ni un `.js` ni un `.css`** en `dist/`. Solo procesa el HTML y
  hashea las imágenes que referencian sus `<img>`.
- Lo provocó el commit `e337aab` (21/04/2026), que quitó la etiqueta `<script>` del entry.

**Consecuencia: todo `src/` es código muerto.** Los 44 componentes de `src/components/`,
`src/pages/Index.tsx` y `src/App.tsx` **no se renderizan en ninguna parte**. Editarlos no
cambia nada en producción.

**Para tocar el sitio se edita `index.html`.** Los tres últimos commits del repo lo
confirman: todos tocan solo ese fichero.

Si algún día se quiere revivir React, hacen falta tres cosas: devolver el `<script>` y el
`#root` a `index.html`, migrar el contenido actual (que está solo en el HTML), y añadir un
`vercel.json` con rewrite a `/index.html` — sin él, la ruta `*` de React Router daría 404.

## Stack (instalado, mayormente sin ejecutar)

Vite 5.4 · React 18.3 · TypeScript 5.8 · Tailwind 3.4 · shadcn/ui (Radix) ·
react-router-dom 6.30 · framer-motion. Nada de esto llega al navegador hoy.

**Gestor: npm.** Hay **tres lockfiles trackeados** y solo uno vale:

- `package-lock.json` — **el bueno** (18/04, incluye playwright y vitest).
- `bun.lock` y `bun.lockb` — obsoletos (06/04, **no contienen ni playwright ni vitest**).
  Instalar con `bun` daría un árbol de dependencias distinto al real. No usarlos.

## Scripts

| Script | Qué hace |
|---|---|
| `dev` | Vite en el **8080** (no el 5173). Ojo: `hmr.overlay` está **desactivado**, los errores de runtime no salen en pantalla, solo en consola |
| `build` | `vite build` |
| `build:dev` | Build en modo development |
| `preview` | Sirve `dist/` |
| `lint` | eslint |
| `test` / `test:watch` | vitest |

No hay script de typecheck ni de e2e.

## Despliegue

**Vercel, sin `vercel.json`.** No hay ningún fichero de configuración de despliegue en el
repo: ni `vercel.json`, ni CI, ni redirects. La evidencia del hosting es indirecta (la última
línea del `README.md` dice `// Trigger Vercel deployment` y hay commits de "force redeploy").
**Los ajustes de dominio y redirects viven en el dashboard de Vercel y no se pueden verificar
desde aquí.**

## SEO: está casi todo desmontado

**Dominio: `https://elevateweb.es`.** Se declara en **un único sitio**: el `og:url` de
`index.html`. No hay nada más.

El commit `e337aab` se llevó por delante, y no se han repuesto:

- `<link rel="canonical">`
- todo el bloque JSON-LD de datos estructurados
- las etiquetas `twitter:*`
- `og:image`

Tampoco hay `public/sitemap.xml`, ni línea `Sitemap:` en `robots.txt`, ni
`<link rel="icon">` (pese a que `public/favicon.ico` existe).

**`docs/base-conocimiento-seo.md`** es la metodología de SEO del equipo, común a varios
proyectos. **Léela antes de tocar metadata, JSON-LD/schema, `robots.txt`, sitemap, la
estructura de un artículo o el enlazado interno.** Es criterio, no un plan a ejecutar aquí.

## Trampas

**El WhatsApp `34644610120` está hardcodeado en ~25 sitios** — 5 URLs `wa.me` con textos
distintos en `index.html`, más una veintena de componentes muertos. Cambiarlo es un barrido
global, no una edición.

**Las anclas del HTML y las de React no coinciden.** `index.html` usa `#testimonios`,
`#precios`, `#garantia` y `#top`; `src/components/Navbar.tsx` apunta a `#como-funciona`,
`#pricing` y `#faq`, que no existen. Otro síntoma de que los dos mundos divergieron.

**Dos convenciones de rutas de imagen dentro del mismo `index.html`.** Los `<img>` usan
`/src/assets/...` y Vite los reescribe y hashea en el build; los `data-stats-img` apuntan a
`/stats/...` (desde `public/`) y **no se hashean**. Si alguien mueve una imagen fuera de
`src/assets/`, o abre el HTML sin Vite, la primera convención se rompe.

**Imágenes sin optimizar**: `foto-alberto` pesa 2,6 MB y `logo-sanremo` 2,5 MB en `dist/`.
Más de 5 MB entre dos ficheros, en un sitio que vende SEO.

**Los tests no prueban nada.** El único test del repo es
`expect(true).toBe(true)`. Playwright está instalado y configurado con
`testDir: './tests'`, **carpeta que no existe**: en cuanto se invoque, revienta. Y no hay
ningún script npm que lo lance.

**El tipado está prácticamente apagado**: `strict: false`, `noImplicitAny: false` y
`strictNullChecks: false` en los tsconfig que cubren `src`. En ESLint,
`@typescript-eslint/no-unused-vars` está en `"off"`, así que no avisa de imports muertos —
que es justo lo que sobra en este repo.

**Ficheros y carpetas que despistan:**
- `seccion-conversion.html` — HTML suelto en la raíz, trackeado, que no referencia nadie.
  Carga Tailwind y Font Awesome por CDN.
- `src/components/Chatbot_backup.tsx` y `Chatbot_broken.tsx` — backups versionados.
  `Chatbot.tsx` es el fichero más grande del repo (1.371 líneas) y tampoco se usa.
- `src/App.css` — el CSS de ejemplo de `npm create vite`, con el logo giratorio. No se importa.
- 30 de los 44 componentes propios no se importan desde ningún sitio.
- `myDocuments.cannedSearch/` — **basura de macOS**, no del proyecto: es un bundle del Finder
  firmado por Apple (`com.apple.canned-search.15`, dic-2024). Está en `.gitignore`.

## Contenido

Contacto publicado: **644 610 120** · `elevateweb@gmail.com`. La conversión va 100 % por
WhatsApp, no hay formularios.

Oferta vigente **según `index.html`**: web en 48 h, precio a medida ("te lo decimos claro por
WhatsApp"), si no gusta el diseño no se paga, garantía de resultados a 90 días condicionada a
dar acceso a WhatsApp Business y Google Business Profile, sin permanencia.

**El `README.md` está desactualizado**: sigue diciendo "por suscripción, desde 65€/mes", que
es el posicionamiento anterior al commit `27e667c`. Manda `index.html`.

Testimonios reales en la página: Restaurante San Remo (Palencia) y Dentlux Travel (Alicante),
que son otros dos proyectos de este mismo directorio de trabajo.
