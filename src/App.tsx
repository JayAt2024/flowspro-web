
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import FooterBar from './components/FooterBar';
import Home from './pages/Home';
import Features from './pages/Features';
import KeyMaps from './pages/KeyMaps';
import Terms from './pages/Terms';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/key-maps" element={<KeyMaps />} />
              <Route path="/terms-privacy" element={<Terms />} />
            </Routes>
          </main>
          <FooterBar />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
