import Image from "next/image";
import Link from "next/link";
import { categoryById, type Listing } from "@/data/inventory";

const euro = (value: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="listing-card">
      <Link className="listing-image" href={`/listing/${listing.slug}`}>
        <Image
          src={listing.image}
          alt={listing.alt}
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="image-labels">
          <span>Example listing</span>
          <span>Verified seller</span>
        </div>
      </Link>

      <div className="listing-body">
        <div className="badge-row">
          <span>{categoryById[listing.category].label}</span>
          <span>{listing.saleType}</span>
          <span>{listing.availability}</span>
        </div>
        <h3>
          <Link href={`/listing/${listing.slug}`}>{listing.title}</Link>
        </h3>
        <p className="listing-location">{listing.location}</p>
        <p>{listing.description}</p>

        <dl className="listing-facts">
          <div><dt>Condition</dt><dd>{listing.condition}</dd></div>
          <div><dt>Quantity</dt><dd>{listing.quantity}</dd></div>
          <div><dt>Seller</dt><dd>{listing.sellerType}</dd></div>
          <div><dt>Logistics</dt><dd>{listing.logisticsStatus}</dd></div>
        </dl>

        <div className="price-grid">
          <div><small>Original value</small><strong className="old-price">{euro(listing.originalValue)}</strong></div>
          <div className="price-primary"><small>Salvage Harbor price</small><strong>{euro(listing.price)}</strong></div>
          <div><small>Potential saving</small><strong>{euro(listing.originalValue - listing.price)}</strong></div>
        </div>

        <p className="pilot-note">Indicative pilot pricing. Availability and specifications must be confirmed.</p>
        <div className="card-actions">
          <Link className="button button-light" href={`/listing/${listing.slug}`}>View details</Link>
          <a className="button button-outline" href={`mailto:info@celaris.nl?subject=${encodeURIComponent(`Quote request: ${listing.title}`)}`}>Request a quote</a>
        </div>
      </div>
    </article>
  );
}
