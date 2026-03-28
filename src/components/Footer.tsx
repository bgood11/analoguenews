import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-warm-border bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-coral rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">AN</span>
              </div>
              <span className="font-display font-bold text-lg text-warm-black">
                analoguenews
              </span>
            </div>
            <p className="text-sm text-warm-gray max-w-sm leading-relaxed">
              The daily pulse of analogue photography. News, guides, film stock
              reference, and practical tools — all free, no paywall.
            </p>
            <p className="text-xs text-warm-gray-light mt-4">
              Content is curated with AI assistance and human editorial
              oversight. We believe in transparency about our process.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-warm-black mb-3">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-warm-gray hover:text-coral transition-colors"
                >
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-sm text-warm-gray hover:text-coral transition-colors"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/film-stocks"
                  className="text-sm text-warm-gray hover:text-coral transition-colors"
                >
                  Film Stocks
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-sm text-warm-gray hover:text-coral transition-colors"
                >
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-warm-black mb-3">
              Stay Connected
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/newsletter"
                  className="text-sm text-warm-gray hover:text-coral transition-colors"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-warm-gray hover:text-coral transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-border mt-8 pt-6 text-center">
          <p className="text-xs text-warm-gray-light">
            &copy; {new Date().getFullYear()} analoguenews. Built with care for
            the film photography community.
          </p>
        </div>
      </div>
    </footer>
  );
}
