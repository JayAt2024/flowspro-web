import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Terms: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 pt-20 pb-16">
      <h1 className="text-4xl font-bold mb-8">{t.nav.terms}</h1>
      <p className="text-lg">Terms & Privacy content will be here</p>
    </div>
  );
};

export default Terms;