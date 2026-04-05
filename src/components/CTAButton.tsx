import type { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  if (variant === "secondary") {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-[family-name:var(--font-bebas)] text-lg tracking-wider uppercase px-8 py-3 min-h-[48px] transition-all duration-200 hover:bg-primary hover:text-cta-text hover:scale-[1.02] active:scale-[0.98] ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={`btn-cta ${className}`}>
      {children}
    </a>
  );
}
