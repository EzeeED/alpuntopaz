// Genera imágenes placeholder para productos y la foto de "Sobre mí".
// Reemplazalas por fotos reales (podés usar .jpg/.png y actualizar lib/products.ts).
import { writeFileSync } from "node:fs";

const items = [
  ["amigurumi-osito", "Osito amigurumi", "#F2D7DF"],
  ["amigurumi-conejita", "Conejita con vestido", "#F6E6D6"],
  ["ropa-cardigan", "Cárdigan Paz", "#EFD9D0"],
  ["ropa-top", "Top de verano", "#F2D7DF"],
  ["accesorios-bolso", "Bolso de hombro", "#F6E6D6"],
  ["accesorios-gorro", "Gorro y cuello", "#EFD9D0"],
  ["hogar-manta", "Manta granny", "#F2D7DF"],
  ["hogar-canasto", "Canasto organizador", "#F6E6D6"],
  ["bebes-ajuar", "Ajuar para bebé", "#EFD9D0"],
  ["bebes-sonajero", "Sonajero apego", "#F2D7DF"],
];

const yarn = (cx, cy, r) => `
  <g fill="none" stroke="#8E3B5C" stroke-width="3" stroke-linecap="round">
    <circle cx="${cx}" cy="${cy}" r="${r}"/>
    <path d="M${cx - r * 0.9} ${cy - r * 0.3} Q${cx} ${cy - r * 0.9} ${cx + r * 0.85} ${cy - r * 0.45}"/>
    <path d="M${cx - r} ${cy + r * 0.1} Q${cx} ${cy - r * 0.4} ${cx + r} ${cy + r * 0.05}"/>
    <path d="M${cx - r * 0.85} ${cy + r * 0.5} Q${cx} ${cy + r * 0.05} ${cx + r * 0.9} ${cy + r * 0.45}"/>
    <path d="M${cx + r * 0.7} ${cy + r * 0.7} C${cx + r * 1.6} ${cy + r * 1.2}, ${cx + r * 2.2} ${cy + r * 0.2}, ${cx + r * 2.6} ${cy + r * 0.6}"/>
  </g>`;

const heart = (x, y, s) =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M12 21s-7-4.5-9.5-9C.7 8.6 2.6 4 6.6 4c2.2 0 3.6 1.3 4.4 2.6.8-1.3 2.2-2.6 4.4-2.6 4 0 5.9 4.6 4.1 8-2.5 4.5-9.5 9-9.5 9z" fill="none" stroke="#D48FA6" stroke-width="1.6"/>`;

for (const [file, name, bg] of items) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="${name}">
  <rect width="600" height="600" fill="${bg}"/>
  ${heart(80, 80, 2.2)}${heart(470, 460, 1.8)}
  ${yarn(250, 270, 90)}
  <text x="300" y="470" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#8E3B5C">${name}</text>
  <text x="300" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#3B2A2F" opacity=".7">Reemplazar con foto real</text>
</svg>`;
  writeFileSync(`public/products/${file}.svg`, svg);
}

writeFileSync(
  "public/sobre-mi.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 720" role="img" aria-label="Espacio para foto">
  <rect width="600" height="720" fill="#F2D7DF"/>
  ${heart(90, 90, 2.4)}${heart(460, 560, 2)}
  ${yarn(260, 320, 100)}
  <text x="300" y="560" text-anchor="middle" font-family="Georgia, serif" font-size="36" fill="#8E3B5C">Tu foto acá</text>
  <text x="300" y="600" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#3B2A2F" opacity=".7">Reemplazá /public/sobre-mi.svg</text>
</svg>`
);
console.log("Placeholders generados");
