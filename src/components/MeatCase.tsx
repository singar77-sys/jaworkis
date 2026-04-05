"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { meatCategories } from "@/lib/meats-data";
import { ScrollReveal } from "./ScrollReveal";
import { CTAButton } from "./CTAButton";

const altDescriptions: Record<string, string> = {
  beef: "Fresh marbled ribeye held by butcher hands at Jaworski Meats — cut to order from whole primals",
  pork: "Fresh-cut pork chops and tenderloin from Daisyfield Farms at Jaworski Meats",
  sausage: "Handmade Polish kielbasa being linked by hand at Jaworski Meats — a Cleveland tradition since 1935",
  burgers: "Hand-formed flavored burger patties made in-house daily at Jaworski Meats with custom spice blends",
};

export function MeatCase() {
  const [activeTab, setActiveTab] = useState("beef");
  const active = meatCategories.find((c) => c.id === activeTab)!;

  return (
    <section
      id="meats"
      className="section-padding relative z-10 bg-bg-alt/50"
      aria-label="Fresh meats and specialty products"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-label text-accent mb-4">Fresh Daily</p>
          <h2
            className="text-display text-fg mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            The <span className="text-primary">Case</span>
          </h2>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Meat categories">
            {meatCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                role="tab"
                aria-selected={activeTab === cat.id}
                aria-controls={`panel-${cat.id}`}
                className={`text-label px-4 py-2.5 min-h-[44px] border transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-[#2C2420] text-[#F5F0E8] border-[#2C2420] dark:bg-[#D4C5A9] dark:text-[#1A1410] dark:border-[#D4C5A9]"
                    : "border-border text-fg-muted hover:border-primary hover:text-primary"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {/* Items */}
            <div>
              <p className="text-lg text-fg-muted leading-relaxed mb-6">
                {active.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
                {active.items.map((item) => (
                  <div
                    key={item}
                    className="py-2.5 border-b border-border/30 text-fg hover:text-primary transition-colors duration-150"
                  >
                    {item}
                  </div>
                ))}
              </div>
              {active.note && (
                <p className="mt-6 text-sm text-fg-muted italic">
                  {active.note}
                </p>
              )}
            </div>

            {/* Image */}
            {active.image && (
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={active.image}
                  alt={altDescriptions[active.id] || `Fresh ${active.name.toLowerCase()} selection at Jaworski Meats in Middleburg Heights, Ohio`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12">
          <CTAButton href="tel:+14402345678">
            Call for Custom Cuts
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
