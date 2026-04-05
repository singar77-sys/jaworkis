import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { TapeLabel } from "./TapeLabel";
import { CTAButton } from "./CTAButton";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "9 AM – 6 PM" },
  { day: "Wednesday", time: "9 AM – 6 PM" },
  { day: "Thursday", time: "9 AM – 6 PM" },
  { day: "Friday", time: "9 AM – 6 PM" },
  { day: "Saturday", time: "8 AM – 4 PM" },
  { day: "Sunday", time: "Closed" },
];

export function Visit() {
  return (
    <section id="visit" className="section-padding relative z-10" aria-label="Visit Jaworski Meats — hours, location, and contact">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <TapeLabel rotate={1}>Come Hungry</TapeLabel>
          <h2
            className="text-display text-fg mt-6 mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            7545 Pearl Rd.
            <br />
            <span className="text-primary">Walk In.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-label text-accent mb-3">Address</p>
                <p className="text-lg text-fg">
                  7545 Pearl Rd
                  <br />
                  Middleburg Heights, OH 44130
                </p>
                <p className="text-sm text-fg-muted mt-1">
                  Located in Briarcliffe Plaza Shopping Center
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <p className="text-label text-accent mb-3">Hours</p>
                <div className="space-y-1.5">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between max-w-xs"
                    >
                      <span className="text-fg">{h.day}</span>
                      <span
                        className={`font-[family-name:var(--font-jetbrains)] text-sm ${
                          h.time === "Closed"
                            ? "text-fg-muted"
                            : "text-fg"
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <p className="text-label text-accent mb-3">Phone</p>
                <a
                  href="tel:+14402345678"
                  className="text-2xl text-display text-primary hover:text-primary-hover transition-colors"
                >
                  (440) 234-5678
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex gap-2" role="list" aria-label="Social media links">
                <a
                  href="https://www.facebook.com/jaworskimeats/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-muted hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow Jaworski Meats on Facebook"
                  role="listitem"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/jaworskimeats/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-muted hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow Jaworski Meats on Instagram"
                  role="listitem"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <CTAButton href="tel:+14402345678">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call to Order
              </CTAButton>
            </ScrollReveal>
          </div>

          {/* Photo + Quote */}
          <div className="space-y-8">
            <ScrollReveal delay={0.15}>
              <div className="relative overflow-hidden">
                <Image
                  src="/images/mark-behind-counter.jpg"
                  alt="Mark Jaworski, the Kielbasa Kid, smiling behind the fresh meat counter at Jaworski Meats with ribeyes and chops on display"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <blockquote className="border-l-4 border-primary pl-6 py-2">
                <p className="text-xl text-fg italic leading-relaxed">
                  &ldquo;Stop in, say hi. We&apos;ll be happy to cut you a nice
                  two-inch steak, right off the loin. But please, don&apos;t ask
                  us for a vegetarian meal.&rdquo;
                </p>
                <cite className="text-label text-accent mt-3 block not-italic">
                  &mdash; Mark Jaworski, The Kielbasa Kid
                </cite>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
