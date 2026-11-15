import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">F<span>·</span>C</span>
            <span className="brand-name">FUTURE<span>CASA</span><small>THE FUTURE OF LIVING</small></span>
          </Link>
          <p className="footer-note">Membentuk cara baru untuk menemukan, merancang, dan menikmati ruang hidup.</p>
        </div>

        <div className="footer-links">
          <b>Jelajahi</b>
          <Link href="/properties">Properti</Link>
          <Link href="/services">Layanan</Link>
          <Link href="/projects">Proyek</Link>
          <Link href="/journal">Jurnal</Link>
        </div>

        <div className="footer-links">
          <b>Info</b>
          <Link href="/about">Tentang kami</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Kontak</Link>
        </div>

        <div className="footer-links">
          <b>Hubungi</b>
          <a href="mailto:hello@futurecasa.com">hello@futurecasa.com</a>
          <span>Indonesia</span>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 FUTURE CASA. All rights reserved.</span>
        <span>Designing tomorrow, today.</span>
      </div>
    </footer>
  );
}
