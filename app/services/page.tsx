import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, DraftingCompass, Home, Lightbulb, Network } from "lucide-react";
import { services } from "@/lib/data";
import WhatsAppLink from "@/components/WhatsAppLink";

const icons = [Home, DraftingCompass, Lightbulb, Network];

export default function ServicesPage() {
  return (
    <div className="premium-page">
      <section className="premium-page-hero premium-services-hero">
        <div className="container premium-page-hero-inner"><div className="eyebrow"><span className="eyebrow-dot" /> OUR EXPERTISE</div><h1>Ideas into<br /><em>real spaces.</em></h1><p>Pendampingan menyeluruh untuk membantu Anda mengambil keputusan yang lebih baik tentang properti, desain, dan kehidupan sehari-hari.</p><span className="premium-page-index">THOUGHTFUL BY DESIGN · FUTURE CASA</span></div>
      </section>
      <section className="premium-services-detail section-pad"><div className="container">
        <div className="premium-page-intro"><div><div className="eyebrow"><span className="eyebrow-dot" /> ONE CONNECTED ECOSYSTEM</div><h2 className="premium-page-title">Keahlian yang menyatu.<br /><em>Visi yang sama.</em></h2></div><p>Kami menghubungkan setiap bagian dari perjalanan properti Anda. Mulai dari memahami kebutuhan hingga merancang ruang dengan karakter dan tujuan.</p></div>
        <div className="premium-service-list">{services.map((service, index) => { const Icon = icons[index] ?? Home; return <article className="premium-service-detail" key={service.number}><span className="premium-detail-number">{service.number}</span><span className="premium-detail-icon"><Icon size={22} strokeWidth={1.5} /></span><div><h3>{service.title}</h3><p>{service.text}</p><Link href="/contact">Bicarakan layanan ini <ArrowUpRight size={15} /></Link></div></article>; })}</div>
      </div></section>
      <section className="premium-process"><div className="premium-process-image"><Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85" alt="Interior kontemporer yang dirancang dengan material natural" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="premium-process-copy"><div className="eyebrow light"><span className="eyebrow-dot" /> OUR APPROACH</div><h2>Ruang yang baik<br />dimulai dari <em>mendengar.</em></h2><p>Kami memulai dengan percakapan: memahami kebutuhan, prioritas, dan rencana Anda. Dari sana, kami membantu menyusun langkah yang relevan—secara jernih, personal, dan terarah.</p><ol><li><span>01</span> Kenali kebutuhan dan aspirasi</li><li><span>02</span> Jelajahi pilihan dan kemungkinan</li><li><span>03</span> Wujudkan langkah berikutnya</li></ol><WhatsAppLink label="Diskusikan rencana Anda" /></div></section>
      <section className="premium-page-cta"><div className="container"><span className="eyebrow light"><span className="eyebrow-dot" /> LET'S MAKE IT PERSONAL</span><h2>Setiap ruang punya cerita.<br /><em>Mulai ceritakan milik Anda.</em></h2><Link href="/contact" className="premium-page-button">Hubungi tim kami <ArrowUpRight size={17} /></Link></div></section>
    </div>
  );
}
