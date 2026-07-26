import Image from "next/image";
import Link from "next/link";
import CategorySlider from "@/components/CategorySlider";
import ListingCard from "@/components/ListingCard";
import { categories, listings } from "@/data/inventory";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <video autoPlay muted loop playsInline preload="metadata" className="hero-video">
          <source src="/salvage-harbor-intro.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <div className="eyebrow">A curated European marketplace for reclaimed business interiors and equipment</div>
          <h1>Remarkable business assets. Ready for a second life.</h1>
          <p>Discover furniture, equipment and complete inventories from restaurants, hotels, gyms, ships and commercial spaces across Europe.</p>
          <div className="hero-actions">
            <Link className="button button-light" href="/marketplace">Explore inventory</Link>
            <Link className="button button-outline" href="/sellers">List your inventory</Link>
          </div>
          <small>Curated inventory. Verified professional sellers. Managed European logistics.</small>
        </div>
      </section>

      <section className="category-strip">
        <div className="shell"><CategorySlider /></div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <span>Browse by sector</span>
          <h2>Dedicated category pages for every type of business inventory.</h2>
          <p>Restaurant, hotel, maritime and gym inventory now each open as a real page with relevant listings.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.id}>
              <Link href={`/marketplace/${category.id}`} className="category-image">
                <Image src={category.image} alt={category.alt} fill sizes="(max-width: 760px) 100vw, 25vw" />
              </Link>
              <div>
                <h3>{category.label}</h3>
                <p>{category.description}</p>
                <Link className="text-link" href={`/marketplace/${category.id}`}>View inventory →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <span>Featured inventory</span>
              <h2>Professional assets, not random second-hand items.</h2>
            </div>
            <Link className="button button-light" href="/marketplace">Explore all inventory</Link>
          </div>
          <div className="listing-grid">
            {listings.slice(0, 6).map((listing) => <ListingCard key={listing.slug} listing={listing} />)}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="trust-banner">
          <div>
            <span>For professional sellers</span>
            <h2>Turn unused business inventory into new value.</h2>
            <p>List individual items, bulk lots or complete inventories. Every submission is reviewed before publication.</p>
          </div>
          <Link className="button button-dark" href="/sellers">List your inventory</Link>
        </div>
      </section>

      <section className="pilot shell">
        Salvage Harbor is currently operating as a pilot marketplace. Example listings and indicative pricing are being developed with selected professional sellers.
      </section>
    </>
  );
}
