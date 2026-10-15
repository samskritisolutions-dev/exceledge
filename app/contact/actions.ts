"use server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2), email: z.string().email(),
  company: z.string().optional(),
  product: z.enum(["Power PDF", "InvoiceAgility+", "TotalAgility"]),
  message: z.string().min(10),
});
export type State = { ok: boolean; error?: string } | null;

export async function sendContact(_: State, fd: FormData): Promise<State> {
  if (fd.get("website")) return { ok: true }; // honeypot
  const parsed = schema.safeParse(Object.fromEntries(fd));
  if (!parsed.success) return { ok: false, error: "Please check your details and try again." };
  const d = parsed.data;
  const key = process.env.RESEND_API_KEY;
  if (!key || !process.env.CONTACT_FROM || !process.env.CONTACT_TO) return { ok: false, error: "Email is not configured yet. Please email us directly." };
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM, to: [process.env.CONTACT_TO], reply_to: d.email,
      subject: `New ${d.product} demo request from ${d.name}`,
      text: `${d.name} (${d.email})\nCompany: ${d.company ?? ""}\nProduct: ${d.product}\n\n${d.message}`,
    }),
  });
  return res.ok ? { ok: true } : { ok: false, error: "Something went wrong. Please email us directly." };
}
