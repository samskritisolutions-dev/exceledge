"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { ChevronDown } from "lucide-react";

export type ProductSection = { id: string; label: string };

export function ProductSectionNav({ items, label }: { items: ProductSection[]; label: string }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-18% 0px -68% 0px", threshold: 0 });

    items.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [items]);

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;
    setMobileOpen(false);
    window.history.replaceState(null, "", `#${id}`);
    section.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }

  const activeIndex = items.findIndex(({ id }) => id === active);
  const activeLabel = items.find(({ id }) => id === active)?.label ?? items[0]?.label ?? "Overview";

  return (
    <nav aria-label={`${label} page sections`} className="sticky top-20 z-30 -mx-6 mb-6 border-y border-line bg-bg/95 px-6 py-2 backdrop-blur md:top-28 md:mx-0 md:mb-0 md:border-0 md:bg-transparent md:p-0">
      <div className="relative md:hidden">
        <button type="button" aria-expanded={mobileOpen} aria-controls={`${label}-mobile-sections`} onClick={() => setMobileOpen((open) => !open)} className="flex w-full items-center justify-between rounded-lg border border-line bg-white px-3 py-2.5 text-left text-sm">
          <span><span className="mr-2 font-mono text-[10px] text-muted">0{activeIndex + 1}</span><span className="font-medium">{activeLabel}</span></span>
          <ChevronDown aria-hidden className={`size-4 text-muted transition-transform ${mobileOpen ? "rotate-180" : ""}`} />
        </button>
        {mobileOpen && <ul id={`${label}-mobile-sections`} className="absolute left-0 right-0 top-full mt-2 max-h-[60vh] overflow-y-auto rounded-xl border border-line bg-bg p-2 shadow-xl">
          {items.map(({ id, label: itemLabel }, index) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(event) => scrollToSection(event, id)} aria-current={active === id ? "location" : undefined} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm ${active === id ? "bg-[#07142f] font-medium text-white" : "text-muted hover:bg-slate-100 hover:text-fg"}`}>
                <span className={`font-mono text-xs ${active === id ? "text-blue-200" : "text-muted/70"}`}>0{index + 1}</span>{itemLabel}
              </a>
            </li>
          ))}
        </ul>}
      </div>
      <ul className="hidden md:flex md:flex-col md:gap-1.5">
        {items.map(({ id, label: itemLabel }, index) => (
          <li key={id}>
            <a href={`#${id}`} onClick={(event) => scrollToSection(event, id)} aria-current={active === id ? "location" : undefined} className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs transition-colors ${active === id ? "bg-[#07142f] font-medium text-white" : "text-muted hover:bg-slate-100 hover:text-fg"}`}>
              <span className={`font-mono text-[10px] ${active === id ? "text-blue-200" : "text-muted/70"}`}>0{index + 1}</span>{itemLabel}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
