import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { TapeLabel } from "./TapeLabel";

export function Heritage() {
  return (
    <section id="heritage" className="section-padding relative z-10" aria-label="Our heritage — three generations of Jaworski butchers">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <TapeLabel rotate={-2}>Our Story</TapeLabel>
          <h2
            className="text-display text-primary mt-6 mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Fred Wore the Hat.
            <br />
            Dorothy Ran the Floor.
            <br />
            <span className="text-fg">Mark Runs the Show.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Story Column */}
          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <p className="text-label text-accent mb-2">1935 &mdash; Slavic Village, Cleveland</p>
              <p className="text-lg leading-relaxed text-fg-muted">
                Fred Jaworski stood behind the counter of his small meat stand
                in the old Newburg Market. Another ethnic market among dozens in
                Slavic Village. But through the years, his modest stand became
                the Grande Dame of the Polish meat market in Cleveland. Its
                success was built on Fred&apos;s most important ingredients: hard
                work, dedication to his customers, and family.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed text-fg-muted">
                Fred wore his unmistakable paper butcher hat for the final time
                when he passed away in March of 1996. To the community, he was
                known simply as <em className="text-primary font-medium not-italic">&ldquo;The Kielbasa King.&rdquo;</em>{" "}
                To his family, he was a husband, a father, and a papa.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg leading-relaxed text-fg-muted">
                Today, Jaworski Meats is owned and operated by Mark Jaworski
                &mdash; the <em className="text-primary font-medium not-italic">&ldquo;Kielbasa Kid.&rdquo;</em>{" "}
                Dorothy Jaworski, the <em className="text-primary font-medium not-italic">&ldquo;Kielbasa Queen,&rdquo;</em>{" "}
                worked alongside the crew well into her 90s until she passed
                in 2019. Three generations of nephews, sons, and daughters have
                worked within the venerable walls of Jaworski Meats.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-label text-accent mt-8">
                1980 &mdash; Present
              </p>
              <p className="text-lg leading-relaxed text-fg-muted italic">
                &ldquo;When I started with my father in 1980, I wanted to learn
                everything from him and follow in his footsteps &mdash; and they
                were some mighty big shoes to fill.&rdquo;
              </p>
            </ScrollReveal>
          </div>

          {/* Photo Column */}
          <div className="space-y-8">
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -top-3 left-8 z-20">
                  <TapeLabel rotate={1.5}>The Kielbasa King</TapeLabel>
                </div>
                <div className="relative overflow-hidden bg-card border border-card-border shadow-[var(--shadow-lg)] p-2">
                  <Image
                    src="/images/fred-sausage.jpg"
                    alt="Fred Jaworski, The Kielbasa King, draped in 40 pounds of fresh homemade Polish kielbasa at the original Jaworski Meats in Cleveland Ohio"
                    width={600}
                    height={450}
                    className="w-full h-auto grayscale contrast-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <p className="text-label mt-2 text-center">
                    Fred Jaworski &middot; The Original
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4">
              <ScrollReveal delay={0.3}>
                <div className="relative overflow-hidden bg-card border border-card-border shadow-[var(--shadow)] p-1.5">
                  <Image
                    src="/images/mark-dorothy-vintage.jpg"
                    alt="Mark Jaworski, the Kielbasa Kid, and Dorothy Jaworski, the Kielbasa Queen, at a Cleveland food festival"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                    sizes="25vw"
                  />
                  <p className="text-label mt-1.5 text-center">
                    Mark & Dorothy
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="relative overflow-hidden bg-card border border-card-border shadow-[var(--shadow)] p-1.5">
                  <Image
                    src="/images/dorothy-working.jpg"
                    alt="Dorothy Jaworski, the Kielbasa Queen, hand-linking sausage at Jaworski Meats — she worked into her 90s"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                    sizes="25vw"
                  />
                  <p className="text-label mt-1.5 text-center">
                    Dorothy &middot; 1926&ndash;2019
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
