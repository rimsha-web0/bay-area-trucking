import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bay Area trucking to the interstate LLC in Oak Hills, California, about transportation inquiries, routes, and scheduling.",
};

export default function ContactPage() {
  return (
    <>
      <section
        className="page-hero"
        aria-labelledby="contact-page-heading"
      >
        <div className="container animate-in">
          <span className="eyebrow">Contact our team</span>

          <h1 id="contact-page-heading">
            Start with your shipment details.
          </h1>

          <p>
            Have a transportation question or a route in mind?
            Share your requirements with Bay Area trucking
            to the interstate LLC.
          </p>
        </div>
      </section>

      <section
        className="section section--soft"
        aria-label="Contact information and inquiry form"
      >
        <div className="container contact-grid">
          <aside className="contact-details">
            <div className="contact-detail">
              <span className="eyebrow">
                Business information
              </span>

              <h2
                style={{
                  fontSize: "1.75rem",
                  marginBottom: "18px",
                }}
              >
                Bay Area trucking to the interstate LLC
              </h2>

              <p>
                Please include enough information for our
                team to understand your inquiry.
              </p>
            </div>

            <div className="contact-detail">
              <h3>Business address</h3>

              <address>
                10373 Columbine
                <br />
                Oak Hills, CA 92344
                <br />
                United States
              </address>
            </div>

            <div className="contact-detail">
              <h3>Details to include</h3>

              <ul className="feature-list">
                <li>Pickup and delivery locations</li>
                <li>Shipment type and handling requirements</li>
                <li>Preferred pickup and delivery dates</li>
                <li>A reference for any existing inquiry</li>
              </ul>
            </div>

            <div className="contact-detail">
              <h3>Optional SMS updates</h3>

              <p>
                If you choose SMS updates in the form, you
                agree to receive messages about your inquiry,
                scheduling, and service updates. Message
                frequency varies. Message and data rates
                may apply.
              </p>

              <p style={{ marginTop: "12px" }}>
                Reply STOP to opt out or HELP for help.
                SMS consent is not a condition of purchase.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: "12px" }}>
                Privacy and terms
              </h3>

              <p className="form-disclosure">
                Learn how your information is handled and
                review the terms of our SMS program.
              </p>
npm run build
              <div className="button-row">
                <Link
                  href="/privacy-policy"
                  className="text-link"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms-and-conditions"
                  className="text-link"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}