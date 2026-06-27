const listings = [
  {
    title: "Cruise Casino Roulette Equipment",
    category: "Casino & Entertainment",
    origin: "Antalya, Turkey",
    seller: "Verified cruise liquidator",
    price: "From €1,450 each",
    fee: "10% success commission",
    badge: "Cruise casino lot",
    quantity: "8 roulette tables available",
    buyerUse:
      "Perfect for private clubs, casino concepts, event venues, luxury game rooms and hospitality entertainment spaces.",
    image:
      "https://unsplash.com/photos/mD1V-eS1Wb4/download?force=true&w=1200",
    sourceName: "Photo by Derek Lynn on Unsplash",
    sourceUrl:
      "https://unsplash.com/photos/brown-and-silver-round-analog-clock-mD1V-eS1Wb4",
  },
  {
    title: "Cruise Deck Lounge Chair Collection",
    category: "Seating & Furniture",
    origin: "Izmir, Turkey",
    seller: "Verified shipyard broker",
    price: "€145 per chair",
    fee: "10% success commission",
    badge: "Deck seating lot",
    quantity: "180 chairs available",
    buyerUse:
      "Ideal for hotels, beach clubs, restaurants, glamping lounges and event rental companies.",
    image:
      "https://unsplash.com/photos/hPat7NU-awg/download?force=true&w=1200",
    sourceName: "Photo by Young Shih on Unsplash",
    sourceUrl:
      "https://unsplash.com/photos/lounge-chairs-on-the-deck-of-a-cruise-ship-hPat7NU-awg",
  },
  {
    title: "Cruise Theater & Auditorium Seating",
    category: "Entertainment Interior",
    origin: "Genoa, Italy",
    seller: "Verified cruise inventory seller",
    price: "From €85 per seat",
    fee: "10% success commission",
    badge: "Cruise theater lot",
    quantity: "320 seats available",
    buyerUse:
      "Strong fit for cinemas, universities, event halls, private theaters and creative studios.",
    image:
      "https://unsplash.com/photos/GgfGjJdYp-M/download?force=true&w=1200",
    sourceName: "Photo by Steve Davison on Unsplash",
    sourceUrl:
      "https://unsplash.com/photos/an-empty-auditorium-with-a-red-curtain-GgfGjJdYp-M",
  },
  {
    title: "Cruise Dining Chair & Table Lot",
    category: "Hospitality Inventory",
    origin: "Hamburg, Germany",
    seller: "Verified marine reseller",
    price: "From €65 per item",
    fee: "10% success commission",
    badge: "Dining room lot",
    quantity: "240 chairs + 60 tables",
    buyerUse:
      "Made for restaurants, hotels, cafés, wedding venues and hospitality refurbishments.",
    image:
      "https://unsplash.com/photos/9RIytPveCXA/download?force=true&w=1200",
    sourceName: "Photo by Oliver Hayes on Unsplash",
    sourceUrl:
      "https://unsplash.com/photos/a-dining-area-on-a-cruise-ship-with-chairs-and-tables-9RIytPveCXA",
  },
  {
    title: "Royal Yacht Bar Stools & Counter",
    category: "Bars & Nightlife",
    origin: "Edinburgh, United Kingdom",
    seller: "Verified hospitality liquidator",
    price: "From €90 per item",
    fee: "10% success commission",
    badge: "Ship bar package",
    quantity: "42 stools + bar counter",
    buyerUse:
      "Ready for cocktail bars, rooftop venues, beach clubs, music venues and event builders.",
    image:
      "https://unsplash.com/photos/ftjm6I6eNG0/download?force=true&w=1200",
    sourceName: "Photo by Andrew D on Unsplash",
    sourceUrl:
      "https://unsplash.com/photos/a-bar-with-a-wooden-counter-and-a-red-stool-ftjm6I6eNG0",
  },
  {
    title: "Ship Cabin Interior & Wooden Units",
    category: "Cabin Interior",
    origin: "Marseille, France",
    seller: "Verified interior broker",
    price: "From €120 per set",
    fee: "10% success commission",
    badge: "Ship cabin lot",
    quantity: "80 cabin sets available",
    buyerUse:
      "Useful for glamping pods, boutique hotels, hostels, tiny homes and themed accommodation.",
    image:
      "https://unsplash.com/photos/MvlePq1ZQvU/download?force=true&w=1200",
    sourceName: "Photo by Georg Eiermann on Unsplash",
    sourceUrl: "https://unsplash.com/photos/ship-interior-MvlePq1ZQvU",
  },
  {
    title: "Royal Yacht Lounge Furniture",
    category: "Marine Furniture",
    origin: "Edinburgh, United Kingdom",
    seller: "Verified interior broker",
    price: "From €2,400 per set",
    fee: "10% success commission",
    badge: "Royal yacht interior",
    quantity: "12 lounge sets available",
    buyerUse:
      "Popular for boutique hotels, members clubs, collectors and luxury maritime interior projects.",
    image:
      "https://unsplash.com/photos/UZuUeZqBE1E/download?force=true&w=1200",
    sourceName: "Photo by Andrew Dawes on Unsplash",
    sourceUrl:
      "https://unsplash.com/photos/a-living-room-filled-with-furniture-and-wooden-walls-UZuUeZqBE1E",
  },
  {
    title: "Spirit of Discovery Atrium Décor",
    category: "Luxury Cruise Interior",
    origin: "Dover, United Kingdom",
    seller: "Verified cruise interior seller",
    price: "On request",
    fee: "10% success commission",
    badge: "Cruise atrium lot",
    quantity: "6 statement pieces",
    buyerUse:
      "Designed for hotel lobbies, restaurants, event venues and luxury interior designers.",
    image:
      "https://unsplash.com/photos/SrubnYBBQGw/download?force=true&w=1200",
    sourceName: "Photo by Becky Fantham on Unsplash",
    sourceUrl: "https://unsplash.com/photos/empty-stair-SrubnYBBQGw",
  },
];

