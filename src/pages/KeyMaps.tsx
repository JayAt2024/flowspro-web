import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// ─── Translation ──────────────────────────────────────────────────────────────

const TRANSLATIONS: Record<string, Record<string, string>> = {
  // Header
  "Keyboard Shortcuts": {
    en: "Keyboard Shortcuts (macOS)",
    zh: "键盘快捷键 (macOS)",
  },
  "shortcuts across": {
    en: "shortcuts across",
    zh: "个快捷键，分布在",
  },
  "sections": {
    en: "sections",
    zh: "个板块",
  },

  // Card titles
  "Editor": { en: "Editor", zh: "编辑器" },
  "Flow List": { en: "Flow List", zh: "流程列表" },
  "Execution": { en: "Execution", zh: "执行" },
  "Export Image": { en: "Export Image", zh: "导出图片" },
  "Image Comparison": { en: "Image Comparison", zh: "图片对比" },
  "Common": { en: "Common", zh: "通用" },

  // Section headers
  "Zoom Control": { en: "Zoom Control", zh: "缩放控制" },
  "Node Operations": { en: "Node Operations", zh: "节点操作" },
  "Undo / Redo": { en: "Undo / Redo", zh: "撤销 / 重做" },
  "Execution Control": { en: "Execution Control", zh: "执行控制" },
  "Flow Operations": { en: "Flow Operations", zh: "流程操作" },
  "Page Operations": { en: "Page Operations", zh: "页面操作" },
  "Page Navigation": { en: "Page Navigation", zh: "翻页" },
  "Quality Selection": { en: "Quality Selection", zh: "质量选择" },
  "Comparison Mode": { en: "Comparison Mode", zh: "对比模式" },
  "General": { en: "General", zh: "通用" },

  // Shortcut labels
  "Zoom In": { en: "Zoom In", zh: "放大" },
  "Zoom Out": { en: "Zoom Out", zh: "缩小" },
  "Reset Zoom": { en: "Reset Zoom", zh: "重置缩放" },
  "Copy Node": { en: "Copy Node", zh: "复制节点" },
  "Paste Node": { en: "Paste Node", zh: "粘贴节点" },
  "Duplicate to Clipboard": { en: "Duplicate to Clipboard", zh: "复制到剪切板" },
  "Clear Layout": { en: "Clear Layout", zh: "清理布局" },
  "Connect Default I/O": { en: "Connect Default I/O", zh: "连接默认输入输出" },
  "Disconnect All": { en: "Disconnect All", zh: "断开所有连接" },
  "Delete Node": { en: "Delete Node", zh: "删除节点" },
  "Undo": { en: "Undo", zh: "撤销" },
  "Redo": { en: "Redo", zh: "重做" },
  "Execute": { en: "Execute", zh: "执行" },
  "Execute All Nodes": { en: "Execute All Nodes", zh: "执行全部节点" },
  "Execute Selected": { en: "Execute Selected", zh: "执行选中节点" },
  "Execute on Change": { en: "Execute on Change", zh: "随修改执行" },
  "Run Flow": { en: "Run Flow", zh: "运行流程" },
  "Edit Flow": { en: "Edit Flow", zh: "编辑流程" },
  "Edit Info": { en: "Edit Info", zh: "编辑信息" },
  "Export Flow": { en: "Export Flow", zh: "导出流程" },
  "Delete Flow": { en: "Delete Flow", zh: "删除流程" },
  "Import Flow": { en: "Import Flow", zh: "导入流程" },
  "New Flow": { en: "New Flow", zh: "新建流程" },
  "Search": { en: "Search", zh: "搜索" },
  "Copy Page": { en: "Copy Page", zh: "复制页面" },
  "New Page": { en: "New Page", zh: "新建页面" },
  "Delete Page": { en: "Delete Page", zh: "删除页面" },
  "Execute All Pages": { en: "Execute All Pages", zh: "执行所有页面" },
  "Previous Page": { en: "Previous Page", zh: "上一页" },
  "Next Page": { en: "Next Page", zh: "下一页" },
  "Highest Quality": { en: "Highest Quality", zh: "最高质量" },
  "Medium-High": { en: "Medium-High", zh: "中高质量" },
  "High Quality": { en: "High Quality", zh: "高质量" },
  "Medium Quality": { en: "Medium Quality", zh: "中等质量" },
  "Low Quality": { en: "Low Quality", zh: "低质量" },
  "Press Mode": { en: "Press Mode", zh: "按压模式" },
  "Slide Mode": { en: "Slide Mode", zh: "滑动模式" },
  "Side by Side": { en: "Side by Side", zh: "并排模式" },
  "Cancel / Close": { en: "Cancel / Close", zh: "取消 / 关闭" },
};

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
          { label: "Clear Layout",             keys: ["Triple Tap On Canvas"] },
          { label: "Connect Default I/O",      keys: ["⌘", "L"] },
          { label: "Disconnect All",           keys: ["⌘", "⇧", "L"] },
          { label: "Delete Node",              keys: ["⌫"] },
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

