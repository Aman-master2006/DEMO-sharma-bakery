import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CakeSlice,
  Camera,
  Check,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  business,
  directionsHref,
  generalWhatsApp,
  productWhatsApp,
  type Product,
} from "@/lib/bakery-data";

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <header className="border-b border-border bg-secondary/40 px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] text-foreground sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{text}</p>
      </div>
    </header>
  );
}

export function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`photo-placeholder relative grid overflow-hidden ${className}`} role="img" aria-label={`${label}. Placeholder awaiting a real business photo.`}>
      <div className="absolute inset-0 placeholder-pattern" />
      <div className="relative m-auto flex max-w-[15rem] flex-col items-center gap-3 px-5 text-center">
        <span className="grid size-12 place-items-center rounded-full bg-background/85 text-primary shadow-sm"><Camera aria-hidden="true" /></span>
        <span className="text-xs font-bold uppercase text-foreground">Upload real product photo</span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">{title}</h2>
      {text ? <p className="mt-4 leading-7 text-muted-foreground">{text}</p> : null}
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden border border-border bg-card shadow-soft">
      {product.image ? (
        <img src={product.image} alt={`${product.name}${product.flavour ? ` — ${product.flavour}` : ""}`} className="aspect-[4/3] w-full object-cover" loading="lazy" width={1024} height={768} />
      ) : (
        <PhotoPlaceholder label={product.name} className="aspect-[4/3]" />
      )}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase text-accent-foreground">{product.category}</p>
            <h3 className="mt-1 font-display text-2xl text-card-foreground">{product.name}</h3>
          </div>
          <span className="shrink-0 border border-success/30 bg-success/10 px-2 py-1 text-xs font-semibold text-success">Confirmed example</span>
        </div>
        {product.flavour ? <p className="mt-3 font-medium text-foreground">{product.flavour}</p> : null}
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
        <div className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
          <p>Price: <strong className="text-foreground">Confirm on enquiry</strong></p>
          <p className="mt-1">Customisation: <strong className="text-foreground">Confirm on enquiry</strong></p>
        </div>
        <Button asChild className="mt-5 h-11 w-full">
          <a href={productWhatsApp(`${product.name} — ${product.flavour ?? ""}`)} target="_blank" rel="noreferrer">
            <MessageCircle /> Enquire on WhatsApp
          </a>
        </Button>
      </div>
    </article>
  );
}

export function QuickActions() {
  const actions = [
    { label: "Call", detail: business.phoneDisplay, icon: Phone, href: business.phoneHref },
    { label: "WhatsApp", detail: "Start an enquiry", icon: MessageCircle, href: generalWhatsApp },
    { label: "Custom Cake", detail: "Tell us your occasion", icon: CakeSlice, to: "/cakes" as const },
    { label: "Directions", detail: "Main Bus Stand, Dinanagar", icon: MapPin, href: directionsHref },
  ];
  return (
    <section aria-label="Quick actions" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {actions.map((item, index) => {
          const content = <><item.icon className="size-5 text-primary" aria-hidden="true" /><span className="min-w-0"><strong className="block text-sm text-foreground">{item.label}</strong><span className="mt-0.5 block truncate text-xs text-muted-foreground">{item.detail}</span></span></>;
          const cls = `flex min-w-0 items-center gap-3 border-border px-4 py-5 transition-colors hover:bg-secondary/50 ${index % 2 === 0 ? "border-r" : ""} ${index < 2 ? "border-b lg:border-b-0" : ""} ${index === 1 ? "lg:border-r" : ""}`;
          return "to" in item ? <Link key={item.label} to={item.to} className={cls}>{content}</Link> : <a key={item.label} href={item.href} target={item.label === "Call" ? undefined : "_blank"} rel="noreferrer" className={cls}>{content}</a>;
        })}
      </div>
    </section>
  );
}

export function RatingBlock() {
  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-6xl text-foreground">{business.rating}</span>
      <div><div className="flex gap-1 text-rating" aria-label="4.5 out of 5 stars">{[0,1,2,3,4].map((n) => <Star key={n} className="size-4 fill-current" aria-hidden="true" />)}</div><p className="mt-1 text-sm text-muted-foreground">From {business.reviewCount} Google reviews</p></div>
    </div>
  );
}

export function VisitBand() {
  return (
    <section className="bg-primary px-5 py-14 text-primary-foreground sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div><p className="text-xs font-bold uppercase text-primary-foreground/70">Find us in Dinanagar</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">Visit Sharma Bakery and Confectionery</h2><p className="mt-4 max-w-2xl text-primary-foreground/75">{business.address} · {business.services.join(" · ")}</p></div>
        <div className="flex flex-wrap gap-3"><Button asChild variant="secondary" size="lg"><a href={business.phoneHref}><Phone />Call now</a></Button><Button asChild className="border border-primary-foreground/30 bg-transparent shadow-none hover:bg-primary-foreground/10" size="lg"><a href={directionsHref} target="_blank" rel="noreferrer"><MapPin />Get directions</a></Button></div>
      </div>
    </section>
  );
}

export function HonestBenefits() {
  const items = [
    [CakeSlice, "Celebration cakes", "Share your occasion and ask about cake options directly."],
    [MessageCircle, "Convenient ordering", "Call or WhatsApp the bakery to discuss availability and pricing."],
    [MapPin, "Easy to find", "Located at Main Bus Stand in Dinanagar."],
    [Check, "Flexible service", "Dine-in, takeaway and delivery are currently listed."],
  ] as const;
  return <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{items.map(([Icon,title,text]) => <div key={title} className="bg-card p-6"><Icon className="size-6 text-primary" /><h3 className="mt-5 font-display text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div>;
}

export function ArrowLink({ to, children }: { to: "/cakes" | "/menu" | "/gallery" | "/reviews" | "/contact"; children: React.ReactNode }) {
  return <Link to={to} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3">{children}<ArrowRight className="size-4" /></Link>;
}
