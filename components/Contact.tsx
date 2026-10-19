"use client";

import { useState } from "react";
import { INSTAGRAM_URL, INSTAGRAM_USER, WHATSAPP_DISPLAY, waLink } from "@/lib/site";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

const inputClass =
  "mt-2 w-full rounded-2xl border-2 border-rosa-claro bg-crema/60 px-4 py-3 text-tinta placeholder:text-tinta/50 transition focus:border-vino focus:bg-white focus:outline-none";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Sin backend: el formulario arma un mensaje y lo abre en WhatsApp.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = `Hola Al Punto Paz! Soy ${data.get("nombre")} (${data.get("email")}).\n\n${data.get("mensaje")}`;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="section">
      <SectionTitle id="contacto-titulo" eyebrow="Contacto" title="¿Charlamos?">
        Escribime por donde te quede más cómodo. ¡Me encanta escuchar nuevas ideas!
      </SectionTitle>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-5">
          <Reveal>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-5 p-6 sm:p-8"
            >
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#1F7A4D] text-white">
                <WhatsAppIcon className="h-8 w-8" />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase tracking-wider text-tinta/70">WhatsApp</span>
                <span className="block font-serif text-2xl font-semibold text-vino sm:text-3xl">{WHATSAPP_DISPLAY}</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={100}>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-5 p-6 sm:p-8">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-vino via-rosa to-mimbre text-white">
                <InstagramIcon className="h-8 w-8" />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase tracking-wider text-tinta/70">Instagram</span>
                <span className="block font-serif text-2xl font-semibold text-vino sm:text-3xl">@{INSTAGRAM_USER}</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={200}>
            <p className="px-2 font-script text-2xl text-vino">Te respondo lo antes posible ♡</p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-suave sm:p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="nombre" className="font-bold">Nombre</label>
                <input id="nombre" name="nombre" type="text" required autoComplete="name" placeholder="Tu nombre" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="font-bold">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="tu@email.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="mensaje" className="font-bold">Mensaje</label>
                <textarea id="mensaje" name="mensaje" required rows={5} placeholder="Contame qué te gustaría..." className={`${inputClass} resize-y`} />
              </div>
              <button type="submit" className="btn-primary w-full py-4 text-lg">
                Enviar mensaje
              </button>
              <p role="status" className="text-center text-sm text-tinta/70">
                {sent
                  ? "¡Gracias! Se abrió WhatsApp con tu mensaje listo para enviar."
                  : "Al enviar, se abrirá WhatsApp con tu mensaje listo."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
