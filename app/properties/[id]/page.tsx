import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import { properties } from "@/lib/data";

type PropertyDetailProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id.toLowerCase() }));
}

export async function generateMetadata({ params }: PropertyDetailProps) {
  const { id } = await params;
  const property = properties.find((item) => item.id.toLowerCase() === id);
  return property
    ? { title: property.name, description: `${property.description} ${property.location}.` }
    : { title: "Properti tidak ditemukan" };
}

export default async function PropertyDetailPage({ params }: PropertyDetailProps) {
  const { id } = await params;
  const property = properties.find((item) => item.id.toLowerCase() === id);
  if (!property) notFound();

  return (
    <article className="detail-page">
      <div className="container">
        <Link className="text-link detail-back" href="/properties"><ArrowLeft size={16}/> Kembali ke koleksi</Link>
        <div className="detail-hero">
          <div className="detail-image">
            <Image src={property.image} alt={`Tampilan ${property.name}`} fill priority sizes="(max-width: 800px) 100vw, 65vw" />
            <span className="property-tag">{property.tag}</span>
          </div>
          <div className="detail-copy">
            <div className="eyebrow"><span className="eyebrow-dot"/> {property.category} / {property.id}</div>
            <h1>{property.name}</h1>
            <p className="detail-location"><MapPin size={16}/>{property.location}</p>
            <p>{property.description} Dirancang untuk menghadirkan keseimbangan antara kenyamanan, fungsi, dan kualitas hidup jangka panjang.</p>
            <strong className="detail-price">{property.price}</strong>
            <div className="property-specs detail-specs">
              <span><Ruler size={16}/>{property.size}</span>
              {property.beds > 0 && <span><BedDouble size={16}/>{property.beds} kamar tidur</span>}
              <span><Bath size={16}/>{property.baths} kamar mandi</span>
            </div>
            <Link className="button button-primary" href={`/contact?property=${encodeURIComponent(property.name)}`}>Tanyakan properti ini <ArrowUpRight size={17}/></Link>
          </div>
        </div>
        <section className="detail-note"><span className="eyebrow"><span className="eyebrow-dot"/> RUANG UNTUK MASA DEPAN</span><h2>Temukan ruang yang terasa <em>tepat.</em></h2><p>Tim FUTURE CASA siap membantu Anda mengeksplorasi detail, jadwal kunjungan, dan pilihan yang sesuai dengan kebutuhan.</p><Link className="text-link" href="/contact">Jadwalkan konsultasi <ArrowUpRight size={16}/></Link></section>
      </div>
    </article>
  );
}
