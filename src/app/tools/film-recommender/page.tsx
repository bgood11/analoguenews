"use client";

import { useState } from "react";
import Link from "next/link";
import { filmStocks, type FilmStock } from "@/data/film-stocks";

type Answer = {
  subject?: string;
  light?: string;
  colour?: string;
  experience?: string;
};

const questions = [
  {
    key: "subject" as const,
    title: "What will you photograph?",
    options: [
      { value: "portraits", label: "Portraits & People", emoji: "👤" },
      { value: "landscape", label: "Landscapes & Nature", emoji: "🏔" },
      { value: "street", label: "Street & Documentary", emoji: "🏙" },
      { value: "anything", label: "A bit of everything", emoji: "✨" },
    ],
  },
  {
    key: "light" as const,
    title: "What lighting conditions?",
    options: [
      { value: "bright", label: "Bright outdoor daylight", emoji: "☀" },
      { value: "mixed", label: "Mixed — indoor and outdoor", emoji: "⛅" },
      { value: "low", label: "Low light / indoors / night", emoji: "🌙" },
    ],
  },
  {
    key: "colour" as const,
    title: "Colour or black & white?",
    options: [
      { value: "colour", label: "Colour", emoji: "🎨" },
      { value: "bw", label: "Black & White", emoji: "◼" },
      { value: "either", label: "Either — surprise me", emoji: "🎲" },
    ],
  },
  {
    key: "experience" as const,
    title: "Your experience level?",
    options: [
      { value: "beginner", label: "First few rolls", emoji: "🌱" },
      { value: "intermediate", label: "Shot a dozen+ rolls", emoji: "📷" },
      { value: "experienced", label: "Very experienced", emoji: "🎯" },
    ],
  },
];

function scoreStock(stock: FilmStock, answers: Answer): number {
  let score = 0;

  // Subject matching
  if (answers.subject === "portraits") {
    if (stock.bestFor.some((b) => /portrait|fashion|wedding|studio/i.test(b))) score += 3;
    if (stock.grain === "fine" || stock.grain === "ultra_fine") score += 1;
  } else if (answers.subject === "landscape") {
    if (stock.bestFor.some((b) => /landscape|nature|architecture|fine art/i.test(b))) score += 3;
    if (stock.grain === "ultra_fine") score += 2;
  } else if (answers.subject === "street") {
    if (stock.bestFor.some((b) => /street|photojournalism|documentary|travel/i.test(b))) score += 3;
    if (stock.iso >= 400) score += 1;
  } else {
    if (stock.bestFor.some((b) => /everyday|general|travel|versatil/i.test(b))) score += 2;
    score += 1; // bonus for versatility
  }

  // Light matching
  if (answers.light === "bright") {
    if (stock.iso <= 200) score += 3;
    else if (stock.iso <= 400) score += 1;
  } else if (answers.light === "mixed") {
    if (stock.iso === 400) score += 3;
    else if (stock.iso >= 200 && stock.iso <= 800) score += 1;
  } else if (answers.light === "low") {
    if (stock.iso >= 800) score += 3;
    else if (stock.iso >= 400) score += 1;
  }

  // Colour preference
  if (answers.colour === "colour") {
    if (stock.type === "colour_negative" || stock.type === "colour_reversal") score += 3;
    else score -= 5;
  } else if (answers.colour === "bw") {
    if (stock.type === "bw_negative") score += 3;
    else score -= 5;
  }

  // Experience
  if (answers.experience === "beginner") {
    if (stock.status === "available") score += 1;
    if (stock.type === "colour_negative") score += 1; // C-41 is easier
    if (stock.type === "colour_reversal") score -= 2; // slide film is unforgiving
    if (stock.bestFor.some((b) => /beginner|everyday|budget/i.test(b))) score += 2;
  } else if (answers.experience === "experienced") {
    if (stock.type === "colour_reversal") score += 1; // slide film reward
  }

  // Availability bonus
  if (stock.status === "available") score += 1;
  if (stock.status === "discontinued") score -= 3;

  return score;
}

