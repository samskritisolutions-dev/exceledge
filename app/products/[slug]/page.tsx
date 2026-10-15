import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BarChart3, Check, FileCheck2, FileOutput, FileSignature, FileText, Globe, MonitorSmartphone, Scan, ShieldCheck, UsersRound, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shot } from "@/components/Shot";
import { PowerPdfEditions } from "@/components/PowerPdfEditions";
import { products, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.summary, alternates: { canonical: `/products/${p.slug}` } } : {};
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const ld = {
    "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.summary,
    brand: { "@type": "Brand", name: "Tungsten Automation" }, url: `${site.url}/products/${p.slug}`,
  };
  if (p.slug === "power-pdf") return <PowerPdfPage ld={ld} />;
  if (p.slug === "invoiceagility") return <InvoiceAgilityPage ld={ld} />;
  if (p.slug === "totalagility") return <TotalAgilityPage ld={ld} />;

  return (
    <div className="mx-auto max-w-6xl px-6 pt-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">Product</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">{p.name}</h1>
      <p className="mt-4 text-xl">{p.tagline}</p>
      <p className="mt-6 max-w-xl text-muted">{p.summary}</p>
      <div className="mt-8"><Button href="/book-a-demo">Book a demo</Button></div>
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <Shot label={p.name} />
        <ul className="divide-y divide-line border-y border-line">
          {p.points.map((pt) => (
            <li key={pt} className="flex items-center gap-3 py-4"><Check className="size-4 text-accent" aria-hidden />{pt}</li>
          ))}
        </ul>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </div>
  );
}

