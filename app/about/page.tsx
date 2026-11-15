import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Compass, Sparkles } from "lucide-react";
import { properties } from "@/lib/data";

export default function AboutPage() {
  const stats = [
    { value: "12k+", label: "Client & families" },
    { value: "48", label: "Signature projects" },
    { value: "4.9/5", label: "Client experience" }
  ];

  return (
    <div className="premium-page">
      <section className="premium-page-hero premium-about-hero">
        <div className="container premium-page-hero-inner">
          <div className="eyebrow"><span className="eyebrow-dot" /> ABOUT FUTURE CASA</div>
          <h1>We design better<br />ways to <em>live.</em></h1>
          <p>Kami membangun pengalaman hunian yang lebih manusiawi melalui kombinasi strategis antara properti, arsitektur, dan teknologi hidup modern.</p>
          <span className="premium-page-index">THOUGHTFUL · BEAUTIFUL · FUTURE-READY</span>
        </div>
      </section>

      <section className="premium-about-story section-pad">
        <div className="container premium-about-grid">
          <div className="premium-about-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> WHO WE ARE</div>
            <h2 className="premium-page-title">Memahami <em>cara hidup</em> Anda dulu.</h2>
            <p>FUTURE CASA lahir dari keyakinan bahwa rumah bukan sekadar tempat tinggal, melainkan ekosistem untuk kesehatan, produktivitas, kebahagiaan, dan masa depan.</p>
            <p>Dalam setiap proyek, kami menggabungkan pendekatan strategis, desain yang terukur, dan teknologi yang terasa alami—sehingga ruang terasa lebih nyaman, lebih bernilai, dan lebih relevan untuk hari ini dan nanti.</p>
          </div>
          <div className="premium-about-stats">
            {stats.map((item) => (
              <div key={item.label} className="premium-stat-box">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-values section-pad">
        <div className="container">
          <div className="premium-section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> WHAT MATTERS</div>
              <h2 className="premium-page-title">Nilai yang kami bawa<br /><em>di setiap ruang.</em></h2>
            </div>
          </div>
          <div className="premium-values-grid">
            <article>
              <span><Compass size={18} /></span>
              <h3>Human-centered design</h3>
              <p>Setiap ruang dirancang untuk mendukung kenyamanan hidup, rutinitas, dan kebutuhan jangka panjang Anda.</p>
            </article>
            <article>
              <span><Building2 size={18} /></span>
              <h3>Long-term value</h3>
              <p>Kami fokus pada kualitas, relevansi, dan potensi value growth yang kuat di masa depan.</p>
            </article>
            <article>
              <span><Sparkles size={18} /></span>
              <h3>Thoughtful detail</h3>
              <p>Mulai dari material, pencahayaan, hingga integrasi teknologi, semua dipikirkan agar terasa lebih halus dan lebih hidup.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="premium-cta mini-cta">
        <div className="container premium-cta-inner">
          <div>
            <div className="eyebrow light"><span className="eyebrow-dot" /> LET'S BUILD TOGETHER</div>
            <h2>Ready to shape<br />a better <em>future</em> at home?</h2>
          </div>
          <Link href="/contact" className="premium-page-button">Mulai konsultasi <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </div>
  );
}
