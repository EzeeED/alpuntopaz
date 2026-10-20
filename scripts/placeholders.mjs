// Genera la imagen provisoria de "Sobre mí". Reemplazala por una foto real.
import { writeFileSync } from "node:fs";

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
