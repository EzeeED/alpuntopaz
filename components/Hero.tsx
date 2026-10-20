import Image from "next/image";
import { asset, waLink } from "@/lib/site";
import { LineHeart, LineYarn } from "./Decor";
import { HeartIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28">
      {/* Decoración de fondo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-rosa-claro/70 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-mimbre/20 blur-3xl" />
        <LineHeart className="absolute left-[4%] top-[70%] hidden h-8 w-8 text-rosa md:block" />
        <LineHeart className="absolute bottom-16 right-[45%] hidden h-6 w-6 text-vino/40 md:block" />
        <LineYarn className="absolute right-[6%] top-28 hidden h-16 w-20 text-mimbre md:block" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 sm:px-8 md:grid-cols-2 md:pb-24">
        {/* Logo grande */}
        <div className="relative mx-auto w-64 sm:w-80 md:order-1 md:w-full md:max-w-md">
          <div className="absolute inset-4 rounded-full bg-rosa-claro shadow-suave-lg" aria-hidden="true" />
          <Image
            src={asset("/logo.webp")}
            alt="Logo de Al Punto Paz: ilustración de una tejedora con anteojos y suéter blanco tejiendo al crochet, junto a una canasta de ovillos"
            width={512}
            height={512}
            priority
            className="relative w-full animate-flotar drop-shadow-xl"
          />
          {/* Insignia +10 años */}
          <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-0" aria-label="Más de 10 años tejiendo">
            <div className="relative grid h-28 w-28 place-items-center rounded-full bg-vino text-center text-white shadow-suave-lg sm:h-32 sm:w-32">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
                <defs>
                  <path id="circulo" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
                </defs>
                <circle cx="50" cy="50" r="46" fill="none" stroke="#C9A77C" strokeWidth="1.5" strokeDasharray="3 4" />
                <text fontSize="9.5" fill="#F2D7DF" letterSpacing="2" fontFamily="var(--font-nunito)">
                  <textPath href="#circulo">HECHO A MANO • CON AMOR • </textPath>
                </text>
              </svg>
              <div aria-hidden="true" className="leading-none">
                <span className="block font-serif text-3xl font-bold">+10</span>
                <span className="block font-script text-lg">años tejiendo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <p className="eyebrow mb-3">Crochet artesanal en Uruguay</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Tejido a mano, con amor, desde hace 10 años
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-tinta/85 md:mx-0">
            En Al Punto Paz cada pieza se teje puntada a puntada, con paciencia, buenos materiales y mucho cariño.
            Prendas, accesorios y detalles únicos al crochet.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a href="#productos" className="btn-primary w-full sm:w-auto">
              Ver productos
            </a>
            <a
              href={waLink("Hola Al Punto Paz! Quiero encargar algo personalizado.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <HeartIcon className="h-5 w-5" />
              Encargar algo personalizado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
