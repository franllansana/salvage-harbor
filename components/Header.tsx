"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Inventory", "/marketplace"],
  ["Complete Inventories", "/complete-inventories"],
  ["How It Works", "/how-it-works"],
  ["Logistics", "/logistics"],
  ["Documentation", "/documentation"],
  ["Sell Inventory", "/sellers"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>
            <strong>Salvage Harbor</strong>
            <small>Curated European business inventory</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link
              key={href}
              className={pathname.startsWith(href) ? "nav-active" : ""}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="button button-light header-cta" href="/sellers">
            List inventory
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <div className="mobile-menu-top">
            <strong>Salvage Harbor</strong>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <a className="button button-primary" href="mailto:info@celaris.nl">
            Contact Salvage Harbor
          </a>
        </div>
      ) : null}
    </header>
  );
}
