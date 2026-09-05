# Base de conocimiento SEO

Metodología acumulada trabajando el SEO de varios proyectos reales entre junio de 2026 y hoy, más una investigación de contraste hecha en septiembre de 2026 para adaptar la parte técnica a Next.js App Router y cubrir huecos que la versión original no tenía.

**Revisión de septiembre de 2026 (v3):** se reescribió entera la sección 20 (GEO/AEO) tras la publicación de la documentación oficial de Google sobre IA generativa y de las primeras pruebas controladas sobre schema. Dos afirmaciones de la versión anterior eran falsas. Se incorporó además lo aprovechable de una auditoría externa en vídeo sobre el proyecto C, contrastado antes de darlo por bueno.

**Proyectos de los que sale esto** (anonimizados: este repo es público):

- **Proyecto A** — turismo sanitario internacional, público español. Vite + React, YMYL, ticket alto. Resultado: posición 1 para su keyword principal en unos 2 meses, partiendo de una web nueva sin datos.
- **Proyecto B** — restaurante, negocio local. Vite + React.
- **Proyecto C** — agencia de automatización con IA (esta web). Next.js App Router, B2B nacional.

Este documento es **base de criterio, no un plan a ejecutar**. La sección 1 explica qué aplica según el tipo de negocio; léela antes de usar el resto.

> **REGLA DE RIGOR, INNEGOCIABLE Y ANTES QUE NINGUNA OTRA:** ninguna cifra sin fuente pública enlazable. Si un dato no tiene fuente defendible, se expresa cualitativamente, sin porcentaje. Si es un cálculo propio, se explicita como cálculo con su fórmula. Esta regla vale tanto para lo que se publica en la web como para lo que se escribe en este documento.

> **NOTA SOBRE EL STACK:** las secciones 3 y 5 nacieron trabajando SPAs de Vite. La sección 3-BIS traduce lo técnico a Next.js App Router y marca explícitamente qué partes **no aplican**. Si el proyecto es Next, lee 3-BIS y salta lo que allí se marque como no aplicable.

---

## 1. Qué aplica según el negocio

Aplica **siempre, sea cual sea el proyecto**: secciones 2, 4, 6, 7, 8, 9, 12 y las nuevas 17, 18, 19 y 20.

Lo que **cambia según el tipo de negocio**:

| | Local (restaurante, clínica, taller) | Nacional / B2B | Alta intención de compra |
|---|---|---|---|
| Palanca principal | **Google Business Profile y Local Pack** | Contenido y autoridad de dominio | Contenido + confianza |
| Dónde está el 80% del valor | La ficha de Google, no la web | La web y los backlinks | La web |
| Keywords | "servicio + ciudad", "cerca de mí" | Temáticas sin ubicación | Comerciales + long-tail de objeción |
| Ubicación en H1/title | **Sí** | **No** (diluye) | Según el caso |
| Velocidad de resultados | 4-8 semanas | 6-12 meses | 3-6 meses |
| Peso de las reseñas | Factor de ranking directo | Marginal para SEO | Alto para conversión |
| CTR de partida | Medio | Bajo | **Alto** (quien busca ya quiere comprar) |

> **La lección más cara del conjunto:** en el proyecto B se invirtieron semanas perfeccionando la web —que acabó muy por encima de la de todos sus competidores— mientras la ficha de Google seguía con una foto desactualizada y una valoración mediocre. **La web no era el cuello de botella.** Si el negocio es local, audita la ficha de Google antes de tocar una línea de código.

**Y no diluyas la autoridad temática** mezclando nichos sin relación en la misma web. Mejor webs separadas por vertical.

---

## 2. Orden de trabajo

Por impacto real, no por comodidad:

1. **Bugs de conversión.** Botones que no funcionan, enlaces rotos, formularios que no envían. A producción de inmediato, no esperan a nada.
2. **Base técnica.** Dominio canónico único, prerenderizado si es SPA, canonicals, sitemap, robots, Search Console.
3. **Si es local: Google Business Profile.**
4. **Páginas de servicio**, una por cada cosa que vende el negocio.
5. **Enlazado interno.** Que ninguna página quede huérfana.
6. **Contenido.** Blog, clusters, FAQs.
7. **Rendimiento.** Imágenes, vídeos, Core Web Vitals.

> **Regla de medición:** no cambies titles, rediseño y prerenderizado a la vez. En el proyecto A se hizo y la medición quedó contaminada: si sube, no sabes a qué atribuirlo. Separa los cambios en el tiempo y fija un baseline antes de tocar nada.

### Plazos realistas

- **Semanas 1-4:** indexación, primeras impresiones, posiciones 20-100
- **Mes 2-3:** keywords específicas entran en top 10-20, primeros clics
- **Mes 3-6:** tráfico orgánico consistente, primeros leads
- **Mes 6-12:** leads orgánicos regulares

El SEO no trae clientes el primer mes. En YMYL, menos aún.

---

## 3. SEO técnico (base común + específico de SPA)

### 3.1 Base obligatoria antes de cualquier contenido

- `robots.txt` y `sitemap.xml` (en Next: `app/robots.ts` y `app/sitemap.ts`)
- `metadataBase` y canonical en todas las páginas
- Open Graph completo + Twitter Card + imagen OG (1200×630)
- Schema JSON-LD por tipo de página
- Google Search Console verificado + sitemap enviado
- Core Web Vitals en verde
- **Cada página nueva se registra en el sitemap** con `priority` y `changeFrequency` coherentes

**Trampa (solo SPA):** meta tags hardcodeados en el `index.html` pisan al componente SEO y ganan. Limpia el `<head>` base y deja solo lo mínimo.

**Trampa (universal):** un dominio viejo olvidado en robots, sitemap o canonicals invalida todo lo demás.

### 3.2 El dominio canónico (lo primero de todo) — APLICA A TODOS LOS STACKS

Un sitio puede tener 4 versiones indexadas como páginas distintas: `http://`, `https://`, con y sin `www`. Google reparte las señales y ninguna posiciona bien.

- Fija **una sola** versión canónica y redirige el resto con **301 o 308** (un 307 es temporal y Google no consolida)
- **El canonical debe apuntar a la URL que sirve el servidor, nunca a una que redirige.** Un canonical hacia una URL que hace 301 es una señal contradictoria
- En paneles de hosting (Vercel, Railway): el redirect del dashboard suele aplicarse ANTES que cualquier fichero de configuración. Si el archivo dice una cosa y el dashboard otra, gana el dashboard

> **Trampa que tumbó una web:** configurar el redirect en el dashboard Y en el código en sentido contrario crea un bucle infinito. Elige un sitio, no los dos.

> **APRENDIZAJE NUEVO (sept. 2026, proyecto C):** antes de decidir en qué host consolidar, **mira dónde está la evidencia, no lo que te parezca más limpio.** En el proyecto C el sitio se servía en www con 301 desde el apex, pero el código entero (237 de 237 URLs absolutas), el sitemap, los canonical, la propiedad de Search Console y **todo lo que Google tenía indexado** estaban en apex. Cambiar el código a www habría reescrito las 64 URLs del sitemap y dejado la propiedad de GSC sin datos —lo que parecería una caída de tráfico sin serlo. Lo correcto era invertir el redirect, no tocar una línea. **La regla: el host ganador es el que ya tiene la indexación, no el que sirve el servidor.**

> **Y una limitación física que hay que comprobar antes de prometer nada:** un dominio raíz (apex) no admite CNAME estándar. Para apuntarlo a un hosting tipo Railway/Vercel hace falta que el DNS soporte **ALIAS/ANAME o CNAME flattening**. Si el proveedor de DNS no lo soporta, esa suele ser la razón real por la que el sitio vive en www y el apex solo reenvía: no fue un descuido, era lo único posible. En ese caso, consolidar en apex exige mover el DNS antes.

> **DESENLACE (sept. 2026, proyecto C) y la trampa que deja detrás.** La migración a Cloudflare se hizo y el CNAME flattening resolvió el apex contra el hosting. **Pero el estado intermedio es peor de lo que parece:** durante un tiempo el apex y el www sirvieron **ambos un 200** con el mismo contenido en las 64 rutas. Eso es contenido duplicado en todo el sitio. Lo mitiga que los canonical apunten al host ganador, **pero un canonical es una sugerencia y un 301 es una orden**. La secuencia correcta es: (1) que el apex responda, (2) **inmediatamente** el 301 de www al apex, (3) recién entonces empujar cambios de contenido. Si publicas mejoras mientras los dos hosts sirven 200, le mandas a Google dos copias de un cambio que quieres que lea una sola vez.

> **Y lo que casi nadie verifica después de mover un DNS: el correo.** Una migración de DNS mal hecha deja el dominio **sin registros MX** y sin SPF. Si envías desde Google Workspace seguirás enviando, así que **no te enteras**: lo que se cae es la recepción, y puedes pasar semanas sin recibir nada. Después de cualquier cambio de proveedor de DNS, `dig MX dominio.com +short` y `dig TXT dominio.com +short` antes de dar la migración por cerrada.

### 3.3 Las SPA sirven HTML vacío — el problema más grave

> **NO APLICA EN NEXT.JS APP ROUTER.** Next prerenderiza las rutas estáticas en `next build` y los Server Components emiten el HTML en el servidor. Si el proyecto es Next, salta a 3-BIS.

Una SPA sin prerenderizar sirve esto en **todas** las rutas:

```html
<body><div id="root"></div></body>
```

Google necesita ejecutar JavaScript para ver el contenido, lo que lo relega a una segunda ola de rastreo con recursos limitados.

> **Y los asistentes de IA no lo ejecutan nunca.** ChatGPT, Claude y Perplexity leen HTML crudo (sección 20.2). Para Google esto es un retraso; para ellos la página **está vacía y punto**. Eso convierte el prerenderizado, que aquí se presenta como mejora de SEO, en condición de existencia si te importa aparecer en asistentes.

**Casos reales:** en el proyecto B, páginas semanas en "Descubierta: actualmente sin indexar — Último rastreo: N/D". En el proyecto A, producción servía una página clave con cero `<h1>` y el título genérico; esa página tenía muchas impresiones y 0 clics.

**Cómo detectarlo:** abre `view-source:https://tudominio.com/una-ruta-interna` y busca el texto de la página. Si solo ves `<div id="root">`, tienes el problema. **En el navegador se ve perfecto porque la SPA se hidrata encima** — por eso es un fallo silencioso.

#### Solución A — SSR nativo de Vite (recomendada)

Cero dependencias nuevas, no obliga a migrar el routing, Helmet sigue funcionando.

```
"build": "vite build && npm run build:ssr && node scripts/prerender.mjs",
"build:ssr": "vite build --ssr src/entry-server.tsx --outDir dist-ssr"
```

Piezas:
- Marcadores `<!--app-head-->` y `<div id="root"><!--app-html--></div>` en `index.html`
- `entry-server.tsx` con `renderToString` + `StaticRouter` + `HelmetProvider` con context
- `prerender.mjs` que lee `dist/index.html` como plantilla y escribe un HTML por ruta
- Separar `AppRoutes` y `AppShell` para que cliente y servidor compartan árbol
- En `main.tsx`, hidratar si ya hay HTML: usa `container.childElementCount > 0`, **no** `hasChildNodes()` — en dev el marcador es un nodo comentario y daría `true`

**Gate obligatorio:** los componentes con portales (Radix Toast, sonner) crashean en `renderToString`. Móntalos solo tras hidratar con un flag `mounted`.

#### Solución B — Snapshot con navegador headless

Cuando la A no encaja. Ventaja: **el HTML lo genera la propia app**, así que no hay una segunda implementación del SEO que pueda divergir.

