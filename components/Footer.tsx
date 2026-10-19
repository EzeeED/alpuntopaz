import Image from "next/image";
import { INSTAGRAM_URL, NAV_LINKS, asset, waLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-10 rounded-t-[3rem] bg-vino text-crema">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-14 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Image src={asset("/logo.png")} alt="Logo de Al Punto Paz" width={72} height={72} className="h-16 w-16 rounded-full bg-crema p-0.5" />
          <div>
            <p className="font-serif text-2xl font-semibold text-white">Al Punto Paz</p>
            <p className="text-rosa-claro">Al Punto Paz — Hecho a mano con amor 🧶</p>
          </div>
        </div>

        <nav aria-label="Menú del pie de página">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-semibold text-crema/90 underline-offset-4 hover:text-white hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribinos por WhatsApp"
            className="grid h-12 w-12 place-items-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguinos en Instagram"
            className="grid h-12 w-12 place-items-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-sm text-crema/80">© 2026 Al Punto Paz</div>
    </footer>
  );
}
