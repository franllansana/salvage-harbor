import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-section shell">
      <div className="empty-state"><h1>Page not found</h1><p>The requested page or listing does not exist.</p><Link className="button button-light" href="/marketplace">Back to marketplace</Link></div>
    </section>
  );
}
