"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 20);

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 960px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    return pathname === href;
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header
        className={[
          "site-header",
          scrolled ? "site-header--scrolled" : "",
          menuOpen ? "site-header--menu-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="header-topbar">
          <div className="container header-topbar__inner">
            <span>Based in Oak Hills, California</span>
            <Link href="/contact">Discuss your transportation needs</Link>
          </div>
        </div>

        <div className="container navbar">
          <Link
            href="/"
            className="brand"
            aria-label="Bay Area trucking to the interstate LLC — Home"
            onClick={() => setMenuOpen(false)}
          >
                <Image
  src="/logo.png"
  alt=""
  width={64}
  height={64}
  className="brand__logo"
/>
            <span className="brand__text">
              <span className="brand__name">BAY AREA TRUCKING</span>
              <span className="brand__sub">TO THE INTERSTATE LLC</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  isActive(item.href) ? "nav-link--active" : ""
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="button button--primary navbar__cta">
            Get in touch
          </Link>

          <button
            ref={menuButton}
            type="button"
            className={`menu-toggle ${
              menuOpen ? "menu-toggle--open" : ""
            }`}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          id="mobile-navigation"
          className="mobile-menu"
          hidden={!menuOpen}
        >
          <nav
            className="container mobile-menu__inner"
            aria-label="Mobile navigation"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-menu__link ${
                  isActive(item.href) ? "mobile-menu__link--active" : ""
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-menu__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}

            <div className="mobile-menu__footer">
              <p>Oak Hills, CA 92344</p>
              <Link
                href="/contact"
                className="button button--primary"
                onClick={() => setMenuOpen(false)}
              >
                Contact our team
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}