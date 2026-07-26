"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const contactEmail = "info@celaris.nl";
const heroVideo = "/salvage-harbor-intro.mp4";

type CategoryId =
  | "all"
  | "gyms"
  | "restaurants"
  | "hotels"
  | "maritime"
  | "retail"
  | "offices"
  | "events"
  | "industrial";

type SaleType = "Individual item" | "Bulk lot" | "Complete inventory";

type LogisticsStatus =
  | "Ready for collection"
  | "Packaging required"
  | "Palletised"
  | "Specialist transport required"
  | "Buyer collection only"
  | "Delivery available";

type RouteName =
  | "home"
  | "marketplace"
  | "listing"
  | "complete"
  | "how"
  | "logistics"
  | "documentation"
  | "sellers"
  | "about"
  | "contact";

type RouteState = {
  page: RouteName;
  category?: CategoryId;
  listingId?: string;
};

type Listing = {
  id: string;
  title: string;
  categoryId: Exclude<CategoryId, "all">;
  image: string;
  gallery: string[];
  alt: string;
  shortDescription: string;
  longDescription: string;
  country: string;
  location: string;
  condition: string;
  quantity: string;
  sellerType: string;
  sellerName: string;
  availability: string;
  saleType: SaleType;
  originalValue: number;
  price: number;
  origin: string;
  dimensions: string;
  weight: string;
  units: string;
  brandModel: string;
  serialNumber: string;
  year: string;
  knownDamage: string;
  floorAccess: string;
  palletisable: string;
  packagingIncluded: string;
  forklift: string;
  loadingDock: string;
  pickup: string;
  delivery: string;
  collectionDeadline: string;
  packaged: string;
  palletDimensions: string;
  groundFloor: string;
  stairsLift: string;
  disassembly: string;
  sellerPackaging: string;
  logisticsStatus: LogisticsStatus;
  transportClass: string;
  documents: string[];
  badges: string[];
  example: boolean;
};

type CompleteInventory = {
  id: string;
  title: string;
  categoryId: Exclude<CategoryId, "all">;
  image: string;
  alt: string;
  projectType: string;
  location: string;
  assetCount: string;
  indicativePrice: number;
  separateSales: string;
  availableFrom: string;
  collectionWindow: string;
  loading: string;
};