- Muchos hostings no tienen las librerías de Chromium ni permiten `apt-get`. Playwright falla con `libnspr4.so`. Solución: **`@sparticuz/chromium` + `puppeteer-core`**
- **El prerenderer debe fallar ruidosamente** si el navegador no arranca. Un fallo silencioso despliega todas las URLs vacías y nadie se entera
- **El fallback no puede ser `dist/index.html`**: ese fichero se sobrescribe con la home en la primera vuelta y las rutas siguientes se renderizan encima

**Descartadas:** Vike (reescribe el routing entero), `vite-react-ssg` (obliga a redeclarar rutas), prerenderizar en local y commitear (se desincroniza en cuanto alguien olvide relanzarlo, y los hashes de assets cambian en cada build).

### 3.4 El canonical duplicado

> **NO APLICA EN NEXT.JS APP ROUTER.** No hay `index.html` ni react-helmet-async; el `<head>` lo compone la Metadata API desde el servidor.

Si `index.html` lleva `canonical`, `description` y `og:*` hardcodeados y luego react-helmet-async inyecta los suyos, **no los reemplaza: los duplica**. Helmet solo gestiona las etiquetas que él crea (marcadas con `data-rh="true"`).

Resultado: dos canonicals por página, Google lee el primero —el de la home— y **todas las páginas apuntan a la home**.

**Solución:** borra de `index.html` todo lo que Helmet vaya a gestionar (`title`, `description`, `canonical`, `og:*`, `twitter:*`, incluidas `og:type` y `twitter:card`) y crea un componente `Seo` único. El JSON-LD global sí puede quedarse.

**Cuida la barra final** (esto sí aplica a todos los stacks). `https://dominio.com/` y `https://dominio.com` son URLs distintas. Deriva la canónica con una regla única que coincida con el sitemap:

```js
path === "/" ? SITE_URL + "/" : SITE_URL + path
```

### 3.5 El soft 404

> **NO APLICA EN NEXT.JS APP ROUTER.** Next enruta por sistema de ficheros y devuelve 404 reales con `not-found.tsx`.

Con un catch-all `"/(.*)" → "/index.html"` en la config del hosting, cualquier URL inventada devuelve **200 con el contenido de la home**. Google lo marca como soft 404 y gasta presupuesto de rastreo en URLs basura.

Si ya prerenderizas, ese rewrite sobra: las rutas reales son ficheros en `dist/`. Bórralo y prerenderiza además un `dist/404.html`.

> **El peor accidente posible:** un catch-all mal configurado sirviendo el HTML de la home en **todas** las URLs — mismo title, mismo canonical, mismo JSON-LD. Y es silencioso, porque la SPA se hidrata encima. El CHECK 2 de la sección 5 existe por esto.

### 3.6 Componentes que desmontan contenido

> **APLICA A TODOS LOS STACKS**, incluido Next: si el contenido no está en el HTML servido, Google no lo ve — y los asistentes de IA tampoco lo verán jamás, porque no renderizan (sección 20.2).

**La trampa que más veces reapareció.** Radix y similares desmontan el contenido inactivo de Tabs, Accordion y Dropdown. Ese contenido **no existe en el HTML prerenderizado**.

Casos reales: unas Tabs ocultaban a Google la mitad de los ítems de una carta; un desplegable de navegación habría dejado 3 páginas sin enlaces rastreables.

**Soluciones por orden:**
1. HTML nativo: `<details>/<summary>`, CSS puro (`group-hover`) para desplegables
2. Si necesitas Radix: `forceMount` + ocultar con CSS

**Cuidado con `forceMount` a secas:** Radix pone `hidden={false}` en todas las pestañas y se pintan apiladas. Hacen falta dos ajustes más: `data-[state=inactive]:hidden`, y cambiar las animaciones de `whileInView` a `animate` (un elemento en `display:none` nunca intersecta y se queda a opacidad 0).

### 3.7 Páginas huérfanas

Una página que solo existe en el `sitemap.xml` es huérfana: Google la rastrea pero **no recibe autoridad interna** desde la home, y ningún usuario llega navegando. En el proyecto B, tres páginas de servicio estuvieron semanas en posición 7-8 sin subir. Da igual lo bien escritas que estén.

> **Causa raíz a buscar desde el principio:** la lista de rutas suele estar duplicada sin nada que garantice consistencia. En el proyecto B estaba en **cuatro** sitios: el router, el `ROUTES` del prerender, el `sitemap.xml` y el generador de OG. Y el nav estaba duplicado en dos componentes. **Cualquier dato que viva en más de un sitio necesita una única fuente de verdad o un test que cruce las copias.**

**Cuando son muchas, no es un bug: es arquitectura.** Ver sección 21.

### 3.8 Otras cosas que dieron guerra

- **`<a href>` a rutas internas** fuerza recarga completa y rompe la SPA. `<Link>` para interno, `<a>` solo para externo
- **React Router no resetea el scroll al navegar.** Componente global con `scrollTo(0,0)` al cambiar el pathname, contemplando que las URLs con hash van al elemento
- **Anclas relativas** (`#seccion`) desde una página interna no van a ningún sitio. Deben ser `/#seccion`
- **Desbordamiento horizontal en móvil:** puede venir de animaciones de entrada (`x: 30` de framer-motion), no solo de decoración. `overflow-x: clip` es mejor que `hidden`: recorta sin crear contexto de scroll, así que no rompe `sticky` ni el scroll suave

---

## 3-BIS. SEO TÉCNICO EN NEXT.JS APP ROUTER

Esta sección sustituye a 3.3, 3.4 y 3.5 cuando el proyecto es Next. Lo demás de la sección 3 sigue aplicando.

### 3B.1 Qué cambia respecto a una SPA de Vite

En Next App Router los componentes son **Server Components por defecto**: `<title>`, `<meta>`, canonical y JSON-LD se renderizan en el servidor y llegan en el HTML inicial, antes de cualquier JS. Esto elimina la condición de carrera en la que el crawler podía indexar la página antes de que se inyectaran los tags.

**Lo que NO aplica en este stack:** prerenderizado manual, react-helmet-async, el canonical duplicado por meta hardcodeados, y los catch-all rewrites que provocan soft 404.

### 3B.2 Metadata API

- **Metadata estática:** `export const metadata: Metadata = {…}` en `page.tsx`/`layout.tsx`. Para páginas fijas.
- **generateMetadata dinámica:** `export async function generateMetadata({ params })` cuando el título depende del contenido. En Next 15/16 `params` es una Promise: `const { slug } = await params`.

**metadataBase:** se declara una sola vez en `app/layout.tsx` y debe apuntar **al host donde está la indexación** (ver 3.2). Sin `metadataBase`, Next avisa en build y puede construir URLs absolutas incorrectas.

**Títulos con template y absolute:**

```ts
// layout.tsx
title: { default: 'Marca', template: '%s | Marca' }
// home page.tsx (evitar doble marca)
title: { absolute: 'Titular propio de la home' }
```

Si el `template` añade sufijo de marca, ese sufijo **cuenta para el límite de longitud**: el título propio de cada artículo tiene que caber en lo que queda. El límite real es de píxeles, no de caracteres; 50-60 caracteres es un proxy razonable. Google reescribe los títulos que exceden el ancho, así que lo importante va delante.

### 3B.3 Canonicals

```ts
alternates: { canonical: './' }  // resuelve contra metadataBase
```

**Ventaja enorme de hacerlos relativos:** todos los canonical del sitio dependen de una única línea (`metadataBase`). En el proyecto C, los 68 canonical eran relativos, así que cambiar de host habría sido un cambio de una línea. Hazlo así siempre.

### 3B.4 app/sitemap.ts y app/robots.ts

Next sirve `sitemap.xml` y `robots.txt` automáticamente desde estos ficheros. No hace falta `next-sitemap`.

**El problema de `lastModified: new Date()`:** en cada build se genera la fecha actual para TODAS las URLs, comunicando que todo el sitio cambió en cada despliegue aunque no sea cierto. Google documenta que `lastmod` debe ser una fecha consistente y verificablemente exacta; cuando no lo es, aprende a ignorar la señal. **Usa la fecha real de modificación de cada contenido** (`lastModified: new Date(post.updatedAt)`), y omite `lastModified` en páginas estáticas sin fecha fiable.

### 3B.5 El impacto de "use client" en una página

- **No se puede exportar `metadata` ni `generateMetadata` desde un fichero con `"use client"`.** Next lanza error de build. Si una página lleva `"use client"` por un `useEffect` de cinco líneas, **esa página se queda sin metadata propia** — y suele ser la home.
- Poner `document.title` en un `useEffect` es un anti-patrón: el título se cambia en cliente tras la hidratación, no está en el HTML inicial que ve el crawler.
- **Fix correcto:** quitar `"use client"` de `page.tsx`, dejarla como Server Component que exporta `metadata`, y **extraer la parte interactiva a un componente hijo con `"use client"`**. Un Server Component puede contener Client Components; lo que no puede es ser él mismo cliente y exportar metadata.

### 3B.6 Estático vs dinámico, y cómo verificarlo

- **Estático:** el defecto, salvo que algo lo fuerce a dinámico.
- **Dinámico:** lo disparan `cookies()`, `headers()`, `searchParams`, `useSearchParams`, o `fetch` con `cache: 'no-store'`.
- **Cómo verificarlo:** ejecuta `next build` y lee la tabla de rutas. **`○` = estático, `ƒ` = dinámico.** Todas las páginas de contenido deberían salir como `○`.

### 3B.7 JSON-LD en App Router

- Se renderiza como `<script type="application/ld+json">` dentro del Server Component, con `dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}`. Script normal, no `next/script`.
- **NO va en `generateMetadata`:** la Metadata API solo emite tags reconocidos; un JSON-LD puesto ahí **se ignora silenciosamente**. Es uno de los bugs de structured data más comunes en Next.

### 3B.8 Diferencias entre versiones (mirar `package.json`)

| Área | Next 14 | Next 15 | Next 16 |
|---|---|---|---|
| Caché por defecto | `fetch` cacheado | `fetch` no cacheado (breaking) | Nada cacheado; caché explícita con `"use cache"` |
| `params`/`searchParams`/`cookies`/`headers` | Síncronos | **Asíncronos** (Promise) | Asíncronos |
| Bundler | Webpack | Turbopack estable en dev | **Turbopack por defecto** en dev y build |
| React | 18 | 19 | 19.2 |

La Metadata API, `sitemap.ts` y `robots.ts` funcionan igual en las tres. **El proyecto C corre Next 16.2.6.**

### 3B.9 next/image

`next/image` optimiza formato, tamaño y lazy-loading. `priority` en la imagen LCP (hero); `width`/`height` o `fill` siempre, para evitar CLS. En Next 16, `images.minimumCacheTTL` sube a 4 h.

---

## 4. Datos estructurados (JSON-LD)

### Reglas innegociables

**Nunca marques `aggregateRating` con reseñas de terceros.** Si son de Google o de un portal, marcarlas como propias viola las directrices y arriesga una acción manual que tumba todos los rich snippets del dominio. Mostrarlas visualmente sí es legítimo. La única vía limpia para tener rating en el schema es recoger reseñas propias en la web.

**Nunca inventes datos.** Certificaciones sin emisor, contadores "verificados", testimonios escritos a mano.

**El schema debe coincidir exactamente con lo que se ve en pantalla.** Sobre todo en FAQPage. La forma segura es que la vista y el schema lean del mismo array, con un test que lo blinde.

