"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

const interests = ["Property Advisory", "Architecture & Interior", "Smart Living", "Project Collaboration", "Lainnya"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", interest: interests[0], message: "" });
  const [error, setError] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Konsultasi FUTURE CASA — ${form.interest}`);
    const body = encodeURIComponent(`Halo FUTURE CASA,\n\nNama: ${form.name}\nEmail: ${form.email}\nMinat: ${form.interest}\n\nPesan:\n${form.message}`);
    window.location.href = `mailto:hello@futurecasa.com?subject=${subject}&body=${body}`;
    setError("Aplikasi email Anda akan terbuka untuk mengirim pesan. Jika tidak terbuka, kirim email langsung ke hello@futurecasa.com.");
  }

  return (
    <div className="premium-page">
      <section className="premium-page-hero premium-contact-hero"><div className="container premium-page-hero-inner"><div className="eyebrow"><span className="eyebrow-dot" /> START A CONVERSATION</div><h1>Every great space<br />starts with <em>a conversation.</em></h1><p>Ceritakan ide, pertanyaan, atau rencana Anda. Tim FUTURE CASA siap mendengarkan.</p><span className="premium-page-index">WE'D LOVE TO HEAR FROM YOU</span></div></section>
      <section className="premium-contact-section section-pad"><div className="container premium-contact-layout">
        <div className="premium-contact-info"><div className="eyebrow"><span className="eyebrow-dot" /> GET IN TOUCH</div><h2 className="premium-page-title">Mari mulai dari<br /><em>percakapan.</em></h2><p>Bagikan apa yang sedang Anda cari. Kami akan membantu mengarahkan ke langkah berikutnya.</p>
          <a className="premium-contact-method" href="mailto:hello@futurecasa.com"><span><Mail size={18} /></span><div><small>EMAIL</small><strong>hello@futurecasa.com</strong></div><ArrowUpRight size={17} /></a>
          <div className="premium-contact-method"><span><MapPin size={18} /></span><div><small>LOKASI</small><strong>Indonesia</strong></div></div>
          <div className="premium-contact-whatsapp"><MessageCircle size={18} /><div><strong>Lebih nyaman lewat WhatsApp?</strong><p>Mulai percakapan langsung dengan tim kami.</p></div><WhatsAppLink label="WhatsApp" /></div>
        </div>
        <form className="premium-contact-form" onSubmit={submit}><div className="premium-form-heading"><span>01 / YOUR DETAILS</span><p>Formulir ini akan menyiapkan email di aplikasi Anda.</p></div>
          <label>Nama lengkap<input required autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Nama Anda" /></label>
          <label>Alamat email<input required type="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="nama@email.com" /></label>
          <label>Topik yang ingin dibicarakan<select value={form.interest} onChange={(event) => setForm({ ...form, interest: event.target.value })}>{interests.map((interest) => <option key={interest}>{interest}</option>)}</select></label>
          <label>Pesan<textarea required rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Ceritakan sedikit tentang kebutuhan atau rencana Anda..." /></label>
          {error && <p className="premium-form-notice" role="status">{error}</p>}
          <button type="submit" className="premium-page-button">Siapkan email <ArrowUpRight size={17} /></button>
          <small className="premium-form-privacy">Dengan mengirim formulir, aplikasi email Anda akan terbuka. Tidak ada data yang disimpan di situs ini.</small>
        </form>
      </div></section>
      <section className="premium-contact-bottom"><div className="container"><span>GOOD SPACES START WITH GOOD QUESTIONS.</span><Link href="/properties">Jelajahi koleksi properti <ArrowUpRight size={15} /></Link></div></section>
    </div>
  );
}
