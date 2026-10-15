import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TextLink } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { Shot } from "@/components/Shot";
import { products } from "@/lib/site";
import { TrustedMarquee } from "@/components/TrustedMarquee";

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

      <section id="products" className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-28">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Products</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Three products, one goal: less manual work.</h2>
        <div className="mt-16 divide-y divide-line border-t border-line">
          {products.map((p, i) => (
            <Reveal key={p.slug} className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16">
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
        <div className="rounded-2xl bg-fg px-8 py-16 text-bg md:px-16">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Ready to automate your business processes?</h2>
          <p className="mt-4 max-w-lg opacity-70">See the products working on your own documents and workflows.</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href="/book-a-demo" className="inline-flex h-11 items-center rounded-full bg-bg px-6 text-sm font-medium text-fg">Book a demo</Link>
            <Link href="/contact" className="text-sm underline underline-offset-4">Talk to a specialist</Link>
          </div>
        </div>
      </section>
    </>
  );
}
