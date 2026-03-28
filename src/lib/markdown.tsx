import React from "react";

export function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeader: string[] = [];
  let listItems: React.ReactNode[] = [];
  let inList = false;
  let firstParagraphSeen = false;

  function flushTable() {
    if (tableRows.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto my-6 rounded-lg border border-warm-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-warm-bg-alt">
                {tableHeader.map((h, i) => (
                  <th
                    key={i}
                    className="text-left py-2.5 px-4 font-semibold text-warm-black text-sm"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, ri) => (
                <tr key={ri} className="border-t border-warm-border-light even:bg-warm-bg/50">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-2.5 px-4 text-warm-gray">
                      {formatInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    inTable = false;
    tableRows = [];
    tableHeader = [];
  }

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-none pl-0 space-y-2 my-5">
          {listItems}
        </ul>
      );
      listItems = [];
    }
    inList = false;
  }

  function formatInline(text: string): React.ReactNode {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

      const matches = [
        boldMatch ? { type: "bold", index: boldMatch.index!, match: boldMatch } : null,
        linkMatch ? { type: "link", index: linkMatch.index!, match: linkMatch } : null,
      ].filter(Boolean).sort((a, b) => a!.index - b!.index);

      if (matches.length === 0) {
        parts.push(remaining);
        break;
      }

      const first = matches[0]!;
      if (first.index > 0) {
        parts.push(remaining.slice(0, first.index));
      }

      if (first.type === "bold") {
        parts.push(
          <strong key={key++} className="font-semibold text-warm-black">
            {first.match[1]}
          </strong>
        );
        remaining = remaining.slice(first.index + first.match[0].length);
      } else if (first.type === "link") {
        parts.push(
          <a
            key={key++}
            href={first.match[2]}
            className="text-coral hover:text-coral-dark underline underline-offset-2 decoration-coral/30 hover:decoration-coral transition-colors"
          >
            {first.match[1]}
          </a>
        );
        remaining = remaining.slice(first.index + first.match[0].length);
      }
    }

    return parts.length === 1 ? parts[0] : <>{parts}</>;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Table row
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      if (inList) flushList();
      const cells = trimmed
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());

      if (!inTable) {
        inTable = true;
        tableHeader = cells;
        continue;
      }

      if (cells.every((c) => /^[-:]+$/.test(c))) continue;
      tableRows.push(cells);
      continue;
    }

    if (inTable) flushTable();

    // Empty line
    if (trimmed === "") {
      if (inList) flushList();
      continue;
    }

    // Headings
    if (trimmed.startsWith("## ")) {
      if (inList) flushList();
      elements.push(
        <h2
          key={`h2-${i}`}
          className="font-display text-xl font-semibold text-warm-black mt-10 mb-3 border-b border-warm-border pb-2"
        >
          {formatInline(trimmed.slice(3))}
        </h2>
      );
      continue;
    }
    if (trimmed.startsWith("### ")) {
      if (inList) flushList();
      elements.push(
        <h3
          key={`h3-${i}`}
          className="font-display text-lg font-semibold text-warm-black mt-8 mb-2"
        >
          {formatInline(trimmed.slice(4))}
        </h3>
      );
      continue;
    }

    // List item
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      inList = true;
      firstParagraphSeen = true;
      listItems.push(
        <li key={`li-${i}`} className="flex gap-2 text-warm-black leading-relaxed">
          <span className="text-coral mt-0.5 flex-shrink-0">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
              <circle cx="3" cy="3" r="3" />
            </svg>
          </span>
          <span>{formatInline(trimmed.slice(2))}</span>
        </li>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(trimmed)) {
      if (inList) flushList();
      firstParagraphSeen = true;
      const num = trimmed.match(/^(\d+)\./)?.[1];
      elements.push(
        <p key={`p-${i}`} className="flex gap-3 text-warm-black leading-relaxed my-2">
          <span className="text-coral font-mono font-semibold text-sm mt-0.5 flex-shrink-0">
            {num}.
          </span>
          <span>{formatInline(trimmed.replace(/^\d+\.\s/, ""))}</span>
        </p>
      );
      continue;
    }

    // Blockquote / italic line
    if (trimmed.startsWith("*") && trimmed.endsWith("*") && !trimmed.startsWith("**")) {
      if (inList) flushList();
      elements.push(
        <blockquote
          key={`bq-${i}`}
          className="my-6 pl-5 border-l-4 border-coral italic font-display text-lg text-warm-gray leading-relaxed"
        >
          {trimmed.slice(1, -1)}
        </blockquote>
      );
      continue;
    }

    // Regular paragraph
    if (inList) flushList();

    const isDropCap = !firstParagraphSeen;
    firstParagraphSeen = true;

    if (isDropCap && trimmed.length > 20) {
      elements.push(
        <p key={`p-${i}`} className="text-warm-black leading-relaxed my-4 first-letter:float-left first-letter:font-display first-letter:text-5xl first-letter:font-semibold first-letter:text-coral first-letter:mr-2 first-letter:mt-1 first-letter:leading-none">
          {formatInline(trimmed)}
        </p>
      );
    } else {
      elements.push(
        <p key={`p-${i}`} className="text-warm-black leading-relaxed my-4">
          {formatInline(trimmed)}
        </p>
      );
    }
  }

  if (inTable) flushTable();
  if (inList) flushList();

  return elements;
}
