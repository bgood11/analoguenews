import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools — analoguenews",
  description:
    "Free tools for film photographers — exposure calculator and reciprocity failure helper.",
};

const tools = [
  {
    title: "Exposure Calculator",
    description:
      "Calculate aperture, shutter speed, and ISO combinations for any lighting condition. Includes presets for common scenarios.",
    href: "/tools/exposure-calculator",
    icon: "☀",
    color: "bg-amber-50 border-amber-200",
  },
  {
    title: "Reciprocity Failure Helper",
    description:
      "Select your film stock and input your metered exposure — get the adjusted time for long exposures. Covers 15+ stocks with manufacturer and community data.",
    href: "/tools/reciprocity",
    icon: "⏱",
    color: "bg-blue-50 border-blue-200",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-warm-black mb-1">Tools</h1>
      <p className="text-sm text-warm-gray mb-8">
        Free, practical tools for film photographers. No account needed, works
        on mobile.
      </p>

      <div className="grid gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className={`group block border rounded-xl p-6 hover:border-coral/30 transition-colors ${tool.color}`}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{tool.icon}</span>
              <div>
                <h2 className="text-lg font-semibold text-warm-black group-hover:text-coral transition-colors mb-1">
                  {tool.title}
                </h2>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
