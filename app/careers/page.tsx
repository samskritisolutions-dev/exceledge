import type { Metadata } from "next";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Careers" };

export default function Careers() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">Careers</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Work with us.</h1>
      <p className="mt-6 text-muted">There are no open roles listed right now. If you would like to be considered for future openings, send your CV to <a className="text-fg underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </div>
  );
}