const formatEuro = (value: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

const encodeSubject = (subject: string) => encodeURIComponent(subject);

const IMG = {
  gymWeights:
    "https://images.unsplash.com/photo-1630703178161-1e2f9beddbf8?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  gymTreadmills:
    "https://images.unsplash.com/photo-1757924284732-4189190321cf?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  gymLockers:
    "https://images.unsplash.com/photo-1781274326569-7120016a6c7e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  spaPool:
    "https://images.unsplash.com/photo-1776763255459-99ddd8eebbfc?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  spaLounge:
    "https://images.unsplash.com/photo-1773924093206-9a433a14bb44?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  steamRoom:
    "https://images.unsplash.com/photo-1761470575018-135c213340eb?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",

  restaurantModern:
    "https://images.unsplash.com/photo-1774125384841-53bb49b1e88d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  restaurantOpenPlan:
    "https://images.unsplash.com/photo-1761426186983-b380a4474a85?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  restaurantLuxury:
    "https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  hotelLobbyWarm:
    "https://images.unsplash.com/photo-1759038086454-5644437ccf4c?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  hotelLobbyGrand:
    "https://images.unsplash.com/photo-1767395523555-c44546bea0f0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  hotelRoomClassic:
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  hotelRoomTv:
    "https://images.unsplash.com/photo-1725962269029-e845b85e5ebf?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  hotelBedLamp:
    "https://images.unsplash.com/photo-1711059985570-4c32ed12a12c?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",

  retailCounter:
    "https://images.unsplash.com/photo-1757817301348-f91ce527b09b?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  retailShelves:
    "https://images.unsplash.com/photo-1782177676949-f4af85ae4ff2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  retailDisplays:
    "https://images.unsplash.com/photo-1764795849755-ab58c8fef307?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",

  officeGlass:
    "https://images.unsplash.com/photo-1765371514743-45bd8e6c0a28?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  officeOpen:
    "https://images.unsplash.com/photo-1758630737900-a28682c5aa69?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  officeMeeting:
    "https://images.unsplash.com/photo-1782406747384-21f031c33fb4?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  officeMeetingSmall:
    "https://images.unsplash.com/photo-1755551629738-6b1743742cba?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  officeMeetingColor:
    "https://images.unsplash.com/photo-1782406747392-99155c37380e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",

  eventBeachBar:
    "https://images.unsplash.com/photo-1777159783892-b34945c3439f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  eventBanquet:
    "https://images.unsplash.com/photo-1768508951405-10e83c4a2872?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  eventBarn:
    "https://images.unsplash.com/photo-1780337092608-aad7948d7a60?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  eventBeachEntrance:
    "https://images.unsplash.com/photo-1781641500778-603cd9ac4f51?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",

  industrialWide:
    "https://images.unsplash.com/photo-1776090188315-c481a5753867?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  industrialCrane:
    "https://images.unsplash.com/photo-1781156771445-404a80d7ee7a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  industrialWarehouse:
    "https://images.unsplash.com/photo-1781156215907-e3b8da4091b0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  industrialPolished:
    "https://images.unsplash.com/photo-1772300704502-410f0fbd43bb?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  industrialHall:
    "https://images.unsplash.com/photo-1782879306457-6097fa874618?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  industrialPipes:
    "https://images.unsplash.com/photo-1776524039930-ea1ed83b0f97?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  factoryModel:
    "https://images.unsplash.com/photo-1784649302250-1418b566b0c1?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",

  shipBar:
    "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/bars/palm-beach-casino-bar-msc-armonia.jpg?as=1&bc=transparent&hash=5FEFF38A850A020708304E2772C972D2&mh=720&mw=920",
  shipDining:
    "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/restaurants/armonia-restaurant-il-girasole.jpg?as=1&bc=transparent&hash=0C08D3A9404A779BA78E3B519ADC768C&mh=1080&mw=1380",
  shipTheatre:
    "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/entertainment/armonia-entertainment-theatre-show.jpg?as=1&bc=transparent&hash=063B54676573C89AFF485B65CF899542&mh=1080&mw=1380",
  shipCabin:
    "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/cabins/tile-image/armonia-ocean-view.jpg?as=1&bc=transparent&hash=B4971B732D9EEA7C9FA02F50D12BE876&mh=1080&mw=1380",
};

const CATEGORY_META: Record<
  Exclude<CategoryId, "all">,
  {
    label: string;
    title: string;
    description: string;
    image: string;
    alt: string;
  }
> = {
  gyms: {
    label: "Gyms & Wellness",
    title: "Gyms & Wellness",
    description:
      "Fitness machines, weights, lockers, mirrors, reception desks and wellness equipment.",
    image: IMG.gymTreadmills,
    alt: "Commercial gym with treadmills and professional equipment",
  },
  restaurants: {
    label: "Restaurants & Bars",
    title: "Restaurants & Bars",
    description:
      "Tables, chairs, bars, lighting, kitchen equipment and complete restaurant interiors.",
    image: IMG.restaurantModern,
    alt: "High-end restaurant interior with dining tables and hospitality lighting",
  },
  hotels: {
    label: "Hotels & Resorts",
    title: "Hotels & Resorts",
    description:
      "Bedroom furniture, lobby pieces, lighting, mirrors and hospitality equipment.",
    image: IMG.hotelLobbyWarm,
    alt: "Warm luxury hotel lobby with reception and seating",
  },
  maritime: {
    label: "Maritime & Cruise",
    title: "Maritime & Cruise",
    description:
      "Ship furniture, portholes, lighting, signage and authentic maritime objects.",
    image: IMG.shipDining,
    alt: "Passenger vessel dining interior with commercial seating",
  },
  retail: {
    label: "Retail & Showrooms",
    title: "Retail & Showrooms",
    description:
      "Counters, shelving, display furniture, lighting and complete shop interiors.",
    image: IMG.retailShelves,
    alt: "Retail showroom with shelving and display furniture",
  },
  offices: {
    label: "Offices",
    title: "Offices",
    description:
      "Desks, chairs, meeting tables, cabinets and commercial interior pieces.",
    image: IMG.officeOpen,
    alt: "Modern office interior with workstations and meeting spaces",
  },
  events: {
    label: "Events & Leisure",
    title: "Events & Leisure",
    description:
      "Outdoor furniture, bars, staging equipment, décor and leisure inventory.",
    image: IMG.eventBeachBar,
    alt: "Beachclub bar and outdoor lounge setup",
  },
  industrial: {
    label: "Industrial & Specialty",
    title: "Industrial & Specialty",
    description:
      "Workshop equipment, lockers, architectural pieces, machinery and unusual assets.",
    image: IMG.industrialWide,
    alt: "Large industrial hall with specialist structural inventory",
  },
};

const CATEGORIES: Array<{ id: CategoryId; label: string }> = [
  { id: "all", label: "All inventory" },
  { id: "gyms", label: "Gyms & Wellness" },
  { id: "restaurants", label: "Restaurants & Bars" },
  { id: "hotels", label: "Hotels & Resorts" },
  { id: "maritime", label: "Maritime & Cruise" },
  { id: "retail", label: "Retail & Showrooms" },
  { id: "offices", label: "Offices" },
  { id: "events", label: "Events & Leisure" },
  { id: "industrial", label: "Industrial & Specialty" },
];

function isCategoryId(value?: string): value is CategoryId {
  return Boolean(
    value &&
      [
        "all",
        "gyms",
        "restaurants",
        "hotels",
        "maritime",
        "retail",
        "offices",
        "events",
        "industrial",
      ].includes(value),
  );
}

function parseHash(hash: string): RouteState {
  const clean = hash.replace(/^#\/?/, "").replace(/\/+$/, "");
  if (!clean) return { page: "home" };

  const parts = clean.split("/");

  if (parts[0] === "marketplace") {
    const category = isCategoryId(parts[1]) ? parts[1] : "all";
    return { page: "marketplace", category };
  }

  if (parts[0] === "listing") {
    return { page: "listing", listingId: parts[1] };
  }

  if (parts[0] === "complete-inventories") return { page: "complete" };
  if (parts[0] === "how-it-works") return { page: "how" };
  if (parts[0] === "logistics") return { page: "logistics" };
  if (parts[0] === "documentation") return { page: "documentation" };
  if (parts[0] === "sellers") return { page: "sellers" };
  if (parts[0] === "about") return { page: "about" };
  if (parts[0] === "contact") return { page: "contact" };

  return { page: "home" };
}

function go(hash: string) {
  if (typeof window !== "undefined") {
    window.location.hash = hash;
  }
}

function makeListing(
  listing: Partial<Listing> &
    Pick<
      Listing,
      | "id"
      | "title"
      | "categoryId"
      | "image"
      | "gallery"
      | "alt"
      | "shortDescription"
      | "longDescription"
      | "country"
      | "location"
      | "quantity"
      | "originalValue"
      | "price"
    >,
): Listing {
  return {
    condition: "Used — good commercial condition",
    sellerType: "Professional reseller",
    sellerName: "Verified professional seller",
    availability: "Available now",
    saleType: "Bulk lot",
    origin: "Supplied by a verified professional reseller",
    dimensions: "To be confirmed before purchase",
    weight: "To be confirmed before purchase",
    units: "Mixed units",
    brandModel: "Mixed commercial brands",
    serialNumber: "Available where relevant",
    year: "Seller-provided where known",
    knownDamage:
      "Normal commercial wear. Exact condition and known damage must be confirmed before purchase.",
    floorAccess: "Ground-floor or loading access to be confirmed",
    palletisable: "Yes, where practical",
    packagingIncluded: "Not included unless stated",
    forklift: "Available by arrangement",
    loadingDock: "To be confirmed with seller",
    pickup: "Buyer pickup possible",
    delivery: "Delivery quotation available",
    collectionDeadline: "To be confirmed with seller",
    packaged: "Unpackaged",
    palletDimensions: "To be confirmed after lot selection",
    groundFloor: "To be confirmed",
    stairsLift: "To be confirmed",
    disassembly: "May be required",
    sellerPackaging: "Seller packaging available by quotation",
    logisticsStatus: "Delivery available",
    transportClass: "Large item delivery",
    documents: [
      "Example: Ownership confirmed",
      "Example: Inventory list available",
      "Example: Dimensions verified",
    ],
    badges: [
      "Verified seller",
      "Pickup available",
      "Delivery quotation available",
    ],
    example: true,
    ...listing,
  };
}

const LISTINGS: Listing[] = [
  makeListing({
    id: "technogym-treadmill-package",
    title: "Technogym treadmill package",
    categoryId: "gyms",
    image: IMG.gymTreadmills,
    gallery: [IMG.gymTreadmills, IMG.gymWeights, IMG.spaPool],
    alt: "Commercial treadmills and cardio machines in a premium gym room",
    shortDescription:
      "Commercial cardio package for gym launches, refits and professional resellers.",
    longDescription:
      "A coordinated commercial cardio offering with treadmills and related wellness-floor equipment. Suitable for gym operators, hotel fitness areas, property refurbishments and professional resellers looking for high-value reusable assets.",
    country: "Netherlands",
    location: "Rotterdam, Netherlands",
    quantity: "8 treadmills + 4 cardio units",
    originalValue: 24500,
    price: 8500,
    saleType: "Bulk lot",
    sellerType: "Gym closure liquidator",
    sellerName: "Verified gym liquidation partner",
    origin: "Recovered from a premium fitness location",
    dimensions: "Approx. 220 × 95 × 155 cm per treadmill",
    weight: "Approx. 1,650 kg total",
    units: "12 units",
    brandModel: "Technogym / mixed commercial cardio",
    year: "2019–2023, seller-provided",
    collectionDeadline: "Within 21 days after confirmation",
    packaged: "Loose units",
    logisticsStatus: "Specialist transport required",
    transportClass: "Project and complete inventory transport",
  }),
  makeListing({
    id: "free-weight-zone-package",
    title: "Complete free-weight section",
    categoryId: "gyms",
    image: IMG.gymWeights,
    gallery: [IMG.gymWeights, IMG.gymTreadmills, IMG.gymLockers],
    alt: "Commercial free-weight zone with dumbbells, benches and racks",
    shortDescription:
      "Benches, dumbbells, racks and accessory equipment offered as one section.",
    longDescription:
      "A coordinated free-weight zone intended for gym launches, CrossFit-style training facilities, hotel fitness expansions or professional resale. Suitable for buyers that want a coherent commercial package instead of scattered items.",
    country: "Belgium",
    location: "Antwerp, Belgium",
    quantity: "72 assets in one section",
    originalValue: 18200,
    price: 6950,
    sellerType: "Professional gym reseller",
    sellerName: "Verified fitness equipment reseller",
    origin: "Supplied by a verified professional reseller",
    dimensions: "Approx. 65 m² inventory footprint",
    weight: "Approx. 3,200 kg total",
    units: "72 units",
    packaged: "Mixed palletised and loose",
    palletDimensions: "Estimated 8–10 euro pallets",
    logisticsStatus: "Palletised",
    transportClass: "Pallet and groupage freight",
  }),
  makeListing({
    id: "locker-wall-and-benches",
    title: "Gym locker wall and bench package",
    categoryId: "gyms",
    image: IMG.gymLockers,
    gallery: [IMG.gymLockers, IMG.spaLounge, IMG.gymTreadmills],
    alt: "Dark locker room with black lockers and wooden benches",
    shortDescription:
      "Changing-room lockers and benches from a modern sports facility.",
    longDescription:
      "A complete locker and bench package from a closed sports or wellness environment. Suitable for gyms, leisure businesses, event dressing areas and back-of-house installations requiring durable commercial fittings.",
    country: "Germany",
    location: "Hamburg, Germany",
    quantity: "96 lockers + 6 benches",
    originalValue: 13800,
    price: 4950,
    saleType: "Complete inventory",
    sellerType: "Curator / business closure",
    sellerName: "Verified bankruptcy and asset partner",
    origin: "Sourced from a closed sports facility",
    dimensions: "Locker runs and bench schedule available on request",
    weight: "Approx. 1,900 kg total",
    units: "102 assets",
    disassembly: "Professional disassembly required",
    packaged: "Unpackaged",
    logisticsStatus: "Packaging required",
    transportClass: "Project and complete inventory transport",
  }),

  makeListing({
    id: "complete-restaurant-furniture-package",
    title: "Complete restaurant furniture package",
    categoryId: "restaurants",
    image: IMG.restaurantModern,
    gallery: [IMG.restaurantModern, IMG.restaurantOpenPlan, IMG.restaurantLuxury],
    alt: "High-end restaurant interior with wooden tables and chairs",
    shortDescription:
      "Tables, dining chairs and coordinated hospitality furniture for a full venue.",
    longDescription:
      "A complete restaurant furniture package suitable for hospitality launches, concept refurbishments and event venues. Offered as a coherent lot rather than isolated second-hand pieces, with indicative pilot pricing and managed quotation.",
    country: "Netherlands",
    location: "Amsterdam, Netherlands",
    quantity: "24 tables + 96 chairs",
    originalValue: 18500,
    price: 6750,
    saleType: "Complete inventory",
    sellerType: "Restaurant liquidation partner",
    sellerName: "Verified hospitality liquidation partner",
    origin: "Sourced from a closed restaurant",
    dimensions: "Mixed table and chair specification available",
    weight: "Approx. 2,100 kg total",
    units: "120 pieces",
    logisticsStatus: "Ready for collection",
    transportClass: "Pallet and groupage freight",
  }),
  makeListing({
    id: "professional-bar-counter",
    title: "Professional bar counter",
    categoryId: "restaurants",
    image: IMG.restaurantOpenPlan,
    gallery: [IMG.restaurantOpenPlan, IMG.restaurantLuxury, IMG.eventBeachBar],
    alt: "Professional restaurant and bar counter in an upscale venue",
    shortDescription:
      "Front bar and backbar package for hospitality, beachclub and event concepts.",
    longDescription:
      "A commercial bar counter with integrated storage and service areas, positioned for restaurants, cocktail bars, resort concepts or professional event builders. Best handled via a managed quotation due to dimensions and loading requirements.",
    country: "Belgium",
    location: "Brussels, Belgium",
    quantity: "1 front bar + 1 backbar system",
    originalValue: 22000,
    price: 7900,
    saleType: "Complete inventory",
    sellerType: "Hospitality operator",
    sellerName: "Verified seller",
    origin: "Reclaimed from a restaurant and bar renovation",
    dimensions: "Front bar approx. 900 × 85 × 115 cm",
    weight: "Approx. 1,250 kg total",
    units: "2 major modules",
    disassembly: "Required",
    forklift: "No",
    loadingDock: "Street-level loading zone",
    logisticsStatus: "Specialist transport required",
    transportClass: "Project and complete inventory transport",
  }),
  makeListing({
    id: "restaurant-pendant-lighting",
    title: "Pendant lighting collection",
    categoryId: "restaurants",
    image: IMG.restaurantLuxury,
    gallery: [IMG.restaurantLuxury, IMG.restaurantModern, IMG.hotelLobbyWarm],
    alt: "Restaurant interior with decorative lighting and dining setup",
    shortDescription:
      "A decorative commercial lighting collection for restaurants, bars and hotels.",
    longDescription:
      "A lot of hospitality-oriented pendant fixtures selected for restaurant, bar, hotel and showroom reuse. This is ideal for buyers who want commercially scaled decorative lighting without new-build pricing.",
    country: "France",
    location: "Lille, France",
    quantity: "34 pendant fixtures",
    originalValue: 10200,
    price: 2850,
    saleType: "Bulk lot",
    sellerType: "Professional lighting reseller",
    sellerName: "Verified interiors reseller",
    origin: "Supplied by a verified professional reseller",
    dimensions: "Mixed diameters from 30 to 85 cm",
    weight: "Approx. 280 kg total",
    units: "34 fixtures",
    packaged: "Protective packaging required",
    logisticsStatus: "Packaging required",
    transportClass: "Parcel and pallet combination",
  }),

  makeListing({
    id: "boutique-hotel-bedroom-package",
    title: "Boutique hotel bedroom package",
    categoryId: "hotels",
    image: IMG.hotelRoomClassic,
    gallery: [IMG.hotelRoomClassic, IMG.hotelBedLamp, IMG.hotelRoomTv],
    alt: "Boutique hotel room with bed, lighting and hospitality furniture",
    shortDescription:
      "Matching bed, bedside, mirror and lighting packages from a boutique hotel.",
    longDescription:
      "A multi-room hospitality furniture package designed for hotels, serviced apartments, glamping concepts and interior projects looking for coherent guest-room inventory with commercial provenance.",
    country: "Belgium",
    location: "Antwerp, Belgium",
    quantity: "12 room sets",
    originalValue: 29500,
    price: 3950,
    saleType: "Complete inventory",
    sellerType: "Hotel operator",
    sellerName: "Verified hospitality operator",
    origin: "Reclaimed from a boutique hotel",
    dimensions: "Full room schedule available on request",
    weight: "Approx. 4,400 kg total",
    units: "12 room sets",
    collectionDeadline: "Four-week collection window",
    logisticsStatus: "Specialist transport required",
    transportClass: "Project and complete inventory transport",
  }),
  makeListing({
    id: "hotel-lobby-seating-collection",
    title: "Hotel lobby seating collection",
    categoryId: "hotels",
    image: IMG.hotelLobbyWarm,
    gallery: [IMG.hotelLobbyWarm, IMG.hotelLobbyGrand, IMG.hotelRoomTv],
    alt: "Warm hotel lobby with seating, lighting and reception elements",
    shortDescription:
      "Lobby chairs, sofas, side tables and selected reception-area pieces.",
    longDescription:
      "A coherent hospitality lobby offering for hotel operators, serviced apartment concepts, office lobbies and high-end waiting areas. This type of lot is especially attractive as a ready-made design package.",
    country: "Netherlands",
    location: "The Hague, Netherlands",
    quantity: "18 seating and table pieces",
    originalValue: 18000,
    price: 6250,
    sellerType: "Hotel renovation project",
    sellerName: "Verified hotel refurbishment partner",
    origin: "Reclaimed from a hotel lobby renovation",
    dimensions: "Specification list available",
    weight: "Approx. 950 kg total",
    units: "18 pieces",
    logisticsStatus: "Delivery available",
    transportClass: "Large item delivery",
  }),
  makeListing({
    id: "hospitality-spa-lounge-set",
    title: "Hospitality spa lounge set",
    categoryId: "hotels",
    image: IMG.spaLounge,
    gallery: [IMG.spaLounge, IMG.spaPool, IMG.steamRoom],
    alt: "Sunlit spa lounge chairs in a hospitality wellness room",
    shortDescription:
      "Relaxation loungers and wellness-adjacent hospitality inventory.",
    longDescription:
      "A spa and wellness lounge package for resorts, boutique hotels, premium gyms and leisure operators. The set is presented as a design-oriented hospitality package with managed logistics.",
    country: "Austria",
    location: "Tux, Austria",
    quantity: "14 loungers + spa accessories",
    originalValue: 12800,
    price: 4650,
    sellerType: "Resort operator",
    sellerName: "Verified resort partner",
    origin: "Reclaimed from a hospitality wellness area",
    dimensions: "Mixed dimensions on request",
    weight: "Approx. 540 kg total",
    units: "14 primary assets",
    packaged: "Protective wrapping required",
    logisticsStatus: "Packaging required",
    transportClass: "Large item delivery",
  }),

  makeListing({
    id: "cruise-lounge-chair-set",
    title: "Cruise ship lounge chair set",
    categoryId: "maritime",
    image: IMG.shipDining,
    gallery: [IMG.shipDining, IMG.shipBar, IMG.shipTheatre],
    alt: "Passenger vessel interior with coordinated lounge and dining furniture",
    shortDescription:
      "Commercial seating from a passenger vessel interior.",
    longDescription:
      "A coordinated maritime seating lot recovered from a passenger-vessel interior. Particularly suitable for destination hospitality, themed venues, collectors and reuse-driven interior projects that want authentic maritime provenance.",
    country: "Denmark",
    location: "Aalborg, Denmark",
    quantity: "36 lounge and dining chairs",
    originalValue: 8500,
    price: 2400,
    sellerType: "Maritime refit contractor",
    sellerName: "Verified maritime seller",
    origin: "Recovered from a passenger vessel",
    dimensions: "Mixed chair dimensions",
    weight: "Approx. 520 kg total",
    units: "36 chairs",
    logisticsStatus: "Ready for collection",
    transportClass: "Large item delivery",
  }),
  makeListing({
    id: "authentic-ship-lighting",
    title: "Authentic ship lighting",
    categoryId: "maritime",
    image: IMG.shipBar,
    gallery: [IMG.shipBar, IMG.shipDining, IMG.shipCabin],
    alt: "Passenger ship interior lighting and bar furniture",
    shortDescription:
      "Functional and decorative ship lighting recovered during refit.",
    longDescription:
      "A maritime lighting lot offering atmosphere, provenance and project value. Suitable for hotels, restaurants, collectors and interior architects looking for genuine ship-derived fixtures rather than reproductions.",
    country: "Netherlands",
    location: "Rotterdam, Netherlands",
    quantity: "18 fixtures",
    originalValue: 7200,
    price: 2850,
    saleType: "Bulk lot",
    sellerType: "Shipyard supplier",
    sellerName: "Verified shipyard supply partner",
    origin: "Recovered during a passenger-vessel refit",
    dimensions: "Mixed fixtures from 25 to 95 cm",
    weight: "Approx. 310 kg total",
    units: "18 fixtures",
    logisticsStatus: "Packaging required",
    transportClass: "Parcel and pallet combination",
  }),
  makeListing({
    id: "passenger-vessel-signage-lot",
    title: "Passenger vessel signage lot",
    categoryId: "maritime",
    image: IMG.shipTheatre,
    gallery: [IMG.shipTheatre, IMG.shipCabin, IMG.shipDining],
    alt: "Passenger vessel interior representing maritime signage and fixtures",
    shortDescription:
      "Directional, deck and hospitality signage from a vessel interior package.",
    longDescription:
      "A collection of maritime signage and interior wayfinding assets for collectors, themed venues, marine-inspired hospitality and architectural reuse projects. Documentation and exact contents are confirmed via quotation.",
    country: "Germany",
    location: "Hamburg, Germany",
    quantity: "42 signage and associated fittings",
    originalValue: 9500,
    price: 3200,
    sellerType: "Marine inventory broker",
    sellerName: "Verified maritime inventory broker",
    origin: "Recovered from a passenger vessel",
    dimensions: "Mixed signage sizes and formats",
    weight: "Approx. 440 kg total",
    units: "42 pieces",
    packaged: "Crated by quotation",
    logisticsStatus: "Packaging required",
    transportClass: "Pallet and groupage freight",
  }),

  makeListing({
    id: "retail-checkout-counter",
    title: "Retail checkout counter",
    categoryId: "retail",
    image: IMG.retailCounter,
    gallery: [IMG.retailCounter, IMG.retailShelves, IMG.retailDisplays],
    alt: "Retail checkout or reception counter inside a showroom environment",
    shortDescription:
      "A modular checkout and reception system for retail and showroom use.",
    longDescription:
      "A front-of-house counter system suited to retail stores, showrooms, pick-up concepts and branded commercial environments. The value lies in its coherence, finish and direct reusability.",
    country: "Germany",
    location: "Düsseldorf, Germany",
    quantity: "3 counter modules",
    originalValue: 8900,
    price: 2450,
    sellerType: "Commercial property owner",
    sellerName: "Verified showroom partner",
    origin: "Reclaimed from a retail showroom",
    dimensions: "Combined length approx. 720 cm",
    weight: "Approx. 780 kg total",
    units: "3 modules",
    disassembly: "Basic disassembly required",
    logisticsStatus: "Ready for collection",
    transportClass: "Large item delivery",
  }),
  makeListing({
    id: "modular-shop-shelving",
    title: "Modular shop shelving package",
    categoryId: "retail",
    image: IMG.retailShelves,
    gallery: [IMG.retailShelves, IMG.retailCounter, IMG.retailDisplays],
    alt: "Retail showroom shelving system with display tables and lighting",
    shortDescription:
      "Display shelves and presentation furniture from a premium showroom interior.",
    longDescription:
      "A modular retail shelving system intended for shop refits, concept stores, product displays, food retail and professional resellers looking for coherent commercial interior elements.",
    country: "Germany",
    location: "Cologne, Germany",
    quantity: "48 shelving bays",
    originalValue: 9400,
    price: 1850,
    sellerType: "Retail relocation project",
    sellerName: "Verified retail relocation partner",
    origin: "Reclaimed from a showroom relocation",
    dimensions: "Bay width 100 cm; mixed heights",
    weight: "Approx. 2,600 kg total",
    units: "48 shelving bays",
    packaged: "Dismantled and banded",
    palletDimensions: "Estimated 12 euro pallets",
    logisticsStatus: "Palletised",
    transportClass: "Pallet and groupage freight",
  }),
  makeListing({
    id: "display-cabinet-collection",
    title: "Display cabinet collection",
    categoryId: "retail",
    image: IMG.retailDisplays,
    gallery: [IMG.retailDisplays, IMG.retailCounter, IMG.retailShelves],
    alt: "Retail display cases and showroom lighting in a commercial space",
    shortDescription:
      "Glazed cabinets and display furniture for retail, exhibition and hospitality use.",
    longDescription:
      "A presentation-focused cabinet collection suitable for retail, experience spaces, themed hospitality, exhibitions and specialist resale. Suitable where visual presentation matters as much as storage.",
    country: "Belgium",
    location: "Ghent, Belgium",
    quantity: "12 display cabinets",
    originalValue: 13800,
    price: 4200,
    sellerType: "Professional reseller",
    sellerName: "Verified showroom furniture seller",
    origin: "Supplied by a verified professional reseller",
    dimensions: "Approx. 100 × 45 × 210 cm per cabinet",
    weight: "Approx. 1,080 kg total",
    units: "12 cabinets",
    palletisable: "No — specialist handling advised",
    logisticsStatus: "Specialist transport required",
    transportClass: "Project and complete inventory transport",
  }),

  makeListing({
    id: "ergonomic-office-chair-package",
    title: "Ergonomic office chair package",
    categoryId: "offices",
    image: IMG.officeOpen,
    gallery: [IMG.officeOpen, IMG.officeGlass, IMG.officeMeeting],
    alt: "Modern office with ergonomic chairs and open-plan workstations",
    shortDescription:
      "Premium commercial task chairs for office, coworking and project fit-outs.",
    longDescription:
      "A large office chair package from a workspace refit. Ideal for offices, coworking spaces, educational settings, property staging and professional dealers seeking high-volume seating at a meaningful discount.",
    country: "Netherlands",
    location: "Amsterdam, Netherlands",
    quantity: "60 office chairs",
    originalValue: 27000,
    price: 6900,
    sellerType: "Office relocation project",
    sellerName: "Verified office relocation partner",
    origin: "Reclaimed from a corporate office",
    dimensions: "Standard ergonomic task chair format",
    weight: "Approx. 1,020 kg total",
    units: "60 chairs",
    logisticsStatus: "Delivery available",
    transportClass: "Pallet and groupage freight",
  }),
  makeListing({
    id: "meeting-room-collection",
    title: "Meeting room collection",
    categoryId: "offices",
    image: IMG.officeMeeting,
    gallery: [IMG.officeMeeting, IMG.officeMeetingColor, IMG.officeMeetingSmall],
    alt: "Bright office meeting room with table, chairs and media screen",
    shortDescription:
      "Tables, conference seating and small-room fittings from a modern office.",
    longDescription:
      "A meeting-room package for offices, agencies, advisory firms, project spaces and converted hospitality work lounges. Designed for buyers that want immediately usable commercial furniture as a set.",
    country: "Netherlands",
    location: "Utrecht, Netherlands",
    quantity: "3 tables + 28 chairs",
    originalValue: 16800,
    price: 5250,
    sellerType: "Corporate downsizing project",
    sellerName: "Verified corporate seller",
    origin: "Reclaimed from a modern office meeting suite",
    dimensions: "Tables up to 420 × 140 cm",
    weight: "Approx. 1,350 kg total",
    units: "31 assets",
    disassembly: "Table tops require disassembly",
    logisticsStatus: "Ready for collection",
    transportClass: "Large item delivery",
  }),
  makeListing({
    id: "reception-desk-and-waiting-area",
    title: "Reception desk and waiting area",
    categoryId: "offices",
    image: IMG.officeGlass,
    gallery: [IMG.officeGlass, IMG.officeMeetingSmall, IMG.officeOpen],
    alt: "Reception or front-office environment with glass rooms and premium finishes",
    shortDescription:
      "Reception furniture and waiting-area pieces from a commercial interior.",
    longDescription:
      "A front-of-house office package suitable for practices, coworking receptions, boutique agencies, clinics and service-led commercial environments looking for a premium but reused arrival zone.",
    country: "Belgium",
    location: "Brussels, Belgium",
    quantity: "1 desk + 10 waiting-area pieces",
    originalValue: 9200,
    price: 2950,
    sellerType: "Office refurbishment contractor",
    sellerName: "Verified commercial interiors partner",
    origin: "Reclaimed from a corporate reception area",
    dimensions: "Desk approx. 430 × 90 × 115 cm",
    weight: "Approx. 620 kg total",
    units: "11 primary assets",
    logisticsStatus: "Delivery available",
    transportClass: "Large item delivery",
  }),

  makeListing({
    id: "beachclub-lounge-furniture",
    title: "Beachclub lounge furniture",
    categoryId: "events",
    image: IMG.eventBeachBar,
    gallery: [IMG.eventBeachBar, IMG.eventBeachEntrance, IMG.eventBanquet],
    alt: "Beachclub bar and outdoor lounge furniture in a coastal venue",
    shortDescription:
      "Outdoor lounge seating and hospitality furniture from a beachclub setting.",
    longDescription:
      "A leisure-oriented outdoor furniture lot suited to beachclubs, resorts, rooftop concepts, event operators and seasonal hospitality businesses looking for commercial-grade reused inventory.",
    country: "Spain",
    location: "Barcelona, Spain",
    quantity: "54 lounge pieces",
    originalValue: 17600,
    price: 5500,
    sellerType: "Seasonal hospitality operator",
    sellerName: "Verified leisure seller",
    origin: "Reclaimed from a beachclub renovation",
    dimensions: "Mixed lounge dimensions",
    weight: "Approx. 1,480 kg total",
    units: "54 pieces",
    condition: "Used — outdoor wear visible",
    logisticsStatus: "Delivery available",
    transportClass: "Large item delivery",
  }),
  makeListing({
    id: "mobile-event-bar",
    title: "Mobile event bar",
    categoryId: "events",
    image: IMG.eventBeachEntrance,
    gallery: [IMG.eventBeachEntrance, IMG.eventBeachBar, IMG.eventBarn],
    alt: "Beachclub and event hospitality setting with bar-related assets",
    shortDescription:
      "Modular bar components for festivals, event venues and pop-up hospitality.",
    longDescription:
      "A modular event bar concept for mobile catering, activations, seasonal bars and event operators. This type of lot benefits from quotation-based logistics because modules and route planning affect delivery cost materially.",
    country: "Italy",
    location: "Genoa, Italy",
    quantity: "2 mobile bar modules",
    originalValue: 13500,
    price: 4650,
    sellerType: "Event operator",
    sellerName: "Verified events seller",
    origin: "Supplied by a verified professional reseller",
    dimensions: "Approx. 380 × 110 × 125 cm per module",
    weight: "Approx. 720 kg total",
    units: "2 modules",
    palletisable: "No",
    logisticsStatus: "Specialist transport required",
    transportClass: "Project and complete inventory transport",
  }),
  makeListing({
    id: "banquet-and-event-furniture-package",
    title: "Banquet and event furniture package",
    categoryId: "events",
    image: IMG.eventBanquet,
    gallery: [IMG.eventBanquet, IMG.eventBarn, IMG.restaurantLuxury],
    alt: "Banquet space with round tables and hospitality event furniture",
    shortDescription:
      "Banquet tables, seating and decorative event-use inventory.",
    longDescription:
      "A venue-scale banquet package for event locations, conference venues, hospitality overflow spaces and operators serving weddings, dinners and private functions.",
    country: "Belgium",
    location: "Ghent, Belgium",
    quantity: "18 tables + 120 chairs",
    originalValue: 21400,
    price: 8400,
    sellerType: "Venue operator",
    sellerName: "Verified events and hospitality partner",
    origin: "Reclaimed from an event venue refurbishment",
    dimensions: "Mixed banquet schedule available",
    weight: "Approx. 2,900 kg total",
    units: "138 assets",
    logisticsStatus: "Palletised",
    transportClass: "Pallet and groupage freight",
  }),

  makeListing({
    id: "workshop-lockers-and-benches",
    title: "Workshop lockers and benches",
    categoryId: "industrial",
    image: IMG.industrialWide,
    gallery: [IMG.industrialWide, IMG.industrialWarehouse, IMG.factoryModel],
    alt: "Large industrial hall suitable for workshop and specialist inventory reuse",
    shortDescription:
      "Heavy-duty changing and staff-area equipment for workshops and warehouses.",
    longDescription:
      "A robust industrial support package for staff changing areas, logistics facilities, workshop back-of-house environments and professional project buyers. Positioned as operational infrastructure rather than decorative furniture.",
    country: "Germany",
    location: "Hamburg, Germany",
    quantity: "40 lockers + 8 benches",
    originalValue: 12500,
    price: 3900,
    sellerType: "Industrial closure project",
    sellerName: "Verified industrial seller",
    origin: "Recovered from an industrial support facility",
    dimensions: "Lockers approx. 60 × 50 × 195 cm",
    weight: "Approx. 2,400 kg total",
    units: "48 assets",
    condition: "Used — industrial wear and cosmetic marks",
    packaged: "Banding and palletising to be quoted",
    logisticsStatus: "Palletised",
    transportClass: "Pallet and groupage freight",
  }),
  makeListing({
    id: "industrial-lighting-and-trusses",
    title: "Industrial lighting and trusses",
    categoryId: "industrial",
    image: IMG.industrialCrane,
    gallery: [IMG.industrialCrane, IMG.industrialHall, IMG.industrialPipes],
    alt: "Industrial structure with crane and high-span steel inventory",
    shortDescription:
      "Oversized industrial fixtures and structural interior elements.",
    longDescription:
      "A specialist lot of heavy-duty industrial interior elements suited to adaptive reuse, exhibition architecture, events, industrial-themed hospitality and commercial interiors with oversized structural character.",
    country: "Netherlands",
    location: "Eindhoven, Netherlands",
    quantity: "28 fixtures + truss elements",
    originalValue: 19800,
    price: 6400,
    sellerType: "Renovation contractor",
    sellerName: "Verified industrial interiors contractor",
    origin: "Reclaimed during an industrial renovation",
    dimensions: "Oversized mixed dimensions",
    weight: "Approx. 1,800 kg total",
    units: "28 primary assets",
    palletisable: "Partly",
    logisticsStatus: "Specialist transport required",
    transportClass: "Project and complete inventory transport",
  }),
  makeListing({
    id: "warehouse-racking-zone",
    title: "Warehouse racking zone",
    categoryId: "industrial",
    image: IMG.industrialWarehouse,
    gallery: [IMG.industrialWarehouse, IMG.industrialPolished, IMG.industrialWide],
    alt: "Warehouse or large industrial floor suitable for commercial asset reuse",
    shortDescription:
      "A zone-based industrial storage and warehouse infrastructure package.",
    longDescription:
      "A warehouse-scale infrastructure lot for buyers that need commercial storage, logistics support or adaptable industrial environments. Offered through managed quotation because extraction, route and loading affect value.",
    country: "Germany",
    location: "Düsseldorf, Germany",
    quantity: "1 zone package + mixed components",
    originalValue: 32000,
    price: 11900,
    saleType: "Complete inventory",
    sellerType: "Warehouse operator",
    sellerName: "Verified logistics partner",
    origin: "Reclaimed from a distribution facility",
    dimensions: "Zone-specific details on request",
    weight: "Approx. 4,600 kg total",
    units: "Complete zone package",
    loadingDock: "Commercial loading dock available",
    forklift: "Yes",
    logisticsStatus: "Specialist transport required",
    transportClass: "Project and complete inventory transport",
  }),
];

const COMPLETE_INVENTORIES: CompleteInventory[] = [
  {
    id: "complete-gym-inventory-rotterdam",
    title: "Complete gym inventory – Rotterdam",
    categoryId: "gyms",
    image: IMG.gymTreadmills,
    alt: "Complete commercial gym inventory in Rotterdam",
    projectType: "Gym & wellness closure",
    location: "Rotterdam, Netherlands",
    assetCount: "Approx. 186 assets",
    indicativePrice: 48500,
    separateSales: "Selected zones may be purchased separately",
    availableFrom: "Available from 15 September 2026",
    collectionWindow: "Three-week removal window",
    loading: "Ground floor, roller door and forklift available",
  },
  {
    id: "restaurant-liquidation-amsterdam",
    title: "Restaurant liquidation – Amsterdam",
    categoryId: "restaurants",
    image: IMG.restaurantModern,
    alt: "Complete restaurant furniture and bar package in Amsterdam",
    projectType: "Restaurant business closure",
    location: "Amsterdam, Netherlands",
    assetCount: "Approx. 142 assets",
    indicativePrice: 26750,
    separateSales: "Furniture and bar package can be separated",
    availableFrom: "Available from 1 October 2026",
    collectionWindow: "Ten working days",
    loading: "Street access; timed loading permit required",
  },
  {
    id: "boutique-hotel-antwerp",
    title: "Boutique hotel furniture collection – Antwerp",
    categoryId: "hotels",
    image: IMG.hotelRoomClassic,
    alt: "Boutique hotel rooms and hospitality furniture in Antwerp",
    projectType: "Hotel renovation inventory",
    location: "Antwerp, Belgium",
    assetCount: "24 room sets + lobby assets",
    indicativePrice: 39500,
    separateSales: "Room packages available in minimum quantities",
    availableFrom: "Available from 10 November 2026",
    collectionWindow: "Four-week phased collection",
    loading: "Service lift and loading bay available",
  },
  {
    id: "passenger-vessel-denmark",
    title: "Passenger vessel interior inventory – Denmark",
    categoryId: "maritime",
    image: IMG.shipDining,
    alt: "Passenger vessel interior inventory in Denmark",
    projectType: "Maritime refit inventory",
    location: "Aalborg, Denmark",
    assetCount: "Approx. 310 interior assets",
    indicativePrice: 62000,
    separateSales: "Lots available by deck and room type",
    availableFrom: "Subject to refit schedule",
    collectionWindow: "Managed shipyard collection slots",
    loading: "Shipyard crane and forklift access by arrangement",
  },
  {
    id: "retail-showroom-dusseldorf",
    title: "Retail showroom inventory – Düsseldorf",
    categoryId: "retail",
    image: IMG.retailShelves,
    alt: "Retail showroom fixtures and shelving in Düsseldorf",
    projectType: "Showroom relocation",
    location: "Düsseldorf, Germany",
    assetCount: "Approx. 96 assets",
    indicativePrice: 18750,
    separateSales: "Counters, shelving and displays can be separated",
    availableFrom: "Available from 20 August 2026",
    collectionWindow: "Two-week collection window",
    loading: "Ground floor with rear loading access",
  },
  {
    id: "beachclub-barcelona",
    title: "Beachclub furniture package – Barcelona",
    categoryId: "events",
    image: IMG.eventBeachBar,
    alt: "Beachclub furniture package in Barcelona",
    projectType: "Seasonal leisure refurbishment",
    location: "Barcelona, Spain",
    assetCount: "Approx. 128 outdoor assets",
    indicativePrice: 24500,
    separateSales: "Lounge, dining and bar zones available separately",
    availableFrom: "Available from 5 November 2026",
    collectionWindow: "Three-week collection window",
    loading: "Direct vehicle access outside public opening hours",
  },
];

const quotationSteps = [
  "Select item or inventory",
  "Request availability",
  "Enter delivery destination",
  "Receive product and transport quotation",
  "Confirm documentation",
  "Complete payment through an approved payment provider",
  "Collection and delivery are scheduled",
  "Order is completed after delivery confirmation",
];

const logisticsSteps = [
  {
    title: "Inventory assessment",
    text: "The seller provides dimensions, weight, location, access information and loading requirements.",
  },
  {
    title: "Packaging and collection check",
    text: "We determine whether the inventory requires parcel shipping, furniture transport, pallet freight or specialist project transport.",
  },
  {
    title: "Delivery quotation",
    text: "Transport is calculated separately based on item size, loading requirements, seller location and buyer destination.",
  },
  {
    title: "Booking confirmation",
    text: "The collection date, delivery address, loading equipment and responsible parties are confirmed before transport is booked.",
  },
  {
    title: "Collection and tracking",
    text: "Items are photographed before collection and tracked during transport where available.",
  },
  {
    title: "Delivery and confirmation",
    text: "The buyer checks the delivery and proof of delivery is added to the order documentation.",
  },
];

const shippingClasses = [
  {
    title: "Parcel delivery",
    text: "For smaller objects such as lighting, signage, accessories and parts.",
    price: "Indicative transport from €15",
  },
  {
    title: "Large item delivery",
    text: "For chairs, tables, mirrors, fitness machines and individual interior pieces.",
    price: "Quotation based on size and route",
  },
  {
    title: "Pallet and groupage freight",
    text: "For heavy products, multiple items and partial commercial inventories.",
    price: "European pallet and groupage transport available",
  },
  {
    title: "Project and complete inventory transport",
    text: "For complete gyms, restaurants, hotels, bars and large industrial inventories.",
    price: "Custom loading and transport plan required",
  },
];

const documentationGroups = [
  {
    title: "Seller and ownership verification",
    items: [
      "Company details",
      "VAT number where applicable",
      "Confirmation that the seller is authorised to sell",
      "Contact and payment verification via an approved process",
    ],
  },
  {
    title: "Inventory documentation",
    items: [
      "Inventory list and quantities",
      "Brands, models and serial numbers where available",
      "Dimensions, weights and photographs",
      "Condition report and known defects",
    ],
  },
  {
    title: "Transport documentation",
    items: [
      "Packing list and collection confirmation",
      "Transport order and CMR where relevant",
      "Tracking and proof of delivery",
      "Photographs before collection",
    ],
  },
  {
    title: "Commercial documentation",
    items: [
      "Quotation and order confirmation",
      "Invoice and VAT information",
      "Agreed commission and transport costs",
      "Payment status",
    ],
  },
  {
    title: "Additional documentation",
    items: [
      "Maintenance records and manuals",
      "Test documents and safety information",
      "Origin or provenance documentation",
      "Customs documents for trade outside the EU",
    ],
  },
];

const trustPoints = [
  {
    title: "Curated listings",
    text: "Every listing is reviewed before publication.",
  },
  {
    title: "Verified sellers",
    text: "Professional sellers must provide company and ownership information.",
  },
  {
    title: "Clear condition information",
    text: "Known damage and available documentation are shown before purchase.",
  },
  {
    title: "Managed transactions",
    text: "Availability, delivery requirements and payment steps are confirmed before an order proceeds.",
  },
];

const sellerBenefits = [
  "No upfront listing costs",
  "List individual items or complete inventories",
  "Inventory can remain at your location",
  "Professional marketplace presentation",
  "Managed buyer enquiries",
  "Transport coordination available",
  "Commission only after a successful sale",
];

const buyerBenefits = [
  "Lower cost than buying new",
  "Unique and changing inventory",
  "Complete business packages",
  "Circular reuse",
  "Verified professional sellers",
  "European sourcing",
  "Managed quotation process",
  "Pickup and delivery options",
];

const buyerGroups = [
  "Starting entrepreneurs",
  "Gym operators",
  "Hospitality businesses",
  "Hotels",
  "Project furnishers",
  "Interior architects",
  "Professional resellers",
  "Dealers",
  "Event companies",
  "Property and renovation companies",
];

const navItems = [
  { label: "Inventory", hash: "#/marketplace/all" },
  { label: "Categories", hash: "#/marketplace/all" },
  { label: "Complete Inventories", hash: "#/complete-inventories" },
  { label: "How It Works", hash: "#/how-it-works" },
  { label: "Logistics", hash: "#/logistics" },
  { label: "Documentation", hash: "#/documentation" },
  { label: "Sell Inventory", hash: "#/sellers" },
  { label: "About", hash: "#/about" },
  { label: "Contact", hash: "#/contact" },
];

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200 md:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-4 break-words text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function Pill({
  children,
  active = false,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.13em] ${
        active
          ? "border-cyan-200 bg-cyan-300 text-[#071013]"
          : "border-white/10 bg-white/[0.05] text-white/65"
      }`}
    >
      {children}
    </span>
  );
}

function GhostButton({
  children,
  href,
  onClick,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-cyan-300/40 hover:text-cyan-100 ${className}`}
    >
      {children}
    </a>
  );
}

