"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/properties", label: "Properti" },
  { href: "/services", label: "Layanan" },
  { href: "/journal", label: "Jurnal" },
  { href: "/contact", label: "Kontak" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="Future CASA beranda" onClick={() => setOpen(false)}>
          <span className="brand-mark">F<span>·</span>C</span>
          <span className="brand-name">FUTURE<span>CASA</span><small>THE FUTURE OF LIVING</small></span>
        </Link>
        <nav id="primary-navigation" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Navigasi utama">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link className="nav-mobile-cta" href="/contact" onClick={() => setOpen(false)}>
            Konsultasi <ArrowUpRight size={15} />
          </Link>
        </nav>
        <Link className="nav-cta" href="/contact">Mulai konsultasi <ArrowUpRight size={16} /></Link>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
