"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/diensten", label: "Diensten" },
  { href: "/werkgebied", label: "Werkgebied" },
  { href: "/projecten", label: "Projecten" },
  { href: "/over-guusco", label: "Over GuusCo" },
  { href: "/werkwijze", label: "Werkwijze" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link
          className="site-header__brand"
          href="/"
          onClick={closeMenu}
          aria-label="GuusCo Multiservice - home"
        >
          <span className="site-header__brand-name">GuusCo</span>
          <span className="site-header__brand-service">Multiservice</span>
        </Link>

        <nav className="site-header__nav" aria-label="Hoofdnavigatie">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          className="button button--primary site-header__cta"
          href="/contact"
        >
          Klus aanmelden
        </Link>

        <button
          className="site-header__menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`site-header__mobile-menu ${
          menuOpen ? "site-header__mobile-menu--open" : ""
        }`}
      >
        <nav
          className="container site-header__mobile-nav"
          aria-label="Mobiele navigatie"
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}

          <Link
            className="button button--primary site-header__mobile-cta"
            href="/contact"
            onClick={closeMenu}
          >
            Klus aanmelden
          </Link>
        </nav>
      </div>
    </header>
  );
}