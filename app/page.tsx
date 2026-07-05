const contactEmail = "info@celaris.nl";

const mailToSeller =
  "mailto:info@celaris.nl?subject=Salvage%20Harbor%20seller%20application";

const mailToBuyer =
  "mailto:info@celaris.nl?subject=Salvage%20Harbor%20sourcing%20request";

const categories = [
  {
    number: "01",
    title: "Casino Equipment",
    text: "Roulette tables, poker tables, casino seating, gaming furniture and entertainment equipment from cruise ships.",
  },
  {
    number: "02",
    title: "Cruise Seating Lots",
    text: "Deck chairs, lounge seats, theatre seating, restaurant chairs and bar stools in commercial volumes.",
  },
  {
    number: "03",
    title: "Hospitality Inventory",
    text: "Dining furniture, bar counters, buffet areas, galley equipment and horeca-ready cruise interiors.",
  },
  {
    number: "04",
    title: "Cabin Furniture",
    text: "Cabin desks, wardrobes, mirrors, bedside units and compact furniture suitable for hotels, glamping and tiny homes.",
  },
  {
    number: "05",
    title: "Luxury Cruise Interior",
    text: "Atrium décor, chandeliers, lounge pieces, wall panels, artwork, carpets, mirrors and statement design items.",
  },
  {
    number: "06",
    title: "Marine Objects",
    text: "Ship bars, brass fixtures, portholes, lamps, signs, handles, nautical décor and rare maritime collector pieces.",
  },
];

const listings = [
  {
    label: "Cruise casino lot",
    category: "Casino & Entertainment",
    title: "Cruise Casino Roulette Equipment",
    quantity: "8 roulette tables available",
    description:
      "For casino concepts, private clubs, luxury game rooms, event venues and hospitality entertainment spaces.",
    newValue: "€4,000",
    price: "€1,950",
    saving: "51%",
    origin: "Antalya, Turkey",
    seller: "Verified cruise liquidator",
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Deck seating lot",
    category: "Seating & Furniture",
    title: "Cruise Deck Lounge Chair Collection",
    quantity: "180 chairs available",
    description:
      "Ideal for beach clubs, hotels, cruise-themed terraces, glamping lounges and event rental companies.",
    newValue: "€430",
    price: "€145",
    saving: "66%",
    origin: "Izmir, Turkey",
    seller: "Verified shipyard broker",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Theatre seating lot",
    category: "Entertainment Interior",
    title: "Cruise Theatre & Auditorium Seating",
    quantity: "320 seats available",
    description:
      "Strong fit for cinemas, universities, event halls, private theatres and creative studios.",
    newValue: "€350",
    price: "€85",
    saving: "76%",
    origin: "Genoa, Italy",
    seller: "Verified cruise inventory seller",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Dining room lot",
    category: "Hospitality Inventory",
    title: "Cruise Dining Chair & Table Lot",
    quantity: "240 chairs + 60 tables",
    description:
      "Made for restaurants, hotels, cafés, wedding venues and hospitality refurbishments.",
    newValue: "€180",
    price: "€65",
    saving: "64%",
    origin: "Hamburg, Germany",
    seller: "Verified marine reseller",
    image:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Ship bar package",
    category: "Bars & Nightlife",
    title: "Royal Yacht Bar Stools & Counter",
    quantity: "42 stools + bar counter",
    description:
      "Ready for cocktail bars, rooftop venues, beach clubs, music venues and event builders.",
    newValue: "€250",
    price: "€90",
    saving: "64%",
    origin: "Edinburgh, United Kingdom",
    seller: "Verified hospitality liquidator",
    image:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Cruise atrium lot",
    category: "Luxury Cruise Interior",
    title: "Statement Cruise Atrium Décor",
    quantity: "6 statement pieces",
    description:
      "Designed for hotel lobbies, restaurants, event venues and luxury maritime interior designers.",
    newValue: "€3,500",
    price: "€1,400",
    saving: "60%",
    origin: "Dover, United Kingdom",
    seller: "Verified cruise interior seller",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  },
];

const steps = [
  {
    title: "Sellers apply",
    text: "Shipyards, brokers, liquidators and maritime sellers submit inventory, company details and item information.",
  },
  {
    title: "Salvage Harbor verifies",
    text: "We review origin, quantity, condition photos, ownership proof and logistics information before publishing.",
  },
  {
    title: "Buyers request lots",
    text: "Hotels, restaurants, glamping parks, event builders and collectors request pricing, availability and transport details.",
  },
  {
    title: "Payment is protected",
    text: "Funds are only released after the buyer receives and approves the corresponding items.",
  },
];