**Ningún dato del schema puede carecer de respaldo en la web.** En el proyecto A había un `highPrice` que no correspondía a ningún precio publicado.

**Con precios de distinta unidad, no mezclar.** Un `AggregateOffer` con precios por persona no puede incluir los de pareja: Google pintaría un rango engañoso.

**Cuando cambia un title, sincroniza el `headline` y la `description` del schema.** Google a veces los usa para el snippet.

### Estructura que funcionó

- **Un bloque global** con la entidad principal (`Restaurant`, `LocalBusiness`, `Organization`, `Dentist`), servido en todas las páginas
- **Un bloque específico por página** cuando aporta: `Menu`, `Service`, `Article`, `FAQPage`, `MedicalProcedure`, `Product`
- **`BreadcrumbList`** en todas las internas: unas migas visuales sin schema **no las pinta Google**, así que no sirven de nada
- **Referencia por `@id`** en vez de repetir nombre y dirección. Declarar la entidad completa dos veces le dice a Google que hay dos negocios en la misma dirección
- **Logo real** (mínimo 112×112), no el favicon
- **No dupliques schema:** dos `FAQPage` en la misma página si el componente ya lo emite

Campos que se olvidan y sí aportan: `award`, `founder`, `image`, `logo`, `geo`, `amenityFeature`, `maximumAttendeeCapacity`, `paymentAccepted`, y un `sameAs` completo.

Verifica con **Rich Results Test** y comprueba que las URLs de dentro del schema existan: en el proyecto B un `acceptsReservations` apuntaba a una ruta con 404.

---

## 5. La suite de verificación — lo más reutilizable

Cinco checks en `npm run check:all`. **Es lo que permitió rediseñar el proyecto A entero sin romper dos meses de SEO**, y lo que impide que las regresiones se descubran semanas después en Search Console.

> **Nota de stack:** el CHECK 4 (hidratación de meta tags) **no aplica en Next App Router**, porque el bug que detecta es el del canonical duplicado de react-helmet-async. El CHECK 2 sí aplica, adaptado: en Next se verifica sobre el HTML servido en producción, no sobre `dist/`.

**Regla de diseño del runner:** no lo encadenes con `&&`. El primer fallo corta y te deja sin ver los otros cuatro. Ejecuta los cinco siempre, marca como omitidos los que dependan del build si el build falla, y sal con código 1 al final.

### CHECK 1 — Regresión SEO (snapshot)

Renderiza todas las rutas y hace snapshot de: textos ordenados de H1/H2/H3, props del componente SEO, cada bloque JSON-LD serializado con claves ordenadas, y las listas de rutas cruzadas (código vs sitemap vs prerender).

**Dos decisiones críticas:**

- **Un único snapshot global, no `it.each` + `toMatchSnapshot()`.** Con snapshots por test la clave es el nombre del test —o sea la ruta—, así que al renombrar una ruta vitest escribe una entrada nueva y **la da por buena**. El test no protegería nada.
- **Fichero de texto plano** (`toMatchFileSnapshot`), no `.snap`. Los `.snap` escapan todo a una sola string y no puedes auditar el diff línea a línea.

> **Regla de oro, documentada en el propio fichero: el snapshot NUNCA se actualiza para que el test pase.** Solo ante un cambio autorizado, auditando el diff línea a línea.

**Verifícalo saboteándolo** antes de fiarte: cambia un H2, renombra una ruta, toca un canonical, mete un segundo H1. Si no salta en todos los casos, no sirve.

> **APRENDIZAJE NUEVO (sept. 2026):** cuando compares dos builds, **controla el ruido ANTES de comparar nada**. Compila el MISMO código dos veces y mira qué difiere: en el proyecto C, sin normalizar, los 65 ficheros salían distintos solo por el BUILD_ID que el bundler incrusta en el payload. Solo después de validar que el normalizador deja dos builds idénticos del mismo código puedes fiarte de que un 0-de-65 en el refactor real significa algo.

### CHECK 2 — Prerenderizado / HTML servido

`fetch` a todas las URLs comprobando **sobre el HTML crudo, sin ejecutar JS**: HTTP 200, `<title>` propio y único, canonical absoluto apuntando a su ruta, JSON-LD que parsee, exactamente un `<h1>` **y que no sea `sr-only`**, que ninguna ruta sirva contenido idéntico a la home, que una URL inexistente no devuelva 200, y que las `og:image` sean absolutas y respondan 200.

**En SPA, incluye un lint de la config del hosting** buscando rewrites catch-all. Ese bug vive en la configuración, no en el build.

Debe poder correr contra local y contra producción con un flag.

### CHECK 3 — Accesibilidad con axe

Todas las rutas × móvil y escritorio, WCAG 2.1/2.2 A+AA, sobre la app hidratada.

**Fuerza `reducedMotion: 'reduce'`**: sin eso los `initial={{ opacity: 0 }}` de framer-motion dan resultados inestables en `color-contrast`, y tendrías un check que falla aleatoriamente — peor que no tenerlo.

**Comprueba que axe no está no-opeando:** inyecta una violación a propósito (imagen sin alt) y confirma que la detecta.

> **Trampa:** hacerlo "a mano cuando me acuerdo" no es una red. En el proyecto A se dieron páginas por buenas tras pasar Lighthouse por 9 de 12, y el barrido completo encontró tres violaciones más.

### CHECK 4 — Hidratación de meta tags

> **NO APLICA EN NEXT APP ROUTER.**

Compara el `<head>` sin JS contra el `<head>` tras arrancar React. Falla si alguna etiqueta se duplica o cambia de valor. Es el bug del canonical duplicado de la 3.4.

### CHECK 5 — Contraste

Parsea los tokens de color y valida los pares contra AA.

**Limitación a documentar en el propio script:** valida tokens, no usos reales sobre su fondo compuesto. Los textos con opacidad hay que comprobarlos con el color mezclado — para eso está el `color-contrast` de axe del CHECK 3.

---

## 6. Trampas que costaron tiempo

- **Peer dependencies que solo fallan en el deploy.** `check:all` corre con tu `node_modules`; el hosting instala desde cero. **Al añadir dependencias, haz `rm -rf node_modules package-lock.json && npm install` antes del push.** Si necesita `--force` o `--legacy-peer-deps`, no está arreglado
- **Archivos existentes en local pero sin commitear.** Un build que falla con "Could not load X" suele ser eso
- **Protección de despliegue del hosting** bloquea las verificaciones contra previews. Se resuelve con un bypass token
- **Servidores locales con puerto fijo** se pisan entre sí. Usa puerto efímero
- **Todos los greps de verificación van con `-i`.** Un grep sin `-i` dio por limpio un artículo que tenía dos apariciones falsas
- **No te fíes del nombre de los archivos.** En el proyecto B había alts que describían un plato distinto del que salía en la foto. Verifica el contenido real de cada imagen
- **`autoPlay` anula `preload="metadata"`.** Con las dos, el navegador se descarga el vídeo entero. Para carga diferida real: sin `autoPlay`, y arrancar con `IntersectionObserver`
- **HEVC/H.265 no lo decodifican Chrome ni Firefox.** Un `.mov` de iPhone es un recuadro negro para la mayoría de visitantes. Transcodifica a H.264, y el WebM VP9 en **dos pasadas con auto-alt-ref**. Descarta el WebM si pesa más que el MP4
- **Borrar archivos pesados del repo no los quita del historial.** Limpiarlo exige reescribir el historial y reclonar. Normalmente no compensa
- **Un `<br />` dentro del H1 pega las palabras en el `textContent`.** Un titular partido en tres líneas con `<br />` en el JSX se ve perfecto en pantalla, pero el texto plano del elemento sale **sin espacios**: `Agentes de IA paraclínicas estéticastu clínica trabajando sola`. Matiz honesto: `<br>` no separa palabras en `textContent` pero **sí** en `innerText`, y el renderizador de Google normalmente lo trata como salto, así que probablemente Google no lo lee pegado. **Quien sí lo lee pegado es cualquier auditoría que use `textContent`, y el nombre accesible del elemento.** Se arregla con un `{" "}` explícito antes de cada `<br />` —es una expresión JSX, el compilador no la borra, y no cambia nada visualmente—. Cuesta dos caracteres, así que se arregla; pero **no lo vendas como la causa de que la página rinda mal**, porque no lo es
- **El elemento LCP servido con `opacity: 0`.** Un H1 con `initial` de framer-motion sale en el HTML prerenderizado con `opacity:0;transform:translateY(24px)` y solo se hace visible tras hidratar. Google acaba viéndolo, pero es lastre de LCP directo sobre el elemento más grande de la página. Es la misma lección de la sección 13, y reaparece cada vez que alguien anima un hero
- **El operador `site:` de Google no sirve para contar páginas indexadas.** En el proyecto C devolvía 7 resultados con 54 páginas realmente indexadas. El número bueno está en Search Console → Indexación → Páginas

---

## 7. Trabajo con Claude Code

### Elección de modelo

- **Sonnet sin Plan Mode:** cambios acotados, uno o dos componentes, sin decisiones de fondo
- **Sonnet con Plan Mode:** varios archivos, pero el camino está claro
- **Opus con Plan Mode:** arquitectura, auditorías, bugs de origen desconocido, y **cualquier cosa que toque SEO o schema**

### Reglas

- **Rama aparte** para trabajo grande. Nada de push a `main` sin aprobación
- **Un commit por tarea o bloque coherente**, nunca uno gigante
- **Separa cambios visuales de cambios de contenido** en commits distintos, para que el diff del snapshot sea auditable
- **Bugs de conversión primero y a producción de inmediato**
- **Lotes de 2 artículos por prompt** si es contenido nuevo; de 5 si son mejoras sobre artículos existentes
- **Extrae componentes reutilizables** en vez de duplicar JSX
- **Si lo dejas trabajando sin supervisión**, dile: *"si cualquier verificación falla y no puedes arreglarla con confianza, NO hagas push"*. Mejor levantarse sin cambios que con la web del cliente rota toda la noche
- **Pide que verifique con capturas, no solo con asserts.** Un `forceMount` pasaba todos los tests y pintaba los ítems apilados; se detectó mirando la captura
- **Pide que reporte antes de arreglar** cuando corras una auditoría. Quieres ver los hallazgos, no que los resuelva sin que te enteres
- **Pregúntale por el alcance de sus propias verificaciones.** "¿Lo comprobaste en todas las páginas?" hizo aparecer tres violaciones que nadie había pedido buscar
- **Pídele que verifique saboteando.** "¿Cómo sabes que este test detecta el fallo?" es la pregunta que más veces destapó una red que no protegía nada
- **Las decisiones del cliente se anotan, no se toman:** copy, precios, cualquier cosa que afecte a la marca

> **APRENDIZAJE NUEVO (sept. 2026): que verifique contra el estado real, no contra lo que tú crees recordar.** En el proyecto C se dio por hecho durante semanas que una rama estaba sin mergear y `main` sin publicar. Al comprobarlo contra el remoto en vivo (`git ls-remote`, no la caché local), resultó que la rama se había mergeado y pusheado un mes antes. **Una premisa heredada de una nota vieja puede estar equivocada; el remoto manda.**

### Restricciones antes de un rediseño

1. No modificar el componente SEO ni sus props
2. No modificar los bloques de schema ni el JSON-LD
3. No cambiar el texto de ningún H1/H2/H3 (su aspecto sí)
4. No cambiar URLs ni rutas
5. No reescribir el copy de contenido
6. No tocar `robots.txt` ni `sitemap.xml`
7. Un solo H1 por página, H2/H3 en orden
8. Cualquier cambio de texto se propone y se decide, nunca se aplica por cuenta propia

