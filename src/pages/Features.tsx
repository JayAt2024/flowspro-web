import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface NodeItem {
  name: string;
  english: string;
  description: string;
}

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  nodes: NodeItem[];
  language: string;
}

const NodeSection: React.FC<SectionProps> = ({ title, icon, nodes, language }) => {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-2xl">{icon}</div>
        <h2 className="text-xl font-bold text-primary">{title}</h2>
      </div>
      <div className="bg-surface-container-low rounded-xl overflow-hidden shadow">
        <table className="w-full">
          <thead className="bg-surface-container-high">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-on-surface-variant w-1/3">
                {language === 'zh' ? '名称' : 'Name'}
              </th>
              <th className="px-4 py-3 text-left font-semibold text-on-surface-variant w-2/3">
                {language === 'zh' ? '描述' : 'Description'}
              </th>
            </tr>
          </thead>
          <tbody>
            {nodes.map((node, index) => (
              <tr 
                key={index} 
                className={`border-t border-outline ${index % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low'}`}
              >
                <td className="px-4 py-3 font-medium text-primary">
                  {language === 'zh' ? node.name : node.english}
                </td>
                <td className="px-4 py-3 text-on-surface-variant">{node.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  const { t, language } = useLanguage();

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

        .ft-page {
          min-height: 100vh;
          background: var(--bg);
          padding: 100px 24px 80px;
          font-family: -apple-system, 'Helvetica Neue', sans-serif;
        }

        .ft-header {
          margin: 0 auto 30px;
        }
      `}</style>

      <div className="ft-page max-w-4xl mx-auto">
        <div className="ft-header">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <div style={{ width: "48px", height: "32px", borderRadius: "8px", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "20px" }}>✨</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary" style={{ margin: 0, letterSpacing: "-0.02em" }}>
              {t.features.title}
            </h1>
          </div>
          <p style={{ margin: 0, fontSize: "14px", color: "var(--page-sub)" }}>
            {t.features.total} {t.features.boolNodes.length + t.features.mathNodes.length + t.features.colorNodes.length + t.features.textNodes.length + t.features.imageNodes.length} {language === 'zh' ? '个' : ''} {t.features.supportedText}
          </p>
        </div>

      <NodeSection
        title={t.features.imageSection}
        icon="🖼️"
        nodes={t.features.imageNodes}
        language={language}
      />

      <NodeSection
        title={t.features.textSection}
        icon="📝"
        nodes={t.features.textNodes}
        language={language}
      />

      <NodeSection
        title={t.features.colorSection}
        icon="🎨"
        nodes={t.features.colorNodes}
        language={language}
      />

      <NodeSection
        title={t.features.mathSection}
        icon="🔢"
        nodes={t.features.mathNodes}
        language={language}
      />

      <NodeSection
        title={t.features.boolSection}
        icon="✅"
        nodes={t.features.boolNodes}
        language={language}
      />
      </div>
    </>
  );
};

export default Features;
