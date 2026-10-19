"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { INSTAGRAM_URL } from "@/lib/site";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { ChevronIcon, InstagramIcon, StarIcon } from "./Icons";

// [Reemplazar con reseñas reales]
const testimonials = [
  { name: "Clienta 1", place: "Montevideo", stars: 5, text: "[Reemplazar con reseñas reales] Le encargué un amigurumi para mi sobrina y quedó divino. ¡Se nota el amor en cada detalle!" },
  { name: "Clienta 2", place: "Canelones", stars: 5, text: "[Reemplazar con reseñas reales] El cárdigan es hermoso, abriga un montón y las terminaciones son impecables." },
  { name: "Cliente 3", place: "Maldonado", stars: 5, text: "[Reemplazar con reseñas reales] Súper atenta durante todo el proceso. Me mandó fotos del avance y llegó perfecto." },
  { name: "Clienta 4", place: "Salto", stars: 5, text: "[Reemplazar con reseñas reales] El ajuar para mi bebé es una obra de arte. Lo voy a guardar para siempre." },
  { name: "Clienta 5", place: "Colonia", stars: 5, text: "[Reemplazar con reseñas reales] Pedí un bolso con los colores que quería y quedó exactamente como lo soñé." },
];

export default function Testimonials() {
  const track = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const el = track.current;
    if (!el) return;
    const items = el.children;
    const target = items[(index + items.length) % items.length] as HTMLElement;
    el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const items = Array.from(el.children) as HTMLElement[];
      const left = el.scrollLeft;
      let best = 0;
      items.forEach((item, i) => {
        if (Math.abs(item.offsetLeft - el.offsetLeft - left) < Math.abs(items[best].offsetLeft - el.offsetLeft - left)) best = i;
      });
      // Si llegamos al final del scroll, marcamos el último
      if (left + el.clientWidth >= el.scrollWidth - 4) best = items.length - 1;
      setCurrent(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="opiniones" aria-labelledby="opiniones-titulo" className="section">
      <SectionTitle id="opiniones-titulo" eyebrow="Lo que dicen" title="Opiniones" />

      <Reveal>
        <div className="relative" role="region" aria-roledescription="carrusel" aria-label="Opiniones de clientas">
          <ul
            ref={track}
            className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-6 overflow-x-auto scroll-smooth px-5 pb-6 pt-2 sm:mx-0 sm:scroll-px-1 sm:px-1"
          >
            {testimonials.map((t, i) => (
              <li
                key={t.name}
                aria-roledescription="diapositiva"
                aria-label={`${i + 1} de ${testimonials.length}`}
                className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-18px)]"
              >
                <figure className="card flex h-full flex-col p-7">
                  <div className="flex gap-1 text-mimbre" role="img" aria-label={`${t.stars} de 5 estrellas`}>
                    {Array.from({ length: 5 }, (_, s) => (
                      <StarIcon key={s} filled={s < t.stars} className="h-5 w-5" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-tinta/85">“{t.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-full bg-rosa-claro font-serif font-bold text-vino">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-bold text-vino">{t.name}</span>
                      <span className="block text-sm text-tinta/70">{t.place}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo(current - 1)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-vino text-vino transition hover:bg-vino hover:text-white"
              aria-label="Opinión anterior"
            >
              <ChevronIcon className="h-5 w-5 rotate-90" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir a la opinión ${i + 1}`}
                  aria-current={current === i}
                  className={`h-2.5 rounded-full transition-all ${current === i ? "w-7 bg-vino" : "w-2.5 bg-rosa"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollTo(current + 1)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-vino text-vino transition hover:bg-vino hover:text-white"
              aria-label="Opinión siguiente"
            >
              <ChevronIcon className="h-5 w-5 -rotate-90" />
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-12 text-center">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          <InstagramIcon className="h-5 w-5" />
          Ver más trabajos en Instagram
        </a>
      </Reveal>
    </section>
  );
}