### Orden de un rediseño

**Fase −1 — Bugs de conversión, directo a `main`.** En el proyecto A la CTA principal del hero **llevaba meses sin hacer nada en desktop**, y el botón de la barra móvil apuntaba a un ancla inexistente en 10 de 11 páginas.

**Fase 0 — Red de seguridad.** Rama aparte, test de regresión, baseline de Lighthouse.

**Fase 1 — Fundaciones.** Tokens, tipografía, primitivas. **Y el rendimiento va aquí, no al final**: es lo único del rediseño que impacta en ranking, y el rediseño completo puede tardar semanas.

**Fase 2 — Columna vertebral de conversión.**

**Fase 3+ — Páginas**, empezando por la home y las de dinero.

> **Maqueta antes de propagar:** aplica el sistema nuevo a **una sola página** y véla antes de propagarlo a quince. Mejor una página corta que ejercite varias primitivas (timeline, FAQ, CTA, tablas) que la home.

---

## 8. Contenido

### Meta tags

- **Title:** keyword al principio + sinónimo. Máximo 60 caracteres, contando el sufijo de marca si el template lo añade
- **Description:** keyword + beneficio + **CTA al final**. Google trunca sobre 155-160, pero descriptions de hasta 185 funcionan si el gancho va delante — lo que se corta es la cola
- **Quita el sufijo de marca** cuando necesites espacio para el gancho. Google suele añadir el nombre del sitio por su cuenta, y las búsquedas de marca ya posicionan solas
- **Usa la palabra que busca el usuario, no la del negocio.** En el proyecto A la web usaba el nombre de la ciudad y la gente buscaba el del país. Cambiarlo fue de los movimientos más rentables. Ver sección 17.6
- **Cifras concretas y defendibles**, respaldadas por algo que esté en la propia página
- **Inventaria todos los titles del sitio** y verifica unicidad. Al reorientar el title de la home hacia la keyword principal puede colisionar con el de la página de servicio

### Clusters

- Un artículo pilar por tema + 3-8 satélites muy específicos enlazados a él
- Cada satélite enlaza **2 veces** al pilar o a la página de servicio, con anchor text natural **en el cuerpo**, no solo en el CTA
- **Los satélites atacan keywords distintas, nunca la misma** — si dos artículos compiten por la misma búsqueda, se canibalizan. Cuando ya ha pasado, ver sección 18
- Antes de crear una tabla comparativa, comprueba que no existe ya una igual en otro artículo. Si existe, cambia los ejes deliberadamente

### Estructura de artículo

- **H1 con keyword principal + gancho de conversión**, no solo uno de los dos
- **Fórmula de partida para el H1 de una página de servicio: qué haces + a quién + dónde.** Sirve como andamio cuando no sabes por dónde empezar, pero **el "dónde" solo va si el negocio es local** (sección 1). En un negocio nacional o remoto, meter la ciudad en el H1 de la home estrecha el mercado en la página más importante para ganar una keyword local: la ubicación va en una landing propia, no en la home
- **Cada H2 responde su pregunta en las 2 primeras frases**, luego desarrolla. Crítico para featured snippets, AI Overviews y para ser citado por asistentes (sección 20)
- **Formato "guía que responde la pregunta real":** el título ES la pregunta tal como la teclea el usuario, y la respuesta se construye para que un asistente pueda citarla como fuente, no solo para posicionar. De dónde salen esas preguntas: sección 17.7. Detalle de estructura: sección 20.7
- Párrafos de máximo 3 líneas
- Tabla donde el contenido la pida de forma natural, nunca forzada
- **4 FAQ mínimo**, respuestas de 3+ frases, con el schema generado desde el mismo array
- CTA final con enlace a página de servicio
- 1.500-2.000 palabras
- **Fechas de publicación variadas**, no todos el mismo día

### Páginas de servicio

Una por cada cosa que vende el negocio. **Pregunta al cliente qué ofrece de verdad antes de escribir nada** — en el proyecto B se estuvo a punto de crear una página de un servicio que el negocio no prestaba.

Errores a evitar:

- **Páginas clonadas.** Tres páginas con el mismo template y ~180 palabras, con texto intercambiable con cualquier competidor. Para posicionar hacen falta 700-1.200 palabras con información operativa concreta
- **No mencionar los activos diferenciales.** Las páginas de servicio del proyecto B no mencionaban ni una vez el reconocimiento del negocio, ni el nombre del responsable, ni el año de apertura, **estando todo en la home**. Alguien que compara cuatro opciones en pestañas paralelas necesita una razón para elegir esta
- **Prometer lo que no se ofrece.** Genera leads malos y decepción. Contarlo al revés convierte mejor: **los "no" filtran y generan confianza**
- **Sin precios.** Es el mayor freno a la conversión
- **Sin fotos.** Elegir es una decisión visual. Y las fotos propias son la señal más clara de experiencia de primera mano

### Honestidad con los datos

- Solo "Fuente: X" cuando X es real y enlazable
- Si un dato no tiene fuente defendible, **suavízalo sin porcentaje**; no le inventes una atribución vaga
- Nunca "Fuente:" seguido del propio dato repetido
- Si es un cálculo propio, explicítalo con la fórmula
- **Comprueba que la fuente dice lo que tú afirmas.** En el proyecto C, una cifra atribuida a un estudio del MIT aparecía 40 veces, y el estudio en realidad hablaba de otra métrica. Atribuir mal es tan grave como inventar
- **Importa comercialmente:** si un cliente pregunta en una llamada de dónde sale ese dato, tienes que poder responder

### Autoridad y tono

- **Nombrar herramientas y competidores reales** da más autoridad que hablar en abstracto
- **Respeta la vertical:** no cites plataformas de un sector en un artículo de otro. Un lector del sector lo detecta
- Casos de éxito con cifras reales son el contenido más difícil de copiar
- **Evita el tono IA:** nada de "en el mundo actual" ni "hoy en día", estructura simétrica ni exceso de listas. Varía la longitud de las frases y alterna prosa con tablas

---

## 9. Contenido falso: el riesgo más subestimado

En el proyecto A había un componente con **certificaciones sin emisor, reseñas escritas a mano, contadores marcados como "verificado", y dos cifras de clientes contradictorias en la misma pantalla**. Se eliminó entero.

Y más tarde apareció algo peor: la web afirmaba prestar **un servicio que ya no existía**, en 39 sitios distintos (H1, metas, cierres de 5 páginas y dentro de un `FAQPage`). Y publicaba una duración de servicio que no correspondía con la real.

- **En una web que vende confianza, un dato que no se sostiene resta más de lo que suma.** Y en el schema, además, arriesga acción manual
- **Los datos del negocio cambian y la web no se entera.** Audita periódicamente lo que la web afirma contra lo que el negocio hace hoy
- **Corregir una mentira puede costar posiciones y hay que aceptarlo.** La frase estaba en el title, la description y el H1 indexados. Se quitó igualmente. **La palanca no es volver a poner la frase, es contestar mejor la pregunta**
- **Al corregir, inventaría todas las apariciones**, incluidas las de dentro del JSON-LD y las de los artículos
- **Cuidado con los find & replace ciegos:** si dos datos distintos comparten el mismo número, un reemplazo global rompe uno de los dos

---

## 10. YMYL: salud, dinero o decisiones importantes

- **E-E-A-T es condición de entrada, no un extra.** Sin profesional identificable, credenciales visibles, garantías transparentes y reseñas verificables, la web no posiciona por muy bien optimizada que esté
- **Los resultados tardan 6-12 meses**
- **La objeción principal es la desconfianza**, así que el contenido más rentable es el que la aborda de frente. En el proyecto A, la pregunta sobre la seguridad del tratamiento en el extranjero atacaba directamente lo que frenaba la compra
- **Busca el hueco en la narrativa.** Cuando todo el contenido en español sobre un tema es defensivo (escrito por competidores que quieren retener al cliente), hay sitio para el primero que responda con transparencia
- **Mostrar los límites genera más confianza que ocultarlos.** Una sección de "lo que cubre y lo que NO cubre la garantía" vende más que una que solo promete
- **Los testimonios anónimos** (sin nombre, fecha ni servicio) restan credibilidad: es lo que enseña una web fraudulenta

---

## 11. SEO local: Google Business Profile

**Si el negocio es local, esto es más importante que todo lo anterior.**

Google se basa en relevancia, distancia y prominencia. Del lado optimizable, el reparto aproximado según el Local Search Ranking Factors de Whitespark: **GBP ~32%, on-page ~19%, reseñas ~16%, enlaces ~15%, comportamiento ~8%, citaciones ~7%**.

- **Categoría principal:** la señal de relevancia más fuerte. La más específica posible, más secundarias precisas
- **Foto de portada:** lo primero que ve quien busca. Sube fotos buenas con frecuencia: Google prioriza las que reciben más interacción, así que las nuevas desplazan a las malas
- **Reseñas:** volumen, frescura y ratio de respuesta. Responder a todas en menos de 48h, especialmente las negativas. Subir unas décimas de valoración con miles de reseñas acumuladas requiere cientos de reseñas nuevas — es trabajo de meses
- **Horarios exactos**, incluidos festivos. Estar abierto en el momento de la búsqueda es un filtro crítico
- **Atributos:** todos los que apliquen
- **NAP consistente** en web, GBP y directorios. Datos contradictorios hacen que Google pierda confianza
- **Publicaciones** semanales
- **No metas keywords en el nombre del negocio.** El Spam Update de agosto 2025 penaliza el name stuffing

> **Verifica los datos tú mismo.** En el proyecto B se trabajó semanas asumiendo una cifra de reseñas muy superior a la real. Eso cambia por completo el diagnóstico competitivo.

---

## 12. Medición

- **Search Console:** clics, impresiones, CTR y **posición media por página**. Sin la posición no distingues un problema de CTR de uno de visibilidad
- **Muchas impresiones y 0 clics → problema de CTR** (title y description). No escribas más contenido antes de arreglar eso
- **Pocas impresiones → problema de posición**, y ahí sí hace falta contenido y autoridad

> **MATIZ IMPORTANTE (sept. 2026):** la regla del CTR **solo vale si ya estás en top 10-20**. Con posición media 36-49 no hay problema de CTR: es que nadie te ve. Los titles hay que arreglarlos igual, pero no esperes clics de ahí. **Antes de aplicar la regla, mira la posición.**

- **Si es local, además: insights de Google Business Profile** — búsquedas de descubrimiento vs de marca, llamadas, solicitudes de cómo llegar
- **Lighthouse móvil, nunca desktop.** El preset de desktop anula el throttling y da cifras sin significado
- **Fija un baseline antes de tocar nada**

### Cómo leer los datos sin entrar en pánico

- **Las fluctuaciones de las primeras 8-12 semanas son normales:** Google está probando la web en distintas posiciones
- **La posición media empeora al indexar artículos nuevos** (entran en posiciones bajas y arrastran la media). No significa que hayas empeorado
- **Orden natural del progreso:** primero impresiones → luego suben posiciones → luego llegan los clics
- **Julio-agosto es temporada baja** para búsquedas B2B en España
- 7 días para tendencia reciente, 28 días para evolución, 3 meses cuando ya hay historial
- Los datos de GSC tardan 2-3 días en actualizarse
- **Que un error aparezca como "validado" no significa que la página esté indexada.** Son dos cosas distintas

### Indexación

