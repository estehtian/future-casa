import Image from "next/image";
import { ArrowUpRight, BedDouble, Bath, Ruler } from "lucide-react";
import type { Property } from "@/lib/data";

export default function PropertyCard({ item }: { item: Property }) {
  return (
    <article className="property-card">
      <div className="property-image">
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 700px) 100vw, 50vw" />
        <span className="property-tag">{item.tag}</span>
        <span className="property-id">{item.id}</span>
      </div>
      <div className="property-info">
        <div className="property-meta"><span>{item.category}</span><span>{item.location}</span></div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="property-specs"><span><Ruler size={15}/>{item.size}</span>{item.beds > 0 && <span><BedDouble size={15}/>{item.beds} Kamar</span>}<span><Bath size={15}/>{item.baths} Kamar mandi</span></div>
        <div className="property-bottom"><strong>{item.price}</strong><a href={`/contact?property=${encodeURIComponent(item.name)}`} aria-label={`Tanyakan ${item.name}`}><ArrowUpRight size={19}/></a></div>
      </div>
    </article>
  );
}
