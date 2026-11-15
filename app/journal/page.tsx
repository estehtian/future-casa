import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/data";

export default function JournalPage() {
  return <><section className="page-hero"><div className="container"><div className="eyebrow"><span className="eyebrow-dot"/> THE FUTURE JOURNAL</div><h1>Perspectives<br/><em>that move us.</em></h1><p>Catatan tentang properti, desain, teknologi, dan cara hidup yang terus berkembang.</p></div></section><section className="section-pad"><div className="container journal-list">{articles.map((a,i)=><article className="journal-feature" key={a.title}><div className="journal-feature-image"><Image src={a.image} alt={a.title} fill sizes="(max-width:800px) 100vw, 48vw"/></div><div className="journal-feature-copy"><div className="journal-meta"><span>{a.category}</span><span>{a.date}</span></div><h2>{a.title}</h2><p>Inspirasi dan sudut pandang untuk membantu kita memahami ruang, teknologi, dan masa depan kehidupan sehari-hari.</p><span className="read-more">{a.read} membaca <ArrowUpRight size={15}/></span></div></article>)}</div><div className="container demo-note">Artikel di halaman ini adalah konten contoh. Hubungkan CMS atau dashboard editorial untuk mengelola publikasi secara nyata.</div></section></>;
}
