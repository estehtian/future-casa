"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";

type Category = "Semua" | "Residence" | "Villa" | "Commercial";
const categories: Category[] = ["Semua", "Residence", "Villa", "Commercial"];

function priceInMillions(label: string) {
  const match = label.match(/([\d.,]+)\s*M/i);
  if (!match) return Number.POSITIVE_INFINITY;
  return Number(match[1].replace(/\./g, "").replace(",", "."));
}

export default function PropertiesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("Semua");
  const [minimumBeds, setMinimumBeds] = useState(0);
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("id");
    const results = properties.filter((property) => {
      const searchable = `${property.name} ${property.location} ${property.description} ${property.tag}`.toLocaleLowerCase("id");
      return (category === "Semua" || property.category === category)
        && searchable.includes(term)
        && property.beds >= minimumBeds;
    });

    if (sort === "name") results.sort((a, b) => a.name.localeCompare(b.name, "id"));
    if (sort === "location") results.sort((a, b) => a.location.localeCompare(b.location, "id"));
    if (sort === "price") results.sort((a, b) => priceInMillions(a.price) - priceInMillions(b.price));
    return results;
  }, [category, minimumBeds, query, sort]);

  function resetFilters() {
    setQuery("");
    setCategory("Semua");
    setMinimumBeds(0);
    setSort("featured");
  }

  return <>
    <section className="page-hero"><div className="container">
      <div className="eyebrow"><span className="eyebrow-dot"/> CURATED PROPERTY COLLECTION</div>
      <h1>Find your<br/><em>kind of space.</em></h1>
      <p>Temukan ruang pilihan yang dirancang untuk menemani cara hidup Anda berikutnya.</p>
    </div></section>
    <section className="section-pad"><div className="container">
      <div className="catalog-tools">
        <label className="search-box"><Search size={17} aria-hidden="true"/><span className="sr-only">Cari properti</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama, lokasi, atau kata kunci" /></label>
        <div className="filter-pills" role="group" aria-label="Filter kategori">
          {categories.map((item) => <button key={item} type="button" className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <div className="catalog-selects">
          <label><SlidersHorizontal size={15} aria-hidden="true"/><span className="sr-only">Jumlah kamar tidur</span><select value={minimumBeds} onChange={(event) => setMinimumBeds(Number(event.target.value))}><option value={0}>Semua jumlah kamar</option><option value={2}>Minimal 2 kamar</option><option value={3}>Minimal 3 kamar</option><option value={4}>Minimal 4 kamar</option></select></label>
          <label><span className="sr-only">Urutkan properti</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Pilihan kurasi</option><option value="name">Nama A–Z</option><option value="location">Lokasi</option><option value="price">Harga terendah</option></select></label>
        </div>
      </div>
      <p className="result-count" aria-live="polite">Menampilkan {filtered.length} dari {properties.length} properti</p>
      {filtered.length > 0 ? <div className="property-grid">{filtered.map((item) => <PropertyCard key={item.id} item={item}/>)}</div> : <div className="empty-state"><h2>Belum menemukan ruang yang cocok?</h2><p>Ubah kata pencarian atau sesuaikan filter untuk melihat koleksi lainnya.</p><button className="button button-primary" type="button" onClick={resetFilters}>Hapus semua filter</button></div>}
    </div></section>
  </>;
}
