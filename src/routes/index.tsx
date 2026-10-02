import { createFileRoute, Link } from "@tanstack/react-router";
import { CakeSlice, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLink, HonestBenefits, ProductCard, QuickActions, RatingBlock, SectionHeading, VisitBand } from "@/components/bakery-ui";
import { business, confirmedCake, directionsHref, featuredCategories, generalWhatsApp } from "@/lib/bakery-data";
import heroBakery from "@/assets/hero-bakery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharma Bakery and Confectionery | Bakery in Dinanagar" },
      { name: "description", content: "Browse cakes and bakery products, enquire on WhatsApp, call, or get directions to Sharma Bakery at Main Bus Stand, Dinanagar." },
      { property: "og:title", content: "Sharma Bakery and Confectionery — Dinanagar" },
      { property: "og:description", content: "Cakes, bakery enquiries, takeaway, delivery and directions in Dinanagar." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Bakery", name: business.name, telephone: business.phoneDisplay, address: { "@type": "PostalAddress", streetAddress: "Main Bus Stand", addressLocality: "Dinanagar", addressRegion: "Punjab", postalCode: "143531", addressCountry: "IN" }, priceRange: "₹200–₹400 per person", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: 67 } }) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="px-5 py-8 sm:px-8 sm:py-12 lg:py-16">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative z-10 py-6">
            <div className="inline-flex items-center gap-2 border border-border bg-card px-3 py-2 text-xs font-bold uppercase text-muted-foreground"><MapPin className="size-4 text-primary" />Main Bus Stand · Dinanagar</div>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.98] text-foreground sm:text-7xl lg:text-8xl">Freshly baked moments, made for every celebration.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Sharma Bakery and Confectionery is a bakery and cake shop in Dinanagar. Browse what is confirmed, or enquire about custom and celebration cakes by phone or WhatsApp.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><a href={generalWhatsApp} target="_blank" rel="noreferrer"><MessageCircle />Enquire on WhatsApp</a></Button><Button asChild variant="outline" size="lg"><a href={business.phoneHref}><Phone />Call the bakery</a></Button><Button asChild variant="ghost" size="lg"><a href={directionsHref} target="_blank" rel="noreferrer"><MapPin />Directions</a></Button></div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Star className="size-4 fill-rating text-rating" />4.5/5 from 67 reviews</span><span>{business.services.join(" · ")}</span></div>
          </div>
          <div className="relative"><img src={heroBakery} alt="Fresh cakes, pastries and baked goods on a warm bakery display counter" className="aspect-[4/5] min-h-[28rem] w-full border border-border object-cover shadow-soft lg:aspect-[5/6]" width={1408} height={1024} fetchPriority="high" /><div className="absolute -bottom-5 left-4 border border-border bg-card p-4 shadow-soft sm:left-[-1.5rem]"><p className="text-xs font-bold uppercase text-primary">Cake enquiries</p><p className="mt-1 font-display text-xl">Tell us the occasion</p></div></div>
        </div>
      </section>
      <QuickActions />
      <section className="section-space"><div className="page-wrap"><SectionHeading eyebrow="Browse by occasion" title="Something for every kind of moment" text="Explore the bakery’s editable catalogue structure. Product availability and pricing are confirmed directly by the bakery." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{featuredCategories.map((category) => <Link key={category.name} to={category.to} className="group overflow-hidden border border-border bg-card transition hover:-translate-y-1 hover:shadow-soft"><div className="overflow-hidden"><img src={category.image} alt={category.name} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" width={1024} height={768} /></div><div className="p-6"><h3 className="font-display text-2xl">{category.name}</h3><p className="mt-2 text-sm text-muted-foreground">{category.note}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore <CakeSlice className="size-4 transition group-hover:rotate-12" /></span></div></Link>)}</div></div></section>
      <section className="section-space bg-secondary/45"><div className="page-wrap grid gap-10 lg:grid-cols-2 lg:items-center"><div><SectionHeading eyebrow="Cake enquiries" title="Make every celebration sweeter" text="Share your occasion, preferred date and design ideas. The bakery will reply with available options, sizes and prices." /><Button asChild className="mt-7" size="lg"><Link to="/cakes"><CakeSlice />Request a custom cake</Link></Button></div><ProductCard product={confirmedCake} /></div></section>
      <section className="section-space"><div className="page-wrap"><SectionHeading eyebrow="A straightforward local experience" title="Easy to browse, easy to enquire" /><div className="mt-10"><HonestBenefits /></div></div></section>
      <section className="section-space bg-card"><div className="page-wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><RatingBlock /><div><SectionHeading eyebrow="Public Google rating" title="A rating you can verify" text="The supplied business listing shows 4.5 out of 5 from 67 reviews. Individual customer quotes are not reproduced without verified wording and attribution." /><div className="mt-6"><ArrowLink to="/reviews">View review information</ArrowLink></div></div></div></section>
      <VisitBand />
    </>
  );
}
