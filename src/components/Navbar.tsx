import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, X, Menu } from 'lucide-react';
// import { useSoundContext } from '../context/SoundContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const { playSoundEffect, toggleBgMusic, isMusicPlaying } = useSoundContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
    // playSoundEffect('menuClick');
    setIsOpen(false);
  };

  const toggleMenu = () => {
    // playSoundEffect('slash');
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink 
          to="/" 
          className="flex items-center group" 
          // onClick={() => playSoundEffect('menuClick')}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
              <motion.img
    src="/kushwi-logo.png" 
    alt="Kushwi Logo"
    className="h-6 w-6 rounded-full object-cover"
    initial={{ scale: 0.8, rotate: -15 }}
    whileInView={{ scale: 1, rotate: 0 }}
    transition={{ 
      scale: { type: 'spring', stiffness: 200 },
      rotate: { type: 'spring', stiffness: 150 }
    }}
  />

          </motion.div>
          <span className="ml-2 text-xl font-display font-bold text-white">
            <span className="text-flame-500">K</span>ushwi
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium transition-all duration-300 relative ${
                isActive 
                  ? 'text-flame-500' 
                  : 'text-white hover:text-flame-300'
              }`
            }
            onClick={handleNavLinkClick}
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-flame-500"
                    layoutId="navbar-underline"
                  />
                )}
              </>
            )}
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `font-medium transition-all duration-300 relative ${
                isActive 
                  ? 'text-flame-500' 
                  : 'text-white hover:text-flame-300'
              }`
            }
            onClick={handleNavLinkClick}
          >
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-flame-500"
                    layoutId="navbar-underline"
                  />
                )}
              </>
            )}
          </NavLink>
          
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `font-medium transition-all duration-300 relative ${
                isActive 
                  ? 'text-flame-500' 
                  : 'text-white hover:text-flame-300'
              }`
            }
            onClick={handleNavLinkClick}
          >
            {({ isActive }) => (
              <>
                Projects
                {isActive && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-flame-500"
                    layoutId="navbar-underline"
                  />
                )}
              </>
            )}
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `font-medium transition-all duration-300 relative ${
                isActive 
                  ? 'text-flame-500' 
                  : 'text-white hover:text-flame-300'
              }`
            }
            onClick={handleNavLinkClick}
          >
            {({ isActive }) => (
              <>
                Contact
                {isActive && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-flame-500"
                    layoutId="navbar-underline"
                  />
                )}
              </>
            )}
          </NavLink>
          
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleBgMusic}
            className={`p-2 rounded-full ${
              isMusicPlaying 
                ? 'bg-flame-500 text-white' 
                : 'bg-charcoal-800 text-flame-500'
            }`}
            aria-label={isMusicPlaying ? "Mute background music" : "Play background music"}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5"
            >
              {isMusicPlaying ? (
                <>
                  <line x1="11" y1="5" x2="11" y2="19"></line>
                  <line x1="6" y1="9" x2="6" y2="15"></line>
                  <line x1="16" y1="9" x2="16" y2="15"></line>
                  <line x1="21" y1="12" x2="21" y2="12"></line>
                  <line x1="1" y1="12" x2="1" y2="12"></line>
                </>
              ) : (
                <>
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </>
              )}
            </svg>
          </motion.button> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="text-white p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-charcoal-800/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `font-medium py-2 px-4 rounded-md transition-all duration-300 ${
                    isActive 
                      ? 'bg-flame-500 text-white' 
                      : 'text-white hover:bg-charcoal-700'
                  }`
                }
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `font-medium py-2 px-4 rounded-md transition-all duration-300 ${
                    isActive 
                      ? 'bg-flame-500 text-white' 
                      : 'text-white hover:bg-charcoal-700'
                  }`
                }
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `font-medium py-2 px-4 rounded-md transition-all duration-300 ${
                    isActive 
                      ? 'bg-flame-500 text-white' 
                      : 'text-white hover:bg-charcoal-700'
                  }`
                }
                onClick={handleNavLinkClick}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `font-medium py-2 px-4 rounded-md transition-all duration-300 ${
                    isActive 
                      ? 'bg-flame-500 text-white' 
                      : 'text-white hover:bg-charcoal-700'
                  }`
                }
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>
              {/* <button
                onClick={toggleBgMusic}
                className={`flex items-center py-2 px-4 rounded-md transition-all duration-300 ${
                  isMusicPlaying 
                    ? 'bg-flame-500 text-white' 
                    : 'bg-charcoal-700 text-white'
                }`}
              >
                {isMusicPlaying ? "Mute Music" : "Play Music"}
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;