import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy and SMS consent information for Bay Area trucking to the interstate LLC.",
};

const businessName = "Bay Area trucking to the interstate LLC";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        className="page-hero"
        aria-labelledby="privacy-heading"
      >
        <div className="container animate-in">
          <span className="eyebrow">Your information</span>

          <h1 id="privacy-heading">Privacy Policy</h1>

          <p>
            How {businessName} handles website inquiries,
            personal information, and SMS consent.
          </p>
        </div>
      </section>

      <section className="section">
        <article
          className="container legal-content"
          aria-label="Privacy policy"
        >
          <p>
            <strong>Last updated:</strong> October 2, 2026
          </p>

          <h2>1. Who we are</h2>

          <p>
            This policy applies to the website and inquiry
            communications of {businessName}, located at
            10373 Columbine, Oak Hills, CA 92344, United States.
          </p>

          <h2>2. Information you provide</h2>

          <p>
            When you submit an inquiry through an enabled
            contact form or communicate with our team, you
            may provide:
          </p>

          <ul>
            <li>Your name and company name.</li>
            <li>Your email address and mobile number.</li>
            <li>
              Shipment information, requested routes, dates,
              and the contents of your inquiry.
            </li>
            <li>
              Your SMS consent selection, where applicable.
            </li>
          </ul>

          <p>
            Please do not include payment card details,
            passwords, government identification documents,
            or other sensitive information in the inquiry form.
          </p>

          <h2>3. Technical information</h2>

          <p>
            Website hosting and security services may process
            technical information such as IP addresses,
            browser information, requested pages, and access
            times to deliver and protect the website.
          </p>

          <p>
            When an online inquiry is submitted, the submission
            may also include its timestamp, source page, and
            the version of the SMS consent wording displayed.
          </p>

          <h2>4. How we use information</h2>

          <p>We use relevant information to:</p>

          <ul>
            <li>Review and respond to your inquiry.</li>
            <li>
              Discuss transportation requirements and
              coordinate agreed services.
            </li>
            <li>
              Send inquiry, scheduling, and service updates
              through the communication channels you authorize.
            </li>
            <li>
              Maintain consent and opt-out records.
            </li>
            <li>
              Protect our website, address misuse, and meet
              applicable legal obligations.
            </li>
          </ul>

          <h2>5. SMS consent and your choices</h2>

          <div className="legal-note">
            <p>
              SMS consent is optional and separate from
              submitting an inquiry. Providing a mobile
              number alone does not enroll you in SMS updates.
              The SMS checkbox is not selected by default.
            </p>
          </div>

          <p style={{ marginTop: "20px" }}>
            If you explicitly choose SMS updates, messages
            cover your transportation inquiries, scheduling,
            and service updates from {businessName}.
            Message frequency varies. Message and data
            rates may apply. Consent is not a condition
            of purchase.
          </p>

          <p>
            Reply STOP to the sending number to opt out.
            You may receive a final confirmation of your
            opt-out. Reply HELP for help. Opting out of SMS
            does not prevent you from contacting our business
            through other available channels.
          </p>

          <p>
            This inquiry consent does not authorize unrelated
            promotional SMS. A separate appropriate consent
            process is required for a different messaging
            purpose.
          </p>

          <h2>6. Information sharing</h2>

          <p>
            We do not sell or rent personal information.
            Mobile information will not be shared with third
            parties or affiliates for marketing or promotional
            purposes.
          </p>

          <p>
            Text messaging originator opt-in data and consent
            are excluded from information shared for marketing
            or promotional purposes and will not be sold,
            rented, or shared for those purposes.
          </p>

          <p>
            We may provide the information necessary to
            operate our services to providers that support
            website hosting, inquiry processing, record
            storage, and message delivery. These providers
            may process information only as needed to provide
            those services, subject to applicable obligations.
          </p>

          <p>
            We may also disclose information when legally
            required or necessary to protect rights, address
            fraud, or respond to a valid legal request.
          </p>

          <h2>7. Cookies and external services</h2>

          <p>
            This website loads fonts and illustrative images
            from external services. Your browser may send
            technical information, including your IP address,
            to those services when retrieving these resources.
            Their own privacy policies apply to that processing.
          </p>

          <p>
            Any cookies or similar technologies introduced
            through hosting, analytics, or other integrations
            must be disclosed here before those integrations
            are used.
          </p>

          <h2>8. Retention and security</h2>

          <p>
            We retain information for as long as reasonably
            needed for the purposes described in this policy,
            including service communications, applicable
            recordkeeping obligations, and dispute resolution.
          </p>

          <p>
            Consent and suppression records may be retained
            to document your choices and prevent further SMS
            after an opt-out.
          </p>

          <p>
            We use reasonable administrative and technical
            safeguards appropriate to the information handled.
            No electronic transmission or storage system
            can be guaranteed completely secure.
          </p>

          <h2>9. Privacy requests</h2>

          <p>
            You may request access to, correction of, or
            deletion of your information, subject to applicable
            law and necessary recordkeeping. We may need to
            verify your identity before responding.
          </p>

          <p>
            Direct privacy inquiries to {businessName} at:
          </p>

          <address style={{ fontStyle: "normal" }}>
            10373 Columbine
            <br />
            Oak Hills, CA 92344
            <br />
            United States
          </address>

          <p style={{ marginTop: "16px" }}>
            Available online contact options are listed on our{" "}
            <Link href="/contact">Contact page</Link>.
          </p>

          <h2>10. Children&apos;s information</h2>

          <p>
            Our website and business inquiry services are
            intended for adults. We do not knowingly collect
            personal information from children under 13.
            Please contact us if you believe such information
            has been provided.
          </p>

          <h2>11. Policy updates</h2>

          <p>
            We may update this policy to reflect changes
            in our services or information handling.
            The updated version will be posted here with
            a revised date.
          </p>

          <p>
            For SMS program information, please review our{" "}
            <Link href="/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </article>
      </section>
    </>
  );
}