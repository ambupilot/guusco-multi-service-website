import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-header__brand" href="/">
          <span className="site-header__brand-name">GuusCo</span>
          <span className="site-header__brand-service">Multiservice</span>
        </Link>

        <nav className="site-header__nav" aria-label="Hoofdnavigatie">
          <Link href="/diensten">Diensten</Link>
          <Link href="/werkgebied">Werkgebied</Link>
          <Link href="/projecten">Projecten</Link>
          <Link href="/over-guusco">Over GuusCo</Link>
          <Link href="/werkwijze">Werkwijze</Link>
        </nav>

        <Link className="button button--primary site-header__cta" href="/contact">
          Klus aanmelden
        </Link>
      </div>
    </header>
  );
}
