import type { Metadata } from "next";
import MarketplaceClient from "@/components/MarketplaceClient";
import { listings } from "@/data/inventory";

export const metadata: Metadata = { title: "Marketplace" };

export default function MarketplacePage() {
  return (
    <section className="page-section shell">
      <div className="page-hero">
        <span>Marketplace</span>
        <h1>Curated professional inventory from across Europe.</h1>
        <p>Search individual assets, bulk lots and complete business inventories.</p>
      </div>
      <MarketplaceClient items={listings} />
    </section>
  );
}
