import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="shell footer-grid">
        <div>
          <strong className="footer-brand">Salvage Harbor</strong>
          <p>
            A curated European marketplace for reclaimed business interiors and
            equipment from professional sellers, closures, renovations and refits.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/marketplace">Inventory</Link>
          <Link href="/sellers">Sell inventory</Link>
          <Link href="/logistics">Logistics</Link>
          <Link href="/documentation">Documentation</Link>
          <a href="mailto:info@celaris.nl">info@celaris.nl</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="shell footer-bottom-inner">
          <span>© 2026 Salvage Harbor Europe</span>
          <span>Curated inventory · Managed quotations · European sourcing</span>
        </div>
      </div>
    </footer>
  );
}
