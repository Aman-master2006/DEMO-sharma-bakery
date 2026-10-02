import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { business, whatsappHref } from "@/lib/bakery-data";

type FormFields = "name" | "phone" | "cakeType" | "occasion" | "date";
const fields: Array<{ key: FormFields; label: string; type?: string; placeholder: string }> = [
  { key: "name", label: "Customer name", placeholder: "Your name" },
  { key: "phone", label: "Phone number", type: "tel", placeholder: "+91" },
  { key: "cakeType", label: "Cake type", placeholder: "e.g. birthday or custom cake" },
  { key: "occasion", label: "Occasion", placeholder: "Tell us the occasion" },
  { key: "date", label: "Preferred date", type: "date", placeholder: "Preferred date" },
];

export function CakeEnquiryForm() {
  const [errors, setErrors] = useState<Partial<Record<FormFields, string>>>({});
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const required = Object.fromEntries(fields.map((field) => [field.key, String(form.get(field.key) ?? "").trim()])) as Record<FormFields, string>;
    const nextErrors: Partial<Record<FormFields, string>> = {};
    fields.forEach((field) => { if (!required[field.key]) nextErrors[field.key] = `${field.label} is required.`; });
    if (required.phone && !/^[+\d\s()-]{7,20}$/.test(required.phone)) nextErrors.phone = "Enter a valid phone number.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    const message = [
      `Hello ${business.name}, I would like to enquire about a cake.`,
      `Name: ${required.name}`,
      `Phone: ${required.phone}`,
      `WhatsApp: ${String(form.get("whatsapp") ?? "Not provided").slice(0, 30)}`,
      `Cake type: ${required.cakeType}`,
      `Preferred flavour: ${String(form.get("flavour") ?? "Not specified").slice(0, 80)}`,
      `Approximate size: ${String(form.get("size") ?? "Not specified").slice(0, 80)}`,
      `Occasion: ${required.occasion}`,
      `Date: ${required.date}`,
      `Pickup time: ${String(form.get("time") ?? "Not specified").slice(0, 40)}`,
      `Design requirements: ${String(form.get("message") ?? "None provided").slice(0, 500)}`,
      "Please share the available options, sizes and prices. I understand the order is not confirmed until the bakery replies.",
    ].join("\n");
    setSent(true);
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }
  return <form onSubmit={submit} noValidate className="border border-border bg-card p-5 shadow-soft sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2">{fields.map((field) => <label key={field.key} className="block text-sm font-semibold text-foreground">{field.label}<Input className="mt-2 h-11" name={field.key} type={field.type} placeholder={field.placeholder} maxLength={field.key === "name" ? 100 : 80} aria-invalid={Boolean(errors[field.key])} />{errors[field.key] ? <span className="mt-1 block text-xs text-destructive">{errors[field.key]}</span> : null}</label>)}
      <label className="block text-sm font-semibold">WhatsApp number <span className="font-normal text-muted-foreground">(optional)</span><Input className="mt-2 h-11" name="whatsapp" type="tel" placeholder="If different from phone" maxLength={30} /></label>
      <label className="block text-sm font-semibold">Preferred flavour <span className="font-normal text-muted-foreground">(optional)</span><Input className="mt-2 h-11" name="flavour" placeholder="Ask what is available" maxLength={80} /></label>
      <label className="block text-sm font-semibold">Approximate size <span className="font-normal text-muted-foreground">(optional)</span><Input className="mt-2 h-11" name="size" placeholder="People to serve or preferred size" maxLength={80} /></label>
      <label className="block text-sm font-semibold">Preferred pickup time <span className="font-normal text-muted-foreground">(optional)</span><Input className="mt-2 h-11" name="time" type="time" /></label>
      <label className="sm:col-span-2 block text-sm font-semibold">Message / design requirements <span className="font-normal text-muted-foreground">(optional)</span><Textarea className="mt-2 min-h-28" name="message" maxLength={500} placeholder="Colours, theme or other details" /></label>
      <label className="sm:col-span-2 block text-sm font-semibold">Inspiration image <span className="font-normal text-muted-foreground">(optional)</span><Input className="mt-2 h-auto py-2" name="image" type="file" accept="image/png,image/jpeg,image/webp" /><span className="mt-2 block text-xs font-normal leading-5 text-muted-foreground">For privacy, the file stays on your device. Attach it manually in WhatsApp after the message opens.</span></label>
    </div>
    <div className="mt-6"><Button type="submit" size="lg" className="w-full sm:w-auto"><Send />Send cake enquiry</Button><p className="mt-3 max-w-xl text-xs leading-5 text-muted-foreground">This sends an enquiry, not a confirmed order. The bakery will confirm availability, pricing and final details.</p></div>
    {sent ? <div role="status" className="mt-5 border border-success/30 bg-success/10 p-4 text-sm text-success"><MessageCircle className="mr-2 inline size-4" />Your enquiry was prepared in WhatsApp. Please send it there and attach your inspiration image if needed.</div> : null}
  </form>;
}