const categories = [
  {
    title: "Casino & Roulette Equipment",
    text: "Roulette equipment, poker tables, casino seating and entertainment pieces from cruise ships.",
  },
  {
    title: "Cruise Seating Lots",
    text: "Hundreds of deck chairs, lounge seats, theater seats, restaurant chairs and bar stools.",
  },
  {
    title: "Hospitality Inventory",
    text: "Cruise dining furniture, buffet counters, galley equipment, bar packages and horeca-ready lots.",
  },
  {
    title: "Cabin Furniture",
    text: "Bedside units, desks, mirrors, wardrobes and compact furniture from ship cabins.",
  },
  {
    title: "Luxury Cruise Interior",
    text: "Atrium décor, lounge pieces, wall panels, art, mirrors, carpets and statement design pieces.",
  },
  {
    title: "Royal Yacht & Marine Objects",
    text: "Royal yacht furniture, ship bars, brass fixtures, lamps, signs, handles and collectible nautical objects.",
  },
];

const steps = [
  {
    title: "Real ship and cruise inventory",
    text: "The marketplace focuses on items from cruise ships, ships, ferries, yachts and verified maritime interiors — not random furniture from houses.",
  },
  {
    title: "Bulk inventory from cruise ships",
    text: "Cruise ships often contain hundreds of matching chairs, tables, bar stools, theater seats and hospitality items. That makes them perfect for B2B buyers.",
  },
  {
    title: "Verified sellers only",
    text: "Shipyards, brokers, cruise liquidators and professional maritime sellers must be manually approved before listing.",
  },
  {
    title: "Secure payment protection",
    text: "Payments are processed securely through Salvage Harbor. Funds are only released to the seller once the buyer has received and approved the corresponding items.",
  },
  {
    title: "10% commission model",
    text: "Sellers can list inventory, and Salvage Harbor earns a 10% success fee when a deal is completed.",
  },
];

const buyerTypes = [
  "Hotels",
  "Restaurants",
  "Glamping parks",
  "Event builders",
  "Casino concepts",
  "Beach clubs",
  "Interior designers",
  "Collectors",
];

