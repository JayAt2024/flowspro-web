import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 pt-20 pb-16">
      <h1 className="text-4xl font-bold mb-8">{t.nav.home} Page</h1>
      <p className="text-lg">Welcome to Flows Pro Web</p>
    </div>
  );
};

export default Home;