const listings = [
  {
    title: "Cruise Casino Roulette Equipment",
    category: "Casino & Entertainment",
    origin: "Antalya, Turkey",
    seller: "Verified cruise liquidator",
    price: "From €1,450 each",
    badge: "Cruise casino lot",
    quantity: "8 roulette tables available",
    buyerUse:
      "For casino concepts, private clubs, luxury game rooms, event venues and hospitality entertainment spaces.",
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
    badge: "Deck seating lot",
    quantity: "180 chairs available",
    buyerUse:
      "Ideal for beach clubs, hotels, cruise-themed terraces, glamping lounges and event rental companies.",
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
    title: "Casino Equipment",
    text: "Roulette equipment, poker tables, gaming furniture and casino seating from cruise ships.",
  },
  {
    title: "Cruise Seating Lots",
    text: "Deck chairs, lounge seats, theater seats, restaurant chairs and bar stools in commercial volumes.",
  },
  {
    title: "Hospitality Inventory",
    text: "Cruise dining furniture, bar counters, buffet areas, galley equipment and horeca-ready lots.",
  },
  {
    title: "Cabin Furniture",
    text: "Bedside units, desks, wardrobes, mirrors and compact furniture from ship cabins.",
  },
  {
    title: "Luxury Cruise Interior",
    text: "Atrium décor, lounge pieces, wall panels, mirrors, carpets, artwork and statement design pieces.",
  },
  {
    title: "Marine Objects",
    text: "Royal yacht furniture, ship bars, brass fixtures, signs, handles, lamps and collectible nautical objects.",
  },
];

const sourcing = [
  {
    title: "Cruise refits & dry docks",
    text: "Cruise ships regularly replace interiors during upgrades. Furniture, lighting, casino equipment, cabin units, theatre seating and hospitality items can become available when vessels are refurbished.",
  },
  {
    title: "Shipyards & marine contractors",
    text: "Shipyards and interior contractors often handle removal projects during refits. These projects can create large, matching commercial lots.",
  },
  {
    title: "Approved ship recycling yards",
    text: "When older vessels are responsibly recycled, reusable interiors and equipment may be removed before materials are processed.",
  },
  {
    title: "Brokers, auctions & liquidators",
    text: "Many items are already spread across maritime brokers, auction houses, liquidators and salvage dealers. Salvage Harbor brings that supply into one curated B2B marketplace.",
  },
];

const trustPoints = [
  {
    title: "Maritime inventory only",
    text: "Listings must come from cruise ships, ships, ferries, yachts or verified maritime interiors — not random furniture from houses.",
  },
  {
    title: "Verified sellers only",
    text: "Shipyards, brokers, cruise liquidators and professional maritime sellers must be manually approved before listing.",
  },
  {
    title: "Proof of origin required",
    text: "Sellers must provide company details, item origin, quantity, condition photos, logistics information and proof that goods were legally obtained.",
  },
  {
    title: "Buyer approval before payout",
    text: "Payments are processed through Salvage Harbor. Funds are only released to the seller after the buyer receives and approves the items.",
  },
  {
    title: "10% success commission",
    text: "Salvage Harbor earns a 10% success fee only when a transaction is completed.",
  },
];

const buyers = [
  "Hotels",
  "Restaurants",
  "Glamping parks",
  "Event builders",
  "Casino concepts",
  "Beach clubs",
  "Interior designers",
  "Collectors",
];

const supplyTypes = [
  "Cruise refits",
  "Dry docks",
  "Shipyards",
  "Marine brokers",
  "Yacht refits",
  "Auction houses",
  "Liquidators",
  "Recycling yards",
];

