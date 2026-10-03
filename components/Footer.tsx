import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link
              href="/"
              className="brand"
              aria-label="Bay Area trucking to the interstate LLC — Home"
            >
              <span className="brand__mark" aria-hidden="true">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8H19V22H3V8Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 13H24L29 18V22H19V13Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 14V18H28"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="23"
                    r="3"
                    fill="var(--navy, #10243a)"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="24"
                    cy="23"
                    r="3"
                    fill="var(--navy, #10243a)"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>

              <span className="brand__text">
                <span className="brand__name">
                  BAY AREA TRUCKING
                </span>
                <span className="brand__sub">
                  TO THE INTERSTATE LLC
                </span>
              </span>
            </Link>

            <p className="footer-description">
              Based in Oak Hills, California. Contact our team
              to discuss your trucking and transportation needs.
            </p>

            <Link
              href="/contact"
              className="button button--primary"
            >
              Get in touch
            </Link>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="footer-title">Explore</h2>

            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about">About our business</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="footer-title">Business contact</h2>

            <address className="footer-contact">
              <p>
                Bay Area trucking to the interstate LLC
              </p>

              <p>
                10373 Columbine
                <br />
                Oak Hills, CA 92344
                <br />
                United States
              </p>

              <p>
                <strong>Phone : </strong>
                <br />
                +1 (438) 797-5676
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                info@bayareainterstatetrucking.com
              </p>
            </address>

            <p className="footer-description">
              For inquiries, please visit our contact page.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Bay Area trucking to
            the interstate LLC. All rights reserved.
          </p>

          <nav
            className="footer-legal"
            aria-label="Legal information"
          >
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}