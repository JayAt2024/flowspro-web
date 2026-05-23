import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';
import FlowsProLogo from '../assets/FlowsPro_64.png';

const Navbar: React.FC = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { showToast } = useToast();
  const location = useLocation();
  const langMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  // 检测当前系统
  const getOS = () => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod')) {
      return 'ios';
    } else if (userAgent.includes('Mac')) {
      return 'macos';
    }
    return 'other';
  };

  // 处理下载按钮点击
  const handleDownloadClick = () => {
    const os = getOS();
    if (os === 'ios') {
      window.open('https://apps.apple.com/app/id6758991081', '_blank');
    } else if (os === 'macos') {
      showToast(t.comingSoon);
    } else {
      // 其他系统，默认显示 coming soon
      showToast(t.comingSoon);
    }
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    // 添加事件监听器
    document.addEventListener('mousedown', handleClickOutside);

    // 清理事件监听器
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <style>{`
        .glass-panel {
          background: rgba(247, 249, 251, 0.7);
          backdrop-filter: blur(15px);
        }
        .mobile-menu {
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
        }
        .mobile-menu.open {
          transform: translateX(0);
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 glass-panel shadow-xl shadow-primary/5">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-6xl mx-auto">
          <Link to="/" className="text-2xl font-black tracking-tighter text-primary font-headline flex items-center">
            <img alt="Flows Pro Logo" className="h-10 w-auto object-contain" src={FlowsProLogo} />
            <span className="ml-3 font-headline font-bold bg-gradient-to-br from-[#572B7E] to-[#37B673] bg-clip-text text-transparent">Flows Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className={`font-medium transition-all duration-300 ${isActive('/') ? 'text-primary border-b-2 border-[#009688]' : 'text-on-surface-variant'}`}>{t.nav.home}</Link>
            <Link to="/features" className={`font-medium transition-all duration-300 ${isActive('/features') ? 'text-primary border-b-2 border-[#009688]' : 'text-on-surface-variant'}`}>{t.nav.features}</Link>
            <Link to="/key-maps" className={`font-medium transition-all duration-300 ${isActive('/key-maps') ? 'text-primary border-b-2 border-[#009688]' : 'text-on-surface-variant'}`}>{t.nav.keyMaps}</Link>
            <Link to="/terms-privacy" className={`font-medium transition-all duration-300 ${isActive('/terms-privacy') ? 'text-[#4527A0] border-b-2 border-[#009688]' : 'text-on-surface-variant'}`}>{t.nav.terms}</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={toggleLangMenu}
                className="p-2 text-primary hover:bg-primary-fixed rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md py-2 z-10">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'en' ? 'bg-gray-100 font-medium' : ''}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('zh')}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'zh' ? 'bg-gray-100 font-medium' : ''}`}
                  >
                    中文
                  </button>
                </div>
              )}
            </div>

            {/* Desktop Download Button */}
            <button onClick={handleDownloadClick} className="hidden md:block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-full font-semibold shadow-lg shadow-primary/20 active:scale-95 transition-all w-32">
              {t.download}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-primary hover:bg-primary-fixed rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white z-50 mobile-menu glass-panel ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-primary hover:bg-primary-fixed rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-[80%] space-y-8">
          <Link to="/" onClick={handleMobileMenuClick} className={`text-2xl font-medium ${isActive('/') ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{t.nav.home}</Link>
          <Link to="/features" onClick={handleMobileMenuClick} className={`text-2xl font-medium ${isActive('/features') ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{t.nav.features}</Link>
          <Link to="/key-maps" onClick={handleMobileMenuClick} className={`text-2xl font-medium ${isActive('/key-maps') ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{t.nav.keyMaps}</Link>
          <Link to="/terms-privacy" onClick={handleMobileMenuClick} className={`text-2xl font-medium ${isActive('/terms-privacy') ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{t.nav.terms}</Link>
        </div>
        <div className="absolute bottom-8 right-8">
          <button onClick={() => window.open('https://apps.apple.com/app/6758991081', '_blank')} className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-full font-semibold shadow-lg shadow-primary/20 active:scale-95 transition-all">
            {t.download}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;