const css = `
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  background: #f4efe7;
}

a {
  color: inherit;
}

.page {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background: #f4efe7;
  color: #101827;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
}

.hero {
  color: white;
  padding: 14px;
  background:
    radial-gradient(circle at 85% 12%, rgba(244,203,117,0.36), transparent 32%),
    radial-gradient(circle at 8% 72%, rgba(58,88,115,0.48), transparent 34%),
    linear-gradient(145deg, #06101d 0%, #102338 52%, #27425d 100%);
}

.nav {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 12px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid rgba(255,255,255,0.16);
  background: linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06));
  backdrop-filter: blur(18px);
  box-shadow: 0 24px 80px rgba(0,0,0,0.22);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logoMark {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f5d37d, #c8953d);
  color: #07111f;
  font-weight: 950;
  font-size: 15px;
  flex: 0 0 auto;
}

.logoText {
  font-size: 18px;
  font-weight: 950;
  letter-spacing: -0.06em;
  white-space: nowrap;
}

.navLinks {
  display: none;
}

.navLink {
  text-decoration: none;
}

.navButton {
  border-radius: 999px;
  padding: 11px 14px;
  background: linear-gradient(135deg, #ffffff, #eadbbf);
  color: #07111f;
  font-size: 12px;
  font-weight: 900;
  text-decoration: none;
  white-space: nowrap;
}

.heroInner {
  width: 100%;
  max-width: 1220px;
  margin: 48px auto 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

.eyebrow {
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
  max-width: 100%;
  padding: 9px 13px;
  border-radius: 18px;
  background: rgba(216,168,79,0.16);
  color: #f4cb75;
  font-size: 10px;
  line-height: 1.35;
  font-weight: 950;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.dot {
  width: 8px;
  height: 8px;
  margin-top: 3px;
  border-radius: 50%;
  background: #f4cb75;
  box-shadow: 0 0 18px #f4cb75;
  flex: 0 0 auto;
}

.h1 {
  margin: 0;
  font-size: clamp(40px, 12vw, 54px);
  line-height: 0.96;
  letter-spacing: -0.065em;
  font-weight: 950;
}

.heroText {
  margin: 20px 0 0;
  color: rgba(255,255,255,0.78);
  font-size: 16px;
  line-height: 1.62;
}

.actions {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  margin-top: 28px;
}

.primaryButton,
.secondaryButton {
  width: 100%;
  border-radius: 999px;
  padding: 15px 18px;
  font-weight: 950;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.primaryButton {
  background: linear-gradient(135deg, #f7d783 0%, #d8a84f 55%, #b77a2d 100%);
  color: #08111f;
  box-shadow: 0 18px 50px rgba(216,168,79,0.28);
}

.secondaryButton {
  background: linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.06));
  color: white;
  border: 1px solid rgba(255,255,255,0.17);
}

.stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 30px;
}

.statCard {
  padding: 16px;
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05));
  border: 1px solid rgba(255,255,255,0.12);
}

.statValue {
  display: block;
  font-size: 26px;
  font-weight: 950;
  letter-spacing: -0.055em;
}

.statLabel {
  display: block;
  margin-top: 5px;
  color: rgba(255,255,255,0.66);
  font-size: 13px;
  line-height: 1.35;
}

.heroPanel {
  width: 100%;
  padding: 10px;
  border-radius: 28px;
  background: linear-gradient(145deg, rgba(255,255,255,0.13), rgba(255,255,255,0.06));
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(20px);
  box-shadow: 0 45px 120px rgba(0,0,0,0.34);
}

.heroImageWrap {
  position: relative;
  height: 330px;
  overflow: hidden;
  border-radius: 22px;
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
  left: 12px;
  top: 12px;
  padding: 8px 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffffff, #eadbbf);
  color: #07111f;
  font-size: 11px;
  font-weight: 950;
}

.floatingInfo {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;
  padding: 15px;
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(255,255,255,0.95), rgba(235,222,202,0.92));
  color: #07111f;
  box-shadow: 0 18px 55px rgba(0,0,0,0.24);
}

.floatingInfo h2 {
  margin: 8px 0 10px;
  font-size: 22px;
  line-height: 1.05;
  letter-spacing: -0.055em;
  font-weight: 950;
}

.floatingInfo p {
  margin: 0 0 12px;
  color: #4b5563;
  line-height: 1.5;
  font-size: 13px;
}

.sourceLink {
  color: #9a6b19;
  font-size: 12px;
  font-weight: 950;
  text-decoration: none;
}

.content {
  background: linear-gradient(180deg, #f4efe7 0%, #efe2cc 48%, #f4efe7 100%);
}

.explainBox {
  width: calc(100% - 28px);
  max-width: 1220px;
  margin: -18px auto 0;
  position: relative;
  z-index: 5;
  padding: 22px;
  border-radius: 28px;
  background: linear-gradient(145deg, #ffffff 0%, #f1e6d3 100%);
  border: 1px solid rgba(218,199,164,0.92);
  box-shadow: 0 28px 80px rgba(17,24,39,0.14);
}

.explainLabel {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 8px 12px;
  border-radius: 999px;
  background: #101827;
  color: #f4cb75;
  font-size: 11px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.explainTitle {
  margin: 0;
  max-width: 900px;
  font-size: clamp(28px, 8vw, 46px);
  line-height: 1.02;
  letter-spacing: -0.06em;
  font-weight: 950;
  color: #101827;
}

.explainText {
  max-width: 950px;
  margin: 16px 0 0;
  color: #4b5563;
  font-size: 16px;
  line-height: 1.7;
}

.explainHighlight {
  margin-top: 18px;
  padding: 16px;
  border-radius: 22px;
  background: linear-gradient(145deg, #101827 0%, #243d58 100%);
  color: white;
  font-size: 15px;
  line-height: 1.65;
}

.explainHighlight strong {
  color: #f4cb75;
}

.section {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 58px 16px 22px;
}

.lightSection {
  color: #101827;
}

.sectionHead {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  margin-bottom: 24px;
}

.kicker {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 8px 13px;
  border-radius: 999px;
  background: linear-gradient(135deg, #eadbbf, #d6bd8f);
  color: #765418;
  font-size: 10px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.sectionTitle {
  margin: 0;
  color: #101827;
  font-size: clamp(32px, 10vw, 44px);
  line-height: 1.02;
  letter-spacing: -0.055em;
  font-weight: 950;
}

.sectionIntro {
  margin: 0;
  color: #5f6470;
  font-size: 15px;
  line-height: 1.65;
}

.categoryGrid,
.marketGrid,
.sourcingGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.categoryCard,
.sourcingCard {
  min-height: auto;
  padding: 20px;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(255,255,255,0.96), rgba(239,228,209,0.88));
  border: 1px solid rgba(218,199,164,0.95);
  box-shadow: 0 24px 70px rgba(17,24,39,0.07);
  color: #101827;
}

.categoryNumber {
  color: #c8953d;
  font-size: 13px;
  font-weight: 950;
}

.categoryTitle,
.sourcingTitle {
  margin: 12px 0 0;
  font-size: 22px;
  font-weight: 950;
  letter-spacing: -0.05em;
  color: #101827;
}

.categoryText,
.sourcingText {
  margin: 12px 0 0;
  color: #5f6470;
  line-height: 1.6;
  font-size: 14px;
}

.viewCollection {
  display: inline-flex;
  margin-top: 24px;
  color: #9a6b19;
  font-size: 14px;
  font-weight: 950;
}

.darkBand {
  width: 100%;
  max-width: 1220px;
  margin: 34px auto 0;
  padding: 0 16px;
}

.darkInner {
  border-radius: 28px;
  padding: 22px;
  background: linear-gradient(145deg, #101827 0%, #172a3f 55%, #27425d 100%);
  color: white;
  box-shadow: 0 28px 80px rgba(17,24,39,0.16);
}

.darkTitle {
  margin: 0;
  font-size: 34px;
  line-height: 1.02;
  letter-spacing: -0.055em;
  font-weight: 950;
}

.darkText {
  margin: 18px 0 0;
  color: rgba(255,255,255,0.72);
  line-height: 1.65;
  font-size: 15px;
}

.pillGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
}

.pill {
  padding: 11px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.09);
  border: 1px solid rgba(255,255,255,0.12);
  font-weight: 850;
  font-size: 12px;
  text-align: center;
}

.card {
  width: 100%;
  overflow: hidden;
  border-radius: 26px;
  background: linear-gradient(145deg, rgba(255,255,255,0.96), rgba(239,228,209,0.86));
  border: 1px solid rgba(218,199,164,0.95);
  box-shadow: 0 28px 80px rgba(17,24,39,0.09);
  color: #101827;
}

.cardImageWrap {
  position: relative;
  height: 230px;
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
  padding: 18px;
}

.cardCategory {
  color: #85611d;
  font-size: 13px;
  font-weight: 950;
}

.cardTitle {
  margin: 8px 0 14px;
  font-size: 23px;
  line-height: 1.08;
  letter-spacing: -0.05em;
  font-weight: 950;
  color: #101827;
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
  font-size: 14px;
}

.metaGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 14px;
}

.metaBox {
  padding: 11px;
  border-radius: 17px;
  background: linear-gradient(145deg, rgba(244,239,231,0.98), rgba(232,221,203,0.92));
  border: 1px solid rgba(218,199,164,0.7);
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

.trustSection {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 58px 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}

.businessText {
  margin-top: 24px;
  color: #5f6470;
  line-height: 1.65;
  font-size: 15px;
}

.trustGrid {
  display: grid;
  gap: 16px;
}

.trustCard {
  padding: 20px;
  border-radius: 22px;
  background: linear-gradient(145deg, #101827 0%, #172a3f 58%, #243d58 100%);
  color: white;
  box-shadow: 0 24px 70px rgba(17,24,39,0.13);
}

.trustTitle {
  margin: 0;
  font-size: 20px;
  font-weight: 950;
  letter-spacing: -0.045em;
}

.trustText {
  margin: 10px 0 0;
  color: rgba(255,255,255,0.7);
  line-height: 1.65;
  font-size: 14px;
}

.warningBox {
  margin-top: 22px;
  padding: 16px;
  border-radius: 22px;
  background: rgba(16,24,39,0.08);
  border: 1px solid rgba(16,24,39,0.12);
  color: #4b5563;
  line-height: 1.6;
  font-size: 14px;
}

.warningBox strong {
  color: #101827;
}

.cta {
  width: calc(100% - 32px);
  max-width: 1220px;
  margin: 30px auto 46px;
  padding: 50px 18px;
  text-align: center;
  color: white;
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 18%, rgba(244,203,117,0.32), transparent 30%),
    radial-gradient(circle at 86% 82%, rgba(64,96,124,0.55), transparent 34%),
    linear-gradient(135deg, #07111f 0%, #13283d 55%, #27425d 100%);
  box-shadow: 0 34px 100px rgba(17,24,39,0.18);
}

.ctaTitle {
  max-width: 850px;
  margin: 0 auto;
  font-size: clamp(34px, 11vw, 46px);
  line-height: 1;
  letter-spacing: -0.065em;
  font-weight: 950;
}

.ctaText {
  max-width: 650px;
  margin: 24px auto 34px;
  color: rgba(255,255,255,0.72);
  line-height: 1.65;
  font-size: 15px;
}

.footer {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 16px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #5f6470;
  font-size: 12px;
}

/* Desktop */
@media (min-width: 760px) {
  .hero {
    padding: 28px;
  }

  .nav {
    padding: 16px 20px;
    border-radius: 999px;
  }

  .logoMark {
    width: 42px;
    height: 42px;
    font-size: 18px;
  }

  .logoText {
    font-size: 23px;
  }

  .navButton {
    font-size: 14px;
    padding: 13px 20px;
  }

  .heroInner {
    margin-top: 86px;
  }

  .h1 {
    font-size: clamp(54px, 6vw, 78px);
    line-height: 0.92;
  }

  .heroText {
    font-size: 19px;
    line-height: 1.75;
  }

  .actions {
    display: flex;
  }

  .primaryButton,
  .secondaryButton {
    width: auto;
    padding: 16px 25px;
  }

  .stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 720px;
  }

  .explainBox {
    width: calc(100% - 56px);
    padding: 34px;
    border-radius: 34px;
    margin-top: -28px;
  }

  .explainText {
    font-size: 17px;
  }

  .section {
    padding: 92px 28px 36px;
  }

  .categoryGrid,
  .marketGrid,
  .sourcingGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .metaGrid {
    grid-template-columns: 1fr 1fr;
  }

  .darkBand {
    padding: 0 28px;
  }

  .darkInner {
    padding: 30px;
    border-radius: 34px;
  }

  .pillGrid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .trustSection {
    padding: 78px 28px;
  }

  .footer {
    padding: 0 28px 36px;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
  }
}

@media (min-width: 1100px) {
  .navLinks {
    display: flex;
    gap: 26px;
    color: rgba(255,255,255,0.74);
    font-size: 14px;
    font-weight: 700;
  }

  .heroInner {
    grid-template-columns: minmax(0, 1fr) minmax(360px, 0.9fr);
    gap: 58px;
    align-items: center;
  }

  .categoryGrid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .marketGrid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .sourcingGrid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .sectionHead {
    grid-template-columns: minmax(0, 1fr) 420px;
    align-items: end;
    gap: 40px;
  }

  .trustSection {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 58px;
    align-items: center;
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
          <div className="logo">
            <div className="logoMark">S</div>
            <div className="logoText">
              <span style={{ color: "#d8a84f" }}>Salvage</span> Harbor
            </div>
          </div>

          <div className="navLinks">
            <a href="#what-we-do" className="navLink">
              What we do
            </a>
            <a href="#categories" className="navLink">
              Categories
            </a>
            <a href="#sourcing" className="navLink">
              Sourcing
            </a>
            <a href="#marketplace" className="navLink">
              Marketplace
            </a>
          </div>

          <a href="#seller-application" className="navButton">
            Request access
          </a>
        </nav>

        <div className="heroInner">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              Verified European cruise & ship salvage marketplace
            </div>

            <h1 className="h1">
              Cruise ship interiors, casino equipment and bulk hospitality lots.
            </h1>

            <p className="heroText">
              Salvage Harbor connects verified maritime sellers with hotels,
              restaurants, glamping parks, event companies and collectors looking
              for premium cruise and ship interiors with real character.
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
                  Only cruise, ship, yacht or maritime-related inventory
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

      <div className="content">
        <section id="what-we-do" className="explainBox">
          <span className="explainLabel">What we do</span>

          <h2 className="explainTitle">
            A simple way to buy verified cruise and ship interiors.
          </h2>

          <p className="explainText">
            In simple terms: Salvage Harbor helps hotels, restaurants, glamping
            parks, event builders and collectors buy verified cruise and ship
            interiors from trusted maritime sellers.
          </p>

          <div className="explainHighlight">
            <strong>Why it matters:</strong> it is a cost-effective way to
            source premium furniture, décor and hospitality equipment with real
            maritime character — often at a lower cost than buying new.
          </div>

          <p className="explainText">
            We focus on bulk lots such as deck chairs, dining furniture, casino
            equipment, theatre seating, cabin interiors, ship bars and luxury
            maritime décor. Every seller must prove where the items come from,
            and payments are only released after buyer approval.
          </p>
        </section>

        <section id="categories" className="section lightSection">
          <div className="sectionHead">
            <div>
              <span className="kicker">High-value categories</span>

              <h2 className="sectionTitle">
                Not random furniture. Real cruise, ship and yacht interiors.
              </h2>
            </div>

            <p className="sectionIntro">
              Cruise ships are floating hotels. That means valuable furniture,
              horeca equipment, casino items, theatre seating and decorative
              pieces can be resold as professional project-ready lots.
            </p>
          </div>

          <div className="categoryGrid">
            {categories.map((category, index) => (
              <article className="categoryCard" key={category.title}>
                <span className="categoryNumber">0{index + 1}</span>

                <h3 className="categoryTitle">{category.title}</h3>

                <p className="categoryText">{category.text}</p>

                <span className="viewCollection">View collection →</span>
              </article>
            ))}
          </div>
        </section>

        <section id="sourcing" className="section">
          <div className="sectionHead">
            <div>
              <span className="kicker">Sourcing & Trust</span>

              <h2 className="sectionTitle">
                Where the inventory can come from.
              </h2>
            </div>

            <p className="sectionIntro">
              Salvage Harbor does not claim partnerships with specific cruise
              lines. Instead, the platform focuses on verified maritime supply
              from refits, shipyards, brokers, auctions, liquidators and
              responsible recycling partners.
            </p>
          </div>

          <div className="sourcingGrid">
            {sourcing.map((item) => (
              <article className="sourcingCard" key={item.title}>
                <h3 className="sourcingTitle">{item.title}</h3>
                <p className="sourcingText">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="bulk" className="darkBand">
          <div className="darkInner">
            <span className="kicker">Who buys this inventory?</span>

            <h2 className="darkTitle">
              One cruise ship can supply an entire hotel, event venue or
              glamping concept.
            </h2>

            <p className="darkText">
              Matching deck chairs, dining furniture, bar counters, theatre
              seats, casino equipment and cabin furniture are easier to sell
              when positioned as complete commercial lots.
            </p>

            <div className="pillGrid">
              {buyers.map((buyer) => (
                <div className="pill" key={buyer}>
                  {buyer}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="darkBand">
          <div className="darkInner">
            <span className="kicker">Typical supply sources</span>

            <h2 className="darkTitle">
              Built for a fragmented salvage market.
            </h2>

            <p className="darkText">
              Many maritime items are already sold somewhere, but the market is
              spread across small dealers, auctions, shipyards and brokers.
              Salvage Harbor makes that supply easier to find, compare and buy.
            </p>

            <div className="pillGrid">
              {supplyTypes.map((type) => (
                <div className="pill" key={type}>
                  {type}
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
                Cruise deck seating, dining rooms, casino lots and ship
                interiors.
              </h2>
            </div>

            <p className="sectionIntro">
              Every listing shows origin, quantity, verified seller status,
              price, 10% commission model, secure payment protection and a
              clickable photo source.
            </p>
          </div>

          <div className="marketGrid">
            {listings.map((item) => (
              <article className="card" key={item.title}>
                <div className="cardImageWrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cardImage"
                  />

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
                      <span className="metaValue">10% success commission</span>
                    </div>
                  </div>

                  <div className="paymentNotice">
                    <span className="paymentLabel">Secure payment</span>
                    Payment is processed through Salvage Harbor. Funds are only
                    released to the seller once the buyer has received and
                    approved the corresponding items.
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

        <section id="business" className="trustSection">
          <div>
            <span className="kicker">Business model</span>

            <h2 className="sectionTitle">
              Verified maritime sellers, secure payments and 10% commission.
            </h2>

            <p className="businessText">
              Sellers can list high-value maritime inventory after verification.
              Buyers get clearer sourcing, better product information and more
              trust than buying from scattered listings across the internet.
            </p>

            <div className="warningBox">
              <strong>Important:</strong> Salvage Harbor should not claim to
              work with specific cruise companies unless a real agreement
              exists. The safer message is: inventory may originate from cruise
              refits, shipyards, maritime brokers, auctions and verified
              liquidation partners.
            </div>

            <a
              href="#seller-application"
              className="primaryButton"
              style={{ marginTop: 28 }}
            >
              Apply as seller
            </a>
          </div>

          <div className="trustGrid">
            {trustPoints.map((point) => (
              <div className="trustCard" key={point.title}>
                <h3 className="trustTitle">{point.title}</h3>
                <p className="trustText">{point.text}</p>
              </div>
            ))}
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
            bulk seating and rare design pieces with clear legal origin.
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
            Maritime inventory only · Verified sellers · Secure payment
            protection · 10% commission
          </span>
        </footer>
      </div>
    </main>
  );
}