const css = `
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}

.page {
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(180deg, #07111f 0%, #102338 30%, #d9c7a8 58%, #f4efe7 76%, #f4efe7 100%);
  color: #101827;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
}

.hero {
  min-height: 100vh;
  padding: 28px;
  color: white;
  background:
    radial-gradient(circle at 82% 16%, rgba(244,203,117,0.35), transparent 32%),
    radial-gradient(circle at 12% 72%, rgba(58,88,115,0.45), transparent 34%),
    linear-gradient(145deg, #06101d 0%, #102338 48%, #27425d 100%);
}

.nav {
  max-width: 1220px;
  margin: 0 auto;
  padding: 16px 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border: 1px solid rgba(255,255,255,0.16);
  background: linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.06));
  backdrop-filter: blur(18px);
  box-shadow: 0 24px 80px rgba(0,0,0,0.24);
}

.logoWrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logoMark {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f5d37d, #c8953d);
  color: #07111f;
  font-weight: 950;
  font-size: 18px;
  box-shadow: 0 12px 34px rgba(216,168,79,0.34);
  flex: 0 0 auto;
}

.logoText {
  font-size: 23px;
  font-weight: 950;
  letter-spacing: -0.06em;
  white-space: nowrap;
}

.navLinks {
  display: flex;
  gap: 28px;
  color: rgba(255,255,255,0.74);
  font-size: 14px;
  font-weight: 650;
}

.navLink {
  color: inherit;
  text-decoration: none;
}

.navButton {
  border: 0;
  border-radius: 999px;
  padding: 13px 20px;
  background: linear-gradient(135deg, #ffffff, #eadbbf);
  color: #07111f;
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
}

.heroGrid {
  max-width: 1220px;
  margin: 88px auto 0;
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  gap: 60px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 14px;
  border-radius: 999px;
  background: rgba(216,168,79,0.16);
  color: #f4cb75;
  font-size: 12px;
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f4cb75;
  box-shadow: 0 0 18px #f4cb75;
  flex: 0 0 auto;
}

.h1 {
  max-width: 850px;
  margin: 0;
  font-size: 78px;
  line-height: 0.92;
  letter-spacing: -0.075em;
  font-weight: 950;
}

.heroText {
  max-width: 720px;
  margin: 28px 0 0;
  color: rgba(255,255,255,0.76);
  font-size: 19px;
  line-height: 1.75;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 36px;
}

.primaryButton {
  border: 0;
  border-radius: 999px;
  padding: 16px 25px;
  background: linear-gradient(135deg, #f7d783 0%, #d8a84f 55%, #b77a2d 100%);
  color: #08111f;
  font-weight: 950;
  cursor: pointer;
  box-shadow: 0 18px 50px rgba(216,168,79,0.28);
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.secondaryButton {
  border-radius: 999px;
  padding: 16px 25px;
  background: linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.06));
  color: white;
  border: 1px solid rgba(255,255,255,0.17);
  font-weight: 950;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 48px;
  max-width: 720px;
}

.statCard {
  padding: 19px;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05));
  border: 1px solid rgba(255,255,255,0.12);
}

.statValue {
  display: block;
  font-size: 31px;
  font-weight: 950;
  letter-spacing: -0.055em;
}

.statLabel {
  display: block;
  margin-top: 5px;
  color: rgba(255,255,255,0.64);
  font-size: 13px;
  line-height: 1.35;
}

.heroPanel {
  padding: 18px;
  border-radius: 38px;
  background: linear-gradient(145deg, rgba(255,255,255,0.13), rgba(255,255,255,0.06));
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(20px);
  box-shadow: 0 45px 120px rgba(0,0,0,0.34);
}

.heroImageWrap {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  height: 420px;
  background: #0b1828;
}

.heroImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.92) contrast(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(7,17,31,0.08), rgba(7,17,31,0.82));
}

.floatingBadge {
  position: absolute;
  left: 18px;
  top: 18px;
  padding: 9px 13px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffffff, #eadbbf);
  color: #07111f;
  font-size: 12px;
  font-weight: 950;
}

.floatingInfo {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  padding: 18px;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(255,255,255,0.95), rgba(235,222,202,0.92));
  color: #07111f;
  box-shadow: 0 18px 55px rgba(0,0,0,0.24);
}

.floatingInfo h2 {
  margin: 8px 0 10px;
  font-size: 28px;
  line-height: 1.05;
  letter-spacing: -0.055em;
  font-weight: 950;
}

.floatingInfo p {
  margin: 0 0 12px;
  color: #4b5563;
  line-height: 1.5;
  font-size: 14px;
}

.sourceLink {
  color: #9a6b19;
  font-size: 12px;
  font-weight: 950;
  text-decoration: none;
}

.section {
  max-width: 1220px;
  margin: 0 auto;
  padding: 96px 28px 35px;
  background: transparent;
}

.sectionHead {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 36px;
}

.kicker {
  display: inline-flex;
  margin-bottom: 16px;
  padding: 8px 13px;
  border-radius: 999px;
  background: linear-gradient(135deg, #eadbbf, #d6bd8f);
  color: #765418;
  font-size: 12px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.sectionTitle {
  max-width: 820px;
  margin: 0;
  font-size: 57px;
  line-height: 1;
  letter-spacing: -0.06em;
  font-weight: 950;
}

.sectionIntro {
  max-width: 460px;
  margin: 0;
  color: #5f6470;
  line-height: 1.7;
}

.categoryGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.categoryCard {
  min-height: 190px;
  padding: 25px;
  border-radius: 30px;
  background: linear-gradient(145deg, rgba(255,255,255,0.9), rgba(239,228,209,0.8));
  border: 1px solid rgba(228,215,195,0.95);
  box-shadow: 0 24px 70px rgba(17,24,39,0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.categoryNumber {
  color: #c8953d;
  font-size: 13px;
  font-weight: 950;
}

.categoryTitle {
  margin: 12px 0 0;
  font-size: 25px;
  font-weight: 950;
  letter-spacing: -0.05em;
}

.categoryText {
  margin: 12px 0 0;
  color: #5f6470;
  line-height: 1.6;
  font-size: 14px;
}

.viewCollection {
  margin-top: 24px;
  color: #9a6b19;
  font-size: 14px;
  font-weight: 950;
}

.buyerStrip {
  max-width: 1220px;
  margin: 40px auto 0;
  padding: 0 28px;
}

.buyerInner {
  border-radius: 34px;
  padding: 28px;
  background: linear-gradient(145deg, rgba(16,24,39,0.96), rgba(36,61,88,0.96));
  color: white;
  box-shadow: 0 28px 80px rgba(17,24,39,0.16);
}

.buyerTitle {
  max-width: 820px;
  margin: 0;
  font-size: 46px;
  line-height: 1;
  letter-spacing: -0.055em;
  font-weight: 950;
}

.buyerText {
  max-width: 760px;
  margin: 18px 0 0;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  font-size: 17px;
}

.buyerGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 20px;
}

.buyerPill {
  padding: 13px 16px;
  border-radius: 999px;
  background: rgba(255,255,255,0.09);
  border: 1px solid rgba(255,255,255,0.12);
  font-weight: 850;
  font-size: 14px;
  text-align: center;
}

.marketplaceGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card {
  overflow: hidden;
  border-radius: 32px;
  background: linear-gradient(145deg, rgba(255,255,255,0.94), rgba(239,228,209,0.86));
  border: 1px solid rgba(228,215,195,0.95);
  box-shadow: 0 28px 80px rgba(17,24,39,0.09);
}

.cardImageWrap {
  position: relative;
  height: 235px;
  overflow: hidden;
  background: #0b1828;
}

.cardImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.cardBadge {
  position: absolute;
  left: 15px;
  top: 15px;
  padding: 8px 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffffff, #eadbbf);
  color: #101827;
  font-size: 12px;
  font-weight: 950;
}

.cardBody {
  padding: 22px;
}

.cardCategory {
  color: #85611d;
  font-size: 13px;
  font-weight: 950;
}

.cardTitle {
  min-height: 58px;
  margin: 8px 0 14px;
  font-size: 22px;
  line-height: 1.1;
  letter-spacing: -0.05em;
  font-weight: 950;
}

.quantityBox {
  display: inline-flex;
  margin-bottom: 14px;
  padding: 7px 10px;
  border-radius: 999px;
  background: #101827;
  color: white;
  font-size: 12px;
  font-weight: 950;
}

.buyerUse {
  margin: 0 0 16px;
  color: #5f6470;
  line-height: 1.55;
  font-size: 13px;
}

.metaGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 14px;
}

.metaBox {
  padding: 11px;
  border-radius: 17px;
  background: linear-gradient(145deg, rgba(244,239,231,0.98), rgba(232,221,203,0.92));
  border: 1px solid rgba(234,223,206,0.95);
}

.metaLabel {
  display: block;
  color: #6b7280;
  font-size: 10px;
  font-weight: 850;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.metaValue {
  display: block;
  margin-top: 4px;
  color: #101827;
  font-size: 12px;
  font-weight: 900;
  line-height: 1.35;
}

.paymentNotice {
  margin-top: 14px;
  padding: 13px;
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(16,24,39,0.95), rgba(36,61,88,0.94));
  color: white;
  font-size: 12px;
  line-height: 1.5;
}

.paymentLabel {
  display: block;
  margin-bottom: 4px;
  color: #f4cb75;
  font-weight: 950;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.cardActions {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  margin-top: 18px;
}

.viewButton {
  border-radius: 999px;
  padding: 11px 15px;
  background: linear-gradient(135deg, #101827, #243d58);
  color: white;
  font-size: 13px;
  font-weight: 950;
  text-decoration: none;
}

.photoCredit {
  margin: 14px 0 0;
  color: #6b7280;
  font-size: 12px;
  line-height: 1.5;
}

.sellerSection {
  max-width: 1220px;
  margin: 0 auto;
  padding: 78px 28px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 58px;
  align-items: center;
}

.businessText {
  margin-top: 24px;
  color: #5f6470;
  line-height: 1.7;
  font-size: 17px;
}

.trustGrid {
  display: grid;
  gap: 16px;
}

.trustCard {
  padding: 24px;
  border-radius: 26px;
  background: linear-gradient(145deg, #101827 0%, #172a3f 58%, #243d58 100%);
  color: white;
  box-shadow: 0 24px 70px rgba(17,24,39,0.13);
}

.trustTitle {
  margin: 0;
  font-size: 22px;
  font-weight: 950;
  letter-spacing: -0.045em;
}

.trustText {
  margin: 10px 0 0;
  color: rgba(255,255,255,0.68);
  line-height: 1.65;
}

.sellerSmallCard strong {
  font-size: 24px;
  letter-spacing: -0.04em;
}

.sellerSmallCard p {
  color: #5f6470;
  line-height: 1.6;
}

.cta {
  max-width: 1220px;
  margin: 42px auto 70px;
  padding: 80px 32px;
  text-align: center;
  color: white;
  border-radius: 42px;
  background:
    radial-gradient(circle at 18% 18%, rgba(244,203,117,0.32), transparent 30%),
    radial-gradient(circle at 86% 82%, rgba(64,96,124,0.55), transparent 34%),
    linear-gradient(135deg, #07111f 0%, #13283d 55%, #27425d 100%);
  box-shadow: 0 34px 100px rgba(17,24,39,0.18);
}

.ctaTitle {
  max-width: 850px;
  margin: 0 auto;
  font-size: 62px;
  line-height: 0.98;
  letter-spacing: -0.065em;
  font-weight: 950;
}

.ctaText {
  max-width: 650px;
  margin: 24px auto 34px;
  color: rgba(255,255,255,0.72);
  line-height: 1.7;
  font-size: 18px;
}

.footer {
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 28px 36px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #5f6470;
  font-size: 14px;
}

/* TABLET */
@media (max-width: 1100px) {
  .heroGrid {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .h1 {
    font-size: 64px;
  }

  .marketplaceGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .categoryGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sellerSection {
    grid-template-columns: 1fr;
  }
}

/* MOBILE */
@media (max-width: 700px) {
  .hero {
    min-height: auto;
    padding: 14px 14px 54px;
  }

  .nav {
    border-radius: 26px;
    padding: 12px;
  }

  .logoMark {
    width: 36px;
    height: 36px;
    font-size: 15px;
  }

  .logoText {
    font-size: 18px;
  }

  .navLinks {
    display: none;
  }

  .navButton {
    padding: 11px 14px;
    font-size: 12px;
  }

  .heroGrid {
    margin-top: 48px;
    gap: 32px;
  }

  .eyebrow {
    font-size: 10px;
    line-height: 1.35;
    letter-spacing: 0.06em;
    margin-bottom: 18px;
  }

  .h1 {
    font-size: clamp(42px, 12vw, 56px);
    line-height: 0.95;
    letter-spacing: -0.065em;
  }

  .heroText {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.65;
  }

  .actions {
    margin-top: 28px;
    display: grid;
    grid-template-columns: 1fr;
  }

  .primaryButton,
  .secondaryButton {
    width: 100%;
    text-align: center;
    padding: 15px 18px;
  }

  .stats {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 30px;
  }

  .statCard {
    padding: 16px;
    border-radius: 20px;
  }

  .statValue {
    font-size: 26px;
  }

  .heroPanel {
    padding: 10px;
    border-radius: 28px;
  }

  .heroImageWrap {
    height: 360px;
    border-radius: 22px;
  }

  .floatingBadge {
    left: 12px;
    top: 12px;
    font-size: 11px;
  }

  .floatingInfo {
    left: 12px;
    right: 12px;
    bottom: 12px;
    padding: 15px;
    border-radius: 20px;
  }

  .floatingInfo h2 {
    font-size: 22px;
  }

  .floatingInfo p {
    font-size: 13px;
  }

  .section {
    padding: 62px 16px 24px;
  }

  .sectionHead {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    margin-bottom: 24px;
  }

  .kicker {
    font-size: 10px;
    margin-bottom: 12px;
  }

  .sectionTitle {
    font-size: clamp(34px, 10vw, 44px);
    line-height: 1.02;
    letter-spacing: -0.055em;
  }

  .sectionIntro {
    font-size: 15px;
    line-height: 1.65;
  }

  .categoryGrid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .categoryCard {
    min-height: auto;
    padding: 20px;
    border-radius: 24px;
  }

  .categoryTitle {
    font-size: 22px;
  }

  .buyerStrip {
    padding: 0 16px;
    margin-top: 28px;
  }

  .buyerInner {
    border-radius: 26px;
    padding: 22px;
  }

  .buyerTitle {
    font-size: 34px;
    line-height: 1.02;
    letter-spacing: -0.055em;
  }

  .buyerText {
    font-size: 15px;
    line-height: 1.65;
  }

  .buyerGrid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .buyerPill {
    padding: 11px 10px;
    font-size: 12px;
  }

  .marketplaceGrid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .card {
    border-radius: 26px;
  }

  .cardImageWrap {
    height: 245px;
  }

  .cardBody {
    padding: 18px;
  }

  .cardTitle {
    min-height: auto;
    font-size: 22px;
  }

  .metaGrid {
    grid-template-columns: 1fr;
  }

  .cardActions {
    align-items: stretch;
  }

  .viewButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .sellerSection {
    padding: 60px 16px;
    gap: 28px;
  }

  .businessText {
    font-size: 15px;
    line-height: 1.65;
  }

  .trustCard {
    padding: 20px;
    border-radius: 22px;
  }

  .trustTitle {
    font-size: 20px;
  }

  .trustText {
    font-size: 14px;
  }

  .cta {
    margin: 30px 16px 46px;
    padding: 50px 18px;
    border-radius: 28px;
  }

  .ctaTitle {
    font-size: clamp(34px, 11vw, 46px);
    line-height: 1;
  }

  .ctaText {
    font-size: 15px;
    line-height: 1.65;
  }

  .footer {
    padding: 0 16px 30px;
    flex-direction: column;
    font-size: 12px;
  }
}

/* VERY SMALL PHONES */
@media (max-width: 380px) {
  .logoText {
    font-size: 16px;
  }

  .navButton {
    display: none;
  }

  .h1 {
    font-size: 40px;
  }

  .buyerGrid {
    grid-template-columns: 1fr;
  }

  .heroImageWrap {
    height: 320px;
  }
}
`;

