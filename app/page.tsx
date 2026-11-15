import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  Compass,
  Sparkles,
  Star,
} from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { articles, properties, services } from "@/lib/data";

export default function Home() {
  const highlights = [
    { value: String(properties.length).padStart(2, "0"), label: "Curated properties" },
    { value: String(services.length).padStart(2, "0"), label: "Connected services" },
    { value: String(articles.length).padStart(2, "0"), label: "Fresh perspectives" },
  ];

  return (
    <div className="premium-home">
      <section className="premium-hero">
        <div className="premium-hero-image" aria-hidden="true" />
        <div className="container premium-hero-layout">
          <div className="premium-hero-copy">
            <div className="eyebrow light"><span className="eyebrow-dot" /> PROPERTY · ARCHITECTURE · SMART LIVING</div>
            <h1>Modern living,<br />shaped for <em>tomorrow.</em></h1>
            <p>Temukan ruang hidup yang memadukan arsitektur berkarakter, teknologi cerdas, dan kenyamanan yang terasa personal.</p>
            <div className="premium-actions">
              <Link href="/properties" className="premium-button premium-button-light">Jelajahi properti <ArrowUpRight size={17} /></Link>
              <Link href="/contact" className="premium-text-link">Mulai konsultasi <ArrowRight size={16} /></Link>
            </div>
            <div className="premium-metrics">
              {highlights.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
            </div>
          </div>

          <div className="premium-hero-visual">
            <article className="premium-featured-card">
              <Image
                src={properties[0].image}
                alt={properties[0].name}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 42vw"
              />
              <div className="premium-card-top"><span className="premium-chip">Pilihan FUTURE CASA</span><span className="premium-rating"><Star size={14} fill="currentColor" /> Pilihan</span></div>
              <div className="premium-featured-info">
                <div><span>{properties[0].location}</span><h2>{properties[0].name}</h2></div>
                <strong>{properties[0].price}</strong>
              </div>
            </article>
            <div className="premium-floating-note premium-note-one"><Compass size={16} /> Smart living</div>
            <div className="premium-floating-note premium-note-two"><Sparkles size={16} /> Thoughtful design</div>
          </div>
        </div>
        <div className="premium-hero-caption">A considered approach to living well — FUTURE CASA</div>
      </section>

      <section className="premium-trust-strip" aria-label="Fokus FUTURE CASA">
        <div className="container premium-trust-inner"><span>Ruang hidup dirancang melalui</span><div><b>PROPERTY</b><i>×</i><b>DESIGN</b><i>×</i><b>TECHNOLOGY</b></div></div>
      </section>

      <section className="premium-intro section-pad">
        <div className="container">
          <div className="premium-intro-grid">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> OUR POINT OF VIEW</div><h2 className="premium-section-title">The future belongs<br />to <em>better spaces.</em></h2></div>
            <div className="premium-intro-copy"><p className="premium-lead">Kami mempertemukan properti, desain, dan teknologi untuk menciptakan ruang yang relevan hari ini dan siap menyambut masa depan.</p><p>Dari memilih properti hingga merencanakan detail ruang, setiap keputusan dimulai dari kebutuhan dan cara hidup Anda.</p><Link className="premium-inline-link" href="/services">Kenali pendekatan kami <ArrowRight size={16} /></Link></div>
          </div>
          <div className="premium-principles"><div><span>01</span><strong>Design thinking</strong><small>Estetika yang bertemu fungsi.</small></div><div><span>02</span><strong>Smart living</strong><small>Teknologi yang terasa intuitif.</small></div><div><span>03</span><strong>Future value</strong><small>Ruang dengan visi jangka panjang.</small></div></div>
        </div>
      </section>

      <section className="premium-properties section-pad">
        <div className="container">
          <div className="premium-section-heading"><div><div className="eyebrow light"><span className="eyebrow-dot" /> CURATED COLLECTION</div><h2 className="premium-section-title light-title">Find a place<br />with <em>possibility.</em></h2></div><Link href="/properties" className="premium-inline-link light-inline-link">Lihat semua properti <ArrowRight size={16} /></Link></div>
          <div className="property-grid">{properties.slice(0, 3).map((item) => <PropertyCard key={item.id} item={item} />)}</div>
        </div>
      </section>

      <section className="premium-experience section-pad">
        <div className="container premium-experience-grid">
          <div className="premium-experience-image"><Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90" alt="Interior kontemporer dengan material natural dan pencahayaan hangat" fill sizes="(max-width: 850px) 100vw, 50vw" /></div>
          <div className="premium-experience-copy"><div className="eyebrow"><span className="eyebrow-dot" /> DESIGNED AROUND YOU</div><h2 className="premium-section-title">A home should feel like <em>your next chapter.</em></h2><p>Ruang terbaik bukan hanya terlihat indah—ruang tersebut mendukung ritme, kenyamanan, dan hal-hal yang paling berarti dalam hidup Anda.</p>
            <div className="premium-benefits"><div><span><BedDouble size={18} /></span><div><strong>Kenyamanan yang terasa</strong><p>Tata ruang dan material dipilih dengan cermat.</p></div></div><div><span><Bath size={18} /></span><div><strong>Keseharian yang lebih baik</strong><p>Ruang yang memberi tempat untuk beristirahat dan bertumbuh.</p></div></div><div><span><Sparkles size={18} /></span><div><strong>Teknologi yang menyatu</strong><p>Solusi cerdas yang mendukung, bukan mengganggu.</p></div></div></div>
            <Link href="/services" className="premium-inline-link">Jelajahi layanan <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="premium-services section-pad">
        <div className="container"><div className="eyebrow light"><span className="eyebrow-dot" /> CONNECTED EXPERTISE</div><div className="premium-section-heading"><h2 className="premium-section-title light-title">One vision.<br /><em>Many possibilities.</em></h2><p>Satu ekosistem pendampingan untuk membantu Anda membuat keputusan ruang hidup dengan lebih percaya diri.</p></div>
          <div className="premium-service-grid">{services.map((service) => <Link href="/services" key={service.number} className="premium-service-card"><div><span>{service.number}</span><i>{service.icon}</i></div><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRight className="premium-service-arrow" size={19} /></Link>)}</div>
        </div>
      </section>

      <section className="premium-journal section-pad">
        <div className="container"><div className="premium-section-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> THE FUTURE JOURNAL</div><h2 className="premium-section-title">Ideas for living<br /><em>beautifully.</em></h2></div><Link href="/journal" className="premium-inline-link">Baca jurnal <ArrowRight size={16} /></Link></div>
          <div className="journal-grid">{articles.map((article) => <Link href="/journal" className="journal-card" key={article.title}><div className="journal-image"><Image src={article.image} alt={article.title} fill sizes="(max-width: 900px) 100vw, 33vw" /></div><div className="journal-card-body"><span>{article.category}</span><span>{article.date}</span></div><h3>{article.title}</h3><p>{article.read} baca <ArrowUpRight size={14} /></p></Link>)}</div>
        </div>
      </section>

      <section className="premium-cta"><div className="container premium-cta-inner"><div><div className="eyebrow light"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER</div><h2>Mari wujudkan ruang<br />yang terasa <em>berbeda.</em></h2><p>Ceritakan rencana Anda. Kami siap membantu menemukan langkah berikutnya.</p></div><Link href="/contact" className="premium-button premium-button-light">Mulai percakapan <ArrowUpRight size={17} /></Link></div></section>
    </div>
  );
}
