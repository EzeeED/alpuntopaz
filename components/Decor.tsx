/** Elementos decorativos en línea fina, inspirados en el logo. */

export function ThreadDivider() {
  return (
    <div aria-hidden="true" className="mx-auto max-w-5xl px-5 text-vino/70">
      <svg viewBox="0 0 1000 40" className="h-8 w-full" preserveAspectRatio="none" fill="none">
        <path
          d="M0 20 C 60 0, 120 40, 180 20 S 300 0, 360 20 S 420 40, 470 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M530 20 C 580 0, 640 40, 700 20 S 820 0, 880 20 S 940 40, 1000 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg viewBox="0 0 24 24" className="mx-auto -mt-[1.7rem] h-6 w-6 text-rosa" fill="currentColor">
        <path d="M12 20s-7-4.4-9.3-8.8C1 7.9 2.9 4 6.6 4c2.2 0 3.6 1.3 4.4 2.6.8-1.3 2.2-2.6 4.4-2.6 3.7 0 5.6 3.9 3.9 7.2C19 15.6 12 20 12 20z" />
      </svg>
    </div>
  );
}

export function LineHeart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M12 20s-7-4.4-9.3-8.8C1 7.9 2.9 4 6.6 4c2.2 0 3.6 1.3 4.4 2.6.8-1.3 2.2-2.6 4.4-2.6 3.7 0 5.6 3.9 3.9 7.2C19 15.6 12 20 12 20z" />
    </svg>
  );
}

export function LineYarn({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <circle cx="22" cy="24" r="16" />
      <path d="M7.5 18c7-5 18-6 28-1.5M6.3 25.5c8-4 20-4 31.5.5M9 32.5c7-3 16-3 24 .5M12 12c5 4 8 13 6 27" />
      <path d="M35 33c6 6 12 7 17 2s9-3 11 1" />
    </svg>
  );
}
