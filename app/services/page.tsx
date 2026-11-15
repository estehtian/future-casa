import Link from "next/link";
import { ArrowUpRight, DraftingCompass, Home, Lightbulb, Network } from "lucide-react";
import { services } from "@/lib/data";
import WhatsAppLink from "@/components/WhatsAppLink";

const icons = [Home, DraftingCompass, Lightbulb, Network];
export default function ServicesPage() {
  return <><section className="page-hero"><div className="container"><div className="eyebrow"><span className="eyebrow-dot"/> OUR EXPERTISE</div><h1>Ideas into<br/><em>real spaces.</em></h1><p>Keahlian yang terhubung untuk perjalanan properti dan ruang hidup yang lebih menyeluruh.</p></div></section><section className="section-pad"><div className="container service-detail-grid">{services.map((s,i)=>{const Icon=icons[i];return <article className="service-detail" key={s.number}><div className="service-detail-top"><span>{s.number} / 04</span><Icon size={28}/></div><h2>{s.title}</h2><p>{s.text}</p><Link href="/contact">Diskusikan proyek <ArrowUpRight size={16}/></Link></article>})}</div></section><section className="process-band"><div className="container process-grid"><div><div className="eyebrow light"><span className="eyebrow-dot"/> HOW WE WORK</div><h2 className="section-title light-title">Clear thinking.<br/><em>Thoughtful execution.</em></h2></div><div className="process-steps"><div><b>01</b><span>Discover</span><p>Mendengarkan kebutuhan, tujuan, dan konteks proyek.</p></div><div><b>02</b><span>Design</span><p>Menyusun opsi dan arah solusi yang terukur.</p></div><div><b>03</b><span>Deliver</span><p>Menghubungkan Anda dengan langkah dan mitra berikutnya.</p></div></div></div></section><section className="cta-strip"><div className="container cta-strip-inner"><h2>Have a project in mind?</h2><WhatsAppLink label="Bicarakan proyek Anda"/></div></section></>;
}
