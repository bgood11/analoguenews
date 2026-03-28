import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-2 border-warm-black/10 bg-warm-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-coral rounded-sm flex items-center justify-center">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="6"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle cx="8" cy="8" r="2.5" fill="white" />
                </svg>
              </div>
              <span className="font-display font-semibold text-lg text-warm-black italic">
                analoguenews
              </span>
            </Link>
            <p className="text-sm text-warm-gray leading-relaxed max-w-xs">
              The daily pulse of analogue photography. News, guides, film stock
              reference, and practical tools — all free, no paywall.
            </p>
            <p className="text-[11px] text-warm-gray-light mt-4 leading-relaxed">
              Content curated with AI assistance and human editorial oversight.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm text-warm-black mb-3">
              Explore
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Latest News" },
                { href: "/guides", label: "Guides" },
                { href: "/film-stocks", label: "Film Stocks" },
                { href: "/tools", label: "Tools" },
                { href: "/newsletter", label: "Newsletter" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-gray hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm text-warm-black mb-3">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                {
                  href: "/guides/beginner-what-is-film-photography",
                  label: "Getting Started with Film",
                },
                {
                  href: "/tools/exposure-calculator",
                  label: "Exposure Calculator",
                },
                { href: "/tools/reciprocity", label: "Reciprocity Helper" },
                {
                  href: "/guides/guide-choosing-your-first-film-camera",
                  label: "Buying Your First Camera",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-gray hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-warm-gray-light">
            &copy; {new Date().getFullYear()} analoguenews. Built with care for
            the film photography community.
          </p>
          <p className="text-[11px] text-warm-gray-light font-mono">
            Next.js &middot; Vercel &middot; UK
          </p>
        </div>
      </div>
    </footer>
  );
}
