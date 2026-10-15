# Excel Edge Solutions: Next.js site

Next.js 15 (App Router), React 19, TypeScript, Tailwind v4, Motion.

## Run

    npm install
    cp .env.example .env.local   # fill in values
    npm run dev

## Before launch (TODO)

- `lib/site.ts`: confirm email, add the real phone number.
- Replace `<Shot>` placeholders with real product screenshots (`next/image`).
- Add Tungsten's official reversed (white) logo and follow their brand guidelines; dark mode currently shows the navy logo on a white chip.
- Replace legal placeholder pages.
- Set `RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO` and `NEXT_PUBLIC_CAL_URL`.
- Redirects for old WordPress URLs live in `next.config.ts`.
- Deploy on Vercel; submit `/sitemap.xml` to Search Console.

## Not included yet

shadcn/ui CLI components (run `npx shadcn@latest init` when needed), MDX content, Cloudflare Turnstile, proof/case-study section, product FAQs, Playwright tests.
