import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// 导入 MD 文件
import termsEn from './terms-en.md?raw';
import termsCh from './terms-ch.md?raw';
import privacyEn from './privacy-en.md?raw';
import privacyCh from './privacy-ch.md?raw';

const Terms: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 关闭下拉菜单的函数
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 根据语言和当前标签选择对应的 MD 内容
  const markdownContent = useMemo(() => {
    if (activeTab === 'terms') {
      return language === 'zh' ? termsCh : termsEn;
    } else {
      return language === 'zh' ? privacyCh : privacyEn;
    }
  }, [language, activeTab]);

  // 获取当前标签的显示文本
  const getActiveTabText = () => {
    if (activeTab === 'terms') {
      return language === 'zh' ? '服务条款' : 'Terms of Service';
    } else {
      return language === 'zh' ? '隐私政策' : 'Privacy Policy';
    }
  };

  return (
    <div className="container max-auto px-4 pt-20 pb-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">{getActiveTabText()}</h1>
        
        {/* Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
          >
            {getActiveTabText()}
            <svg
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <button
                onClick={() => {
                  setActiveTab('terms');
                  closeDropdown();
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${activeTab === 'terms' ? 'bg-gray-100 font-medium' : ''}`}
              >
                {language === 'zh' ? '服务条款' : 'Terms of Service'}
              </button>
              <button
                onClick={() => {
                  setActiveTab('privacy');
                  closeDropdown();
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${activeTab === 'privacy' ? 'bg-gray-100 font-medium' : ''}`}
              >
                {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 渲染 Markdown 内容 */}
      <div className="prose max-w-none">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Terms;