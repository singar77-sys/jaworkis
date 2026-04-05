"use client";

import { shopUpdates } from "@/lib/updates-data";
import { ScrollReveal } from "./ScrollReveal";
import { TapeLabel } from "./TapeLabel";

export function ShopUpdates() {
  return (
    <section
      className="section-padding relative z-10"
      aria-label="Latest updates from the shop"
    >
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <TapeLabel rotate={-1}>Fresh Off the Block</TapeLabel>
          <h2
            className="text-display text-fg mt-6 mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            From the <span className="text-primary">Counter</span>
          </h2>
          <p className="max-w-xl text-lg text-fg-muted leading-relaxed">
            What&apos;s happening at the shop right now.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-0">
          {shopUpdates.slice(0, 4).map((update, i) => (
            <ScrollReveal key={update.id} delay={Math.min(i * 0.08, 0.3)}>
              <article className="flex gap-6 py-6 border-b border-border/40">
                {/* Date pip */}
                <div className="shrink-0 w-20 pt-1">
                  <time
                    dateTime={update.isoDate}
                    className="text-label text-accent"
                  >
                    {update.date}
                  </time>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-fg leading-relaxed">
                    {update.text}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.facebook.com/jaworskimeats/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-fg-muted hover:text-primary transition-colors"
            >
              See more updates
            </a>
            <span className="text-border" aria-hidden="true">&middot;</span>
            <a
              href="https://www.instagram.com/jaworskimeats/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-fg-muted hover:text-primary transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
