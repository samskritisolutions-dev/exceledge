import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Exceledge Solutions collects, uses, and protects your information.",
};

const policies = [
  {
    title: "1. Information We Collect",
    content: (
      <ul className="list-disc space-y-2 pl-6">
        <li><strong>Personal Information:</strong> Name, email address, phone number, company details, etc.</li>
        <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data.</li>
        <li><strong>Communication Data:</strong> Information you provide through forms, email, or other channels.</li>
      </ul>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <ul className="list-disc space-y-2 pl-6">
        <li>Provide and improve our services</li>
        <li>Respond to inquiries and requests</li>
        <li>Send updates or marketing communications (if opted-in)</li>
        <li>Maintain website security and performance</li>
        <li>Comply with legal obligations</li>
      </ul>
    ),
  },
  {
    title: "3. Cookies & Tracking Technologies",
    content: <p>We may use cookies and similar technologies to enhance user experience, analyze traffic, and improve functionality. You can manage cookies through your browser settings.</p>,
  },
  {
    title: "4. Sharing of Information",
    content: (
      <>
        <p>We do not sell your personal data. We may share information with:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Trusted service providers</li>
          <li>Legal or regulatory authorities if required</li>
          <li>Third-party tools such as analytics platforms</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Data Security",
    content: <p>We implement reasonable security measures to protect your data. However, no online system is completely secure.</p>,
  },
  {
    title: "6. Your Rights",
    content: (
      <ul className="list-disc space-y-2 pl-6">
        <li>Access or update your data</li>
        <li>Request deletion</li>
        <li>Withdraw consent</li>
        <li>Object to certain processing</li>
      </ul>
    ),
  },
  {
    title: "7. Third-Party Links",
    content: <p>Our website may include links to third-party websites. We are not responsible for their privacy practices.</p>,
  },
  {
    title: "8. Updates to This Policy",
    content: <p>We may update this policy from time to time. Changes will be posted on this page.</p>,
  },
  {
    title: "9. Contact Us",
    content: (
      <address className="not-italic">
        <p><strong>Exceledge Solutions LLP</strong></p>
        <p className="mt-2">Email: <a className="text-accent underline underline-offset-4" href="mailto:support@exceledgesolutions.in">support@exceledgesolutions.in</a></p>
        <p>Website: <a className="text-accent underline underline-offset-4" href="https://exceledgesolutions.in/" target="_blank" rel="noreferrer">https://exceledgesolutions.in/</a></p>
      </address>
    ),
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-0">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <p className="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-muted">Legal</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Privacy Policy</h1>
      <p className="mt-5 text-sm text-muted"><strong className="font-medium text-fg">Effective Date:</strong> 01 April 2026</p>
      <p className="mt-8 text-lg leading-8 text-muted">At <strong className="font-semibold text-fg">Exceledge Solutions</strong> (“we”, “our”, “us”), we are committed to protecting your privacy and ensuring transparency in how we collect and use your information.</p>

      <div className="mt-12 divide-y divide-line border-y border-line">
        {policies.map(({ title, content }) => (
          <section key={title} className="py-7 text-sm leading-7 text-muted">
            <h2 className="mb-3 text-lg font-semibold leading-6 tracking-tight text-fg">{title}</h2>
            {content}
          </section>
        ))}
      </div>
    </article>
  );
}
