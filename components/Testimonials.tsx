"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { INSTAGRAM_URL } from "@/lib/site";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { ChevronIcon, InstagramIcon, StarIcon } from "./Icons";

const testimonials = [
  {
    name: "Camila R.",
    stars: 5,
    text: "Me encantó 😍 Está precioso y se nota todo el amor que hay detrás de cada detalle. Mucho más lindo de lo que imaginaba. ¡Sin duda volvería a comprar!",
  },
  {
    name: "Florencia M.",
    stars: 5,
    text: "Jocelyn es un amor, me ayudó a elegir los colores y quedó exactamente como quería. Gracias por la paciencia y por hacer algo tan lindo. 💕",
  },
  {
    name: "Lucía G.",
    stars: 5,
    text: "Compré las flores para regalar y fueron un éxito total 🌷 Son delicadas, originales y quedan hermosas. Es un regalo diferente que vale muchísimo la pena.",
  },
  {
    name: "Agustina P.",
    stars: 5,
    text: "Joce, ¡te quedó hermoso! 😍 Era justo lo que tenía en mente. Me encantó poder elegir los detalles y recibir algo hecho especialmente para mí.",
  },
  {
    name: "Martina S.",
    stars: 5,
    text: "La calidad es preciosa y la terminación está impecable. Se nota que lleva tiempo y dedicación. Me encantan las cosas hechas a mano y esta superó mis expectativas. 🤍",
  },
  {
    name: "Valentina D.",
    stars: 5,
    text: "La atención de Jocelyn fue excelente desde el primer momento. Me respondió todas las dudas y me mantuvo al tanto del pedido. ¡Una experiencia hermosa!",
  },
  {
    name: "Sofía B.",
    stars: 5,
    text: "Es demasiado tierno 🥹 Lo compré para regalar y quedó precioso. Me encanta apoyar los emprendimientos que hacen cosas únicas y con tanto cariño.",
  },
  {
    name: "Julieta F.",
    stars: 5,
    text: "Joce tiene unas manos increíbles. Los colores quedaron divinos y el resultado fue incluso mejor de lo que esperaba. ¡Ya estoy pensando en mi próximo pedido! 🧶",
  },
  {
    name: "Antonella C.",
    stars: 5,
    text: "Mi primera compra y quedé encantada. Todo muy lindo, delicado y bien presentado. Sin duda lo recomiendo para quienes buscan un regalo original. 🌸",
  },
  {
    name: "Milagros T.",
    stars: 5,
    text: "Gracias por todo, Jocelyn ❤️ Se nota la dedicación que le pones a cada trabajo. Me encantó el resultado y la buena onda durante todo el pedido.",
  },
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
                    <span className="font-bold text-vino">{t.name}</span>
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
