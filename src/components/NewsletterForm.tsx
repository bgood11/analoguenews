"use client";

import { useState } from "react";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // In production this would hit an API route connected to Buttondown/Resend
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div
        className={`text-sm text-green-700 bg-green-50 rounded-lg ${compact ? "p-3" : "p-4"}`}
      >
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
          className={`flex-1 px-3 py-2 text-sm border border-warm-border rounded-lg bg-white placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral ${compact ? "w-full" : ""}`}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-coral text-white text-sm font-medium rounded-lg hover:bg-coral-dark transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
