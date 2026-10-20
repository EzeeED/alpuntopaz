import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito, Dancing_Script } from "next/font/google";
import "./globals.css";
import { asset } from "@/lib/site";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing", display: "swap" });

// Dominio donde se publica el sitio (se usa para las vistas previas al compartir).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "Al Punto Paz | Crochet artesanal hecho a mano en Uruguay";
const description =
  "Piezas únicas tejidas al crochet con 10 años de experiencia. Encargos personalizados y envíos a todo Uruguay.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ["crochet", "tejido a mano", "amigurumis", "Uruguay", "artesanal", "Al Punto Paz"],
  icons: { icon: asset("/icon.png"), apple: asset("/icon.png") },
  openGraph: {
    title,
    description,
    url: asset("/"),
    siteName: "Al Punto Paz",
    locale: "es_UY",
    type: "website",
    images: [{ url: asset("/og-image.jpg"), width: 1200, height: 630, alt: "Logo de Al Punto Paz" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [asset("/og-image.jpg")] },
};

export const viewport: Viewport = {
  themeColor: "#8E3B5C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-UY" className={`${fraunces.variable} ${nunito.variable} ${dancing.variable}`}>
      <body className="bg-crema font-sans text-tinta antialiased">
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
