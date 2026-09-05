# Cómo publicar el sitio

El sitio es HTML estático: no hay que compilar nada. Publicar = subir estos archivos tal cual.

## Antes de publicar: las fotos

Las fotos están en `.gitignore`, así que **hoy no viajan al repo** y el sitio publicado saldría sin ellas
(la portada se ve con el degradado verde/madera de marca y la galería con su recuadro verde; no se rompe,
pero se ve incompleto).

Se hizo así a propósito: las fotos actuales son de stock bajadas de internet y publicarlas en el sitio real
de un negocio es un problema de derechos de autor.

Cuando estén las fotos propias (o de un banco con licencia, tipo Unsplash o Pexels):

1. Ponlas en `assets/img/` con estos nombres: `hero.jpg` (portada) y `nosotros-1.jpg`, `nosotros-2.jpg`,
   `nosotros-3.jpg` (galería de Nosotros).
2. Borra estas dos líneas del `.gitignore`:
   ```
   assets/img/*.jpg
   assets/img/*.png
   ```
3. Súbelas:
   ```bash
   git add . && git commit -m "Agrega las fotos reales" && git push
   ```

## Opción A — GitHub Pages (gratis, pero el repo debe ser público)

En un plan gratuito de GitHub, Pages solo funciona con repositorios públicos.

1. `github.com/guerramiguel1105/CICA` → **Settings** → hasta abajo, *Danger Zone* →
   **Change repository visibility** → *Public*.
2. **Settings** → **Pages** → en *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`
   → **Save**.
3. En 1–2 minutos queda en `https://guerramiguel1105.github.io/CICA/`.

### Con dominio propio

1. En el panel DNS del proveedor donde compraste el dominio, crea:

   | Tipo | Nombre | Valor |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `guerramiguel1105.github.io` |

2. **Settings** → **Pages** → *Custom domain*: escribe el dominio y guarda. Esto crea un archivo `CNAME`
   en el repo — es normal, déjalo ahí.
3. Espera a que verifique el DNS (puede tardar hasta unas horas) y marca **Enforce HTTPS**. El certificado
   es gratis y automático.

## Opción B — Cloudflare Pages o Netlify (gratis y sirve con el repo privado)

Recomendada si no quieres que el código quede público.

1. Entra a `pages.cloudflare.com` (o `netlify.com`) y conecta tu cuenta de GitHub.
2. Elige el repositorio `CICA`.
3. En la configuración de build: **no hay comando de build**; el directorio de salida es la raíz (`/`).
4. Deploy. Cada `git push` a `main` vuelve a publicar solo.
5. Para el dominio propio: *Custom domains* → agregar el dominio y seguir las instrucciones de DNS
   (si compras el dominio en Cloudflare, el DNS se configura solo).

## Después de publicar, revisar

- Que se vean las 6 páginas y que el menú navegue entre ellas.
- Que el logo y el favicon carguen.
- Que las fotos aparezcan (si ya las subiste).
- Que el correo y el teléfono del pie sean los reales — se cambian en `assets/js/layout.js`, en el
  objeto `CONTACTO` de arriba.
