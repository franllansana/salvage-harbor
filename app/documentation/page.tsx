import type { Metadata } from "next";

export const metadata: Metadata = { title: "Documentation" };
const groups = [
  ["Seller and ownership verification", ["Company details", "VAT number where applicable", "Authority to sell", "Contact and payment verification"]],
  ["Inventory documentation", ["Inventory list", "Brands and models", "Serial numbers where available", "Dimensions, weights and condition photos"]],
  ["Transport documentation", ["Packing list", "Collection confirmation", "CMR where relevant", "Tracking and proof of delivery"]],
  ["Commercial documentation", ["Quotation", "Order confirmation", "Invoice and VAT information", "Transport and commission details"]],
  ["Additional documentation", ["Maintenance records", "Manuals", "Safety information", "Origin or customs documentation"]],
];

export default function DocumentationPage() {
  return (
    <section className="page-section shell">
      <div className="page-hero"><span>Documentation</span><h1>Clear documentation for every transaction.</h1><p>Buyers can see which documents are stated as available before confirming an order.</p></div>
      <div className="documentation-grid">{groups.map(([title, items]) => <article key={String(title)}><h2>{title}</h2><ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      <div className="info-panel"><p>Document availability differs per product. Example badges are demonstrations and do not represent confirmed live inventory.</p></div>
    </section>
  );
}
