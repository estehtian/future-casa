import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { articles } from "@/lib/data";

export default function JournalPage() {
  const [featured, ...stories] = articles;
  return (
    <div className="premium-page">
      <section className="premium-page-hero premium-journal-hero"><div className="container premium-page-hero-inner"><div className="eyebrow"><span className="eyebrow-dot" /> THE FUTURE JOURNAL</div><h1>Perspectives<br /><em>that move us.</em></h1><p>Gagasan tentang desain, teknologi, dan cara hidup yang membantu kita melihat ruang dengan perspektif baru.</p><span className="premium-page-index">NOTES ON LIVING WELL · EST. 2026</span></div></section>
      <section className="premium-editorial section-pad"><div className="container">
        <div className="premium-editorial-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> SELECTED STORIES</div><h2 className="premium-page-title">A little more <em>thought.</em></h2></div><span>IDEAS FOR A BETTER EVERYDAY</span></div>
        {featured && <article className="premium-featured-story"><Link href="/contact" className="premium-story-image"><Image src={featured.image} alt={featured.title} fill sizes="(max-width: 800px) 100vw, 55vw" priority /></Link><div className="premium-story-copy"><div className="premium-story-meta"><span>{featured.category}</span><span>{featured.date}</span></div><h3>{featured.title}</h3><p>Menjelajahi bagaimana desain yang berpusat pada manusia dapat membentuk pengalaman ruang yang lebih baik—dengan teknologi sebagai pendukung yang terasa alami.</p><div className="premium-story-footer"><span><Clock3 size={14} /> {featured.read} baca</span><Link href="/contact" aria-label="Diskusikan ide dengan FUTURE CASA"><ArrowUpRight size={18} /></Link></div></div></article>}
        <div className="premium-story-grid">{stories.map((article) => <article className="premium-story-card" key={article.title}><Link href="/contact" className="premium-story-card-image"><Image src={article.image} alt={article.title} fill sizes="(max-width: 700px) 100vw, 33vw" /></Link><div className="premium-story-meta"><span>{article.category}</span><span>{article.date}</span></div><h3>{article.title}</h3><div className="premium-story-footer"><span><Clock3 size={14} /> {article.read} baca</span><Link href="/contact" aria-label={`Diskusikan: ${article.title}`}><ArrowUpRight size={17} /></Link></div></article>)}</div>
        <div className="premium-editorial-note"><span>AN OPEN CONVERSATION</span><p>Punya ide atau pertanyaan seputar ruang hidup Anda?</p><Link href="/contact">Mari berbincang <ArrowUpRight size={15} /></Link></div>
      </div></section>
    </div>
  );
}
