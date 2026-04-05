import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { CTAButton } from "./CTAButton";

const craftPoints = [
  {
    image: "/images/beef-primal-block.jpg",
    alt: "Whole primal beef block from Bristolville Ohio being prepared for butchering at Jaworski Meats",
    label: "Whole Primals",
    text: "Multiple deliveries a week. Sides of cattle from Bristolville, Ohio. We hang it. We break it down. Nothing comes pre-cut.",
  },
  {
    image: "/images/band-saw-cutting.jpg",
    alt: "Butcher cutting fresh steaks to order on the band saw at Jaworski Meats — custom thickness, right in front of you",
    label: "Cut to Order",
    text: "Tell us the thickness. We cut it right in front of you. Two-inch ribeye? Say the word.",
  },
  {
    image: "/images/fresh-ground-closeup.jpg",
    alt: "Freshly ground beef for homemade burgers and sausage at Jaworski Meats — ground in-house daily with no fillers",
    label: "Ground Daily",
    text: "Burgers, sausage, kielbasa — all ground and made in-house. Every single day. No factory. No fillers.",
  },
];

export function Craft() {
  return (
    <section id="craft" className="section-padding relative z-10 bg-bg-alt/50" aria-label="Traditional Polish butchery — how Jaworski Meats is different">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-label text-accent mb-4">The Craft</p>
          <h2
            className="text-display text-fg mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Hanging Sides.
            <br />
            Cutting to Order.
            <br />
            <span className="text-primary">No Shortcuts.</span>
          </h2>
          <p className="max-w-2xl text-lg text-fg-muted leading-relaxed">
            Say goodbye to pre-packaged factory beef. Traditional Polish
            butchery is exclusive to the Jaworski way and sets us apart from
            every other meat market in the area.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {craftPoints.map((point, i) => (
            <ScrollReveal key={point.label} delay={i * 0.15}>
              <div className="group">
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <Image
                    src={point.image}
                    alt={point.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-label text-accent mb-2">{point.label}</p>
                <p className="text-fg-muted leading-relaxed">{point.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <CTAButton href="tel:+14402345678">
              <span>Call for Today&apos;s Cuts</span>
            </CTAButton>
            <p className="text-label">Prices change with the market &mdash; call for current list</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
