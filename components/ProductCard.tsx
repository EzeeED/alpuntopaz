import Image from "next/image";
import type { Product } from "@/lib/products";
import { asset, waLink } from "@/lib/site";
import { HeartIcon } from "./Icons";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-rosa-claro">
        <Image
          src={asset(product.image)}
          alt={product.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-vino">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="mt-2 flex-1 text-tinta/80">{product.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-tinta/70">Consultar precio</span>
          <a
            href={waLink(`Hola Al Punto Paz! Quiero consultar por: ${product.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2.5 text-sm"
            aria-label={`Lo quiero: consultar por ${product.name} en WhatsApp`}
          >
            <HeartIcon className="h-4 w-4" />
            Lo quiero
          </a>
        </div>
      </div>
    </article>
  );
}
