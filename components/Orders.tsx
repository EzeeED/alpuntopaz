import { waLink } from "@/lib/site";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { ChatIcon, GiftIcon, PaletteIcon, WhatsAppIcon, YarnIcon } from "./Icons";

const steps = [
  { icon: ChatIcon, title: "Me contás tu idea", text: "Qué querés, para quién y para cuándo." },
  { icon: PaletteIcon, title: "Elegimos colores y materiales", text: "Te muestro opciones de hilados y tonos." },
  { icon: YarnIcon, title: "Lo tejo a mano", text: "Puntada a puntada, con todo el cuidado." },
  { icon: GiftIcon, title: "Te lo envío o lo retirás", text: "Envíos a todo Uruguay, bien empaquetado." },
];

export default function Orders() {
  return (
    <section id="encargos" aria-labelledby="encargos-titulo" className="section">
      <SectionTitle id="encargos-titulo" eyebrow="Pensado para vos" title="Encargos personalizados">
        ¿Tenés algo en mente? Un regalo especial, un color en particular, un diseño soñado... Lo hacemos realidad
        juntas. <strong className="text-vino">Envíos a todo Uruguay.</strong>
      </SectionTitle>

      <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* hilo que une los pasos (desktop) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-12 w-[76%] text-rosa lg:block"
          fill="none"
        >
          <path
            d="M0 30 C 80 0, 170 60, 250 30 S 420 0, 500 30 S 670 60, 750 30 S 920 0, 1000 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 8"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {steps.map(({ icon: Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 110} className="card relative p-7 text-center">
            <span className="relative mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full border-2 border-dashed border-mimbre bg-crema text-vino">
              <Icon className="h-9 w-9" />
              <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-vino font-serif text-sm font-bold text-white">
                {i + 1}
              </span>
            </span>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-tinta/80">{text}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12 text-center">
        <a
          href={waLink("Hola Al Punto Paz! Tengo una idea para un encargo personalizado: ")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-8 py-4 text-lg"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Contame tu idea
        </a>
      </Reveal>
    </section>
  );
}
