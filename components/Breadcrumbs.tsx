import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="pt-8 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-fg">Home</Link>
        </li>
        {items.map((item) => (
          <li key={`${item.label}-${item.href ?? "current"}`} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-line">/</span>
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-fg">{item.label}</Link>
            ) : (
              <span aria-current="page" className="text-fg">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
