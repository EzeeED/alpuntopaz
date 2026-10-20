# Al Punto Paz — Landing page

Landing de **Al Punto Paz**, crochet artesanal hecho a mano en Uruguay.
Hecha con **Next.js 15 (App Router) + Tailwind CSS**, publicada como sitio estático en **GitHub Pages**.

## Cómo correrla

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Publicación (GitHub Pages + dominio propio)

Cada `push` a `main` construye el sitio y lo publica automáticamente
(ver `.github/workflows/deploy.yml`). Queda en:

**https://alpuntopaz.com**

- Dominio comprado en Cloudflare. DNS: registros `A` de `@` a las IP de GitHub Pages
  (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) y `CNAME` de `www` a `ezeeed.github.io`,
  todos en modo **Solo DNS** (nube gris).
- En GitHub: **Settings → Pages → Custom domain** = `alpuntopaz.com`, con **Enforce HTTPS** activado.

## Qué reemplazar

| Qué | Dónde |
| --- | --- |
| Logo | `public/logo.png` (original con fondo transparente), `public/logo.webp` (versión liviana que usa la página), `public/icon.png` (favicon) y `public/og-image.jpg` (vista previa al compartir). |
| Foto de "Sobre mí" | `public/sobre-mi-taller.webp` (circular, fondo transparente). Si la reemplazás, usá un nombre nuevo para que los navegadores no muestren la vieja guardada en caché. |
| Productos | Fotos en `public/products/` (WebP 640×800) y datos en `lib/products.ts` (nombre, descripción, categoría y foto). |
| Reseñas | `components/Testimonials.tsx` |
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
```

## Notas

- Todos los botones de pedido abren WhatsApp con un mensaje precargado; "Lo quiero" incluye el nombre del producto.
- Las animaciones respetan la preferencia del sistema "reducir movimiento".
