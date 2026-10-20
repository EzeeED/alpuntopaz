export type Category = "Amigurumis" | "Ropa" | "Accesorios" | "Hogar" | "Bebés";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: Category;
  /** Foto dentro de /public/products (formato 4:5, ej. 640×800) */
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
    id: "conejita-vestido",
    name: "Conejita con vestido",
    description: "Dulce y delicada, con vestidito rosa tejido y moñito en la oreja.",
    category: "Amigurumis",
    image: "/products/amigurumi-conejita-vestido.webp",
    alt: "Conejita amigurumi blanca con vestido rosa tejido al crochet",
  },
  {
    id: "gatitos",
    name: "Gatitos blanco y negro",
    description: "Una pareja inseparable: uno blanco con naricita rosa y otro negro de ojos verdes.",
    category: "Amigurumis",
    image: "/products/amigurumi-gatitos.webp",
    alt: "Dos gatitos amigurumi abrazados, uno blanco saludando y otro negro con detalles blancos y ojos verdes",
  },
  {
    id: "saquito-rayado",
    name: "Saquito rayado",
    description: "Saquito de punto calado en crudo y rosa, con botones de madera.",
    category: "Ropa",
    image: "/products/ropa-saquito-rayado.webp",
    alt: "Saquito tejido al crochet en color crudo con franjas rosadas y botones de madera",
  },
  {
    id: "conjunto-vestido",
    name: "Conjunto de vestido",
    description: "Vestido con volados, vincha con flor y zapatitos haciendo juego.",
    category: "Bebés",
    image: "/products/bebes-conjunto-vestido.webp",
    alt: "Conjunto de bebé tejido al crochet: vestido bordó y lila con volados, vincha y zapatitos",
  },
  {
    id: "conejito-jardinero",
    name: "Conejito con jardinero",
    description: "Con jardinero y sombrerito turquesa, listo para salir de paseo.",
    category: "Amigurumis",
    image: "/products/amigurumi-conejito-jardinero.webp",
    alt: "Conejito amigurumi blanco con jardinero y sombrero turquesa",
  },
  {
    id: "vaquita",
    name: "Vaquita",
    description: "Manchada, cachetona y súper abrazable.",
    category: "Amigurumis",
    image: "/products/amigurumi-vaquita.webp",
    alt: "Vaquita amigurumi blanca con manchas negras y hocico rosado",
  },
  {
    id: "manta-ondas",
    name: "Manta de ondas",
    description: "Ondas en rosa, crudo y beige con conejitos en el borde. Ideal para cuna o sillón.",
    category: "Hogar",
    image: "/products/hogar-manta-ondas.webp",
    alt: "Manta tejida al crochet con ondas rosadas, blancas y beige y conejitos en el borde",
  },
  {
    id: "conejo",
    name: "Conejo orejón",
    description: "De orejas largas y color avellana, suavecito para acompañar siestas.",
    category: "Amigurumis",
    image: "/products/amigurumi-conejo.webp",
    alt: "Conejo amigurumi color beige de orejas largas",
  },
  {
    id: "osito-dormilon",
    name: "Osito dormilón",
    description: "Con gorro de dormir y enterito, en tonos tierra.",
    category: "Amigurumis",
    image: "/products/amigurumi-osito-dormilon.webp",
    alt: "Osito amigurumi marrón con gorro de dormir y enterito beige",
  },
  {
    id: "gorros-pompon",
    name: "Gorros con pompón",
    description: "Calentitos, con pompón y franjas. Se pueden hacer en tus colores.",
    category: "Ropa",
    image: "/products/ropa-gorros-pompon.webp",
    alt: "Dos gorros tejidos al crochet en azul y blanco con pompón",
  },
  {
    id: "gorritos-orejitas",
    name: "Gorritos con orejitas",
    description: "Gorritos de bebé con orejitas y moñito, en el color que elijas.",
    category: "Bebés",
    image: "/products/bebes-gorritos-orejitas.webp",
    alt: "Dos gorritos de bebé tejidos al crochet, uno marrón y otro crudo, con orejitas y moños",
  },
  {
    id: "manoplas",
    name: "Manoplas de recién nacido",
    description: "Blanquitas y suaves, con cinta de raso para que no se salgan.",
    category: "Bebés",
    image: "/products/bebes-manoplas.webp",
    alt: "Manoplas blancas de recién nacido tejidas al crochet con cinta de raso",
  },
  {
    id: "llavero-jirafa-pollito",
    name: "Llaveros jirafa y pollito",
    description: "Animalitos amarillos para colgar en la mochila o las llaves.",
    category: "Accesorios",
    image: "/products/llavero-jirafa-pollito.webp",
    alt: "Llaveros amigurumi de una jirafa y un pollito amarillos",
  },
  {
    id: "llavero-alegria",
    name: "Llavero Alegría",
    description: "Personaje de las emociones en versión llavero, con vestidito verde.",
    category: "Accesorios",
    image: "/products/llavero-alegria.webp",
    alt: "Llavero amigurumi de personaje amarillo con pelo azul y vestido verde",
  },
  {
    id: "llavero-ansiedad",
    name: "Llavero Ansiedad",
    description: "Pelo naranja revuelto y sonrisa nerviosa: ¡un personaje con mucha onda!",
    category: "Accesorios",
    image: "/products/llavero-ansiedad.webp",
    alt: "Llavero amigurumi de personaje naranja con pelo revuelto y buzo rayado",
  },
  {
    id: "llavero-furia",
    name: "Llavero Furia",
    description: "Rojo, cuadradito y con corbata. Pequeño pero intenso.",
    category: "Accesorios",
    image: "/products/llavero-furia.webp",
    alt: "Llavero amigurumi de personaje rojo con camisa y corbata",
  },
  {
    id: "llavero-tristeza",
    name: "Llavero Tristeza",
    description: "Azul, con anteojos redondos y buzo blanco.",
    category: "Accesorios",
    image: "/products/llavero-tristeza.webp",
    alt: "Llavero amigurumi de personaje azul con anteojos y buzo blanco",
  },
  {
    id: "llavero-miedo",
    name: "Llavero Miedo",
    description: "Lila, flaquito y con moñito rojo.",
    category: "Accesorios",
    image: "/products/llavero-miedo.webp",
    alt: "Llavero amigurumi de personaje lila con chaleco y moño rojo",
  },
  {
    id: "llavero-munequita",
    name: "Llavero muñequita",
    description: "Muñequita pelirroja con trenzas, pensada para regalar.",
    category: "Accesorios",
    image: "/products/llavero-munequita.webp",
    alt: "Llavero amigurumi de muñequita pelirroja con trenzas",
  },
];
