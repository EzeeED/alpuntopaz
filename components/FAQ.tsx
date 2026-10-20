"use client";

import { useId, useState } from "react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { ChevronIcon } from "./Icons";

const faqs = [
  { q: "¿Cuánto demora un encargo?", a: "Depende de la pieza, el tamaño, el volumen, etc." },
  { q: "¿Hacen envíos?", a: "Sí, a todo Uruguay." },
  { q: "¿Qué materiales usan?", a: "Hilados de calidad, elegidos según la pieza y su uso." },
  { q: "¿Cómo hago un pedido?", a: "Escribime por WhatsApp o Instagram y lo coordinamos." },
  { q: "¿Qué medios de pago aceptan?", a: "Efectivo o transferencia bancaria." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="preguntas" aria-labelledby="faq-titulo" className="section max-w-3xl">
      <SectionTitle id="faq-titulo" eyebrow="Dudas" title="Preguntas frecuentes" />

      <Reveal>
        <ul className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const btnId = `${baseId}-btn-${i}`;
            const panelId = `${baseId}-panel-${i}`;
            return (
              <li key={item.q} className={`rounded-3xl bg-white shadow-suave transition ${isOpen ? "ring-2 ring-rosa-claro" : ""}`}>
                <h3 className="font-sans text-base text-tinta">
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left text-lg font-bold hover:text-vino"
                  >
                    {item.q}
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-rosa-claro text-vino transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      <ChevronIcon className="h-5 w-5" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className={`px-6 pb-6 text-tinta/85 ${isOpen ? "" : "invisible"}`}>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
