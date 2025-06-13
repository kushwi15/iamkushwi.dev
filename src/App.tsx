import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
// import SoundProvider from './context/SoundContext';
import Cursor from './components/Cursor';
import useIsMobile from './hooks/useIsMobile';

function App() {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Set page title
    document.title = "Kushwi Portfolio | Web Developer";
  }, []);

  return (
    // <SoundProvider>
      <Router>
        {!isMobile && <Cursor />}
        <div className="relative min-h-screen bg-charcoal-900 font-body text-white overflow-hidden">
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    // </SoundProvider>
  );
}

export default App;