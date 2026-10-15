import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms that apply when you access or use the Exceledge Solutions website.",
};

const terms = [
  {
    title: "1. Use of Website",
    content: <p>This website provides information, services, and content for general business and informational purposes. You agree to use the website only for lawful purposes and in a manner that does not violate any applicable laws or regulations.</p>,
  },
  {
    title: "2. User Responsibilities",
    content: (
      <ul className="list-disc space-y-2 pl-6">
        <li>Provide accurate and complete information when required</li>
        <li>Maintain confidentiality of login credentials</li>
        <li>Not misuse, disrupt, or attempt unauthorized access</li>
      </ul>
    ),
  },
  {
    title: "3. Intellectual Property",
    content: <p>All content on this website, including text, graphics, logos, and software, is the property of Exceledge Solutions and is protected by applicable intellectual property laws. You may not reproduce or distribute content without permission.</p>,
  },
  {
    title: "4. Acceptable Use",
    content: <p>You agree not to upload or share content that is unlawful, harmful, defamatory, or infringes on the rights of others. Any misuse may result in termination of access.</p>,
  },
  {
    title: "5. Third-Party Links",
    content: <p>This website may include links to third-party websites for convenience. We do not control or endorse these sites and are not responsible for their content or practices.</p>,
  },
  {
    title: "6. Disclaimer",
    content: <p>The website and its content are provided “as is” without warranties of any kind. We do not guarantee accuracy, completeness, or uninterrupted availability of the website.</p>,
  },
  {
    title: "7. Limitation of Liability",
    content: <p>Exceledge Solutions shall not be liable for any direct, indirect, or consequential damages arising from the use or inability to use this website.</p>,
  },
  {
    title: "8. Changes to Terms",
    content: <p>We reserve the right to modify these Terms at any time. Continued use of the website constitutes acceptance of the updated Terms.</p>,
  },
  {
    title: "9. Privacy",
    content: <p>Your use of this website is also governed by our <Link href="/privacy-policy" className="text-accent underline underline-offset-4">Privacy Policy</Link>. By using this site, you consent to the collection and use of information as outlined therein.</p>,
  },
  {
    title: "10. Governing Law",
    content: <p>These Terms shall be governed by and interpreted in accordance with applicable laws.</p>,
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-0">
      <Breadcrumbs items={[{ label: "Terms of Use" }]} />
      <p className="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-muted">Legal</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Terms of Use</h1>
      <p className="mt-8 text-lg leading-8 text-muted">Welcome to Exceledge Solutions. By accessing or using our website, you agree to comply with and be bound by these Terms of Use. If you do not agree, please do not use this website.</p>

      <div className="mt-12 divide-y divide-line border-y border-line">
        {terms.map(({ title, content }) => (
          <section key={title} className="py-7 text-sm leading-7 text-muted">
            <h2 className="mb-3 text-lg font-semibold leading-6 tracking-tight text-fg">{title}</h2>
            {content}
          </section>
        ))}
      </div>
    </article>
  );
}
