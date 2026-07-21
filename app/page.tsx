const contactEmail = "info@celaris.nl";

const mailToSeller =
  "mailto:info@celaris.nl?subject=Salvage%20Harbor%20supply%20partner%20application";

const mailToBuyer =
  "mailto:info@celaris.nl?subject=Salvage%20Harbor%20quotation%20request";

/* -------------------------------------------------------------------------- */
/*                              MARKET CATEGORIES                             */
/* -------------------------------------------------------------------------- */

const categories = [
  {
    number: "01",
    title: "Maritime & Cruise Salvage",
    text: "Portholes, ship lighting, signage, furniture and authentic maritime objects recovered from vessels, ferries and cruise interiors.",
  },
  {
    number: "02",
    title: "Hotels & Hospitality",
    text: "Lobby furniture, mirrors, lighting, bedroom furniture and decorative pieces from hotels, resorts and hospitality renovations.",
  },
  {
    number: "03",
    title: "Restaurants & Bars",
    text: "Tables, chairs, bar counters, lighting, wine storage and statement interiors from restaurants, bars and beach clubs.",
  },
  {
    number: "04",
    title: "Architectural & Industrial Pieces",
    text: "Doors, panels, lockers, metalwork, oversized lighting and unusual structural objects from distinctive commercial spaces.",
  },
];

/* -------------------------------------------------------------------------- */
/*                               SUPPLY SOURCES                               */
/* -------------------------------------------------------------------------- */

const sourcing = [
  {
    title: "Ships, ferries & cruise refits",
    text: "Furniture, lighting, signage, cabin components and hospitality equipment can become available during refits, renovations and responsible vessel recycling.",
  },
  {
    title: "Hotels & resorts",
    text: "Hotels regularly renovate bedrooms, lobbies, restaurants and public spaces, creating matching lots of professional furniture and decorative inventory.",
  },
  {
    title: "Restaurants, bars & beach clubs",
    text: "Closed businesses and hospitality renovations can create valuable lots of tables, chairs, counters, lighting, wine storage and kitchen-adjacent equipment.",
  },
  {
    title: "Liquidators & professional resellers",
    text: "Salvage Harbor works with professional buyers, liquidators, contractors and resellers that can provide clear origin information and commercial quantities.",
  },
];

const buyers = [
  "Hotels",
  "Restaurants",
  "Interior designers",
  "Glamping businesses",
  "Event builders",
  "Beach clubs",
  "Property developers",
  "Collectors",
];

const supplySources = [
  "Cruise refits",
  "Hotel renovations",
  "Closed restaurants",
  "Commercial refits",
  "Liquidators",
  "Professional resellers",
  "Auction houses",
  "Recycling yards",
];

const buyerBenefits = [
  {
    title: "Unique provenance",
    text: "Distinctive pieces with a real history and a clear professional source.",
  },
  {
    title: "Circular reuse",
    text: "Reusable interiors receive a new purpose instead of becoming unnecessary waste.",
  },
  {
    title: "European sourcing",
    text: "Inventory is sourced from selected professional suppliers across Europe.",
  },
];

const sellerBenefits = [
  "No upfront listing costs",
  "Inventory can remain at your location",
  "Professional presentation",
  "Access to new buyer groups",
  "Commission only after a successful sale",
];

/* -------------------------------------------------------------------------- */
/*                              MARKETPLACE ITEMS                             */
/* -------------------------------------------------------------------------- */

