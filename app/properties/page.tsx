"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";

const categories = ["Semua", "Residence", "Villa", "Commercial"] as const;

export default function PropertiesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("Semua");
  const filtered = useMemo(() => properties.filter((property) => {
    const matchesCategory = category === "Semua" || property.category === category;
    const searchable = `${property.name} ${property.location} ${property.description}`.toLowerCase();
    return matchesCategory && searchable.includes(query.trim().toLowerCase());
  }), [category, query]);

  return (
    <div className="premium-page">
      <section className="premium-page-hero premium-properties-hero">
        <div className="container premium-page-hero-inner">
          <div className="eyebrow"><span className="eyebrow-dot" /> CURATED PROPERTY COLLECTION</div>
          <h1>Find your kind<br />of <em>space.</em></h1>
          <p>Temukan hunian dan ruang pilihan yang dirancang untuk mendukung cara hidup Anda—sekarang dan nanti.</p>
          <span className="premium-page-index">A PLACE TO BEGIN · FUTURE CASA</span>
        </div>
      </section>
      <section className="premium-catalog section-pad">
        <div className="container">
          <div className="premium-catalog-top"><div><div className="eyebrow"><span className="eyebrow-dot" /> THE COLLECTION</div><h2 className="premium-page-title">Ruang pilihan, <em>dikurasi.</em></h2></div><span className="premium-result-count">{filtered.length} properti</span></div>
          <div className="premium-filters">
            <label className="premium-search"><Search size={17} /><span className="sr-only">Cari properti</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama, lokasi, atau deskripsi" /></label>
            <div className="premium-category-label"><SlidersHorizontal size={16} /><span>Filter</span></div>
            <div className="premium-category-tabs" role="group" aria-label="Filter kategori properti">
              {categories.map((item) => <button key={item} type="button" className={category === item ? "is-active" : ""} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}
            </div>
          </div>
          {filtered.length ? <div className="premium-catalog-grid">{filtered.map((item) => <PropertyCard key={item.id} item={item} />)}</div> : <div className="premium-empty-state"><span>NO MATCHES</span><h3>Belum ada ruang yang cocok.</h3><p>Coba kata kunci atau kategori lain.</p><button type="button" onClick={() => { setQuery(""); setCategory("Semua"); }}>Hapus filter</button></div>}
          <div className="premium-catalog-note"><span>01 — PERSONAL GUIDANCE</span><p>Belum menemukan yang tepat? Ceritakan kebutuhan Anda, dan tim kami akan membantu menjajaki pilihan yang sesuai.</p><a href="/contact">Diskusikan kebutuhan <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    </div>
  );
}
