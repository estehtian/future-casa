import Link from "next/link";
import { ArrowUpRight, Building2, Eye, FileText, Users } from "lucide-react";
import { articles, properties } from "@/lib/data";

export default function DashboardPage() {
  const stats = [
    { label: "Properti", value: String(properties.length).padStart(2, "0"), Icon: Building2, href: "/properties" },
    { label: "Artikel jurnal", value: String(articles.length).padStart(2, "0"), Icon: FileText, href: "/journal" },
    { label: "Layanan", value: "04", Icon: Users, href: "/services" },
    { label: "Pratinjau publik", value: "Live", Icon: Eye, href: "/" }
  ];
  return <div className="premium-page premium-dashboard"><section className="premium-page-hero premium-dashboard-hero"><div className="container premium-page-hero-inner"><div className="eyebrow"><span className="eyebrow-dot" /> FUTURE CASA / CONTROL ROOM</div><h1>Welcome to<br /><em>your overview.</em></h1><p>Ringkasan konten demo lokal FUTURE CASA. Halaman ini bukan sistem admin dan tidak menyimpan perubahan.</p><span className="premium-page-index">DEMO PREVIEW · LOCAL SAMPLE DATA</span></div></section>
    <section className="premium-dashboard-content section-pad"><div className="container"><div className="premium-dashboard-warning"><span>DEMO MODE</span><p>Angka dan konten di bawah berasal dari data contoh statis. Dashboard ini tidak memiliki autentikasi, database, atau fungsi pengelolaan konten.</p></div><div className="premium-dashboard-grid">{stats.map(({ label, value, Icon, href }) => <Link className="premium-dashboard-card" href={href} key={label}><span className="premium-dashboard-icon"><Icon size={19} /></span><span className="premium-dashboard-value">{value}</span><strong>{label}</strong><span className="premium-dashboard-link">Buka halaman <ArrowUpRight size={15} /></span></Link>)}</div><div className="premium-dashboard-latest"><div><div className="eyebrow"><span className="eyebrow-dot" /> LATEST PROPERTY</div><h2>{properties[0].name}</h2><p>{properties[0].location} · {properties[0].price}</p></div><Link href="/properties" className="premium-inline-link">Lihat katalog <ArrowUpRight size={15} /></Link></div></div></section></div>;
}