const buyers = [
  "Hotels",
  "Restaurants",
  "Glamping parks",
  "Event builders",
  "Beach clubs",
  "Interior designers",
  "Casino concepts",
  "Collectors",
];

const supplySources = [
  "Cruise refits",
  "Dry docks",
  "Shipyards",
  "Marine brokers",
  "Yacht refits",
  "Auction houses",
  "Liquidators",
  "Recycling yards",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071013] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071013]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-[#071013]">
              SH
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.22em] text-white">
                SALVAGE HARBOR
              </p>
              <p className="text-xs text-white/45">
                Verified maritime inventory
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#what-we-do" className="transition hover:text-white">
              What we do
            </a>
            <a href="#categories" className="transition hover:text-white">
              Categories
            </a>
            <a href="#marketplace" className="transition hover:text-white">
              Marketplace
            </a>
            <a href="#sellers" className="transition hover:text-white">
              Sellers
            </a>
          </nav>

          <a
            href={mailToSeller}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#071013] transition hover:bg-cyan-200"
          >
            Request access
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              Verified European cruise & ship salvage marketplace
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
              Buy verified cruise ship interiors and maritime salvage lots.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Salvage Harbor connects verified maritime sellers with hotels,
              restaurants, glamping parks, event companies, interior designers
              and collectors looking for premium cruise and ship interiors with
              real character.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#marketplace"
                className="rounded-full bg-cyan-300 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#071013] transition hover:bg-cyan-200"
              >
                Explore marketplace
              </a>

              <a
                href={mailToSeller}
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-cyan-300/60 hover:bg-white/5"
              >
                Apply as verified seller
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-black text-cyan-200">Ship</p>
                <p className="mt-2 text-sm text-white/60">
                  Only cruise, ship, yacht or maritime-related inventory.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-black text-cyan-200">10%</p>
                <p className="mt-2 text-sm text-white/60">
                  Success commission only after a completed transaction.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-black text-cyan-200">Save</p>
                <p className="mt-2 text-sm text-white/60">
                  Demo listings show estimated savings versus buying new.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40">
              <div className="relative h-[520px]">
                <img
                  src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=1200&q=80"
                  alt="Cruise casino roulette equipment"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-[#071013]/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="mb-3 w-fit rounded-full bg-cyan-300 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#071013]">
                    Featured lot
                  </p>

                  <h2 className="text-3xl font-black tracking-[-0.04em]">
                    Cruise Casino Roulette Equipment
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                    Estimated new value €4,000 · Salvage Harbor price €1,950 ·
                    potential saving 51%.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 hidden rounded-3xl border border-white/10 bg-[#0d1b20]/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:block">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Seller status
              </p>

              <p className="mt-1 text-lg font-black text-white">
                Verified maritime seller
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              What we do
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
              A simple way to buy verified cruise and ship interiors.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              In simple terms: Salvage Harbor helps professional buyers find
              verified cruise and ship interiors from trusted maritime sellers.
            </p>

            <p>
              It is built for people who want premium furniture, décor,
              hospitality equipment and nautical objects without searching
              through scattered brokers, auctions and random second-hand
              listings.
            </p>

            <p>
              We focus on bulk lots such as deck chairs, dining furniture,
              casino equipment, theatre seating, cabin interiors, ship bars,
              chandeliers and luxury maritime décor. Every seller must prove
              where the items come from.
            </p>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
            High-value categories
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
            Not random furniture. Real cruise, ship and yacht interiors.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/65">
            Cruise ships are floating hotels. That means valuable furniture,
            horeca equipment, casino items, theatre seating and decorative
            pieces can be resold as professional project-ready lots.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <article
              key={item.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-black text-cyan-200">
                  {item.number}
                </span>

                <span className="text-sm text-white/35 transition group-hover:text-cyan-200">
                  View collection →
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-white/60">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a171b]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
                Sourcing & Trust
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
                Where the inventory can come from.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Salvage Harbor does not claim partnerships with specific cruise
                lines unless a real agreement exists. The platform focuses on
                verified maritime supply from refits, shipyards, brokers,
                auctions, liquidators and responsible recycling partners.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {supplySources.map((source) => (
                <div
                  key={source}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="font-bold text-white">{source}</p>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Potential supply source for verified maritime inventory and
                    commercial salvage lots.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8">
            <h3 className="text-2xl font-black tracking-[-0.04em]">
              Verification requirements
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "Company details",
                "Proof of legal origin",
                "Quantity and condition photos",
                "Location and logistics info",
                "Seller identity check",
                "Buyer approval before payout",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#071013]/50 px-5 py-4 text-sm font-bold text-white/80"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              Who buys this?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
              One cruise ship can supply an entire hotel, venue or glamping
              concept.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Matching deck chairs, dining furniture, bar counters, theatre
              seats, casino equipment and cabin furniture are easier to sell
              when positioned as complete commercial lots.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {buyers.map((buyer) => (
              <div
                key={buyer}
                className="flex min-h-28 items-end rounded-3xl border border-white/10 bg-white/[0.04] p-5 font-black text-white"
              >
                {buyer}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="marketplace"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
                Marketplace preview
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
                Cruise deck seating, dining rooms, casino lots and ship
                interiors.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Demo marketplace preview — real seller onboarding coming soon.
                Every listing shows estimated new value, Salvage Harbor price,
                potential saving, origin, quantity, seller status and payment
                protection.
              </p>
            </div>

            <a
              href={mailToBuyer}
              className="rounded-full border border-cyan-300/40 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-300 hover:text-[#071013]"
            >
              Request a lot
            </a>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {listings.map((listing) => (
              <article
                key={listing.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#071013] shadow-2xl shadow-black/20"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#071013]">
                    {listing.label}
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                    {listing.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">
                    {listing.title}
                  </h3>

                  <p className="mt-2 font-bold text-white/80">
                    {listing.quantity}
                  </p>

                  <p className="mt-4 leading-7 text-white/60">
                    {listing.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white/[0.05] p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                        New value
                      </p>

                      <p className="mt-1 text-xl font-black line-through decoration-white/40">
                        {listing.newValue}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-cyan-300 p-4 text-[#071013]">
                      <p className="text-xs font-black uppercase tracking-[0.16em] opacity-60">
                        SH price
                      </p>

                      <p className="mt-1 text-xl font-black">{listing.price}</p>
                    </div>

                    <div className="rounded-2xl bg-white/[0.05] p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                        Saving
                      </p>

                      <p className="mt-1 text-xl font-black text-cyan-200">
                        {listing.saving}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 text-sm text-white/60 sm:grid-cols-2">
                    <p>
                      <span className="font-bold text-white">Origin:</span>{" "}
                      {listing.origin}
                    </p>

                    <p>
                      <span className="font-bold text-white">Seller:</span>{" "}
                      {listing.seller}
                    </p>

                    <p>
                      <span className="font-bold text-white">Platform fee:</span>{" "}
                      10% success commission
                    </p>

                    <p>
                      <span className="font-bold text-white">Payment:</span>{" "}
                      Buyer approval before payout
                    </p>
                  </div>

                  <a
                    href={mailToBuyer}
                    className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#071013] transition hover:bg-cyan-200"
                  >
                    Request lot
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sellers" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Verified maritime sellers, secure payments and 10% commission.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Sellers can list high-value maritime inventory after verification.
              Buyers get clearer sourcing, better product information and more
              trust than buying from scattered listings across the internet.
            </p>
          </div>

          <div className="grid gap-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[80px_1fr]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300 text-lg font-black text-[#071013]">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-[-0.04em]">
                    {step.title}
                  </h3>

                  <p className="mt-2 leading-7 text-white/60">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300 text-[#071013]">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] opacity-60">
                Contact & applications
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-6xl">
                Have cruise chairs, casino equipment, bar furniture or ship
                interior inventory?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 opacity-75">
                Apply to sell on Salvage Harbor. We focus on authentic maritime
                objects, cruise interiors, hospitality equipment, casino
                furniture, bulk seating and rare design pieces with clear legal
                origin.
              </p>

              <p className="mt-6 text-lg font-black">
                Email:{" "}
                <a href={`mailto:${contactEmail}`} className="underline">
                  {contactEmail}
                </a>
              </p>

              <p className="mt-2 text-sm font-medium opacity-70">
                Salvage Harbor is currently operated by Celaris.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-4">
              <a
                href={mailToSeller}
                className="rounded-full bg-[#071013] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#10242a]"
              >
                Apply as verified seller
              </a>

              <a
                href={mailToBuyer}
                className="rounded-full border border-[#071013]/25 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#071013] transition hover:bg-[#071013]/10"
              >
                Send sourcing request
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 text-sm text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Salvage Harbor Europe. Operated by Celaris.</p>

          <div className="flex flex-wrap gap-4">
            <span>Maritime inventory only</span>
            <span>Verified sellers</span>
            <span>Secure payment protection</span>
            <span>10% commission</span>

            <a href={`mailto:${contactEmail}`} className="text-cyan-200">
              {contactEmail}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
