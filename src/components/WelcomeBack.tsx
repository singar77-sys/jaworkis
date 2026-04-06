"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Shows a welcome-back greeting on return visits.
 * Uses localStorage to track visit count.
 * Renders nothing on first visit.
 */
export function WelcomeBack() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const visits = parseInt(localStorage.getItem("jm-visits") || "0", 10);
      const newCount = visits + 1;
      localStorage.setItem("jm-visits", String(newCount));

      if (newCount === 2) {
        setMessage("Welcome back.");
      } else if (newCount >= 3 && newCount < 10) {
        setMessage("Good to see you again.");
      } else if (newCount >= 10) {
        setMessage("Good to see you again.");
      }
      // newCount === 1 → first visit → null → render nothing
    } catch {
      // localStorage blocked, silently skip
    }
  }, []);

  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-label text-tape-text tracking-widest mb-1"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
