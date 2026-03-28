import { notFound } from "next/navigation";
import Link from "next/link";
import { filmStocks, getFilmStock } from "@/data/film-stocks";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return filmStocks.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stock = getFilmStock(slug);
  if (!stock) return { title: "Not Found" };
  return {
    title: `${stock.manufacturer} ${stock.name} — analoguenews`,
    description: stock.description,
  };
}

const typeLabels: Record<string, string> = {
  colour_negative: "Colour Negative",
  colour_reversal: "Slide / Reversal",
  bw_negative: "Black & White",
  bw_reversal: "B&W Reversal",
  specialty: "Specialty",
};

const grainLabels: Record<string, string> = {
  ultra_fine: "Ultra Fine",
  fine: "Fine",
  medium: "Medium",
  coarse: "Coarse",
};

const statusConfig: Record<string, { label: string; color: string }> = {
  available: { label: "Available", color: "bg-green-50 text-green-700 border-green-200" },
  discontinued: { label: "Discontinued", color: "bg-red-50 text-red-700 border-red-200" },
  limited: { label: "Limited Availability", color: "bg-amber-50 text-amber-700 border-amber-200" },
};

export default async function FilmStockPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stock = getFilmStock(slug);
  if (!stock) notFound();

  const status = statusConfig[stock.status];
  const relatedStocks = filmStocks
    .filter((s) => s.id !== stock.id && s.type === stock.type)
    .slice(0, 4);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Link
        href="/film-stocks"
        className="text-sm text-warm-gray hover:text-coral transition-colors mb-6 inline-block"
      >
        &larr; All film stocks
      </Link>

      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm text-warm-gray">{stock.manufacturer}</span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full border ${status.color}`}
        >
          {status.label}
        </span>
      </div>

      <h1 className="text-3xl font-bold text-warm-black mb-6">
        {stock.name}
      </h1>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-warm-border rounded-xl p-4 text-center">
          <div className="text-2xl font-bold font-mono text-warm-black">
            {stock.iso}
          </div>
          <div className="text-xs text-warm-gray mt-1">ISO</div>
        </div>
        <div className="bg-white border border-warm-border rounded-xl p-4 text-center">
          <div className="text-sm font-semibold text-warm-black">
            {grainLabels[stock.grain]}
          </div>
          <div className="text-xs text-warm-gray mt-1">Grain</div>
        </div>
        <div className="bg-white border border-warm-border rounded-xl p-4 text-center">
          <div className="text-sm font-semibold text-warm-black">
            {typeLabels[stock.type]}
          </div>
          <div className="text-xs text-warm-gray mt-1">Type</div>
        </div>
        <div className="bg-white border border-warm-border rounded-xl p-4 text-center">
          <div className="text-sm font-semibold text-warm-black">
            {stock.formats.join(", ")}
          </div>
          <div className="text-xs text-warm-gray mt-1">Formats</div>
        </div>
      </div>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-warm-black mb-2">About</h2>
        <p className="text-warm-black leading-relaxed">{stock.description}</p>
      </section>

      {/* Character */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-warm-black mb-2">Character</h2>
        <p className="text-warm-gray leading-relaxed">{stock.character}</p>
      </section>

      {/* Best For */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-warm-black mb-2">Best For</h2>
        <div className="flex flex-wrap gap-2">
          {stock.bestFor.map((use) => (
            <span
              key={use}
              className="text-sm bg-coral-light text-coral-dark rounded-full px-3 py-1"
            >
              {use}
            </span>
          ))}
        </div>
      </section>

      {/* Reciprocity Data */}
      {stock.reciprocityData && stock.reciprocityData.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-warm-black mb-2">
            Reciprocity Failure Compensation
          </h2>
          <p className="text-sm text-warm-gray mb-3">
            For long exposures, increase the metered time as shown below.
            Use our{" "}
            <Link
              href="/tools/reciprocity"
              className="text-coral hover:text-coral-dark"
            >
              reciprocity calculator
            </Link>{" "}
            for precise values.
          </p>
          <div className="bg-white border border-warm-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-warm-bg-alt">
                  <th className="text-left py-2 px-4 font-semibold text-warm-black">
                    Metered Time
                  </th>
                  <th className="text-left py-2 px-4 font-semibold text-warm-black">
                    Adjusted Time
                  </th>
                  <th className="text-left py-2 px-4 font-semibold text-warm-black">
                    Factor
                  </th>
                </tr>
              </thead>
              <tbody>
                {stock.reciprocityData.map((d, i) => (
                  <tr key={i} className="border-t border-warm-border-light">
                    <td className="py-2 px-4 font-mono text-warm-black">
                      {d.measuredSeconds}s
                    </td>
                    <td className="py-2 px-4 font-mono text-warm-black">
                      {d.adjustedSeconds}s
                    </td>
                    <td className="py-2 px-4 font-mono text-warm-gray">
                      {d.measuredSeconds > 0
                        ? `${(d.adjustedSeconds / d.measuredSeconds).toFixed(1)}x`
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Related Stocks */}
      {relatedStocks.length > 0 && (
        <section className="mt-10 pt-8 border-t border-warm-border">
          <h2 className="text-lg font-bold text-warm-black mb-4">
            Similar Stocks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedStocks.map((rs) => (
              <Link
                key={rs.id}
                href={`/film-stocks/${rs.slug}`}
                className="flex items-center justify-between bg-white border border-warm-border rounded-lg p-3 hover:border-coral/30 transition-colors"
              >
                <div>
                  <div className="font-medium text-sm text-warm-black">
                    {rs.manufacturer} {rs.name}
                  </div>
                  <div className="text-xs text-warm-gray">
                    ISO {rs.iso} &middot; {grainLabels[rs.grain]} grain
                  </div>
                </div>
                <span className="text-coral text-sm">&rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