- Solicitar indexación manual acelera, pero hay **cuota diaria**
- Google tarda **24-48h** en procesarla
- Con muchas páginas nuevas, las indexa progresivamente durante 1-2 semanas
- **Lee los motivos de "sin indexar" uno a uno, no el total.** No es lo mismo:
  - *"Descubierta / Rastreada: actualmente sin indexar"* → cola de procesamiento, normal, se resuelve solo o pidiendo indexación
  - *"Página alternativa con etiqueta canónica adecuada"* o *"Página con redirección"* → problema de host o de canonicals
  - *"No se ha encontrado (404)"* → **esto sí es un fallo vivo.** Si entre las URLs hay páginas que deberían existir, hay enlaces internos rotos o rutas cambiadas sin redirect
  - *"Bloqueado por acceso no permitido (403)"* → revisar permisos del recurso
- **Normal y no preocupante:** las variantes sin https/www aparecen como "página con redirección", las páginas legales como "descubierta: actualmente sin indexar", y los assets (fuentes, favicon, imagen OG) aparecen entre las no indexadas sin que importe

---

## 13. Rendimiento y Core Web Vitals

Es factor de ranking. En el proyecto A la home pasó de decenas de MB a unos pocos, y el LCP p75 bajó de casi 10 segundos a menos de 1,5.

### Lo que más movió la aguja

1. **Vídeos fuera del camino crítico:** `preload="none"` + poster, carga bajo demanda, y fuera del grafo de assets. Eran la mayor parte del peso de arranque
2. **AVIF y WebP con `srcset`** por tamaño
3. **Autoalojar las fuentes.** La hoja de Google Fonts costaba unas décimas de segundo de FCP: bloquea el pintado y es una petición a otro origen
4. **Quitar animaciones de entrada del elemento LCP.** Un `animate-fade-up` en el H1 lo arrancaba en `opacity: 0` casi un segundo
5. **Imágenes al tamaño real.** La galería se servía como iconos diminutos estirados
6. **`width`/`height` explícitos** siempre
7. **Code splitting por ruta**

### CLS

- La causa más común es **el reflujo al cargar la tipografía**, no las imágenes
- `font-display: optional` da CLS cero, pero si la fuente no llega a tiempo esa visita se renderiza entera con la de respaldo. Autoalojar permite volver a `swap` sin CLS
- **El mismo titular en otro idioma puede romper el CLS**

### LCP

- **No todas las páginas tienen LCP de imagen.** Si el LCP es un párrafo, optimizar la galería ahorra peso pero no mueve el LCP. **Mide antes de trabajar**
- En una SPA sin prerenderizar, el **FCP es el suelo del LCP**

### Imágenes y Open Graph

- Una `og:image` por página, 1200×630, **por debajo de 300 KB**. Si pesa mucho, WhatsApp no genera previsualización y los enlaces salen sin foto. Para muchos negocios locales WhatsApp es el canal principal
- **Separa el `alt` del `caption`.** Si son el mismo campo, el alt acaba degradado a "Video 1"
- `loading="lazy"` bajo el pliegue; el hero **no** (es LCP), y dale `fetchpriority="high"`
- Un PNG es el formato equivocado para fotografía

---

## 14. Conversión y atribución

- **Una sola acción primaria** en todo el sitio. La home del proyecto A tenía 14 CTAs en desktop y 21 zonas táctiles en móvil; se bajó a 4 puntos de decisión
- **El verbo importa.** "Reservar" promete comprometerse y pagar; "Pedir presupuesto" describe lo que pasa. Cambiarlo baja la fricción
- **Un CTA arriba y otro abajo**, no solo al final
- **Enlace `tel:` visible** si el negocio recibe llamadas
- **Sube el precio al hero** si es competitivo: es el argumento que cierra la venta y suele estar a tres scrolls
- **Nunca escondas el argumento de venta en móvil.** Una tabla de precios ocultaba en pantallas pequeñas justo la columna de la que salía el ahorro que anunciaba su propio title. Las tablas pasan a fichas apiladas, no ocultan columnas
- **Fuera la urgencia falsa** si no hay nada detrás
- **Mensaje de WhatsApp precargado distinto por página.** Reduce la fricción del que no sabe qué escribir y te dice de qué página viene cada lead. Di **"os escribo desde vuestra web"**, nunca "os he encontrado en Google": alguien puede llegar desde redes o escribiendo la URL, y sería falso
- **Para números duros, evento en GA4** con la página de origen. El texto de WhatsApp se puede borrar antes de enviar, así que la atribución por texto es parcial

---

## 15. Internacionalización (i18n) con SEO

- **`hreflang` recíproco** entre cada pareja de URLs, verificado sobre el HTML servido, no solo en el código
- **Rutas propias por idioma**, cada una con su canonical
- **Decide el destinatario real.** Si los precios van en una divisa concreta, el idioma tiene región: `hreflang` genérico y `og:locale` acorde. Si algún día hay otra variante, se especifica y se añade
- **Test de "ningún enlace de una versión apunta a la otra".** En el proyecto A cazó tres fugas reales: hrefs a mano, el breadcrumb de seis páginas y una tarjeta. Todo enlace interno debe salir de una función `pathFor(clave, locale)`
- **Guardas de divisa en los dos sentidos**, mirando el HTML renderizado y el `<head>` entero ruta por ruta. Busca los códigos de divisa en mayúscula y con frontera de palabra, o das falsos positivos
- **El coste de la librería importa.** `i18next` + `react-i18next` añadían más de 20 KB gzip a la ruta crítica. Un motor propio de ~110 líneas con la misma API de `t()` lo dejó en menos de 3 KB. Si el idioma sale de la ruta y no hacen falta detección, plurales ni interpolación compleja, la librería es cara
- **Aviso:** si el blog es solo de un idioma, las páginas del otro no reciben enlaces internos desde contenido. Si se atascan sin indexar, la palanca es contenido en ese idioma, no un ajuste técnico

---

## 16. Backlinks y autoridad

- **Directorios españoles gratuitos:** Páginas Amarillas, Europages, Crunchbase, Empresite, Hotfrog, Cylex
- **Google Business Profile como negocio de área de servicio** (sin dirección física) si aplica
- **Cross-linking natural entre webs propias del mismo dueño** suma autoridad, si no es spam
- **Guest posts** en blogs del sector para más adelante
- Si el negocio es local, **backlinks locales** aunque tengan poca autoridad

---

## 17. Elección de keyword: método

La versión original de esta base no tenía nada sobre cómo se decide **sobre qué escribir**, solo sobre cómo escribirlo. Esto lo cubre.

### 17.1 Evaluar dificultad sin herramientas de pago

- **Leer el SERP a mano es el método más honesto.** El motor de casi todas las puntuaciones de dificultad son los dominios de referencia hacia el top 10: cuenta cuántos son y con qué autoridad. Si el top 10 lo ocupan foros, blogs pequeños o sitios de baja autoridad, la competencia es baja
- **Herramientas gratuitas con límite:** el checker gratuito de Semrush, Moz Keyword Explorer, SEMScoop, el de Backlinko. **Las puntuaciones nunca coinciden entre herramientas** para la misma keyword el mismo día, así que trátalas como direccionales, no como verdad
- **Bandas orientativas** que manejan esas herramientas: por debajo de 30 es abordable para un sitio nuevo con buen contenido; 30-49 moderada; por encima de 50 difícil. Para un dominio joven, empezar por debajo de 30

### 17.2 Leer el SERP para juzgar si puedes competir

1. **Intención:** ¿el top 10 es informacional, comercial o transaccional? Si tu formato no coincide con el dominante, no rankeas por bueno que sea el contenido
2. **Tipo de resultados:** ¿hay AI Overview, People Also Ask, vídeos, packs? Cada feature reduce el espacio orgánico y el CTR
3. **Quién ocupa el top 10:** si son las propias plataformas del sector con dominios fuertes, la keyword de cabecera es inalcanzable a corto plazo; ataca la variante long-tail

### 17.3 Long-tail vs cabecera

- Sitio pequeño → **long-tail** (más específica, menor competencia, mayor intención). Acumular victorias en long-tail construye autoridad temática antes de intentar la cabecera
- La cabecera se ataca con una **pillar page** una vez el cluster de long-tail ya rankea

### 17.4 Detectar keywords comerciales de baja competencia

- Variantes **"alternativas a X", "X vs Y", "precio de X", "opiniones de X"** son bottom-of-funnel: menos competidas y con intención de compra. Ver sección 19
- Keywords con lenguaje de cliente insatisfecho ("X caro", "X no funciona", "alternativa a X") son de altísima intención comercial

### 17.5 Usar tu propio Search Console para decidir el siguiente contenido

Es el activo más infrautilizado.

- **Consultas con impresiones y 0 clics en posición 8-20:** las de mayor palanca. Ya rankeas pero fuera del top; una mejora de title o de contenido puede subirlas
- **Si la posición media está por encima de 30**, el trabajo NO es crear más contenido: es **concentrar autoridad** (consolidar canibalizaciones + enlazar huérfanos). Diluir más empeora
- **Agrupa las consultas por tema antes de leerlas.** En el proyecto C, cinco consultas distintas que parecían sueltas eran todas gente buscando un programa de gestión: más de una cuarta parte de las impresiones totales apuntaban a un tema para el que no había página comercial

### 17.6 El lenguaje del cliente, no el del negocio

Es la lección más rentable de toda la base y aparece en dos proyectos distintos:

- En el proyecto A la web usaba el nombre de la ciudad y la gente buscaba el del país
- En el proyecto C el contenido decía "software para clínicas" y las consultas reales decían **"programa"** y **"centro de estética"**

**Regla accionable:** el H1, el `title` y el primer párrafo usan las palabras exactas que teclea el cliente; los sinónimos van en el cuerpo. Y el anchor text de los enlaces internos hacia esa página también usa el término del cliente. Search Console te dice cuál es: mira las consultas reales, no lo que tú llamarías a tu producto.

### 17.7 De dónde salen las preguntas reales

Por orden de fiabilidad, porque no todas valen lo mismo:

1. **Tu propio Search Console** (17.5). Son consultas reales de gente que ya te encontró. Es el único dato de origen que no depende de la estimación de nadie
2. **People Also Ask y las búsquedas relacionadas del SERP.** Gratis, y salen del mismo Google al que quieres gustar
3. **Answer The Public.** Introduces una keyword y devuelve las preguntas que la gente formula alrededor, en rueda o en listado. Útil para arrancar un cluster desde cero, cuando todavía no tienes datos propios
4. **Lo que te preguntan los clientes por WhatsApp, por teléfono o en la primera llamada.** Es la fuente más infravalorada y la que mejor lenguaje de cliente da (17.6)

> **Aviso de prioridad:** una herramienta de preguntas sirve para **decidir sobre qué escribir cuando no hay nada escrito**. Si ya tienes decenas de artículos con huérfanas y canibalizaciones, generar más preguntas es echar agua en un cubo agujereado: primero enlazar y consolidar (secciones 18 y 21), después ampliar. La regla de 17.5 manda — con posición media por encima de 30, el trabajo es concentrar autoridad, no diluirla.

---

## 18. Consolidar contenido canibalizado

La sección 8 dice cómo evitar la canibalización. Esto es qué hacer cuando ya la tienes.

### 18.1 Detección

**Search Console → Rendimiento → filtrar por una consulta concreta → pestaña Páginas.** Si dos o más URLs tuyas reciben impresiones por la misma consulta, hay solapamiento.

**Señal confirmatoria (no basta con ver dos URLs):** que las dos **intercambien posiciones** semana a semana para la misma consulta con la misma intención, y ninguna suba. Dos URLs con intenciones distintas (informacional vs transaccional) que aparecen para la misma consulta **NO** es canibalización: no las consolides.

### 18.2 Qué URL sobrevive

