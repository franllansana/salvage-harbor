import type { Metadata } from "next";
import Image from "next/image";
import { completeInventories } from "@/data/inventory";

export const metadata: Metadata = { title: "Complete Inventories" };
const euro = (value: number) => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);

export default function CompleteInventoriesPage() {
  return (
    <section className="page-section shell">
      <div className="page-hero"><span>Complete inventories</span><h1>Complete business inventories</h1><p>Acquire a complete operational inventory or purchase selected assets separately.</p></div>
      <div className="complete-grid">
        {completeInventories.map((item) => (
          <article className="complete-card" key={item.title}>
            <div className="complete-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div className="complete-body">
              <span>{item.category}</span><h2>{item.title}</h2>
              <dl className="detail-list">
                <div><dt>Location</dt><dd>{item.location}</dd></div>
                <div><dt>Assets</dt><dd>{item.assets}</dd></div>
                <div><dt>Indicative asking price</dt><dd>{euro(item.price)}</dd></div>
                <div><dt>Available</dt><dd>{item.availability}</dd></div>
                <div><dt>Collection</dt><dd>{item.collection}</dd></div>
                <div><dt>Loading</dt><dd>{item.loading}</dd></div>
              </dl>
              <div className="card-actions">
                <a className="button button-light" href={`mailto:info@celaris.nl?subject=${encodeURIComponent(`Request full inventory list: ${item.title}`)}`}>Request full inventory list</a>
                <a className="button button-outline" href={`mailto:info@celaris.nl?subject=${encodeURIComponent(`Request site visit: ${item.title}`)}`}>Plan a site visit</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
