"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

type ContactForm = { name: string; email: string; interest: string; message: string };
const initialForm: ContactForm = { name: "", email: "", interest: "Property Advisory", message: "" };
const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890").replace(/\D/g, "");

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function update<K extends keyof ContactForm>(key: K, value: ContactForm[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (status) setStatus("");
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Halo FUTURE CASA, saya ${form.name} (${form.email}). Minat: ${form.interest}. Pesan: ${form.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("Pesan siap dikirim. Silakan lanjutkan percakapan melalui WhatsApp yang terbuka.");
  }

  return <>
    <section className="page-hero"><div className="container"><div className="eyebrow"><span className="eyebrow-dot"/> START A CONVERSATION</div><h1>Every great space<br/>starts with <em>a conversation.</em></h1><p>Ceritakan rencana Anda. Tim kami akan membantu menemukan langkah berikutnya.</p></div></section>
    <section className="section-pad"><div className="container contact-grid">
      <aside className="contact-aside"><span className="eyebrow"><span className="eyebrow-dot"/> LET&apos;S CONNECT</span><h2>Mulai dari<br/><em>cerita Anda.</em></h2><p>Beritahu kami apa yang Anda cari dan kami akan menghubungi Anda untuk membicarakan kemungkinan terbaik.</p>
        <div className="contact-detail"><Mail size={18} aria-hidden="true"/><div><b>Email</b><a href="mailto:hello@futurecasa.com">hello@futurecasa.com</a></div></div>
        <div className="contact-detail"><MapPin size={18} aria-hidden="true"/><div><b>Lokasi</b><span>Indonesia</span></div></div>
        <div className="contact-detail"><MessageCircle size={18} aria-hidden="true"/><div><b>WhatsApp</b><span>Respon langsung dari tim kami</span></div></div>
        <WhatsAppLink label="Chat WhatsApp"/>
      </aside>
      <form className="contact-form" onSubmit={submit}>
        <label>Nama lengkap<input autoComplete="name" required minLength={2} maxLength={80} value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Nama Anda" /></label>
        <label>Email<input type="email" autoComplete="email" required maxLength={120} value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="nama@email.com" /></label>
        <label>Topik konsultasi<select value={form.interest} onChange={(event) => update("interest", event.target.value)}><option>Property Advisory</option><option>Architecture & Interior</option><option>Smart Living</option><option>Project Collaboration</option></select></label>
        <label>Pesan<textarea required minLength={10} maxLength={1200} rows={5} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Ceritakan kebutuhan dan rencana Anda..." /></label>
        <div className="form-footer"><small>Form ini akan membuka WhatsApp untuk mengirim pesan langsung kepada tim kami.</small><button className="button button-primary" type="submit">Lanjutkan ke WhatsApp <ArrowUpRight size={17}/></button></div>
        <p className="form-status" role="status" aria-live="polite">{status}</p>
      </form>
    </div></section>
  </>;
}
