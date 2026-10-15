import type { NextConfig } from "next";

// Old WordPress URLs -> new URLs (301). Remove if you keep the old paths.
const config: NextConfig = {
  async redirects() {
    return [
      { source: "/power-pdf", destination: "/products/power-pdf", permanent: true },
      { source: "/invoiceagility", destination: "/products/invoiceagility", permanent: true },
      { source: "/totalagility", destination: "/products/totalagility", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};
export default config;
