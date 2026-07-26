import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketplaceClient from "@/components/MarketplaceClient";
import { categories, categoryById, listingsForCategory, type CategoryId } from "@/data/inventory";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const data = categoryById[category as CategoryId];
  if (!data) return {};
  return { title: data.label, description: data.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = categoryById[category as CategoryId];
  if (!data) notFound();

  return (
    <section className="page-section shell">
      <div className="page-hero category-page-hero">
        <span>Marketplace category</span>
        <h1>{data.label}</h1>
        <p>{data.description}</p>
      </div>
      <MarketplaceClient items={listingsForCategory(data.id)} activeCategory={data.id} />
    </section>
  );
}
