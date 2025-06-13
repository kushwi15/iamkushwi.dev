import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Layout, Layers } from 'lucide-react';
import axios from 'axios';
import FireParticles from '../components/FireParticles';
// import { useSoundContext } from '../context/SoundContext';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  // const { playSoundEffect } = useSoundContext();
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/kushwi15/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch repositories. Please try again later.');
        setLoading(false);
        console.error('Error fetching repositories:', err);
      }
    };

    fetchRepos();
  }, []);


  // Get unique languages for filtering
  const languages = ['all', ...new Set(repos.map(repo => repo.language).filter(Boolean))];

  // Filter repos by language
  const filteredRepos = activeFilter === 'all' 
    ? repos 
    : repos.filter(repo => repo.language === activeFilter);

  // Get a language-specific color
  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-purple-500',
      // Add more languages as needed
      default: 'bg-gray-400'
    };
    
    return colors[language] || colors.default;
  };

  const handleFilterClick = (filter: string) => {
    // playSoundEffect('menuClick');
    setActiveFilter(filter);
  };

  return (
    <div className="pt-20 pb-20 relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <FireParticles intensity="low" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/95 via-charcoal-900/80 to-charcoal-900/95 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-flame-500 font-japanese inline-block font-semibold text-lg mb-2"
            >
              {/* 炎の作品 */}
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
            >
              Dev Projects
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={headerInView ? { width: '60px' } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-flame-500 mx-auto mb-6"
            ></motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-charcoal-200 max-w-2xl mx-auto mb-12"
            >
              Discover my projects, each crafted with precision and attention to detail —
              like the futurestic art of Development.
            </motion.p>
            
            {/* Language Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {languages.map((language, index) => (
                <motion.button
                  key={language || `unknown-${index}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFilterClick(language)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium ${
                    activeFilter === language
                      ? 'bg-flame-500 text-white shadow-flame'
                      : 'bg-charcoal-800 text-charcoal-300 hover:bg-charcoal-700'
                  }`}
                >
                  {language === 'all' ? 'All Projects' : language || 'Other'}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Project Grid */}
          <motion.section
            ref={projectsRef}
            initial={{ opacity: 0 }}
            animate={projectsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    boxShadow: ['0 0 10px rgba(255, 77, 31, 0.5)', '0 0 20px rgba(255, 77, 31, 0.7)', '0 0 10px rgba(255, 77, 31, 0.5)']
                  }}
                  transition={{ 
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-12 h-12 rounded-full border-t-2 border-r-2 border-flame-500"
                />
              </div>
            ) : error ? (
              <div className="text-center">
                <p className="text-charcoal-300">{error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredRepos.map((repo, index) => (
                    <motion.div
                      key={repo.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-charcoal-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-charcoal-700 hover:border-flame-700 transition-colors duration-300 shadow-lg group"
                    >
                      {/* Project Card Header */}
                      <div className="relative h-40 bg-gradient-to-br from-charcoal-700 to-charcoal-900 overflow-hidden">
                        {/* Project Icon */}
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0.5 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="text-flame-500 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                            {repo.language === 'JavaScript' ? (
                              <Layout className="w-24 h-24" />
                            ) : repo.language === 'TypeScript' ? (
                              <Code className="w-24 h-24" />
                            ) : (
                              <Layers className="w-24 h-24" />
                            )}
                          </div>
                        </motion.div>
                        
                        {/* Language Tag */}
                        {repo.language && (
                          <div className="absolute top-4 right-4">
                            <div className="flex items-center bg-charcoal-900/70 backdrop-blur-sm px-3 py-1 rounded-full">
                              <span className={`h-3 w-3 rounded-full ${getLanguageColor(repo.language)} mr-2`}></span>
                              <span className="text-xs font-medium text-white">{repo.language}</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Flame Effect on Hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-flame-500/30 to-transparent pointer-events-none"
                        />
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-6">
                        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-flame-400 transition-colors duration-300">
                          {repo.name}
                        </h3>
                        
                        <p className="text-charcoal-300 mb-4 line-clamp-3">
                          {repo.description || "No description available"}
                        </p>
                        
                        {/* Tags/Topics */}
                        {repo.topics && repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {repo.topics.slice(0, 3).map((topic) => (
                              <span 
                                key={topic} 
                                className="px-2 py-1 bg-charcoal-700/70 text-charcoal-300 rounded-md text-xs"
                              >
                                #{topic}
                              </span>
                            ))}
                            {repo.topics.length > 3 && (
                              <span className="px-2 py-1 bg-charcoal-700/70 text-charcoal-300 rounded-md text-xs">
                                +{repo.topics.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                        
                        {/* Stats */}
                        <div className="flex items-center text-charcoal-400 text-xs mb-4">
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            {repo.stargazers_count}
                          </span>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="6" y1="3" x2="6" y2="15"></line>
                              <circle cx="18" cy="6" r="3"></circle>
                              <circle cx="6" cy="18" r="3"></circle>
                              <path d="M18 9a9 9 0 0 1-9 9"></path>
                            </svg>
                            {repo.forks_count}
                          </span>
                        </div>
                        
                        {/* Links */}
                        <div className="flex gap-3">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-charcoal-700 hover:bg-charcoal-600 text-white rounded-md transition-colors duration-300 text-sm font-medium"
                            // onMouseEnter={() => playSoundEffect('menuClick')}
                          >
                            <Github className="h-4 w-4" /> 
                            Repository
                          </motion.a>
                          
                          {repo.homepage && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 py-2 bg-flame-600 hover:bg-flame-500 text-white rounded-md transition-colors duration-300 text-sm font-medium"
                              // onMouseEnter={() => playSoundEffect('menuClick')}
                            >
                              <ExternalLink className="h-4 w-4" /> 
                              Live Demo
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Projects;