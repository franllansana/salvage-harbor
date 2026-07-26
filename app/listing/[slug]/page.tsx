import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ListingCard from "@/components/ListingCard";
import { categoryById, getListing, listings } from "@/data/inventory";

const euro = (value: number) => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListing(slug);
  return listing ? { title: listing.title, description: listing.description } : {};
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = getListing(slug);
  if (!listing) notFound();
  const related = listings.filter((item) => item.category === listing.category && item.slug !== listing.slug).slice(0, 3);

  return (
    <section className="page-section shell">
      <div className="breadcrumbs">
        <Link href="/">Home</Link><span>·</span>
        <Link href={`/marketplace/${listing.category}`}>{categoryById[listing.category].label}</Link><span>·</span>
        <span>{listing.title}</span>
      </div>

      <div className="listing-detail">
        <div>
          <div className="detail-main-image">
            <Image src={listing.gallery[0]} alt={listing.alt} fill priority sizes="(max-width: 980px) 100vw, 60vw" />
          </div>
          <div className="detail-gallery">
            {listing.gallery.slice(1).map((image, index) => (
              <div key={image} className="detail-thumb">
                <Image src={image} alt={`${listing.title} gallery ${index + 2}`} fill sizes="(max-width: 760px) 50vw, 30vw" />
              </div>
            ))}
          </div>
        </div>

        <aside className="detail-summary">
          <div className="badge-row"><span>Example listing</span><span>Verified seller</span><span>{listing.saleType}</span></div>
          <h1>{listing.title}</h1>
          <p className="listing-location">{listing.location}</p>
          <p>{listing.description}</p>
          <div className="detail-prices">
            <div><small>Estimated original value</small><strong className="old-price">{euro(listing.originalValue)}</strong></div>
            <div className="price-primary"><small>Salvage Harbor price</small><strong>{euro(listing.price)}</strong></div>
            <div><small>Potential saving</small><strong>{euro(listing.originalValue - listing.price)}</strong></div>
          </div>
          <p className="disclaimer">Product specifications are based on seller-provided information and must be confirmed before purchase.</p>
          <div className="detail-actions">
            <a className="button button-primary" href={`mailto:info@celaris.nl?subject=${encodeURIComponent(`Quote request: ${listing.title}`)}`}>Request a quote</a>
            <a className="button button-outline" href={`mailto:info@celaris.nl?subject=${encodeURIComponent(`Delivery question: ${listing.title}`)}`}>Ask about delivery</a>
          </div>
        </aside>
      </div>

      <div className="detail-columns">
        <section>
          <h2>Product information</h2>
          <dl className="detail-list">
            <div><dt>Category</dt><dd>{categoryById[listing.category].label}</dd></div>
            <div><dt>Condition</dt><dd>{listing.condition}</dd></div>
            <div><dt>Quantity</dt><dd>{listing.quantity}</dd></div>
            <div><dt>Seller type</dt><dd>{listing.sellerType}</dd></div>
            <div><dt>Availability</dt><dd>{listing.availability}</dd></div>
            <div><dt>Sale type</dt><dd>{listing.saleType}</dd></div>
          </dl>
        </section>
        <section>
          <h2>Logistics information</h2>
          <dl className="detail-list">
            <div><dt>Dimensions</dt><dd>{listing.dimensions}</dd></div>
            <div><dt>Weight</dt><dd>{listing.weight}</dd></div>
            <div><dt>Collection deadline</dt><dd>{listing.collectionDeadline}</dd></div>
            <div><dt>Forklift</dt><dd>{listing.forklift}</dd></div>
            <div><dt>Loading dock</dt><dd>{listing.loadingDock}</dd></div>
            <div><dt>Status</dt><dd>{listing.logisticsStatus}</dd></div>
          </dl>
        </section>
      </div>

      <section className="documentation-box">
        <h2>Available documentation</h2>
        <div className="badge-row">{listing.documentation.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="related-section">
        <div className="section-heading"><span>Related listings</span><h2>More from {categoryById[listing.category].label}</h2></div>
        <div className="listing-grid">{related.map((item) => <ListingCard key={item.slug} listing={item} />)}</div>
      </section>
    </section>
  );
}
