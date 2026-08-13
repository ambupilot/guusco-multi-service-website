import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">GuusCo Multiservice</p>
          <p className="site-footer__tagline">Eén vakman. Meerdere disciplines.</p>
        </div>
        <nav className="site-footer__links" aria-label="Voettekstnavigatie">
          <Link href="/diensten">Diensten</Link>
          <Link href="/werkgebied">Werkgebied</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p className="site-footer__area">Nijmegen en omgeving</p>
      </div>
    </footer>
  );
}
