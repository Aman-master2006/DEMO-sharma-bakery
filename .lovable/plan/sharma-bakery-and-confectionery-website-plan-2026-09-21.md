# Sharma Bakery and Confectionery Website Plan

## Goal
Build a premium, mobile-first local bakery website that helps visitors browse products, enquire about cakes, call, WhatsApp, and get directions—without presenting unverified information as fact.

## Pages and shared experience
- Create distinct **Home, Cakes, Menu, About, Gallery, Reviews, and Contact** pages with a shared sticky header, compact mobile menu, footer, and fixed mobile action bar.
- Keep the first screen focused on the bakery name, Dinanagar location, bakery/cake offering, and clear WhatsApp, call, and directions actions.
- Use proper internal navigation and page-specific search/social metadata.

## Visual direction
- Use a warm ivory, deep chocolate, restrained peach/gold, and clean white palette with an elegant display typeface and readable sans-serif body typeface.
- Build a polished modern-Indian-bakery identity with generous spacing, crisp food-led layouts, restrained shadows, small corner radii, and subtle motion.
- Use a refined text-based brand mark until the real logo is supplied.
- Use clearly labelled visual placeholders such as **Upload real product photo**; do not imply that placeholder imagery depicts Sharma Bakery products.

## Conversion flows
- Wire every phone action to **+91 98882 42048** and every WhatsApp action to a pre-filled, context-specific enquiry message.
- Add directions links generated from the verified business name and address rather than inventing a Maps profile URL.
- Add a four-action quick bar and mobile bottom bar: **Call, WhatsApp, Cakes, Directions**.
- Build the custom cake form with all requested fields, validation, clear consent/expectation copy, and a final WhatsApp handoff. The confirmation will state that availability, pricing, and details still require bakery confirmation.
- Treat inspiration-image selection as a prompt to attach the image manually in WhatsApp, because a browser cannot transfer a selected local image into WhatsApp automatically.

## Product and content structure
- Create a single editable content source for contact details, services, hours placeholder, rating, categories, products, gallery entries, and navigation.
- Include only **Fondant Cake — Strawberry Flavour** as a confirmed product example, without a price or unsupported size/customisation claims.
- Add inactive/editable catalogue suggestions for unverified products; they will not appear as available menu items until activated.
- Support product image, name, category, description, optional price, availability, customisation note, and WhatsApp CTA.
- Build menu filters and category links for Cakes, Pastries, Bakery, Snacks, and Beverages while ensuring empty/unconfirmed categories are honest and useful.

## Page content
- **Home:** visual opening, quick actions, featured categories, celebration-cake focus, responsible benefit statements, supplied aggregate rating, local visit section, and focused calls to action.
- **Cakes:** cake catalogue, confirmed example, custom-cake guidance, and complete WhatsApp enquiry form.
- **Menu:** filterable editable catalogue with no fabricated prices, bestseller labels, or availability.
- **About:** concise introduction using only the supplied business type, location, and services.
- **Gallery:** accessible category filters and lightbox using clearly labelled image placeholders until real photos are supplied.
- **Reviews:** display **4.5/5 from 67 reviews** as supplied, no invented customer quotes, and an editable placeholder for the future Google Business profile link.
- **Contact:** verified phone, WhatsApp, address, listed services, directions, and **Hours: [CONFIRM CURRENT OPENING HOURS]**. The 9:30 PM listing note will not be expanded into an unverified schedule.

## Quality, accessibility, and search
- Add keyboard-friendly navigation, visible focus states, semantic headings, labelled fields, inline errors, touch-friendly controls, and reduced-motion support.
- Lazy-load below-the-fold visuals, reserve image space to prevent layout shift, and keep scripting lightweight.
- Add unique titles, descriptions, Open Graph tags, canonical paths, and natural local-search copy for every page.
- Add Bakery/LocalBusiness structured data using only verified details; omit unsupported opening hours, prices, images, and profile URLs.
- Verify desktop and mobile rendering, navigation, filters, lightbox, form validation, WhatsApp messages, calls, and directions before completion.

## Technical notes
- Build with the existing TanStack Start and Tailwind setup using reusable shared UI and semantic design tokens.
- Keep this version frontend-only: no database or online file storage is required for the selected WhatsApp enquiry flow.
- Preserve editable placeholders exactly where owner confirmation or real assets are still required.
