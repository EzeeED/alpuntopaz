# Al Punto Paz — Landing page

Landing de **Al Punto Paz**, crochet artesanal hecho a mano en Uruguay.
Hecha con **Next.js 15 (App Router) + Tailwind CSS**, publicada como sitio estático en **GitHub Pages**.

## Cómo correrla

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Publicación (GitHub Pages)

Cada `push` a `main` construye el sitio y lo publica automáticamente
(ver `.github/workflows/deploy.yml`). Queda en:

**https://ezeeed.github.io/alpuntopaz/**

Activación (una sola vez): en GitHub, **Settings → Pages → Build and deployment → Source: GitHub Actions**.
GitHub Pages gratuito requiere que el repositorio sea público (o una cuenta GitHub Pro).

### Dominio propio (opcional)

Si más adelante usás un dominio (ej. `alpuntopaz.com.uy`): configuralo en **Settings → Pages → Custom domain**
y en el workflow dejá `NEXT_PUBLIC_BASE_PATH` vacío y poné el dominio en `NEXT_PUBLIC_SITE_URL`.

## Qué reemplazar

| Qué | Dónde |
| --- | --- |
| **Logo** (el actual es provisorio) | `public/logo.png` (cuadrado, ideal 512×512 o más). Se usa en header, hero, footer, favicon y Open Graph. |
| Foto de "Sobre mí" | `public/sobre-mi.svg` → poné tu foto (ej. `sobre-mi.jpg`) y actualizá la ruta en `components/About.tsx`. |
| Fotos de productos | `public/products/` y las rutas en `lib/products.ts` (ahí también editás nombres, descripciones y categorías). |
| Reseñas | `components/Testimonials.tsx` (marcadas como `[Reemplazar con reseñas reales]`). |
| Preguntas frecuentes | `components/FAQ.tsx` |
| WhatsApp / Instagram | `lib/site.ts` |

## Estructura

```
app/            layout (SEO, fuentes), página y estilos globales
components/     Header, Hero, About, Products, ProductCard, Orders,
                Testimonials, FAQ, Contact, Footer, WhatsAppFloat,
                Reveal (fade-in), Decor (hilo, corazones, ovillos), Icons
lib/            datos de contacto y catálogo de productos
public/         logo e imágenes
scripts/        generador de imágenes placeholder
```

## Notas

- Todos los botones de pedido abren WhatsApp con un mensaje precargado; "Lo quiero" incluye el nombre del producto.
- El formulario de contacto no necesita servidor: arma el mensaje con nombre, email y texto y lo abre en WhatsApp.
- Las animaciones respetan la preferencia del sistema "reducir movimiento".
