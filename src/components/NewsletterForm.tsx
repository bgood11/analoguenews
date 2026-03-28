"use client";

import { useState } from "react";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div
        className={`text-sm text-coral-dark bg-coral-light rounded-sm flex items-center gap-2 ${compact ? "p-3" : "p-4"}`}
      >
        <svg
          className="w-5 h-5 text-coral flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        You&apos;re in! Check your inbox to confirm.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "max-w-md"}>
      <div className={`flex ${compact ? "flex-col gap-2" : "gap-2"}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className={`flex-1 px-3 py-2.5 text-sm border border-warm-border rounded-sm bg-white placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all ${compact ? "w-full" : ""}`}
        />
        <button
          type="submit"
          className="px-4 py-2.5 bg-coral text-white text-sm font-semibold rounded-sm hover:bg-coral-dark hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
