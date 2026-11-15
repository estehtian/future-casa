import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "Apakah FUTURE CASA hanya menjual properti?",
    answer: "Tidak. Kami juga membantu merancang ruang hidup, memberikan arahan properti, serta mendampingi kebutuhan smart living dan strategi investasi untuk hunian masa depan."
  },
  {
    question: "Bagaimana cara kerja konsultasi awal?",
    answer: "Konsultasi awal biasanya dimulai dengan memahami kebutuhan, gaya hidup, lokasi, dan target waktu Anda. Dari sana, kami akan membantu menyusun opsi paling relevan."
  },
  {
    question: "Apakah Anda membantu untuk properti custom?",
    answer: "Ya. Kami bisa membantu mulai dari konsep ruang, pemilihan kebutuhan fungsional, hingga penyusunan alur untuk proyek yang lebih personal dan terdiferensiasi."
  },
  {
    question: "Apakah bisa melakukan konsultasi via WhatsApp?",
    answer: "Tentu. Bagi Anda yang ingin cepat dan praktis, halaman kontak kami menyediakan akses langsung melalui WhatsApp untuk percakapan awal."
  }
];

export default function FaqPage() {
  return (
    <div className="premium-page">
      <section className="premium-page-hero premium-faq-hero">
        <div className="container premium-page-hero-inner">
          <div className="eyebrow"><span className="eyebrow-dot" /> FREQUENTLY ASKED QUESTIONS</div>
          <h1>Common questions,<br />clearer answers.</h1>
          <p>Halaman ini membantu Anda memahami bagaimana kami bekerja dan apa yang mungkin Anda butuhkan sebelum memulai.</p>
          <span className="premium-page-index">GUIDANCE · CLARITY · SUPPORT</span>
        </div>
      </section>

      <section className="premium-faq section-pad">
        <div className="container premium-faq-wrap">
          <div className="premium-faq-intro">
            <div className="eyebrow"><span className="eyebrow-dot" /> NEED MORE INFO?</div>
            <h2 className="premium-page-title">Pertanyaan yang sering <em>muncul.</em></h2>
            <p>Jika Anda membutuhkan penjelasan lebih spesifik, kami siap menjawab sesuai kebutuhan Anda.</p>
            <Link href="/contact" className="premium-inline-link">Konsultasi langsung <ArrowUpRight size={15} /></Link>
          </div>
          <div className="premium-faq-list">
            {faqs.map((item) => (
              <article key={item.question} className="premium-faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
