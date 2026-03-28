"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export function Header() {
  return (
    <header className="border-b-2 border-warm-black/10 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-coral rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" />
                <circle cx="8" cy="8" r="2.5" fill="white" />
              </svg>
            </div>
            <span className="font-display font-semibold text-xl tracking-tight text-warm-black italic">
              analoguenews
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">News</NavLink>
            <NavLink href="/guides">Guides</NavLink>
            <NavLink href="/film-stocks">Film Stocks</NavLink>
            <NavLink href="/tools">Tools</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/newsletter"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-coral text-white text-sm font-semibold rounded-sm hover:bg-coral-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-coral/20 active:translate-y-0 transition-all"
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

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-sm font-semibold text-warm-gray hover:text-warm-black transition-colors after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-coral after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <div className="md:hidden relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 -mr-2 text-warm-black"
        aria-label="Toggle menu"
      >
        <svg
          className={`w-6 h-6 transition-transform ${open ? "rotate-90" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-warm-border rounded-lg shadow-xl shadow-warm-black/5 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <MobileLink href="/" onClick={() => setOpen(false)}>
            News
          </MobileLink>
          <MobileLink href="/guides" onClick={() => setOpen(false)}>
            Guides
          </MobileLink>
          <MobileLink href="/film-stocks" onClick={() => setOpen(false)}>
            Film Stocks
          </MobileLink>
          <MobileLink href="/tools" onClick={() => setOpen(false)}>
            Tools
          </MobileLink>
          <div className="border-t border-warm-border my-1" />
          <MobileLink href="/newsletter" onClick={() => setOpen(false)}>
            <span className="text-coral font-semibold">Subscribe</span>
          </MobileLink>
        </div>
      )}
    </div>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-2.5 text-sm text-warm-black hover:bg-warm-bg-alt transition-colors"
    >
      {children}
    </Link>
  );
}
