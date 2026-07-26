import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sell Inventory" };

export default function SellersPage() {
  return (
    <section className="page-section shell">
      <div className="page-hero"><span>For sellers</span><h1>Turn unused business inventory into new value.</h1><p>For businesses, curators, liquidators, professional resellers, hotels, restaurants, gyms, renovation companies and ship recyclers.</p></div>
      <div className="seller-layout">
        <div className="benefit-list">
          {[
            "No upfront listing costs",
            "List individual items or complete inventories",
            "Inventory can remain at your location",
            "Professional marketplace presentation",
            "Managed buyer enquiries",
            "Transport coordination available",
            "Commission only after a successful sale",
          ].map((item) => <div key={item}>✓ {item}</div>)}
        </div>

        <form name="seller-intake" method="POST" data-netlify="true" encType="multipart/form-data" action="/contact?submitted=true" className="seller-form">
          <input type="hidden" name="form-name" value="seller-intake" />
          <label>Company name *<input required name="company-name" /></label>
          <label>Contact person *<input required name="contact-person" /></label>
          <label>Email *<input required type="email" name="email" /></label>
          <label>Phone number *<input required type="tel" name="phone" /></label>
          <label>Country *<input required name="country" /></label>
          <label>Inventory location *<input required name="inventory-location" /></label>
          <label>Category *
            <select required name="category"><option value="">Select category</option><option>Gym & Wellness</option><option>Restaurant & Bar</option><option>Hotel & Resort</option><option>Maritime & Cruise</option><option>Retail & Showroom</option><option>Office</option><option>Events & Leisure</option><option>Industrial</option><option>Other</option></select>
          </label>
          <label>Inventory type *
            <select required name="inventory-type"><option value="">Select type</option><option>Individual items</option><option>Bulk lot</option><option>Complete inventory</option></select>
          </label>
          <label>Estimated number of items *<input required type="number" min="1" name="estimated-items" /></label>
          <label>Preferred sale period *<input required name="sale-period" /></label>
          <label>Minimum selling price (€)<input type="number" min="0" name="minimum-price" /></label>
          <label>Buyer pickup possible? *<select required name="pickup"><option value="">Select</option><option>Yes</option><option>No</option><option>By appointment</option></select></label>
          <label className="full">Loading equipment<input name="loading-equipment" placeholder="Forklift, loading dock, crane, service lift..." /></label>
          <label className="full">Available documentation<input name="documentation" placeholder="Inventory list, serial numbers, maintenance records..." /></label>
          <label>Photo 1<input type="file" accept="image/*" name="photo-1" /></label>
          <label>Photo 2<input type="file" accept="image/*" name="photo-2" /></label>
          <label className="full">Additional comments<textarea rows={5} name="comments" /></label>
          <p className="form-note full">Submitting inventory does not automatically publish it. Every seller and listing is reviewed before approval.</p>
          <button className="button button-primary full" type="submit">Submit inventory for review</button>
        </form>
      </div>
    </section>
  );
}
