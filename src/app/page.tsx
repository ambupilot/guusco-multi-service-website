import Link from "next/link";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { services } from "@/data/services";

const strengths = [
  "Eén aanspreekpunt voor verschillende werkzaamheden",
  "Duidelijke afspraken over scope en uitvoering",
  "Netjes werken in en rond de woning",
  "Praktisch gericht op kleine en middelgrote opdrachten",
];

const processSteps = [
  {
    number: "01",
    title: "Klus bespreken",
    text: "Kort afstemmen wat er moet gebeuren en wat praktisch haalbaar is.",
  },
  {
    number: "02",
    title: "Duidelijke afspraak",
    text: "Heldere afspraken over werkzaamheden, planning en prijs.",
  },
  {
    number: "03",
    title: "Uitvoeren",
    text: "Netjes werken, praktisch oplossen en opleveren zoals afgesproken.",
  },
];

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
              Voor kleine en middelgrote klussen met duidelijke afspraken, een
              praktische aanpak en een nette oplevering.
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

          <aside className="hero__panel" aria-label="GuusCo in het kort">
            <p className="hero__panel-title">Praktisch geregeld</p>

            <ul>
              <li>Nijmegen en circa 20 km daaromheen</li>
              <li>Meerdere kleine klussen combineren</li>
              <li>Heldere afspraken vooraf</li>
              <li>Geen langdurige bouwprojecten</li>
            </ul>
          </aside>
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

      <section className="section home-strengths">
        <div className="container home-split">
          <div>
            <p className="eyebrow">Waarom GuusCo</p>
            <h2>Vakwerk zonder onnodige omwegen</h2>
          </div>

          <div className="home-strengths__list">
            {strengths.map((strength) => (
              <p key={strength}>{strength}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-process">
        <div className="container">
          <div className="home-section-heading">
            <p className="eyebrow">Werkwijze</p>
            <h2>Van vraag naar uitvoering</h2>
          </div>

          <div className="home-process__grid">
            {processSteps.map((step) => (
              <article className="home-process__step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-area">
        <div className="container home-split">
          <div>
            <p className="eyebrow">Werkgebied</p>
            <h2>Nijmegen en omgeving</h2>
          </div>

          <div>
            <p>
              GuusCo werkt voornamelijk in Nijmegen en plaatsen binnen ongeveer
              20 kilometer rondom de stad. Zo blijft de planning praktisch en
              de reistijd beperkt.
            </p>

            <Link className="text-link" href="/werkgebied">
              Bekijk het werkgebied
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container home-cta__inner">
          <div>
            <p className="eyebrow">Klus in gedachten?</p>
            <h2>Vertel wat er moet gebeuren.</h2>
            <p>
              Ook meerdere kleinere werkzaamheden kunnen slim in één afspraak
              worden gecombineerd.
            </p>
          </div>

          <Link className="button button--primary" href="/contact">
            Klus aanmelden
          </Link>
        </div>
      </section>
    </main>
  );
}