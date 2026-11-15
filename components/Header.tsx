"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/properties", label: "Properti" },
  { href: "/services", label: "Layanan" },
  { href: "/projects", label: "Proyek" },
  { href: "/journal", label: "Jurnal" },
  { href: "/about", label: "Tentang" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Kontak" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="Future CASA home">
          <span className="brand-mark">F<span>·</span>C</span>
          <span className="brand-name">FUTURE<span>CASA</span><small>THE FUTURE OF LIVING</small></span>
        </Link>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Navigasi utama">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="nav-mobile-cta" href="/contact" onClick={() => setOpen(false)}>
            Konsultasi <ArrowUpRight size={15} />
          </Link>
        </nav>

        <Link className="nav-cta" href="/contact">
          Mulai konsultasi <ArrowUpRight size={16} />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
