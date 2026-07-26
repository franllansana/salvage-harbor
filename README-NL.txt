SALVAGE HARBOR V2 — INSTALLATIE

1. Kopieer de mappen app, components, data en public naar de hoofdmap van je bestaande Next.js-project.
2. Vervang je bestaande next.config.ts en tsconfig.json alleen wanneer je huidige bestanden geen eigen noodzakelijke instellingen bevatten.
3. Zorg dat je bestaande video public/salvage-harbor-intro.mp4 blijft staan.
4. Controleer dat je package.json scripts minimaal "dev": "next dev" en "build": "next build" bevatten.
5. Deploy opnieuw naar Netlify.
6. Zet in Netlify bij Forms de formulierdetectie aan en test seller-intake en contact-form.

BELANGRIJK
- De website gebruikt echte Next.js-routes. Bijvoorbeeld:
  /marketplace/gyms
  /marketplace/restaurants
  /listing/technogym-treadmill-package
- Alle producten zijn duidelijk gemarkeerd als voorbeeldlistings.
- De Unsplash-afbeeldingen zijn demo-assets. Vervang ze later per echte listing door foto's van de verkoper.
