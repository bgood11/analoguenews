import { getTodayInHistory } from "@/data/film-history";

export function TodayInHistory() {
  const entry = getTodayInHistory();
  if (!entry) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <div className="bg-warm-black rounded-lg p-4 flex items-start gap-4">
        <div className="flex-shrink-0 bg-coral rounded-sm px-2.5 py-1 text-center">
          <div className="text-white font-mono font-bold text-lg leading-none">
            {entry.year}
          </div>
        </div>
        <div>
          <span className="text-[10px] font-mono text-coral uppercase tracking-widest">
            Today in Film History
          </span>
          <p className="text-white/80 text-sm leading-relaxed mt-0.5">
            {entry.text}
          </p>
        </div>
      </div>
    </div>
  );
}
