import Image from "next/image";
import { asset } from "@/lib/site";
import Reveal from "./Reveal";
import { LineHeart, LineYarn } from "./Decor";
import { CalendarIcon, HandsIcon, PencilIcon } from "./Icons";

const highlights = [
  { icon: CalendarIcon, title: "10 años de experiencia", text: "Una década perfeccionando cada punto y cada terminación." },
  { icon: HandsIcon, title: "100% hecho a mano", text: "Sin máquinas ni apuros: cada pieza lleva horas de dedicación." },
  { icon: PencilIcon, title: "Diseños personalizados", text: "Colores, tamaños y detalles pensados especialmente para vos." },
];

export default function About() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-titulo" className="section">
      <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal className="relative mx-auto w-full max-w-[17rem] sm:max-w-sm">
          <div aria-hidden="true" className="absolute -inset-3 rounded-full border-2 border-dashed border-mimbre" />
          <Image
            src={asset("/sobre-mi-taller.webp")}
            alt="Foto de Jocelyn, la tejedora de Al Punto Paz, sonriendo en su taller, con estantes de ovillos y banderines tejidos"
            width={720}
            height={720}
            className="relative aspect-square w-full rounded-full object-cover drop-shadow-xl"
          />
          <LineYarn className="absolute -bottom-6 -right-4 h-16 w-20 text-vino/60" />
          <LineHeart className="absolute -left-2 top-4 h-8 w-8 text-rosa" />
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Sobre mí</p>
          <h2 id="sobre-mi-titulo" className="mt-1 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Una aguja, un ovillo y mucho amor
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-tinta/85">
            ¡Hola! Soy <strong className="text-vino">Jocelyn</strong>. Hace más de 10 años agarré una aguja de crochet por primera vez y nunca más la solté. Lo que empezó como
            un pasatiempo se convirtió en <strong className="text-vino">Al Punto Paz</strong>: un espacio donde
            transformo ovillos en piezas que acompañan, abrigan y regalan momentos. Cada trabajo es único, porque está
            hecho a mano y pensado para vos.
          </p>
          <p className="mt-4 font-script text-2xl text-vino">Con cariño, puntada a puntada ♡</p>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-6 sm:grid-cols-3">
        {highlights.map(({ icon: Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 100} className="card p-7 text-center">
            <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-rosa-claro text-vino">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-tinta/80">{text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
