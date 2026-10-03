import Link from "next/link";
import Image from "next/image";

const truckingPhoto =
  "https://images.unsplash.com/photo-1736140456900-f9fcd772d85c?auto=format&fit=crop&w=2000&q=85";

const businessName = "Bay Area trucking to the interstate LLC";
const temporaryPhone = "+1 (438) 797-5676";

const inquiryTopics = [
  {
    number: "01",
    title: "Transportation inquiries",
    description:
      "Share pickup and delivery locations, shipment details, and preferred dates so we can discuss your transportation requirements.",
  },
  {
    number: "02",
    title: "Route and scheduling",
    description:
      "Discuss your requested route, delivery window, and location instructions. Availability is confirmed directly with our team.",
  },
  {
    number: "03",
    title: "Business communication",
    description:
      "Follow up on an existing inquiry, share additional shipment information, or discuss the next steps.",
  },
];

const process = [
  {
    number: "01",
    title: "Tell us what needs to move",
    description:
      "Provide your shipment type, origin, destination, and preferred transportation dates.",
  },
  {
    number: "02",
    title: "Discuss the requirements",
    description:
      "Review availability, pricing, handling requirements, and location instructions with our team.",
  },
  {
    number: "03",
    title: "Confirm the arrangements",
    description:
      "Agree to the relevant service details before proceeding with transportation arrangements.",
  },
];

