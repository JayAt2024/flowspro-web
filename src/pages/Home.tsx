import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

import FlowsProLogo from '../assets/FlowsPro.png';

import homefeature1CN from '../assets/homefeature1-cn.jpeg';
import homefeature1EN from '../assets/homefeature1-en.jpeg';
import homefeature2CN from '../assets/homefeature2-cn.jpeg';
import homefeature2EN from '../assets/homefeature2-en.jpeg';
import homefeature3CN from '../assets/homefeature3-cn.jpeg';
import homefeature3EN from '../assets/homefeature3-en.jpeg';
import homefeature4CN from '../assets/homefeature4-cn.jpeg';
import homefeature4EN from '../assets/homefeature4-en.jpeg';
import homefeature5CN from '../assets/homefeature5-cn.jpeg';
import homefeature5EN from '../assets/homefeature5-en.jpeg';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      title: t.home.feature1.title,
      description: t.home.feature1.description,
      image: language === 'zh' ? homefeature1CN : homefeature1EN
    },
    {
      title: t.home.feature2.title,
      description: t.home.feature2.description,
      image: language === 'zh' ? homefeature2CN : homefeature2EN
    },
    {
      title: t.home.feature3.title,
      description: t.home.feature3.description,
      image: language === 'zh' ? homefeature3CN : homefeature3EN
    },
    {
      title: t.home.feature4.title,
      description: t.home.feature4.description,
      image: language === 'zh' ? homefeature4CN : homefeature4EN
    },
    {
      title: t.home.feature5.title,
      description: t.home.feature5.description,
      image: language === 'zh' ? homefeature5CN : homefeature5EN
    }
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="scroll-smooth">
      <div className="scroll-snap-type-y mandatory">
        <section className="pt-28 pb-12 scroll-snap-align-center text-center flex items-center bg-surface relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#37B673] via-[#572B7E] to-[#572B7E] opacity-10"></div>
            <div className="container max-w-4xl mx-auto px-4 relative z-10">
              <div className="flex flex-col items-center mt-2 mb-16">
                <img 
                  alt="Flows Pro Logo" 
                  className="h-32 w-auto object-contain" 
                  src={FlowsProLogo} 
                />
                <span className="text-4xl font-bold bg-gradient-to-br from-[#572B7E] to-[#37B673] bg-clip-text text-transparent -mt-6">Flows Pro</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {t.home.feature6.title}
              </h2>
              <p className="text-primary text-2xl mb-12">
                {t.home.feature6.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => window.open('https://apps.apple.com/app/id6758991081', '_blank')}
                  className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {t.home.feature6.iosDownload}
                </button>
                <button
                  onClick={() => window.open('https://apps.apple.com/app/6758991081', '_blank')}
                  className="inline-flex items-center justify-center px-10 py-5 bg-surface-container-highest text-on-surface font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-outline"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {t.home.feature6.macDownload}
                </button>
              </div>
            </div>
          </section>

          <section className="pt-8 scroll-snap-align-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-surface-container-low"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#572B7E] via-[#572B7E] to-surface-container-low opacity-[0.1]"></div>
            <div className="container max-w-4xl mx-auto px-4 relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold text-primary font-[cursive] tracking-wider">Flows Pro Features</h1>
            </div>
          </section>

          {features.map((feature, index) => (
            <section
              key={index}
              className={`py-12 scroll-snap-align-center ${index % 2 === 0 ? 'bg-surface-container-low' : 'bg-surface'}`}
            >
              <div className="container max-w-4xl mx-auto px-4">
                <div className={`flex flex-col gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}>
                  <div className="md:w-1/2">
                    <div 
                      className="relative cursor-pointer" 
                      title={t.home.viewLarger}
                      onClick={() => handleImageClick(feature.image)}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-xl pointer-events-none">
                        <span className="text-white font-medium">{t.home.viewLarger}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-on-surface-variant text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 transition-colors"
            onClick={closeModal}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      </div>
  );
};

export default Home;