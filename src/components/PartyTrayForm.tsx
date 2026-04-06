"use client";

import { useState, useRef, type FormEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { TapeLabel } from "./TapeLabel";

/**
 * Formspree endpoint — delivers submissions to jaworskimeats@gmail.com
 *
 * Setup (takes 2 minutes):
 * 1. Go to https://formspree.io and sign up (free tier = 50 submissions/month)
 * 2. Create a new form, set destination to jaworskimeats@gmail.com
 * 3. Copy the form ID (e.g. "xpzvqkdl")
 * 4. Replace the ID below
 *
 * Until a real ID is set, falls back to mailto.
 */
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";
const FORMSPREE_URL = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : "";

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  guests: string;
  trayType: string;
  details: string;
}

const trayOptions = [
  "Meat & Cheese Tray",
  "Kielbasa & Sausage Platter",
  "Deli Sub Tray",
  "3-Foot Sub (2 day notice required)",
  "Custom — Tell Us What You Need",
];

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  date: "",
  guests: "",
  trayType: "",
  details: "",
};

export function PartyTrayForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(false);

    // If Formspree is configured, POST to it
    if (FORMSPREE_URL) {
      try {
        const res = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            email: form.email,
            "event date": form.date,
            "guest count": form.guests,
            "tray type": form.trayType,
            details: form.details,
            _subject: `Party Tray Request — ${form.trayType || "Custom"} for ${form.date || "TBD"}`,
          }),
        });

        if (res.ok) {
          setSending(false);
          setSubmitted(true);
          return;
        }
      } catch {
        // Fall through to mailto
      }
    }

    // Fallback: mailto
    const subject = encodeURIComponent(
      `Party Tray Request — ${form.trayType || "Custom"} for ${form.date || "TBD"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Event Date: ${form.date}`,
        `Guests: ${form.guests}`,
        `Tray: ${form.trayType}`,
        `Details: ${form.details}`,
      ].join("\n")
    );
    window.location.href = `mailto:jaworskimeats@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  }

  const inputClass =
    "w-full bg-bg border border-border px-4 py-3 text-fg text-sm placeholder:text-fg-muted/50 focus:outline-none focus:border-primary transition-colors duration-200";
  const labelClass = "text-label text-accent mb-1.5 block";

  return (
    <section
      id="party-trays"
      className="section-padding relative z-10 bg-bg-alt/50"
      aria-label="Order a party tray from Jaworski Meats"
    >
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <TapeLabel rotate={1.5}>Feed the Crew</TapeLabel>
          <h2
            className="text-display text-fg mt-6 mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Party <span className="text-primary">Trays</span>
          </h2>
          <p className="max-w-xl text-lg text-fg-muted leading-relaxed">
            Graduation, game day, office lunch, family reunion — we build trays
            for any crowd. Tell us what you need and we&apos;ll call you back
            with a quote.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-fg-muted">
            <span>Party trays — <strong className="text-fg">1 day notice</strong></span>
            <span>3-foot subs — <strong className="text-fg">2 day notice</strong></span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 relative aspect-[4/3] sm:aspect-[16/9] max-w-2xl mx-auto overflow-hidden">
            <Image
              src="/images/deli-tray-round.webp"
              alt="Jaworski Meats party tray — hand-fanned deli meats with Swiss, American cheese, pepperoni, and banana peppers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 border border-primary/30 bg-card p-8 text-center"
            >
              <p className="text-display text-2xl text-primary mb-2">
                Request Sent
              </p>
              <p className="text-fg-muted">
                We&apos;ll get back to you within one business day. Or call us
                anytime at{" "}
                <a
                  href="tel:+14402345678"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  (440) 234-5678
                </a>
                .
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialForm);
                  setError(false);
                }}
                className="mt-6 text-label text-accent hover:text-primary transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-12 space-y-6"
            >
              <ScrollReveal delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pt-name" className={labelClass}>
                      Your Name *
                    </label>
                    <input
                      id="pt-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="pt-phone" className={labelClass}>
                      Phone *
                    </label>
                    <input
                      id="pt-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass}
                      placeholder="(440) 555-1234"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div>
                  <label htmlFor="pt-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="pt-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pt-date" className={labelClass}>
                      Event Date *
                    </label>
                    <input
                      id="pt-date"
                      name="event_date"
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="pt-guests" className={labelClass}>
                      How Many People?
                    </label>
                    <input
                      id="pt-guests"
                      name="guest_count"
                      type="text"
                      value={form.guests}
                      onChange={(e) => update("guests", e.target.value)}
                      className={inputClass}
                      placeholder="20-25"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div>
                  <label htmlFor="pt-tray" className={labelClass}>
                    What Are You Looking For? *
                  </label>
                  <select
                    id="pt-tray"
                    name="tray_type"
                    required
                    value={form.trayType}
                    onChange={(e) => update("trayType", e.target.value)}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="">Pick a tray type...</option>
                    {trayOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div>
                  <label htmlFor="pt-details" className={labelClass}>
                    Anything Else?
                  </label>
                  <textarea
                    id="pt-details"
                    name="details"
                    rows={4}
                    value={form.details}
                    onChange={(e) => update("details", e.target.value)}
                    className={`${inputClass} resize-y`}
                    placeholder="Allergies, favorites, special requests..."
                  />
                </div>
              </ScrollReveal>

              {error && (
                <p className="text-sm text-cta">
                  Something went wrong. Try again or call us directly.
                </p>
              )}

              <ScrollReveal delay={0.35}>
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-cta w-full sm:w-auto disabled:opacity-60"
                  >
                    {sending ? "Sending..." : "Request a Quote"}
                  </button>
                  <span className="text-sm text-fg-muted">
                    or call{" "}
                    <a
                      href="tel:+14402345678"
                      className="text-primary hover:text-primary-hover transition-colors"
                    >
                      (440) 234-5678
                    </a>
                  </span>
                </div>
              </ScrollReveal>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