const questions = [
  {
    question: "What information should I include in my inquiry?",
    answer:
      "Include pickup and delivery locations, shipment type, estimated weight and dimensions, requested dates, and any special handling or loading requirements.",
  },
  {
    question: "Does submitting an inquiry confirm a booking?",
    answer:
      "No. An inquiry begins a conversation. Availability, equipment, pricing, and service terms must be confirmed directly before a booking is agreed.",
  },
  {
    question: "How do I check availability for my route?",
    answer:
      "Share the origin, destination, and requested dates through our contact page. Our team can then discuss the requirements and confirm whether arrangements are available.",
  },
  {
    question: "Are the trucks in the website pictures your fleet?",
    answer:
      "The website uses illustrative stock photography. The pictured vehicles do not represent ownership of a particular fleet or equipment.",
  },
  {
    question: "Do I have to agree to SMS updates?",
    answer:
      "No. SMS consent is optional and is not a condition of purchase. You can submit an inquiry without selecting the SMS consent checkbox.",
  },
  {
    question: "How can I stop SMS updates?",
    answer:
      "If you enrolled in SMS updates, reply STOP to the sending number to unsubscribe. Reply HELP for assistance. Message frequency varies and message and data rates may apply.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <Image
          src={truckingPhoto}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="hero__image"
        />

        <div className="hero__overlay" aria-hidden="true" />

        <div className="container">
          <div className="hero__content">
            <span className="eyebrow">
              Oak Hills, California
            </span>

            <h1 id="hero-heading">
              Your next shipment.
              <br />
              <span>A clear path forward.</span>
            </h1>

            <p className="hero__description">
              Connect with {businessName} to discuss your
              trucking and transportation needs. Start with
              your shipment, your route, and your schedule.
            </p>

            <div className="button-row">
              <Link
                href="/contact"
                className="button button--primary"
              >
                Discuss your shipment
              </Link>

              <Link
                href="#about"
                className="button button--outline-light"
              >
                Explore our business
              </Link>
            </div>

            <div className="hero__contact">
              <span className="hero__contact-label">
              </span>
              <strong>{temporaryPhone}</strong>
            </div>

            <p className="hero__note">
              Availability and transportation arrangements
              are confirmed directly with our team.
            </p>
          </div>
        </div>
      </section>

      <section
        className="info-strip"
        aria-label="Business information"
      >
        <div className="container info-strip__grid">
          <div className="info-strip__item">
            <strong>California based</strong>
            <span>Oak Hills, CA 92344</span>
          </div>

          <div className="info-strip__item">
            <strong>Your route, your requirements</strong>
            <span>Start with pickup and delivery details</span>
          </div>

          <div className="info-strip__item">
            <strong>Confirm before proceeding</strong>
            <span>Discuss availability and service terms</span>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section"
        aria-labelledby="about-heading"
      >
        <div className="container split-grid">
          <div className="split-content">
            <span className="eyebrow">About our business</span>

            <h2 id="about-heading">
              Every journey starts with a conversation.
            </h2>

            <p>
              {businessName} is based in Oak Hills, California.
              Contact our team to discuss your trucking and
              transportation requirements, from the first
              shipment details to the arrangements you need
              to confirm.
            </p>

            <p>
              A shipment involves more than an origin and
              destination. Timing, loading access, cargo
              information, and handling instructions all
              help shape a useful conversation.
            </p>

            <p>
              Whether you are beginning a new inquiry or
              following up on an existing request, share
              your requirements so the relevant options can
              be discussed directly.
            </p>

            <ul className="feature-list">
              <li>
                Share your shipment and handling requirements.
              </li>
              <li>
                Discuss pickup, delivery, and preferred timing.
              </li>
              <li>
                Confirm availability and terms before proceeding.
              </li>
            </ul>

            <Link
              href="/contact"
              className="button button--secondary"
            >
              Meet your next step
            </Link>
          </div>

          <figure className="photo-frame">
            <Image
              src={truckingPhoto}
              alt="A semi-truck traveling along a highway surrounded by trees."
              width={1000}
              height={800}
              unoptimized
              sizes="(max-width: 959px) 100vw, 50vw"
              className="split-image"
            />

            <div className="photo-frame__badge">
              <span>Our business location</span>
              <strong>Oak Hills, California</strong>
            </div>
          </figure>
        </div>
      </section>

      <section
        id="services"
        className="section section--soft"
        aria-labelledby="services-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              Transportation requirements
            </span>

            <h2 id="services-heading">
              Tell us what your shipment needs.
            </h2>

            <p>
              Begin an inquiry with the details that matter.
              Services, equipment, routes, and availability
              require direct confirmation before booking.
            </p>
          </div>

          <div className="card-grid">
            {inquiryTopics.map((topic) => (
              <article
                key={topic.number}
                className="service-card"
              >
                <span
                  className="service-card__icon"
                  aria-hidden="true"
                >
                  {topic.number}
                </span>

                <h3>{topic.title}</h3>
                <p>{topic.description}</p>

                <Link href="/contact" className="text-link">
                  Start an inquiry
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section--dark"
        aria-labelledby="process-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Getting started</span>

            <h2 id="process-heading">
              Clear details. Practical next steps.
            </h2>

            <p>
              Share your requirements, discuss the options,
              and confirm the arrangements.
            </p>
          </div>

          <div className="steps-grid">
            {process.map((step) => (
              <article key={step.number} className="step-card">
                <span
                  className="step-card__number"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional section 1 */}
      <section
        className="section planning-section"
        aria-labelledby="planning-heading"
      >
        <div className="container split-grid">
          <figure className="planning-photo">
            <Image
              src={truckingPhoto}
              alt="Commercial freight transportation on a tree-lined highway."
              width={1000}
              height={1000}
              unoptimized
              sizes="(max-width: 959px) 100vw, 50vw"
              className="split-image planning-photo__image"
            />

            <figcaption className="planning-photo__caption">
              <span>Before the journey</span>
              <strong>Plan the details that matter.</strong>
            </figcaption>
          </figure>

          <div className="split-content">
            <span className="eyebrow">Shipment planning</span>

            <h2 id="planning-heading">
              A better starting point for your next shipment.
            </h2>

            <p>
              Help our team understand your requirements
              before discussing arrangements. A few clear
              details can make the inquiry more useful.
            </p>

            <div className="planning-list">
              <div className="planning-item">
                <span aria-hidden="true">01</span>
                <div>
                  <h3>Know your cargo</h3>
                  <p>
                    Include the commodity, estimated weight,
                    dimensions, packaging, and handling needs.
                  </p>
                </div>
              </div>

              <div className="planning-item">
                <span aria-hidden="true">02</span>
                <div>
                  <h3>Describe each location</h3>
                  <p>
                    Mention loading access, appointment
                    requirements, and pickup or delivery
                    restrictions.
                  </p>
                </div>
              </div>

              <div className="planning-item">
                <span aria-hidden="true">03</span>
                <div>
                  <h3>Share your timeline</h3>
                  <p>
                    Provide preferred dates and indicate
                    which timing requirements are flexible.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="button button--primary"
            >
              Share shipment details
            </Link>
          </div>
        </div>
      </section>

      {/* Additional section 2 */}
      <section
        className="section section--soft"
        aria-labelledby="faq-heading"
      >
        <div className="container faq-layout">
          <div className="faq-intro">
            <span className="eyebrow">Helpful information</span>

            <h2 id="faq-heading">
              Before you get started.
            </h2>

            <p>
              Answers about inquiries, transportation
              arrangements, and optional SMS updates.
            </p>

            <Link
              href="/contact"
              className="button button--secondary"
            >
              Ask another question
            </Link>
          </div>

          <div className="faq-list">
            {questions.map((item) => (
              <details
                key={item.question}
                className="faq-item"
              >
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        aria-labelledby="contact-heading"
      >
        <div className="container">
          <div className="cta-panel">
            <div>
              <span className="eyebrow">
                Start a conversation
              </span>

              <h2 id="contact-heading">
                Have a shipment or route in mind?
              </h2>

              <p>
                Share your requirements with {businessName}.
                Visit our contact page to discuss your next step.
              </p>

              <p className="cta-phone">
                Phone : {temporaryPhone}
              </p>
            </div>

            <Link
              href="/contact"
              className="button button--primary"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}