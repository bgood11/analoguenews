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
      <div className="bg-white border border-warm-border rounded-xl p-5">
        <h3 className="font-semibold text-sm text-warm-black mb-1">
          This Week in Film
        </h3>
        <p className="text-xs text-warm-gray mb-3">
          Weekly newsletter — top stories, new film stocks, and one featured
          guide. Free, no spam.
        </p>
        <NewsletterForm compact />
      </div>

      {/* New to Film */}
      <div className="bg-coral-light border border-coral/10 rounded-xl p-5">
        <h3 className="font-semibold text-sm text-warm-black mb-2">
          New to Film?
        </h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/guides/beginner-what-is-film-photography"
              className="text-sm text-coral-dark hover:text-coral transition-colors"
            >
              What is Film Photography?
            </Link>
          </li>
          <li>
            <Link
              href="/guides/guide-understanding-iso-film-speed"
              className="text-sm text-coral-dark hover:text-coral transition-colors"
            >
              Understanding ISO
            </Link>
          </li>
          <li>
            <Link
              href="/guides/guide-choosing-your-first-film-camera"
              className="text-sm text-coral-dark hover:text-coral transition-colors"
            >
              Choosing Your First Camera
            </Link>
          </li>
          <li>
            <Link
              href="/guides/guide-c41-vs-bw-processing"
              className="text-sm text-coral-dark hover:text-coral transition-colors"
            >
              C-41 vs B&W Processing
            </Link>
          </li>
        </ul>
      </div>

      {/* Tools */}
      <div className="bg-white border border-warm-border rounded-xl p-5">
        <h3 className="font-semibold text-sm text-warm-black mb-2">Tools</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/tools/exposure-calculator"
              className="flex items-center gap-2 text-sm text-warm-gray hover:text-coral transition-colors"
            >
              <span className="w-6 h-6 bg-amber/10 rounded flex items-center justify-center text-xs">
                ☀
              </span>
              Exposure Calculator
            </Link>
          </li>
          <li>
            <Link
              href="/tools/reciprocity"
              className="flex items-center gap-2 text-sm text-warm-gray hover:text-coral transition-colors"
            >
              <span className="w-6 h-6 bg-amber/10 rounded flex items-center justify-center text-xs">
                ⏱
              </span>
              Reciprocity Helper
            </Link>
          </li>
        </ul>
      </div>

      {/* Popular Film Stocks */}
      <div className="bg-white border border-warm-border rounded-xl p-5">
        <h3 className="font-semibold text-sm text-warm-black mb-2">
          Popular Film Stocks
        </h3>
        <ul className="space-y-2">
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
          className="block mt-3 text-xs text-coral hover:text-coral-dark transition-colors font-medium"
        >
          View all film stocks &rarr;
        </Link>
      </div>
    </aside>
  );
}
