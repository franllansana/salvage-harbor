const contactEmail = "info@celaris.nl";

const youtubeHeroVideoId = "CiPkvLgjkME";

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
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/bars/palm-beach-casino-bar-msc-armonia.jpg?as=1&bc=transparent&hash=5FEFF38A850A020708304E2772C972D2&mh=720&mw=920",
    label: "Cruise casino lot",
    category: "Casino & Entertainment",
    title: "Cruise Casino Roulette Equipment",
    quantity: "8 roulette tables available",
    description:
      "Real cruise-style casino setup with roulette tables, gaming chairs, slot-machine area and luxury onboard casino atmosphere.",
    newValue: "€4,000",
    price: "€1,950",
    saving: "51%",
    note: "Demo estimate based on comparable commercial-grade cruise casino equipment, condition and volume.",
    origin: "Antalya, Turkey",
    priceLine: "From €1,950 each",
    seller: "Verified cruise liquidator",
    photo: "Cruise casino interior image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/restaurants/armonia-restaurant-il-girasole.jpg?as=1&bc=transparent&hash=0C08D3A9404A779BA78E3B519ADC768C&mh=1080&mw=1380",
    label: "Deck restaurant lot",
    category: "Outdoor Hospitality",
    title: "Cruise Deck Restaurant Furniture Lot",
    quantity: "160 chairs + 45 tables",
    description:
      "Outdoor cruise restaurant furniture suitable for beach clubs, hotel terraces, glamping parks and hospitality concepts.",
    newValue: "€350",
    price: "€120",
    saving: "66%",
    note: "Demo estimate based on comparable commercial outdoor cruise hospitality furniture.",
    origin: "Izmir, Turkey",
    priceLine: "From €120 per item",
    seller: "Verified shipyard broker",
    photo: "Cruise deck restaurant image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/entertainment/armonia-entertainment-theatre-show.jpg?as=1&bc=transparent&hash=063B54676573C89AFF485B65CF899542&mh=1080&mw=1380",
    label: "Cruise theater lot",
    category: "Entertainment Interior",
    title: "Cruise Theater & Auditorium Seating",
    quantity: "320 seats available",
    description:
      "Cruise ship theatre seating and entertainment interior, suitable for cinemas, event halls, universities and private theaters.",
    newValue: "€350",
    price: "€85",
    saving: "76%",
    note: "Demo estimate based on comparable theatre seating, condition and volume.",
    origin: "Genoa, Italy",
    priceLine: "From €85 per seat",
    seller: "Verified cruise inventory seller",
    photo: "Cruise theater image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/restaurants/armonia-restaurant-la-pergola.jpg?as=1&bc=transparent&hash=7496C6F776D98C0C984D47B008D21768&mh=1080&mw=1380",
    label: "Dining room lot",
    category: "Hospitality Inventory",
    title: "Cruise Dining Chair & Table Lot",
    quantity: "240 chairs + 60 tables",
    description:
      "Classic cruise dining room furniture for restaurants, hotels, cafés, wedding venues and hospitality refurbishments.",
    newValue: "€180",
    price: "€65",
    saving: "64%",
    note: "Demo estimate based on comparable commercial dining furniture and volume.",
    origin: "Hamburg, Germany",
    priceLine: "From €65 per item",
    seller: "Verified marine reseller",
    photo: "Cruise dining room image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/bars/palm-beach-casino-bar-msc-armonia.jpg?as=1&bc=transparent&hash=5FEFF38A850A020708304E2772C972D2&mh=720&mw=920",
    label: "Ship bar package",
    category: "Bars & Nightlife",
    title: "Cruise Casino Bar Stools & Counter",
    quantity: "42 stools + bar counter",
    description:
      "Cruise casino/bar interior package for cocktail bars, rooftop venues, beach clubs and event builders.",
    newValue: "€250",
    price: "€90",
    saving: "64%",
    note: "Demo estimate based on comparable commercial bar furniture and condition.",
    origin: "Edinburgh, United Kingdom",
    priceLine: "From €90 per item",
    seller: "Verified hospitality liquidator",
    photo: "Cruise casino bar image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/cabins/tile-image/armonia-ocean-view.jpg?as=1&bc=transparent&hash=B4971B732D9EEA7C9FA02F50D12BE876&mh=1080&mw=1380",
    label: "Ship cabin lot",
    category: "Cabin Interior",
    title: "Ship Cabin Interior & Wooden Units",
    quantity: "80 cabin sets available",
    description:
      "Cruise cabin bedroom furniture, desks, mirrors and storage units for glamping pods, boutique hotels, hostels and tiny homes.",
    newValue: "€350",
    price: "€120",
    saving: "66%",
    note: "Demo estimate based on comparable cruise cabin furniture sets and volume.",
    origin: "Marseille, France",
    priceLine: "From €120 per set",
    seller: "Verified interior broker",
    photo: "Cruise cabin image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/cabins/tile-image/armonia-balcony.jpg?as=1&bc=transparent&hash=2CF228DF2D94963E942D84E065A0F061&mh=1080&mw=1380",
    label: "Balcony cabin lot",
    category: "Cabin Furniture",
    title: "Cruise Balcony Cabin Furniture",
    quantity: "60 cabin sets available",
    description:
      "Cabin beds, desks, side units, mirrors and compact storage pieces from cruise-style accommodation interiors.",
    newValue: "€500",
    price: "€190",
    saving: "62%",
    note: "Demo estimate based on comparable cabin furniture, condition and quantity.",
    origin: "Dover, United Kingdom",
    priceLine: "From €190 per set",
    seller: "Verified cruise interior seller",
    photo: "Cruise balcony cabin image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/cabins/tile-image/armonia-interior.jpg?as=1&bc=transparent&hash=E125EF874315E98492858FF9A32A5CAC&mh=1080&mw=1380",
    label: "Interior cabin lot",
    category: "Compact Maritime Interior",
    title: "Cruise Interior Cabin Furniture",
    quantity: "95 cabin sets available",
    description:
      "Compact cruise cabin interior pieces, ideal for themed accommodation, hostels, glamping builds and tiny-home projects.",
    newValue: "€420",
    price: "€150",
    saving: "64%",
    note: "Demo estimate based on comparable cabin furniture sets and commercial reuse value.",
    origin: "Barcelona, Spain",
    priceLine: "From €150 per set",
    seller: "Verified cabin interior broker",
    photo: "Cruise interior cabin image",
    source: "https://www.msccruises.com/",
  },
];

function StatCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl md:rounded-3xl">
      <p className="text-[2rem] font-black leading-none text-white md:text-3xl">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071013] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#071013]/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black text-[#071013] md:h-10 md:w-10 md:text-sm">
              S
            </div>

            <div className="min-w-0">
              <p className="truncate text-[0.95rem] font-bold tracking-[0.16em] text-white md:text-sm md:tracking-[0.22em]">
                Salvage Harbor
              </p>
              <p className="hidden text-xs text-white/50 sm:block">
                Verified cruise & ship salvage
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
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
            className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#071013] transition hover:bg-cyan-200 md:px-5 md:py-2.5"
          >
            Request access
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#071013]">
        <div className="absolute inset-0 hidden min-h-[100svh] overflow-hidden md:block">
          <iframe
            className="pointer-events-none absolute left-1/2 top-1/2 aspect-video h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 scale-110"
            src={`https://www.youtube.com/embed/${youtubeHeroVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeHeroVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=25`}
            title="Cruise ship interior and exterior background video"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        </div>

        <div className="absolute inset-0 min-h-[100svh] bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.18),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(255,255,255,0.10),transparent_28%),linear-gradient(135deg,#071013_0%,#0b2028_45%,#111827_100%)] md:hidden" />

        <div className="absolute inset-0 bg-[#071013]/48 md:bg-[#071013]/42" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071013] via-[#071013]/70 to-[#071013]/10 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-transparent to-[#071013]/15" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-28 md:min-h-screen md:px-8 md:pb-28 md:pt-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex max-w-[340px] rounded-full border border-white/20 bg-white/10 px-5 py-3 text-base font-medium leading-6 text-white backdrop-blur-xl md:max-w-none md:items-center md:gap-2 md:px-4 md:py-2 md:text-sm">
              Verified European cruise & ship salvage marketplace
            </div>

            <h1 className="max-w-[700px] text-[3rem] font-black leading-[0.9] tracking-[-0.08em] text-white sm:text-[4.2rem] md:text-8xl">
              Maritime interiors with a second life.
            </h1>

            <p className="mt-6 max-w-[650px] text-[1.05rem] leading-8 text-white/80 sm:text-lg md:mt-7 md:text-xl md:leading-8 md:text-white/75">
              Verified cruise, yacht and ship interiors for hotels,
              restaurants, glamping concepts, event builders and collectors.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">
              <a
                href="#marketplace"
                className="w-full rounded-full bg-white px-8 py-4 text-center text-[0.95rem] font-black uppercase tracking-[0.18em] text-[#071013] transition hover:bg-cyan-200 sm:w-auto"
              >
                Explore marketplace
              </a>

              <a
                href={mailToSeller}
                className="w-full rounded-full border border-white/25 bg-white/5 px-8 py-4 text-center text-[0.95rem] font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:bg-white/15 sm:w-auto"
              >
                Apply as seller
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-12">
              <StatCard
                title="Ship"
                text="Only cruise, ship, yacht or maritime-related inventory"
              />
              <StatCard title="10%" text="Success commission" />
              <StatCard
                title="Save"
                text="Estimated savings versus buying new"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200 md:text-sm">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">
              A simple way to buy verified cruise and ship interiors.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/70 md:space-y-6 md:text-lg">
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

      <section
        id="categories"
        className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200 md:text-sm">
            High-value categories
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl">
            Not random furniture. Real cruise, ship and yacht interiors.
          </h2>

          <p className="mt-5 text-base leading-8 text-white/65 md:mt-6 md:text-lg">
            Cruise ships are floating hotels. That means valuable furniture,
            horeca equipment, casino items, theatre seating and decorative
            pieces can be resold as professional project-ready lots.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <article
              key={item.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07] md:rounded-[2rem] md:p-7"
            >
              <div className="mb-6 flex items-center justify-between md:mb-8">
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
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200 md:text-sm">
                Sourcing & Trust
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl">
                Where the inventory can come from.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/65 md:mt-6 md:text-lg">
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
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 md:rounded-[2rem]"
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

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200 md:text-sm">
              Who buys this inventory?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl">
              One cruise ship can supply an entire hotel, event venue or
              glamping concept.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65 md:mt-6 md:text-lg">
              Matching deck chairs, dining furniture, bar counters, theatre
              seats, casino equipment and cabin furniture are easier to sell
              when positioned as complete commercial lots.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {buyers.map((buyer) => (
              <div
                key={buyer}
                className="flex min-h-24 items-end rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 font-black text-white md:min-h-28 md:rounded-3xl md:p-5"
              >
                {buyer}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200 md:text-sm">
              Typical supply sources
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl">
              Built for a fragmented salvage market.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-base leading-8 text-white/65 md:text-lg">
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

      <section
        id="marketplace"
        className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200 md:text-sm">
              Marketplace preview
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl">
              Cruise deck seating, dining rooms, casino lots and ship interiors.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65 md:mt-6 md:text-lg">
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
