import React, { useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

interface ShortcutItem {
  label: string;
  keys: string[];
}

interface ShortcutGroup {
  section: string;
  items: ShortcutItem[];
}

interface ShortcutCard {
  title: string;
  groups: ShortcutGroup[];
}

const DATA: ShortcutCard[] = [
  {
    title: "Editor",
    groups: [
      {
        section: "Zoom Control",
        items: [
          { label: "Zoom In",    keys: ["⌘", "+"] },
          { label: "Zoom Out",   keys: ["⌘", "-"] },
          { label: "Reset Zoom", keys: ["⌘", "0"] },
        ],
      },
      {
        section: "Node Operations",
        items: [
          { label: "Copy Node",                keys: ["⌘", "C"] },
          { label: "Paste Node",               keys: ["⌘", "V"] },
          { label: "Duplicate to Clipboard",   keys: ["⌘", "D"] },
          { label: "Clear Layout",             keys: ["⌘", "⌥", "C"] },
          { label: "Connect Default I/O",      keys: ["⌘", "L"] },
          { label: "Disconnect All",           keys: ["⌘", "⇧", "L"] },
          { label: "Delete Node",              keys: ["Delete"] },
        ],
      },
      {
        section: "Undo / Redo",
        items: [
          { label: "Undo", keys: ["⌘", "Z"] },
          { label: "Redo", keys: ["⌘", "⇧", "Z"] },
        ],
      },
      {
        section: "Execution Control",
        items: [
          { label: "Execute",               keys: ["⌘", "R"] },
          { label: "Execute All Nodes",     keys: ["⌘", "A"] },
          { label: "Execute Selected",      keys: ["⌘", "S"] },
          { label: "Execute on Change",     keys: ["⌘", "M"] },
        ],
      },
    ],
  },
  {
    title: "Flow List",
    groups: [
      {
        section: "Flow Operations",
        items: [
          { label: "Run Flow",       keys: ["⌘", "R"] },
          { label: "Edit Flow",      keys: ["⌘", "↵"] },
          { label: "Edit Info",      keys: ["⌘", "⌃", "↵"] },
          { label: "Export Flow",    keys: ["⌘", "S"] },
          { label: "Delete Flow",    keys: ["⌘", "⌫"] },
          { label: "Import Flow",    keys: ["⌘", "I"] },
          { label: "New Flow",       keys: ["⌘", "N"] },
          { label: "Search",         keys: ["⌘", "F"] },
        ],
      },
    ],
  },
  {
    title: "Execution",
    groups: [
      {
        section: "Page Operations",
        items: [
          { label: "Copy Page",        keys: ["⌘", "D"] },
          { label: "New Page",         keys: ["⌘", "+"] },
          { label: "Delete Page",      keys: ["⌘", "⌫"] },
          { label: "Execute All Pages",keys: ["⌘", "R"] },
        ],
      },
      {
        section: "Page Navigation",
        items: [
          { label: "Previous Page", keys: ["⌘", "◁"] },
          { label: "Next Page",     keys: ["⌘", "▷"] },
        ],
      },
    ],
  },
  {
    title: "Export Image",
    groups: [
      {
        section: "Quality Selection",
        items: [
          { label: "Highest Quality",   keys: ["⌥", "1"] },
          { label: "Medium-High",       keys: ["⌥", "2"] },
          { label: "High Quality",      keys: ["⌥", "3"] },
          { label: "Medium Quality",    keys: ["⌥", "4"] },
          { label: "Low Quality",       keys: ["⌥", "5"] },
        ],
      },
    ],
  },
  {
    title: "Image Comparison",
    groups: [
      {
        section: "Comparison Mode",
        items: [
          { label: "Press Mode",      keys: ["⌘", "1"] },
          { label: "Slide Mode",      keys: ["⌘", "2"] },
          { label: "Side by Side",    keys: ["⌘", "3"] },
        ],
      },
    ],
  },
  {
    title: "Common",
    groups: [
      {
        section: "General",
        items: [
          { label: "Cancel / Close", keys: ["Esc"] },
        ],
      },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const KeyBadge: React.FC<{ k: string }> = ({ k }) => (
  <kbd
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "28px",
      height: "28px",
      padding: "0 7px",
      borderRadius: "6px",
      background: "var(--badge-bg)",
      border: "1px solid var(--badge-border)",
      boxShadow: "0 2px 0 var(--badge-shadow)",
      fontFamily: "'SF Mono', 'Fira Code', monospace",
      fontSize: "12px",
      fontWeight: 600,
      color: "var(--badge-text)",
      lineHeight: 1,
      userSelect: "none",
    }}
  >
    {k}
  </kbd>
);

const ShortcutRow: React.FC<{ item: ShortcutItem }> = ({ item }) => (
  <li
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "12px",
      padding: "6px 0",
      borderBottom: "1px solid var(--row-divider)",
    }}
  >
    <span style={{ fontSize: "13px", color: "var(--label-text)", flex: 1 }}>
      {item.label}
    </span>
    <span style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
      {item.keys.map((k, i) => (
        <KeyBadge key={i} k={k} />
      ))}
    </span>
  </li>
);

