import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="page-section shell">
      <div className="page-hero"><span>About</span><h1>A curated European marketplace, not a general second-hand website.</h1><p>Salvage Harbor combines professional presentation, logistics awareness and a managed quotation process.</p></div>
      <div className="article-copy">
        <p>Salvage Harbor began with a maritime perspective. That identity remains visible through the cruise hero and maritime category, while the marketplace now also covers gyms, hospitality, retail, offices, events and industrial inventory.</p>
        <p>Inventory can originate from bankruptcies, business closures, renovations, refits, professional resellers, curators, liquidators and commercial property owners.</p>
        <p>The platform is currently a pilot. Example listings are clearly identified and do not imply that inventory is already live.</p>
      </div>
    </section>
  );
}
