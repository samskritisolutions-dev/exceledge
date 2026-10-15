import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20">
      <Breadcrumbs items={[{ label: "Page not found" }]} />
      <p className="mt-16 font-mono text-xs uppercase tracking-widest text-muted">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Page not found.</h1>
      <div className="mt-8"><Button href="/">Back home</Button></div>
    </div>
  );
}
