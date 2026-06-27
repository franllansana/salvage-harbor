import type { CSSProperties } from "react";

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

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #07111f 0%, #102338 30%, #d9c7a8 58%, #f4efe7 76%, #f4efe7 100%)",
    color: "#101827",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
    overflowX: "hidden",
  },

  hero: {
    minHeight: "100vh",
    padding: 28,
    color: "white",
    background:
      "radial-gradient(circle at 82% 16%, rgba(244,203,117,0.35), transparent 32%), radial-gradient(circle at 12% 72%, rgba(58,88,115,0.45), transparent 34%), linear-gradient(145deg, #06101d 0%, #102338 48%, #27425d 100%)",
  },

  nav: {
    maxWidth: 1220,
    margin: "0 auto",
    padding: "16px 20px",
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    border: "1px solid rgba(255,255,255,0.16)",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.06))",
    backdropFilter: "blur(18px)",
    boxShadow: "0 24px 80px rgba(0,0,0,0.24)",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  logoMark: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg, #f5d37d, #c8953d)",
    color: "#07111f",
    fontWeight: 950,
    fontSize: 18,
    boxShadow: "0 12px 34px rgba(216,168,79,0.34)",
  },

  logoText: {
    fontSize: 23,
    fontWeight: 950,
    letterSpacing: "-0.06em",
  },

  navLinks: {
    display: "flex",
    gap: 28,
    color: "rgba(255,255,255,0.74)",
    fontSize: 14,
    fontWeight: 650,
  },

  navLink: {
    color: "inherit",
    textDecoration: "none",
  },

  navButton: {
    border: 0,
    borderRadius: 999,
    padding: "13px 20px",
    background: "linear-gradient(135deg, #ffffff, #eadbbf)",
    color: "#07111f",
    fontWeight: 900,
    cursor: "pointer",
    textDecoration: "none",
  },

  heroGrid: {
    maxWidth: 1220,
    margin: "88px auto 0",
    display: "grid",
    gridTemplateColumns: "1fr 0.95fr",
    gap: 60,
    alignItems: "center",
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    padding: "9px 14px",
    borderRadius: 999,
    background: "rgba(216,168,79,0.16)",
    color: "#f4cb75",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 24,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#f4cb75",
    boxShadow: "0 0 18px #f4cb75",
  },

  h1: {
    maxWidth: 850,
    margin: 0,
    fontSize: 78,
    lineHeight: 0.92,
    letterSpacing: "-0.075em",
    fontWeight: 950,
  },

  heroText: {
    maxWidth: 720,
    margin: "28px 0 0",
    color: "rgba(255,255,255,0.76)",
    fontSize: 19,
    lineHeight: 1.75,
  },

  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 36,
  },

  primaryButton: {
    border: 0,
    borderRadius: 999,
    padding: "16px 25px",
    background:
      "linear-gradient(135deg, #f7d783 0%, #d8a84f 55%, #b77a2d 100%)",
    color: "#08111f",
    fontWeight: 950,
    cursor: "pointer",
    boxShadow: "0 18px 50px rgba(216,168,79,0.28)",
    textDecoration: "none",
    display: "inline-flex",
  },

  secondaryButton: {
    borderRadius: 999,
    padding: "16px 25px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.06))",
    color: "white",
    border: "1px solid rgba(255,255,255,0.17)",
    fontWeight: 950,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
    marginTop: 48,
    maxWidth: 720,
  },

  statCard: {
    padding: 19,
    borderRadius: 24,
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
    border: "1px solid rgba(255,255,255,0.12)",
  },

  statValue: {
    display: "block",
    fontSize: 31,
    fontWeight: 950,
    letterSpacing: "-0.055em",
  },

  statLabel: {
    display: "block",
    marginTop: 5,
    color: "rgba(255,255,255,0.64)",
    fontSize: 13,
    lineHeight: 1.35,
  },

  heroPanel: {
    padding: 18,
    borderRadius: 38,
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.13), rgba(255,255,255,0.06))",
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 45px 120px rgba(0,0,0,0.34)",
  },

  heroImageWrap: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 30,
    height: 420,
    background: "#0b1828",
  },

  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    filter: "saturate(0.92) contrast(1.05)",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(7,17,31,0.08), rgba(7,17,31,0.82))",
  },

  floatingBadge: {
    position: "absolute",
    left: 18,
    top: 18,
    padding: "9px 13px",
    borderRadius: 999,
    background: "linear-gradient(135deg, #ffffff, #eadbbf)",
    color: "#07111f",
    fontSize: 12,
    fontWeight: 950,
  },

  floatingInfo: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 18,
    padding: 18,
    borderRadius: 24,
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(235,222,202,0.92))",
    color: "#07111f",
    boxShadow: "0 18px 55px rgba(0,0,0,0.24)",
  },

  sourceLink: {
    color: "#9a6b19",
    fontSize: 12,
    fontWeight: 950,
    textDecoration: "none",
  },

  section: {
    maxWidth: 1220,
    margin: "0 auto",
    padding: "96px 28px 35px",
    background: "transparent",
  },

  sectionHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 40,
    marginBottom: 36,
  },

  kicker: {
    display: "inline-flex",
    marginBottom: 16,
    padding: "8px 13px",
    borderRadius: 999,
    background: "linear-gradient(135deg, #eadbbf, #d6bd8f)",
    color: "#765418",
    fontSize: 12,
    fontWeight: 950,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },

  sectionTitle: {
    maxWidth: 820,
    margin: 0,
    fontSize: 57,
    lineHeight: 1,
    letterSpacing: "-0.06em",
    fontWeight: 950,
  },

  sectionIntro: {
    maxWidth: 460,
    margin: 0,
    color: "#5f6470",
    lineHeight: 1.7,
  },

  categoryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
  },

  categoryCard: {
    minHeight: 190,
    padding: 25,
    borderRadius: 30,
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(239,228,209,0.8))",
    border: "1px solid rgba(228,215,195,0.95)",
    boxShadow: "0 24px 70px rgba(17,24,39,0.07)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  categoryTitle: {
    margin: "12px 0 0",
    fontSize: 25,
    fontWeight: 950,
    letterSpacing: "-0.05em",
  },

  categoryText: {
    margin: "12px 0 0",
    color: "#5f6470",
    lineHeight: 1.6,
    fontSize: 14,
  },

  buyerStrip: {
    maxWidth: 1220,
    margin: "40px auto 0",
    padding: "0 28px",
  },

  buyerInner: {
    borderRadius: 34,
    padding: 28,
    background:
      "linear-gradient(145deg, rgba(16,24,39,0.96), rgba(36,61,88,0.96))",
    color: "white",
    boxShadow: "0 28px 80px rgba(17,24,39,0.16)",
  },

  buyerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 12,
    marginTop: 20,
  },

  buyerPill: {
    padding: "13px 16px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.09)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 850,
    fontSize: 14,
    textAlign: "center",
  },

  marketplaceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
  },

  card: {
    overflow: "hidden",
    borderRadius: 32,
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.94), rgba(239,228,209,0.86))",
    border: "1px solid rgba(228,215,195,0.95)",
    boxShadow: "0 28px 80px rgba(17,24,39,0.09)",
  },

  cardImageWrap: {
    position: "relative",
    height: 235,
    overflow: "hidden",
    background: "#0b1828",
  },

  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  cardBadge: {
    position: "absolute",
    left: 15,
    top: 15,
    padding: "8px 12px",
    borderRadius: 999,
    background: "linear-gradient(135deg, #ffffff, #eadbbf)",
    color: "#101827",
    fontSize: 12,
    fontWeight: 950,
  },

  cardBody: {
    padding: 22,
  },

  cardCategory: {
    color: "#85611d",
    fontSize: 13,
    fontWeight: 950,
  },

  cardTitle: {
    minHeight: 58,
    margin: "8px 0 14px",
    fontSize: 22,
    lineHeight: 1.1,
    letterSpacing: "-0.05em",
    fontWeight: 950,
  },

  quantityBox: {
    display: "inline-flex",
    marginBottom: 14,
    padding: "7px 10px",
    borderRadius: 999,
    background: "#101827",
    color: "white",
    fontSize: 12,
    fontWeight: 950,
  },

  buyerUse: {
    margin: "0 0 16px",
    color: "#5f6470",
    lineHeight: 1.55,
    fontSize: 13,
  },

  metaGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginTop: 14,
  },

  metaBox: {
    padding: 11,
    borderRadius: 17,
    background:
      "linear-gradient(145deg, rgba(244,239,231,0.98), rgba(232,221,203,0.92))",
    border: "1px solid rgba(234,223,206,0.95)",
  },

  metaLabel: {
    display: "block",
    color: "#6b7280",
    fontSize: 10,
    fontWeight: 850,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  metaValue: {
    display: "block",
    marginTop: 4,
    color: "#101827",
    fontSize: 12,
    fontWeight: 900,
    lineHeight: 1.35,
  },

  paymentNotice: {
    marginTop: 14,
    padding: 13,
    borderRadius: 20,
    background:
      "linear-gradient(145deg, rgba(16,24,39,0.95), rgba(36,61,88,0.94))",
    color: "white",
    fontSize: 12,
    lineHeight: 1.5,
  },

  paymentLabel: {
    display: "block",
    marginBottom: 4,
    color: "#f4cb75",
    fontWeight: 950,
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },

  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
    marginTop: 18,
  },

  viewButton: {
    borderRadius: 999,
    padding: "11px 15px",
    background: "linear-gradient(135deg, #101827, #243d58)",
    color: "white",
    fontSize: 13,
    fontWeight: 950,
    textDecoration: "none",
  },

  sellerSection: {
    maxWidth: 1220,
    margin: "0 auto",
    padding: "78px 28px",
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    gap: 58,
    alignItems: "center",
  },

  trustGrid: {
    display: "grid",
    gap: 16,
  },

  trustCard: {
    padding: 24,
    borderRadius: 26,
    background:
      "linear-gradient(145deg, #101827 0%, #172a3f 58%, #243d58 100%)",
    color: "white",
    boxShadow: "0 24px 70px rgba(17,24,39,0.13)",
  },

  trustTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 950,
    letterSpacing: "-0.045em",
  },

  trustText: {
    margin: "10px 0 0",
    color: "rgba(255,255,255,0.68)",
    lineHeight: 1.65,
  },

  cta: {
    maxWidth: 1220,
    margin: "42px auto 70px",
    padding: "80px 32px",
    textAlign: "center",
    color: "white",
    borderRadius: 42,
    background:
      "radial-gradient(circle at 18% 18%, rgba(244,203,117,0.32), transparent 30%), radial-gradient(circle at 86% 82%, rgba(64,96,124,0.55), transparent 34%), linear-gradient(135deg, #07111f 0%, #13283d 55%, #27425d 100%)",
    boxShadow: "0 34px 100px rgba(17,24,39,0.18)",
  },

  ctaTitle: {
    maxWidth: 850,
    margin: "0 auto",
    fontSize: 62,
    lineHeight: 0.98,
    letterSpacing: "-0.065em",
    fontWeight: 950,
  },

  ctaText: {
    maxWidth: 650,
    margin: "24px auto 34px",
    color: "rgba(255,255,255,0.72)",
    lineHeight: 1.7,
    fontSize: 18,
  },

  footer: {
    maxWidth: 1220,
    margin: "0 auto",
    padding: "0 28px 36px",
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    color: "#5f6470",
    fontSize: 14,
  },
};

