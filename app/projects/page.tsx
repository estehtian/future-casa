import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { properties } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="premium-page">
      <section className="premium-page-hero premium-projects-hero">
        <div className="container premium-page-hero-inner">
          <div className="eyebrow"><span className="eyebrow-dot" /> FEATURED PROJECTS</div>
          <h1>Curated homes &<br />spaces with <em>character.</em></h1>
          <p>Setiap proyek kami dirancang untuk menghadirkan keseimbangan antara keindahan, fungsi, dan kualitas hidup.</p>
          <span className="premium-page-index">SELECTED WORK · FUTURE CASA</span>
        </div>
      </section>

      <section className="premium-projects section-pad">
        <div className="container">
          <div className="premium-projects-grid">
            {properties.map((property) => (
              <article key={property.id} className="premium-project-card">
                <div className="premium-project-image">
                  <Image src={property.image} alt={property.name} fill sizes="(max-width: 900px) 100vw, 45vw" />
                  <span>{property.tag}</span>
                </div>
                <div className="premium-project-body">
                  <div className="premium-story-meta">
                    <span>{property.category}</span>
                    <span>{property.location}</span>
                  </div>
                  <h3>{property.name}</h3>
                  <p>{property.description}</p>
                  <div className="premium-project-meta">
                    <strong>{property.price}</strong>
                    <Link href="/contact" aria-label={`Tanyakan ${property.name}`}>
                      Inquire <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="premium-projects-banner">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> NEED A CUSTOM PLAN?</div>
              <h3>Setiap proyek dapat dibangun sesuai kebutuhan, gaya hidup, dan konteks lokasi Anda.</h3>
            </div>
            <Link href="/contact" className="premium-page-button">Mulai proyek Anda <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
