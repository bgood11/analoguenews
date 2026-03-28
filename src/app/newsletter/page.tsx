import { NewsletterForm } from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — analoguenews",
  description:
    "Get the weekly analoguenews newsletter — top stories, new film stocks, and one featured guide. Free, no spam.",
};

export default function NewsletterPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-warm-black mb-3">
        This Week in Film
      </h1>
      <p className="text-lg text-warm-gray mb-2">
        The weekly analoguenews newsletter.
      </p>
      <p className="text-sm text-warm-gray mb-8 max-w-md mx-auto">
        Every Friday: the top stories from the analogue photography world, a
        featured film stock, and one practical guide. Free, no spam, unsubscribe
        anytime.
      </p>

      <div className="max-w-sm mx-auto mb-12">
        <NewsletterForm />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        <div>
          <div className="text-2xl mb-2">📰</div>
          <h3 className="font-semibold text-sm text-warm-black mb-1">
            Top Stories
          </h3>
          <p className="text-xs text-warm-gray">
            The 5 most important stories from the week, summarised so you can
            stay current in 5 minutes.
          </p>
        </div>
        <div>
          <div className="text-2xl mb-2">🎞️</div>
          <h3 className="font-semibold text-sm text-warm-black mb-1">
            Featured Stock
          </h3>
          <p className="text-xs text-warm-gray">
            One film stock in depth — character, best uses, and tips from the
            community.
          </p>
        </div>
        <div>
          <div className="text-2xl mb-2">📖</div>
          <h3 className="font-semibold text-sm text-warm-black mb-1">
            Weekly Guide
          </h3>
          <p className="text-xs text-warm-gray">
            A practical guide or technique article to help you improve your
            photography.
          </p>
        </div>
      </div>
    </div>
  );
}
