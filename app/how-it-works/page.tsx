import type { Metadata } from "next";

export const metadata: Metadata = { title: "How It Works" };
const steps = [
  "Select an item or complete inventory",
  "Request availability",
  "Enter the delivery destination",
  "Receive product and transport quotation",
  "Confirm available documentation",
  "Complete payment through an approved provider",
  "Collection and delivery are scheduled",
  "Order is completed after delivery confirmation",
];

export default function HowItWorksPage() {
  return (
    <section className="page-section shell">
      <div className="page-hero"><span>How it works</span><h1>A managed quotation process for professional assets.</h1><p>Large assets and complete inventories are confirmed before payment.</p></div>
      <ol className="steps-grid">{steps.map((step, index) => <li key={step}><span>{index + 1}</span><strong>{step}</strong></li>)}</ol>
      <div className="info-panel"><h2>No standard checkout for complex inventory</h2><p>Product availability, loading requirements, documentation and transport costs are checked before an order proceeds.</p></div>
    </section>
  );
}
