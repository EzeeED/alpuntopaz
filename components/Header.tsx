"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, asset, waLink } from "@/lib/site";
import { MenuIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-crema/95 shadow-suave backdrop-blur" : "bg-crema/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 md:h-20">
        <a href="#inicio" className="flex items-center gap-2.5 rounded-full" onClick={() => setOpen(false)}>
          <Image src={asset("/logo.webp")} alt="" width={44} height={44} className="h-10 w-10 md:h-11 md:w-11" priority />
          <span className="font-serif text-xl font-semibold text-vino md:text-2xl">Al Punto Paz</span>
        </a>

        <nav aria-label="Menú principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative font-semibold text-tinta transition-colors hover:text-vino after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-rosa after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink("Hola Al Punto Paz! Quiero hacer un pedido.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Hacé tu pedido
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-vino hover:bg-rosa-claro lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} className="h-6 w-6" />
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Menú móvil"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "invisible max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-5 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-lg font-semibold hover:bg-rosa-claro hover:text-vino"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={waLink("Hola Al Punto Paz! Quiero hacer un pedido.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Hacé tu pedido
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
