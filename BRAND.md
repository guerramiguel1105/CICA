# Guía de marca — CICA

Referencia rápida de identidad visual, para que cualquier sesión futura (o cualquier persona) tenga el contexto sin tener que preguntarlo de nuevo. Todo esto ya está implementado en `assets/css/style.css` y `assets/img/`.

## Logo

- **Marca completa** (símbolo + "CICA" + "Control Integral de Calidad Alimentaria"): usar en el header, footer, propuestas e informes.
- **Símbolo suelto** (`assets/img/logo-mark.svg`): documento con tres chulos y esquina doblada, dentro de un anillo verde cerrado, con una hoja que se monta sobre el borde inferior derecho. Se usa como avatar y sello (favicon, redes sociales, marcas de agua).
- **Hoja sobre la "I"**: el wordmark lleva una hoja pequeña encima de la I (`assets/img/leaf-dot.svg`, clase `.i-leaf` en el CSS). No es una imagen: es texto real con la hoja posicionada por CSS, para que el logo siga siendo seleccionable y nítido en cualquier tamaño. La posición está calculada contra el alto de mayúscula de Barlow Condensed (0.70em), así que escala sola si cambias el `font-size`.
- `assets/img/logo-mark.svg` es una **recreación vectorial** hecha a partir de las referencias de marca compartidas (mockups del diseñador), no el archivo original. Si en algún momento llega el .ai/.svg/.png definitivo del diseñador, reemplazar ese archivo manteniendo el mismo nombre — se actualiza automáticamente en todo el sitio (header, footer, favicon).
- `assets/img/favicon.svg` es una versión simplificada del símbolo, optimizada para verse bien a 16–32px (pestaña del navegador).
- Tagline oficial: **"Calidad que se ve, confianza que se siente."** — ya está en el hero del sitio (`index.html`).

## Paleta de colores

Paleta actualizada (la vigente — reemplaza cualquier versión anterior). Vive como variables CSS en `assets/css/style.css` dentro de `:root`; cambiar el valor ahí actualiza todo el sitio de una vez.

| Nombre | Variable CSS | Hex | Uso |
|---|---|---|---|
| Principal | `--verde` | `#1B5E37` | Botones, textos destacados, marca |
| Profundo | `--verde-osc` | `#123F25` | Header oscuro (franja de sectores), footer de acento |
| Madera | `--madera` | `#C9A574` | Acento cálido (fondo del hero) |
| Madera oscura | `--madera-osc` | `#A67C4E` | Acento cálido, oscuro (fondo del hero, tagline) |
| Fondo cálido | `--marfil` | `#F3EBDD` | Fondo de secciones claras (servicios) |
| Texto | `--carbon` | `#2B2620` | Texto principal, fondo del footer |
| Verde claro (derivado) | `--verde-cl` | `#4CAF6A` | Acento brillante para íconos/subrayados — no viene del brand book, es un tono intermedio creado para dar contraste sobre el verde profundo |

## Tipografía

Cargadas desde Google Fonts (`<link>` en el `<head>` de `index.html`):

- **Fraunces** (600/700) — titulares. Serif editorial y cálida, elegida para que el sitio no se lea como plantilla genérica y para acompañar los tonos madera. Variable CSS: `--display`.
- **Archivo** (400/500/600/700) — cuerpo de texto, menú, botones, etiquetas. Variable CSS: `--sans`.
- **Barlow Condensed** (700) — **solo** el wordmark "CICA" del header y el footer, porque replica la letra del logo real. No usarla para nada más. Variable CSS: `--marca`.

Los titulares van en caja normal (no en mayúsculas): la serif pierde carácter en mayúsculas y es justo lo que hacía ver el diseño genérico.

## Bordes y superficies

Sin esquinas redondeadas: todo va a 90°. Las tarjetas de servicios y los pasos de la metodología no van encajonados en un recuadro, sino con un filete fino arriba y el texto alineado a la izquierda. Los únicos círculos son los de los íconos (badges, pasos, redes), que sí vienen de la identidad. Nada de sombras ni de efectos de "levantar" la tarjeta al pasar el mouse.

## Stack / herramientas por defecto

- HTML + CSS + JS plano, sin framework ni build step — se abre directo o se sirve con `npx serve .` / `python -m http.server`.
- Sin dependencias externas más allá de Google Fonts.
- Estructura de archivos y checklist de contenido pendiente: ver [README.md](README.md).
