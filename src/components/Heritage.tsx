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
                In 1935, Fred Jaworski stood behind the counter of his small meat stand in the old Newburg Market.
                Jaworski Meats was born, another ethnic market amongst the dozens in Slavic Village. But through the
                years, his modest meat stand became the Grande Dame of the Polish meat market Cleveland Ohio. Its
                success is a product of Fred&apos;s most important ingredients: hard work, dedication to his customers
                and, of course, family. Fred&apos;s wife Dorothy and their son Mark quickly became integral parts to
                Jaworski Meats and have worked there for as long as they can remember. The market has always been
                regarded as a part of our family. Three generations of nephews, sons and daughters have worked within
                the venerable walls of Jaworski Meats.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed text-fg-muted">
                Fred wore his unmistakable paper butcher hat for the final time when he passed away in March of 1996.
                To the community, Fred was known simply as <em className="text-primary font-medium not-italic">&ldquo;The Kielbasa King.&rdquo;</em>{" "}
                To his family, he was a husband, a father and a papa. Today Jaworski Meats is owned and operated by
                Mark Jaworski, the <em className="text-primary font-medium not-italic">&ldquo;Kielbasa Kid.&rdquo;</em>{" "}
                Mark continues to operate under his father&apos;s principles and our establishment is more than proud
                to meat the needs of the greater Cleveland community, continuing the family tradition. Dorothy
                Jaworski, aka <em className="text-primary font-medium not-italic">&ldquo;The Kielbasa Queen,&rdquo;</em>{" "}
                worked alongside the crew well into her 90&apos;s until she passed in 2019.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg leading-relaxed text-fg-muted">
                Receiving multiple deliveries a week, all of our meat is fresh&mdash; steaks, ribs, chops, chicken,
                cold cuts, cheeses. You name it. All of our specialties are homemade&mdash; kielbasa, sausages,
                smokies, Czernina, stuffed cabbage, pierogi and even Kiszka. Check out our lunch menu, backed by a
                deli counter full of more than just the standard fare. Our homemade roast beef, roast pork, and
                kielbasa loaf are second to none. Or try the daily lunch special&mdash; homemade soups and unique
                sandwich creations. And who knows what else you will find&mdash; Mark is always tucked away in the
                back, tending to ovens and stoves, synthesizing flavors and creating new tastes that redefine the
                idea of food.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-lg leading-relaxed text-fg-muted">
                But we pride ourselves on more than just food. We offer a shopping experience you won&apos;t find in
                any grocery store. Our walls proudly display photographs and tools of the Polish culture. We&apos;ll
                cut your meat to order, right in front of you. And we still use white butcher paper. On
                Saturday&apos;s, you&apos;ll hear the unmistakable sound of the old squeeze-box in stereo. But
                don&apos;t be surprised if you hear a little Neil Young, too. Talk Browns, Indians, Buckeyes and Cavs
                with Mark and Adam. But keep quiet if you are a Steelers, Red Sox or Michigan fan. You might
                &lsquo;accidently&rsquo; get a thumb on the scale. We do our best to make sure folks leave our store
                with a smile. At Jaworski&apos;s, we don&apos;t just run a business. There is a difference. To us,
                our market is a way of life, a reflection of the proud dedication of the Jaworski name.
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
                    src="/images/fred-sausage.webp"
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

            <div className="grid grid-cols-2 gap-3">
              <ScrollReveal delay={0.3}>
                <div className="relative overflow-hidden bg-card border border-card-border shadow-[var(--shadow)] p-1.5">
                  <Image
                    src="/images/mark-dorothy-festival.webp"
                    alt="Mark Jaworski and Dorothy Jaworski at the Slavic Village festival"
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
                    src="/images/dorothy-working.webp"
                    alt="Dorothy Jaworski, the Kielbasa Queen, hand-linking sausage — she worked into her 90s"
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

              <ScrollReveal delay={0.5} className="col-span-2">
                <div className="relative overflow-hidden bg-card border border-card-border shadow-[var(--shadow)] p-1.5">
                  <Image
                    src="/images/adam-dorothy-mark-newspaper.webp"
                    alt="Adam, Dorothy and Mark Jaworski — three generations — as featured in the Cleveland newspaper"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <p className="text-label mt-1.5 text-center">
                    Three Generations
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.6}>
              <div className="relative overflow-hidden bg-card border border-card-border shadow-[var(--shadow)] p-1.5">
                <Image
                  src="/images/mark-adam-pig-head.webp"
                  alt="Mark Jaworski and Adam at Jaworski Meats — Browns Country banner behind them"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <p className="text-label mt-1.5 text-center">
                  Mark & Adam &middot; The Next Generation
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
