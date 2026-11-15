"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";

export default function PropertiesPage() {
  const [query,setQuery] = useState("");
  const [category,setCategory] = useState("Semua");
  const filtered = useMemo(()=>properties.filter(p=>(category==="Semua"||p.category===category)&&`${p.name} ${p.location} ${p.description}`.toLowerCase().includes(query.toLowerCase())),[query,category]);
  return <><section className="page-hero"><div className="container"><div className="eyebrow"><span className="eyebrow-dot"/> CURATED PROPERTY COLLECTION</div><h1>Find your<br/><em>kind of space.</em></h1><p>Temukan ruang yang sesuai dengan kebutuhan, karakter, dan rencana masa depan Anda.</p></div></section><section className="section-pad"><div className="container"><div className="catalog-tools"><div className="search-box"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari nama atau lokasi properti..." aria-label="Cari properti"/></div><div className="filter-pills">{["Semua","Residence","Villa","Commercial"].map(c=><button key={c} className={category===c?"active":""} onClick={()=>setCategory(c)}>{c}</button>)}</div></div><p className="result-count">{filtered.length} PROPERTI DITEMUKAN</p>{filtered.length>0?<div className="property-grid">{filtered.map(item=><PropertyCard key={item.id} item={item}/>)}</div>:<div className="empty-state">Tidak ada properti yang cocok. Coba kata kunci atau kategori lain.</div>}</div></section></>;
}
