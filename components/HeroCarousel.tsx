"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, FileCheck2, FileText, Layers3, Pause, Play, Sparkles, Workflow } from "lucide-react";
import { useReducedMotion } from "motion/react";
import Link from "next/link";

const slides = [
  {
    eyebrow: "Authorized Tungsten partner · Hyderabad",
    title: <>Make work<br />flow <span className="text-blue-300">forward.</span></>,
    description: "Less time on paperwork. More time for the decisions that move your business ahead.",
    link: "/contact",
    linkLabel: "Talk to a specialist",
    product: "Business process automation",
    icon: Sparkles,
    accent: "from-blue-500/25 via-indigo-400/10 to-transparent",
  },
  {
    eyebrow: "InvoiceAgility",
    title: <>Invoices in.<br /><span className="text-emerald-300">Work moving.</span></>,
    description: "Capture invoice data, validate it and simplify accounts payable with intelligent automation.",
    link: "/products/invoiceagility",
    linkLabel: "Explore InvoiceAgility",
    product: "Invoice processing",
    icon: FileCheck2,
    accent: "from-emerald-400/25 via-teal-300/10 to-transparent",
  },
  {
    eyebrow: "Power PDF",
    title: <>Every PDF task,<br /><span className="text-violet-300">handled.</span></>,
    description: "Create, edit, convert and eSign documents with a secure, capable desktop PDF solution.",
    link: "/products/power-pdf",
    linkLabel: "Explore Power PDF",
    product: "PDF productivity",
    icon: FileText,
    accent: "from-violet-400/25 via-fuchsia-300/10 to-transparent",
  },
  {
    eyebrow: "TotalAgility",
    title: <>Bring every step<br /><span className="text-amber-200">together.</span></>,
    description: "Connect people, documents and decisions in one end-to-end workflow platform.",
    link: "/products/totalagility",
    linkLabel: "Explore TotalAgility",
    product: "Workflow orchestration",
    icon: Workflow,
    accent: "from-amber-300/25 via-orange-300/10 to-transparent",
  },
];

function SolutionVisual({ slideIndex }: { slideIndex: number }) {
  const slide = slides[slideIndex];
  const Icon = slide.icon;
  const items = slideIndex === 3
    ? ["Capture documents", "Review & approve", "Complete workflow"]
    : slideIndex === 2
      ? ["Edit with confidence", "Convert in seconds", "Sign securely"]
      : slideIndex === 1
        ? ["Invoice received", "Data validated", "Ready for approval"]
        : ["Documents", "Decisions", "Workflows"];

  return (
    <div className={`relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${slide.accent} px-6 py-10 sm:px-10 md:min-h-[390px]`}>
      <div className="absolute right-[-5rem] top-[-7rem] size-64 rounded-full border border-white/[0.08]" />
      <div className="absolute bottom-[-9rem] left-[-5rem] size-72 rounded-full border border-white/[0.06]" />
      <div className="relative w-full max-w-sm">
        <div className="mb-8 flex items-center gap-4">
          <span className="flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-blue-200"><Icon className="size-7" strokeWidth={1.5} /></span>
          <div><p className="text-xs uppercase tracking-[0.16em] text-slate-400">One connected flow</p><p className="mt-1 text-lg font-medium text-white">{slide.product}</p></div>
        </div>
        <div className="space-y-0">
          {items.map((item, index) => (
            <div key={item} className="relative flex items-center gap-4 py-3">
              {index < items.length - 1 && <span className="absolute bottom-[-0.75rem] left-[1.125rem] top-12 w-px bg-white/15" />}
              <span className={`relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border ${index === items.length - 1 ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-200" : "border-white/15 bg-[#07142f]/50 text-slate-200"}`}>
                {index === items.length - 1 ? <Check className="size-4" /> : index === 0 ? <Icon className="size-4" /> : <Layers3 className="size-4" />}
              </span>
              <span className="text-sm text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const interval = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  const slide = slides[activeSlide];

  return (
    <section aria-label="Featured solutions" aria-roledescription="carousel" className="min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)]">
      <div className="relative flex min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-[#07142f] px-6 py-7 text-white sm:px-10 sm:py-9 md:px-14 md:py-10 lg:px-16">
        <div className="pointer-events-none absolute -right-40 -top-48 size-[34rem] rounded-full border border-white/[0.06]" />
        <div className="pointer-events-none absolute -right-24 -top-32 size-[26rem] rounded-full border border-white/[0.06]" />
        <div className="relative mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div key={activeSlide} role="group" aria-label={`Slide ${activeSlide + 1} of ${slides.length}`} aria-roledescription="slide" className="animate-[hero-enter_350ms_ease-out] motion-reduce:animate-none">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-300 sm:text-xs">
              <span className="size-1.5 rounded-full bg-blue-300" />{slide.eyebrow}
            </p>
            <h1 className="mt-7 max-w-xl text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]">{slide.title}</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">{slide.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href="/book-a-demo" className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07142f] transition hover:bg-blue-100">Book a demo <ArrowRight className="size-4" /></Link>
              <Link href={slide.link} className="text-sm font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white">{slide.linkLabel}</Link>
            </div>
            <div className="mt-10 flex items-center gap-3 text-xs text-slate-400"><span className="font-mono text-white">0{activeSlide + 1}</span><span className="h-px w-8 bg-white/20"/><span>04</span><span className="ml-1">Solutions for work that moves</span></div>
          </div>
          <div key={`visual-${activeSlide}`} className="animate-[hero-enter_450ms_ease-out] motion-reduce:animate-none"><SolutionVisual slideIndex={activeSlide} /></div>
        </div>
        <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-5 md:mt-10">
          <div className="flex items-center gap-2" aria-label="Choose a slide">
            {slides.map((item, index) => (
              <button key={item.eyebrow} type="button" aria-label={`Go to slide ${index + 1}`} aria-current={index === activeSlide ? "true" : undefined} onClick={() => setActiveSlide(index)} className={`group flex h-8 items-center ${index === activeSlide ? "w-12" : "w-7"}`}>
                <span className={`h-[3px] w-full rounded-full transition-colors ${index === activeSlide ? "bg-blue-300" : "bg-white/20 group-hover:bg-white/50"}`} />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous slide" onClick={() => setActiveSlide((current) => (current - 1 + slides.length) % slides.length)} className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"><ArrowLeft aria-hidden className="size-4" /></button>
            <button type="button" aria-label="Next slide" onClick={() => setActiveSlide((current) => (current + 1) % slides.length)} className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"><ArrowRight aria-hidden className="size-4" /></button>
            {!prefersReducedMotion && <button type="button" aria-label={isPaused ? "Play slideshow" : "Pause slideshow"} onClick={() => setIsPaused((paused) => !paused)} className="ml-1 inline-flex size-10 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white">{isPaused ? <Play aria-hidden className="size-4" /> : <Pause aria-hidden className="size-4" />}</button>}
          </div>
        </div>
      </div>
    </section>
  );
}
