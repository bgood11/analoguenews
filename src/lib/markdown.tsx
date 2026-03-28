import React from "react";

export function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeader: string[] = [];
  let listItems: React.ReactNode[] = [];
  let inList = false;

  function flushTable() {
    if (tableRows.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {tableHeader.map((h, i) => (
                  <th
                    key={i}
                    className="text-left py-2 px-3 border-b-2 border-warm-border font-semibold text-warm-black"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, ri) => (
                <tr key={ri} className="border-b border-warm-border-light">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="py-2 px-3 text-warm-gray"
                    >
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
        <ul key={`list-${elements.length}`} className="list-disc pl-6 space-y-1 my-3 text-warm-black leading-relaxed">
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
      const italicMatch = remaining.match(/\*(.+?)\*/);
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

      const matches = [
        boldMatch ? { type: "bold", index: boldMatch.index!, match: boldMatch } : null,
        italicMatch && (!boldMatch || italicMatch.index! < boldMatch.index!) ? { type: "italic", index: italicMatch.index!, match: italicMatch } : null,
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
        parts.push(<strong key={key++}>{first.match[1]}</strong>);
        remaining = remaining.slice(first.index + first.match[0].length);
      } else if (first.type === "italic") {
        parts.push(<em key={key++}>{first.match[1]}</em>);
        remaining = remaining.slice(first.index + first.match[0].length);
      } else if (first.type === "link") {
        parts.push(
          <a key={key++} href={first.match[2]} className="text-coral hover:text-coral-dark underline">
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

      // Skip separator row
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
        <h2 key={`h2-${i}`} className="text-xl font-bold text-warm-black mt-8 mb-3">
          {formatInline(trimmed.slice(3))}
        </h2>
      );
      continue;
    }
    if (trimmed.startsWith("### ")) {
      if (inList) flushList();
      elements.push(
        <h3 key={`h3-${i}`} className="text-lg font-semibold text-warm-black mt-6 mb-2">
          {formatInline(trimmed.slice(4))}
        </h3>
      );
      continue;
    }

    // List item
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      inList = true;
      listItems.push(
        <li key={`li-${i}`}>{formatInline(trimmed.slice(2))}</li>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(trimmed)) {
      if (inList) flushList();
      // Just render as a paragraph for simplicity
      elements.push(
        <p key={`p-${i}`} className="text-warm-black leading-relaxed my-2 pl-4">
          {formatInline(trimmed)}
        </p>
      );
      continue;
    }

    // Blockquote / italic line
    if (trimmed.startsWith("*") && trimmed.endsWith("*") && !trimmed.startsWith("**")) {
      if (inList) flushList();
      elements.push(
        <p key={`em-${i}`} className="text-warm-gray italic my-3 border-l-2 border-warm-border pl-4">
          {trimmed.slice(1, -1)}
        </p>
      );
      continue;
    }

    // Regular paragraph
    if (inList) flushList();
    elements.push(
      <p key={`p-${i}`} className="text-warm-black leading-relaxed my-3">
        {formatInline(trimmed)}
      </p>
    );
  }

  if (inTable) flushTable();
  if (inList) flushList();

  return elements;
}
