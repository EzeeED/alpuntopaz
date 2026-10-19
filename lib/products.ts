export type Category = "Amigurumis" | "Ropa" | "Accesorios" | "Hogar" | "Bebés";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: Category;
  /** Reemplazá estas rutas por fotos reales dentro de /public/products */
  image: string;
  alt: string;
};

export const CATEGORIES: ("Todos" | Category)[] = [
  "Todos",
  "Amigurumis",
  "Ropa",
  "Accesorios",
  "Hogar",
  "Bebés",
];

export const PRODUCTS: Product[] = [
  {
    id: "osito",
    name: "Osito amigurumi",
    description: "Suavecito y abrazable, tejido con hilo de algodón y relleno hipoalergénico.",
    category: "Amigurumis",
    image: "/products/amigurumi-osito.svg",
    alt: "Osito amigurumi tejido al crochet",
  },
  {
    id: "conejita",
    name: "Conejita con vestido",
    description: "Una compañera dulce, con vestidito desmontable en el color que elijas.",
    category: "Amigurumis",
    image: "/products/amigurumi-conejita.svg",
    alt: "Conejita amigurumi con vestido tejido",
  },
  {
    id: "cardigan",
    name: "Cárdigan Paz",
    description: "Abrigado y liviano, con punto calado y botones de madera.",
    category: "Ropa",
    image: "/products/ropa-cardigan.svg",
    alt: "Cárdigan tejido al crochet en tonos rosados",
  },
  {
    id: "top",
    name: "Top de verano",
    description: "Fresco, de algodón, ideal para los días de playa.",
    category: "Ropa",
    image: "/products/ropa-top.svg",
    alt: "Top de verano tejido al crochet",
  },
  {
    id: "bolso",
    name: "Bolso de hombro",
    description: "Resistente y con forro interior, para llevar todo con estilo.",
    category: "Accesorios",
    image: "/products/accesorios-bolso.svg",
    alt: "Bolso de hombro tejido al crochet",
  },
  {
    id: "gorro",
    name: "Gorro y cuello",
    description: "Set calentito para el invierno, en lana suave que no pica.",
    category: "Accesorios",
    image: "/products/accesorios-gorro.svg",
    alt: "Set de gorro y cuello tejidos al crochet",
  },
  {
    id: "manta",
    name: "Manta granny",
    description: "Cuadraditos de colores unidos a mano para darle calidez a tu living.",
    category: "Hogar",
    image: "/products/hogar-manta.svg",
    alt: "Manta de cuadraditos granny tejida al crochet",
  },
  {
    id: "canasto",
    name: "Canasto organizador",
    description: "Firme y práctico, en trapillo, para ordenar con onda.",
    category: "Hogar",
    image: "/products/hogar-canasto.svg",
    alt: "Canasto organizador tejido al crochet",
  },
  {
    id: "batita",
    name: "Ajuar para bebé",
    description: "Batita, escarpines y gorrito en hilo suave para la piel más delicada.",
    category: "Bebés",
    image: "/products/bebes-ajuar.svg",
    alt: "Ajuar de bebé tejido al crochet",
  },
  {
    id: "sonajero",
    name: "Sonajero apego",
    description: "Liviano y seguro, con detalles tejidos que estimulan sus sentidos.",
    category: "Bebés",
    image: "/products/bebes-sonajero.svg",
    alt: "Sonajero de apego tejido al crochet",
  },
];
