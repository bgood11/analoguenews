import Link from "next/link";
import { filmStocks } from "@/data/film-stocks";
import { NewsletterForm } from "./NewsletterForm";

export function Sidebar() {
  const popularStocks = filmStocks
    .filter((s) =>
      [
        "kodak-portra-400",
        "kodak-tri-x-400",
        "kodak-gold-200",
        "fujifilm-velvia-50",
        "ilford-hp5-plus",
        "cinestill-800t",
      ].includes(s.id)
    )
    .slice(0, 6);

  return (
    <aside className="space-y-8">
      {/* Newsletter */}
      <div className="bg-white border border-warm-border rounded-lg p-5">
        <h3 className="font-display font-semibold text-sm text-warm-black mb-1">
          This Week in Film
        </h3>
        <p className="text-xs text-warm-gray mb-3 leading-relaxed">
          Weekly newsletter — top stories, new film stocks, and one featured
          guide. Free, no spam.
        </p>
        <NewsletterForm compact />
      </div>

      {/* New to Film */}
      <div className="bg-coral-light border-l-4 border-coral rounded-sm p-5">
        <h3 className="font-display font-semibold text-sm text-warm-black mb-3">
          New to Film?
        </h3>
        <ul className="space-y-2.5">
          {[
            {
              href: "/guides/beginner-what-is-film-photography",
              label: "What is Film Photography?",
            },
            {
              href: "/guides/guide-understanding-iso-film-speed",
              label: "Understanding ISO",
            },
            {
              href: "/guides/guide-choosing-your-first-film-camera",
              label: "Choosing Your First Camera",
            },
            {
              href: "/guides/guide-c41-vs-bw-processing",
              label: "C-41 vs B&W Processing",
            },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-coral-dark hover:text-coral transition-colors font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="bg-white border border-warm-border rounded-lg p-5">
        <h3 className="font-display font-semibold text-sm text-warm-black mb-3">
          Tools
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              href="/tools/exposure-calculator"
              className="flex items-center gap-3 text-sm text-warm-gray hover:text-coral transition-colors group"
            >
              <span className="w-8 h-8 bg-amber-light rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-amber"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </span>
              Exposure Calculator
            </Link>
          </li>
          <li>
            <Link
              href="/tools/reciprocity"
              className="flex items-center gap-3 text-sm text-warm-gray hover:text-coral transition-colors group"
            >
              <span className="w-8 h-8 bg-coral-light rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-coral"
                >
                  <circle cx="12" cy="13" r="8" />
                  <path d="M12 9v4l2 2M5 3l2 2M19 3l-2 2M12 3v2" />
                </svg>
              </span>
              Reciprocity Helper
            </Link>
          </li>
        </ul>
      </div>

      {/* Popular Film Stocks */}
      <div className="bg-white border border-warm-border rounded-lg p-5">
        <h3 className="font-display font-semibold text-sm text-warm-black mb-3">
          Popular Film Stocks
        </h3>
        <ul className="space-y-2.5">
          {popularStocks.map((stock) => (
            <li key={stock.id}>
              <Link
                href={`/film-stocks/${stock.slug}`}
                className="flex items-center justify-between text-sm text-warm-gray hover:text-coral transition-colors"
              >
                <span>
                  {stock.manufacturer} {stock.name}
                </span>
                <span className="text-[10px] text-warm-gray-light font-mono">
                  ISO {stock.iso}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/film-stocks"
          className="block mt-4 text-xs text-coral hover:text-coral-dark transition-colors font-semibold"
        >
          View all film stocks &rarr;
        </Link>
      </div>
    </aside>
  );
}