function SolidButton({
  children,
  href,
  onClick,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#071013] transition hover:bg-cyan-200 ${className}`}
    >
      {children}
    </a>
  );
}

function CategorySlider({
  active,
  onSelect,
}: {
  active: CategoryId;
  onSelect: (category: CategoryId) => void;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Scroll categories left"
        onClick={() => scroll("left")}
        className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white/70 transition hover:border-cyan-300/40 hover:text-cyan-100 md:flex"
      >
        ←
      </button>

      <div
        ref={scrollRef}
        className="hide-scrollbar flex min-w-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pr-10"
      >
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-pressed={active === category.id}
            onClick={() => onSelect(category.id)}
            className={`min-h-12 shrink-0 snap-start rounded-full border px-5 py-3 text-sm font-black transition ${
              active === category.id
                ? "border-cyan-200 bg-cyan-300 text-[#071013]"
                : "border-white/10 bg-white/[0.04] text-white/65 hover:border-white/25 hover:text-white"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="Scroll categories right"
        onClick={() => scroll("right")}
        className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white/70 transition hover:border-cyan-300/40 hover:text-cyan-100 md:flex"
      >
        →
      </button>
    </div>
  );
}

function CategoryCard({
  categoryId,
}: {
  categoryId: Exclude<CategoryId, "all">;
}) {
  const meta = CATEGORY_META[categoryId];
  const count = LISTINGS.filter((item) => item.categoryId === categoryId).length;

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a171b] md:rounded-[2rem]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={meta.image}
          alt={meta.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-[#071013]/15 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            {count} example listings
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.045em] text-white">
            {meta.title}
          </h3>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <p className="leading-7 text-white/60">{meta.description}</p>
        <SolidButton
          href={`#/marketplace/${categoryId}`}
          className="mt-5"
        >
          View inventory
        </SolidButton>
      </div>
    </article>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  const saving = listing.originalValue - listing.price;

  return (
    <article className="min-w-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a171b] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 md:rounded-[2rem]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={listing.image}
          alt={listing.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] flex-wrap gap-2">
          <span className="rounded-full bg-white px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#071013]">
            Example listing
          </span>
          <span className="rounded-full border border-white/15 bg-[#071013]/65 px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl">
            Verified seller
          </span>
        </div>
      </div>

      <div className="p-5 md:p-7">
        <div className="flex flex-wrap gap-2">
          <Pill>{CATEGORY_META[listing.categoryId].label}</Pill>
          <Pill>{listing.saleType}</Pill>
          <Pill>{listing.availability}</Pill>
        </div>

        <h3 className="mt-4 break-words text-2xl font-black tracking-[-0.05em] text-white md:text-3xl">
          {listing.title}
        </h3>

        <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-cyan-200/85">
          {listing.location}
        </p>

        <p className="mt-4 leading-7 text-white/60">
          {listing.shortDescription}
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["Condition", listing.condition],
            ["Quantity", listing.quantity],
            ["Seller type", listing.sellerType],
            ["Origin", listing.origin],
            ["Dimensions", listing.dimensions],
            ["Weight", listing.weight],
            ["Collection deadline", listing.collectionDeadline],
            ["Logistics", listing.logisticsStatus],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-3"
            >
              <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-white/35">
                {label}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-white/75">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {listing.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-2 text-[0.7rem] font-bold text-cyan-100/80"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/[0.05] p-4">
            <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/40">
              Estimated original value
            </p>
            <p className="mt-2 text-lg font-black line-through decoration-white/30">
              {formatEuro(listing.originalValue)}
            </p>
          </div>
          <div className="rounded-2xl bg-cyan-300 p-4 text-[#071013]">
            <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] opacity-60">
              Salvage Harbor price
            </p>
            <p className="mt-2 text-xl font-black">
              {formatEuro(listing.price)}
            </p>
          </div>
          <div className="rounded-2xl bg-white/[0.05] p-4">
            <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/40">
              Potential saving
            </p>
            <p className="mt-2 text-lg font-black text-cyan-200">
              {formatEuro(saving)}
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs leading-6 text-white/38">
          Indicative pilot pricing. Availability, condition, transport
          and documentation must be confirmed before purchase.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <SolidButton
            href={`#/listing/${listing.id}`}
            className="w-full"
          >
            View details
          </SolidButton>
          <GhostButton
            href={`mailto:${contactEmail}?subject=${encodeSubject(
              `Quote request: ${listing.title}`,
            )}`}
            className="w-full"
          >
            Request a quote
          </GhostButton>
        </div>
      </div>
    </article>
  );
}

function CompleteInventoryCard({
  inventory,
}: {
  inventory: CompleteInventory;
}) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a171b] md:rounded-[2rem]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={inventory.image}
          alt={inventory.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#071013]">
          Example complete inventory
        </span>
      </div>

      <div className="p-5 md:p-6">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
          {inventory.projectType}
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-[-0.045em] text-white">
          {inventory.title}
        </h3>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["Location", inventory.location],
            ["Assets", inventory.assetCount],
            [
              "Indicative asking price",
              formatEuro(inventory.indicativePrice),
            ],
            ["Separate sales", inventory.separateSales],
            ["Available from", inventory.availableFrom],
            ["Collection window", inventory.collectionWindow],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
            >
              <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-white/35">
                {label}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
          <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-cyan-200">
            Loading possibilities
          </p>
          <p className="mt-2 text-sm leading-6 text-white/75">
            {inventory.loading}
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          <GhostButton
            href={`mailto:${contactEmail}?subject=${encodeSubject(
              `${inventory.title} - Request full inventory list`,
            )}`}
            className="border-white/15 hover:border-cyan-300/40"
          >
            Request full inventory list
          </GhostButton>
          <div className="grid gap-3 sm:grid-cols-2">
            <GhostButton
              href={`mailto:${contactEmail}?subject=${encodeSubject(
                `${inventory.title} - Request site visit`,
              )}`}
            >
              Request site visit
            </GhostButton>
            <GhostButton
              href={`mailto:${contactEmail}?subject=${encodeSubject(
                `${inventory.title} - Ask about transport`,
              )}`}
            >
              Ask about transport
            </GhostButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function Header({
  route,
  mobileOpen,
  setMobileOpen,
}: {
  route: RouteState;
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
}) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061014]/72 backdrop-blur-xl">
        <Container className="flex items-center justify-between gap-3 py-3 md:py-4">
          <a
            href="#/"
            className="flex min-w-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-[#071013]">
              S
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.82rem] font-bold tracking-[0.15em] text-white sm:text-sm sm:tracking-[0.2em]">
                Salvage Harbor
              </span>
              <span className="hidden text-xs text-white/42 sm:block">
                Curated European business inventory
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-3 xl:flex">
            {navItems.map((item) => {
              const active =
                (item.hash.startsWith("#/marketplace") &&
                  route.page === "marketplace") ||
                (item.hash === "#/complete-inventories" &&
                  route.page === "complete") ||
                (item.hash === "#/how-it-works" && route.page === "how") ||
                (item.hash === "#/logistics" && route.page === "logistics") ||
                (item.hash === "#/documentation" &&
                  route.page === "documentation") ||
                (item.hash === "#/sellers" && route.page === "sellers") ||
                (item.hash === "#/about" && route.page === "about") ||
                (item.hash === "#/contact" && route.page === "contact");

              return (
                <a
                  key={item.hash}
                  href={item.hash}
                  className={`text-[0.68rem] font-bold transition ${
                    active ? "text-cyan-100" : "text-white/58 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#/sellers"
              className="hidden shrink-0 rounded-full bg-white px-4 py-2.5 text-xs font-black text-[#071013] transition hover:bg-cyan-200 sm:inline-flex"
            >
              List inventory
            </a>
            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xl text-white xl:hidden"
            >
              ☰
            </button>
          </div>
        </Container>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[90] bg-[#061014]/98 p-4 backdrop-blur-xl xl:hidden">
          <div className="mx-auto flex h-full max-w-xl flex-col">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="font-black tracking-[0.16em] text-white">
                Salvage Harbor
              </p>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-2xl text-white"
              >
                ×
              </button>
            </div>

            <nav className="hide-scrollbar flex-1 space-y-2 overflow-y-auto py-5">
              {[{ label: "Home", hash: "#/" }, ...navItems].map((item) => (
                <a
                  key={item.hash}
                  href={item.hash}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-lg font-black text-white transition hover:border-cyan-300/30"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={`mailto:${contactEmail}`}
              className="rounded-full bg-cyan-300 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.15em] text-[#071013]"
            >
              Contact Salvage Harbor
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#071013] sm:min-h-[800px] md:min-h-screen">
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(74,214,239,0.16),transparent_34%),linear-gradient(145deg,#061014_0%,#0a2027_52%,#071013_100%)]" />
        <div className="absolute -right-24 top-28 h-72 w-72 rounded-full border border-cyan-100/10" />
        <div className="absolute -left-20 bottom-24 h-64 w-64 rounded-full bg-cyan-300/10 blur-[100px]" />
      </div>

      <div className="absolute inset-0 hidden overflow-hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-[#061014]/48 md:bg-[#061014]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061014] via-[#061014]/80 to-[#061014]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061014] via-transparent to-[#061014]/35" />

      <Container className="relative z-10 flex min-h-[760px] items-center pb-16 pt-28 sm:min-h-[800px] md:min-h-screen md:pb-24 md:pt-32">
        <div className="w-full max-w-[830px]">
          <div className="mb-6 inline-flex max-w-full rounded-full border border-white/15 bg-black/15 px-4 py-2 text-[0.65rem] font-bold uppercase leading-5 tracking-[0.14em] text-white/75 backdrop-blur-xl sm:text-xs md:text-sm">
            A curated European marketplace for reclaimed business
            interiors and equipment
          </div>

          <h1 className="max-w-[800px] break-words text-[2.8rem] font-black leading-[0.91] tracking-[-0.07em] text-white sm:text-[4.4rem] md:text-[5.7rem]">
            Remarkable business assets. Ready for a second life.
          </h1>

          <p className="mt-7 max-w-[690px] text-base leading-8 text-white/72 sm:text-lg md:text-xl">
            Discover furniture, equipment and complete inventories
            from restaurants, hotels, gyms, ships and commercial
            spaces across Europe.
          </p>

          <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <SolidButton
              href="#/marketplace/all"
              className="w-full sm:w-auto"
            >
              Explore inventory
            </SolidButton>
            <GhostButton
              href="#/sellers"
              className="w-full sm:w-auto"
            >
              List your inventory
            </GhostButton>
          </div>

          <p className="mt-6 text-sm leading-7 text-white/50">
            Curated inventory. Verified professional sellers. Managed
            European logistics.
          </p>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35 md:flex">
        Scroll to explore
        <span className="h-px w-12 bg-white/30" />
      </div>
    </section>
  );
}

function HomePage() {
  const featured = LISTINGS.slice(0, 6);

  return (
    <>
      <Hero />

      <section className="border-y border-white/10 bg-[#09161a]">
        <Container className="py-4 md:py-5">
          <CategorySlider active="all" onSelect={(id) => go(`#/marketplace/${id}`)} />
        </Container>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="About Salvage Harbor"
            title="A high-quality marketplace, not a general second-hand shop."
          />
          <div className="space-y-5 text-base leading-8 text-white/68 md:text-lg">
            <p>
              Salvage Harbor connects reusable business interiors and
              equipment with buyers looking for distinctive,
              professionally sourced assets.
            </p>
            <p>
              Inventory can originate from bankruptcies, business
              closures, renovations, refits, curators, liquidators,
              professional resellers and commercial property owners.
            </p>
            <p>
              The maritime identity remains part of the platform, while
              the marketplace now also covers gyms, hospitality, retail,
              offices, events and specialist commercial environments
              across Europe.
            </p>
          </div>
        </Container>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="Browse by sector"
          title="Professional inventory from distinctive commercial environments."
          text="Choose a sector to jump to a dedicated inventory view. Every category below is designed to feel like its own marketplace channel."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(CATEGORY_META) as Array<
            Exclude<CategoryId, "all">
          >).map((categoryId) => (
            <CategoryCard key={categoryId} categoryId={categoryId} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a171b]">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured inventory"
              title="A marketplace homepage that already feels alive."
              text="This homepage intentionally previews multiple sectors, but it no longer tries to be the entire site. Clicking through takes visitors into dedicated inventory and listing views."
            />
            <SolidButton href="#/marketplace/all">
              Explore all inventory
            </SolidButton>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </Container>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <SectionHeading
            eyebrow="For buyers"
            title="Source professional equipment and interiors for less."
            text="Discover changing business inventories from verified sellers across Europe. Purchase individual assets, bulk lots or complete interiors."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {buyerBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-[#071013]">
                  ✓
                </span>
                <p className="text-sm font-bold text-white/75">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {buyerGroups.map((group) => (
            <div
              key={group}
              className="flex min-h-24 items-end rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-black text-white/75"
            >
              {group}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <Container className="py-16 md:py-20">
          <SectionHeading
            eyebrow="Trust and verification"
            title="Professional inventory. Verified before publication."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-[#071013]">
                  ✓
                </span>
                <h3 className="mt-5 text-xl font-black tracking-[-0.04em] text-white">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  {point.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300 text-[#071013] md:rounded-[2.5rem]">
          <div className="grid gap-10 p-6 md:p-12 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] opacity-60">
                For sellers
              </p>
              <h2 className="mt-4 break-words text-3xl font-black tracking-[-0.06em] sm:text-4xl md:text-6xl">
                Turn unused business inventory into new value.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 opacity-75 md:text-lg">
                Salvage Harbor helps businesses, curators, liquidators,
                professional resellers, hotel operators, restaurants,
                gyms, renovation companies and ship recyclers sell
                reusable inventory to buyers across Europe.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {sellerBenefits.slice(0, 6).map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-2xl border border-[#071013]/15 bg-white/20 p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#071013] text-xs font-black text-white">
                      ✓
                    </span>
                    <p className="text-sm font-bold leading-6">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-end gap-4">
              <SolidButton
                href="#/sellers"
                className="bg-[#071013] text-white hover:bg-[#10242a]"
              >
                List your inventory
              </SolidButton>
              <GhostButton
                href={`mailto:${contactEmail}`}
                className="border-[#071013]/25 text-[#071013] hover:bg-[#071013]/10 hover:text-[#071013]"
              >
                Contact via email
              </GhostButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-20">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 text-sm leading-7 text-white/45 md:p-6">
          Salvage Harbor is currently operating as a pilot marketplace.
          Example listings, indicative pricing and transaction features
          are being developed together with selected professional
          sellers.
        </div>
      </section>
    </>
  );
}

function MarketplacePage({ initialCategory = "all" }: { initialCategory?: CategoryId }) {
  const [search, setSearch] = useState("");
  const [saleType, setSaleType] = useState<string>("all");
  const [country, setCountry] = useState<string>("all");
  const [logistics, setLogistics] = useState<string>("all");
  const [activeCategory, setActiveCategory] =
    useState<CategoryId>(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const countries = useMemo(
    () => Array.from(new Set(LISTINGS.map((item) => item.country))).sort(),
    [],
  );

  const filtered = useMemo(() => {
    return LISTINGS.filter((item) => {
      const categoryMatch =
        activeCategory === "all" || item.categoryId === activeCategory;
      const searchMatch =
        !search.trim() ||
        [
          item.title,
          item.shortDescription,
          item.location,
          item.origin,
          item.sellerType,
          CATEGORY_META[item.categoryId].label,
        ]
          .join(" ")
          .toLowerCase()
          .includes(search.trim().toLowerCase());
      const saleTypeMatch = saleType === "all" || item.saleType === saleType;
      const countryMatch = country === "all" || item.country === country;
      const logisticsMatch =
        logistics === "all" || item.logisticsStatus === logistics;

      return (
        categoryMatch &&
        searchMatch &&
        saleTypeMatch &&
        countryMatch &&
        logisticsMatch
      );
    });
  }, [activeCategory, search, saleType, country, logistics]);

  return (
    <>
      <section className="border-b border-white/10 bg-[#09161a] pt-28 md:pt-32">
        <Container className="py-14 md:py-16">
          <SectionHeading
            eyebrow="Marketplace"
            title="Curated business inventory from across Europe."
            text="Browse by category, search by keyword and filter by sale type, country and logistics profile. Listings below are example listings with indicative pilot pricing."
          />

          <div className="mt-10">
            <CategorySlider
              active={activeCategory}
              onSelect={(category) => {
                setActiveCategory(category);
                go(`#/marketplace/${category}`);
              }}
            />
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            <label className="text-sm font-bold text-white/65">
              Search
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search assets, sector, location..."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              />
            </label>

            <label className="text-sm font-bold text-white/65">
              Sale type
              <select
                value={saleType}
                onChange={(event) => setSaleType(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              >
                <option value="all">All sale types</option>
                <option value="Individual item">Individual item</option>
                <option value="Bulk lot">Bulk lot</option>
                <option value="Complete inventory">Complete inventory</option>
              </select>
            </label>

            <label className="text-sm font-bold text-white/65">
              Country
              <select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              >
                <option value="all">All countries</option>
                {countries.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm font-bold text-white/65">
              Logistics status
              <select
                value={logistics}
                onChange={(event) => setLogistics(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              >
                <option value="all">All logistics statuses</option>
                {Array.from(
                  new Set(LISTINGS.map((item) => item.logisticsStatus)),
                ).map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Pill>{filtered.length} results</Pill>
            <Pill>Managed quotation process</Pill>
            <Pill>Verified professional sellers</Pill>
            <Pill>Indicative pilot pricing</Pill>
          </div>
        </Container>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-white/55">
            No example listings match the current filter combination.
            Try clearing one of the filters or switch back to “All
            inventory”.
          </div>
        ) : null}
      </section>
    </>
  );
}

function ListingDetailPage({ listing }: { listing: Listing }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const saving = listing.originalValue - listing.price;
  const related = LISTINGS.filter(
    (item) => item.categoryId === listing.categoryId && item.id !== listing.id,
  ).slice(0, 3);

  useEffect(() => {
    setActiveIndex(0);
  }, [listing.id]);

  return (
    <>
      <section className="border-b border-white/10 bg-[#09161a] pt-28 md:pt-32">
        <Container className="py-10 md:py-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/40">
            <a href="#/" className="hover:text-white">
              Home
            </a>
            <span>•</span>
            <a
              href={`#/marketplace/${listing.categoryId}`}
              className="hover:text-white"
            >
              {CATEGORY_META[listing.categoryId].label}
            </a>
            <span>•</span>
            <span className="text-cyan-200">{listing.title}</span>
          </div>
        </Container>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
              <img
                src={listing.gallery[activeIndex] ?? listing.image}
                alt={`${listing.alt} — image ${activeIndex + 1}`}
                className="aspect-[16/10] h-full w-full object-cover"
              />
            </div>

            <div className="hide-scrollbar mt-3 flex gap-3 overflow-x-auto pb-2">
              {listing.gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`shrink-0 overflow-hidden rounded-xl border ${
                    activeIndex === index
                      ? "border-cyan-200"
                      : "border-white/10"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${listing.title} thumbnail ${index + 1}`}
                    className="h-20 w-28 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              <Pill>{CATEGORY_META[listing.categoryId].label}</Pill>
              <Pill>{listing.saleType}</Pill>
              <Pill>{listing.availability}</Pill>
              <Pill>Example listing</Pill>
            </div>

            <h1 className="mt-5 break-words text-4xl font-black tracking-[-0.055em] text-white md:text-5xl">
              {listing.title}
            </h1>

            <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-cyan-200">
              {listing.location}
            </p>

            <p className="mt-6 text-base leading-8 text-white/68 md:text-lg">
              {listing.longDescription}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/[0.05] p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/40">
                  Estimated original value
                </p>
                <p className="mt-2 text-lg font-black line-through decoration-white/30">
                  {formatEuro(listing.originalValue)}
                </p>
              </div>
              <div className="rounded-2xl bg-cyan-300 p-4 text-[#071013]">
                <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] opacity-60">
                  Salvage Harbor price
                </p>
                <p className="mt-2 text-xl font-black">
                  {formatEuro(listing.price)}
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.05] p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/40">
                  Potential saving
                </p>
                <p className="mt-2 text-lg font-black text-cyan-200">
                  {formatEuro(saving)}
                </p>
              </div>
            </div>

            <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-white/45">
              Product specifications are based on seller-provided
              information and must be confirmed before purchase.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {listing.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-2 text-xs font-bold text-cyan-100/75"
                >
                  {badge}
                </span>
              ))}
              {listing.documents.slice(0, 3).map((document) => (
                <span
                  key={document}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-bold text-white/60"
                >
                  {document}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <GhostButton
                href={`mailto:${contactEmail}?subject=${encodeSubject(
                  `Quote request: ${listing.title}`,
                )}`}
              >
                Request a quote
              </GhostButton>
              <GhostButton
                href={`mailto:${contactEmail}?subject=${encodeSubject(
                  `Ask about delivery: ${listing.title}`,
                )}`}
              >
                Ask about delivery
              </GhostButton>
              <GhostButton
                href={`mailto:${contactEmail}?subject=${encodeSubject(
                  `Request documentation: ${listing.title}`,
                )}`}
              >
                Request documentation
              </GhostButton>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-black tracking-[-0.04em] text-white">
              Product information
            </h2>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Category", CATEGORY_META[listing.categoryId].label],
                ["Location", listing.location],
                ["Condition", listing.condition],
                ["Quantity", listing.quantity],
                ["Units", listing.units],
                ["Seller type", listing.sellerType],
                ["Verified seller", listing.sellerName],
                ["Origin", listing.origin],
                ["Brand / model", listing.brandModel],
                ["Serial number", listing.serialNumber],
                ["Age / year", listing.year],
                ["Known damage", listing.knownDamage],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <dt className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-white/35">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-white/75">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-[-0.04em] text-white">
              Logistics information
            </h2>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Item location", listing.location],
                ["Collection deadline", listing.collectionDeadline],
                ["Dimensions", listing.dimensions],
                ["Weight", listing.weight],
                ["Packaged / unpackaged", listing.packaged],
                ["Pallet dimensions", listing.palletDimensions],
                ["Forklift available", listing.forklift],
                ["Loading dock available", listing.loadingDock],
                ["Ground-floor access", listing.groundFloor],
                ["Stairs or lift", listing.stairsLift],
                ["Disassembly required", listing.disassembly],
                ["Seller packaging available", listing.sellerPackaging],
                ["Palletisable", listing.palletisable],
                ["Packaging included", listing.packagingIncluded],
                ["Buyer pickup possible", listing.pickup],
                ["European delivery possible", listing.delivery],
                ["Logistics status", listing.logisticsStatus],
                ["Transport class", listing.transportClass],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <dt className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-white/35">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-white/75">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-2xl font-black tracking-[-0.04em] text-white">
              Available documentation
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {listing.documents.map((document) => (
                <span
                  key={document}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-2 text-xs font-bold text-cyan-100/75"
                >
                  {document}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-[#0a171b] p-5 md:rounded-[2rem] md:p-6">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-white">
              Buyer quotation request
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/50">
              Large assets and complete inventories are sold through a
              managed quotation process. Product availability, loading
              requirements and transport costs are confirmed before
              payment.
            </p>

            <form
              name="buyer-quote"
              method="POST"
              data-netlify="true"
              action="/?quote=sent"
              className="mt-5 space-y-4"
            >
              <input type="hidden" name="form-name" value="buyer-quote" />
              <input type="hidden" name="listing" value={listing.title} />

              <label className="block text-sm font-bold text-white/70">
                Name *
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>

              <label className="block text-sm font-bold text-white/70">
                Company
                <input
                  name="company"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>

              <label className="block text-sm font-bold text-white/70">
                Email *
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>

              <label className="block text-sm font-bold text-white/70">
                Delivery destination *
                <input
                  required
                  name="delivery-destination"
                  placeholder="City, postcode and country"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>

              <label className="block text-sm font-bold text-white/70">
                Message
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#071013] transition hover:bg-white"
              >
                Submit quotation request
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Related listings"
              title="More inventory from the same sector."
            />
            <GhostButton href={`#/marketplace/${listing.categoryId}`}>
              Back to category
            </GhostButton>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ListingCard key={item.id} listing={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CompleteInventoriesPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#09161a] pt-28 md:pt-32">
        <Container className="py-14 md:py-16">
          <SectionHeading
            eyebrow="Complete business inventories"
            title="Acquire a complete operational inventory or buy selected assets separately."
            text="Suitable for new businesses, relocations, renovations and professional resellers."
          />
        </Container>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {COMPLETE_INVENTORIES.map((inventory) => (
            <CompleteInventoryCard
              key={inventory.id}
              inventory={inventory}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#09161a] pt-28 md:pt-32">
        <Container className="py-14 md:py-16">
          <SectionHeading
            eyebrow="How it works"
            title="A managed quotation process for professional assets."
            text="Large assets and complete inventories are sold through a managed quotation process. Product availability, loading requirements and transport costs are confirmed before payment."
          />
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#0a171b]">
        <Container className="py-14 md:py-16">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quotationSteps.map((step, index) => (
              <li
                key={step}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-[#071013]">
                  {index + 1}
                </span>
                <p className="mt-5 font-black leading-6 text-white">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <SectionHeading
          eyebrow="Why buyers use Salvage Harbor"
          title="Source professional equipment and interiors for less."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {buyerBenefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-bold text-white/70"
            >
              {benefit}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function LogisticsPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#09161a] pt-28 md:pt-32">
        <Container className="py-14 md:py-16">
          <SectionHeading
            eyebrow="Managed logistics"
            title="Managed logistics for every type of inventory."
            text="From a single chair to a complete gym or restaurant inventory, Salvage Harbor coordinates the information required for collection and delivery."
          />
        </Container>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {logisticsSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-[1.75rem] border border-white/10 bg-[#0a171b] p-6 md:rounded-[2rem]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-[#071013]">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black tracking-[-0.04em] text-white">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-white/58">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Transport classes"
            title="Four transport methods for different asset types."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {shippingClasses.map((shippingClass) => (
              <article
                key={shippingClass.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5"
              >
                <h3 className="text-xl font-black tracking-[-0.04em] text-white">
                  {shippingClass.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  {shippingClass.text}
                </p>
                <p className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4 text-sm font-bold leading-6 text-cyan-100/75">
                  {shippingClass.price}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-7 text-white/45">
            Transport prices shown on example listings are indicative.
            Final transport costs are confirmed before purchase.
          </p>
        </div>
      </section>
    </>
  );
}

function DocumentationPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#09161a] pt-28 md:pt-32">
        <Container className="py-14 md:py-16">
          <SectionHeading
            eyebrow="Documentation"
            title="Clear documentation for every transaction."
            text="Salvage Harbor supports professional listings and managed transactions with relevant seller, inventory, transport and commercial information."
          />
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#0a171b]">
        <Container className="py-14 md:py-16">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {documentationGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 md:rounded-[2rem]"
              >
                <h3 className="text-xl font-black tracking-[-0.04em] text-white">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-white/58"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-5 text-sm leading-7 text-cyan-50/70">
            Document availability differs per product. Buyers can see
            which documents are available before confirming an order.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-black text-white">
              Documentation badge examples
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Example: Ownership confirmed",
                "Example: Inventory list available",
                "Example: Condition report available",
                "Example: Dimensions verified",
                "Example: Serial numbers available",
                "Example: Maintenance records available",
                "Example: Transport ready",
                "Example: Documentation incomplete",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-white/60"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function SellersPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#09161a] pt-28 md:pt-32">
        <Container className="py-14 md:py-16">
          <SectionHeading
            eyebrow="For sellers"
            title="Turn unused business inventory into new value."
            text="Salvage Harbor helps businesses, curators, liquidators, professional resellers, hotel operators, restaurants, gyms, renovation companies and ship recyclers sell reusable inventory to buyers across Europe."
          />
        </Container>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <Container className="grid gap-10 py-14 md:py-16 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <div className="grid gap-3">
              {sellerBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-[#071013]">
                    ✓
                  </span>
                  <p className="text-sm font-bold text-white/75">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[#0a171b] p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Seller portal beta
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">
                Future seller workspace
              </h3>
              <p className="mt-3 leading-7 text-white/58">
                In the next phase, this section should evolve into a
                real seller portal with inventory drafts, document
                uploads, quote tracking and listing status.
              </p>
            </div>
          </div>

          <form
            name="seller-intake"
            method="POST"
            data-netlify="true"
            encType="multipart/form-data"
            action="/?submitted=true"
            className="rounded-[1.75rem] border border-white/10 bg-[#0a171b] p-5 md:rounded-[2rem] md:p-8"
          >
            <input type="hidden" name="form-name" value="seller-intake" />

            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-bold text-white/70">
                Company name *
                <input
                  required
                  name="company-name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Contact person *
                <input
                  required
                  name="contact-person"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Email address *
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Phone number *
                <input
                  required
                  type="tel"
                  name="phone"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Country *
                <input
                  required
                  name="country"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Inventory location *
                <input
                  required
                  name="inventory-location"
                  placeholder="City, postcode and country"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Business type or origin *
                <select
                  required
                  name="business-origin"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  <option value="">Select an option</option>
                  <option>Business closure</option>
                  <option>Bankruptcy or liquidation</option>
                  <option>Renovation or refit</option>
                  <option>Professional reseller</option>
                  <option>Curator or insolvency professional</option>
                  <option>Property owner</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="text-sm font-bold text-white/70">
                Reason for sale *
                <input
                  required
                  name="reason-for-sale"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Category *
                <select
                  required
                  name="category"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  <option value="">Select a category</option>
                  <option>Gym & Wellness</option>
                  <option>Restaurant & Bar</option>
                  <option>Hotel & Resort</option>
                  <option>Maritime & Cruise</option>
                  <option>Retail & Showroom</option>
                  <option>Office</option>
                  <option>Events & Leisure</option>
                  <option>Industrial</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="text-sm font-bold text-white/70">
                Individual items or complete inventory *
                <select
                  required
                  name="inventory-type"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  <option value="">Select an option</option>
                  <option>Individual items</option>
                  <option>Bulk lots</option>
                  <option>Complete inventory</option>
                  <option>Combination</option>
                </select>
              </label>
              <label className="text-sm font-bold text-white/70">
                Estimated number of items *
                <input
                  required
                  type="number"
                  min="1"
                  name="estimated-items"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Preferred sale period *
                <input
                  required
                  name="sale-period"
                  placeholder="For example: within 6 weeks"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Minimum selling price
                <input
                  type="number"
                  min="0"
                  step="1"
                  name="minimum-price-eur"
                  placeholder="Amount in euros"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Separate sales possible? *
                <select
                  required
                  name="separate-sales"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  <option value="">Select an option</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Only by agreed lots</option>
                </select>
              </label>
              <label className="text-sm font-bold text-white/70">
                Buyer pickup possible? *
                <select
                  required
                  name="pickup-possible"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  <option value="">Select an option</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>By appointment</option>
                </select>
              </label>
              <label className="text-sm font-bold text-white/70">
                Seller delivery possible? *
                <select
                  required
                  name="seller-delivery"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  <option value="">Select an option</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Local delivery only</option>
                </select>
              </label>
              <label className="text-sm font-bold text-white/70 md:col-span-2">
                Available loading equipment
                <input
                  name="loading-equipment"
                  placeholder="Forklift, loading dock, crane, pallet truck, service lift, etc."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70 md:col-span-2">
                Available documentation
                <input
                  name="available-documentation"
                  placeholder="Inventory list, invoices, serial numbers, maintenance records, condition report, etc."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>

              <label className="text-sm font-bold text-white/70">
                Photo upload 1
                <input
                  type="file"
                  name="photo-1"
                  accept="image/*"
                  className="mt-2 block w-full rounded-xl border border-dashed border-white/15 bg-[#071013] px-4 py-4 text-sm text-white/60 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-300 file:px-4 file:py-2 file:font-black file:text-[#071013]"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Photo upload 2
                <input
                  type="file"
                  name="photo-2"
                  accept="image/*"
                  className="mt-2 block w-full rounded-xl border border-dashed border-white/15 bg-[#071013] px-4 py-4 text-sm text-white/60 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-300 file:px-4 file:py-2 file:font-black file:text-[#071013]"
                />
              </label>
              <label className="text-sm font-bold text-white/70 md:col-span-2">
                Photo upload 3
                <input
                  type="file"
                  name="photo-3"
                  accept="image/*"
                  className="mt-2 block w-full rounded-xl border border-dashed border-white/15 bg-[#071013] px-4 py-4 text-sm text-white/60 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-300 file:px-4 file:py-2 file:font-black file:text-[#071013]"
                />
              </label>

              <label className="text-sm font-bold text-white/70 md:col-span-2">
                Additional comments
                <textarea
                  name="additional-comments"
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4 text-sm leading-7 text-cyan-50/70">
              Submitting inventory does not automatically publish it.
              Every seller and listing is reviewed before approval.
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#071013] transition hover:bg-white"
            >
              Submit inventory for review
            </button>
          </form>
        </Container>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#09161a] pt-28 md:pt-32">
        <Container className="py-14 md:py-16">
          <SectionHeading
            eyebrow="About"
            title="A curated European marketplace for reclaimed business interiors and equipment."
            text="Salvage Harbor is designed to feel like a professional marketplace: selective, documented and logistics-aware rather than crowded and improvised."
          />
        </Container>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <Container className="grid gap-10 py-14 md:py-16 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-5 text-base leading-8 text-white/68 md:text-lg">
            <p>
              Salvage Harbor began with a maritime perspective and still
              keeps that identity, but it now extends to hospitality,
              gyms, retail, offices, events and specialist commercial
              assets across Europe.
            </p>
            <p>
              The platform is not positioned as a general second-hand
              site. It is structured as a curated B2B and project-led
              environment where provenance, logistics, condition and
              commercial usability matter.
            </p>
            <p>
              For now, the marketplace operates as a pilot with example
              inventory and managed quotation flows while seller
              onboarding and transaction documentation are refined with
              selected partners.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(CATEGORY_META).map(([id, meta]) => (
              <div
                key={id}
                className="rounded-[1.5rem] border border-white/10 bg-[#0a171b] p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  {meta.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/58">
                  {meta.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#09161a] pt-28 md:pt-32">
        <Container className="py-14 md:py-16">
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch about inventory, quotations or supply partnerships."
            text="Use the contact options below for buyer enquiries, seller intake, documentation questions or logistics coordination."
          />
        </Container>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <Container className="grid gap-10 py-14 md:py-16 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-[#0a171b] p-6 md:rounded-[2rem]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
              Direct contact
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
              info@celaris.nl
            </h2>
            <p className="mt-4 leading-7 text-white/58">
              Salvage Harbor is currently operated by Celaris. Email is
              the primary contact route for seller introductions, quote
              requests and sourcing questions.
            </p>

            <div className="mt-6 grid gap-3">
              <GhostButton href={`mailto:${contactEmail}`}>
                Send email
              </GhostButton>
              <GhostButton href="#/sellers">
                Go to seller intake
              </GhostButton>
              <GhostButton href="#/marketplace/all">
                Browse inventory
              </GhostButton>
            </div>
          </div>

          <form
            name="contact-form"
            method="POST"
            data-netlify="true"
            action="/?contact=sent"
            className="rounded-[1.75rem] border border-white/10 bg-[#0a171b] p-6 md:rounded-[2rem]"
          >
            <input type="hidden" name="form-name" value="contact-form" />

            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-bold text-white/70">
                Name *
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70">
                Company
                <input
                  name="company"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70 md:col-span-2">
                Email *
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
              <label className="text-sm font-bold text-white/70 md:col-span-2">
                Message *
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#071013] transition hover:bg-white"
            >
              Send message
            </button>
          </form>
        </Container>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061014]">
      <Container className="grid gap-8 py-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-lg font-black tracking-[0.14em] text-white">
            Salvage Harbor
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
            A curated European marketplace for reclaimed business
            interiors and equipment from professional sellers,
            business closures, renovations, refits and commercial
            projects.
          </p>
        </div>

        <div className="lg:text-right">
          <p className="text-sm font-bold text-white/55">Email</p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-2 inline-block text-lg font-black text-cyan-200"
          >
            {contactEmail}
          </a>
          <div className="mt-5 flex flex-wrap gap-3 lg:justify-end">
            <a
              href="#/marketplace/all"
              className="text-sm text-white/45 hover:text-white"
            >
              Inventory
            </a>
            <a
              href="#/sellers"
              className="text-sm text-white/45 hover:text-white"
            >
              Sell inventory
            </a>
            <a
              href="#/logistics"
              className="text-sm text-white/45 hover:text-white"
            >
              Logistics
            </a>
            <a
              href="#/documentation"
              className="text-sm text-white/45 hover:text-white"
            >
              Documentation
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Salvage Harbor Europe</p>
          <p>
            Curated inventory · Managed quotations · European sourcing
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default function Page() {
  const [route, setRoute] = useState<RouteState>({ page: "home" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const listingById = useMemo(
    () =>
      Object.fromEntries(
        LISTINGS.map((listing) => [listing.id, listing] as const),
      ),
    [],
  );

  useEffect(() => {
    const updateRoute = () => {
      const nextRoute = parseHash(window.location.hash);
      setRoute(nextRoute);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

      const titleMap: Record<RouteName, string> = {
        home: "Salvage Harbor",
        marketplace: "Marketplace — Salvage Harbor",
        listing: "Listing — Salvage Harbor",
        complete: "Complete Inventories — Salvage Harbor",
        how: "How It Works — Salvage Harbor",
        logistics: "Logistics — Salvage Harbor",
        documentation: "Documentation — Salvage Harbor",
        sellers: "Sell Inventory — Salvage Harbor",
        about: "About — Salvage Harbor",
        contact: "Contact — Salvage Harbor",
      };

      document.title = titleMap[nextRoute.page];
    };

    updateRoute();
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const listing =
    route.page === "listing" && route.listingId
      ? listingById[route.listingId]
      : null;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#071013] text-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
          background: #071013;
        }

        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <Header
        route={route}
        mobileOpen={mobileMenuOpen}
        setMobileOpen={setMobileMenuOpen}
      />

      {route.page === "home" ? <HomePage /> : null}
      {route.page === "marketplace" ? (
        <MarketplacePage initialCategory={route.category ?? "all"} />
      ) : null}
      {route.page === "listing" && listing ? (
        <ListingDetailPage listing={listing} />
      ) : null}
      {route.page === "listing" && !listing ? (
        <section className="pt-28 md:pt-32">
          <Container className="py-20">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0a171b] p-8 text-center">
              <h1 className="text-3xl font-black text-white">
                Listing not found
              </h1>
              <p className="mt-4 text-white/55">
                The requested demo listing could not be found.
              </p>
              <SolidButton href="#/marketplace/all" className="mt-6">
                Back to marketplace
              </SolidButton>
            </div>
          </Container>
        </section>
      ) : null}
      {route.page === "complete" ? <CompleteInventoriesPage /> : null}
      {route.page === "how" ? <HowItWorksPage /> : null}
      {route.page === "logistics" ? <LogisticsPage /> : null}
      {route.page === "documentation" ? <DocumentationPage /> : null}
      {route.page === "sellers" ? <SellersPage /> : null}
      {route.page === "about" ? <AboutPage /> : null}
      {route.page === "contact" ? <ContactPage /> : null}

      <Footer />

      {/* Hidden Netlify form blueprints for reliable detection in JS/SSR builds */}
      <section aria-hidden="true" className="hidden">
        <form
          name="buyer-quote"
          data-netlify="true"
          method="POST"
        >
          <input type="hidden" name="form-name" value="buyer-quote" />
          <input name="listing" />
          <input name="name" />
          <input name="company" />
          <input name="email" />
          <input name="delivery-destination" />
          <textarea name="message" />
        </form>

        <form
          name="seller-intake"
          data-netlify="true"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="form-name" value="seller-intake" />
          <input name="company-name" />
          <input name="contact-person" />
          <input name="email" />
          <input name="phone" />
          <input name="country" />
          <input name="inventory-location" />
          <input name="business-origin" />
          <input name="reason-for-sale" />
          <input name="category" />
          <input name="inventory-type" />
          <input name="estimated-items" />
          <input name="sale-period" />
          <input name="minimum-price-eur" />
          <input name="separate-sales" />
          <input name="pickup-possible" />
          <input name="seller-delivery" />
          <input name="loading-equipment" />
          <input name="available-documentation" />
          <input name="photo-1" type="file" />
          <input name="photo-2" type="file" />
          <input name="photo-3" type="file" />
          <textarea name="additional-comments" />
        </form>

        <form
          name="contact-form"
          data-netlify="true"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <input name="name" />
          <input name="company" />
          <input name="email" />
          <textarea name="message" />
        </form>
      </section>
    </main>
  );
}
