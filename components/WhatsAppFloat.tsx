import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1F7A4D] text-white shadow-suave-lg transition hover:-translate-y-1 hover:scale-105 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 [animation-duration:2.5s]" />
      <WhatsAppIcon className="relative h-7 w-7 md:h-8 md:w-8" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-bold text-vino opacity-0 shadow-suave transition group-hover:opacity-100 md:block">
        ¿Hablamos?
      </span>
    </a>
  );
}
