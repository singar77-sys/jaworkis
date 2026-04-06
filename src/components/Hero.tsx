import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { WelcomeBack } from "./WelcomeBack";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Welcome to Jaworski Meats"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tomahawk-steaks-trio.webp"
          alt="Three tomahawk ribeyes lined up on a butcher block at Jaworski Meats — cut to order since 1935"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 sm:pt-28 pb-24 sm:pb-20 text-center">
        {/* Welcome Back — only renders on return visits */}
        <WelcomeBack />

        {/* Label */}
        <p className="text-label mb-6 text-accent">
          Est. 1935 &middot; Middleburg Heights, Ohio
        </p>

        {/* Headline */}
        <h1
          className="text-display text-primary leading-[0.85] mb-6"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
        >
          Cut to Order.
          <br />
          <span className="text-fg">Since 1935.</span>
        </h1>

        {/* Subhead */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-fg-muted leading-relaxed mb-10">
          Fresh steaks, homemade kielbasa, and a deli counter that&apos;s been
          feeding Cleveland for 90 years. Still family owned. Still cutting it
          right in front of you. Still wrapping it in white butcher paper.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href="tel:+14402345678">
            <PhoneIcon />
            Call to Order
          </CTAButton>
          <CTAButton href="#visit" variant="secondary">
            Visit the Shop
          </CTAButton>
        </div>
      </div>

      {/* Scroll Indicator — hidden on short screens */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block" aria-hidden="true">
        <div className="w-5 h-8 border-2 border-fg/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-fg/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
