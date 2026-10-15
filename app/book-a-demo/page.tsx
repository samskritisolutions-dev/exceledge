import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Book a demo", description: "Book a live demo of Power PDF, InvoiceAgility or TotalAgility." };

export default function BookDemo() {
  const cal = process.env.NEXT_PUBLIC_CAL_URL;
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <Breadcrumbs items={[{ label: "Book a demo" }]} />

      <section aria-labelledby="demo-page-title" className="mt-8 overflow-hidden rounded-3xl bg-[#07142f] px-7 py-10 text-white sm:px-10 md:mt-10 md:px-14 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-200">A closer look at automation</p>
            <h1 id="demo-page-title" className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">See what better workflows can look like.</h1>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">Book a personalized walkthrough of Power PDF, InvoiceAgility, or TotalAgility with our team.</p>
          </div>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-3 md:grid-cols-1">
            {["Built around your process", "Focused on your use cases", "With an automation specialist"].map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-300/10 text-blue-200"><Check aria-hidden className="size-4" /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {cal && (
        <section aria-labelledby="calendar-title" className="mt-14 md:mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Choose a time</p>
              <h2 id="calendar-title" className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Find a time that works for you.</h2>
            </div>
            <span className="inline-flex items-center gap-2 text-sm text-muted"><CalendarDays aria-hidden className="size-4" /> Online scheduling</span>
          </div>
          <iframe src={cal} title="Schedule a product demo" className="mt-6 h-[720px] w-full rounded-2xl border border-line bg-white" />
        </section>
      )}

      <section aria-labelledby="demo-request-title" className="mt-14 grid gap-8 md:mt-20 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="md:pt-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Let&apos;s get started</p>
          <h2 id="demo-request-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">Tell us a little about what you need.</h2>
          <p className="mt-4 leading-7 text-muted">Share your details and what you would like to explore. Our team will follow up to arrange a demo tailored to your needs.</p>
          {!cal && (
            <div className="mt-6 rounded-xl border border-line bg-white p-4 text-sm leading-6 text-muted">
              <CalendarDays aria-hidden className="mb-2 size-5 text-accent" />
              Online scheduling is being set up. Send your request and we&apos;ll arrange a time with you directly.
            </div>
          )}
          <Link href="#demo-request-title" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors hover:text-accent">
            Request your demo <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm shadow-fg/5 sm:p-8 md:p-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
