import type { Metadata } from "next";
import Link from "next/link";

const places = [
  "Nijmegen",
  "Lent",
  "Oosterhout",
  "Beuningen",
  "Wijchen",
  "Malden",
  "Heilig Landstichting",
  "Berg en Dal",
  "Groesbeek",
  "Ubbergen",
  "Bemmel",
  "Elst",
];

export const metadata: Metadata = {
  title: "Werkgebied",
  description:
    "GuusCo Multiservice werkt in Nijmegen en plaatsen binnen circa 20 kilometer, waaronder Beuningen, Wijchen, Malden, Berg en Dal, Groesbeek, Bemmel en Elst.",
  alternates: {
    canonical: "/werkgebied",
  },
};

export default function WorkAreaPage() {
  return (
    <main className="work-area-page">
      <section className="work-area-page__hero">
        <div className="container work-area-page__hero-inner">
          <div>
            <p className="eyebrow">Werkgebied</p>
            <h1>Nijmegen en omgeving.</h1>
            <p className="work-area-page__intro">
              GuusCo Multiservice werkt voornamelijk in Nijmegen en plaatsen
              binnen ongeveer 20 kilometer rondom de stad.
            </p>
          </div>

          <div className="work-area-page__summary">
            <p>
              Een compact werkgebied houdt reistijd beperkt en maakt het
              makkelijker om afspraken praktisch te plannen.
            </p>
          </div>
        </div>
      </section>

      <section className="work-area-page__content">
        <div className="container work-area-page__grid">
          <div>
            <p className="eyebrow">Plaatsen</p>
            <h2>Waar GuusCo werkt</h2>
            <p>
              Onderstaande plaatsen vallen in principe binnen het reguliere
              werkgebied. Zit je net buiten deze regio, dan kan een klus alsnog
              mogelijk zijn afhankelijk van de omvang en planning.
            </p>
          </div>

          <div className="work-area-page__places">
            {places.map((place) => (
              <span key={place}>{place}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="work-area-page__local">
        <div className="container work-area-page__grid">
          <div>
            <p className="eyebrow">Lokaal en praktisch</p>
            <h2>Korte lijnen, duidelijke afspraken</h2>
          </div>

          <div>
            <p>
              Voor kleine en middelgrote opdrachten is een lokale vakman vaak
              de meest praktische keuze. GuusCo richt zich daarom bewust op
              Nijmegen en directe omgeving, met één aanspreekpunt voor meerdere
              disciplines.
            </p>
            <p>
              Denk aan timmerwerk, elektra, sanitair, tegelwerk, montage,
              reparaties en klusdagen waarbij meerdere werkzaamheden in één
              afspraak worden gecombineerd.
            </p>
          </div>
        </div>
      </section>

      <section className="work-area-page__cta">
        <div className="container work-area-page__cta-inner">
          <div>
            <p className="eyebrow">Twijfel over de afstand?</p>
            <h2>Stuur je klus gerust door.</h2>
            <p>
              Vermeld de locatie en wat er moet gebeuren. Dan is snel duidelijk
              of de opdracht binnen het werkgebied en de planning past.
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