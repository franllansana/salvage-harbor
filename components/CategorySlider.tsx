"use client";

import Link from "next/link";
import { useRef } from "react";
import { categories, type CategoryId } from "@/data/inventory";

export default function CategorySlider({ active }: { active?: CategoryId }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    ref.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  return (
    <div className="category-slider-wrap">
      <button className="slider-arrow" onClick={() => scroll(-1)} aria-label="Scroll categories left">
        ←
      </button>
      <div className="category-slider" ref={ref}>
        <Link className={!active ? "category-pill active" : "category-pill"} href="/marketplace">
          All inventory
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            className={active === category.id ? "category-pill active" : "category-pill"}
            href={`/marketplace/${category.id}`}
          >
            {category.label}
          </Link>
        ))}
      </div>
      <button className="slider-arrow" onClick={() => scroll(1)} aria-label="Scroll categories right">
        →
      </button>
    </div>
  );
}
