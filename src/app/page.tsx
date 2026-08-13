import Link from "next/link";

const services = ["Timmerwerk", "Elektra", "Sanitair & afvoer", "Tegelwerk", "Wanden & aftimmering", "Montage & reparatie"];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Klus- en onderhoudsbedrijf in Nijmegen</p>
            <h1>Eén vakman. Meerdere disciplines.</h1>
            <p className="hero__intro">Voor kleine en middelgrote klussen met duidelijke afspraken en een nette oplevering.</p>
            <div className="hero__actions">
              <Link className="button button--primary" href="/contact">Bespreek je klus</Link>
              <Link className="button button--secondary" href="/diensten">Bekijk de diensten</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Diensten</p>
          <h2>Veel werk in één hand</h2>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service}><h3>{service}</h3></article>)}
          </div>
        </div>
      </section>
    </main>
  );
}
