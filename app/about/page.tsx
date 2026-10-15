import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lightbulb, Scaling, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Excel Edge Solutions helps businesses transform work with trusted, intelligent automation.",
};

const services = [
  "Intelligent document processing",
  "Workflow automation",
  "Data capture and management solutions",
  "Process optimization and consulting",
  "Implementation and ongoing support",
];

const advantages = [
  {
    title: "Innovation",
    description: "We pursue automation excellence through intelligent document processing and emerging generative AI capabilities.",
    icon: Lightbulb,
  },
  {
    title: "Scalability",
    description: "Our unified, vendor-agnostic approach gives you flexible solutions that can grow and adapt with your business.",
    icon: Scaling,
  },
  {
    title: "Trust",
    description: "We build lasting customer confidence through dependable delivery and the ability to adapt as needs change.",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-0">
      <Breadcrumbs items={[{ label: "About" }]} />

      <section className="grid gap-10 border-b border-line pb-16 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16 md:pb-20 md:pt-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Who we are</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">Trusted AI-powered automation</h2>
        </div>
        <div className="max-w-xl text-base leading-7 text-muted md:pb-1">
          <p><strong className="font-semibold text-fg">At Excel Edge Solutions,</strong> we are committed to helping businesses streamline operations, improve efficiency, and accelerate digital transformation through intelligent automation.</p>
          <p className="mt-4">As a growing technology partner, we deliver smart, scalable, result-oriented solutions that optimize workflows, reduce manual effort, and enhance productivity across departments.</p>
        </div>
      </section>

      <section className="grid items-center gap-12 border-b border-line py-16 md:grid-cols-2 md:gap-20 md:py-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Our partnership</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">World-class technology. Thoughtful implementation.</h2>
          <p className="mt-5 leading-7 text-muted">We are proud to partner with Tungsten Automation, a global leader in intelligent automation and workflow solutions. We bring these technologies to our clients to digitize processes, improve accuracy, and deliver measurable business outcomes.</p>
        </div>
        <div className="rounded-2xl bg-[#07142f] p-7 text-white md:p-9">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-200">What we do</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">End-to-end automation services</h2>
          <ul className="mt-6 divide-y divide-white/10">
            {services.map((service) => (
              <li key={service} className="flex items-center justify-between gap-4 py-3.5 text-sm text-slate-200">
                {service}<ArrowRight aria-hidden className="size-4 shrink-0 text-blue-300" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">The Excel Edge advantage</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Built to make a difference at every step.</h2>
          <p className="mt-4 leading-7 text-muted">Our cloud-flexible, vendor-agnostic solutions help organizations across industries improve efficiency and reduce operational costs.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {advantages.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="rounded-2xl border border-line p-6 md:p-7">
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-accent"><Icon aria-hidden className="size-5" strokeWidth={1.7} /></div>
              <p className="mt-7 font-mono text-xs text-muted">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-6 pt-12 md:pb-8 md:pt-16">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Our direction</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Transforming processes. Delivering results.</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <article>
            <h3 className="text-xl font-semibold">Our vision</h3>
            <p className="mt-4 leading-7 text-muted">To become a trusted automation partner for businesses looking to innovate, scale, and stay ahead in an evolving digital landscape. We envision a future where organizations use intelligent automation to simplify operations, make faster decisions, and unlock new growth opportunities. By embracing emerging technologies and industry best practices, we help businesses turn challenges into competitive advantages.</p>
          </article>
          <article>
            <h3 className="text-xl font-semibold">Our mission</h3>
            <p className="mt-4 leading-7 text-muted">To deliver reliable, efficient, future-ready automation solutions that drive real business impact. We learn each client’s needs and provide tailored solutions that streamline processes, improve accuracy, and enhance productivity. Through strong technology partnerships, including Tungsten Automation, and a commitment to excellence, we help organizations reduce complexity, optimize performance, and unlock their full potential.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