const Card: React.FC<{ card: ShortcutCard }> = ({ card }) => (
  <div
    style={{
      background: "var(--card-bg)",
      borderRadius: "14px",
      border: "1px solid var(--card-border)",
      padding: "20px 22px 16px",
      boxShadow: "var(--card-shadow)",
      breakInside: "avoid",
      marginBottom: "16px",
      transition: "transform 0.18s ease, box-shadow 0.18s ease",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow-hover)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow)";
    }}
  >
    {/* Card title */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "14px",
      }}
    >
      <div
        style={{
          width: "4px",
          height: "18px",
          borderRadius: "2px",
          background: "var(--accent)",
          flexShrink: 0,
        }}
      />
      <h2
        style={{
          margin: 0,
          fontSize: "15px",
          fontWeight: 700,
          color: "var(--title-text)",
          letterSpacing: "0.01em",
        }}
      >
        {card.title}
      </h2>
    </div>

    {/* Groups */}
    {card.groups.map((group, gi) => (
      <div key={gi} style={{ marginBottom: gi < card.groups.length - 1 ? "16px" : 0 }}>
        <h3
          style={{
            margin: "0 0 6px",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--section-text)",
          }}
        >
          {group.section}
        </h3>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {group.items.map((item, ii) => (
            <ShortcutRow key={ii} item={item} />
          ))}
        </ul>
      </div>
    ))}
  </div>
);

// ─── Masonry layout engine ────────────────────────────────────────────────────
// Distributes cards across N columns by always appending to the shortest column.

function useMasonry(items: ShortcutCard[], columnCount: number) {
  const [columns, setColumns] = useState<ShortcutCard[][]>([]);
  const heightsRef = useRef<number[]>([]);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Initial greedy distribution based on estimated item count
  useEffect(() => {
    if (columnCount === 0) return;

    const cols: ShortcutCard[][] = Array.from({ length: columnCount }, () => []);
    const heights = new Array(columnCount).fill(0);

    for (const card of items) {
      // Estimate height = title + sum of (section header + rows)
      const est =
        60 +
        card.groups.reduce(
          (acc, g) => acc + 28 + g.items.length * 37,
          0
        );
      const shortest = heights.indexOf(Math.min(...heights));
      cols[shortest].push(card);
      heights[shortest] += est;
    }

    heightsRef.current = heights;
    setColumns(cols);
  }, [items, columnCount]);

  return { columns, cardRefs };
}

// ─── Responsive column count ──────────────────────────────────────────────────

function useColumnCount(containerRef: React.RefObject<HTMLDivElement>) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setCount(w < 560 ? 1 : w < 900 ? 2 : 3);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [containerRef]);

  return count;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const KeyMaps: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const columnCount = useColumnCount(containerRef);
  const { columns } = useMasonry(DATA, columnCount);

  return (
    <>
      {/* CSS variables */}
      <style>{`
        :root {
          --bg:               #f4f3f0;
          --accent:           #e05c2a;
          --card-bg:          #ffffff;
          --card-border:      #e8e6e1;
          --card-shadow:      0 1px 3px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.05);
          --card-shadow-hover:0 4px 16px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.07);
          --title-text:       #1a1917;
          --section-text:     #a09e99;
          --label-text:       #3d3b38;
          --badge-bg:         #f0ede8;
          --badge-border:     #dedad4;
          --badge-shadow:     #ccc9c2;
          --badge-text:       #2a2825;
          --row-divider:      #f0ede8;
          --page-title:       #1a1917;
          --page-sub:         #8c8a85;
        }

        * { box-sizing: border-box; }

        body { margin: 0; background: var(--bg); }

        .km-page {
          min-height: 100vh;
          background: var(--bg);
          padding: 64px 24px 80px;
          font-family: -apple-system, 'Helvetica Neue', sans-serif;
        }

        .km-header {
          max-width: 960px;
          margin: 0 auto 40px;
        }

        .km-masonry {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .km-col {
          flex: 1;
          min-width: 0;
        }
      `}</style>

      <div className="km-page">
        {/* Header */}
        <div className="km-header">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "16px" }}>⌨</span>
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: 800,
                color: "var(--page-title)",
                letterSpacing: "-0.02em",
              }}
            >
              Keyboard Shortcuts
            </h1>
          </div>
          <p style={{ margin: 0, fontSize: "14px", color: "var(--page-sub)" }}>
            {DATA.reduce((a, c) => a + c.groups.reduce((b, g) => b + g.items.length, 0), 0)} shortcuts across{" "}
            {DATA.length} sections
          </p>
        </div>

        {/* Masonry grid */}
        <div className="km-masonry" ref={containerRef}>
          {columns.map((col, ci) => (
            <div key={ci} className="km-col">
              {col.map((card) => (
                <Card key={card.title} card={card} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default KeyMaps;