Por criterios objetivos, no por antigüedad: posición media más estable a 90 días, más clics históricos, más enlaces internos entrantes, URL más limpia y alineada con la keyword, y mejor ajuste a la intención.

### 18.3 Cómo fusionar

Volcar el contenido único del perdedor en el ganador, quedándose con las mejores secciones de ambos. **Si los dos artículos comparten H2 casi idénticos, el fusionado suele ser el candidato natural a pillar del cluster.**

### 18.4 301 vs canonical vs noindex

| Situación | Acción | Por qué |
|---|---|---|
| Dos páginas misma intención, una más fuerte | **Consolidar + 301** | Traslada usuario y link equity a la URL fuerte |
| Dos versiones necesarias técnicamente (print, UTM) | **Canonical** | Ambas siguen accesibles; consolida señales sin borrar |
| Páginas thin que drenan autoridad | **noindex** | Salen del índice sin romper funcionalidad |
| Intenciones diferenciables | **Diferenciar**, no consolidar | Cada una rankea por su variante |

### 18.5 Los enlaces internos que apuntaban al perdedor

Error más común post-consolidación: dejar enlaces internos apuntando a una URL que ahora hace 301. **Actualiza todos los enlaces al destino final**, no vía redirect: cada salto pierde un poco y ensucia el rastreo.

### 18.6 Plazos, y qué NO se puede prometer

Tras consolidar es normal una volatilidad temporal mientras Google reprocesa el 301. La recuperación se mide en semanas.

> **No existe una cifra pública fiable de "X% de mejora tras consolidar".** Circulan porcentajes en blogs de agencia sin metodología reproducible. Se omiten deliberadamente conforme a la regla de rigor de este documento.

### 18.7 Cómo medir si funcionó

- La URL ganadora sube en posición media para la consulta objetivo
- Los clics agregados de las dos URLs antiguas se concentran en una y crecen
- Desaparece el intercambio de posiciones en la pestaña Páginas

---

## 19. Páginas de comparación y "alternativas a X"

### 19.1 Intención

"Alternativas a [X]" y "[X] vs [Y]" son **bottom-of-funnel, máxima intención de compra**. Suelen ser menos competidas que la cabecera y convierten mejor. En búsqueda con IA pesan aún más: si el asistente nombra dos competidores y tú no apareces en ese momento, no entras en la shortlist.

### 19.2 Estructura

- **Formato consistente:** H1 con la keyword exacta y lenguaje de cliente, tabla comparativa, capturas, checklists
- **Framework de "switching logic":** (1) el disparador por el que alguien deja X, (2) los criterios de decisión, (3) las alternativas y a qué escenario encaja cada una, (4) evidencia verificable, (5) siguiente paso. Una página de alternativas fracasa cuando es un listado genérico que no explica el reemplazo
- **Cada sección autocontenida**, para que un asistente pueda extraerla
- **Una página por intención.** "Alternativas a X", "X vs Y" y "migrar de X" responden preguntas distintas; no las mezcles

### 19.3 Honestidad (regla operativa, no solo ética)

Las páginas que afirman ganar en todo se ignoran, tanto por usuarios como por asistentes. **Reconoce al menos un punto donde el competidor destaca.** Y como se ve abajo, aquí la honestidad objetiva es además un requisito legal.

### 19.4 Marco legal en España y la UE — publicidad comparativa

Nombrar marcas registradas de competidores es lícito, pero condicionado. Marco: **Directiva 2006/114/CE** y, en España, el **art. 10 de la Ley 3/1991 de Competencia Desleal**. Las condiciones son **acumulativas** — hay que cumplirlas todas:

- Compara bienes o servicios que satisfacen **la misma necesidad o finalidad**
- La comparación es **objetiva** sobre características **esenciales, pertinentes, verificables y representativas** (el precio puede incluirse)
- **No es engañosa**
- **No denigra** marcas, productos ni actividad del competidor
- **No saca provecho indebido** de la reputación ajena
- **No crea confusión** entre anunciante y competidor
- No presenta el producto propio como imitación o réplica de uno con marca protegida

