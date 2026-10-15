"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const editions = {
  business: [
    {
      name: "Power PDF Advanced for Windows",
      price: "₹20,299",
      description: "Advanced editing, security, and document processing for business users.",
      points: ["Native ARM support", "SharePoint, iManage, and more", "eSignatures and batch processing", "Bates numbering and advanced redaction", "Password protection"],
    },
    {
      name: "Power PDF Business",
      price: "Contact us",
      description: "Collaboration and centralized management for teams of five or more.",
      points: ["Cloud Editor and Microsoft Teams app", "Central admin for users, installs, and security", "Citrix, App-V, and Windows Server support", "SDK, API, and flexible configurations", "Generative AI Copilots (bring your own OpenAI license)"],
    },
  ],
  individual: [
    {
      name: "Power PDF Standard for Windows",
      price: "₹14,899",
      description: "Straightforward PDF editing for home users and everyday tasks.",
      points: ["Create, edit, and export PDFs", "Familiar Office-style interface", "Convert to and from Office formats", "Native ARM support"],
    },
    {
      name: "Power PDF Advanced for Windows",
      price: "₹20,299",
      description: "More control for people with advanced PDF needs.",
      points: ["Everything in Standard", "eSignatures and batch processing", "Bates numbering and advanced redaction", "Password protection"],
    },
    {
      name: "Power PDF for Mac",
      price: "₹14,899",
      description: "A streamlined PDF toolkit designed for Mac users.",
      points: ["Edit and annotate PDFs", "Convert to Word, Excel, and image formats", "Combine, split, and organize pages", "Fill and sign forms digitally"],
    },
  ],
};

type Audience = keyof typeof editions;

export function PowerPdfEditions() {
  const [audience, setAudience] = useState<Audience>("business");
  const currentEditions = editions[audience];

  return (
    <section id="editions" className="scroll-mt-24 border-t border-line py-14 md:py-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Editions</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Choose the Power PDF edition that fits.</h2>
          <p className="mt-4 text-sm leading-6 text-muted">Listed prices are indicative. Contact Excel Edge Solutions to confirm current pricing and licensing options.</p>
        </div>
        <div role="group" aria-label="Choose your audience" className="inline-flex w-fit rounded-full border border-line bg-white p-1">
          {(["business", "individual"] as const).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={audience === key}
              onClick={() => setAudience(key)}
              className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${audience === key ? "bg-[#07142f] text-white" : "text-muted hover:text-fg"}`}
            >
              {key === "individual" ? "Individuals" : "Business"}
            </button>
          ))}
        </div>
      </div>

      <div className={`mt-8 grid gap-4 ${currentEditions.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
        {currentEditions.map((edition) => (
          <article key={edition.name} className="flex flex-col rounded-2xl border border-line p-6 md:p-7">
            <h3 className="text-lg font-semibold">{edition.name}</h3>
            <p className="mt-3 text-2xl font-semibold tracking-tight">{edition.price}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{edition.description}</p>
            <ul className="mt-5 flex-1 space-y-2.5 text-sm text-muted">
              {edition.points.map((point) => <li key={point} className="flex gap-2"><Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />{point}</li>)}
            </ul>
            <Link href="/book-a-demo" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">Book a demo <ArrowRight aria-hidden className="size-4" /></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
