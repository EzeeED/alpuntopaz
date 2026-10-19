"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Products() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Todos");

  const filtered = useMemo(
    () => (active === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="productos" aria-labelledby="productos-titulo" className="section">
      <SectionTitle id="productos-titulo" eyebrow="Hecho con mis manos" title="Productos">
        Algunas de las piezas que tejo. Todas se pueden hacer en los colores y tamaños que prefieras.
      </SectionTitle>

      <div role="group" aria-label="Filtrar productos por categoría" className="-mx-5 mb-10 overflow-x-auto px-5 no-scrollbar">
        <div className="flex w-max gap-2 sm:mx-auto sm:w-auto sm:flex-wrap sm:justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={active === cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border-2 px-5 py-2 font-semibold transition ${
                active === cat
                  ? "border-vino bg-vino text-white shadow-suave"
                  : "border-rosa-claro bg-white text-tinta hover:border-rosa hover:text-vino"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Mostrando {filtered.length} productos{active !== "Todos" ? ` de ${active}` : ""}.
      </p>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filtered.map((product, i) => (
          <Reveal as="li" key={product.id} delay={(i % 3) * 80}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
