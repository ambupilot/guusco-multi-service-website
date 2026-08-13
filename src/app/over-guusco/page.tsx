import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over GuusCo",
  description:
    "Maak kennis met GuusCo Multiservice: één vakman voor kleine en middelgrote klussen in Nijmegen en omgeving, met duidelijke afspraken en een praktische aanpak.",
  alternates: {
    canonical: "/over-guusco",
  },
};

const principles = [
  "Eén aanspreekpunt van eerste contact tot oplevering",
  "Duidelijke afspraken over werkzaamheden en prijs",
  "Netjes werken in en rond de woning",
  "Meerdere disciplines combineren waar dat praktisch is",
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page__hero">
        <div className="container about-page__hero-inner">
          <div>
            <p className="eyebrow">Over GuusCo</p>
            <h1>Eén vakman. Meerdere disciplines.</h1>
            <p className="about-page__intro">
              GuusCo Multiservice richt zich op kleine en middelgrote klussen
              waarbij vakmanschap, duidelijke afspraken en een praktische
              uitvoering belangrijk zijn.
            </p>
          </div>

          <aside className="about-page__summary">
            <p className="about-page__summary-title">Waar GuusCo voor staat</p>
            <p>
              Geen onnodige lagen of overdracht tussen verschillende partijen,
              maar één aanspreekpunt dat de werkzaamheden zelf uitvoert en
              overzicht houdt over de klus.
            </p>
          </aside>
        </div>
      </section>

      <section className="about-page__content">
        <div className="container about-page__grid">
          <div>
            <p className="eyebrow">Manier van werken</p>
            <h2>Praktisch, netjes en duidelijk</h2>
          </div>

          <div className="about-page__principles">
            {principles.map((principle) => (
              <p key={principle}>{principle}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__scope">
        <div className="container about-page__grid">
          <div>
            <p className="eyebrow">Bewuste focus</p>
            <h2>Geen langdurige bouwprojecten</h2>
          </div>

          <div>
            <p>
              GuusCo is vooral bedoeld voor opdrachten die overzichtelijk en
              praktisch uitvoerbaar zijn: reparaties, onderhoud, montage,
              aanpassingen en kleine verbouwingen.
            </p>
            <p>
              Juist wanneer timmerwerk, elektra, sanitair of afwerking in één
              opdracht samenkomen, is één vakman die meerdere disciplines kan
              combineren vaak efficiënter dan meerdere losse afspraken.
            </p>
          </div>
        </div>
      </section>

      <section className="about-page__local">
        <div className="container about-page__grid">
          <div>
            <p className="eyebrow">Nijmegen en omgeving</p>
            <h2>Lokaal en bereikbaar</h2>
          </div>

          <div>
            <p>
              Het werkgebied ligt voornamelijk in Nijmegen en circa twintig
              kilometer daaromheen. Dat houdt de lijnen kort en maakt plannen
              praktisch.
            </p>
            <Link className="text-link" href="/werkgebied">
              Bekijk het werkgebied
            </Link>
          </div>
        </div>
      </section>

      <section className="about-page__cta">
        <div className="container about-page__cta-inner">
          <div>
            <p className="eyebrow">Een klus bespreken?</p>
            <h2>Vertel wat er moet gebeuren.</h2>
            <p>
              Beschrijf kort de werkzaamheden en locatie. Dan is snel duidelijk
              wat praktisch mogelijk is.
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
