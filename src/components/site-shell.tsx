import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CakeSlice, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, directionsHref, generalWhatsApp, navItems } from "@/lib/bakery-data";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-background focus:p-3">Skip to content</a>
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 shrink-0 place-items-center bg-primary text-primary-foreground"><CakeSlice className="size-5" /></span>
          <span className="min-w-0"><strong className="block truncate font-display text-lg leading-none">Sharma Bakery</strong><span className="mt-1 block truncate text-[10px] font-bold uppercase text-muted-foreground">Confectionery · Dinanagar</span></span>
        </Link>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">{navItems.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground font-bold" }}>{item.label}</Link>)}</nav>
        <div className="hidden items-center gap-2 md:flex xl:ml-3"><Button asChild variant="outline"><a href={business.phoneHref}><Phone />Call</a></Button><Button asChild><a href={generalWhatsApp} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp</a></Button></div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open ? <nav className="border-t border-border bg-background p-4 md:hidden" aria-label="Mobile navigation"><div className="grid gap-1">{navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="px-3 py-3 text-sm font-medium hover:bg-secondary" activeProps={{ className: "bg-secondary text-primary" }}>{item.label}</Link>)}</div></nav> : null}
    </header>
    <main id="main-content">{children}</main>
    <footer className="border-t border-border bg-footer px-5 pb-28 pt-14 text-footer-foreground sm:px-8 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div><CakeSlice className="size-7 text-footer-accent" /><h2 className="mt-4 font-display text-2xl">Sharma Bakery and Confectionery</h2><p className="mt-3 max-w-sm text-sm leading-6 text-footer-muted">A bakery and cake shop at Main Bus Stand, Dinanagar. Call or WhatsApp to confirm products, prices and availability.</p></div>
        <div><h3 className="text-xs font-bold uppercase text-footer-accent">Visit or call</h3><p className="mt-4 text-sm leading-6 text-footer-muted">{business.address}<br />{business.phoneDisplay}<br />{business.hours}</p></div>
        <div><h3 className="text-xs font-bold uppercase text-footer-accent">Explore</h3><div className="mt-4 grid grid-cols-2 gap-2">{navItems.map((item) => <Link key={item.to} to={item.to} className="text-sm text-footer-muted hover:text-footer-foreground">{item.label}</Link>)}</div></div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-footer-border pt-6 text-xs text-footer-muted">© 2026 Sharma Bakery and Confectionery. All rights reserved.</div>
    </footer>
    <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-border bg-background/98 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_var(--mobile-bar-shadow)] md:hidden" aria-label="Quick contact">
      <a href={business.phoneHref} className="mobile-action"><Phone />Call</a><a href={generalWhatsApp} target="_blank" rel="noreferrer" className="mobile-action"><MessageCircle />WhatsApp</a><Link to="/cakes" className="mobile-action"><CakeSlice />Cakes</Link><a href={directionsHref} target="_blank" rel="noreferrer" className="mobile-action"><MapPin />Directions</a>
    </nav>
  </div>;
}
