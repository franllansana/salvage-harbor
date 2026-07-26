"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const contactEmail = "info@celaris.nl";

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

type LogisticsStatus =
  | "Klaar voor afhaling"
  | "Verpakking vereist"
  | "Op pallet"
  | "Specialistisch transport vereist"
  | "Alleen afhaling door koper"
  | "Levering mogelijk";

type SaleType = "Los object" | "Partij" | "Complete inventaris";

type Listing = {
  id: string;
  title: string;
  categoryId: Exclude<CategoryId, "all">;
  image: string;
  gallery: string[];
  alt: string;
  description: string;
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
  example: boolean;
};

type CompleteInventory = {
  id: string;
  title: string;
  projectType: string;
  location: string;
  image: string;
  alt: string;
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

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&q=78`;

/* -------------------------------------------------------------------------- */
/*                            GECUREERDE BEELDBRONNEN                         */
/* -------------------------------------------------------------------------- */
/* Opmerking:
   - Bestaande maritieme MSC-beelden blijven behouden.
   - Niet-maritieme categorieën gebruiken een kleine, vaste set externe
     voorbeeldbeelden met consistente kwaliteit.
   - Alt-teksten staan expliciet op objectniveau voor toegankelijkheid. */

const images = {
  gymMachines: unsplash("photo-1778828494365-c798ff9cce2c"),
  gymWeights: unsplash("photo-1671970922029-0430d2ae122c"),
  restaurantBar: unsplash("photo-1776891326990-44f302f134cb"),
  restaurantDining: unsplash("photo-1739987751947-df1f1539bf0a"),
  hotelLobby: unsplash("photo-1767395523555-c44546bea0f0"),
  hotelRoom: unsplash("photo-1725962479542-1be0a6b0d444"),
  hotelResortRoom: unsplash("photo-1689729738817-fb1f4256769d"),
  retailShowroom: unsplash("photo-1770385605649-11de1a033064"),
  officeInterior: unsplash("photo-1772001936267-b6058748eff4"),
  beachclub: unsplash("photo-1761170025229-c07932c188c8"),
  eventVenue: unsplash("photo-1766720485795-8d2cbe43dc79"),
  outdoorBar: unsplash("photo-1758466872295-81be8c1411b3"),
  industrialHall: unsplash("photo-1761519609119-fa20763499f9"),
  warehouseEquipment: unsplash("photo-1740733448722-82e16d3468bb"),

  maritimeCasino:
    "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/bars/palm-beach-casino-bar-msc-armonia.jpg?as=1&bc=transparent&hash=5FEFF38A850A020708304E2772C972D2&mh=720&mw=920",
  maritimeDining:
    "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/restaurants/armonia-restaurant-il-girasole.jpg?as=1&bc=transparent&hash=0C08D3A9404A779BA78E3B519ADC768C&mh=1080&mw=1380",
  maritimeTheatre:
    "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/entertainment/armonia-entertainment-theatre-show.jpg?as=1&bc=transparent&hash=063B54676573C89AFF485B65CF899542&mh=1080&mw=1380",
  maritimeCabin:
    "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/cabins/tile-image/armonia-ocean-view.jpg?as=1&bc=transparent&hash=B4971B732D9EEA7C9FA02F50D12BE876&mh=1080&mw=1380",
};

const categories: Array<{
  id: CategoryId;
  label: string;
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
}> = [
  { id: "all", label: "Alle inventaris" },
  {
    id: "gyms",
    label: "Sportscholen & wellness",
    title: "Sportscholen & wellness",
    description:
      "Fitnessapparatuur, losse gewichten, lockers, spiegels, balies en wellness-inventaris.",
    image: images.gymMachines,
    alt: "Commerciële fitnessapparatuur in een professionele sportschool",
  },
  {
    id: "restaurants",
    label: "Restaurants & bars",
    title: "Restaurants & bars",
    description:
      "Tafels, stoelen, bars, verlichting, keukenapparatuur en complete horeca-interieurs.",
    image: images.restaurantDining,
    alt: "Professioneel restaurantinterieur met tafels, stoelen en verlichting",
  },
  {
    id: "hotels",
    label: "Hotels & resorts",
    title: "Hotels & resorts",
    description:
      "Slaapkamermeubilair, lobbymeubilair, verlichting, spiegels en hospitality-apparatuur.",
    image: images.hotelLobby,
    alt: "Professionele hotellobby met hospitality-meubilair",
  },
  {
    id: "maritime",
    label: "Maritiem & cruise",
    title: "Maritiem & cruise",
    description:
      "Scheepsmeubilair, patrijspoorten, verlichting, signage en authentieke maritieme objecten.",
    image: images.maritimeDining,
    alt: "Restaurantinterieur aan boord van een passagiersschip",
  },
  {
    id: "retail",
    label: "Retail & showrooms",
    title: "Retail & showrooms",
    description:
      "Counters, schappen, displaymeubilair, verlichting en complete winkelinterieurs.",
    image: images.retailShowroom,
    alt: "Professionele showroom met displays en balie",
  },
  {
    id: "offices",
    label: "Kantoren",
    title: "Kantoren",
    description:
      "Bureaus, stoelen, vergadertafels, kasten en hoogwaardige commerciële interieuronderdelen.",
    image: images.officeInterior,
    alt: "Modern kantoorinterieur met vergaderruimtes en werkplekken",
  },
  {
    id: "events",
    label: "Events & leisure",
    title: "Events & leisure",
    description:
      "Outdoor meubilair, bars, podiumapparatuur, decor en leisure-inventaris.",
    image: images.beachclub,
    alt: "Professioneel beachclubmeubilair in een hospitality-omgeving",
  },
  {
    id: "industrial",
    label: "Industrieel & specialistisch",
    title: "Industrieel & specialistisch",
    description:
      "Werkplaatsapparatuur, lockers, architectonische stukken, machines en bijzondere assets.",
    image: images.warehouseEquipment,
    alt: "Professionele industriële opslag met logistieke apparatuur",
  },
];

const createListing = (
  data: Partial<Listing> &
    Pick<
      Listing,
      | "id"
      | "title"
      | "categoryId"
      | "image"
      | "alt"
      | "description"
      | "location"
      | "quantity"
      | "originalValue"
      | "price"
    >,
): Listing => ({
  gallery: data.gallery ?? [data.image],
  condition: "Gebruikt — goede commerciële staat",
  sellerType: "Professionele reseller",
  sellerName: "Voorbeeld van geverifieerde professionele verkoper",
  availability: "Nu beschikbaar",
  saleType: "Partij",
  origin: "Aangeboden door een geverifieerde professionele reseller",
  dimensions: "Te bevestigen vóór aankoop",
  weight: "Te bevestigen vóór aankoop",
  brandModel: "Gemengde commerciële merken",
  serialNumber: "Beschikbaar waar relevant",
  year: "Te bevestigen",
  knownDamage:
    "Normale commerciële gebruikssporen. Exacte staat en bekende schade moeten vóór aankoop worden bevestigd.",
  floorAccess: "Begane grond gemeld",
  palletisable: "Ja, waar praktisch",
  packagingIncluded: "Niet inbegrepen tenzij vermeld",
  forklift: "Beschikbaar in overleg",
  loadingDock: "Te bevestigen met verkoper",
  pickup: "Afhaling door koper mogelijk",
  delivery: "Europese leveringsofferte mogelijk",
  collectionDeadline: "Te bevestigen met verkoper",
  packaged: "Onverpakt",
  palletDimensions: "Te bevestigen na selectie",
  groundFloor: "Ja",
  stairsLift: "Geen trappen gemeld",
  disassembly: "Kan nodig zijn",
  sellerPackaging: "Beschikbaar via aparte offerte",
  logisticsStatus: "Levering mogelijk",
  transportClass: "Groot item transport",
  documents: [
    "Voorbeeld: eigendom bevestigd",
    "Voorbeeld: inventarislijst beschikbaar",
    "Voorbeeld: afmetingen geverifieerd",
  ],
  example: true,
  ...data,
  gallery: data.gallery ?? [data.image],
  documents:
    data.documents ?? [
      "Voorbeeld: eigendom bevestigd",
      "Voorbeeld: inventarislijst beschikbaar",
      "Voorbeeld: afmetingen geverifieerd",
    ],
});

const listings: Listing[] = [
  createListing({
    id: "gym-loopbandpakket",
    title: "Technogym loopbandpakket",
    categoryId: "gyms",
    image: images.gymMachines,
    gallery: [images.gymMachines, images.gymWeights],
    alt: "Commercieel pakket met loopbanden en fitnessmachines in een sportschool",
    description:
      "Gecoördineerd pakket met commerciële cardioapparatuur, geschikt voor een nieuwe sportschool, refit of professionele doorverkoop.",
    location: "Utrecht, Nederland",
    quantity: "8 commerciële loopbanden",
    brandModel: "Technogym — gemengde commerciële modellen",
    originalValue: 25000,
    price: 8500,
    dimensions: "Ca. 215 × 95 × 150 cm per unit",
    weight: "Ca. 1.450 kg totaal",
    collectionDeadline: "Binnen 21 dagen na bevestiging",
    disassembly: "Stroomloos maken en basisvoorbereiding nodig",
    logisticsStatus: "Specialistisch transport vereist",
    transportClass: "Project- en compleet inventaristransport",
    documents: [
      "Voorbeeld: eigendom bevestigd",
      "Voorbeeld: inventarislijst beschikbaar",
      "Voorbeeld: serienummers beschikbaar",
      "Voorbeeld: documentatie onvolledig",
    ],
  }),
  createListing({
    id: "gym-freeweight-zone",
    title: "Complete free-weight zone",
    categoryId: "gyms",
    image: images.gymWeights,
    gallery: [images.gymWeights, images.gymMachines],
    alt: "Commerciële halters, racks en banken in een fitnessruimte",
    description:
      "Commerciële benches, racks, dumbbells, barbells en gewichtsschijven aangeboden als één complete trainingszone.",
    location: "Eindhoven, Nederland",
    quantity: "72 assets in één zone",
    originalValue: 18000,
    price: 6950,
    weight: "Ca. 3.200 kg totaal",
    dimensions: "Zone beslaat ongeveer 65 m²",
    packaged: "Losse onderdelen en gepalletiseerde gewichten",
    palletDimensions: "Geschat 8–10 pallets",
    forklift: "Beschikbaar op afhaaldag",
    logisticsStatus: "Op pallet",
    transportClass: "Pallet- en groupagevervoer",
  }),
  createListing({
    id: "gym-lockers-balie",
    title: "Lockerwand met ontvangsbalie en toegangspoorten",
    categoryId: "gyms",
    image: images.retailShowroom,
    gallery: [images.retailShowroom, images.gymMachines],
    alt: "Commerciële ontvangstbalie en vaste opslag in een professionele locatie",
    description:
      "Combinatie van lockerwand, ontvangstbalie en elektronische entreepoorten uit een gesloten fitnesslocatie.",
    location: "Rotterdam, Nederland",
    quantity: "120 lockers + balie + poorten",
    originalValue: 14500,
    price: 4950,
    origin: "Afkomstig uit een gesloten commerciële sportschool",
    sellerType: "Liquidator bedrijfsbeëindiging",
    saleType: "Complete inventaris",
    dimensions: "Lockerlengte ca. 18 meter totaal",
    weight: "Ca. 1.800 kg",
    disassembly: "Professionele demontage vereist",
    logisticsStatus: "Verpakking vereist",
  }),
  createListing({
    id: "restaurant-meubelpakket",
    title: "Compleet restaurantmeubelpakket",
    categoryId: "restaurants",
    image: images.restaurantDining,
    gallery: [images.restaurantDining, images.restaurantBar],
    alt: "Restaurantpakket met tafels en stoelen in een professionele horecaomgeving",
    description:
      "Gecoördineerd horecapakket voor een nieuw concept, renovatie of eventlocatie.",
    location: "Amsterdam, Nederland",
    quantity: "96 stoelen + 24 tafels",
    originalValue: 18500,
    price: 6750,
    origin: "Afkomstig uit een gesloten restaurant",
    sellerType: "Horeca-liquidator",
    dimensions: "Gemengde tafel- en stoelafmetingen",
    weight: "Ca. 2.100 kg totaal",
    packaged: "Onverpakt; stapelbaar",
    logisticsStatus: "Klaar voor afhaling",
  }),
  createListing({
    id: "professionele-bar",
    title: "Professionele barcounter met backbar",
    categoryId: "restaurants",
    image: images.restaurantBar,
    gallery: [images.restaurantBar, images.restaurantDining],
    alt: "Professionele barcounter met backbar en barkrukken",
    description:
      "Volledige frontbar en backbar met opslag, RVS-werkvlakken en geïntegreerde werkzones.",
    location: "Antwerpen, België",
    quantity: "9 meter barfront + backbar",
    originalValue: 22000,
    price: 7900,
    saleType: "Complete inventaris",
    dimensions: "Barfront ca. 900 × 85 × 115 cm",
    weight: "Geschat 1.250 kg",
    disassembly: "Specialistische demontage vereist",
    forklift: "Niet aanwezig",
    loadingDock: "Straatniveau met laadzone",
    logisticsStatus: "Specialistisch transport vereist",
    transportClass: "Project- en compleet inventaristransport",
  }),
  createListing({
    id: "horeca-verlichting",
    title: "Collectie hanglampen voor horeca",
    categoryId: "restaurants",
    image: images.restaurantDining,
    gallery: [images.restaurantDining, images.restaurantBar],
    alt: "Hanglampen boven tafels in een professioneel restaurant",
    description:
      "Samenhangende collectie decoratieve hanglampen voor restaurants, bars, hotels en commerciële interieurprojecten.",
    location: "Brussel, België",
    quantity: "34 hanglampen",
    originalValue: 10200,
    price: 2850,
    saleType: "Partij",
    dimensions: "Gemengde diameters van 30 tot 85 cm",
    weight: "Ca. 280 kg totaal",
    packaged: "Beschermende verpakking vereist",
    transportClass: "Combinatie van parcel en pallet",
    logisticsStatus: "Verpakking vereist",
  }),
  createListing({
    id: "hotel-slaapkamerpakket",
    title: "Boutique hotel slaapkamerpakket",
    categoryId: "hotels",
    image: images.hotelRoom,
    gallery: [images.hotelRoom, images.hotelResortRoom, images.hotelLobby],
    alt: "Boutique hotelkamer met bed, bureau en verlichting",
    description:
      "Matchende bedden, hoofdborden, bureaus, nachtkastjes, spiegels en geselecteerde verlichting uit een hotelrenovatie.",
    location: "Antwerpen, België",
    quantity: "12 complete kamersets",
    originalValue: 29500,
    price: 3950,
    origin: "Teruggewonnen uit een boutique hotel",
    sellerType: "Hoteloperator",
    saleType: "Complete inventaris",
    dimensions: "Volledige kamerspecificatie op aanvraag",
    weight: "Ca. 4.400 kg totaal",
    collectionDeadline: "Collectievenster van vier weken",
    logisticsStatus: "Specialistisch transport vereist",
    transportClass: "Project- en compleet inventaristransport",
  }),
  createListing({
    id: "hotel-lobby-zitgroep",
    title: "Hotel lobby zitgroep",
    categoryId: "hotels",
    image: images.hotelLobby,
    gallery: [images.hotelLobby, images.hotelRoom],
    alt: "Lobbymeubilair in een professioneel hotel",
    description:
      "Gecoördineerd lobbypakket met armchairs, sofas, bijzettafels en occasional furniture voor hospitality-projecten.",
    location: "Rotterdam, Nederland",
    quantity: "18 zit- en tafelonderdelen",
    originalValue: 18000,
    price: 6250,
    origin: "Afkomstig uit een hotellobby-renovatie",
    weight: "Ca. 950 kg totaal",
    transportClass: "Groot item transport",
    logisticsStatus: "Levering mogelijk",
  }),
  createListing({
    id: "hotel-spiegels-verlichting",
    title: "Hospitality spiegels en verlichting",
    categoryId: "hotels",
    image: images.hotelResortRoom,
    gallery: [images.hotelResortRoom, images.hotelRoom],
    alt: "Hotelkamer met spiegel en verlichting in een resortomgeving",
    description:
      "Decoratieve spiegels, bedside-verlichting en geselecteerde hospitality-elementen voor hotels, resorts en serviced apartments.",
    location: "Nice, Frankrijk",
    quantity: "22 objecten",
    originalValue: 14800,
    price: 4450,
    dimensions: "Spiegels tot 180 × 110 cm",
    weight: "Ca. 620 kg totaal",
    sellerPackaging: "Beschermende kisten via offerte mogelijk",
    logisticsStatus: "Verpakking vereist",
  }),
  createListing({
    id: "cruise-lounge-stoelen",
    title: "Cruiseschip lounge stoelenset",
    categoryId: "maritime",
    image: images.maritimeDining,
    gallery: [
      images.maritimeDining,
      images.maritimeCasino,
      images.maritimeTheatre,
    ],
    alt: "Lounge- en restaurantstoelen van een passagiersschip",
    description:
      "Gecoördineerde set uit een passagiersschiplounge, geschikt voor hospitality, events, thematische interieurs of maritieme verzamelaars.",
    location: "Aalborg, Denemarken",
    quantity: "36 lounge- en diningstoelen",
    originalValue: 8500,
    price: 2400,
    origin: "Teruggewonnen uit een passagiersschip",
    sellerType: "Maritieme refit-aannemer",
    weight: "Ca. 520 kg totaal",
    logisticsStatus: "Klaar voor afhaling",
  }),
  createListing({
    id: "authentieke-scheepsverlichting",
    title: "Authentieke scheepsverlichting",
    categoryId: "maritime",
    image: images.maritimeCasino,
    gallery: [images.maritimeCasino, images.maritimeDining],
    alt: "Decoratieve verlichting en barinterieur aan boord van een passagiersschip",
    description:
      "Decoratieve en functionele scheepsarmaturen teruggewonnen uit een commerciële scheepsrefit.",
    location: "Esbjerg, Denemarken",
    quantity: "18 verlichtingsarmaturen",
    originalValue: 7200,
    price: 2850,
    origin: "Teruggewonnen tijdens een refit van een passagiersschip",
    sellerType: "Scheepswerf-leverancier",
    dimensions: "Gemengde armaturen van 25 tot 95 cm",
    weight: "Ca. 310 kg totaal",
    logisticsStatus: "Verpakking vereist",
  }),
  createListing({
    id: "messing-patrijspoorten",
    title: "Messing patrijspoorten collectie",
    categoryId: "maritime",
    image: images.maritimeCabin,
    gallery: [images.maritimeCabin, images.maritimeDining],
    alt: "Kajuitinterieur van een passagiersschip als referentie voor maritieme fittings",
    description:
      "Set authentieke messing patrijspoorten voor verzamelaars, architectonische herbestemming en uitgesproken interieurprojecten.",
    location: "Rotterdam, Nederland",
    quantity: "12 patrijspoorten",
    originalValue: 10800,
    price: 4950,
    saleType: "Partij",
    origin: "Teruggewonnen uit een commercieel schip",
    dimensions: "Buitendiameter ca. 48–62 cm",
    weight: "Ca. 420 kg totaal",
    packaged: "Op pallet in beschermende houten frames",
    logisticsStatus: "Op pallet",
    transportClass: "Pallet- en groupagevervoer",
  }),
  createListing({
    id: "retail-kassabalie",
    title: "Retail kassa- en baliesysteem",
    categoryId: "retail",
    image: images.retailShowroom,
    gallery: [images.retailShowroom, images.officeInterior],
    alt: "Professionele retailbalie in een showroom",
    description:
      "Modulair kassasysteem met opslag en kabelmanagement voor retail, receptie en showroomgebruik.",
    location: "Düsseldorf, Duitsland",
    quantity: "3 baliemodules",
    originalValue: 8900,
    price: 2450,
    origin: "Teruggewonnen uit een showroom",
    sellerType: "Commerciële pandeigenaar",
    dimensions: "Totale lengte ca. 720 cm",
    weight: "Ca. 780 kg totaal",
    disassembly: "Basisdemontage vereist",
    logisticsStatus: "Klaar voor afhaling",
  }),
  createListing({
    id: "modulaire-winkelschappen",
    title: "Modulair winkelschappenpakket",
    categoryId: "retail",
    image: images.retailShowroom,
    gallery: [images.retailShowroom, images.officeInterior],
    alt: "Modulaire commerciële schappen en displaymeubilair",
    description:
      "Groot schappenpakket voor winkels, showrooms, stockrooms en professionele resellers.",
    location: "Keulen, Duitsland",
    quantity: "48 schappenmodules",
    originalValue: 9400,
    price: 1850,
    weight: "Ca. 2.600 kg totaal",
    dimensions: "Breedte 100 cm per module; gemengde hoogtes",
    packaged: "Gedemonteerd en gebundeld",
    palletDimensions: "Geschat 12 euro pallets",
    logisticsStatus: "Op pallet",
    transportClass: "Pallet- en groupagevervoer",
  }),
  createListing({
    id: "display-vitrines",
    title: "Commerciële displayvitrines",
    categoryId: "retail",
    image: images.retailShowroom,
    gallery: [images.retailShowroom],
    alt: "Professionele winkelvitrines in een showroom",
    description:
      "Glazen displayvitrines met geïntegreerde verlichting voor retail, juwelierszaken, exhibitions en hospitalityprojecten.",
    location: "Brussel, België",
    quantity: "12 displayvitrines",
    originalValue: 13800,
    price: 4200,
    dimensions: "Ca. 100 × 45 × 210 cm per vitrine",
    weight: "Ca. 1.080 kg totaal",
    palletisable: "Nee — specialistische handling raadzaam",
    logisticsStatus: "Specialistisch transport vereist",
  }),
  createListing({
    id: "ergonomische-bureaustoelen",
    title: "Pakket ergonomische bureaustoelen",
    categoryId: "offices",
    image: images.officeInterior,
    gallery: [images.officeInterior, images.retailShowroom],
    alt: "Modern kantoorinterieur als referentie voor professionele bureaustoelen",
    description:
      "Gecoördineerd pakket bureaustoelen voor kantoorverhuizing, coworking of commerciële herinrichting.",
    location: "Amsterdam, Nederland",
    quantity: "60 bureaustoelen",
    originalValue: 27000,
    price: 6900,
    brandModel: "Gemengde premium ergonomische modellen",
    weight: "Ca. 1.020 kg totaal",
    packaged: "Stapelbaar met beschermende wrap",
    logisticsStatus: "Levering mogelijk",
  }),
  createListing({
    id: "vergaderruimte-collectie",
    title: "Vergaderruimte collectie",
    categoryId: "offices",
    image: images.officeInterior,
    gallery: [images.officeInterior],
    alt: "Vergadertafels en vergaderstoelen in een modern kantoor",
    description:
      "Vergadertafels, conferentiestoelen en opslagunits voor nieuw kantoor, relocatie of commerciële refit.",
    location: "Utrecht, Nederland",
    quantity: "3 tafels + 28 stoelen",
    originalValue: 16800,
    price: 5250,
    dimensions: "Tafels tot 420 × 140 cm",
    weight: "Ca. 1.350 kg totaal",
    disassembly: "Demontage tafelbladen vereist",
    logisticsStatus: "Klaar voor afhaling",
  }),
  createListing({
    id: "receptie-wachtzone",
    title: "Receptiebalie met wachtruimte",
    categoryId: "offices",
    image: images.retailShowroom,
    gallery: [images.retailShowroom, images.officeInterior],
    alt: "Professionele receptiebalie en wachtruimte",
    description:
      "Combinatie van receptiebalie, wachtstoelen en bijzettafels uit een kantoorrenovatie.",
    location: "Rotterdam, Nederland",
    quantity: "1 receptiebalie + 10 onderdelen",
    originalValue: 9200,
    price: 2950,
    dimensions: "Balie ca. 430 × 90 × 115 cm",
    weight: "Ca. 620 kg totaal",
    disassembly: "Balie in twee delen te demonteren",
    logisticsStatus: "Levering mogelijk",
  }),
  createListing({
    id: "beachclub-loungepakket",
    title: "Beachclub loungepakket",
    categoryId: "events",
    image: images.beachclub,
    gallery: [images.beachclub, images.outdoorBar, images.eventVenue],
    alt: "Professioneel outdoor loungepakket voor beachclub of leisurelocatie",
    description:
      "Outdoor lounge seating, lage tafels en hospitalitymeubilair uit een seizoensmatige beachclub-refit.",
    location: "Barcelona, Spanje",
    quantity: "54 outdoor meubels",
    originalValue: 17600,
    price: 5500,
    origin: "Teruggewonnen uit een beachclub-renovatie",
    sellerType: "Hospitality operator",
    condition: "Gebruikt — zichtbare outdoor gebruikssporen",
    weight: "Ca. 1.480 kg totaal",
    logisticsStatus: "Levering mogelijk",
  }),
  createListing({
    id: "mobiele-eventbar",
    title: "Mobiele eventbar modules",
    categoryId: "events",
    image: images.outdoorBar,
    gallery: [images.outdoorBar, images.beachclub],
    alt: "Outdoor barcounter in een leisure-omgeving",
    description:
      "Twee mobiele barunits voor festivals, eventlocaties, activaties en tijdelijke hospitalityconcepten.",
    location: "Lissabon, Portugal",
    quantity: "2 mobiele barunits",
    originalValue: 13500,
    price: 4650,
    dimensions: "Ca. 380 × 110 × 125 cm per unit",
    weight: "Ca. 720 kg totaal",
    palletisable: "Nee",
    logisticsStatus: "Specialistisch transport vereist",
  }),
  createListing({
    id: "festival-lockers",
    title: "Festival locker pakket",
    categoryId: "events",
    image: images.eventVenue,
    gallery: [images.eventVenue, images.beachclub],
    alt: "Professionele eventlocatie als referentie voor lockeroplossingen",
    description:
      "Modulair locker-systeem voor festivals, leisureparken, tijdelijke venues en grootschalige publiekslocaties.",
    location: "Gent, België",
    quantity: "240 modulaire lockers",
    originalValue: 19200,
    price: 7200,
    dimensions: "Modules ca. 100 × 50 × 200 cm",
    weight: "Ca. 3.100 kg totaal",
    packaged: "Gedemonteerd en op pallet",
    palletDimensions: "Geschat 14 euro pallets",
    logisticsStatus: "Op pallet",
    transportClass: "Pallet- en groupagevervoer",
  }),
  createListing({
    id: "werkplaats-lockers-banken",
    title: "Werkplaatslockers en banken",
    categoryId: "industrial",
    image: images.industrialHall,
    gallery: [images.industrialHall, images.warehouseEquipment],
    alt: "Industriële ruimte met commerciële werkplaatsuitrusting",
    description:
      "Zwaar stalen locker- en bankpakket voor werkplaatsen, warehouses, sportfaciliteiten en back-of-house ruimtes.",
    location: "Hamburg, Duitsland",
    quantity: "40 lockers + 8 banken",
    originalValue: 12500,
    price: 3900,
    condition: "Gebruikt — industriële slijtage en cosmetische sporen",
    dimensions: "Lockers ca. 60 × 50 × 195 cm",
    weight: "Ca. 2.400 kg totaal",
    logisticsStatus: "Op pallet",
  }),
  createListing({
    id: "warehouse-pallettrucks",
    title: "Pakket warehouse pallettrucks",
    categoryId: "industrial",
    image: images.warehouseEquipment,
    gallery: [images.warehouseEquipment, images.industrialHall],
    alt: "Magazijnmaterieel en pallettrucks in een professionele logistieke omgeving",
    description:
      "Pakket elektrische pallettrucks uit een professionele distributieomgeving, onder voorbehoud van inspectie en documentcontrole.",
    location: "Düsseldorf, Duitsland",
    quantity: "6 elektrische pallettrucks",
    originalValue: 32000,
    price: 11900,
    brandModel: "Gemengde BT commerciële modellen",
    weight: "Ca. 4.600 kg totaal",
    serialNumber: "Voorbeeld-serielijst beschikbaar",
    year: "2018–2021, volgens verkoper",
    knownDamage:
      "Operationele staat moet onafhankelijk worden bevestigd. Cosmetische en batterijslijtage gemeld.",
    forklift: "Laadapparatuur aanwezig op locatie",
    loadingDock: "Commerciële laaddock aanwezig",
    logisticsStatus: "Specialistisch transport vereist",
    transportClass: "Project- en compleet inventaristransport",
    documents: [
      "Voorbeeld: eigendom bevestigd",
      "Voorbeeld: serienummers beschikbaar",
      "Voorbeeld: onderhoudsgegevens beschikbaar",
      "Voorbeeld: documentatie onvolledig",
    ],
  }),
  createListing({
    id: "industriële-verlichting",
    title: "Oversized industriële verlichting",
    categoryId: "industrial",
    image: images.industrialHall,
    gallery: [images.industrialHall],
    alt: "Grote industriële hal met architectonische verlichting",
    description:
      "Grote industriële pendels en architectonische armaturen voor horeca, hotels, retail en adaptive-reuse projecten.",
    location: "Lille, Frankrijk",
    quantity: "28 industriële armaturen",
    originalValue: 16800,
    price: 4800,
    dimensions: "Diameters van 55 tot 120 cm",
    weight: "Ca. 540 kg totaal",
    packagingIncluded: "Nee — maatwerkverpakking nodig",
    sellerPackaging: "Maatwerkkisten via offerte mogelijk",
    logisticsStatus: "Verpakking vereist",
  }),
];

const completeInventories: CompleteInventory[] = [
  {
    id: "complete-gym-rotterdam",
    title: "Complete sportschoolinventaris – Rotterdam",
    projectType: "Sportschool & wellness sluiting",
    location: "Rotterdam, Nederland",
    image: images.gymMachines,
    alt: "Complete professionele sportschoolinventaris in Rotterdam",
    assetCount: "Ca. 186 assets",
    indicativePrice: 48500,
    separateSales: "Geselecteerde zones los verkrijgbaar",
    availableFrom: "Beschikbaar vanaf 15 september 2026",
    collectionWindow: "Afhaalvenster van drie weken",
    loading: "Begane grond, roldeur en heftruck aanwezig",
  },
  {
    id: "restaurant-liquidation-amsterdam",
    title: "Restaurantliquidatie – Amsterdam",
    projectType: "Horecasluiting",
    location: "Amsterdam, Nederland",
    image: images.restaurantDining,
    alt: "Complete restaurantinventaris in Amsterdam",
    assetCount: "Ca. 142 assets",
    indicativePrice: 26750,
    separateSales: "Meubelpakket en bar zijn los bespreekbaar",
    availableFrom: "Beschikbaar vanaf 1 oktober 2026",
    collectionWindow: "Tien werkdagen",
    loading: "Straattoegang; tijdslot met vergunning vereist",
  },
  {
    id: "hotel-collection-antwerp",
    title: "Boutique hotel meubilaircollectie – Antwerpen",
    projectType: "Hotelrenovatie",
    location: "Antwerpen, België",
    image: images.hotelRoom,
    alt: "Complete boutique hotelcollectie in Antwerpen",
    assetCount: "24 kamerpakketten + lobby-assets",
    indicativePrice: 39500,
    separateSales: "Kamersetpakketten vanaf minimumafname",
    availableFrom: "Beschikbaar vanaf 10 november 2026",
    collectionWindow: "Gefaseerde afhaling over vier weken",
    loading: "Service lift en laadkade aanwezig",
  },
  {
    id: "passenger-vessel-denmark",
    title: "Passagiersschip interieurinventaris – Denemarken",
    projectType: "Maritieme refit-inventaris",
    location: "Aalborg, Denemarken",
    image: images.maritimeDining,
    alt: "Interieurinventaris uit een passagiersschip in Denemarken",
    assetCount: "Ca. 310 interieur-assets",
    indicativePrice: 62000,
    separateSales: "Beschikbaar per dek en lotgrootte",
    availableFrom: "Onder voorbehoud van refitplanning",
    collectionWindow: "Beheerde shipyard-collectieslots",
    loading: "Scheepswerf, kraan en heftruck in overleg",
  },
  {
    id: "retail-showroom-dusseldorf",
    title: "Retail showroominventaris – Düsseldorf",
    projectType: "Showroomverhuizing",
    location: "Düsseldorf, Duitsland",
    image: images.retailShowroom,
    alt: "Complete retail showroominventaris in Düsseldorf",
    assetCount: "Ca. 96 assets",
    indicativePrice: 18750,
    separateSales: "Counters, schappen en displays los bespreekbaar",
    availableFrom: "Beschikbaar vanaf 20 augustus 2026",
    collectionWindow: "Afhaalvenster van twee weken",
    loading: "Begane grond met achterlaadtoegang",
  },
  {
    id: "beachclub-barcelona",
    title: "Beachclub meubelpakket – Barcelona",
    projectType: "Seizoensmatige leisure-renovatie",
    location: "Barcelona, Spanje",
    image: images.beachclub,
    alt: "Complete beachclubinventaris in Barcelona",
    assetCount: "Ca. 128 outdoor assets",
    indicativePrice: 24500,
    separateSales: "Lounge-, dining- en barzones los bespreekbaar",
    availableFrom: "Beschikbaar vanaf 5 november 2026",
    collectionWindow: "Afhaalvenster van drie weken",
    loading: "Directe voertuigtoegang buiten openingstijden",
  },
];

const buyerBenefits = [
  "Lagere kosten dan nieuw kopen",
  "Unieke en wisselende inventaris",
  "Complete bedrijfspakketten",
  "Circulair hergebruik",
  "Geverifieerde professionele verkopers",
  "Europese sourcing",
  "Managed quotation process",
  "Afhaal- en leveropties",
];

const buyerGroups = [
  "Startende ondernemers",
  "Sportschoolexploitanten",
  "Horecaondernemers",
  "Hotels",
  "Projectinrichters",
  "Interieurarchitecten",
  "Professionele opkopers",
  "Handelaren",
  "Eventbedrijven",
  "Vastgoed- en renovatiebedrijven",
];

const sellerBenefits = [
  "Geen listingkosten vooraf",
  "Losse objecten of complete inventarissen",
  "Inventaris kan op locatie blijven",
  "Professionele marketplace-presentatie",
  "Beheer van buyer enquiries",
  "Transportcoördinatie mogelijk",
  "Commissie pas na succesvolle verkoop",
];

const quoteSteps = [
  "Selecteer object of inventaris",
  "Vraag beschikbaarheid op",
  "Geef afleverbestemming door",
  "Ontvang product- en transportofferte",
  "Bevestig documentatie",
  "Rond betaling af via een erkende betaalprovider",
  "Afhaling en levering worden ingepland",
  "Order wordt afgerond na leveringsbevestiging",
];

const logisticsSteps = [
  {
    title: "Inventarisbeoordeling",
    text: "De verkoper levert afmetingen, gewicht, locatie, toegangsinformatie en laadvereisten aan.",
  },
  {
    title: "Check op verpakking en afhaling",
    text: "We bepalen of zending passeert als parcel, meubeltransport, palletvracht of specialistisch projecttransport.",
  },
  {
    title: "Transportofferte",
    text: "Transport wordt apart berekend op basis van formaat, laadvereisten, verkoperslocatie en bestemmingsadres.",
  },
  {
    title: "Boekingsbevestiging",
    text: "Afhaaldatum, leveradres, laadmiddelen en verantwoordelijkheden worden bevestigd vóór boeking.",
  },
  {
    title: "Afhaling en tracking",
    text: "Objecten worden waar mogelijk gefotografeerd vóór afhaling en tijdens transport gevolgd.",
  },
  {
    title: "Levering en bevestiging",
    text: "De koper controleert de levering en het bewijs van aflevering wordt toegevoegd aan de documentatie.",
  },
];

const shippingClasses = [
  {
    title: "Parcel delivery",
    text: "Voor kleinere objecten zoals verlichting, signage, accessoires en onderdelen.",
    price: "Indicatief transport vanaf €15",
  },
  {
    title: "Large item delivery",
    text: "Voor stoelen, tafels, spiegels, fitnessapparaten en losse interieurstukken.",
    price: "Offerte op basis van formaat en route",
  },
  {
    title: "Pallet and groupage freight",
    text: "Voor zware producten, meerdere items en complete deelpartijen.",
    price: "Europees pallet- en groupagevervoer beschikbaar",
  },
  {
    title: "Project and complete inventory transport",
    text: "Voor complete sportscholen, restaurants, hotels, bars en grote industriële inventarissen.",
    price: "Maatwerk laad- en transportplan vereist",
  },
];

const documentationGroups = [
  {
    title: "Verificatie verkoper en eigendom",
    items: [
      "Bedrijfsgegevens",
      "Btw-nummer indien van toepassing",
      "Bevestiging dat de verkoper bevoegd is om te verkopen",
      "Contact- en betaalverificatie via een geschikte provider",
    ],
  },
  {
    title: "Inventarisdocumentatie",
    items: [
      "Inventarislijst en aantallen",
      "Merken, modellen en serienummers waar beschikbaar",
      "Afmetingen, gewichten en foto’s",
      "Conditierapport en bekende gebreken",
    ],
  },
  {
    title: "Transportdocumentatie",
    items: [
      "Paklijst en afhaalbevestiging",
      "Transportopdracht en CMR waar relevant",
      "Tracking en proof of delivery",
      "Foto’s vóór afhaling",
    ],
  },
  {
    title: "Commerciële documentatie",
    items: [
      "Offerte en orderbevestiging",
      "Factuur en btw-informatie",
      "Afspraken over commissie en transportkosten",
      "Betaalstatus",
    ],
  },
  {
    title: "Aanvullende documentatie",
    items: [
      "Onderhoudsgegevens en handleidingen",
      "Testdocumenten en veiligheidsinformatie",
      "Oorsprongs- of herkomstdocumentatie",
      "Douanedocumentatie voor handel buiten de EU",
    ],
  },
];

const trustPoints = [
  {
    title: "Gecureerde listings",
    text: "Iedere listing wordt inhoudelijk beoordeeld vóór publicatie.",
  },
  {
    title: "Geverifieerde verkopers",
    text: "Professionele verkopers moeten bedrijfs- en eigendomsinformatie aanleveren.",
  },
  {
    title: "Duidelijke staatinformatie",
    text: "Bekende schade en beschikbare documentatie worden getoond vóór aankoop.",
  },
  {
    title: "Beheerde transacties",
    text: "Beschikbaarheid, transportvereisten en betaalstappen worden bevestigd vóór de order doorgaat.",
  },
];

const navigationItems = [
  { label: "Inventaris", href: "#inventory" },
  { label: "Categorieën", href: "#categories" },
  { label: "Complete inventarissen", href: "#complete-inventories" },
  { label: "Hoe werkt het", href: "#how-it-works" },
  { label: "Logistiek", href: "#logistics" },
  { label: "Documentatie", href: "#documentation" },
  { label: "Inventaris aanmelden", href: "#seller-form" },
  { label: "Over", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*                              HERBRUIKBARE COMPONENTEN                      */
/* -------------------------------------------------------------------------- */

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

function SmallBadge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "light";
}) {
  const className =
    tone === "accent"
      ? "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-100/80"
      : tone === "light"
        ? "border-white/15 bg-white text-[#071013]"
        : "border-white/10 bg-white/[0.05] text-white/65";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.13em] ${className}`}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*                        HORIZONTALE CATEGORIE-SLIDER                        */
