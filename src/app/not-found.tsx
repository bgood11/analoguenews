import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
      <div className="font-mono text-8xl font-bold text-warm-border mb-6">
        404
      </div>
      <h1 className="font-display text-2xl font-semibold text-warm-black mb-3">
        This frame came out blank
      </h1>
      <p className="text-warm-gray mb-8">
        The page you&apos;re looking for doesn&apos;t exist — maybe it was
        never exposed, or maybe the URL has changed.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="px-5 py-2.5 bg-coral text-white font-semibold text-sm rounded-sm hover:bg-coral-dark hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          Go to homepage
        </Link>
        <Link
          href="/film-stocks"
          className="px-5 py-2.5 border border-warm-border text-warm-black font-semibold text-sm rounded-sm hover:border-coral/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          Browse film stocks
        </Link>
      </div>
    </div>
  );
}
