import cakeFondantStrawberry from "@/assets/cake-fondant-strawberry.jpg";
import catBakery from "@/assets/cat-bakery.jpg";
import catBirthday from "@/assets/cat-birthday.jpg";
import catCelebration from "@/assets/cat-celebration.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import catPastries from "@/assets/cat-pastries.jpg";
import catSavoury from "@/assets/cat-savoury.jpg";

export const business = {
  name: "Sharma Bakery and Confectionery",
  shortName: "Sharma Bakery",
  phoneDisplay: "+91 98882 42048",
  phoneHref: "tel:+919888242048",
  whatsappNumber: "919888242048",
  address: "Main Bus Stand, Dinanagar, Punjab 143531",
  services: ["Dine-in", "Takeaway", "Delivery"],
  rating: "4.5",
  reviewCount: 67,
  hours: "[CONFIRM CURRENT OPENING HOURS]",
};

export type ProductCategory = "Cakes" | "Pastries" | "Bakery" | "Snacks" | "Beverages";

export type Product = {
  name: string;
  category: ProductCategory;
  description: string;
  flavour?: string;
  price?: string;
  availability: "confirmed" | "unconfirmed";
  customisation?: string;
  image?: string;
};

export const confirmedCake: Product = {
  name: "Fondant Cake",
  category: "Cakes",
  flavour: "Strawberry Flavour",
  description: "A confirmed cake example from the information supplied by the business.",
  availability: "confirmed",
  image: cakeFondantStrawberry,
};

export const products: Product[] = [confirmedCake];

export const menuCategories: Array<"All" | ProductCategory> = [
  "All",
  "Cakes",
  "Pastries",
  "Bakery",
  "Snacks",
  "Beverages",
];

export const featuredCategories = [
  { name: "Birthday Cakes", to: "/cakes" as const, note: "Enquire for celebration options", image: catBirthday },
  { name: "Custom Cakes", to: "/cakes" as const, note: "Share your occasion and design idea", image: catCustom },
  { name: "Pastries & Desserts", to: "/menu" as const, note: "Catalogue awaiting confirmation", image: catPastries },
  { name: "Bakery Favourites", to: "/menu" as const, note: "Catalogue awaiting confirmation", image: catBakery },
  { name: "Savoury Bites", to: "/menu" as const, note: "Catalogue awaiting confirmation", image: catSavoury },
  { name: "Celebration Orders", to: "/cakes" as const, note: "Start a cake enquiry", image: catCelebration },
];

export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${business.name}, ${business.address}`)}`;

export function whatsappHref(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const generalWhatsApp = whatsappHref(
  `Hello ${business.name}, I would like to make an enquiry. Please share the available options and prices.`,
);

export function productWhatsApp(product: string) {
  return whatsappHref(
    `Hello ${business.name}, I would like to enquire about ${product}. Please share the available options and price.`,
  );
}

export const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Cakes", to: "/cakes" as const },
  { label: "Menu", to: "/menu" as const },
  { label: "About", to: "/about" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Reviews", to: "/reviews" as const },
  { label: "Contact", to: "/contact" as const },
];
