"use client";

import { useMemo, useState } from "react";
import CategorySlider from "@/components/CategorySlider";
import ListingCard from "@/components/ListingCard";
import type { CategoryId, Listing } from "@/data/inventory";

export default function MarketplaceClient({
  items,
  activeCategory,
}: {
  items: Listing[];
  activeCategory?: CategoryId;
}) {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("all");
  const [saleType, setSaleType] = useState("all");

  const countries = useMemo(
    () => Array.from(new Set(items.map((item) => item.country))).sort(),
    [items],
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return items.filter((item) => {
      const searchMatch =
        !normalized ||
        [item.title, item.description, item.location, item.sellerType]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      const countryMatch = country === "all" || item.country === country;
      const saleMatch = saleType === "all" || item.saleType === saleType;
      return searchMatch && countryMatch && saleMatch;
    });
  }, [items, query, country, saleType]);

  return (
    <>
      <CategorySlider active={activeCategory} />
      <div className="market-filters">
        <label>
          Search inventory
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search equipment, furniture or location"
          />
        </label>
        <label>
          Country
          <select value={country} onChange={(event) => setCountry(event.target.value)}>
            <option value="all">All countries</option>
            {countries.map((name) => <option key={name}>{name}</option>)}
          </select>
        </label>
        <label>
          Sale type
          <select value={saleType} onChange={(event) => setSaleType(event.target.value)}>
            <option value="all">All sale types</option>
            <option>Individual item</option>
            <option>Bulk lot</option>
            <option>Complete inventory</option>
          </select>
        </label>
      </div>
      <div className="result-count">{filtered.length} example listings</div>
      <div className="listing-grid">
        {filtered.map((listing) => <ListingCard key={listing.slug} listing={listing} />)}
      </div>
      {filtered.length === 0 ? <div className="empty-state">No listings match these filters.</div> : null}
    </>
  );
}
