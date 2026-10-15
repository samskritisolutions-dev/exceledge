import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Contact", description: "Talk to an Excel Edge Solutions specialist about automation." };

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-15">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section aria-labelledby="contact-page-title" className="border-b border-line pb-12 pt-8 md:pb-16">
        <div className="mt-14 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Get in touch</p>
            <h1 id="contact-page-title" className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">Let&apos;s talk about your workflows.</h1>
          </div>
          <p className="max-w-lg leading-7 text-muted">Have a question about document or process automation? Reach out to our team or visit our Hyderabad office.</p>
        </div>
      </section>

      <section aria-label="Contact details" className="grid gap-4 py-10 md:grid-cols-2 md:gap-6 md:py-14">
        <article className="rounded-2xl border border-line bg-white p-6 md:p-8">
          <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-accent">
            <MapPin aria-hidden className="size-5" />
          </div>
          <h2 className="mt-6 text-xl font-semibold tracking-tight">Our office</h2>
          <address className="mt-3 max-w-md text-sm leading-6 text-muted not-italic">{site.address}</address>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
          >
            Get directions <ArrowUpRight aria-hidden className="size-4" />
          </a>
        </article>

        <article className="rounded-2xl border border-line bg-white p-6 md:p-8">
          <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-accent">
            <Mail aria-hidden className="size-5" />
          </div>
          <h2 className="mt-6 text-xl font-semibold tracking-tight">Email us</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Send us a note and our team will get back to you.</p>
          <a href={`mailto:${site.email}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent">
            {site.email} <ArrowUpRight aria-hidden className="size-4" />
          </a>
        </article>
      </section>

      <section aria-labelledby="location-title" className="border-t border-line pt-10 md:pt-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Hyderabad, Telangana</p>
            <h2 id="location-title" className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Find our office</h2>
          </div>
          {site.phone && <a href={`tel:${site.phone}`} className="text-sm font-medium text-fg hover:text-accent">{site.phone}</a>}
        </div>
        <div className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-line sm:aspect-[16/7]">
          <iframe
            title="Excel Edge Solutions location at BSR Plaza"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.6071176702126!2d78.3641092!3d17.492721799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93753c756c45%3A0xe87d689939f8065f!2sBSR%20Plaza!5e1!3m2!1sen!2sin!4v1792046944480!5m2!1sen!2sin"
            width="600"
            height="450"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </div>
  );
}
