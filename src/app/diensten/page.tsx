import type { Metadata } from "next";
import Link from "next/link";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Bekijk de diensten van GuusCo Multiservice voor timmerwerk, elektra, sanitair, tegelwerk, montage en onderhoud in Nijmegen en omgeving.",
};

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-page__hero">
        <div className="container services-page__hero-inner">
          <div className="services-page__intro">
            <p className="eyebrow">Diensten</p>
            <h1>Meerdere disciplines, één aanspreekpunt.</h1>
            <p>
              Van timmerwerk en elektra tot sanitair, tegelwerk en reparaties.
              Praktisch uitgevoerd met duidelijke afspraken en een nette
              oplevering.
            </p>
          </div>
        </div>
      </section>

      <section className="services-page__overview">
        <div className="container services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.slug}>
              <div className="service-card__icon" aria-hidden="true">
                <ServiceIcon slug={service.slug} />
              </div>

              <div className="service-card__content">
                <h2>{service.title}</h2>
                <p>{service.intro}</p>
              </div>

              <Link
                className="service-card__link"
                href={`/diensten/${service.slug}`}
              >
                <span>Bekijk dienst</span>
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
