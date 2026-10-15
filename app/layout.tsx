import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const redHatDisplay = localFont({
  src: [
    { path: "../public/font/RedHatDisplay-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/font/RedHatDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/font/RedHatDisplay-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/font/RedHatDisplay-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/font/RedHatDisplay-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/font/RedHatDisplay-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../public/font/RedHatDisplay-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-red-hat-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | e-Invoicing & Automation Experts`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", url: site.url },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/excel-edge-logo.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  email: site.email,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} ${GeistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-bg focus:p-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </body>
    </html>
  );
}
