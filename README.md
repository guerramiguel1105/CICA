# CICA — Sitio web

Sitio de una sola página para CICA (Control Integral de Calidad Alimentaria). HTML/CSS/JS plano, sin build ni dependencias — se abre directo en el navegador.

## Estructura

Una página por sección del menú:

```
index.html          ← Inicio (portada, sectores, resumen de servicios)
nosotros.html       ← Nosotros (galería de fotos + valores)
servicios.html      ← Servicios
metodologia.html    ← Metodología (los 5 pasos)
sectores.html       ← Sectores
contacto.html       ← Contacto
assets/
  css/style.css      ← todos los estilos y la paleta (variables al inicio del archivo)
  js/layout.js       ← menú y pie de página compartidos + DATOS DE CONTACTO
  js/galeria.js      ← las flechas de la galería de Nosotros
  img/               ← logo, favicon y fotos
```

### El menú y el pie están en un solo lugar

`assets/js/layout.js` genera el menú y el pie en todas las páginas, así que **el teléfono, el correo, la ciudad y los links de redes se cambian una sola vez ahí** (arriba del archivo, en `CONTACTO`) y se actualizan en las 6 páginas. Si se copiaran en cada archivo HTML, cambiar el teléfono sería editar 6 archivos.

Para agregar una página nueva: copia cualquier `.html` existente, cámbiale el contenido, y agrégala a la lista `PAGINAS` en `layout.js` para que aparezca en el menú.

## Ver el sitio localmente

Opción simple: doble clic en `index.html` (o clic derecho → Abrir con → tu navegador). Como no hay llamadas a APIs, funciona perfecto así.

Si prefieres un servidor local (recomendado si luego agregas más páginas):

```bash
npx serve .
```

y abre la URL que te muestre en la terminal.

## Qué falta por completar

1. **Datos de contacto y redes**: correo, teléfono, ciudad y los links de Facebook / Instagram /
   LinkedIn están en `assets/js/layout.js`, arriba del todo, en el objeto `CONTACTO`. Ese es el
   único lugar donde hay que cambiarlos.
2. **Foto de la portada**: reemplaza `assets/img/hero.jpg` por la foto real. Si borras la línea del
   `<img class="hero-foto">` en `index.html`, la portada vuelve al degradado verde/madera de marca.
3. **Fotos de la galería de Nosotros** (proporción 4:3): reemplaza `assets/img/nosotros-1.jpg`,
   `-2` y `-3`. Para agregar o quitar fotos, agrega o borra un `<img>` en `nosotros.html`; la
   primera de la lista lleva `class="on"`.

   > Ojo: hoy esas fotos son **de prueba** y están en `.gitignore` para no subirlas. Cuando pongas
   > las reales, borra esas líneas del `.gitignore` para que sí se versionen.
4. **Logo definitivo**: ya está integrado (`assets/img/logo-mark.svg`), pero es una recreación
   vectorial hecha a partir de las referencias de marca — ver [BRAND.md](BRAND.md#logo) si llega el
   archivo original del diseñador.
5. **Textos**: los de las páginas internas (`servicios.html`, `sectores.html`, `contacto.html`) son
   un primer borrador basado en la información de marca — conviene revisarlos con el cliente.

## Marca (colores, tipografía, logo)

Ver [BRAND.md](BRAND.md) — ahí está toda la guía de marca centralizada (paleta, fuentes, uso del logo) para no tener que redescubrirla en cada sesión.

## Publicar el sitio

Ver [DEPLOY.md](DEPLOY.md) — pasos exactos para GitHub Pages o Cloudflare Pages, incluido el dominio propio y los registros DNS.

## Publicar cambios

```bash
git add .
git commit -m "mensaje describiendo el cambio"
git push
```

(pídele a Claude que lo haga por ti si prefieres no usar la terminal — solo confirma el push cuando te lo pregunte).
