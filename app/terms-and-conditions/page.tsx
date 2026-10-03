import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Website terms and SMS program information for Bay Area trucking to the interstate LLC.",
};

const businessName = "Bay Area trucking to the interstate LLC";

export default function TermsAndConditionsPage() {
  return (
    <>
      <section
        className="page-hero"
        aria-labelledby="terms-heading"
      >
        <div className="container animate-in">
          <span className="eyebrow">
            Website and communication terms
          </span>

          <h1 id="terms-heading">
            Terms &amp; Conditions
          </h1>

          <p>
            Please review these terms before using our
            website or enrolling in optional SMS updates.
          </p>
        </div>
      </section>

      <section className="section">
        <article
          className="container legal-content"
          aria-label="Terms and conditions"
        >
          <p>
            <strong>Last updated:</strong> September 20, 2026
          </p>

          <h2>1. Business information</h2>

          <p>
            This website is operated for {businessName},
            located at 10373 Columbine, Oak Hills,
            CA 92344, United States.
          </p>

          <p>
            These terms describe use of this website and
            participation in our optional SMS communication
            program. Specific transportation services are
            subject to separately agreed arrangements.
          </p>

          <h2>2. Website inquiries</h2>

          <p>
            Information on this website is provided to
            introduce our business and allow you to discuss
            transportation requirements with our team.
          </p>

          <p>
            Submitting an inquiry does not create a booking,
            guarantee equipment or route availability, or
            establish a transportation contract.
            Availability, pricing, responsibilities, and
            other service details must be confirmed directly
            before proceeding.
          </p>

          <h2>3. Accurate information</h2>

          <p>
            Please provide accurate contact and shipment
            information. Do not submit information belonging
            to another person without authorization.
          </p>

          <p>
            Do not use the website to submit unlawful,
            misleading, abusive, or harmful material or to
            interfere with its operation.
          </p>

          <h2>4. SMS program description</h2>

          <div className="legal-note">
            <p>
              <strong>Program:</strong> {businessName} —
              Inquiry and Service Updates.
            </p>

            <p>
              Messages may concern transportation inquiries,
              scheduling, requested information, and updates
              about agreed services.
            </p>
          </div>

          <p style={{ marginTop: "20px" }}>
            This program does not include unrelated
            promotional messages. Consent obtained through
            the inquiry form applies only to the message
            types described beside its SMS checkbox.
          </p>

          <h2>5. SMS enrollment</h2>

          <p>
            You may request SMS updates by entering your
            mobile number and selecting the separate,
            optional SMS consent checkbox on an enabled
            contact form.
          </p>

          <p>
            Providing your number without selecting that
            checkbox does not enroll you. The checkbox is
            unchecked by default. You may submit an inquiry
            without opting in to SMS.
          </p>

          <p>
            Consent is not a condition of purchase.
            By enrolling, you confirm that you are the
            subscriber or authorized user of the mobile
            number provided.
          </p>

          <h2>6. Message frequency and charges</h2>

          <p>
            Message frequency varies according to your
            inquiry, scheduling requirements, and service
            activity. Message and data rates may apply
            under your mobile carrier plan.
          </p>

          <p>
            Contact your mobile carrier if you have
            questions about your plan or messaging charges.
          </p>

          <h2>7. Opting out</h2>

          <p>
            Reply STOP to the number that sent the message
            to unsubscribe from this SMS program.
            You may receive a final message confirming
            your opt-out.
          </p>

          <p>
            After opting out, further program messages
            will cease unless you provide new valid consent.
            Opting out does not prevent you from contacting
            our business through other available channels.
          </p>

          <h2>8. Help and support</h2>

          <p>
            Reply HELP to the sending number for assistance
            with the SMS program. You may also use the
            available support details on our{" "}
            <Link href="/contact">Contact page</Link>.
          </p>

          <p>
            Written inquiries may be addressed to:
          </p>

          <address style={{ fontStyle: "normal" }}>
            {businessName}
            <br />
            10373 Columbine
            <br />
            Oak Hills, CA 92344
            <br />
            United States
          </address>

          <h2>9. Delivery and number changes</h2>

          <p>
            SMS delivery depends on your mobile carrier,
            network availability, device compatibility,
            and other factors. Delivery or timing cannot
            be guaranteed.
          </p>

          <p>
            Carriers are not liable for delayed or
            undelivered messages.
          </p>

          <p>
            If your mobile number changes or is reassigned,
            notify our team and opt out using your previous
            number when possible. Do not enroll a number
            you are not authorized to use.
          </p>

          <h2>10. Privacy</h2>

          <p>
            Our{" "}
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>{" "}
            explains how inquiry information, mobile numbers,
            and SMS consent records are handled.
          </p>

          <p>
            Mobile information and SMS opt-in consent
            will not be sold, rented, or shared with third
            parties or affiliates for marketing or
            promotional purposes.
          </p>

          <p>
            External links may lead to websites operated
            by other parties. Their content, availability,
            and privacy practices are governed by their
            own terms.
          </p>

          <h2>11. Changes to these terms</h2>

          <p>
            We may update these terms to reflect changes
            in the website or communication program.
            Revised terms will be posted on this page
            with an updated date.
          </p>

          <p>
            Any material change to the purpose of SMS
            messaging will require appropriate consent;
            an update to these terms alone does not
            expand your existing SMS consent.
          </p>
        </article>
      </section>
    </>
  );
}