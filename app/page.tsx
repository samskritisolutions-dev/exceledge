import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TextLink } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { Shot } from "@/components/Shot";
import { products } from "@/lib/site";
import { TrustedMarquee } from "@/components/TrustedMarquee";
import { TungstenBadge } from "@/components/Logo";

const steps = [
  ["01", "Assess", "We map your invoices, documents and approvals to find where automation pays back first."],
  ["02", "Implement", "Certified consultants configure and deploy the right Tungsten products around your systems."],
  ["03", "Support", "Training and ongoing support so the results hold as your volumes grow."],
];

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <TrustedMarquee />

      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div className="grid gap-5 rounded-2xl border border-line bg-white px-6 py-6 md:grid-cols-[auto_1fr] md:items-center md:gap-10 md:px-9 md:py-7">
          <div className="flex flex-col items-start gap-3 border-b border-line pb-4 md:items-center md:justify-center md:border-b-0 md:border-r md:pb-0 md:pr-9">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Partnered with</span>
            <TungstenBadge className="h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Bringing Tungsten Automation to your business.</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">Excel Edge Solutions helps teams assess, implement, and adopt Tungsten solutions for PDF workflows, invoice automation, and intelligent document processing.</p>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-28">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Products</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Three products, one goal: less manual work.</h2>
        <div className="mt-12 space-y-6 pb-10">
          {products.map((p, i) => (
            <Reveal key={p.slug} className={`md:sticky grid items-center gap-10 rounded-2xl border border-line bg-bg px-6 py-10 shadow-[0_18px_50px_-36px_rgba(0,18,59,0.3)] md:grid-cols-2 md:gap-16 md:px-10 md:py-12 ${i === 0 ? "md:top-24 md:z-[1]" : i === 1 ? "md:top-28 md:z-[2]" : "md:top-32 md:z-[3]"}`}>
              <div className={i % 2 ? "md:order-2" : ""}>
                <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-lg">{p.tagline}</p>
                <p className="mt-4 max-w-md text-muted">{p.summary}</p>
                <div className="mt-6"><TextLink href={`/products/${p.slug}`}>Learn more</TextLink></div>
              </div>
              <Shot label={p.name} />
            </Reveal>
          ))}
          </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-28">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">How we work</p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {steps.map(([n, t, d]) => (
            <div key={n} className="bg-bg p-8">
              <span className="font-mono text-xs text-accent">{n}</span>
              <h3 className="mt-6 text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-28">
        <div className="flex flex-col gap-8 rounded-2xl bg-fg px-8 py-16 text-bg md:flex-row md:items-center md:justify-between md:px-16">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Ready to automate your business processes?</h2>
            <p className="mt-4 max-w-lg opacity-70">See the products working on your own documents and workflows.</p>
          </div>
          <Link href="/book-a-demo" className="inline-flex h-11 shrink-0 items-center self-start rounded-full bg-bg px-6 text-sm font-medium text-fg md:self-auto">Book a demo</Link>
        </div>
      </section>
    </>
  );
}
