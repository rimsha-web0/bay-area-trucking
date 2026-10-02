"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

type ContactFormProps = {
  endpoint?: string;
};

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

const businessName = "Bay Area trucking to the interstate LLC";

const smsConsentText =
  `I agree to receive SMS messages from ${businessName} about ` +
  "my transportation inquiries, scheduling, and service updates. " +
  "Message frequency varies. Message and data rates may apply. " +
  "Reply STOP to opt out or HELP for help. " +
  "Consent is not a condition of purchase.";

export default function ContactForm({
  endpoint,
}: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (submitting) return;

    setStatus(null);

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const phone = String(formData.get("phone") ?? "").trim();
    const smsConsent = formData.get("smsConsent") === "on";

    if (
      smsConsent &&
      !/^\+[1-9]\d{7,14}$/.test(phone)
    ) {
      setStatus({
        type: "error",
        message:
          "For SMS updates, enter your mobile number with its " +
          "country code, starting with + and using digits only.",
      });
      return;
    }

    if (!endpoint) {
      setStatus({
        type: "error",
        message:
          "Your request has not been sent. Online submissions " +
          "are not available yet. Please try again later.",
      });
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone,
      inquiryType: String(
        formData.get("inquiryType") ?? ""
      ),
      message: String(formData.get("message") ?? "").trim(),
      smsConsent,
      smsConsentText: smsConsent ? smsConsentText : null,
      consentVersion: "2026-10-02",
      submittedAt: new Date().toISOString(),
      sourceUrl: window.location.href,
    };

    setSubmitting(true);

    const controller = new AbortController();
    const timeout = window.setTimeout(
      () => controller.abort(),
      20000
    );

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus({
        type: "success",
        message:
          "Thank you. Your inquiry has been received. " +
          "Our team will review the information you provided.",
      });

      form.reset();
    } catch {
      setStatus({
        type: "error",
        message:
          "We could not confirm receipt of your inquiry. " +
          "Please try again later.",
      });
    } finally {
      window.clearTimeout(timeout);
      setSubmitting(false);
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-labelledby="inquiry-form-heading"
      aria-busy={submitting}
    >
      <h2 id="inquiry-form-heading">Send an inquiry</h2>

      <p className="form-intro">
        Tell us about your route, shipment, or question.
        Fields marked with * are required.
      </p>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="contact-name">Full name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
            maxLength={120}
            disabled={submitting}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-company">
            Company name
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company"
            maxLength={160}
            disabled={submitting}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">
            Email address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            maxLength={254}
            disabled={submitting}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-phone">
            Mobile number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 followed by your number"
            aria-describedby="phone-guidance"
            maxLength={30}
            disabled={submitting}
          />
          <small
            id="phone-guidance"
            className="form-disclosure"
          >
            Optional unless you choose SMS updates.
            For SMS, include + and the country code,
            without spaces or dashes.
          </small>
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="contact-inquiry">
            Inquiry topic *
          </label>
          <select
            id="contact-inquiry"
            name="inquiryType"
            defaultValue=""
            required
            disabled={submitting}
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option value="transportation">
              Transportation inquiry
            </option>
            <option value="scheduling">
              Route and scheduling
            </option>
            <option value="existing-inquiry">
              Existing inquiry
            </option>
            <option value="general">
              General question
            </option>
          </select>
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="contact-message">
            Your message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder={
              "Include pickup and delivery locations, " +
              "shipment details, and preferred dates."
            }
            required
            minLength={10}
            maxLength={5000}
            disabled={submitting}
          />
        </div>
      </div>

      <div className="consent-box">
        <input
          id="contact-sms-consent"
          name="smsConsent"
          type="checkbox"
          disabled={submitting}
        />

        <label htmlFor="contact-sms-consent">
          {smsConsentText} Read our{" "}
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-and-conditions">
            Terms &amp; Conditions
          </Link>
          .
        </label>
      </div>

      <p className="form-disclosure">
        You can submit an inquiry without agreeing to SMS.
        SMS consent applies only to the updates described
        above, not promotional messages.
      </p>

      <button
        type="submit"
        className="button button--primary"
        disabled={submitting}
      >
        {submitting ? "Sending…" : "Send inquiry"}
      </button>

      {status && (
        <div
          className={`form-status form-status--${status.type}`}
          role={
            status.type === "error" ? "alert" : "status"
          }
          aria-atomic="true"
        >
          {status.message}
        </div>
      )}
    </form>
  );
}