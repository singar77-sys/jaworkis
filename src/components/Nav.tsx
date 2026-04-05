"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#heritage", label: "Our Story" },
  { href: "#craft", label: "The Craft" },
  { href: "#menu", label: "Deli Menu" },
  { href: "#meats", label: "Meats" },
  { href: "#party-trays", label: "Party Trays" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-sm shadow-[var(--shadow)]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3" aria-label="Main navigation">
        {/* Logo */}
        <a href="/" className="relative z-10 flex items-center gap-3 min-h-[44px]" aria-label="Jaworski Meats — Home">
          <Image
            src="/images/logo.png"
            alt="Jaworski Meats logo — pig and chicken silhouette"
            width={44}
            height={44}
            className="w-11 h-11"
            priority
          />
          <span className="text-display text-xl tracking-wide text-primary hidden sm:block" aria-hidden="true">
            Jaworski Meats
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-label hover:text-primary transition-colors duration-200 py-2"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="tel:+14402345678"
            className="btn-cta text-sm py-2 px-5"
          >
            Call to Order
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-fg transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-fg transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-fg transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full bg-bg/98 backdrop-blur-md border-b border-border md:hidden"
              role="menu"
            >
              <div className="flex flex-col items-center gap-2 py-8">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-display text-2xl text-fg hover:text-primary transition-colors min-h-[48px] flex items-center px-6"
                    role="menuitem"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+14402345678"
                  className="btn-cta mt-4"
                  onClick={() => setMobileOpen(false)}
                  role="menuitem"
                >
                  Call to Order
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
