export const WHATSAPP_NUMBER = "59897699955";
export const WHATSAPP_DISPLAY = "+598 97 699 955";
export const INSTAGRAM_USER = "al_punto_paz";
export const INSTAGRAM_URL = "https://www.instagram.com/al_punto_paz/";

/** Arma un link de WhatsApp con un mensaje precargado. */
export function waLink(message = "Hola Al Punto Paz! Quiero hacer una consulta.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#productos", label: "Productos" },
  { href: "#encargos", label: "Encargos" },
  { href: "#contacto", label: "Contacto" },
] as const;

/** Prefijo de rutas cuando el sitio se publica en una subcarpeta (ej. GitHub Pages: /alpuntopaz). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Ruta pública de un archivo dentro de /public, con el prefijo correspondiente. */
export const asset = (path: string) => `${BASE_PATH}${path}`;
