"use client";
import { useActionState } from "react";
import { sendContact, type State } from "@/app/contact/actions";

const field = "mt-2 w-full rounded-lg border border-line bg-transparent px-4 py-3 text-sm";

export function ContactForm() {
  const [state, action, pending] = useActionState<State, FormData>(sendContact, null);
  if (state?.ok) return <p className="rounded-xl border border-line p-6">Thank you. We will get back to you shortly.</p>;
  return (
    <form action={action} className="space-y-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <label className="block text-sm">Name<input name="name" required className={field} /></label>
      <label className="block text-sm">Work email<input name="email" type="email" required className={field} /></label>
      <label className="block text-sm">Company<input name="company" className={field} /></label>
      <label className="block text-sm">
        Product
        <select name="product" required defaultValue="" className={field}>
          <option value="" disabled>Select a product</option>
          <option value="Power PDF">Power PDF</option>
          <option value="InvoiceAgility+">InvoiceAgility+</option>
          <option value="TotalAgility">TotalAgility</option>
        </select>
      </label>
      <label className="block text-sm">What would you like to see in the demo?<textarea name="message" required rows={5} className={field} /></label>
      {state?.error && <p role="alert" className="text-sm text-red-600">{state.error}</p>}
      <button disabled={pending} className="h-11 rounded-full bg-fg px-6 text-sm font-medium text-bg disabled:opacity-60">
        {pending ? "Sending…" : "Request a demo"}
      </button>
    </form>
  );
}
