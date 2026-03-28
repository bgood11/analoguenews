"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const filters = [
  { label: "All", value: "" },
  { label: "News", value: "news" },
  { label: "Guides", value: "guide" },
  { label: "Reviews", value: "review" },
  { label: "History", value: "historical" },
  { label: "Lab Spotlights", value: "lab_spotlight" },
];

function FilterButtons() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("type") || "";

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            if (f.value) {
              params.set("type", f.value);
            } else {
              params.delete("type");
            }
            router.push(`?${params.toString()}`, { scroll: false });
          }}
          className={`px-3 py-1.5 text-sm rounded-sm border font-medium transition-all active:scale-95 ${
            active === f.value
              ? "bg-coral text-white border-coral shadow-sm shadow-coral/20"
              : "bg-white text-warm-gray border-warm-border hover:border-coral/30 hover:text-warm-black"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export function ContentFilter() {
  return (
    <Suspense
      fallback={
        <div className="flex gap-2">
          {filters.map((f) => (
            <span
              key={f.value}
              className="px-3 py-1.5 text-sm rounded-full border bg-white text-warm-gray border-warm-border"
            >
              {f.label}
            </span>
          ))}
        </div>
      }
    >
      <FilterButtons />
    </Suspense>
  );
}