export default function Home() {
  const featured = listings[0];

  return (
    <main className="page">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section className="hero">
        <nav className="nav">
          <div className="logoWrap">
            <div className="logoMark">S</div>
            <div className="logoText">
              <span style={{ color: "#d8a84f" }}>Salvage</span> Harbor
            </div>
          </div>

          <div className="navLinks">
            <a href="#marketplace" className="navLink">
              Marketplace
            </a>
            <a href="#categories" className="navLink">
              Categories
            </a>
            <a href="#bulk" className="navLink">
              Bulk lots
            </a>
            <a href="#business" className="navLink">
              Business model
            </a>
          </div>

          <a href="#seller-application" className="navButton">
            Request access
          </a>
        </nav>

        <div className="heroGrid">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              Verified European cruise & ship salvage marketplace
            </div>

            <h1 className="h1">
              Cruise ship interiors, casino equipment and bulk hospitality lots.
            </h1>

            <p className="heroText">
              Salvage Harbor connects verified cruise liquidators, shipyards and
              brokers with hotels, restaurants, glamping parks, event companies
              and collectors. From cruise casino equipment and theater seats to
              deck chairs, dining rooms, ship bars, cabin interiors and luxury
              maritime décor.
            </p>

            <div className="actions">
              <a href="#marketplace" className="primaryButton">
                Explore marketplace
              </a>
              <a href="#seller-application" className="secondaryButton">
                Apply as verified seller
              </a>
            </div>

            <div className="stats">
              <div className="statCard">
                <strong className="statValue">Ship</strong>
                <span className="statLabel">
                  Only ship, cruise, yacht or maritime related inventory
                </span>
              </div>
              <div className="statCard">
                <strong className="statValue">10%</strong>
                <span className="statLabel">Success commission</span>
              </div>
              <div className="statCard">
                <strong className="statValue">Safe</strong>
                <span className="statLabel">
                  Payment released after buyer approval
                </span>
              </div>
            </div>
          </div>

          <div className="heroPanel">
            <div className="heroImageWrap">
              <img
                src={featured.image}
                alt={featured.title}
                className="heroImage"
              />
              <div className="overlay" />
              <div className="floatingBadge">{featured.badge}</div>

              <div className="floatingInfo">
                <small style={{ color: "#85611d", fontWeight: 950 }}>
                  Featured casino lot · {featured.origin}
                </small>
                <h2>{featured.title}</h2>
                <p>
                  {featured.quantity} · {featured.seller} · payment released
                  after buyer approval.
                </p>
                <a
                  href={featured.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="sourceLink"
                >
                  {featured.sourceName} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="section">
        <div className="sectionHead">
          <div>
            <span className="kicker">High-value categories</span>
            <h2 className="sectionTitle">
              Not random furniture. Real cruise, ship and yacht interiors.
            </h2>
          </div>

          <p className="sectionIntro">
            Cruise ships are floating hotels. That means large quantities of
            valuable furniture, horeca equipment, casino items, theater seating
            and decorative pieces can be resold as project-ready lots.
          </p>
        </div>

        <div className="categoryGrid">
          {categories.map((category, index) => (
            <article className="categoryCard" key={category.title}>
              <div>
                <span className="categoryNumber">0{index + 1}</span>
                <h3 className="categoryTitle">{category.title}</h3>
                <p className="categoryText">{category.text}</p>
              </div>
              <span className="viewCollection">View collection →</span>
            </article>
          ))}
        </div>
      </section>

      <section id="bulk" className="buyerStrip">
        <div className="buyerInner">
          <span className="kicker">Who buys this inventory?</span>

          <h2 className="buyerTitle">
            One cruise ship can supply an entire hotel, event venue or glamping
            concept.
          </h2>

          <p className="buyerText">
            Matching deck chairs, dining furniture, bar counters, theater seats,
            casino equipment and cabin furniture are easier to sell when
            positioned as complete commercial lots instead of random second-hand
            items.
          </p>

          <div className="buyerGrid">
            {buyerTypes.map((buyer) => (
              <div className="buyerPill" key={buyer}>
                {buyer}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="marketplace" className="section">
        <div className="sectionHead">
          <div>
            <span className="kicker">Marketplace preview</span>
            <h2 className="sectionTitle">
              Cruise deck seating, dining rooms, casino lots and ship interiors.
            </h2>
          </div>

          <p className="sectionIntro">
            Each listing shows the origin, quantity, verified seller status,
            price, 10% commission model, secure payment protection and clickable
            photo source.
          </p>
        </div>

        <div className="marketplaceGrid">
          {listings.map((item) => (
            <article className="card" key={item.title}>
              <div className="cardImageWrap">
                <img src={item.image} alt={item.title} className="cardImage" />
                <span className="cardBadge">{item.badge}</span>
              </div>

              <div className="cardBody">
                <small className="cardCategory">{item.category}</small>
                <h3 className="cardTitle">{item.title}</h3>
                <span className="quantityBox">{item.quantity}</span>
                <p className="buyerUse">{item.buyerUse}</p>

                <div className="metaGrid">
                  <div className="metaBox">
                    <span className="metaLabel">Origin</span>
                    <span className="metaValue">{item.origin}</span>
                  </div>

                  <div className="metaBox">
                    <span className="metaLabel">Price</span>
                    <span className="metaValue">{item.price}</span>
                  </div>

                  <div className="metaBox">
                    <span className="metaLabel">Seller</span>
                    <span className="metaValue">{item.seller}</span>
                  </div>

                  <div className="metaBox">
                    <span className="metaLabel">Platform fee</span>
                    <span className="metaValue">{item.fee}</span>
                  </div>
                </div>

                <div className="paymentNotice">
                  <span className="paymentLabel">Secure payment</span>
                  Payment is processed through Salvage Harbor. Funds are only
                  released to the seller once the buyer has received and approved
                  the corresponding items.
                </div>

                <div className="cardActions">
                  <a
                    href={`mailto:sellers@salvageharbor.eu?subject=Inquiry: ${item.title}`}
                    className="viewButton"
                  >
                    Request lot
                  </a>

                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="sourceLink"
                  >
                    View source →
                  </a>
                </div>

                <p className="photoCredit">{item.sourceName}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="business" className="sellerSection">
        <div>
          <span className="kicker">Business model</span>

          <h2 className="sectionTitle">
            Verified maritime sellers, bulk inventory, secure payments and 10%
            commission.
          </h2>

          <p className="businessText">
            Sellers can list high-value maritime inventory after verification.
            Payments are processed securely through Salvage Harbor. The seller
            only receives the funds once the buyer confirms that the
            corresponding items have been received and approved. Salvage Harbor
            earns a 10% success commission when the transaction is completed.
          </p>

          <a
            href="#seller-application"
            className="primaryButton"
            style={{ marginTop: 28 }}
          >
            Apply as seller
          </a>
        </div>

        <div className="trustGrid">
          {steps.map((item) => (
            <div className="trustCard" key={item.title}>
              <h3 className="trustTitle">{item.title}</h3>
              <p className="trustText">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sellers" className="section">
        <div className="sectionHead">
          <div>
            <span className="kicker">Seller verification</span>
            <h2 className="sectionTitle">
              Cruise liquidators and shipyards can turn large interiors into
              premium resale lots.
            </h2>
          </div>

          <p className="sectionIntro">
            The marketplace should require seller identity, company details,
            item origin, condition photos, quantity, logistics information and
            proof that the goods are legally obtained.
          </p>
        </div>

        <div className="categoryGrid">
          <article className="categoryCard sellerSmallCard">
            <strong>Maritime-only photo standard</strong>
            <p>
              Listings should use images from the actual cruise ship, vessel,
              ferry, yacht or shipyard inventory — not generic house, road or
              office photos.
            </p>
          </article>

          <article className="categoryCard sellerSmallCard">
            <strong>Legal origin</strong>
            <p>
              Shipyard, broker, auction, liquidation or salvage documentation
              must be provided before items can go live.
            </p>
          </article>

          <article className="categoryCard sellerSmallCard">
            <strong>Buyer confidence</strong>
            <p>
              Buyers see origin, quantity, condition, seller verification,
              secure payment terms and clickable source links.
            </p>
          </article>
        </div>
      </section>

      <section id="seller-application" className="cta">
        <h2 className="ctaTitle">
          Have cruise chairs, casino equipment, bar furniture or ship interior
          inventory?
        </h2>

        <p className="ctaText">
          Apply to sell on Salvage Harbor. We focus on authentic maritime
          objects, cruise interiors, hospitality equipment, casino furniture,
          bulk seating and rare design pieces with clear legal origin. Payments
          are processed through the platform and only released after buyer
          approval.
        </p>

        <a
          href="mailto:sellers@salvageharbor.eu?subject=Seller application for Salvage Harbor"
          className="primaryButton"
        >
          Apply as verified seller
        </a>
      </section>

      <footer className="footer">
        <span>© 2026 Salvage Harbor Europe</span>
        <span>
          Maritime inventory only · Verified sellers · Secure payment protection
          · 10% commission
        </span>
      </footer>
    </main>
  );
}