const listings = [
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/bars/palm-beach-casino-bar-msc-armonia.jpg?as=1&bc=transparent&hash=5FEFF38A850A020708304E2772C972D2&mh=720&mw=920",
    label: "Maritime entertainment lot",
    category: "Maritime & Cruise Salvage",
    title: "Cruise Casino Roulette Equipment",
    quantity: "8 roulette tables available",
    description:
      "Commercial roulette equipment and casino furniture suitable for entertainment concepts, event builders and themed hospitality projects.",
    sourceOrigin: "Recovered from a passenger vessel",
    location: "Antalya, Turkey",
    condition: "Used — professionally removed",
    dimensions: "Approx. 240 × 140 × 90 cm per table",
    seller: "Verified cruise liquidator",
    newValue: "€4,000",
    price: "€1,950",
    saving: "51%",
    note: "Indicative demo pricing based on comparable commercial-grade equipment, condition and available volume.",
    source: "https://www.msccruises.com/",
    photo: "Cruise casino interior image",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/restaurants/armonia-restaurant-il-girasole.jpg?as=1&bc=transparent&hash=0C08D3A9404A779BA78E3B519ADC768C&mh=1080&mw=1380",
    label: "Hospitality furniture lot",
    category: "Restaurants & Bars",
    title: "Outdoor Restaurant Furniture Collection",
    quantity: "160 chairs + 45 tables",
    description:
      "Matching commercial outdoor furniture suitable for hotels, restaurants, beach clubs, terraces and glamping locations.",
    sourceOrigin: "Recovered from a passenger vessel",
    location: "Izmir, Turkey",
    condition: "Used — good commercial condition",
    dimensions: "Mixed sizes — inventory list available",
    seller: "Verified shipyard broker",
    newValue: "€350",
    price: "€120",
    saving: "66%",
    note: "Indicative price per item. Final pricing depends on the selected quantity and transport requirements.",
    source: "https://www.msccruises.com/",
    photo: "Cruise deck restaurant image",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/entertainment/armonia-entertainment-theatre-show.jpg?as=1&bc=transparent&hash=063B54676573C89AFF485B65CF899542&mh=1080&mw=1380",
    label: "Commercial seating lot",
    category: "Architectural & Industrial Pieces",
    title: "Theatre & Auditorium Seating",
    quantity: "320 seats available",
    description:
      "Commercial theatre seating suitable for cinemas, universities, event locations, private theatres and redevelopment projects.",
    sourceOrigin: "Recovered from a passenger vessel",
    location: "Genoa, Italy",
    condition: "Used — removal marks possible",
    dimensions: "Approx. 55 × 65 × 95 cm per seat",
    seller: "Verified maritime inventory seller",
    newValue: "€350",
    price: "€85",
    saving: "76%",
    note: "Indicative unit price based on purchase volume. Mounting and installation are not included.",
    source: "https://www.msccruises.com/",
    photo: "Cruise theatre image",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/restaurants/armonia-restaurant-la-pergola.jpg?as=1&bc=transparent&hash=7496C6F776D98C0C984D47B008D21768&mh=1080&mw=1380",
    label: "Restaurant interior lot",
    category: "Restaurants & Bars",
    title: "Dining Chair & Table Collection",
    quantity: "240 chairs + 60 tables",
    description:
      "A coordinated commercial dining collection for restaurants, hotels, wedding venues, cafés and large hospitality refurbishments.",
    sourceOrigin: "Sourced from a closed restaurant interior",
    location: "Hamburg, Germany",
    condition: "Used — good condition",
    dimensions: "Mixed dimensions — specification on request",
    seller: "Verified professional reseller",
    newValue: "€180",
    price: "€65",
    saving: "64%",
    note: "Indicative price per item. Matching quantities and combinations are subject to availability.",
    source: "https://www.msccruises.com/",
    photo: "Commercial dining room image",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/bars/palm-beach-casino-bar-msc-armonia.jpg?as=1&bc=transparent&hash=5FEFF38A850A020708304E2772C972D2&mh=720&mw=920",
    label: "Bar interior package",
    category: "Restaurants & Bars",
    title: "Bar Stools & Counter Collection",
    quantity: "42 stools + bar counter",
    description:
      "A commercial bar furniture package for cocktail bars, restaurants, event concepts, beach clubs and hospitality developments.",
    sourceOrigin: "Supplied by a verified professional reseller",
    location: "Edinburgh, United Kingdom",
    condition: "Used — refurbishment recommended",
    dimensions: "Counter dimensions supplied on request",
    seller: "Verified hospitality liquidator",
    newValue: "€250",
    price: "€90",
    saving: "64%",
    note: "Indicative unit pricing. Counter, stools and additional elements can be quoted separately.",
    source: "https://www.msccruises.com/",
    photo: "Commercial casino bar image",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/cabins/tile-image/armonia-ocean-view.jpg?as=1&bc=transparent&hash=B4971B732D9EEA7C9FA02F50D12BE876&mh=1080&mw=1380",
    label: "Bedroom furniture lot",
    category: "Hotels & Hospitality",
    title: "Compact Bedroom Interior Sets",
    quantity: "80 interior sets available",
    description:
      "Compact bedroom furniture, desks, mirrors and storage units for hotels, hostels, glamping pods and serviced accommodation.",
    sourceOrigin: "Reclaimed from a hospitality renovation",
    location: "Marseille, France",
    condition: "Used — good reusable condition",
    dimensions: "Set dimensions vary by component",
    seller: "Verified interior broker",
    newValue: "€350",
    price: "€120",
    saving: "66%",
    note: "Indicative set price. Contents, quantities and condition can vary between individual sets.",
    source: "https://www.msccruises.com/",
    photo: "Hospitality bedroom interior image",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/cabins/tile-image/armonia-balcony.jpg?as=1&bc=transparent&hash=2CF228DF2D94963E942D84E065A0F061&mh=1080&mw=1380",
    label: "Hospitality room collection",
    category: "Hotels & Hospitality",
    title: "Bedroom Furniture & Storage Units",
    quantity: "60 room sets available",
    description:
      "Beds, desks, side units, mirrors and compact storage pieces suitable for hotels, resorts, hostels and glamping developments.",
    sourceOrigin: "Reclaimed from a boutique hospitality interior",
    location: "Dover, United Kingdom",
    condition: "Used — cosmetic wear possible",
    dimensions: "Individual component list available",
    seller: "Verified hospitality inventory seller",
    newValue: "€500",
    price: "€190",
    saving: "62%",
    note: "Indicative set price based on comparable commercial room furniture and available quantities.",
    source: "https://www.msccruises.com/",
    photo: "Hospitality balcony room image",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/cabins/tile-image/armonia-interior.jpg?as=1&bc=transparent&hash=E125EF874315E98492858FF9A32A5CAC&mh=1080&mw=1380",
    label: "Compact interior lot",
    category: "Hotels & Hospitality",
    title: "Compact Hospitality Furniture Sets",
    quantity: "95 interior sets available",
    description:
      "Compact commercial furniture for themed accommodation, hostels, glamping concepts, serviced rooms and adaptive reuse projects.",
    sourceOrigin: "Supplied by a verified professional reseller",
    location: "Barcelona, Spain",
    condition: "Used — project-ready after inspection",
    dimensions: "Mixed components and dimensions",
    seller: "Verified professional reseller",
    newValue: "€420",
    price: "€150",
    saving: "64%",
    note: "Indicative set price. Exact composition and availability are confirmed during the quotation process.",
    source: "https://www.msccruises.com/",
    photo: "Compact hospitality interior image",
  },
];

