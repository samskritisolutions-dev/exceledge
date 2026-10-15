/* eslint-disable @next/next/no-img-element */
export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <img src="/brand/excel-edge-logo.svg" alt="Excel Edge Solutions" width={250} height={90} className={`${className} w-auto`} />
  );
}

export function TungstenBadge({ className = "h-5" }: { className?: string }) {
  return (
    <span className="inline-flex items-center">
      <img src="/brand/tungsten-logo.svg" alt="Tungsten Automation" width={144} height={29} className={`${className} w-auto`} />
    </span>
  );
}
