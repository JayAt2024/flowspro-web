import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import FlowsProLogo from '../assets/FlowsPro_64.png';

const Navbar: React.FC = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .glass-panel {
          background: rgba(247, 249, 251, 0.7);
          backdrop-filter: blur(20px);
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel shadow-xl shadow-primary/5">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black tracking-tighter text-primary font-headline flex items-center">
            <img alt="Flows Pro Logo" className="h-10 w-auto object-contain" src={FlowsProLogo} />
            <span className="ml-3 font-headline font-bold text-primary">Flows Pro</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className={`font-medium transition-all duration-300 ${isActive('/') ? 'text-[#4527A0] border-b-2 border-[#009688]' : 'text-primary'}`}>{t.nav.home}</Link>
            <Link to="/features" className={`font-medium transition-all duration-300 ${isActive('/features') ? 'text-[#4527A0] border-b-2 border-[#009688]' : 'text-primary'}`}>{t.nav.features}</Link>
            <Link to="/key-maps" className={`font-medium transition-all duration-300 ${isActive('/key-maps') ? 'text-[#4527A0] border-b-2 border-[#009688]' : 'text-primary'}`}>{t.nav.keyMaps}</Link>
            <Link to="/terms" className={`font-medium transition-all duration-300 ${isActive('/terms') ? 'text-[#4527A0] border-b-2 border-[#009688]' : 'text-primary'}`}>{t.nav.terms}</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={toggleLangMenu}
                className="p-2 text-primary hover:bg-primary-fixed rounded-full transition-all duration-300"
              >
                <span className="material-symbols-outlined" data-icon="language">language</span>
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
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-full font-semibold shadow-lg shadow-primary/20 active:scale-95 transition-all">
              Sign In
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;