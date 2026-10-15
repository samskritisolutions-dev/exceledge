import { ArrowRight, Check, FileCheck2, FileText, LockKeyhole, Pencil, Workflow } from "lucide-react";

export function Shot({ label }: { label: string }) {
  const product = label.toLowerCase();

  if (product.includes("invoice")) {
    return (
      <div role="img" aria-label={`${label} invoice processing illustration`} className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50 p-5 sm:p-8">
        <div className="absolute -right-12 -top-16 size-48 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="relative w-full max-w-md rounded-xl border border-slate-200 bg-white p-4 shadow-[0_20px_50px_-30px_rgba(0,18,59,0.35)] sm:p-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg bg-blue-50 text-accent"><FileText className="size-4" /></span><div><p className="text-xs font-semibold text-slate-900">Supplier invoice</p><p className="text-[10px] text-slate-500">INV-2048 · Received today</p></div></div>
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-700">CAPTURED</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-[9px] text-slate-500"><span>SUPPLIER</span><span>INVOICE DATE</span><span>AMOUNT</span><span className="text-xs font-medium text-slate-800">Northstar</span><span className="text-xs font-medium text-slate-800">15 Oct 2026</span><span className="text-xs font-semibold text-slate-800">$4,280</span></div>
          <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
            {["Data extracted", "Invoice matched", "Ready for approval"].map((step, index) => <div key={step} className="flex items-center gap-2 text-[10px] text-slate-600"><span className={`grid size-5 place-items-center rounded-full ${index === 2 ? "bg-emerald-100 text-emerald-700" : "bg-blue-50 text-accent"}`}><Check className="size-3" /></span>{step}<span className="ml-auto h-px w-6 bg-slate-200" /></div>)}
          </div>
        </div>
      </div>
    );
  }

  if (product.includes("totalagility")) {
    return (
      <div role="img" aria-label={`${label} workflow automation illustration`} className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 p-5 sm:p-8">
        <div className="absolute -bottom-16 -left-12 size-48 rounded-full bg-violet-100/80 blur-3xl" />
        <div className="relative w-full max-w-md rounded-xl border border-slate-200 bg-white p-4 shadow-[0_20px_50px_-30px_rgba(0,18,59,0.35)] sm:p-5">
          <div className="flex items-center justify-between"><div><p className="text-xs font-semibold text-slate-900">Document to decision</p><p className="mt-1 text-[10px] text-slate-500">An intelligent workflow</p></div><span className="rounded-full bg-violet-50 px-2 py-1 text-[9px] font-semibold text-violet-700">ACTIVE</span></div>
          <div className="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
            {[{ title: "Capture", icon: FileText }, { title: "Orchestrate", icon: Workflow }, { title: "Decide", icon: FileCheck2 }].map(({ title, icon: Icon }, index) => <div key={title} className="contents"><div className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-2 text-center"><span className="grid size-8 place-items-center rounded-lg bg-white text-accent shadow-sm"><Icon className="size-4" /></span><span className="text-[9px] font-medium text-slate-700">{title}</span></div>{index < 2 && <ArrowRight className="size-3 text-slate-400" />}</div>)}
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#07142f] px-3 py-2 text-[10px] text-slate-200"><LockKeyhole className="size-3.5 text-blue-200" /> Governed, connected, and ready to scale</div>
        </div>
      </div>
    );
  }

  return (
    <div role="img" aria-label={`${label} PDF editing illustration`} className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 p-5 sm:p-8">
      <div className="absolute -right-14 -top-16 size-48 rounded-full bg-blue-100/80 blur-3xl" />
      <div className="relative w-full max-w-md rounded-xl border border-slate-200 bg-white p-4 shadow-[0_20px_50px_-30px_rgba(0,18,59,0.35)] sm:p-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg bg-red-50 text-red-600"><FileText className="size-4" /></span><div><p className="text-xs font-semibold text-slate-900">Project brief.pdf</p><p className="text-[10px] text-slate-500">8 pages · PDF document</p></div></div><span className="flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1 text-[9px] font-medium text-accent"><Pencil className="size-3" /> EDIT</span></div>
        <div className="py-4"><div className="h-2 w-2/3 rounded-full bg-slate-200" /><div className="mt-3 h-1.5 w-full rounded-full bg-slate-100" /><div className="mt-2 h-1.5 w-11/12 rounded-full bg-slate-100" /><div className="mt-2 h-1.5 w-4/5 rounded-full bg-slate-100" /><div className="mt-4 grid grid-cols-3 gap-2"><div className="h-12 rounded-lg bg-blue-50" /><div className="h-12 rounded-lg bg-slate-50" /><div className="h-12 rounded-lg bg-indigo-50" /></div><div className="mt-4 h-1.5 w-full rounded-full bg-slate-100" /><div className="mt-2 h-1.5 w-3/4 rounded-full bg-slate-100" /></div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-[10px] text-slate-500"><span className="flex items-center gap-2"><LockKeyhole className="size-3.5 text-emerald-600" /> Secure editing</span><span>1 / 8</span></div>
      </div>
    </div>
  );
}
