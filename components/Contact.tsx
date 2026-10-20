import { INSTAGRAM_URL, INSTAGRAM_USER, WHATSAPP_DISPLAY, waLink } from "@/lib/site";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="section">
      <SectionTitle id="contacto-titulo" eyebrow="Contacto" title="¿Charlamos?">
        Escribime por donde te quede más cómodo. ¡Me encanta escuchar nuevas ideas!
      </SectionTitle>

      <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2 md:gap-6">
        <Reveal>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-5 p-6 sm:p-8">
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
      </div>

      <Reveal delay={200}>
        <p className="mt-8 text-center font-script text-2xl text-vino">Te respondo lo antes posible ♡</p>
      </Reveal>
    </section>
  );
}
