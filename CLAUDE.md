# Elevate Web

Web de la agencia (Valencia): webs, SEO y posicionamiento en la IA (GEO) para negocios. En español,
monolingüe. Desde el 7-11-2026 (rama `paginas-por-sector`) son **tres HTML estáticos**:

- `index.html` → `/` — portada general, con una tarjeta por sector. WhatsApp: "...para mi negocio".
- `abogados/index.html` → `/abogados/` — la landing de abogados del rediseño del 4-11-2026, casi tal
  cual. WhatsApp: "Hola, quiero la auditoría gratis para mi despacho".
- `clinicas-dentales/index.html` → `/clinicas-dentales/` — misma estructura, adaptada a clínicas
  (implantes y ortodoncia). WhatsApp: "...para mi clínica".

El mensaje de WhatsApp distinto por página sirve para saber de qué anuncio viene cada contacto: no
unificarlo. **Añadir un sector = crear su carpeta con `index.html`, añadirlo a
`build.rollupOptions.input` en `vite.config.ts`, a `public/sitemap.xml` y a las tarjetas y el pie de
la portada.** Las páginas de sector no pueden compartir ninguna pregunta de FAQ entre sí (las
genéricas van en la portada). El CSS y el JS comunes están copiados en línea en las tres páginas:
un cambio de estilo global se hace en las tres.

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

**Para tocar el sitio se editan los tres `index.html` (raíz, `abogados/`, `clinicas-dentales/`).** Los tres últimos commits del repo lo
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

## SEO (repuesto en el rediseño del 4-11-2026)

**Dominio canónico: `https://www.myelevateweb.com/`.** Es el host que sirve 200. El apex
`myelevateweb.com` redirige a www con un **307** (temporal): conviene cambiarlo a 301/308 en el
dashboard de Vercel. `elevateweb.es` ya no es nuestro (redirige a un 404 de otro proveedor): no
usarlo en ningún sitio. Comprobar con `curl -sI https://myelevateweb.com`.

Todo vive en `index.html` y `public/`:
- `<head>`: title, description, canonical, Open Graph y Twitter con `public/og.jpg` (1200×630,
  sale de la composición `OgImage` de `~/Desktop/elevateweb-video`), favicons.
- **JSON-LD en un único bloque `@graph`** en el `<head>`: `ProfessionalService` (#negocio, la
  entidad global), `WebSite`, `Service` y `FAQPage`. **El `FAQPage` copia literalmente las
  preguntas visibles** (`<details>` de la sección #faq): si cambias una, cambia las dos. Se
  comprueba con el script de la sección "Verificación".
- `public/robots.txt` (con la línea `Sitemap:`) y `public/sitemap.xml` (a mano, tres URL;
  actualiza `lastmod` cuando cambie cada página).
- La entidad `ProfessionalService` (#negocio) es el mismo bloque en las tres páginas; las de sector
  añaden `Service`, `BreadcrumbList` y su `FAQPage` con `@id` propio.
- `npm run preview` tiene fallback de SPA: `/abogados` sin barra sirve la portada en local. En
  Vercel sí funciona (`/abogados` y `/clinicas-dentales` sin barra dan 200 con su página,
  comprobado el 7-11-2026), pero se enlaza siempre con barra final, que es la canónica.

Antes de tocar metadata, schema, robots o sitemap, invoca el skill de SEO que toque (plugin
`seo`, marketplace `joan-devgggg/seo-kit`).

## Datos que salen en la web y de dónde vienen

- **Búsquedas, dificultad y CPC** (sección "El hueco", cinta y tarjetas): Mangools, Google
  España, consultado el 4-11-2026, media de 12 meses. Están en el objeto `DATOS` del `<script>`
  final (única fuente: la cinta y el explorador leen de ahí). Las cifras sueltas del HTML
  (31.500, 5–26, 8,58 €, 14.900, 3.300, 12,20 €) salen de esa tabla: si se refrescan los datos,
  hay que tocarlas también. 31.500 = suma de las 6 búsquedas generales de España.
- **Clínicas dentales**: sin datos de Mangools todavía, así que la página no da volúmenes (solo
  ejemplos de búsquedas). **Dentlux Travel es turismo dental en Marrakech (carillas), no una
  clínica**: la página lo dice así; no presentarlo como clínica.
- **Resultados**: Search Console de San Remo y Dentlux, 5 oct – 1 nov 2026. La captura de San
  Remo es `public/stats/san-remo-nov.jpg` y la de Dentlux, `public/stats/dentlux-nov.jpg`
  (propiedad `sc-domain:dentluxtravel.com`, sacada el 7-11-2026). El pie del visor sale del
  `data-pie` de cada botón. Las de `public/stats/*-stats.png` son antiguas y ya no se usan.
- Testimonios: los que ya estaban publicados.

## Verificación

- Vista local sin Vite: un servidor que sirva `index.html` de la raíz y el resto desde `public/`.
- `npm run build` debe pasar y dejar `dist/media`, `dist/img`, `og.jpg`, `sitemap.xml`.
- FAQ visible = schema: extraer los `<details>` y el `FAQPage` y compararlos (texto idéntico).
- Mirar a 1440 y 375 px: sección fijada "Cómo trabajamos" (GSAP ScrollTrigger, desde cdnjs
  3.12.5) y que nada desborde en horizontal.

## Trampas

**El WhatsApp `34644610120` está hardcodeado**: enlaces `wa.me` (atributo `data-wa`) en los tres
`index.html`, el `tel:` y el JSON-LD, más una veintena de componentes muertos en `src/`. Cambiarlo
es un barrido global, no una edición.

**Anclas de `index.html`:** `#top`, `#hueco`, `#metodo`, `#resultados`, `#garantia` y `#faq`.
`src/components/Navbar.tsx` apunta a otras que no existen: es código muerto.

**Todas las imágenes y el vídeo del rediseño están en `public/`** (`/img`, `/media`, `/stats`,
`og.jpg`) con rutas absolutas, ya optimizadas (ninguna pasa de 120 KB; el vídeo del hero, 0,8 MB).
Las de `src/assets/` ya no se usan desde `index.html`. Si añades una foto, redúcela antes
(`sips -Z 900`).

**El vídeo del hero sale de Remotion**: composición `WebHero` de `~/Desktop/elevateweb-video`
(Google → IA → resultados, sin voz), renderizada a 540×960 y comprimida. Para cambiarlo se
vuelve a renderizar allí, no se edita aquí.

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

Oferta vigente **según `index.html`** (rediseño): auditoría gratis, precio a medida ("te lo
decimos claro por WhatsApp en menos de 1 hora"), sin permanencia, y garantía de 90 días: si no
apareces en Google para tu especialidad y tu zona, se devuelve lo pagado, con la condición de dar
acceso a WhatsApp Business y al Perfil de Empresa de Google. Webs en 48 h, solo en la FAQ.

**El `README.md` está desactualizado**: sigue diciendo "por suscripción, desde 65€/mes", que
es el posicionamiento anterior al commit `27e667c`. Manda `index.html`.

Testimonios reales en la página: Restaurante San Remo (Palencia) y Dentlux Travel (Alicante),
que son otros dos proyectos de este mismo directorio de trabajo.