La jurisprudencia del TJUE (*O2 Holdings v Hutchison 3G*, C-533/06) confirma que usar la marca ajena en publicidad comparativa no infringe por sí solo **si se cumplen todas las condiciones**; y (*L'Oréal v Bellure*, C-487/07) que **sí puede infringir si no se cumplen**, aunque no haya confusión.

**Reglas accionables:**
- Toda afirmación comparativa **objetiva y verificable con fuente** (precio publicado, funcionalidad documentada). Coincide con la regla de rigor de este documento
- Comparar características representativas, no cherry-picking de detalles favorables
- **Fechar y revisar.** Los precios y funciones del competidor cambian, y una comparación desactualizada se vuelve *engañosa* — y por tanto ilícita

### 19.5 Schema

**No existe un tipo schema.org de "comparación" que dé rich results.** Se puede usar `FAQPage` para las preguntas y `SoftwareApplication`/`Product` con cautela y datos veraces. Se implementa por extractabilidad para asistentes (sección 20), no por el snippet.

---

## 20. Visibilidad en buscadores y asistentes con IA (GEO/AEO)

> **ADVERTENCIA DE RIGOR:** este campo está saturado de estadísticas de marketing sin fuente que se contradicen entre sí, muchas publicadas por vendedores de herramientas GEO. Aquí se separa lo **confirmado por el proveedor**, lo que tiene **evidencia parcial** y lo que es **especulación del sector**. Cada bloque va etiquetado.

> **REESCRITA EN SEPTIEMBRE DE 2026.** La versión anterior de esta sección se redactó antes de que Google publicara documentación oficial y antes de que existieran pruebas controladas sobre schema. Dos de sus afirmaciones eran falsas y están anotadas en el registro de correcciones del final.

### 20.1 La postura oficial de Google: "GEO y AEO siguen siendo SEO"

**[CONFIRMADO POR EL PROVEEDOR]**

El **15 de mayo de 2026** Google publicó su primera documentación oficial sobre esto: *"Optimizing your website for generative AI features on Google Search"*, en `developers.google.com/search/docs/fundamentals/ai-optimization-guide`, bajo una sección nueva llamada "Generative AI fundamentals". Es la fuente más sólida que existe hoy y desmonta buena parte del discurso comercial.

Lo que dice:

- **Optimizar para IA generativa en Google ES SEO.** Cita literal: *"optimizing for generative AI search is optimizing for the search experience, and thus still SEO"*. AI Overviews y AI Mode no corren sobre un ranking secreto aparte: se apoyan en los sistemas de ranking y calidad del buscador de siempre.
- **Cómo se construye la respuesta:** **RAG** (recupera páginas del índice de Search y genera la respuesta mostrando enlaces de apoyo) y **query fan-out** (el modelo lanza en paralelo varias consultas derivadas de la original). Para entrar hay que estar **indexado y ser elegible para aparecer con snippet**.
- **Aviso explícito:** NO crear una página por cada variación del fan-out. Google lo clasifica como *scaled content abuse*.
- **Elegibilidad:** el sitio debe estar incluido en las funciones de IA generativa; hay un toggle en Search Console para excluirse sin perder el ranking clásico.
- **Sobre JavaScript:** Googlebot lo procesa si no está bloqueado. **Esto vale solo para Google. Ver 20.2, que es lo importante.**

El **5 de junio de 2026** Google publicó además una guía sobre herramientas y servicios SEO de terceros. Tres puntos accionables:

- Google **no evalúa ni respalda** ninguna herramienta SEO. Desconfía de cualquier "aprobado por Google".
- **Ninguna herramienta de terceros tiene acceso a los datos de ranking internos de Google.** Domain Authority, Domain Rating, Authority Score y similares los inventan las empresas que los venden.
- Por primera vez, la guía de contratación menciona **AEO/GEO por su nombre** como servicio legítimo que un SEO puede ofrecer.

> **Consecuencia para este documento:** para Google, las secciones 3 a 19 **son** el trabajo de GEO. No hay una disciplina paralela. Lo que sigue en esta sección es lo que de verdad difiere, y casi todo está fuera de Google.

### 20.2 Lo que sí diferencia al GEO: los crawlers de IA no ejecutan JavaScript

**[EVIDENCIA PARCIAL — un estudio grande y muy citado, no replicado a esa escala]**

Es el hallazgo más accionable de toda la sección. Fuente: estudio conjunto de **Vercel y MERJ, "The Rise of the AI Crawler"** (17 de diciembre de 2024), sobre cientos de millones de peticiones reales.

- **Ninguno de los grandes crawlers de IA renderiza JavaScript.** Descargan ficheros JS (ChatGPT en torno al 11% de sus peticiones, Claude al 24%) pero **no los ejecutan**.
- ChatGPT prioriza HTML: cerca del 58% de sus peticiones.
- **La excepción es Gemini**, que hereda a Googlebot y sí renderiza.

**Qué significa:** una página que Google renderiza y posiciona sin problema puede ser un **cascarón vacío** para ChatGPT, Claude y Perplexity. Es el mismo fallo de la sección 3.3, pero con un agravante decisivo: **Google lo compensa con una segunda ola de rastreo; los asistentes no lo compensan nunca.**

- **Si el proyecto es una SPA sin prerenderizar:** es invisible para los asistentes. Prerenderizar deja de ser una mejora de SEO y pasa a ser condición de existencia.
- **Si el proyecto es Next App Router con SSR/SSG:** resuelto de base, **pero hay que verificarlo**. Todo lo que se cargue solo en cliente —`useEffect` + `fetch`, tabs de Radix que desmontan, acordeones, precios traídos por API— no lo ve ningún asistente. **La sección 3.6 aplica aquí con más fuerza todavía.**
- **Verificación:** el CHECK 2 de la sección 5 ya lo cubre, porque comprueba sobre el HTML crudo sin ejecutar JS. Añádele un `curl` con user-agent de bot de IA a las URLs clave, buscando una frase del cuerpo.

### 20.3 Los bots de cada motor: cuál te cita y cuál solo entrena

**[CONFIRMADO POR LOS PROVEEDORES]**

> **CORRECCIÓN a la versión anterior de este documento**, que decía que GPTBot hacía "entrenamiento + retrieval". **Es falso.** GPTBot solo entrena; bloquearlo no te quita ni una cita. El que decide si ChatGPT te cita es **OAI-SearchBot**. Confundirlos lleva a bloquear justo lo que no había que bloquear, o a creerse protegido cuando no lo estás.

| Motor | Entrenamiento | Bot que te hace citable | Fetch por usuario | ¿Renderiza JS? | Índice del que tira |
|---|---|---|---|---|---|
| ChatGPT | GPTBot | **OAI-SearchBot** | ChatGPT-User | No | Bing (principal) + propio |
| Claude | ClaudeBot | **Claude-SearchBot** | Claude-User | No | Índice propio |
| Perplexity | — | **PerplexityBot** | Perplexity-User | No | Propio + tiempo real |
| Copilot | — | Bingbot | — | Parcial | Bing |
| Google AI Mode / AIO | Google-Extended | Googlebot | — | **Sí** | Google |

Detalles que importan:

- **ChatGPT-User puede no respetar robots.txt.** OpenAI lo documentó en agosto de 2026: como la acción la inicia el usuario, robots.txt puede no aplicarse a ese agente.
- **Anthropic sí respeta robots.txt en los tres bots**, incluido Claude-User. Los tokens antiguos `anthropic-ai` y `claude-web` están **deprecados**: si los tienes en tu robots.txt, no hacen absolutamente nada.
- **Google-Extended controla el entrenamiento de Gemini y NO afecta a Google Search** ni a los AI Overviews. Esto sigue siendo cierto.
- **ChatGPT depende en gran medida del índice de Bing.** Si Bing no te ha indexado, es improbable que ChatGPT te descubra y te cite. **Dar de alta el sitio en Bing Webmaster Tools deja de ser opcional.** Lo mismo vale para Copilot.
- **Perplexity y el caso Cloudflare (agosto de 2025):** Cloudflare acusó públicamente a Perplexity de rotar user-agents e IPs para saltarse bloqueos y lo deslistó de su programa de bots verificados; Perplexity lo negó. Para un negocio que **quiere** ser citado esto es irrelevante. Importa si algún día quieres bloquearlo: el control por robots.txt sobre Perplexity es menos fiable que sobre OpenAI o Anthropic.

**Recomendación operativa para un negocio que quiere visibilidad:** permitir explícitamente los bots de citación (OAI-SearchBot, Claude-SearchBot, PerplexityBot y los `-User`) y decidir aparte sobre los de entrenamiento, que es una decisión de negocio y no de SEO. **El riesgo real sigue siendo un `User-agent: *` demasiado amplio** que se lleve por delante a Googlebot o a OAI-SearchBot.

### 20.4 Mythbusting: lo que Google dice que NO hace falta

**[CONFIRMADO POR EL PROVEEDOR]** La guía de mayo de 2026 trae una sección de mitos. Nada de esto sirve para Google Search:

- **llms.txt y demás ficheros "para IA".** Ver 20.5.
- **"Chunking" del contenido.** No hay que trocearlo artificialmente ni existe una longitud ideal de página.
- **Reescribir el contenido en versión "para IA"** persiguiendo cada variante long-tail. Los sistemas entienden sinónimos y significados.
- **Schema especial para IA.** Ver 20.6.
- **Buscar menciones inauténticas.** No ayuda tanto como se vende, y hay sistemas antispam.
- **Sobreoptimizar los datos estructurados.**

### 20.5 llms.txt: no lo implementes

**[EVIDENCIA PARCIAL, con conclusión clara]**

- Lo propuso **Jeremy Howard** (Answer.AI / fast.ai) el 3 de septiembre de 2024. Es una propuesta de comunidad, **sin organismo de estándares detrás** y sin adopción comprometida por ningún motor.
- **No es un mecanismo de control de acceso:** no bloquea nada, a diferencia de robots.txt. Es un índice curado en Markdown.
- **Google lo ignora oficialmente.** Lo confirmaron Gary Illyes y John Mueller antes de que la guía de mayo de 2026 lo pusiera por escrito; Mueller lo comparó con las meta keywords.
- **Ningún proveedor —OpenAI, Anthropic, Perplexity— documenta usarlo para citación.**
- Un análisis de Ahrefs sobre unos 137.000 sitios encontró que la inmensa mayoría de los ficheros llms.txt no recibió ni una petición.
- **El único uso real demostrado** es para herramientas de desarrollo (Cursor, Copilot, Claude Code, servidores MCP) que consumen documentación técnica en vivo.

**Veredicto:** para una web de servicios o de negocio local, **no merece la pena**. Si algún día un motor lo activa, se añade en cinco minutos.

### 20.6 Schema: no compra citas, pero se mantiene igual

**[EVIDENCIA PARCIAL FUERTE — hay pruebas controladas]**

> **CORRECCIÓN a la versión anterior**, que decía que "no hay prueba pública fuerte de que el schema aumente las citas". Ahora sí la hay, y **es negativa**: el schema no mueve las citas.

- **Prueba de Ahrefs** (mayo de 2026): siguieron **1.885 páginas que añadieron JSON-LD** entre agosto de 2025 y marzo de 2026, contra unas 4.000 de control, con diferencias-en-diferencias. Resultado: **+2,2% en ChatGPT y +2,4% en AI Mode —indistinguibles de cero— y −4,6% en AI Overviews**. Encontraron también que las páginas citadas llevan schema casi tres veces más a menudo que las no citadas, pero lo enmarcan **explícitamente como correlación, no como causa**.
- **Prueba de Mark Williams-Cook** (febrero de 2026): puso la dirección de una empresa ficticia **solo dentro de un JSON-LD inválido**, sin que apareciera en el texto visible. ChatGPT y Perplexity la devolvieron igual. Conclusión: los asistentes **extraen el texto del bloque**, no interpretan el schema como schema.
- Un experimento de searchVIU (octubre de 2025) sobre cinco motores encontró que **todos ignoraron el JSON-LD oculto** en recuperación en tiempo real: solo leen el HTML visible.
- **Copilot es la excepción parcial:** al heredar Bing, sí puede usar señales de datos estructurados.

**Qué hacer con esto:**

- **Mantén el schema que ya tienes.** Sigue valiendo para rich results, para desambiguar la entidad y para el Knowledge Graph. La sección 4 no cambia ni una línea.
- **No lo amplíes esperando citas.** El efecto medido es cero.
- **Lo que sí extraen los asistentes es el Q&A visible en el HTML.** Si tienes un `FAQPage`, asegúrate de que esas preguntas y respuestas están **en pantalla**, no solo en el markup. Refuerza la regla de la sección 4: vista y schema leen del mismo array.
- **Nota sobre FAQPage:** Google **retiró los rich results de FAQ el 7 de mayo de 2026** para todos los sitios, completando lo que empezó en agosto de 2023. El markup sigue siendo válido y Google dice que lo sigue usando para entender la página, **pero ya no pinta el desplegable en el SERP.** No cuentes con ese snippet al justificar el trabajo.

### 20.7 Estructura que favorece ser citado

**[EVIDENCIA PARCIAL — direccionalmente respaldada]**

- **Respuestas autocontenidas por sección:** una pregunta = un H2 = respuesta clara en las 2 primeras frases. Es la misma regla de la sección 8, y aquí es lo que permite al motor extraer el pasaje sin leer el resto.
- **Estadísticas con fuente y citas textuales.** Es lo único que respalda el paper GEO (20.8), y encaja con la regla de rigor de este documento: la cifra que puedes defender es además la que te hace citable.
- **H2 y H3 en forma de pregunta, con el lenguaje del cliente** (sección 17.6).
- **Formato "guía que responde la pregunta real":** el título del artículo es la pregunta tal como la teclea el usuario, y la respuesta se construye para que un asistente pueda citarla como fuente, no solo para posicionar entre los diez enlaces azules. De dónde salen esas preguntas: sección 17.7.
- **Lo que NO funciona:** el keyword stuffing salió **peor que no hacer nada** en el paper GEO.

### 20.8 El paper GEO: qué dice de verdad y qué no

**[EVIDENCIA PARCIAL — es el mejor ancla que existe, con límites serios]**

Paper *"GEO: Generative Engine Optimization"* — Aggarwal, Murahari et al. (IIT Delhi + Princeton), arXiv 2311.09735, publicado en **KDD '24**. Benchmark propio (GEO-bench) de unas 10.000 consultas.

**Resultados:** mejora agregada de visibilidad de hasta el 40%. Por técnica: **añadir estadísticas ~+41%**, **citas textuales ~+28%**, **citar fuentes ~+115% en contenido peor posicionado**. El keyword stuffing empeoró en torno a un 10% respecto a la línea base.

**Límites que hay que conocer antes de citarlo:**

1. **Fue un benchmark sintético, no motores en producción.** El "motor generativo" era GPT-3.5 sobre las cinco primeras fuentes de Google, no ChatGPT, ni Perplexity, ni AI Overviews reales.
2. **Solo cinco fuentes por consulta**, lo que **amplifica artificialmente** las ganancias relativas.
3. Las optimizaciones **las aplicó un LLM**, no personas.
4. Cada técnica se midió **en aislamiento**: los porcentajes **no se suman**.
5. Corte temporal 2023/2024. Los motores han cambiado varias veces desde entonces.

**Cómo usarlo:** la **dirección** es fiable y coincide con lo observable (los datos y las citas ayudan, el relleno perjudica). **Los porcentajes no son transferibles** y no se le dicen a un cliente como si fueran una promesa.

### 20.9 Lo demás con fuente primaria

- **Pew Research Center** — Chapekis & Lieb, 22 jul 2025, casi 69.000 búsquedas reales de marzo de 2025. Con AI Overview presente, los usuarios clicaron un resultado orgánico en el **8%** de las visitas frente al **15%** cuando no lo había; solo el **1%** clicó un enlace del propio resumen; el **88%** de los resúmenes citó **3 o más fuentes**. *(Google discutió la metodología; las cifras publicadas se sostienen.)* **[ALTA]**
- **Rutgers/Wharton** sobre bloqueo de crawlers de IA (Zhao & Berman, arXiv 2512.24968). **Ojo con la versión:** la original (dic. 2025) reportaba caídas de tráfico de dos dígitos; la revisión de 2026 la rebajó a en torno al 7% semanal. Lo que se sostiene entre versiones: **bloquear reduce el tráfico sin reducir de forma fiable las citas de IA**. **[MEDIA]**
- **Solapamiento entre orgánico y citas:** los estudios se contradicen y cambian mes a mes. Lo que se repite: **el solapamiento con el top 10 ha ido bajando** y una parte relevante de las citas viene de fuera del top 20. Lectura: **posicionar bien sigue siendo necesario pero ya no suficiente.** **[PARCIAL — estudios de industria]**
- **¿Convierte mejor el tráfico de IA?** Seer Interactive (un solo cliente B2B, ~11.000 sesiones de IA frente a ~14 millones orgánicas) midió tasas de conversión muy superiores desde ChatGPT y Perplexity. **Contraejemplo académico:** Kaiser & Schulze (Marketing Science), sobre 973 ecommerce y decenas de miles de transacciones, encontró que ChatGPT convertía **por debajo** del orgánico. **Lectura honesta:** parece favorable en B2B y en fase de consideración, desfavorable en compra por impulso. **Las cifras concretas no se prometen a un cliente.** **[PARCIAL — casos únicos, no generalizable]**

### 20.10 Qué se puede medir

**[CONFIRMADO POR EL PROVEEDOR / PRÁCTICA DE SECTOR]**

- **Search Console → Rendimiento → IA generativa**, lanzado el **3 de junio de 2026**. Cubre AI Overviews y AI Mode, con vistas separadas para Search y Discover. **Limitaciones reales:** solo da **impresiones** —sin clics, sin CTR, sin posición, sin consultas— y **no separa AI Overviews de AI Mode**. Es un subconjunto del informe general: **no sumes los dos, duplicarías**.
- **Truco confirmado (Mueller, agosto de 2026):** las consultas de AI Mode **sí están en el informe general**, con clics y posición, mezcladas con el tráfico normal. Se reconocen por los follow-ups cortos que no tienen sentido como búsqueda aislada ("sí, sigue", "y eso por qué"). Ese es el termómetro real de AI Mode.
- **GA4:** crea un **canal personalizado** que agrupe las sesiones cuyo origen contenga `chatgpt.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com` o `copilot.microsoft.com`. Por defecto GA4 las clasifica como "direct" o referral genérico. **Limitación:** mucho tráfico de IA llega sin referrer (apps nativas), y solo una fracción de las menciones lleva enlace clicable, así que **la mayor parte de la visibilidad en asistentes no aparece en ninguna analítica**.
- **Herramientas de monitorización:** Otterly.ai, Peec AI, Profound, Scrunch, Evertune, Ahrefs Brand Radar, Semrush AI Toolkit, SE Ranking. **Cómo funcionan de verdad:** lanzan prompts predefinidos contra los motores y cuentan menciones. **Fiabilidad:** el resultado depende enteramente de qué prompts eligen, y las respuestas de un LLM **no son deterministas**. Google avisa expresamente de que ninguna herramienta tiene acceso a sus datos internos. **Úsalas como termómetro de tendencia, nunca como verdad, y no le prometas un "share of voice" a un cliente.**

### 20.11 Entidad y señales fuera de la web

Fundamentado **[PARCIAL]**:

- **Wikidata y Wikipedia alimentan el Knowledge Graph** y están en el corpus de casi todos los modelos. **Wikidata tiene un umbral de notabilidad más bajo que Wikipedia** y acepta entidades que Wikipedia rechazaría: es la vía realista para una pyme.
- **Un negocio que solo existe en su propia web tiene poca señal** para que un modelo lo recomiende. Las menciones reales en terceros —prensa, directorios sectoriales, casos publicados— son el mecanismo. Coincide con la sección 16.
- **Consistencia de NAP y del nombre de marca** ayuda a la desambiguación. Es SEO de entidad clásico, sección 11.

Especulación de agencia, **no citar** **[ESPECULACIÓN]**:

- Cifras del tipo "las citas suben del 2% al 30% en el mes 18 con X co-menciones al año". Sin metodología pública.
- La idea de un "score de confianza interno por entidad" dentro del modelo: útil como modelo mental, **no verificable desde fuera**.

Y recuerda que Google dice explícitamente que **buscar menciones inauténticas no ayuda** (20.4).

### 20.12 Español y negocios locales: el hueco de datos

**[ESPECULACIÓN / SIN DATOS FIABLES — se documenta el hueco a propósito]**

**No existen estudios independientes serios sobre cómo se comportan estos motores en español ni sobre el mercado español.** Hay un indicio de que en alemán los AI Overviews de temas de salud citaban mucho YouTube por encima de fuentes médicas oficiales, lo que sugiere que **fuera del inglés los patrones pueden ser aún más ruidosos**, pero es un solo estudio y en otro idioma.

Tampoco hay datos públicos sobre cómo ponderan los asistentes las reseñas en español ni los directorios españoles (Páginas Amarillas, Doctoralia, Booksy). **Trátalo como hipótesis a validar con pruebas propias, no como hecho.** Lo único que sí dice Google es que Google Business Profile y Merchant Center alimentan las respuestas de IA con negocios locales, lo cual refuerza la sección 11.

### 20.13 En qué se diferencia del SEO clásico (versión revisada)

- **Para Google: no se diferencia.** Es SEO. Las secciones 3 a 19 son el trabajo, y no hay atajo.
- **Para el resto de motores** sí hay tres diferencias reales y accionables:
  1. **Acceso:** distintos bots, distinto robots.txt y, sobre todo, **HTML sin JavaScript** (20.2).
  2. **Índice de origen:** ChatGPT y Copilot dependen de Bing, así que hay que estar dado de alta en Bing Webmaster Tools (20.3).
  3. **Unidad de éxito:** ser una de 3-6 fuentes citadas en una respuesta sintetizada, no ocupar un puesto en una lista de diez.
- **El clic deja de ser la métrica única:** importa la mención aunque no haya clic, y buena parte de esa visibilidad no aparece en ninguna analítica (20.10).

### 20.14 Qué haría cambiar estas recomendaciones

Puntos de vigilancia, para no dejar esta sección envejecer en silencio:

- **Si se documenta que los crawlers de IA empiezan a renderizar JS:** el 20.2 deja de ser crítico. El dato es de diciembre de 2024 y puede cambiar sin aviso.
- **Si aparece una réplica del paper GEO sobre motores en producción:** las tácticas de contenido pasan de direccionales a cuantificables.
- **Si alguien publica una prueba controlada con efecto positivo del schema en páginas nuevas** (Ahrefs midió sobre páginas que ya recibían citas): habría que reconsiderar 20.6.
- **Si Search Console añade clics y consultas al informe de IA generativa:** se deja de depender de herramientas de terceros para medir retorno.

---

## 21. Arquitectura de enlazado interno a escala

La sección 3.7 trata las huérfanas como incidencia puntual. Cuando son decenas, es un fallo de arquitectura y se resuelve rediseñando, no parcheando.

### 21.1 Modelo pillar/cluster

Una **pillar page** cubre un tema amplio y enlaza hacia abajo a cada **cluster page** (subtemas long-tail); cada cluster enlaza **de vuelta** a la pillar. Ese patrón bidireccional concentra autoridad temática y señala que el cluster es un cuerpo coherente, no artículos sueltos.

- **De 5 a 15 cluster pages por pillar.** Menos de cinco suele indicar que el tema no está cubierto; más de quince hace la estructura confusa
- Cross-links **selectivos** entre clusters que comparten subtema. Enlazar todo con todo diluye la señal
- Con muchos artículos sueltos, agrúpalos en **3-7 pillars temáticos** y cuelga cada uno de su pillar

### 21.2 Cuántos enlaces y hacia dónde

- Un suelo razonable: **5 enlaces contextuales internos por cada 1.500 palabras** como mínimo; las páginas comerciales prioritarias, más
- **Estudio Zyppy** (Cyrus Shepard, 23 millones de enlaces internos en ~1.800 sitios): las URLs con muchos enlaces internos entrantes recibieron bastantes más clics que las de casi ninguno, **pero el efecto se revierte pasadas unas decenas** (probablemente porque esos enlaces extra son de navegación sitewide, no contextuales). **El propio estudio avisa de que es correlación, no causa**
- **Umbral operativo:** ninguna página con 0 enlaces entrantes, y las páginas de dinero por encima de ~10

### 21.3 Distribuir autoridad desde la home

- La home es la página con más autoridad: debe enlazar a **las páginas de servicio y a las pillars**, no solo al feed del blog
- **Cada página prioritaria a ≤3 clics de la home**

### 21.4 Bloques de "artículos relacionados"

Aportan, con matiz: los enlaces **en el cuerpo del texto pesan más** que los de footer, sidebar o bloques automáticos. Un bloque de relacionados ayuda a rescatar huérfanas, **pero no sustituye a los enlaces contextuales**.

### 21.5 Anchor text a escala

- Un anchor descriptivo por enlace; **no repetir el mismo exact-match** en cada enlace a la misma página: varía formulaciones naturales
- Evita genéricos ("clic aquí", "leer más") y anchors vacíos
- Usa el **lenguaje del cliente** (sección 17.6)
- La sobreingeniería de anchors puede correlacionar con pérdidas: un exact-match donde encaje de forma natural es suficiente

### 21.6 Cómo auditarlo

- **Herramienta:** Screaming Frog o Sitebulb. Para ~60 URLs, crawler + revisión manual es viable en pocas horas
- **KPIs verificables:**
  1. Páginas con 0 enlaces internos entrantes → **objetivo 0**
  2. Enlaces entrantes por página de dinero → **≥10**
  3. Profundidad de clic desde home → **≤3**
  4. Anchors genéricos o vacíos → 0
  5. Enlaces internos a URLs que hacen 301 → corregir al destino final
  6. **Enlaces internos a rutas que no existen** → 0. En el proyecto C aparecieron URLs 404 en Search Console con la forma `/blog/<slug-de-página-de-servicio>`, cuando esas páginas viven en la raíz. Un enlace mal formado genera un 404 indexable

---

## Anexo — Procedencia y fiabilidad de las fuentes externas

Para poder responder si alguien pregunta de dónde sale un dato:

| Afirmación | Fuente | Solidez |
|---|---|---|
| Citas y estadísticas aumentan la visibilidad en motores generativos | Paper GEO, arXiv 2311.09735, KDD '24 | **Alta** — paper revisado, benchmark público |
| Caída de CTR orgánico con AI Overview presente | Pew Research, jul 2025 | **Alta** — muestra grande; metodología discutida por Google |
| Bloquear crawlers de IA reduce tráfico | Rutgers/Wharton, arXiv 2512.24968 | **Media** — cifras distintas entre versiones; citar con versión |
| Reparto de factores de ranking local | Local Search Ranking Factors, Whitespark | **Media** — encuesta a profesionales, no medición directa |
| Enlaces internos entrantes y clics | Estudio Zyppy, 23M enlaces | **Media** — correlación declarada, no causa |
| Mejora de tráfico tras consolidar canibalización | Blogs de agencia | **Baja — NO USAR.** Sin metodología reproducible |
| Reparto de citas por plataforma de IA | Estudios de vendedores de herramientas GEO | **Baja — NO USAR.** Contradictorios entre sí |
| Para Google, GEO/AEO es SEO; llms.txt y el chunking no sirven | Google Search Central, guía de IA generativa, 15 may 2026 | **Máxima** — documentación del propio proveedor |
| Ninguna herramienta de terceros ve los datos internos de Google | Google Search Central, guía sobre herramientas SEO, 5 jun 2026 | **Máxima** — documentación del propio proveedor |
| Los crawlers de IA no ejecutan JavaScript | Vercel + MERJ, "The Rise of the AI Crawler", dic 2024 | **Media-alta** — muestra enorme; un solo estudio, sin replicar |
| Qué bot cita y qué bot entrena en cada motor | Documentación de OpenAI, Anthropic y Perplexity | **Máxima** — documentación de los proveedores |
| Añadir schema no aumenta las citas de IA | Ahrefs, 1.885 páginas con control, may 2026 | **Alta** — prueba controlada con grupo de control |
| Los asistentes leen el texto del JSON-LD, no el schema | Test DUCKYEA (Williams-Cook), feb 2026; searchVIU, oct 2025 | **Media** — experimentos pequeños pero reproducibles |
| El tráfico de IA convierte mejor que el orgánico | Seer Interactive (1 cliente) vs. Kaiser & Schulze (973 tiendas) | **Baja — NO PROMETER.** Se contradicen según el sector |

---

## Registro de correcciones

Cosas que este documento afirmó y luego resultaron falsas. Se dejan escritas a propósito: la corrección vale más que el acierto.

- **"La regla del CTR aplica siempre"** → falso. Solo si ya estás en top 10-20. Con posición media alta el problema es de visibilidad, no de CTR (sección 12)
- **"Consolidar en www"** (propuesto en la primera versión del anexo técnico) → falso para el proyecto C. El host ganador es el que ya tiene la indexación, y era el apex (sección 3.2)
- **"El operador `site:` sirve para contar páginas indexadas"** → falso, devuelve una fracción. El número bueno está en Search Console (sección 6)
- **"Una rama sin mergear"** → falso; se había mergeado un mes antes. Verificar contra el remoto en vivo, no contra notas viejas (sección 7)
- **"GPTBot hace entrenamiento y retrieval"** → falso. GPTBot **solo entrena**; el que decide si ChatGPT te cita es **OAI-SearchBot**. Bloquear GPTBot no cuesta ni una cita, y bloquear OAI-SearchBot te saca de las respuestas (sección 20.3)
- **"No hay prueba pública fuerte de que el schema aumente las citas"** → obsoleto. Ahora sí hay prueba controlada, **y es negativa**: el efecto medido es indistinguible de cero. Se mantiene el schema, pero por otras razones (sección 20.6)
- **"El apex está caído y bloquea todo lo demás"** → falso desde la migración a Cloudflare. **El bloqueo se levantó y nadie lo comprobó durante semanas.** La premisa heredada de una nota vieja vuelve a fallar, igual que con la rama: comprobar el estado real con `curl` y `dig` antes de construir un diagnóstico encima (sección 3.2)
- **"Ese `<br />` del H1 explica que la home rinda mal"** → falso. El fallo existe, pero afecta al `textContent` y al nombre accesible, no a cómo lo lee Google. Se arregla porque cuesta dos caracteres, no porque sea la causa (sección 6)
