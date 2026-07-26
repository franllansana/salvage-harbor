import type { Metadata } from "next";

export const metadata: Metadata = { title: "Logistics" };
const steps = [
  ["Inventory assessment", "The seller provides dimensions, weight, access and loading information."],
  ["Packaging check", "We determine whether parcel, furniture, pallet or project transport is required."],
  ["Delivery quotation", "Transport is calculated from size, route and loading requirements."],
  ["Booking confirmation", "Collection date, addresses and responsible parties are confirmed."],
  ["Collection and tracking", "Items are photographed before collection and tracked where available."],
  ["Delivery confirmation", "Proof of delivery is added to the transaction documentation."],
];
const classes = [
  ["Parcel delivery", "For lighting, signage, accessories and parts.", "Indicative transport from €15"],
  ["Large item delivery", "For chairs, tables, mirrors and fitness machines.", "Quotation based on size and route"],
  ["Pallet and groupage freight", "For heavy products and partial inventories.", "European pallet transport available"],
  ["Project transport", "For complete gyms, restaurants, hotels and industrial lots.", "Custom loading and transport plan"],
];

export default function LogisticsPage() {
  return (
    <section className="page-section shell">
      <div className="page-hero"><span>Managed logistics</span><h1>Managed logistics for every type of inventory.</h1><p>From one chair to a complete gym, collection and delivery information is coordinated before booking.</p></div>
      <div className="steps-grid logistics-steps">{steps.map(([title, text], index) => <article key={title}><span>{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div>
      <div className="section-heading"><span>Transport classes</span><h2>Four transport methods for different asset types.</h2></div>
      <div className="transport-grid">{classes.map(([title, text, price]) => <article key={title}><h3>{title}</h3><p>{text}</p><strong>{price}</strong></article>)}</div>
      <p className="pilot">Transport prices on example listings are indicative. Final costs are confirmed before purchase.</p>
    </section>
  );
}