export default function Home() {
  const featured = listings[0];

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <nav style={styles.nav}>
          <div style={styles.logoWrap}>
            <div style={styles.logoMark}>S</div>
            <div style={styles.logoText}>
              <span style={{ color: "#d8a84f" }}>Salvage</span> Harbor
            </div>
          </div>

          <div style={styles.navLinks}>
            <a href="#marketplace" style={styles.navLink}>
              Marketplace
            </a>
            <a href="#categories" style={styles.navLink}>
              Categories
            </a>
            <a href="#bulk" style={styles.navLink}>
              Bulk lots
            </a>
            <a href="#business" style={styles.navLink}>
              Business model
            </a>
          </div>

          <a href="#seller-application" style={styles.navButton}>
            Request access
          </a>
        </nav>

        <div style={styles.heroGrid}>
          <div>
            <div style={styles.eyebrow}>
              <span style={styles.dot} />
              Verified European cruise & ship salvage marketplace
            </div>

            <h1 style={styles.h1}>
              Cruise ship interiors, casino equipment and bulk hospitality lots.
            </h1>

            <p style={styles.heroText}>
              Salvage Harbor connects verified cruise liquidators, shipyards and
              brokers with hotels, restaurants, glamping parks, event companies
              and collectors. From cruise casino equipment and theater seats to
              deck chairs, dining rooms, ship bars, cabin interiors and luxury
              maritime décor.
            </p>

            <div style={styles.actions}>
              <a href="#marketplace" style={styles.primaryButton}>
                Explore marketplace
              </a>
              <a href="#seller-application" style={styles.secondaryButton}>
                Apply as verified seller
              </a>
            </div>

            <div style={styles.stats}>
              <div style={styles.statCard}>
                <strong style={styles.statValue}>Ship</strong>
                <span style={styles.statLabel}>
                  Only ship, cruise, yacht or maritime related inventory
                </span>
              </div>
              <div style={styles.statCard}>
                <strong style={styles.statValue}>10%</strong>
                <span style={styles.statLabel}>Success commission</span>
              </div>
              <div style={styles.statCard}>
                <strong style={styles.statValue}>Safe</strong>
                <span style={styles.statLabel}>
                  Payment released after buyer approval
                </span>
              </div>
            </div>
          </div>

          <div style={styles.heroPanel}>
            <div style={styles.heroImageWrap}>
              <img
                src={featured.image}
                alt={featured.title}
                style={styles.heroImage}
              />
              <div style={styles.overlay} />

              <div style={styles.floatingBadge}>{featured.badge}</div>

              <div style={styles.floatingInfo}>
                <small style={{ color: "#85611d", fontWeight: 950 }}>
                  Featured casino lot · {featured.origin}
                </small>
                <h2
                  style={{
                    margin: "8px 0 10px",
                    fontSize: 28,
                    lineHeight: 1.05,
                    letterSpacing: "-0.055em",
                    fontWeight: 950,
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  style={{
                    margin: "0 0 12px",
                    color: "#4b5563",
                    lineHeight: 1.5,
                    fontSize: 14,
                  }}
                >
                  {featured.quantity} · {featured.seller} · payment released
                  after buyer approval.
                </p>
                <a
                  href={featured.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.sourceLink}
                >
                  {featured.sourceName} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" style={styles.section}>
        <div style={styles.sectionHead}>
          <div>
            <span style={styles.kicker}>High-value categories</span>
            <h2 style={styles.sectionTitle}>
              Not random furniture. Real cruise, ship and yacht interiors.
            </h2>
          </div>

          <p style={styles.sectionIntro}>
            Cruise ships are floating hotels. That means large quantities of
            valuable furniture, horeca equipment, casino items, theater seating
            and decorative pieces can be resold as project-ready lots.
          </p>
        </div>

        <div style={styles.categoryGrid}>
          {categories.map((category, index) => (
            <article style={styles.categoryCard} key={category.title}>
              <div>
                <span
                  style={{
                    color: "#c8953d",
                    fontSize: 13,
                    fontWeight: 950,
                  }}
                >
                  0{index + 1}
                </span>

                <h3 style={styles.categoryTitle}>{category.title}</h3>
                <p style={styles.categoryText}>{category.text}</p>
              </div>

              <span
                style={{
                  marginTop: 24,
                  color: "#9a6b19",
                  fontSize: 14,
                  fontWeight: 950,
                }}
              >
                View collection →
              </span>
            </article>
          ))}
        </div>
      </section>

      <section id="bulk" style={styles.buyerStrip}>
        <div style={styles.buyerInner}>
          <span style={styles.kicker}>Who buys this inventory?</span>

          <h2
            style={{
              maxWidth: 820,
              margin: 0,
              fontSize: 46,
              lineHeight: 1,
              letterSpacing: "-0.055em",
              fontWeight: 950,
            }}
          >
            One cruise ship can supply an entire hotel, event venue or glamping
            concept.
          </h2>

          <p
            style={{
              maxWidth: 760,
              margin: "18px 0 0",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              fontSize: 17,
            }}
          >
            Matching deck chairs, dining furniture, bar counters, theater seats,
            casino equipment and cabin furniture are easier to sell when
            positioned as complete commercial lots instead of random second-hand
            items.
          </p>

          <div style={styles.buyerGrid}>
            {buyerTypes.map((buyer) => (
              <div style={styles.buyerPill} key={buyer}>
                {buyer}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="marketplace" style={{ ...styles.section, paddingTop: 82 }}>
        <div style={styles.sectionHead}>
          <div>
            <span style={styles.kicker}>Marketplace preview</span>
            <h2 style={styles.sectionTitle}>
              Cruise deck seating, dining rooms, casino lots and ship interiors.
            </h2>
          </div>

          <p style={styles.sectionIntro}>
            Each listing shows the origin, quantity, verified seller status,
            price, 10% commission model, secure payment protection and clickable
            photo source.
          </p>
        </div>

        <div style={styles.marketplaceGrid}>
          {listings.map((item) => (
            <article style={styles.card} key={item.title}>
              <div style={styles.cardImageWrap}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={styles.cardImage}
                />
                <span style={styles.cardBadge}>{item.badge}</span>
              </div>

              <div style={styles.cardBody}>
                <small style={styles.cardCategory}>{item.category}</small>

                <h3 style={styles.cardTitle}>{item.title}</h3>

                <span style={styles.quantityBox}>{item.quantity}</span>

                <p style={styles.buyerUse}>{item.buyerUse}</p>

                <div style={styles.metaGrid}>
                  <div style={styles.metaBox}>
                    <span style={styles.metaLabel}>Origin</span>
                    <span style={styles.metaValue}>{item.origin}</span>
                  </div>

                  <div style={styles.metaBox}>
                    <span style={styles.metaLabel}>Price</span>
                    <span style={styles.metaValue}>{item.price}</span>
                  </div>

                  <div style={styles.metaBox}>
                    <span style={styles.metaLabel}>Seller</span>
                    <span style={styles.metaValue}>{item.seller}</span>
                  </div>

                  <div style={styles.metaBox}>
                    <span style={styles.metaLabel}>Platform fee</span>
                    <span style={styles.metaValue}>{item.fee}</span>
                  </div>
                </div>

                <div style={styles.paymentNotice}>
                  <span style={styles.paymentLabel}>Secure payment</span>
                  Payment is processed through Salvage Harbor. Funds are only
                  released to the seller once the buyer has received and approved
                  the corresponding items.
                </div>

                <div style={styles.cardActions}>
                  <a
                    href={`mailto:sellers@salvageharbor.eu?subject=Inquiry: ${item.title}`}
                    style={styles.viewButton}
                  >
                    Request lot
                  </a>

                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.sourceLink}
                  >
                    View source →
                  </a>
                </div>

                <p
                  style={{
                    margin: "14px 0 0",
                    color: "#6b7280",
                    fontSize: 12,
                    lineHeight: 1.5,
                  }}
                >
                  {item.sourceName}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="business" style={styles.sellerSection}>
        <div>
          <span style={styles.kicker}>Business model</span>

          <h2 style={styles.sectionTitle}>
            Verified maritime sellers, bulk inventory, secure payments and 10%
            commission.
          </h2>

          <p
            style={{
              marginTop: 24,
              color: "#5f6470",
              lineHeight: 1.7,
              fontSize: 17,
            }}
          >
            Sellers can list high-value maritime inventory after verification.
            Payments are processed securely through Salvage Harbor. The seller
            only receives the funds once the buyer confirms that the
            corresponding items have been received and approved. Salvage Harbor
            earns a 10% success commission when the transaction is completed.
          </p>

          <a
            href="#seller-application"
            style={{ ...styles.primaryButton, marginTop: 28 }}
          >
            Apply as seller
          </a>
        </div>

        <div style={styles.trustGrid}>
          {steps.map((item) => (
            <div style={styles.trustCard} key={item.title}>
              <h3 style={styles.trustTitle}>{item.title}</h3>
              <p style={styles.trustText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sellers" style={{ ...styles.section, paddingTop: 36 }}>
        <div style={styles.sectionHead}>
          <div>
            <span style={styles.kicker}>Seller verification</span>
            <h2 style={styles.sectionTitle}>
              Cruise liquidators and shipyards can turn large interiors into
              premium resale lots.
            </h2>
          </div>

          <p style={styles.sectionIntro}>
            The marketplace should require seller identity, company details,
            item origin, condition photos, quantity, logistics information and
            proof that the goods are legally obtained.
          </p>
        </div>

        <div style={styles.categoryGrid}>
          <article style={styles.categoryCard}>
            <strong style={{ fontSize: 24, letterSpacing: "-0.04em" }}>
              Maritime-only photo standard
            </strong>
            <p style={{ color: "#5f6470", lineHeight: 1.6 }}>
              Listings should use images from the actual cruise ship, vessel,
              ferry, yacht or shipyard inventory — not generic house, road or
              office photos.
            </p>
          </article>

          <article style={styles.categoryCard}>
            <strong style={{ fontSize: 24, letterSpacing: "-0.04em" }}>
              Legal origin
            </strong>
            <p style={{ color: "#5f6470", lineHeight: 1.6 }}>
              Shipyard, broker, auction, liquidation or salvage documentation
              must be provided before items can go live.
            </p>
          </article>

          <article style={styles.categoryCard}>
            <strong style={{ fontSize: 24, letterSpacing: "-0.04em" }}>
              Buyer confidence
            </strong>
            <p style={{ color: "#5f6470", lineHeight: 1.6 }}>
              Buyers see origin, quantity, condition, seller verification,
              secure payment terms and clickable source links.
            </p>
          </article>
        </div>
      </section>

      <section id="seller-application" style={styles.cta}>
        <h2 style={styles.ctaTitle}>
          Have cruise chairs, casino equipment, bar furniture or ship interior
          inventory?
        </h2>

        <p style={styles.ctaText}>
          Apply to sell on Salvage Harbor. We focus on authentic maritime
          objects, cruise interiors, hospitality equipment, casino furniture,
          bulk seating and rare design pieces with clear legal origin. Payments
          are processed through the platform and only released after buyer
          approval.
        </p>

        <a
          href="mailto:sellers@salvageharbor.eu?subject=Seller application for Salvage Harbor"
          style={styles.primaryButton}
        >
          Apply as verified seller
        </a>
      </section>

      <footer style={styles.footer}>
        <span>© 2026 Salvage Harbor Europe</span>
        <span>
          Maritime inventory only · Verified sellers · Secure payment protection
          · 10% commission
        </span>
      </footer>
    </main>
  );
}