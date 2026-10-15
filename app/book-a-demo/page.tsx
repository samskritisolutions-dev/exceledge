import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = { title: "Book a demo", description: "Book a live demo of Power PDF, InvoiceAgility or TotalAgility." };

export default function BookDemo() {
  const cal = process.env.NEXT_PUBLIC_CAL_URL;
  return (
    <div className="mx-auto max-w-4xl px-6 pt-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">Book a demo</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Pick a time that suits you.</h1>
      {cal ? (
        <iframe src={cal} title="Book a demo" className="mt-10 h-[720px] w-full rounded-xl border border-line" />
      ) : (
        <div className="mt-10 rounded-xl border border-line p-8">
          <p className="text-muted">Online scheduling is being set up. Send us a message and we will arrange a time.</p>
          <div className="mt-6"><Button href="/contact">Contact us</Button></div>
        </div>
      )}
    </div>
  );
}
