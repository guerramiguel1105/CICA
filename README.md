# CICA — Sitio web

Sitio de una sola página para CICA (Control Integral de Calidad Alimentaria). HTML/CSS/JS plano, sin build ni dependencias — se abre directo en el navegador.

## Estructura

```
index.html              ← toda la página (secciones: hero, sectores, nosotros, servicios, metodología, contacto, footer)
assets/
  css/style.css          ← todos los estilos y la paleta de colores (variables al inicio del archivo)
  js/main.js             ← el menú hamburguesa (móvil)
  img/
    favicon.svg          ← ícono de pestaña del navegador (ya listo)
    (aquí van hero.jpg, nosotros.jpg, logo.svg cuando los tengas — ver abajo)
```

## Ver el sitio localmente

Opción simple: doble clic en `index.html` (o clic derecho → Abrir con → tu navegador). Como no hay llamadas a APIs, funciona perfecto así.

Si prefieres un servidor local (recomendado si luego agregas más páginas):

```bash
npx serve .
```

y abre la URL que te muestre en la terminal.

## Qué falta por completar (marcado con `TODO` en el código)

Busca `TODO` en `index.html` — cada uno indica exactamente qué reemplazar:

1. **Foto del hero** (fondo grande de la portada). Ya está conectada: reemplaza el archivo
   `assets/img/hero.jpg` por la foto real y listo. Si borras la línea del `<img class="hero-foto">`
   en `index.html`, el hero vuelve solo al degradado verde/madera de marca.
2. **Foto de "Nosotros"** (recuadro junto a la lista de valores, proporción 4:3). Igual: reemplaza
   `assets/img/nosotros.jpg` por la foto real.

   > Ojo: hoy esos dos archivos son **fotos de prueba** y están en `.gitignore` para no subirlas.
   > Cuando pongas las reales, borra esas dos líneas del `.gitignore` para que sí se versionen.
3. **Logo definitivo**: ya está integrado (`assets/img/logo-mark.svg`), pero es una recreación vectorial hecha a partir de las referencias de marca — ver [BRAND.md](BRAND.md#logo) si llega el archivo original del diseñador.
4. **Datos de contacto**: correo (`correo@cica.com.co`), teléfono (`+57 300 000 0000`) y ciudad aparecen en la sección de contacto (`#contacto`) y en el footer — buscar y reemplazar por los reales.
5. **Redes sociales**: los tres íconos del footer (`Facebook`, `Instagram`, `LinkedIn`) tienen `href="#"` — poner los links reales.

## Marca (colores, tipografía, logo)

Ver [BRAND.md](BRAND.md) — ahí está toda la guía de marca centralizada (paleta, fuentes, uso del logo) para no tener que redescubrirla en cada sesión.

## Publicar cambios

```bash
git add .
git commit -m "mensaje describiendo el cambio"
git push
```

(pídele a Claude que lo haga por ti si prefieres no usar la terminal — solo confirma el push cuando te lo pregunte).