/* -------------------------------------------------------------------------- */
/*                              REUSABLE ELEMENTS                             */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200 md:text-sm">
        {label}
      </p>

      <h2 className="mt-4 break-words text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {text ? (
        <p className="mt-5 text-base leading-8 text-white/65 md:mt-6 md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function ListingDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <p className="text-[0.65rem] font-black uppercase tracking-[0.17em] text-white/35">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold leading-6 text-white/75">
        {value}
      </p>
    </div>
  );
}

function ListingCard({
  listing,
}: {
  listing: (typeof listings)[number];
}) {
  return (
    <article className="min-w-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a171b] shadow-2xl shadow-black/20 md:rounded-[2rem]">
      <div className="relative h-64 overflow-hidden sm:h-72 md:h-80">
        <img
          src={listing.image}
          alt={listing.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-[#071013]/10 to-transparent" />

        <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full bg-white px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#071013] md:left-5 md:top-5">
          {listing.label}
        </div>
      </div>

      <div className="p-5 md:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 md:text-sm">
          {listing.category}
        </p>

        <h3 className="mt-3 break-words text-2xl font-black tracking-[-0.05em] text-white md:text-3xl">
          {listing.title}
        </h3>

        <p className="mt-2 font-bold text-white/80">{listing.quantity}</p>

        <p className="mt-4 leading-7 text-white/60">{listing.description}</p>

        {/* Product provenance and practical information */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ListingDetail label="Source / origin" value={listing.sourceOrigin} />
          <ListingDetail label="Location" value={listing.location} />
          <ListingDetail label="Condition" value={listing.condition} />
          <ListingDetail label="Dimensions" value={listing.dimensions} />
        </div>

        <div className="mt-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] p-4">
          <p className="text-[0.65rem] font-black uppercase tracking-[0.17em] text-cyan-200">
            Verified seller
          </p>

          <p className="mt-2 text-sm font-bold text-white">{listing.seller}</p>
        </div>

        {/* Existing pricing structure retained */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/[0.05] p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.16em] text-white/40">
              Estimated original value
            </p>

            <p className="mt-1 text-xl font-black line-through decoration-white/40">
              {listing.newValue}
            </p>
          </div>

          <div className="rounded-2xl bg-cyan-300 p-4 text-[#071013]">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] opacity-60">
              Salvage Harbor price
            </p>

            <p className="mt-1 text-xl font-black">{listing.price}</p>
          </div>

          <div className="rounded-2xl bg-white/[0.05] p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.16em] text-white/40">
              Potential saving
            </p>

            <p className="mt-1 text-xl font-black text-cyan-200">
              {listing.saving}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-white/45">{listing.note}</p>

        {/* Pilot quotation model — no automated payment claims */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-sm font-bold text-white">
            Managed quotation process
          </p>

          <p className="mt-2 text-sm leading-6 text-white/55">
            Availability, exact condition, collection and delivery are confirmed
            through a managed quotation. Transport is calculated separately
            based on the item, seller location and buyer destination.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={mailToBuyer}
            className="inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-[#071013] transition hover:bg-cyan-200 sm:w-auto"
          >
            Request quotation
          </a>

          <a
            href={listing.source}
            target="_blank"
            rel="noreferrer"
            className="text-center text-xs text-white/35 underline transition hover:text-white/60 sm:text-left"
          >
            {listing.photo}
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#071013] text-white">
      {/* Existing navigation structure retained */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#061014]/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-3 sm:px-4 md:px-8 md:py-4">
          <a href="#" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[#071013] sm:h-10 sm:w-10 sm:text-sm">
              S
            </div>

            <div className="min-w-0">
              <p className="truncate text-[0.76rem] font-bold tracking-[0.1em] text-white sm:text-[0.88rem] sm:tracking-[0.14em] md:text-sm md:tracking-[0.2em]">
                Salvage Harbor
              </p>

              <p className="hidden text-xs text-white/45 sm:block">
                Curated reclaimed interiors
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
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
              Collection
            </a>
          </nav>

          <a
            href={mailToSeller}
            className="shrink-0 rounded-full bg-white px-3 py-2.5 text-xs font-bold text-[#071013] transition hover:bg-cyan-200 sm:px-4 sm:text-sm md:px-5"
          >
            Sell inventory
          </a>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* HERO — existing maritime video and structure retained              */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative min-h-[760px] overflow-hidden bg-[#071013] sm:min-h-[800px] md:min-h-screen">
        {/* Mobile background remains lightweight to avoid autoplay problems */}
        <div className="absolute inset-0 md:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(74,214,239,0.14),transparent_34%),linear-gradient(145deg,#061014_0%,#0a2027_52%,#071013_100%)]" />

          <div className="absolute -right-28 top-32 h-72 w-72 rounded-full border border-cyan-100/10" />

          <div className="absolute -left-24 bottom-28 h-64 w-64 rounded-full bg-cyan-300/10 blur-[100px]" />
        </div>

        {/* Existing cruise video retained for desktop */}
        <div className="absolute inset-0 hidden overflow-hidden md:block">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/salvage-harbor-intro.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-[#061014]/46 md:bg-[#061014]/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061014] via-[#061014]/78 to-[#061014]/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061014] via-transparent to-[#061014]/35" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-4 pb-16 pt-28 sm:min-h-[800px] sm:pb-20 md:min-h-screen md:px-8 md:pb-24 md:pt-32">
          <div className="w-full max-w-[790px]">
            <div className="mb-6 inline-flex max-w-full rounded-full border border-white/15 bg-black/15 px-4 py-2 text-[0.65rem] font-bold uppercase leading-5 tracking-[0.14em] text-white/75 backdrop-blur-xl sm:text-xs md:text-sm">
              Curated European marketplace for reclaimed interiors
            </div>

            <h1 className="max-w-[780px] break-words text-[2.85rem] font-black leading-[0.91] tracking-[-0.07em] text-white sm:text-[4.4rem] md:text-[5.65rem]">
              Rare interiors. Remarkable second lives.
            </h1>

            <p className="mt-7 max-w-[680px] text-base leading-8 text-white/72 sm:text-lg md:text-xl">
              Discover reclaimed furniture, lighting and distinctive objects
              sourced from ships, hotels, restaurants and unique commercial
              spaces across Europe.
            </p>

            <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a
                href="#marketplace"
                className="w-full rounded-full bg-white px-6 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-[#071013] transition hover:bg-cyan-200 sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.17em]"
              >
                Explore the collection
              </a>

              <a
                href={mailToSeller}
                className="w-full rounded-full border border-white/25 bg-white/[0.04] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl transition hover:bg-white/10 sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.17em]"
              >
                Sell your inventory
              </a>
            </div>

            <p className="mt-6 text-sm leading-7 text-white/50">
              Curated inventory. Verified professional sellers. European
              sourcing.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/15 pt-5 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-white/42 sm:mt-12 sm:gap-x-6 sm:text-xs md:text-sm">
              <span>Maritime heritage</span>
              <span className="hidden h-1 w-1 rounded-full bg-cyan-200/70 sm:block" />
              <span>Commercial interiors</span>
              <span className="hidden h-1 w-1 rounded-full bg-cyan-200/70 sm:block" />
              <span>Managed quotations</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35 md:flex">
          Scroll to explore
          <span className="h-px w-12 bg-white/30" />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* POSITIONING                                                        */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="what-we-do"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            label="What we do"
            title="A curated marketplace for interiors that deserve another chapter."
          />

          <div className="space-y-5 text-base leading-8 text-white/70 md:space-y-6 md:text-lg">
            <p>
              Salvage Harbor connects remarkable reclaimed interiors with a new
              generation of buyers.
            </p>

            <p>
              We source distinctive furniture, lighting, architectural pieces
              and maritime objects from ships, hotels, restaurants, bars and
              commercial spaces.
            </p>

            <p>
              This is not a general second-hand webshop. Inventory is selected
              for its provenance, commercial quality, distinctive appearance or
              potential for professional reuse.
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

      {/* ------------------------------------------------------------------ */}
      {/* CATEGORIES — same card style, reduced to four broader categories   */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="categories"
        className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20"
      >
        <SectionHeading
          label="Curated categories"
          title="Distinctive inventory from maritime, hospitality and commercial spaces."
          text="Every category is focused on reusable objects with professional quality, visual character and a credible source."
        />

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
          {categories.map((item) => (
            <article
              key={item.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07] md:rounded-[2rem] md:p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-sm font-black text-cyan-200">
                  {item.number}
                </span>

                <span className="text-sm text-white/35 transition group-hover:text-cyan-200">
                  View category →
                </span>
              </div>

              <h3 className="break-words text-2xl font-black tracking-[-0.04em] text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-white/60">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SOURCING                                                           */}
      {/* ------------------------------------------------------------------ */}

      <section id="sourcing" className="border-y border-white/10 bg-[#0a171b]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              label="Sourcing & trust"
              title="Professional supply from selected European sources."
              text="The platform works with maritime businesses, hospitality companies, refit specialists, commercial property owners, liquidators and professional resellers."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {sourcing.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 md:rounded-[2rem]"
                >
                  <h3 className="text-xl font-black tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* BUYERS                                                             */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            label="For buyers"
            title="Designed for spaces with a story."
            text="Salvage Harbor helps hotels, restaurants, interior designers, glamping businesses, event builders and collectors find distinctive reclaimed pieces that cannot be ordered from a standard catalogue."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {buyerBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 md:min-h-44 md:rounded-3xl"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-[#071013]">
                  ✓
                </div>

                <h3 className="mt-5 text-xl font-black tracking-[-0.04em] text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-12">
          {buyers.map((buyer) => (
            <div
              key={buyer}
              className="flex min-h-24 items-end rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 font-black text-white md:min-h-28 md:rounded-3xl md:p-5"
            >
              {buyer}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SUPPLY SOURCES                                                     */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            label="Typical supply sources"
            title="Built for a fragmented professional resale market."
          />

          <div>
            <p className="max-w-3xl text-base leading-8 text-white/65 md:text-lg">
              Valuable interiors are often spread across shipyards, hotels,
              closed hospitality businesses, auction houses, renovation
              contractors and professional resellers. Salvage Harbor makes this
              supply easier to discover and evaluate.
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

      {/* ------------------------------------------------------------------ */}
      {/* MARKETPLACE                                                        */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="marketplace"
        className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            label="Collection preview"
            title="Selected reclaimed interiors with credible origins."
            text="Every listing includes its source, location, condition, dimensions, seller status, estimated original value, Salvage Harbor price and potential saving."
          />

          <a
            href={mailToBuyer}
            className="shrink-0 rounded-full border border-cyan-300/40 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-cyan-100 transition hover:bg-cyan-300 hover:text-[#071013]"
          >
            Request an item
          </a>
        </div>

        <div className="mt-10 grid min-w-0 gap-6 md:mt-12 md:gap-8 lg:grid-cols-2">
          {listings.map((listing) => (
            <ListingCard key={listing.title} listing={listing} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SALES MODEL                                                        */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-y border-white/10 bg-[#0a171b]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            label="Pilot sales model"
            title="Managed quotations for large and distinctive objects."
            text="Salvage Harbor is starting with selected inventory and a personal quotation process rather than an anonymous automated checkout."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Selected inventory",
                text: "The pilot focuses on distinctive items and commercial lots that benefit from professional presentation and buyer guidance.",
              },
              {
                title: "Quotation requests",
                text: "Buyers submit an enquiry. Availability, exact contents, condition and commercial terms are then confirmed.",
              },
              {
                title: "Separate delivery calculation",
                text: "Delivery is calculated separately based on the item, seller location, loading requirements and buyer destination.",
              },
              {
                title: "Inventory stays with the seller",
                text: "Items can remain at the supplier's location until collection or delivery has been agreed.",
              },
              {
                title: "Professional supply partners",
                text: "Sellers must provide clear company information, product details, photographs and credible origin information.",
              },
              {
                title: "Commission after a sale",
                text: "Salvage Harbor charges commission only after a successful transaction has been agreed.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 md:rounded-[2rem]"
              >
                <h3 className="text-xl font-black tracking-[-0.04em] text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-white/60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SELLERS                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="sellers"
        className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20"
      >
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300 text-[#071013] md:rounded-[2.5rem]">
          <div className="grid gap-10 p-6 md:p-12 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] opacity-60">
                For suppliers
              </p>

              <h2 className="mt-4 break-words text-3xl font-black tracking-[-0.06em] sm:text-4xl md:text-6xl">
                Turn unused inventory into new value.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 opacity-75 md:text-lg">
                We work with ship recyclers, hotels, restaurants, refit
                companies, liquidators, professional resellers and commercial
                property owners to give reusable interiors and equipment a new
                sales channel.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {sellerBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-2xl border border-[#071013]/15 bg-white/20 p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#071013] text-xs font-black text-white">
                      ✓
                    </span>

                    <p className="text-sm font-bold leading-6">{benefit}</p>
                  </div>
                ))}
              </div>

              <p className="mt-7 text-lg font-black">
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
                className="rounded-full bg-[#071013] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#10242a] md:px-7 md:tracking-[0.16em]"
              >
                Become a supply partner
              </a>

              <a
                href={mailToBuyer}
                className="rounded-full border border-[#071013]/25 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-[#071013] transition hover:bg-[#071013]/10 md:px-7 md:tracking-[0.16em]"
              >
                Submit a sourcing request
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SUBTLE PILOT NOTICE                                                */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] px-5 py-5 text-sm leading-7 text-white/45 md:px-7">
          Salvage Harbor is currently operating as a pilot platform. Product
          availability and transactional features are being developed together
          with selected supply partners.
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                             */}
      {/* ------------------------------------------------------------------ */}

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 text-sm text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p>© 2026 Salvage Harbor Europe</p>

            <p className="mt-2 text-xs text-white/35">
              Curated reclaimed interiors from European professional suppliers.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span>Curated inventory</span>
            <span>Verified sellers</span>
            <span>European sourcing</span>
            <span>Managed quotations</span>

            <a
              href={`mailto:${contactEmail}`}
              className="font-bold text-cyan-200"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
