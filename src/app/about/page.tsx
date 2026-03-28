import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — analoguenews",
  description:
    "About analoguenews — the daily pulse of analogue photography.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-warm-black mb-6">
        About analoguenews
      </h1>

      <div className="space-y-4 text-warm-black leading-relaxed">
        <p>
          <strong>analoguenews</strong> is the daily pulse of analogue
          photography. We aggregate, curate, and publish news, guides, and
          reference material for the film photography community.
        </p>

        <p>
          Our mission is simple: make it easy to stay informed about the
          analogue photography world without trawling dozens of sites, forums,
          and social media accounts.
        </p>

        <h2 className="text-lg font-bold mt-8 mb-2">What we publish</h2>

        <ul className="list-disc pl-6 space-y-1 text-warm-gray">
          <li>
            <strong className="text-warm-black">News briefs</strong> — the
            latest from manufacturers, retailers, labs, and the community
          </li>
          <li>
            <strong className="text-warm-black">Guides</strong> — practical,
            no-nonsense advice for film photographers at every level
          </li>
          <li>
            <strong className="text-warm-black">Film stock reference</strong> —
            detailed pages for 25+ stocks with specs, character notes, and
            reciprocity data
          </li>
          <li>
            <strong className="text-warm-black">Tools</strong> — free exposure
            calculator and reciprocity helper
          </li>
          <li>
            <strong className="text-warm-black">Lab spotlights</strong> —
            in-depth looks at film processing labs
          </li>
          <li>
            <strong className="text-warm-black">Historical features</strong> —
            stories from photography history
          </li>
        </ul>

        <h2 className="text-lg font-bold mt-8 mb-2">
          Transparency: AI and editorial process
        </h2>

        <p>
          We use AI tools to help monitor sources, draft summaries, and classify
          content. Every published piece is reviewed and approved by a human
          editor. We believe AI should assist editorial work, not replace it —
          and we&apos;re transparent about where it helps.
        </p>

        <p>
          All news briefs link back to their original sources. We write
          transformative summaries, not copies. If a source asks us to remove
          content, we will.
        </p>

        <h2 className="text-lg font-bold mt-8 mb-2">No paywall</h2>

        <p>
          All content on analoguenews is free to read. No paywall, no
          registration required, no premium tiers. We believe the analogue
          photography community thrives on open access to information.
        </p>

        <h2 className="text-lg font-bold mt-8 mb-2">Get in touch</h2>

        <p>
          Have a tip, correction, or just want to say hello? Email{" "}
          <a
            href="mailto:hello@analoguenews.com"
            className="text-coral hover:text-coral-dark"
          >
            hello@analoguenews.com
          </a>
          .
        </p>

        <p className="text-sm text-warm-gray mt-8 pt-6 border-t border-warm-border">
          analoguenews is built with{" "}
          <Link href="https://nextjs.org" className="text-coral hover:text-coral-dark">
            Next.js
          </Link>
          , hosted on{" "}
          <Link href="https://vercel.com" className="text-coral hover:text-coral-dark">
            Vercel
          </Link>
          , and made with care in the UK.
        </p>
      </div>
    </div>
  );
}
