import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Contact", description: "Talk to an Excel Edge Solutions specialist about automation." };

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-12">
      <section aria-labelledby="contact-page-title" className="pt-8">
        <h1 id="contact-page-title" className="text-3xl font-semibold tracking-tight">Contact</h1>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 pt-3 text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-fg">Home</Link>
          <span aria-hidden className="text-line">/</span>
          <span aria-current="page" className="text-fg">Contact</span>
        </nav>
      </section>
      <div className="grid gap-16 pt-12 md:grid-cols-2">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Let&apos;s talk about your workflows.</h1>
        <address className="mt-8 text-muted not-italic">
          {site.address}<br />
          <a href={`mailto:${site.email}`} className="hover:text-fg">{site.email}</a>
          {site.phone && (<><br />{site.phone}</>)}
        </address>
      </div>
      <ContactForm />
      <section aria-labelledby="location-title" className="md:col-span-2">
        <h2 id="location-title" className="text-2xl font-semibold tracking-tight">Find us</h2>
        <div className="mt-5 aspect-[4/3] overflow-hidden rounded-2xl border border-line sm:aspect-[16/7]">
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
    </div>
  );
}