const grainLabels: Record<string, string> = {
  ultra_fine: "Ultra Fine",
  fine: "Fine",
  medium: "Medium",
  coarse: "Coarse",
};

export default function FilmRecommenderPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer>({});
  const [results, setResults] = useState<FilmStock[] | null>(null);

  function handleAnswer(key: string, value: string) {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    } else {
      // Calculate results
      const scored = filmStocks
        .map((s) => ({ stock: s, score: scoreStock(s, newAnswers) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      setTimeout(() => setResults(scored.map((s) => s.stock)), 200);
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResults(null);
  }

  return (
    <>
      <section className="bg-warm-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-black via-warm-black to-coral/15" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <Link
            href="/tools"
            className="text-sm text-white/40 hover:text-coral transition-colors mb-4 inline-block"
          >
            &larr; All tools
          </Link>
          <h1 className="font-display text-2xl md:text-3xl font-semibold italic mb-2">
            What Film Should I Shoot?
          </h1>
          <p className="text-white/50 text-sm max-w-lg">
            Answer 4 questions and we&apos;ll recommend the best film stocks for
            you.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-amber to-coral opacity-60" />
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        {!results ? (
          <>
            {/* Progress */}
            <div className="flex gap-1.5 mb-8">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i <= step ? "bg-coral" : "bg-warm-border"
                  }`}
                />
              ))}
            </div>

            {/* Question */}
            <div className="text-center mb-8">
              <span className="text-[10px] font-mono text-warm-gray uppercase tracking-widest">
                Question {step + 1} of {questions.length}
              </span>
              <h2 className="font-display text-2xl font-semibold text-warm-black mt-2">
                {questions[step].title}
              </h2>
            </div>

            {/* Options */}
            <div className="grid gap-3">
              {questions[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(questions[step].key, opt.value)}
                  className={`text-left p-4 rounded-lg border-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-warm-black/5 ${
                    answers[questions[step].key] === opt.value
                      ? "border-coral bg-coral-light"
                      : "border-warm-border bg-white hover:border-coral/30"
                  }`}
                >
                  <span className="text-lg mr-3">{opt.emoji}</span>
                  <span className="font-semibold text-warm-black">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Back button */}
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-6 text-sm text-warm-gray hover:text-coral transition-colors"
              >
                &larr; Previous question
              </button>
            )}
          </>
        ) : (
          <>
            {/* Results */}
            <div className="text-center mb-8">
              <span className="text-[10px] font-mono text-coral uppercase tracking-widest">
                Your Results
              </span>
              <h2 className="font-display text-2xl font-semibold text-warm-black mt-2">
                We recommend these film stocks
              </h2>
            </div>

            <div className="grid gap-4">
              {results.map((stock, i) => (
                <Link
                  key={stock.id}
                  href={`/film-stocks/${stock.slug}`}
                  className="group block bg-white border border-warm-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-warm-black/5 hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className={`h-1.5 ${
                      i === 0
                        ? "bg-gradient-to-r from-coral to-amber"
                        : i === 1
                          ? "bg-gradient-to-r from-coral-muted to-coral"
                          : "bg-warm-border"
                    }`}
                  />
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-[10px] font-mono text-warm-gray">
                          {stock.manufacturer}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-warm-black group-hover:text-coral transition-colors">
                          {i === 0 && (
                            <span className="text-coral mr-1">★</span>
                          )}
                          {stock.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-lg font-bold text-warm-black">
                          ISO {stock.iso}
                        </div>
                        <div className="text-[10px] text-warm-gray">
                          {grainLabels[stock.grain]} grain
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {stock.character}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {stock.bestFor.slice(0, 4).map((use) => (
                        <span
                          key={use}
                          className="text-[10px] bg-coral-light text-coral-dark rounded-sm px-2 py-0.5"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={reset}
                className="px-5 py-2.5 bg-coral text-white font-semibold text-sm rounded-sm hover:bg-coral-dark hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                Try Again
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
