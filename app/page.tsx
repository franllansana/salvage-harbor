const contactEmail = "info@celaris.nl";

const mailToSeller =
  "mailto:info@celaris.nl?subject=Salvage%20Harbor%20seller%20application";

const mailToBuyer =
  "mailto:info@celaris.nl?subject=Salvage%20Harbor%20sourcing%20request";

const categories = [
  {
    number: "01",
    title: "Casino Equipment",
    text: "Roulette equipment, poker tables, gaming furniture and casino seating from cruise ships.",
  },
  {
    number: "02",
    title: "Cruise Seating Lots",
    text: "Deck chairs, lounge seats, theater seats, restaurant chairs and bar stools in commercial volumes.",
  },
  {
    number: "03",
    title: "Hospitality Inventory",
    text: "Cruise dining furniture, bar counters, buffet areas, galley equipment and horeca-ready lots.",
  },
  {
    number: "04",
    title: "Cabin Furniture",
    text: "Bedside units, desks, wardrobes, mirrors and compact furniture from ship cabins.",
  },
  {
    number: "05",
    title: "Luxury Cruise Interior",
    text: "Atrium décor, lounge pieces, wall panels, mirrors, carpets, artwork and statement design pieces.",
  },
  {
    number: "06",
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

const listings = [
  {
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=1200&q=80",
    label: "Cruise casino lot",
    category: "Casino & Entertainment",
    title: "Cruise Casino Roulette Equipment",
    quantity: "8 roulette tables available",
    description:
      "For casino concepts, private clubs, luxury game rooms, event venues and hospitality entertainment spaces.",
    newValue: "€4,000",
    price: "€1,950",
    saving: "51%",
    note: "Demo estimate based on comparable commercial-grade items, condition and volume.",
    origin: "Antalya, Turkey",
    priceLine: "From €1,950 each",
    seller: "Verified cruise liquidator",
    photo: "Photo by Derek Lynn on Unsplash",
    source: "https://unsplash.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    label: "Deck seating lot",
    category: "Seating & Furniture",
    title: "Cruise Deck Lounge Chair Collection",
    quantity: "180 chairs available",
    description:
      "Ideal for beach clubs, hotels, cruise-themed terraces, glamping lounges and event rental companies.",
    newValue: "€430",
    price: "€145",
    saving: "66%",
    note: "Demo estimate based on comparable commercial-grade items, condition and volume.",
    origin: "Izmir, Turkey",
    priceLine: "€145 per chair",
    seller: "Verified shipyard broker",
    photo: "Photo by Young Shih on Unsplash",
    source: "https://unsplash.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
    label: "Cruise theater lot",
    category: "Entertainment Interior",
    title: "Cruise Theater & Auditorium Seating",
    quantity: "320 seats available",
    description:
      "Strong fit for cinemas, universities, event halls, private theaters and creative studios.",
    newValue: "€350",
    price: "€85",
    saving: "76%",
    note: "Demo estimate based on comparable commercial-grade items, condition and volume.",
    origin: "Genoa, Italy",
    priceLine: "From €85 per seat",
    seller: "Verified cruise inventory seller",
    photo: "Photo by Steve Davison on Unsplash",
    source: "https://unsplash.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=80",
    label: "Dining room lot",
    category: "Hospitality Inventory",
    title: "Cruise Dining Chair & Table Lot",
    quantity: "240 chairs + 60 tables",
    description:
      "Made for restaurants, hotels, cafés, wedding venues and hospitality refurbishments.",
    newValue: "€180",
    price: "€65",
    saving: "64%",
    note: "Demo estimate based on comparable commercial-grade items, condition and volume.",
    origin: "Hamburg, Germany",
    priceLine: "From €65 per item",
    seller: "Verified marine reseller",
    photo: "Photo by Oliver Hayes on Unsplash",
    source: "https://unsplash.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80",
    label: "Ship bar package",
    category: "Bars & Nightlife",
    title: "Royal Yacht Bar Stools & Counter",
    quantity: "42 stools + bar counter",
    description:
      "Ready for cocktail bars, rooftop venues, beach clubs, music venues and event builders.",
    newValue: "€250",
    price: "€90",
    saving: "64%",
    note: "Demo estimate based on comparable commercial-grade items, condition and volume.",
    origin: "Edinburgh, United Kingdom",
    priceLine: "From €90 per item",
    seller: "Verified hospitality liquidator",
    photo: "Photo by Andrew D on Unsplash",
    source: "https://unsplash.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    label: "Ship cabin lot",
    category: "Cabin Interior",
    title: "Ship Cabin Interior & Wooden Units",
    quantity: "80 cabin sets available",
    description:
      "Useful for glamping pods, boutique hotels, hostels, tiny homes and themed accommodation.",
    newValue: "€350",
    price: "€120",
    saving: "66%",
    note: "Demo estimate based on comparable commercial-grade items, condition and volume.",
    origin: "Marseille, France",
    priceLine: "From €120 per set",
    seller: "Verified interior broker",
    photo: "Photo by Georg Eiermann on Unsplash",
    source: "https://unsplash.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    label: "Royal yacht interior",
    category: "Marine Furniture",
    title: "Royal Yacht Lounge Furniture",
    quantity: "12 lounge sets available",
    description:
      "Popular for boutique hotels, members clubs, collectors and luxury maritime interior projects.",
    newValue: "€5,000",
    price: "€2,400",
    saving: "52%",
    note: "Demo estimate based on comparable commercial-grade items, condition and volume.",
    origin: "Edinburgh, United Kingdom",
    priceLine: "From €2,400 per set",
    seller: "Verified interior broker",
    photo: "Photo by Andrew Dawes on Unsplash",
    source: "https://unsplash.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    label: "Cruise atrium lot",
    category: "Luxury Cruise Interior",
    title: "Spirit of Discovery Atrium Décor",
    quantity: "6 statement pieces",
    description:
      "Designed for hotel lobbies, restaurants, event venues and luxury interior designers.",
    newValue: "€3,500",
    price: "€1,400",
    saving: "60%",
    note: "Demo estimate based on comparable commercial-grade items, condition and volume.",
    origin: "Dover, United Kingdom",
    priceLine: "From €1,400 per piece",
    seller: "Verified cruise interior seller",
    photo: "Photo by Becky Fantham on Unsplash",
    source: "https://unsplash.com/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071013] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071013]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-[#071013]">
              S
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.22em] text-white">
                Salvage Harbor
              </p>
              <p className="hidden text-xs text-white/45 sm:block">
                Verified cruise & ship salvage
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
            <a href="#sourcing" className="transition hover:text-white">
              Sourcing
            </a>
            <a href="#marketplace" className="transition hover:text-white">
              Marketplace
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
        <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[150px]" />
        <div className="absolute right-0 top-48 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              Verified European cruise & ship salvage marketplace
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
              Cruise ship interiors, casino equipment and bulk hospitality lots.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Salvage Harbor connects verified maritime sellers with hotels,
              restaurants, glamping parks, event companies and collectors
              looking for premium cruise and ship interiors with real character.
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
                  Only cruise, ship, yacht or maritime-related inventory
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-black text-cyan-200">10%</p>
                <p className="mt-2 text-sm text-white/60">
                  Success commission
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-black text-cyan-200">Save</p>
                <p className="mt-2 text-sm text-white/60">
                  Demo listings show estimated savings versus buying new
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40">
              <div className="relative h-[540px]">
                <img
                  src={listings[0].image}
                  alt={listings[0].title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-[#071013]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="mb-3 w-fit rounded-full bg-cyan-300 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#071013]">
                    Cruise casino lot
                  </p>

                  <p className="text-sm text-cyan-100">
                    Featured casino lot · Antalya, Turkey
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">
                    Cruise Casino Roulette Equipment
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                    Estimated new value €4,000 · Salvage Harbor price €1,950 ·
                    potential saving 51%.
                  </p>

                  <a
                    href={listings[0].source}
                    target="_blank"
                    className="mt-4 inline-block text-xs text-white/45 underline"
                  >
                    Photo by Derek Lynn on Unsplash →
                  </a>
                </div>
              </div>
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
              In simple terms: Salvage Harbor helps hotels, restaurants,
              glamping parks, event builders and collectors buy verified cruise
              and ship interiors from trusted maritime sellers.
            </p>

            <p>
              Why it matters: it is a cost-effective way to source premium
              furniture, décor and hospitality equipment with real maritime
              character — often at a lower cost than buying new.
            </p>

            <p>
              We focus on bulk lots such as deck chairs, dining furniture,
              casino equipment, theatre seating, cabin interiors, ship bars and
              luxury maritime décor. Every seller must prove where the items
              come from, and payments are only released after buyer approval.
            </p>

            <p className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-base font-bold text-cyan-100">
              Questions, seller applications or sourcing requests? Email{" "}
              <a href={`mailto:${contactEmail}`} className="underline">
                {contactEmail}
              </a>
              .
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

      <section id="sourcing" className="border-y border-white/10 bg-[#0a171b]">
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
                lines. Instead, the platform focuses on verified maritime supply
                from refits, shipyards, brokers, auctions, liquidators and
                responsible recycling partners.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {sourcing.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-xl font-black tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">{item.text}</p>
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
              Who buys this inventory?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
              One cruise ship can supply an entire hotel, event venue or
              glamping concept.
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

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              Typical supply sources
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Built for a fragmented salvage market.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-8 text-white/65">
              Many maritime items are already sold somewhere, but the market is
              spread across small dealers, auctions, shipyards and brokers.
              Salvage Harbor makes that supply easier to find, compare and buy.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {supplySources.map((source) => (
                <div
                  key={source}
                  className="rounded-2xl border border-white/10 bg-[#071013] px-5 py-4 text-sm font-bold text-white/75"
                >
                  {source}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              Marketplace preview
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Cruise deck seating, dining rooms, casino lots and ship interiors.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Every demo listing shows estimated new value, Salvage Harbor
              price, potential saving, origin, quantity, seller status and
              payment protection.
            </p>
          </div>

          <a
            href={mailToBuyer}
            className="rounded-full border border-cyan-300/40 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-300 hover:text-[#071013]"
          >
            Request a lot
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {listings.map((listing) => (
            <article
              key={listing.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a171b] shadow-2xl shadow-black/20"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-[#071013]/10 to-transparent" />

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
                      Estimated new value
                    </p>

                    <p className="mt-1 text-xl font-black line-through decoration-white/40">
                      {listing.newValue}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cyan-300 p-4 text-[#071013]">
                    <p className="text-xs font-black uppercase tracking-[0.16em] opacity-60">
                      Salvage Harbor price
                    </p>

                    <p className="mt-1 text-xl font-black">{listing.price}</p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.05] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                      Potential saving
                    </p>

                    <p className="mt-1 text-xl font-black text-cyan-200">
                      {listing.saving}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/45">
                  {listing.note}
                </p>

                <div className="mt-6 grid gap-3 text-sm text-white/60 sm:grid-cols-2">
                  <p>
                    <span className="font-bold text-white">Origin</span>{" "}
                    {listing.origin}
                  </p>

                  <p>
                    <span className="font-bold text-white">Price</span>{" "}
                    {listing.priceLine}
                  </p>

                  <p>
                    <span className="font-bold text-white">Seller</span>{" "}
                    {listing.seller}
                  </p>

                  <p>
                    <span className="font-bold text-white">Platform fee</span>{" "}
                    10% success commission
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm font-bold text-white">
                    Secure payment
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Payment is processed through Salvage Harbor. Funds are only
                    released to the seller once the buyer has received and
                    approved the corresponding items.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={mailToBuyer}
                    className="inline-flex rounded-full bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-[#071013] transition hover:bg-cyan-200"
                  >
                    Request lot
                  </a>

                  <a
                    href={listing.source}
                    target="_blank"
                    className="text-xs text-white/35 underline"
                  >
                    {listing.photo}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a171b]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              Business model
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Verified maritime sellers, secure payments and 10% commission.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Sellers can list high-value maritime inventory after verification.
              Buyers get clearer sourcing, better product information and more
              trust than buying from scattered listings across the internet.
            </p>

            <p className="mt-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm leading-6 text-cyan-100">
              Important: Salvage Harbor should not claim to work with specific
              cruise companies unless a real agreement exists. The safer message
              is: inventory may originate from cruise refits, shipyards,
              maritime brokers, auctions and verified liquidation partners.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
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
              {
                title: "Contact through Celaris",
                text: `For now, all seller applications and sourcing requests go through ${contactEmail}.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-black tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sellers" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300 text-[#071013]">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] opacity-60">
                Apply as seller
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
          <p>© 2026 Salvage Harbor Europe</p>

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
