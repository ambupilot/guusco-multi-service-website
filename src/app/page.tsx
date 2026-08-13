import Link from "next/link";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { services } from "@/data/services";

export default function Home() {
  const featuredServices = services.slice(0, 6);

  return (
    <main>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Klus- en onderhoudsbedrijf in Nijmegen</p>
            <h1>Eén vakman. Meerdere disciplines.</h1>
            <p className="hero__intro">
              Voor kleine en middelgrote klussen met duidelijke afspraken en een
              nette oplevering.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" href="/contact">
                Bespreek je klus
              </Link>
              <Link className="button button--secondary" href="/diensten">
                Bekijk de diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="home-services__heading">
            <div>
              <p className="eyebrow">Diensten</p>
              <h2>Veel werk in één hand</h2>
            </div>
            <p>
              Meerdere disciplines combineren in één opdracht, zonder voor elk
              onderdeel een andere partij te hoeven regelen.
            </p>
          </div>

          <div className="home-services__grid">
            {featuredServices.map((service) => (
              <article className="home-service-card" key={service.slug}>
                <div className="home-service-card__icon" aria-hidden="true">
                  <ServiceIcon slug={service.slug} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.intro}</p>
                <Link href={`/diensten/${service.slug}`}>
                  Bekijk dienst <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <Link className="text-link" href="/diensten">
            Alle diensten bekijken
          </Link>
        </div>
      </section>
    </main>
  );
}
