import { sandwiches, menuNotes } from "@/lib/menu-data";
import { ScrollReveal } from "./ScrollReveal";
import { TapeLabel } from "./TapeLabel";
import { CTAButton } from "./CTAButton";

export function DeliMenu() {
  return (
    <section id="menu" className="section-padding relative z-10" aria-label="Deli lunch menu — sandwiches, subs, and daily specials">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <TapeLabel rotate={-1}>Lunch Menu</TapeLabel>
          <h2
            className="text-display text-fg mt-6 mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            The <span className="text-primary">Counter</span>
          </h2>
          <p className="max-w-xl text-lg text-fg-muted leading-relaxed">
            More than just the standard fare. Homemade roast beef, roast pork,
            and kielbasa loaf that are second to none. Plus daily specials and
            homemade soups.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
          {sandwiches.map((item, i) => (
            <ScrollReveal key={item.name} delay={Math.min(i * 0.03, 0.3)}>
              <div className="py-3 border-b border-border/50 group">
                <div className="flex items-baseline justify-between">
                  <span className="text-fg font-medium group-hover:text-primary transition-colors duration-200 pr-4">
                    {item.name}
                  </span>
                  <span className="text-label text-accent shrink-0 font-[family-name:var(--font-jetbrains)]">
                    {item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="text-sm text-fg-muted mt-0.5">
                    {item.description}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 space-y-1 text-center">
            <p className="text-sm text-fg-muted italic">{menuNotes.customization}</p>
            <p className="text-sm text-fg-muted italic">{menuNotes.soup}</p>
            <p className="text-xs text-fg-muted mt-2">*{menuNotes.priceNotice}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-8 text-center">
            <p className="text-fg-muted mb-6">
              Plus daily lunch specials, homemade soups, and whatever Mark is
              cooking up in the back.
            </p>
            <CTAButton href="tel:+14402345678">
              Order Lunch
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