/* -------------------------------------------------------------------------- */

function CategorySlider({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollSlider = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-label="Categorieën"
      className="border-y border-white/10 bg-[#09161a]"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 md:py-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollSlider("left")}
            aria-label="Scroll categorieën naar links"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white/70 transition hover:border-cyan-300/40 hover:text-cyan-100 md:flex"
          >
            ←
          </button>

          <div
            ref={scrollRef}
            className="hide-scrollbar flex min-w-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pr-12"
          >
            {categories.map((category) => {
              const active = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onCategoryChange(category.id)}
                  className={`min-h-12 shrink-0 snap-start rounded-full border px-5 py-3 text-sm font-black transition ${
                    active
                      ? "border-cyan-200 bg-cyan-300 text-[#071013]"
                      : "border-white/10 bg-white/[0.04] text-white/65 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollSlider("right")}
            aria-label="Scroll categorieën naar rechts"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white/70 transition hover:border-cyan-300/40 hover:text-cyan-100 md:flex"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  count,
  onSelect,
}: {
  category: (typeof categories)[number];
  count: number;
  onSelect: () => void;
}) {
  if (!category.image || !category.title || !category.description) {
    return null;
  }

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a171b] md:rounded-[2rem]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={category.image}
          alt={category.alt ?? category.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-[#071013]/20 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            {count} voorbeelditems
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.045em] text-white">
            {category.title}
          </h3>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <p className="leading-7 text-white/60">
          {category.description}
        </p>

        <button
          type="button"
          onClick={onSelect}
          className="mt-5 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-cyan-300/50 hover:bg-cyan-300 hover:text-[#071013]"
        >
          Bekijk inventaris
        </button>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PRODUCTKAART                                */
/* -------------------------------------------------------------------------- */

function ListingCard({
  listing,
  onOpen,
}: {
  listing: Listing;
  onOpen: (listing: Listing) => void;
}) {
  const saving = listing.originalValue - listing.price;

  return (
    <article className="filter-fade min-w-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a171b] shadow-2xl shadow-black/20 md:rounded-[2rem]">
      <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.03]">
        <img
          src={listing.image}
          alt={listing.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-transparent to-transparent" />

        <div className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] flex-wrap gap-2">
          <SmallBadge tone="light">Voorbeeldlisting</SmallBadge>
          <SmallBadge>Geverifieerde verkoper</SmallBadge>
        </div>
      </div>

      <div className="p-5 md:p-7">
        <div className="flex flex-wrap gap-2">
          <SmallBadge>
            {categories.find(
              (category) => category.id === listing.categoryId,
            )?.label ?? listing.categoryId}
          </SmallBadge>
          <SmallBadge>{listing.saleType}</SmallBadge>
          <SmallBadge>{listing.availability}</SmallBadge>
        </div>

        <h3 className="mt-4 break-words text-2xl font-black tracking-[-0.05em] text-white md:text-3xl">
          {listing.title}
        </h3>

        <p className="mt-3 leading-7 text-white/60">
          {listing.description}
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/[0.04] p-4">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-white/35">
              Locatie
            </p>
            <p className="mt-2 text-sm font-bold text-white/80">
              {listing.location}
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] p-4">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-white/35">
              Conditie
            </p>
            <p className="mt-2 text-sm font-bold text-white/80">
              {listing.condition}
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] p-4">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-white/35">
              Hoeveelheid
            </p>
            <p className="mt-2 text-sm font-bold text-white/80">
              {listing.quantity}
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] p-4">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-white/35">
              Verkoperstype
            </p>
            <p className="mt-2 text-sm font-bold text-white/80">
              {listing.sellerType}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-cyan-200">
                Logistieke status
              </p>
              <p className="mt-2 text-sm font-bold text-white">
                {listing.logisticsStatus}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xs text-white/45">
                {listing.pickup}
              </p>
              <p className="mt-1 text-xs text-white/45">
                {listing.delivery}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/[0.05] p-4">
            <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/40">
              Geschatte oorspronkelijke waarde
            </p>
            <p className="mt-2 text-lg font-black text-white line-through decoration-white/30">
              {formatEuro(listing.originalValue)}
            </p>
          </div>

          <div className="rounded-2xl bg-cyan-300 p-4 text-[#071013]">
            <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] opacity-60">
              Salvage Harbor-prijs
            </p>
            <p className="mt-2 text-xl font-black">
              {formatEuro(listing.price)}
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.05] p-4">
            <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/40">
              Potentiële besparing
            </p>
            <p className="mt-2 text-lg font-black text-cyan-200">
              {formatEuro(saving)}
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs leading-6 text-white/38">
          Indicatieve pilot pricing. Beschikbaarheid,
          productspecificaties, conditie en transport worden bevestigd
          vóór aankoop.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => onOpen(listing)}
            className="w-full rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#071013] transition hover:bg-cyan-200"
          >
            Bekijk details
          </button>

          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(
              `Offerteaanvraag: ${listing.title}`,
            )}`}
            className="w-full rounded-full border border-white/15 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            Vraag offerte aan
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                DETAIL MODAL                                */
/* -------------------------------------------------------------------------- */

function ListingModal({
  listing,
  onClose,
}: {
  listing: Listing;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const saving = listing.originalValue - listing.price;

  useEffect(() => {
    setActiveImage(0);
  }, [listing.id]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const detailRows: Array<[string, string]> = [
    ["Omschrijving", listing.description],
    ["Afmetingen", listing.dimensions],
    ["Geschat gewicht", listing.weight],
    ["Hoeveelheid", listing.quantity],
    ["Merk en model", listing.brandModel],
    ["Serienummer", listing.serialNumber],
    ["Leeftijd / bouwjaar", listing.year],
    ["Conditie", listing.condition],
    ["Bekende schade", listing.knownDamage],
    ["Locatie", listing.location],
    ["Verdieping / laadlocatie", listing.floorAccess],
    ["Palletiseerbaar", listing.palletisable],
    ["Verpakking inbegrepen", listing.packagingIncluded],
    ["Heftruck aanwezig", listing.forklift],
    ["Laaddock aanwezig", listing.loadingDock],
    ["Afhalen mogelijk", listing.pickup],
    ["Levering mogelijk", listing.delivery],
    ["Herkomst", listing.origin],
    ["Verkopersverificatie", listing.sellerName],
  ];

  const logisticsRows: Array<[string, string]> = [
    ["Collection deadline", listing.collectionDeadline],
    ["Verpakt of onverpakt", listing.packaged],
    ["Palletafmetingen", listing.palletDimensions],
    ["Begane grond", listing.groundFloor],
    ["Trap of lift", listing.stairsLift],
    ["Demontage vereist", listing.disassembly],
    ["Verkoper kan verpakken", listing.sellerPackaging],
    ["Transportklasse", listing.transportClass],
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${listing.title} details`}
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/75 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#09161a] shadow-2xl md:rounded-[2rem]">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#09161a]/95 px-4 py-4 backdrop-blur-xl md:px-6">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.17em] text-cyan-200">
              Detailweergave
            </p>
            <h2 className="mt-1 truncate text-lg font-black text-white md:text-xl">
              {listing.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Sluit detailweergave"
            className="ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-2xl text-white transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            ×
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-white/10 p-4 sm:p-6 lg:border-b-0 lg:border-r">
            <div className="overflow-hidden rounded-[1.5rem] bg-white/[0.03]">
              <img
                src={listing.gallery[activeImage] ?? listing.image}
                alt={`${listing.alt} — afbeelding ${activeImage + 1}`}
                className="aspect-[16/10] h-full w-full object-cover"
              />
            </div>

            <div className="hide-scrollbar mt-3 flex gap-3 overflow-x-auto pb-2">
              {listing.gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`shrink-0 overflow-hidden rounded-xl border ${
                    activeImage === index
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

            <div className="mt-6 flex flex-wrap gap-2">
              <SmallBadge>Voorbeeldlisting</SmallBadge>
              <SmallBadge>Geverifieerde verkoper</SmallBadge>
              <SmallBadge>{listing.saleType}</SmallBadge>
              <SmallBadge>{listing.logisticsStatus}</SmallBadge>
            </div>

            <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] text-white">
              {listing.title}
            </h3>

            <p className="mt-4 leading-8 text-white/65">
              {listing.description}
            </p>

            <div className="mt-6 rounded-2xl border border-amber-200/15 bg-amber-100/[0.05] p-4 text-sm leading-7 text-amber-50/70">
              Productspecificaties zijn gebaseerd op door de verkoper
              aangeleverde informatie en moeten vóór aankoop worden
              bevestigd.
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/[0.05] p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/40">
                  Geschatte oorspronkelijke waarde
                </p>
                <p className="mt-2 text-lg font-black line-through decoration-white/30">
                  {formatEuro(listing.originalValue)}
                </p>
              </div>

              <div className="rounded-2xl bg-cyan-300 p-4 text-[#071013]">
                <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] opacity-60">
                  Salvage Harbor-prijs
                </p>
                <p className="mt-2 text-xl font-black">
                  {formatEuro(listing.price)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.05] p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-white/40">
                  Potentiële besparing
                </p>
                <p className="mt-2 text-lg font-black text-cyan-200">
                  {formatEuro(saving)}
                </p>
              </div>
            </div>

            <h4 className="mt-8 text-xl font-black text-white">
              Productspecificaties
            </h4>

            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {detailRows.map(([label, value]) => (
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

            <h4 className="mt-8 text-xl font-black text-white">
              Logistieke informatie
            </h4>

            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {logisticsRows.map(([label, value]) => (
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

            <h4 className="mt-8 text-xl font-black text-white">
              Beschikbare documentatie
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">
              {listing.documents.map((document) => (
                <span
                  key={document}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-2 text-xs font-bold text-cyan-100/75"
                >
                  {document}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                  `Offerteaanvraag: ${listing.title}`,
                )}`}
                className="rounded-full bg-white px-4 py-3 text-center text-xs font-black uppercase tracking-[0.13em] text-[#071013] transition hover:bg-cyan-200"
              >
                Vraag offerte aan
              </a>

              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                  `Vraag over levering: ${listing.title}`,
                )}`}
                className="rounded-full border border-white/15 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.13em] text-white transition hover:border-cyan-300/40"
              >
                Vraag levering aan
              </a>

              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                  `Vraag documentatie op: ${listing.title}`,
                )}`}
                className="rounded-full border border-white/15 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.13em] text-white transition hover:border-cyan-300/40"
              >
                Vraag documentatie op
              </a>
            </div>

            {/* Let op:
               Voor betrouwbare Netlify Forms-detectie in Next.js App Router
               hoort later nog een statisch public/__forms.html bestand te worden
               toegevoegd met dezelfde form-name en velden. */}
            <form
              name="buyer-quote"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/?quote=sent#inventory"
              className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <input type="hidden" name="form-name" value="buyer-quote" />
              <input type="hidden" name="listing" value={listing.title} />
              <p className="hidden">
                <label>
                  Niet invullen: <input name="bot-field" />
                </label>
              </p>

              <h4 className="text-xl font-black text-white">
                Vraag deze listing aan
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Vul je gegevens en afleverbestemming in. Beschikbaarheid,
                logistiek en documentatie worden bevestigd vóór betaling.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-bold text-white/70">
                  Naam
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  />
                </label>

                <label className="text-sm font-bold text-white/70">
                  E-mail
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  />
                </label>

                <label className="text-sm font-bold text-white/70 sm:col-span-2">
                  Afleverbestemming
                  <input
                    required
                    name="delivery-destination"
                    placeholder="Stad, postcode en land"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  />
                </label>

                <label className="text-sm font-bold text-white/70 sm:col-span-2">
                  Bericht
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#071013] transition hover:bg-white"
              >
                Verzend offerteaanvraag
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         COMPLETE INVENTARIS KAART                          */
/* -------------------------------------------------------------------------- */

function CompleteInventoryCard({
  inventory,
}: {
  inventory: CompleteInventory;
}) {
  const subject = encodeURIComponent(inventory.title);

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
        <SmallBadge tone="light">
          <span className="absolute left-4 top-4">Voorbeeldinventaris</span>
        </SmallBadge>
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
            ["Locatie", inventory.location],
            ["Aantal assets", inventory.assetCount],
            [
              "Indicatieve vraagprijs",
              formatEuro(inventory.indicativePrice),
            ],
            ["Losse verkoop", inventory.separateSales],
            ["Beschikbaar vanaf", inventory.availableFrom],
            ["Afhaalperiode", inventory.collectionWindow],
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
            Laadmogelijkheden
          </p>
          <p className="mt-2 text-sm leading-6 text-white/75">
            {inventory.loading}
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          <a
            href={`mailto:${contactEmail}?subject=${subject}%20-%20Volledige%20inventarislijst`}
            className="rounded-full bg-white px-5 py-3 text-center text-xs font-black uppercase tracking-[0.13em] text-[#071013] transition hover:bg-cyan-200"
          >
            Vraag volledige inventarislijst aan
          </a>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${contactEmail}?subject=${subject}%20-%20Bezoek%20op%20locatie`}
              className="rounded-full border border-white/15 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.13em] text-white transition hover:border-cyan-300/40"
            >
              Vraag locatiebezoek aan
            </a>

            <a
              href={`mailto:${contactEmail}?subject=${subject}%20-%20Transportvraag`}
              className="rounded-full border border-white/15 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.13em] text-white transition hover:border-cyan-300/40"
            >
              Vraag transport aan
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                           SELLER INTAKE FORMULIER                          */
/* -------------------------------------------------------------------------- */

function SellerIntakeForm() {
  return (
    <form
      id="seller-form"
      name="seller-intake"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      encType="multipart/form-data"
      action="/?submitted=true#seller-form"
      className="rounded-[1.75rem] border border-white/10 bg-[#0a171b] p-5 md:rounded-[2rem] md:p-8"
    >
      <input type="hidden" name="form-name" value="seller-intake" />
      <p className="hidden">
        <label>
          Niet invullen: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-bold text-white/70">
          Bedrijfsnaam *
          <input
            required
            name="company-name"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        <label className="text-sm font-bold text-white/70">
          Contactpersoon *
          <input
            required
            name="contact-person"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        <label className="text-sm font-bold text-white/70">
          E-mailadres *
          <input
            required
            type="email"
            name="email"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        <label className="text-sm font-bold text-white/70">
          Telefoonnummer *
          <input
            required
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        <label className="text-sm font-bold text-white/70">
          Land *
          <input
            required
            name="country"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        <label className="text-sm font-bold text-white/70">
          Locatie van inventaris *
          <input
            required
            name="inventory-location"
            placeholder="Stad, postcode en land"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        <label className="text-sm font-bold text-white/70">
          Type bedrijf of herkomst *
          <select
            required
            name="business-origin"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          >
            <option value="">Selecteer een optie</option>
            <option>Bedrijfssluiting</option>
            <option>Faillissement of liquidatie</option>
            <option>Renovatie of refit</option>
            <option>Professionele reseller</option>
            <option>Curator of insolventieprofessional</option>
            <option>Pandeigenaar</option>
            <option>Overig</option>
          </select>
        </label>

        <label className="text-sm font-bold text-white/70">
          Reden van verkoop *
          <input
            required
            name="reason-for-sale"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        <label className="text-sm font-bold text-white/70">
          Categorie *
          <select
            required
            name="category"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          >
            <option value="">Selecteer een categorie</option>
            <option>Sportschool & wellness</option>
            <option>Restaurant & bar</option>
            <option>Hotel & resort</option>
            <option>Maritiem & cruise</option>
            <option>Retail & showroom</option>
            <option>Kantoor</option>
            <option>Events & leisure</option>
            <option>Industrieel</option>
            <option>Overig</option>
          </select>
        </label>

        <label className="text-sm font-bold text-white/70">
          Losse items of complete inventaris *
          <select
            required
            name="inventory-type"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          >
            <option value="">Selecteer een optie</option>
            <option>Losse items</option>
            <option>Partijen</option>
            <option>Complete inventaris</option>
            <option>Combinatie</option>
          </select>
        </label>

        <label className="text-sm font-bold text-white/70">
          Geschat aantal items *
          <input
            required
            type="number"
            min="1"
            name="estimated-items"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        <label className="text-sm font-bold text-white/70">
          Gewenste verkoopperiode *
          <input
            required
            name="sale-period"
            placeholder="Bijvoorbeeld: binnen 6 weken"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        <label className="text-sm font-bold text-white/70">
          Minimale verkoopprijs
          <input
            type="number"
            min="0"
            step="1"
            name="minimum-price-eur"
            placeholder="Bedrag in euro"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        <label className="text-sm font-bold text-white/70">
          Losse verkoop mogelijk? *
          <select
            required
            name="separate-sales"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          >
            <option value="">Selecteer een optie</option>
            <option>Ja</option>
            <option>Nee</option>
            <option>Alleen per overeengekomen lot</option>
          </select>
        </label>

        <label className="text-sm font-bold text-white/70">
          Afhalen door koper mogelijk? *
          <select
            required
            name="pickup-possible"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          >
            <option value="">Selecteer een optie</option>
            <option>Ja</option>
            <option>Nee</option>
            <option>Op afspraak</option>
          </select>
        </label>

        <label className="text-sm font-bold text-white/70">
          Bezorgen mogelijk? *
          <select
            required
            name="seller-delivery"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          >
            <option value="">Selecteer een optie</option>
            <option>Ja</option>
            <option>Nee</option>
            <option>Alleen lokaal</option>
          </select>
        </label>

        <label className="text-sm font-bold text-white/70 md:col-span-2">
          Aanwezige laadmiddelen
          <input
            name="loading-equipment"
            placeholder="Heftruck, laaddock, kraan, palletwagen, goederenlift, etc."
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        <label className="text-sm font-bold text-white/70 md:col-span-2">
          Beschikbare documentatie
          <input
            name="available-documentation"
            placeholder="Inventarislijst, facturen, serienummers, onderhoudsgegevens, conditierapport, etc."
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>

        {/* Netlify Forms ondersteunt één upload per veld.
           Daarom gebruiken we meerdere losse velden in plaats van één
           veld met multiple. */}
        <label className="text-sm font-bold text-white/70">
          Foto upload 1
          <input
            type="file"
            name="photo-one"
            accept="image/*"
            className="mt-2 block w-full rounded-xl border border-dashed border-white/15 bg-[#071013] px-4 py-4 text-sm text-white/60 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-300 file:px-4 file:py-2 file:font-black file:text-[#071013]"
          />
        </label>

        <label className="text-sm font-bold text-white/70">
          Foto upload 2
          <input
            type="file"
            name="photo-two"
            accept="image/*"
            className="mt-2 block w-full rounded-xl border border-dashed border-white/15 bg-[#071013] px-4 py-4 text-sm text-white/60 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-300 file:px-4 file:py-2 file:font-black file:text-[#071013]"
          />
        </label>

        <label className="text-sm font-bold text-white/70 md:col-span-2">
          Foto upload 3
          <input
            type="file"
            name="photo-three"
            accept="image/*"
            className="mt-2 block w-full rounded-xl border border-dashed border-white/15 bg-[#071013] px-4 py-4 text-sm text-white/60 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-300 file:px-4 file:py-2 file:font-black file:text-[#071013]"
          />
        </label>

        <label className="text-sm font-bold text-white/70 md:col-span-2">
          Aanvullende opmerkingen
          <textarea
            name="additional-comments"
            rows={5}
            className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#071013] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
          />
        </label>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4 text-sm leading-7 text-cyan-50/70">
        Het indienen van inventaris leidt niet automatisch tot
        publicatie. Elke verkoper en listing wordt eerst beoordeeld.
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#071013] transition hover:bg-white"
      >
        Dien inventaris ter beoordeling in
      </button>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/*                                     PAGINA                                 */
/* -------------------------------------------------------------------------- */

export default function Home() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryId>("all");
  const [selectedListing, setSelectedListing] =
    useState<Listing | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredListings = useMemo(
    () =>
      activeCategory === "all"
        ? listings
        : listings.filter(
            (listing) => listing.categoryId === activeCategory,
          ),
    [activeCategory],
  );

  useEffect(() => {
    const shouldLock = Boolean(selectedListing) || mobileMenuOpen;
    document.body.style.overflow = shouldLock ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedListing, mobileMenuOpen]);

  const selectCategory = (
    category: CategoryId,
    scrollToInventory = false,
  ) => {
    setActiveCategory(category);

    if (scrollToInventory) {
      window.setTimeout(() => {
        document
          .getElementById("inventory")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 50);
    }
  };

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

        @keyframes filterFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .filter-fade {
          animation: filterFade 280ms ease-out both;
        }
      `}</style>

      {/* ------------------------------------------------------------------ */}
      {/* NAVIGATIE                                                          */}
      {/* ------------------------------------------------------------------ */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061014]/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-[#071013]">
              S
            </span>

            <span className="min-w-0">
              <span className="block truncate text-[0.82rem] font-bold tracking-[0.14em] text-white sm:text-sm sm:tracking-[0.2em]">
                Salvage Harbor
              </span>
              <span className="hidden text-xs text-white/42 sm:block">
                Curated European business inventory
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-3 xl:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.68rem] font-bold text-white/58 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#seller-form"
              className="hidden shrink-0 rounded-full bg-white px-4 py-2.5 text-xs font-black text-[#071013] transition hover:bg-cyan-200 sm:inline-flex"
            >
              Inventaris aanmelden
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xl text-white xl:hidden"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-[90] bg-[#061014]/98 p-4 backdrop-blur-xl xl:hidden">
          <div className="mx-auto flex h-full max-w-xl flex-col">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="font-black tracking-[0.16em] text-white">
                Salvage Harbor
              </p>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Sluit menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-2xl text-white"
              >
                ×
              </button>
            </div>

            <nav className="hide-scrollbar flex-1 space-y-2 overflow-y-auto py-5">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
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
              Neem contact op
            </a>
          </div>
        </div>
      ) : null}

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="top"
        className="relative min-h-[760px] overflow-hidden bg-[#071013] sm:min-h-[800px] md:min-h-screen"
      >
        {/* Mobiele fallback: lichtgewicht achtergrond zonder zware video */}
        <div className="absolute inset-0 md:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(74,214,239,0.16),transparent_34%),linear-gradient(145deg,#061014_0%,#0a2027_52%,#071013_100%)]" />
          <div className="absolute -right-24 top-28 h-72 w-72 rounded-full border border-cyan-100/10" />
          <div className="absolute -left-20 bottom-24 h-64 w-64 rounded-full bg-cyan-300/10 blur-[100px]" />
        </div>

        {/* Hero-video op desktop blijft het maritieme anker van het merk */}
        <div className="absolute inset-0 hidden overflow-hidden md:block">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/salvage-harbor-intro.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="absolute inset-0 bg-[#061014]/48 md:bg-[#061014]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061014] via-[#061014]/80 to-[#061014]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061014] via-transparent to-[#061014]/35" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-4 pb-16 pt-28 sm:min-h-[800px] md:min-h-screen md:px-8 md:pb-24 md:pt-32">
          <div className="w-full max-w-[820px]">
            <div className="mb-6 inline-flex max-w-full rounded-full border border-white/15 bg-black/15 px-4 py-2 text-[0.65rem] font-bold uppercase leading-5 tracking-[0.14em] text-white/75 backdrop-blur-xl sm:text-xs md:text-sm">
              Gecureerde Europese marketplace voor hergebruikte
              bedrijfsinventaris
            </div>

            <h1 className="max-w-[800px] break-words text-[2.8rem] font-black leading-[0.91] tracking-[-0.07em] text-white sm:text-[4.4rem] md:text-[5.7rem]">
              Bijzondere bedrijfsinventaris. Klaar voor een tweede
              leven.
            </h1>

            <p className="mt-7 max-w-[700px] text-base leading-8 text-white/72 sm:text-lg md:text-xl">
              Ontdek meubilair, apparatuur en complete inventarissen
              uit restaurants, hotels, sportscholen, schepen en
              commerciële locaties verspreid over Europa.
            </p>

            <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a
                href="#inventory"
                className="w-full rounded-full bg-white px-7 py-4 text-center text-xs font-black uppercase tracking-[0.15em] text-[#071013] transition hover:bg-cyan-200 sm:w-auto sm:px-8 sm:text-sm"
              >
                Bekijk inventaris
              </a>

              <a
                href="#seller-form"
                className="w-full rounded-full border border-white/25 bg-white/[0.04] px-7 py-4 text-center text-xs font-black uppercase tracking-[0.15em] text-white backdrop-blur-xl transition hover:bg-white/10 sm:w-auto sm:px-8 sm:text-sm"
              >
                Meld inventaris aan
              </a>
            </div>

            <p className="mt-6 text-sm leading-7 text-white/50">
              Gecureerde inventaris. Geverifieerde professionele
              verkopers. Beheerde Europese logistiek.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35 md:flex">
          Scroll om te verkennen
          <span className="h-px w-12 bg-white/30" />
        </div>
      </section>

      {/* Horizontale categorie-slider direct onder de hero */}
      <CategorySlider
        activeCategory={activeCategory}
        onCategoryChange={(category) =>
          selectCategory(category, true)
        }
      />

      {/* ------------------------------------------------------------------ */}
      {/* OVER / POSITIONERING                                               */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="about"
        className="border-b border-white/10 bg-white/[0.025]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="Over Salvage Harbor"
            title="Een hoogwaardige marketplace, geen rommelige tweedehandswebsite."
          />

          <div className="space-y-5 text-base leading-8 text-white/68 md:text-lg">
            <p>
              Salvage Harbor verbindt bijzondere, herbruikbare
              bedrijfsinventaris met een nieuwe generatie kopers in
              Europa.
            </p>

            <p>
              Inventaris kan afkomstig zijn uit faillissementen,
              bedrijfssluitingen, renovaties, refits, curatoren,
              liquidators, professionele opkopers en commerciële
              vastgoedeigenaren.
            </p>

            <p>
              De maritieme oorsprong blijft zichtbaar in het merk, maar
              het platform is nu breder opgezet voor hospitality,
              gyms, retail, kantoren, events en specialistische
              commerciële locaties.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* VISUELE CATEGORIEËN                                               */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="categories"
        className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20"
      >
        <SectionHeading
          eyebrow="Sectoren"
          title="Zakelijke inventaris uit onderscheidende commerciële omgevingen."
          text="Kies een sector om de collectie te filteren. De beeldselectie hieronder komt uit hospitality, maritieme, fitness-, retail-, kantoor-, leisure- en industriële contexten."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories
            .filter((category) => category.id !== "all")
            .map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                count={
                  listings.filter(
                    (listing) =>
                      listing.categoryId === category.id,
                  ).length
                }
                onSelect={() =>
                  selectCategory(category.id, true)
                }
              />
            ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* INVENTARIS                                                         */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="inventory"
        className="border-y border-white/10 bg-[#09161a]"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Inventaris"
              title="Wisselende professionele inventaris uit heel Europa."
              text="Ontdek losse objecten, partijen en complete interieurs. Alle producten hieronder zijn voorbeeldlistings met indicatieve pilot pricing."
            />

            <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white/60">
              {filteredListings.length} van {listings.length} voorbeelden
            </div>
          </div>

          <div className="mt-8">
            <CategorySlider
              activeCategory={activeCategory}
              onCategoryChange={(category) =>
                selectCategory(category)
              }
            />
          </div>

          <div
            key={activeCategory}
            className="mt-10 grid min-w-0 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onOpen={setSelectedListing}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* COMPLETE INVENTARISSEN                                             */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="complete-inventories"
        className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20"
      >
        <SectionHeading
          eyebrow="Complete inventarissen"
          title="Complete bedrijfsinventarissen"
          text="Koop een volledige operationele inventaris of selecteer losse assets. Geschikt voor nieuwe bedrijven, relocaties, renovaties en professionele resellers."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {completeInventories.map((inventory) => (
            <CompleteInventoryCard
              key={inventory.id}
              inventory={inventory}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* HOE WERKT HET                                                      */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="how-it-works"
        className="border-y border-white/10 bg-[#0a171b]"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Managed quotation process"
            title="Een beheerd offerteproces voor grote en bijzondere assets."
            text="Grote objecten en complete inventarissen gaan niet via een standaard webshopcheckout. Beschikbaarheid, documentatie, laadvereisten en transportkosten worden bevestigd vóór betaling."
          />

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quoteSteps.map((step, index) => (
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
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* KOPERS                                                             */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <SectionHeading
            eyebrow="Voor kopers"
            title="Professionele inventaris en interieurs voor minder."
            text="Ontdek wisselende bedrijfsinventaris van geverifieerde verkopers in Europa. Koop losse assets, partijen of complete interieurs."
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

      {/* ------------------------------------------------------------------ */}
      {/* VERKOPERS                                                          */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionHeading
                eyebrow="Voor verkopers"
                title="Geef ongebruikte bedrijfsinventaris nieuwe waarde."
                text="Salvage Harbor helpt bedrijven, curatoren, liquidators, professionele resellers, hoteloperators, restaurants, sportscholen, renovatiebedrijven en ship recyclers bij de verkoop van herbruikbare inventaris aan kopers in heel Europa."
              />

              <div className="mt-8 space-y-3">
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

              <a
                href="#seller-form"
                className="mt-7 inline-flex rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#071013] transition hover:bg-cyan-200"
              >
                Meld inventaris aan
              </a>
            </div>

            <SellerIntakeForm />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* LOGISTIEK                                                          */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="logistics"
        className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20"
      >
        <SectionHeading
          eyebrow="Logistiek"
          title="Beheerde logistiek voor ieder type inventaris."
          text="Van één stoel tot een complete sportschool of restaurantinventaris: Salvage Harbor coördineert de informatie die nodig is voor afhaling en levering."
        />

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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

              <p className="mt-3 leading-7 text-white/58">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Verzendklassen"
            title="Vier verzendmethoden voor verschillende asset-types."
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
            Transportprijzen op voorbeeldlistings zijn indicatief.
            Definitieve transportkosten worden bevestigd vóór aankoop.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* DOCUMENTATIE                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="documentation"
        className="border-y border-white/10 bg-[#0a171b]"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Documentatie"
            title="Heldere documentatie bij elke transactie."
            text="Salvage Harbor ondersteunt professionele listings en beheerde transacties met relevante verkopers-, inventaris-, logistieke en commerciële documentatie."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
            Beschikbaarheid van documentatie verschilt per product.
            Kopers kunnen zien welke documentatie beschikbaar is
            voordat een order wordt bevestigd.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-black text-white">
              Voorbeeld van documentatiebadges
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Voorbeeld: eigendom bevestigd",
                "Voorbeeld: inventarislijst beschikbaar",
                "Voorbeeld: conditierapport beschikbaar",
                "Voorbeeld: afmetingen geverifieerd",
                "Voorbeeld: serienummers beschikbaar",
                "Voorbeeld: onderhoudsgegevens beschikbaar",
                "Voorbeeld: transportgereed",
                "Voorbeeld: documentatie onvolledig",
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
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* VERTROUWEN                                                         */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="Verificatie en vertrouwen"
          title="Professionele inventaris. Geverifieerd vóór publicatie."
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

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Seller-provided specifications",
            "Documentatie waar vermeld beschikbaar",
            "Transport bevestigd vóór aankoop",
            "Iedere listing wordt beoordeeld",
          ].map((statement) => (
            <div
              key={statement}
              className="rounded-2xl border border-white/10 bg-[#0a171b] p-4 text-sm font-bold text-white/60"
            >
              {statement}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PILOTMELDING                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-20">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 text-sm leading-7 text-white/45 md:p-6">
          Salvage Harbor werkt momenteel als pilot marketplace.
          Voorbeeldlistings, indicatieve prijzen en transactiefuncties
          worden samen met geselecteerde professionele verkopers
          verder ontwikkeld.
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                             */}
      {/* ------------------------------------------------------------------ */}

      <footer
        id="contact"
        className="border-t border-white/10 bg-[#061014]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-lg font-black tracking-[0.14em] text-white">
              Salvage Harbor
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
              Een gecureerde Europese marketplace voor hergebruikte
              bedrijfsinventaris en commerciële interieurs, afkomstig
              uit professionele verkopers, bedrijfssluitingen,
              renovaties, refits en specialistische projecten.
            </p>
          </div>

          <div className="lg:text-right">
            <p className="text-sm font-bold text-white/55">E-mail</p>

            <a
              href={`mailto:${contactEmail}`}
              className="mt-2 inline-block text-lg font-black text-cyan-200"
            >
              {contactEmail}
            </a>

            <div className="mt-5 flex flex-wrap gap-3 lg:justify-end">
              <a
                href="#inventory"
                className="text-sm text-white/45 hover:text-white"
              >
                Inventaris
              </a>
              <a
                href="#seller-form"
                className="text-sm text-white/45 hover:text-white"
              >
                Inventaris aanmelden
              </a>
              <a
                href="#logistics"
                className="text-sm text-white/45 hover:text-white"
              >
                Logistiek
              </a>
              <a
                href="#documentation"
                className="text-sm text-white/45 hover:text-white"
              >
                Documentatie
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between md:px-8">
            <p>© 2026 Salvage Harbor Europe</p>
            <p>
              Gecureerde inventaris · Beheerde offertes · Europese
              sourcing
            </p>
          </div>
        </div>
      </footer>

      {selectedListing ? (
        <ListingModal
          listing={selectedListing}
          onClose={() => setSelectedListing(null)}
        />
      ) : null}
    </main>
  );
}
