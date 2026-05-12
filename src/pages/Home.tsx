import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const imageSuffix = language === 'zh' ? '-cn' : '-en';
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      title: t.home.feature1.title,
      description: t.home.feature1.description,
      image: `/src/assets/homefeature1${imageSuffix}.png`
    },
    {
      title: t.home.feature2.title,
      description: t.home.feature2.description,
      image: `/src/assets/homefeature2${imageSuffix}.png`
    },
    {
      title: t.home.feature3.title,
      description: t.home.feature3.description,
      image: `/src/assets/homefeature3${imageSuffix}.png`
    },
    {
      title: t.home.feature4.title,
      description: t.home.feature4.description,
      image: `/src/assets/homefeature4${imageSuffix}.png`
    },
    {
      title: t.home.feature5.title,
      description: t.home.feature5.description,
      image: `/src/assets/homefeature5${imageSuffix}.png`
    }
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20">
      <div className="scroll-smooth">
        <div className="scroll-snap-type-y mandatory">
          <section className="py-24 scroll-snap-align-center text-center min-h-[300px] flex items-center bg-surface relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#37B673] via-[#572B7E] to-[#572B7E] opacity-10"></div>
            <div className="container max-w-4xl mx-auto px-4 relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {t.home.feature6.title}
              </h2>
              <p className="text-on-surface-variant text-lg mb-12">
                {t.home.feature5.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {t.home.feature6.iosDownload}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-10 py-5 bg-surface-container-highest text-on-surface font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-outline"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {t.home.feature6.macDownload}
                </a>
              </div>
            </div>
          </section>

          <section className="py-8 scroll-snap-align-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-surface-container-low"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#572B7E] via-[#572B7E] to-surface-container-low opacity-[0.1]"></div>
            <div className="container max-w-4xl mx-auto px-4 relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold text-primary font-[cursive] tracking-wider">Flows Pro Features</h1>
            </div>
          </section>

          {features.map((feature, index) => (
            <section
              key={index}
              className={`py-16 scroll-snap-align-center ${index % 2 === 0 ? 'bg-surface-container-low' : 'bg-surface'}`}
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