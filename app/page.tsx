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
    text: "Deck chairs, lounge seats, theatre seating, restaurant chairs and bar stools in commercial volumes.",
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
    label: "Cruise theatre lot",
    category: "Entertainment Interior",
    title: "Cruise Theatre & Auditorium Seating",
    quantity: "320 seats available",
    description:
      "Cruise ship theatre seating suitable for cinemas, universities, event halls and private theatres.",
    newValue: "€350",
    price: "€85",
    saving: "76%",
    note: "Demo estimate based on comparable theatre seating, condition and volume.",
    origin: "Genoa, Italy",
    priceLine: "From €85 per seat",
    seller: "Verified cruise inventory seller",
    photo: "Cruise theatre image",
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
      "Cruise casino and bar interior package for cocktail bars, rooftop venues, beach clubs and event builders.",
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

      <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">
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

function ListingCard({
  listing,
}: {
  listing: (typeof listings)[number];
}) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a171b] shadow-2xl shadow-black/20 md:rounded-[2rem]">
      <div className="relative h-72 overflow-hidden md:h-80">
        <img
          src={listing.image}
          alt={listing.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-[#071013]/10 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#071013] md:left-5 md:top-5">
          {listing.label}
        </div>
      </div>

      <div className="p-5 md:p-7">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
          {listing.category}
        </p>

        <h3 className="mt-3 text-2xl font-black tracking-[-0.05em] text-white md:text-3xl">
          {listing.title}
        </h3>

        <p className="mt-2 font-bold text-white/80">{listing.quantity}</p>

        <p className="mt-4 leading-7 text-white/60">{listing.description}</p>

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

        <p className="mt-4 text-sm leading-6 text-white/45">{listing.note}</p>

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
            <span className="font-bold text-white">Platform fee</span> 10%
            success commission
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-sm font-bold text-white">Secure payment</p>

          <p className="mt-2 text-sm leading-6 text-white/55">
            Payment is processed through Salvage Harbor. Funds are only released
            to the seller once the buyer has received and approved the
            corresponding items.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={mailToBuyer}
            className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-[#071013] transition hover:bg-cyan-200"
          >
            Request lot
          </a>

          <a
            href={listing.source}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-white/35 underline"
          >
            {listing.photo}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#071013] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#061014]/65 backdrop-blur