interface ShortcutRowProps {
  item: ShortcutItem;
  t: (key: string) => string;
}

const ShortcutRow: React.FC<ShortcutRowProps> = ({ item, t }) => (
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
      {t(item.label)}
    </span>
    <span style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
      {item.keys.map((k, i) => (
        <KeyBadge key={i} k={k} />
      ))}
    </span>
  </li>
);

interface CardProps {
  card: ShortcutCard;
  t: (key: string) => string;
}

const Card: React.FC<CardProps> = ({ card, t }) => (
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
        className="font-bold text-primary"
        style={{
          margin: 0,
          fontSize: "15px",
          letterSpacing: "0.01em",
        }}
      >
        {t(card.title)}
      </h2>
    </div>

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
          {t(group.section)}
        </h3>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {group.items.map((item, ii) => (
            <ShortcutRow key={ii} item={item} t={t} />
          ))}
        </ul>
      </div>
    ))}
  </div>
);

// ─── Masonry layout engine ────────────────────────────────────────────────────

function useMasonry(items: ShortcutCard[], columnCount: number) {
  const [columns, setColumns] = useState<ShortcutCard[][]>([]);

  useEffect(() => {
    if (columnCount === 0) return;

    const cols: ShortcutCard[][] = Array.from({ length: columnCount }, () => []);
    const heights = new Array(columnCount).fill(0);

    for (const card of items) {
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

    setColumns(cols);
  }, [items, columnCount]);

  return { columns };
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
  const { language } = useLanguage();

  const t = (key: string): string => {
    const langKey = language === "zh" ? "zh" : "en";
    return TRANSLATIONS[key]?.[langKey] || key;
  };

  const totalShortcuts = DATA.reduce((a, c) => a + c.groups.reduce((b, g) => b + g.items.length, 0), 0);
  const shortcutsText = `${totalShortcuts} ${t("shortcuts across")} ${DATA.length} ${t("sections")}`;

  return (
    <>
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
          padding: 100px 24px 80px;
          font-family: -apple-system, 'Helvetica Neue', sans-serif;
        }

        .km-header {
          margin: 0 auto 30px;
        }

        .km-masonry {
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

      <div className="km-page max-w-4xl mx-auto">
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
              <span style={{ fontSize: "36px" }}>⌨</span>
            </div>
            <h1
              className="text-2xl md:text-3xl font-bold text-primary"
              style={{
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {t("Keyboard Shortcuts")}
            </h1>
          </div>
          <p style={{ margin: 0, fontSize: "14px", color: "var(--page-sub)" }}>
            {shortcutsText}
          </p>
        </div>

        <div className="km-masonry" ref={containerRef}>
          {columns.map((col, ci) => (
            <div key={ci} className="km-col">
              {col.map((card) => (
                <Card key={card.title} card={card} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default KeyMaps;