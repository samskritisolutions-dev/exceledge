export const site = {
  name: "Excel Edge Solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://exceledgesolutions.in",
  description:
    "Excel Edge Solutions is an authorized Tungsten Automation partner delivering e-invoicing, AP automation and document management solutions.",
  email: "support@exceledgesolutions.com", // TODO confirm
  phone: "", // TODO add real number
  address: "4th Floor, Plot No. 708 & 709, BSR Plaza, Aparna Country Access Road, Miyapur, Hyderabad, Medchal Malkajgiri, Telangana, 500049",
};

export type Product = { slug: string; name: string; tagline: string; summary: string; points: string[] };

export const products: Product[] = [
  {
    slug: "power-pdf", name: "Power PDF",
    tagline: "Secure PDF work, without the friction.",
    summary: "Create, edit, convert and eSign PDFs securely with a smart desktop solution built for fast, efficient document management.",
    points: ["Create and edit PDFs", "Convert to and from Office formats", "Secure eSign and protection", "Desktop-first, familiar interface"],
  },
  {
    slug: "invoiceagility", name: "InvoiceAgility+",
    tagline: "Advance from invoice chaos to intelligent automation.",
    summary: "End-to-end invoice-to-pay automation with AI-powered capture, matching, coding, reconciliation, and global e-invoicing compliance.",
    points: ["AI-powered invoice capture", "Global e-invoicing support", "Accounts payable automation", "Fewer manual touches, fewer errors"],
  },
  {
    slug: "totalagility", name: "TotalAgility",
    tagline: "One platform for end-to-end automation.",
    summary: "End-to-end intelligent automation combining AI, document processing and workflow orchestration, with real-time insights.",
    points: ["Intelligent document processing", "Workflow orchestration", "AI-assisted decisions", "Real-time operational insight"],
  },
];

