"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo, TungstenBadge } from "./Logo";
import { Button } from "./ui/button";
import { products } from "@/lib/site";

export function Header() {
  const desktopProductsRef = useRef<HTMLDetailsElement>(null);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const mobileProductsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeMenus = () => {
      if (desktopProductsRef.current) desktopProductsRef.current.open = false;
      if (mobileMenuRef.current) mobileMenuRef.current.open = false;
      if (mobileProductsRef.current) mobileProductsRef.current.open = false;
    };
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!desktopProductsRef.current?.contains(target) && desktopProductsRef.current) desktopProductsRef.current.open = false;
      if (!mobileMenuRef.current?.contains(target) && mobileMenuRef.current) {
        mobileMenuRef.current.open = false;
        if (mobileProductsRef.current) mobileProductsRef.current.open = false;
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const focusTarget = desktopProductsRef.current?.open
        ? desktopProductsRef.current.querySelector("summary")
        : mobileMenuRef.current?.open
          ? mobileMenuRef.current.querySelector("summary")
          : null;
      closeMenus();
      focusTarget?.focus();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeOnLinkClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target as HTMLElement).closest("a")) return;
    if (desktopProductsRef.current) desktopProductsRef.current.open = false;
    if (mobileMenuRef.current) mobileMenuRef.current.open = false;
    if (mobileProductsRef.current) mobileProductsRef.current.open = false;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Excel Edge Solutions home">
            <Logo className="h-9" />
          </Link>
          <span aria-hidden className="h-9 border-l border-line" />
          <TungstenBadge className="h-6" />
        </div>
        <nav
          aria-label="Main"
          className="hidden items-center gap-8 text-sm font-medium md:flex"
          onClick={closeOnLinkClick}
        >
          <Link href="/" className="text-muted transition-colors hover:text-fg">Home</Link>
          <Link href="/about" className="text-muted transition-colors hover:text-fg">About</Link>
          <details ref={desktopProductsRef} className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 text-muted transition-colors hover:text-fg [&::-webkit-details-marker]:hidden">
              Products <ChevronDown aria-hidden className="size-3.5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="absolute left-1/2 top-full z-50 mt-4 w-60 -translate-x-1/2 rounded-xl border border-line bg-bg p-2 shadow-xl shadow-fg/10">
              {products.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-line/50">
                  <span className="block font-medium text-fg">{product.name}</span>
                  <span className="mt-0.5 block text-xs text-muted">{product.tagline}</span>
                </Link>
              ))}
            </div>
          </details>
          <Link href="/contact" className="text-muted transition-colors hover:text-fg">Contact</Link>
          <Button href="/book-a-demo">Book a demo</Button>
        </nav>
        <details ref={mobileMenuRef} className="group relative md:hidden">
          <summary aria-label="Toggle navigation menu" className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full font-semibold text-fg transition-colors hover:bg-line/60 [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden className="size-5 group-open:hidden" />
            <X aria-hidden className="hidden size-5 group-open:block" />
            <span className="sr-only">Menu</span>
          </summary>
          <div onClick={closeOnLinkClick} className="absolute right-0 mt-4 flex w-60 flex-col gap-4 rounded-xl border border-line bg-bg p-5 text-sm shadow-xl shadow-fg/10">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <details ref={mobileProductsRef} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
                Products <ChevronDown aria-hidden className="size-3.5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-3 flex flex-col gap-3 border-l border-line pl-3">
                {products.map((product) => <Link key={product.slug} href={`/products/${product.slug}`} className="text-muted hover:text-fg">{product.name}</Link>)}
              </div>
            </details>
            <Link href="/contact">Contact</Link>
            <Link href="/book-a-demo" className="font-medium text-accent">
              Book a demo
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
