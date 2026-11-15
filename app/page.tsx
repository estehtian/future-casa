import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveUpRight, Sparkles } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import WhatsAppLink from "@/components/WhatsAppLink";
import { properties, services, articles } from "@/lib/data";

export default function Home() {
  return <>
    <section className="hero">
      <Image className="hero-image" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90" alt="Arsitektur rumah modern dengan pencahayaan hangat" fill priority sizes="100vw"/>
      <div className="hero-shade"/>
      <div className="hero-content container">
        <div className="eyebrow light"><span className="eyebrow-dot"/> PROPERTY · ARCHITECTURE · SMART LIVING</div>
        <h1>Live beyond<br/><em>ordinary.</em></h1>
        <p className="hero-copy">Ruang hidup masa depan bukan sekadar tempat tinggal. Ia adalah pengalaman yang dirancang untuk cara hidup Anda.</p>
        <div className="hero-actions"><Link className="button button-light" href="/properties">Jelajahi properti <ArrowUpRight size={17}/></Link><Link className="text-link light-link" href="/services">Temukan layanan kami <MoveUpRight size={16}/></Link></div>
        <div className="hero-bottom"><span>01 / 04 — A NEW PERSPECTIVE</span><span>SCROLL TO EXPLORE <ArrowDown size={14}/></span></div>
      </div>
      <div className="hero-orbit"><span>FC</span><small>FUTURE<br/>CASA</small></div>
    </section>

    <section className="intro-section section-pad">
      <div className="container intro-grid">
        <div><div className="eyebrow"><span className="eyebrow-dot"/> OUR POINT OF VIEW</div><h2 className="section-title">The next chapter<br/>of <em>living starts here.</em></h2></div>
        <div className="intro-copy"><p className="lead">Kami mempertemukan properti, desain, dan teknologi untuk menciptakan ruang yang terasa tepat hari ini—dan tetap relevan esok hari.</p><p>Mulai dari menemukan tempat yang tepat, merancang detail ruang, hingga menghadirkan teknologi yang membuat hidup lebih sederhana.</p><Link className="text-link" href="/services">Kenali pendekatan kami <ArrowUpRight size={16}/></Link></div>
      </div>
      <div className="container stat-row"><div><strong>01<span>—</span></strong><small>SPACE DISCOVERY</small></div><div><strong>02<span>—</span></strong><small>DESIGN THINKING</small></div><div><strong>03<span>—</span></strong><small>SMART TECHNOLOGY</small></div><div><strong>∞</strong><small>FUTURE POSSIBILITIES</small></div></div>
    </section>

    <section className="dark-section section-pad">
      <div className="container">
        <div className="section-heading"><div><div className="eyebrow light"><span className="eyebrow-dot"/> CURATED SPACES</div><h2 className="section-title light-title">Places with<br/><em>possibility.</em></h2></div><Link className="text-link light-link" href="/properties">Lihat semua properti <ArrowUpRight size={16}/></Link></div>
        <div className="property-grid">{properties.slice(0,3).map(item=><PropertyCard key={item.id} item={item}/>)}</div>
      </div>
    </section>

    <section className="services-section section-pad">
      <div className="container">
        <div className="eyebrow"><span className="eyebrow-dot"/> WHAT WE DO</div>
        <div className="section-heading"><h2 className="section-title">One vision.<br/><em>Connected expertise.</em></h2><p className="heading-aside">Satu ekosistem untuk membantu Anda mengambil keputusan ruang dengan lebih percaya diri.</p></div>
        <div className="service-list">{services.map(s=><Link href="/services" className="service-row" key={s.number}><span className="service-no">{s.number}</span><span className="service-icon">{s.icon}</span><span className="service-name">{s.title}</span><span className="service-desc">{s.text}</span><ArrowUpRight className="service-arrow"/></Link>)}</div>
      </div>
    </section>

    <section className="feature-section">
      <div className="feature-photo"><Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85" alt="Interior rumah modern natural" fill sizes="50vw"/></div>
      <div className="feature-content"><div className="eyebrow light"><span className="eyebrow-dot"/> DESIGNED AROUND YOU</div><h2 className="section-title light-title">A home should<br/>feel like <em>you.</em></h2><p>Keindahan bukan hanya tentang tampilan. Kami percaya ruang terbaik adalah ruang yang memahami rutinitas, aspirasi, dan cara Anda ingin hidup.</p><Link className="button button-outline-light" href="/contact">Mulai percakapan <ArrowUpRight size={16}/></Link><span className="feature-index">FC / 2026</span></div>
    </section>

    <section className="journal-section section-pad">
      <div className="container"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-dot"/> THE FUTURE JOURNAL</div><h2 className="section-title">Ideas for a<br/><em>better tomorrow.</em></h2></div><Link className="text-link" href="/journal">Baca semua artikel <ArrowUpRight size={16}/></Link></div>
        <div className="journal-grid">{articles.map((a,i)=><Link href="/journal" className="journal-card" key={a.title}><div className="journal-image"><Image src={a.image} alt={a.title} fill sizes="(max-width:700px) 100vw, 33vw"/></div><div className="journal-meta"><span>{a.category}</span><span>{a.date}</span></div><h3>{a.title}</h3><span className="read-more">{a.read} membaca <ArrowUpRight size={15}/></span></Link>)}</div>
      </div>
    </section>

    <section className="closing-cta"><div className="container closing-inner"><div className="eyebrow light"><Sparkles size={14}/> YOUR NEXT CHAPTER</div><h2>Let&apos;s shape<br/><em>what&apos;s next.</em></h2><p>Ceritakan rencana Anda. Kami siap membantu menemukan kemungkinan berikutnya.</p><WhatsAppLink label="Hubungi FUTURE CASA"/></div></section>
  </>;
}
