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
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { articles } from "@/lib/data";

const slugify = (title: string) => title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
type ArticleDetailProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: slugify(article.title) }));
}

export async function generateMetadata({ params }: ArticleDetailProps) {
  const { slug } = await params;
  const article = articles.find((item) => slugify(item.title) === slug);
  return article
    ? { title: article.title, description: `${article.category}: ${article.title}` }
    : { title: "Artikel tidak ditemukan" };
}

export default async function ArticleDetailPage({ params }: ArticleDetailProps) {
  const { slug } = await params;
  const article = articles.find((item) => slugify(item.title) === slug);
  if (!article) notFound();

  return (
    <article className="detail-page journal-detail">
      <div className="container">
        <Link className="text-link detail-back" href="/journal"><ArrowLeft size={16}/> Kembali ke jurnal</Link>
        <header className="article-header">
          <div className="eyebrow"><span className="eyebrow-dot"/> {article.category} / {article.date}</div>
          <h1>{article.title}</h1>
          <span className="article-read"><Clock3 size={15}/> {article.read} membaca</span>
        </header>
        <div className="article-cover"><Image src={article.image} alt={article.title} fill priority sizes="(max-width: 800px) 100vw, 1180px" /></div>
        <div className="article-body">
          <p className="article-lead">Ruang yang baik selalu dimulai dari pemahaman tentang manusia yang menggunakannya. Dari sana, desain, teknologi, dan detail sehari-hari dapat bekerja bersama menciptakan pengalaman hidup yang lebih bermakna.</p>
          <h2>Desain yang berangkat dari kehidupan</h2>
          <p>Setiap keputusan tentang ruang membawa dampak pada cara kita beristirahat, bekerja, dan terhubung dengan orang lain. Karena itu, pendekatan FUTURE CASA memadukan kebutuhan nyata penghuni dengan desain yang relevan untuk masa depan.</p>
          <h2>Teknologi yang terasa alami</h2>
          <p>Teknologi terbaik bukan sekadar terlihat canggih. Teknologi seharusnya hadir dengan sederhana, membantu aktivitas sehari-hari, menjaga kenyamanan, dan memberi ruang bagi penghuninya untuk fokus pada hal yang penting.</p>
          <p>Dengan perencanaan yang matang, ruang dapat terus berkembang bersama penghuninya—lebih fleksibel, efisien, dan personal dari waktu ke waktu.</p>
          <Link className="text-link" href="/contact">Diskusikan kebutuhan ruang Anda <ArrowUpRight size={16}/></Link>
        </div>
      </div>
    </article>
  );
}
