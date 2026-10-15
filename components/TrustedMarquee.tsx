import Image from "next/image";

const trustedLogos = [
  { name: "Accenture", file: "logo-accenture.png" },
  { name: "AXA", file: "logo-axa-1.png" },
  { name: "Air France", file: "logo-airfrance.png" },
  { name: "Deloitte", file: "logo-Deloitte.png" },
  { name: "Rolls-Royce", file: "logo-Rolls-Royce.png" },
  { name: "PwC", file: "logo-PricewaterhouseCoopers.png" },
];

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-5 pr-5 md:gap-8 md:pr-8">
      {trustedLogos.map((logo) => (
        <li key={logo.name} className="flex h-14 w-36 items-center justify-center md:h-16 md:w-44">
          <Image
            src={`/brand/trusted/${logo.file}`}
            alt={hidden ? "" : `${logo.name} logo`}
            width={176}
            height={64}
            className="max-h-12 w-auto max-w-full object-contain md:max-h-14"
          />
        </li>
      ))}
    </ul>
  );
}

export function TrustedMarquee() {
  return (
    <section aria-label="Trusted organizations" className="overflow-hidden border-y border-line bg-white py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Trusted by leading organizations</p>
      </div>
      <div className="mt-6 overflow-hidden">
        <div className="flex w-max animate-logo-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
}
