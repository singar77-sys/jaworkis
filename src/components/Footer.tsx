import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border py-12" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.webp"
              alt="Jaworski Meats logo — pig and chicken silhouette, family butcher since 1935"
              width={36}
              height={36}
              className="w-9 h-9 logo-img"
            />
            <span className="text-display text-lg text-primary" aria-hidden="true">
              Jaworski Meats
            </span>
          </div>

          <p className="text-fg-muted text-sm text-center">
            Meating Cleveland&apos;s needs since 1935. &middot; 7545 Pearl Rd,
            Middleburg Heights, OH 44130
          </p>

          <p className="text-label text-fg-muted">
            &copy; {year} Jaworski Meats
          </p>
        </div>
      </div>
    </footer>
  );
}
