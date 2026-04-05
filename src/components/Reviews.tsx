"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { googleReviews, reviewSummary } from "@/lib/reviews-data";
import { ScrollReveal } from "./ScrollReveal";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-accent" : "text-border"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % googleReviews.length);
  }, []);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(advance, 6000);
    return () => clearInterval(timer);
  }, [advance]);

  const review = googleReviews[activeIndex];

  return (
    <section
      className="section-padding relative z-10"
      aria-label="Customer reviews from Google"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          {/* Summary Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              {/* Google G icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <Stars count={5} />
            </div>
            <span className="text-display text-xl text-fg">
              {reviewSummary.rating}
            </span>
            <span className="text-fg-muted text-sm">
              from {reviewSummary.totalReviews}+ reviews
            </span>
          </div>
        </ScrollReveal>

        {/* Rotating Review */}
        <div className="min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeIndex}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-lg sm:text-xl text-fg italic leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <Stars count={review.rating} />
                <cite className="text-label text-accent not-italic">
                  {review.name}
                </cite>
                <span className="text-fg-muted text-xs">{review.date}</span>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Review navigation">
          {googleReviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Review ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-primary w-6"
                  : "bg-border hover:bg-fg-muted"
              }`}
            />
          ))}
        </div>

        {/* Link to Google */}
        <ScrollReveal delay={0.1}>
          <a
            href="https://www.google.com/maps/place/Jaworski+Meats/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-label text-fg-muted hover:text-primary transition-colors"
          >
            Read all {reviewSummary.totalReviews}+ reviews on Google
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
