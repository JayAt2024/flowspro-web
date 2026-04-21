import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const KeyMaps: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 pt-20 pb-16">
      <h1 className="text-4xl font-bold mb-8">{t.keyMaps.title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 编辑器页面快捷键 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{t.keyMaps.editorShortcuts}</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{t.keyMaps.zoomControl}</h3>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.zoomIn}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.zoomOut}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘-</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.resetZoom}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+0</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{t.keyMaps.nodeOperation}</h3>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.copyNode}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+C</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.pasteNode}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+V</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.copyNodeToClipboard}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+D</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.clearNodeLayout}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+⌥+C</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.connectDefaultInputOutput}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+L</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.disconnectAllConnections}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+⇧+L</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.deleteNode}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">Delete</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{t.keyMaps.undoRedo}</h3>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.undo}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+Z</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.redo}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+⇧+Z</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{t.keyMaps.executionControl}</h3>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.execute}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+R</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.executeAllNodes}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+A</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.executeSelectedNodes}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+S</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.executeOnChange}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+M</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 列表页面快捷键 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{t.keyMaps.listPageShortcuts}</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{t.keyMaps.flowOperation}</h3>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.runFlow}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+R</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.editFlow}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+Return</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.editBasicInfo}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+⌃+Return</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.exportFlow}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+S</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.deleteFlow}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+Delete</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.importFlow}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+I</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.newFlow}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+N</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.search}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+F</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 执行页面快捷键 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{t.keyMaps.executionPageShortcuts}</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{t.keyMaps.pageOperation}</h3>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.copyCurrentPage}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+D</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.newPage}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘++</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.deleteCurrentPage}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+Delete</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.executeAllPages}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+R</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{t.keyMaps.pageNavigation}</h3>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.previousPage}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+◁</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.nextPage}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+▷</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 导出图片页面快捷键 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{t.keyMaps.exportImagePageShortcuts}</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{t.keyMaps.exportQualitySelection}</h3>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.highestQuality}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌥+1</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.mediumHighQuality}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌥+2</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.highQuality}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌥+3</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.mediumQuality}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌥+4</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.lowQuality}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌥+5</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 图片对比页面 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{t.keyMaps.imageComparisonPage}</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{t.keyMaps.comparisonModeSwitch}</h3>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.pressComparison}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+1</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.slideComparison}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+2</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.sideBySideComparison}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">⌘+3</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 通用快捷键 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{t.keyMaps.commonShortcuts}</h2>
          
          <div className="mb-6">
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="font-medium w-40">{t.keyMaps.cancelClose}:</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-mono">Esc</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyMaps;