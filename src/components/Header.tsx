import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-warm-border bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AN</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-warm-black">
              analoguenews
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-warm-gray hover:text-warm-black transition-colors"
            >
              News
            </Link>
            <Link
              href="/guides"
              className="text-sm font-medium text-warm-gray hover:text-warm-black transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/film-stocks"
              className="text-sm font-medium text-warm-gray hover:text-warm-black transition-colors"
            >
              Film Stocks
            </Link>
            <Link
              href="/tools"
              className="text-sm font-medium text-warm-gray hover:text-warm-black transition-colors"
            >
              Tools
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/newsletter"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-coral text-white text-sm font-medium rounded-lg hover:bg-coral-dark transition-colors"
            >
              Subscribe
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <details className="md:hidden relative group">
      <summary className="list-none cursor-pointer p-2 -mr-2">
        <svg
          className="w-6 h-6 text-warm-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary>
      <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-warm-border rounded-lg shadow-lg py-2 z-50">
        <Link
          href="/"
          className="block px-4 py-2 text-sm text-warm-black hover:bg-warm-bg-alt"
        >
          News
        </Link>
        <Link
          href="/guides"
          className="block px-4 py-2 text-sm text-warm-black hover:bg-warm-bg-alt"
        >
          Guides
        </Link>
        <Link
          href="/film-stocks"
          className="block px-4 py-2 text-sm text-warm-black hover:bg-warm-bg-alt"
        >
          Film Stocks
        </Link>
        <Link
          href="/tools"
          className="block px-4 py-2 text-sm text-warm-black hover:bg-warm-bg-alt"
        >
          Tools
        </Link>
        <Link
          href="/newsletter"
          className="block px-4 py-2 text-sm text-coral font-medium hover:bg-warm-bg-alt"
        >
          Subscribe
        </Link>
      </div>
    </details>
  );
}