function PowerPdfPage({ ld }: { ld: Record<string, unknown> }) {
  const features = [
    { title: "Easy to use", description: "A familiar, Office-style interface helps people get started quickly.", icon: FileText },
    { title: "Powerful conversion", description: "Create, edit, and convert PDFs to Word, Excel, PowerPoint, images, HTML, and more.", icon: FileOutput },
    { title: "Office integration", description: "Work with PDF tools from within Microsoft Word, Excel, and PowerPoint.", icon: Workflow },
    { title: "Document security", description: "Apply password protection and permissions, and redact sensitive content and metadata.", icon: ShieldCheck },
    { title: "Work on the move", description: "Read, annotate, mark up, sign, and share PDFs on iOS and Android.", icon: MonitorSmartphone },
    { title: "eSignatures", description: "Create and apply digital signatures to keep document approvals moving.", icon: FileSignature },
  ];
  const questions = [
    { question: "Is Power PDF a subscription?", answer: "Standard, Advanced, and Mac editions are perpetual licenses. Business is available as a subscription with updates, upgrades, and extended support; term and perpetual options may also be available." },
    { question: "Can I work with Microsoft Office files?", answer: "Power PDF supports conversion between PDF and common Office formats, and integrates with Word, Excel, and PowerPoint." },
    { question: "Can Power PDF help protect sensitive documents?", answer: "Yes. Available tools include password protection, permissions, and redaction of sensitive information and private metadata." },
  ];

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <section aria-label="Breadcrumb" className="pt-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="transition-colors hover:text-fg">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/#products" className="transition-colors hover:text-fg">Products</Link>
            <span aria-hidden>/</span>
            <span aria-current="page" className="text-fg">Power PDF</span>
          </nav>
        </section>

        <section className="grid items-center gap-12 py-14 md:grid-cols-2 md:gap-16 md:py-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Tungsten Power PDF</p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">Smart, secure, cost-effective PDF management.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">Create, convert, edit, share, and eSign PDFs with enterprise-ready tools. Excel Edge Solutions brings you Power PDF to simplify document workflows and help your team get more done.</p>
            <ul className="mt-7 space-y-3 text-sm text-fg">
              {["Familiar Office-style interface", "Powerful editing and conversion", "Security and redaction tools"].map((item) => (
                <li key={item} className="flex items-center gap-3"><Check aria-hidden className="size-4 text-accent" />{item}</li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button href="/contact">Talk to an expert</Button>
              <Link href="#editions" className="group inline-flex items-center gap-2 text-sm font-medium hover:text-accent">Explore editions <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </div>

          <div aria-label="Illustration of a PDF document" className="relative grid min-h-[340px] place-items-center overflow-hidden rounded-2xl border border-line bg-[#f3f6fc] p-8 md:min-h-[420px]">
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-blue-100/80 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 size-64 rounded-full bg-indigo-100/70 blur-3xl" />
            <div className="relative w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-28px_rgba(0,18,59,0.35)] sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-lg bg-red-50 text-red-600"><FileText aria-hidden className="size-5" /></span><div><p className="text-sm font-semibold text-slate-900">Project brief.pdf</p><p className="text-xs text-slate-500">PDF document</p></div></div>
                <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500">EDIT</span>
              </div>
              <div className="py-6">
                <div className="h-2.5 w-2/3 rounded-full bg-slate-200" />
                <div className="mt-3 h-2 w-full rounded-full bg-slate-100" />
                <div className="mt-2 h-2 w-11/12 rounded-full bg-slate-100" />
                <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-100" />
                <div className="mt-6 grid grid-cols-3 gap-2"><div className="h-16 rounded-lg bg-blue-50" /><div className="h-16 rounded-lg bg-slate-50" /><div className="h-16 rounded-lg bg-indigo-50" /></div>
                <div className="mt-6 h-2 w-full rounded-full bg-slate-100" />
                <div className="mt-2 h-2 w-3/4 rounded-full bg-slate-100" />
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500"><span className="flex items-center gap-2"><FileCheck2 aria-hidden className="size-4 text-emerald-600" /> Ready to share</span><span>1 of 8</span></div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t border-line py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 md:py-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Overview</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Work smarter with a powerful PDF solution.</h2>
            <p className="mt-5 leading-7 text-muted">Trusted by more than 15 million users, Power PDF brings document creation, editing, conversion, and management together in a familiar Office-style workspace. Advanced editing, security, and redaction tools support individuals, teams, and organizations.</p>
          </div>
          <div className="rounded-2xl bg-[#07142f] p-7 text-white md:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-200">A practical alternative</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight">More value from your PDF investment.</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">The Power PDF product page highlights potential savings of up to 60% compared with Adobe pricing. Ask us to help compare the right edition for your team.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">Compare editions <ArrowRight aria-hidden className="size-4" /></Link>
          </div>
        </section>

        <section className="grid gap-8 border-t border-line py-14 md:grid-cols-2 md:items-center md:gap-16 md:py-16">
          <div className="order-2 rounded-2xl border border-line bg-white p-7 md:order-1 md:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Power PDF Business</p>
            <div className="mt-6 flex items-center gap-4"><span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-accent"><Workflow className="size-6" /></span><span className="text-lg font-semibold">Stay aligned, wherever work happens.</span></div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted"><span className="rounded-full bg-slate-100 px-3 py-1.5">Desktop</span><span className="rounded-full bg-slate-100 px-3 py-1.5">Browser</span><span className="rounded-full bg-slate-100 px-3 py-1.5">Microsoft Teams</span></div>
          </div>
          <div className="order-1 md:order-2">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Work together, anywhere</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">PDF collaboration across desktop, browser, and Teams.</h2>
            <p className="mt-5 leading-7 text-muted">Power PDF Business includes a Cloud Editor for opening and editing PDFs in a browser without installing software, plus a Microsoft Teams app for reviewing and commenting in your daily workflow. Collaboration tools are included with Business at no additional charge. Documents are retained only during the editing session.</p>
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Benefits</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Tools for the way you work with PDFs.</h2>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-xl border border-line p-5">
                <span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-accent"><Icon aria-hidden className="size-5" strokeWidth={1.7} /></span>
                <h3 className="mt-5 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Industries</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">PDF work across industries.</h2>
            <p className="max-w-md text-sm leading-6 text-muted">Support document-heavy work in legal, financial services, healthcare, public sector, and technical teams.</p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["Legal", "Financial services", "Healthcare", "Public sector", "Technical"].map((industry) => <li key={industry} className="rounded-xl border border-line px-4 py-5 text-center text-sm font-medium">{industry}</li>)}
          </ul>
        </section>

        <PowerPdfEditions />

        <section className="border-t border-line py-14 md:py-16">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">FAQs</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">A few common questions.</h2></div>
          <div className="mt-7 divide-y divide-line border-y border-line">
            {questions.map(({ question, answer }) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">{question}<span className="text-xl text-accent transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{answer}</p></details>)}
          </div>
        </section>

        <section className="rounded-2xl bg-[#07142f] px-7 py-10 text-white sm:px-10 md:flex md:items-center md:justify-between md:gap-8 md:px-12 md:py-12">
          <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-200">Power PDF</p><h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Make PDF work easier for your team.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Talk with Excel Edge Solutions about bringing Power PDF into your document workflows.</p></div>
          <div className="mt-6 shrink-0 md:mt-0"><Link href="/book-a-demo" className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07142f] transition hover:bg-blue-100">Book a demo <ArrowRight aria-hidden className="size-4" /></Link></div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}

function InvoiceAgilityPage({ ld }: { ld: Record<string, unknown> }) {
  const pillars = [
    { title: "Smart, touchless automation", description: "Use AI-powered capture and validation to reduce manual effort, correct errors, and speed invoice turnaround.", icon: Zap },
    { title: "Global coverage", description: "Process invoices from suppliers across regions and formats through one connected platform.", icon: Globe },
    { title: "Local assurance", description: "Keep pace with e-invoicing and tax requirements with adaptable workflows and implementation support.", icon: ShieldCheck },
  ];
  const stages = [
    { title: "Transform", description: "Capture, extract, categorize, and verify invoice data from different formats and channels.", icon: Scan },
    { title: "Orchestrate", description: "Route work across teams and systems, automate routine steps, and connect with your ERP.", icon: Workflow },
    { title: "Ensure compliance", description: "Apply validation rules and adapt invoice processing to changing requirements.", icon: ShieldCheck },
    { title: "Unlock insights", description: "Turn invoice data into useful visibility for finance and cash flow decisions.", icon: BarChart3 },
    { title: "Advance", description: "Scale consistent, automated processes as invoice volumes and business needs grow.", icon: ArrowRight },
  ];
  const operations = [
    { title: "Accelerate processing", description: "Reduce bottlenecks and manual handoffs across the invoice lifecycle.", icon: Zap },
    { title: "Connect teams", description: "Give stakeholders shared workflows and visibility into invoice status.", icon: UsersRound },
    { title: "Standardize controls", description: "Use validation, audit trails, and business rules to keep processes consistent.", icon: FileCheck2 },
  ];
  const aiTools = [
    { title: "Smart AI Matching", description: "Match purchase orders and invoice line items, then route exceptions for focused review.", icon: FileCheck2 },
    { title: "Smart AI Coding", description: "Predict ledger codes and cost centers, learning from corrections over time.", icon: BarChart3 },
    { title: "Fraud Agent", description: "Check for document tampering, bank detail mismatches, duplicates, and unusual patterns.", icon: ShieldCheck },
    { title: "Translation Agent", description: "View invoice content with an on-demand translation overlay across 40+ languages.", icon: Globe },
    { title: "Invoice Assistant", description: "Ask questions about the invoice process and get answers in plain language.", icon: FileText },
    { title: "Agent Authoring", description: "Create custom AP automations with natural language instructions, without writing code.", icon: Zap },
  ];
  const views = [
    { title: "One clear workspace", description: "A simplified interface helps each user find the work and actions they need." },
    { title: "Views for every role", description: "Tailor the work view from AP processor through finance leadership." },
    { title: "Unified dashboards", description: "Bring invoice metrics and process activity into one consolidated view." },
  ];
  const questions = [
    { question: "What is invoice automation?", answer: "Invoice automation captures and processes invoice information from digital or paper documents, then applies business rules and workflow steps to move invoices through review and payment." },
    { question: "How does InvoiceAgility help finance teams?", answer: "It can reduce repetitive data entry, improve invoice validation, route exceptions for review, and provide visibility into AP and AR workflows." },
    { question: "Can InvoiceAgility support global e-invoicing?", answer: "InvoiceAgility is designed to support multi-country e-invoicing requirements. Excel Edge Solutions can help assess your regions, systems, and compliance needs." },
  ];

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <section className="pt-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="transition-colors hover:text-fg">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/#products" className="transition-colors hover:text-fg">Products</Link>
            <span aria-hidden>/</span>
            <span aria-current="page" className="text-fg">InvoiceAgility+</span>
          </nav>
        </section>

        <section className="grid items-center gap-12 py-14 md:grid-cols-2 md:gap-16 md:py-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Tungsten InvoiceAgility+</p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">Advance from invoice chaos to intelligent automation.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">Automate invoice-to-pay with AI that captures, matches, codes, and reconciles invoices from receipt through payment, with global compliance and supplier connectivity.</p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button href="/book-a-demo">Book a demo</Button>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-medium hover:text-accent">Talk to a specialist <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </div>
          <div aria-label="Invoice processing illustration" className="relative grid min-h-[340px] place-items-center overflow-hidden rounded-2xl border border-line bg-[#f3f6fc] p-6 sm:p-9 md:min-h-[420px]">
            <div className="absolute -right-16 -top-20 size-64 rounded-full bg-emerald-100/70 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 size-64 rounded-full bg-blue-100/80 blur-3xl" />
            <div className="relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-28px_rgba(0,18,59,0.3)] sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-accent"><FileText className="size-5" /></span><div><p className="text-sm font-semibold text-slate-900">Supplier invoice</p><p className="text-xs text-slate-500">Invoice received</p></div></div><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700">CAPTURED</span></div>
              <div className="mt-5 rounded-xl bg-slate-50 p-4"><div className="flex items-center justify-between text-xs text-slate-500"><span>Supplier</span><span>Invoice number</span></div><div className="mt-1 flex items-center justify-between text-sm font-medium text-slate-900"><span>Northstar Supply</span><span>INV-2048</span></div><div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 text-xs text-slate-500"><span>Total due</span><span className="text-sm font-semibold text-slate-900">$4,280.00</span></div></div>
              <div className="mt-5 space-y-3">
                {["Data captured", "Rules validated", "Routed for approval"].map((label, index) => <div key={label} className="flex items-center gap-3 text-xs text-slate-600"><span className={`grid size-6 place-items-center rounded-full ${index === 2 ? "bg-emerald-100 text-emerald-700" : "bg-blue-50 text-accent"}`}>{index === 2 ? <Check className="size-3.5" /> : <span className="size-1.5 rounded-full bg-current" />}</span>{label}<span className="ml-auto text-[10px] text-slate-400">{index === 2 ? "IN PROGRESS" : "COMPLETE"}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Overview</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Smarter invoicing. Faster finance.</h2><p className="mt-5 leading-7 text-muted">Paper, PDFs, email, and different compliance rules can make invoice processing difficult to manage. InvoiceAgility+ brings AP and AR workflows together so finance teams can focus less on repetitive tasks and more on higher-value work.</p></div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {pillars.map(({ title, description, icon: Icon }) => <article key={title} className="rounded-2xl border border-line p-6"><span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-accent"><Icon aria-hidden className="size-5" /></span><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{description}</p></article>)}
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">A focused experience</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">The right information for every finance role.</h2><p className="mt-4 leading-7 text-muted">Keep daily work, key insights, and required actions together instead of switching between disconnected tools and reports.</p></div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">{views.map(({ title, description }, index) => <article key={title} className="rounded-xl border border-line p-5"><span className="font-mono text-xs text-accent">0{index + 1}</span><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{description}</p></article>)}</div>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">AI-powered finance tools</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Automation for every step of invoice processing.</h2><p className="mt-4 leading-7 text-muted">InvoiceAgility+ combines purpose-built AI tools with human review for exceptions and specialized tasks.</p></div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiTools.map(({ title, description, icon: Icon }) => <article key={title} className="rounded-xl bg-[#f3f6fc] p-5"><Icon aria-hidden className="size-5 text-accent" /><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{description}</p></article>)}
          </div>
          <div className="mt-5 grid gap-4 rounded-2xl border border-line p-6 md:grid-cols-2 md:items-center md:p-7">
            <div><p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Connected operations</p><h3 className="mt-2 text-lg font-semibold">Connect systems and suppliers.</h3><p className="mt-2 text-sm leading-6 text-muted">The Tungsten Connectivity Hub links invoice workflows with ERP and e-invoicing networks. Supplier+ adds a shared portal for invoice transparency, payment visibility, and supplier inquiries.</p></div>
            <div className="flex flex-wrap gap-2 md:justify-end">{["SAP", "Oracle", "D365", "Coupa", "Peppol", "Any ERP"].map((system) => <span key={system} className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted">{system}</span>)}</div>
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">How it works</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">From invoice to insight.</h2><p className="mt-5 leading-7 text-muted">Automate the invoice lifecycle, connect workflows, and give finance teams clearer information for decisions.</p></div>
            <ol className="divide-y divide-line border-y border-line">
              {stages.map(({ title, description, icon: Icon }, index) => <li key={title} className="flex gap-4 py-5"><span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-accent"><Icon aria-hidden className="size-5" /></span><div><div className="flex items-baseline gap-3"><span className="font-mono text-xs text-muted">0{index + 1}</span><h3 className="font-semibold">{title}</h3></div><p className="mt-2 text-sm leading-6 text-muted">{description}</p></div></li>)}
            </ol>
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Operations</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Streamline work across your organization.</h2><p className="mt-4 leading-7 text-muted">Connect people, teams, systems, and invoice processes, whatever ERP your organization uses.</p></div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {operations.map(({ title, description, icon: Icon }) => <article key={title} className="rounded-xl bg-[#f3f6fc] p-6"><Icon aria-hidden className="size-6 text-accent" /><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{description}</p></article>)}
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">FAQs</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Common questions about invoice automation.</h2></div>
          <div className="mt-7 divide-y divide-line border-y border-line">
            {questions.map(({ question, answer }) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">{question}<span className="text-xl text-accent transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{answer}</p></details>)}
          </div>
        </section>

        <section className="rounded-2xl bg-[#07142f] px-7 py-10 text-white sm:px-10 md:flex md:items-center md:justify-between md:gap-8 md:px-12 md:py-12">
          <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-200">InvoiceAgility+</p><h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Make invoice processing easier to manage.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Talk with Excel Edge Solutions about AP automation and e-invoicing for your business.</p></div>
          <div className="mt-6 shrink-0 md:mt-0"><Link href="/book-a-demo" className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07142f] transition hover:bg-blue-100">Book a demo <ArrowRight aria-hidden className="size-4" /></Link></div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}

function TotalAgilityPage({ ld }: { ld: Record<string, unknown> }) {
  const benefits = [
    { title: "Faster time to action", description: "Automated document workflows can reduce processing and turnaround time by up to 90%.", icon: Zap },
    { title: "Insight-led decisions", description: "Turn unstructured content into useful insights for faster, more confident decisions.", icon: BarChart3 },
    { title: "Better customer experiences", description: "Standardize onboarding, service, and support workflows so teams can respond sooner.", icon: UsersRound },
    { title: "Security and compliance", description: "Bring governance, security, and compliance controls into document-driven processes.", icon: ShieldCheck },
  ];
  const stages = [
    { title: "Transform", description: "Capture, classify, extract, and verify information from incoming documents.", icon: Scan },
    { title: "Orchestrate", description: "Coordinate end-to-end workflows across systems, teams, and AI agents.", icon: Workflow },
    { title: "Discover", description: "Find insights and patterns in unstructured content to inform business decisions.", icon: FileText },
    { title: "Advance", description: "Scale automation across complex processes and turn insight into measurable outcomes.", icon: ArrowRight },
  ];
  const questions = [
    { question: "What is AI workflow automation?", answer: "AI workflow automation combines data, AI capabilities, and integrations to complete connected tasks. TotalAgility brings document processing and process orchestration together to automate document-driven work." },
    { question: "Which industries can use TotalAgility?", answer: "TotalAgility can support document and workflow automation in banking and financial services, supply chain, public sector, insurance, healthcare, and other document-heavy industries." },
    { question: "How can TotalAgility be deployed?", answer: "Deployment options can include public cloud, private cloud, or on-premises environments, depending on your organization’s requirements." },
    { question: "Can TotalAgility connect with existing business systems?", answer: "TotalAgility is designed to connect workflows across business systems and teams. Excel Edge Solutions can help assess your processes and integration needs." },
  ];

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <section className="pt-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="transition-colors hover:text-fg">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/#products" className="transition-colors hover:text-fg">Products</Link>
            <span aria-hidden>/</span>
            <span aria-current="page" className="text-fg">TotalAgility</span>
          </nav>
        </section>

        <section className="grid items-center gap-12 py-14 md:grid-cols-2 md:gap-16 md:py-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Tungsten TotalAgility</p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">Advance documents to decisions.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">Transform operations with AI-driven workflows, smart document processing, and real-time insights that help your business move faster and make informed decisions.</p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button href="/book-a-demo">Book a demo</Button>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-medium hover:text-accent">Talk to a specialist <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </div>
          <div aria-label="Document automation workflow illustration" className="relative grid min-h-[340px] place-items-center overflow-hidden rounded-2xl border border-line bg-[#f3f6fc] p-6 sm:p-9 md:min-h-[420px]">
            <div className="absolute -right-16 -top-20 size-64 rounded-full bg-violet-100/80 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 size-64 rounded-full bg-blue-100/80 blur-3xl" />
            <div className="relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-28px_rgba(0,18,59,0.3)] sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4"><div><p className="text-sm font-semibold text-slate-900">Document workflow</p><p className="mt-1 text-xs text-slate-500">From information to action</p></div><span className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-medium text-violet-700">ACTIVE</span></div>
              <div className="mt-5 space-y-3">
                {[{ label: "Capture and understand", icon: Scan }, { label: "Route work intelligently", icon: Workflow }, { label: "Reveal useful insights", icon: BarChart3 }].map(({ label, icon: Icon }, index) => <div key={label} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><span className={`grid size-9 place-items-center rounded-lg ${index === 2 ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-accent"}`}><Icon className="size-4" /></span><span className="text-xs font-medium text-slate-700">{label}</span><Check className="ml-auto size-4 text-emerald-600" /></div>)}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-[#07142f] px-4 py-3 text-white"><span className="text-xs text-slate-300">Workflow status</span><span className="flex items-center gap-2 text-xs font-medium"><span className="size-1.5 rounded-full bg-emerald-300" /> Moving forward</span></div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t border-line py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 md:py-16">
          <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Overview</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Simplify. Automate. Accelerate.</h2><p className="mt-5 leading-7 text-muted">Enterprises handle growing amounts of real-time and archived content, while many systems solve only part of the challenge. TotalAgility brings document processing, workflow orchestration, and AI together to turn scattered information into useful insight and action.</p></div>
          <div className="rounded-2xl bg-[#07142f] p-7 text-white md:p-9"><p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-200">One connected platform</p><p className="mt-4 text-2xl font-semibold tracking-tight">From document to decision.</p><p className="mt-3 text-sm leading-6 text-slate-300">Bring information, people, processes, and AI together so teams can focus on meaningful work.</p><div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-200"><span className="rounded-full border border-white/15 px-3 py-1.5">Intelligent document processing</span><span className="rounded-full border border-white/15 px-3 py-1.5">Process orchestration</span><span className="rounded-full border border-white/15 px-3 py-1.5">AI insights</span></div></div>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Benefits</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Make complex work easier to move forward.</h2></div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {benefits.map(({ title, description, icon: Icon }) => <article key={title} className="rounded-2xl border border-line p-6"><span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-accent"><Icon aria-hidden className="size-5" /></span><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{description}</p></article>)}
          </div>
        </section>

        <section className="grid gap-8 border-t border-line py-14 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-16">
          <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">How it works</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Move from documents to decisions.</h2><p className="mt-5 leading-7 text-muted">Transform information, orchestrate work, discover insight, and advance outcomes across the enterprise.</p></div>
          <ol className="divide-y divide-line border-y border-line">
            {stages.map(({ title, description, icon: Icon }, index) => <li key={title} className="flex gap-4 py-5"><span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-accent"><Icon aria-hidden className="size-5" /></span><div><div className="flex items-baseline gap-3"><span className="font-mono text-xs text-muted">0{index + 1}</span><h3 className="font-semibold">{title}</h3></div><p className="mt-2 text-sm leading-6 text-muted">{description}</p></div></li>)}
          </ol>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Industries</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Automation for document-heavy work.</h2></div><p className="max-w-md text-sm leading-6 text-muted">Adapt workflows to your systems and deployment needs, including public cloud, private cloud, and on-premises environments.</p></div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{["Banking & finance", "Supply chain", "Public sector", "Insurance", "Healthcare"].map((industry) => <li key={industry} className="rounded-xl border border-line px-4 py-5 text-center text-sm font-medium">{industry}</li>)}</ul>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <div className="grid gap-6 rounded-2xl border border-line bg-[#f3f6fc] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-9">
            <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Analyst recognition · 2026</p><h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Recognized as a Leader in intelligent document processing.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-muted">Tungsten Automation reports Leader recognition in the 2026 Gartner Magic Quadrant for Intelligent Document Processing, for the second year running.</p></div>
            <span className="grid size-24 place-items-center rounded-full border border-accent/20 bg-white text-center font-mono text-xs uppercase tracking-widest text-accent">Gartner<br />2026</span>
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-16">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">FAQs</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Common questions about TotalAgility.</h2></div>
          <div className="mt-7 divide-y divide-line border-y border-line">
            {questions.map(({ question, answer }) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">{question}<span className="text-xl text-accent transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{answer}</p></details>)}
          </div>
        </section>

        <section className="rounded-2xl bg-[#07142f] px-7 py-10 text-white sm:px-10 md:flex md:items-center md:justify-between md:gap-8 md:px-12 md:py-12">
          <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-200">TotalAgility</p><h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Ready to automate document-driven work?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Talk with Excel Edge Solutions about bringing intelligent automation to your processes.</p></div>
          <div className="mt-6 shrink-0 md:mt-0"><Link href="/book-a-demo" className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07142f] transition hover:bg-blue-100">Book a demo <ArrowRight aria-hidden className="size-4" /></Link></div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
