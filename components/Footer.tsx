import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { TungstenBadge } from "./Logo";
import { products, site } from "@/lib/site";

const linkStyle = "transition-colors hover:text-blue-200";

export function Footer() {
  return (
    <footer className="mt-12 bg-[#07142f] text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-12 md:gap-8 md:py-16">
        <div className="md:col-span-4">
          <Link href="/" aria-label="Excel Edge Solutions home" className="inline-flex items-center gap-4">
            <Image src="/brand/excel-edge-logo-white.svg" alt="Excel Edge Solutions" width={250} height={90} className="h-11 w-auto" />
            <span aria-hidden className="h-11 border-l border-white/15" />
            <TungstenBadge className="h-7 brightness-0 invert" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">Intelligent automation and document management for organizations that want accuracy, speed, and scale.</p>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Products</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            {products.map((product) => <li key={product.slug}><Link href={`/products/${product.slug}`} className={linkStyle}>{product.name}</Link></li>)}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Company</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li><Link href="/about" className={linkStyle}>About</Link></li>
            <li><Link href="/careers" className={linkStyle}>Careers</Link></li>
            <li><Link href="/contact" className={linkStyle}>Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Get in touch</h3>
          <address className="mt-5 space-y-4 text-sm not-italic leading-6 text-slate-300">
            <p className="flex items-start gap-3"><MapPin aria-hidden className="mt-1 size-4 shrink-0 text-blue-200" />{site.address}</p>
            <a href={`mailto:${site.email}`} className={`flex items-center gap-3 ${linkStyle}`}><Mail aria-hidden className="size-4 shrink-0 text-blue-200" />{site.email}</a>
            {site.phone && <a href={`tel:${site.phone}`} className={linkStyle}>{site.phone}</a>}
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Excel Edge Solutions</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className={linkStyle}>Privacy Policy</Link>
            <Link href="/terms-of-use" className={linkStyle}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
