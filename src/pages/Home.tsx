import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FireParticles from '../components/FireParticles';
// import { useSoundContext } from '../context/SoundContext';

const Home = () => {
  // const { playSoundEffect } = useSoundContext();
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // useEffect(() => {
  //   if (heroInView) {
  //     setTimeout(() => {
  //       playSoundEffect('flame');
  //     }, 1000);
  //   }
  // }, [heroInView, playSoundEffect]);

  const skills = [
    { name: "JavaScript", level: 90, color: "bg-flame-500" },
    { name: "React", level: 85, color: "bg-accent-blue" },
    { name: "Node.js", level: 80, color: "bg-success" },
    { name: "TypeScript", level: 75, color: "bg-accent-teal" },
    { name: "Python", level: 70, color: "bg-accent-purple" },
    { name: "UI/UX Design", level: 65, color: "bg-flame-600" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <FireParticles intensity="medium" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/90 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >

            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white leading-tight"
            >
              {/* <span className="text-flame-500">火の神神楽</span> */}
              <br />
              <TypeAnimation
                sequence={[
  'I am Kushwi', 
  2000,
  'Crafting Code with Aesthetics', 
  2000,
  'UI/UX Enthusiast', 
  2000,
  'MERN Stack Developer',
  2000,
  'Transforming Ideas Into Interfaces', 
  2000
]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-lg text-charcoal-200 mb-8 max-w-2xl mx-auto"
            >
              Forging blazing-fast digital experiences with the artistry of code and the precision of a master craftsman.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 15px rgba(255, 77, 31, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  // onMouseEnter={() => playSoundEffect('menuClick')}
                  // onClick={() => playSoundEffect('slash')}
                  className="px-6 py-3 bg-flame-600 hover:bg-flame-500 text-white font-medium rounded-md shadow-flame transition-all duration-300 flex items-center justify-center"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: '100%', opacity: 1 }}
                    className="absolute inset-0 -z-10 bg-flame-500/20 rounded-md"
                  />
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  // onMouseEnter={() => playSoundEffect('menuClick')}
                  // onClick={() => playSoundEffect('menuClick')}
                  className="px-6 py-3 bg-transparent border-2 border-flame-500 text-flame-500 hover:text-white hover:bg-flame-500/20 font-medium rounded-md transition-all duration-300 flex items-center justify-center"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-charcoal-300 text-sm flex flex-col items-center"
          >
            <span>Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </motion.div>
        </motion.div>
      </section>

{/* Skills Section */}
<section className="py-20 bg-charcoal-800 relative overflow-hidden ">
  <FireParticles intensity="low" />
  <div className="absolute inset-0 bg-charcoal-800/80 z-10"></div>

  <div className="container mx-auto px-4 relative z-20">
    <motion.div
      ref={skillsRef}
      initial={{ opacity: 0 }}
      animate={skillsInView ? { opacity: 1 } : {}}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
        >
          Skilled In
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={skillsInView ? { width: '60px' } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 bg-flame-500 mx-auto mb-6"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={skillsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-charcoal-200 max-w-2xl mx-auto"
        >
          From pixel-perfect designs to scalable architectures, my development style is a crafted blend of artistry and engineering. 
          These are the techniques I wield.
        </motion.p>
      </div>

      {/* Category: MERN Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mb-12"
      >
        <h3 className="text-xl font-display font-bold text-flame-500 mb-4 text-center md:text-left">
          💻 MERN Stack & Core Frameworks
        </h3>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {['MongoDB', 'Express', 'React', 'Nodejs', 'React Native'].map((tech, index) => {
            const formattedTech = tech.toLowerCase().replace('.js', '').replace(/\s+/g, '-');
            const iconPath =
              tech === 'React Native'
                ? 'react/react-original.svg'
                : `${formattedTech}/${formattedTech}-original.svg`;
            const logoName = tech === 'React Native' ? 'react' : formattedTech;

            return (
              <motion.div
                key={tech}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={skillsInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-md"
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}`}
                  alt={tech}
                  className="w-4 h-4"
                  onError={(e) => {
                    e.currentTarget.src = `https://img.shields.io/badge/${encodeURIComponent(
                      tech
                    )}-27272a?style=for-the-badge&logo=${logoName}&logoColor=white&labelColor=27272a`;
                    e.currentTarget.className = 'w-auto h-4';
                  }}
                />
                {tech}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Category: Frontend Styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mb-12"
      >
        <h3 className="text-xl font-display font-bold text-flame-500 mb-4 text-center md:text-left">
          🎨 Frontend Styling & UI Magic
        </h3>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'TypeScript'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={skillsInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.1 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-md"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase().replace(' ', '-').replace('.', '')}/${tech.toLowerCase().replace(' ', '-').replace('.', '')}-original.svg`}
                alt={tech}
                className="w-4 h-4"
                onError={(e) => {
                  e.currentTarget.src = `https://img.shields.io/badge/${encodeURIComponent(tech)}-27272a?style=for-the-badge&logo=${encodeURIComponent(tech.replace(' ', '-').replace('.', '').toLowerCase())}&logoColor=white&labelColor=27272a`;
                  e.currentTarget.className = 'w-auto h-4';
                }}
              />
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Category: Dev Tools & Deployment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mb-12"
      >
        <h3 className="text-xl font-display font-bold text-flame-500 mb-4 text-center md:text-left">
          🛠️ Dev Tools & Deployment
        </h3>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {['VS Code', 'Postman', 'GitHub', 'Vercel', 'Netlify', 'Render', 'Docker'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={skillsInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-md"
            >
              <img
                src={
                  tech === 'VS Code'
                    ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
                    : tech === 'Render'
                    ? 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/render.svg'
                    : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase().replace(
                        ' ',
                        '-'
                      )}/${tech.toLowerCase().replace(' ', '-')}-original.svg`
                }
                alt={tech}
                className="w-4 h-4"
                onError={(e) => {
                  e.currentTarget.src = `https://img.shields.io/badge/${encodeURIComponent(
                    tech
                  )}-27272a?style=for-the-badge&logo=${encodeURIComponent(
                    tech.replace(' ', '-').toLowerCase()
                  )}&logoColor=white&labelColor=27272a`;
                  e.currentTarget.className = 'w-auto h-4';
                }}
              />
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Category: AI & Creative Tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <h3 className="text-xl font-display font-bold text-flame-500 mb-4 text-center md:text-left">
          🧠 AI & Creative Tools
        </h3>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {['ChatGPT', 'Figma', 'Canva', 'DeepSeek', 'Gemini', 'Bolt.new', 'Lovable.dev'].map((tech, index) => {
            const slug = tech.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-');
            const customIcons = {
              chatgpt: 'https://cdn.oaistatic.com/assets/favicon-miwirzcw.ico',
              deepseek: 'https://chat.deepseek.com/favicon.svg',
              gemini: 'https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png',
              boltnew: 'https://bolt.new/static/favicon.svg',
              lovabledev: 'https://lovable.dev/favicon.ico',
            };
            const iconSrc = customIcons[slug]
              ? customIcons[slug]
              : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;

            return (
              <motion.div
                key={tech}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={skillsInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-md"
              >
                <img
                  src={iconSrc}
                  alt={tech}
                  className="w-4 h-4"
                  onError={(e) => {
                    e.currentTarget.src = `https://img.shields.io/badge/${encodeURIComponent(
                      tech
                    )}-27272a?style=for-the-badge&logo=${encodeURIComponent(slug)}&logoColor=white&labelColor=27272a`;
                    e.currentTarget.className = 'w-auto h-4';
                  }}
                />
                {tech}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>



      {/* CTA Section */}
      <section 
        ref={ctaRef} 
        className="py-20 relative overflow-hidden bg-charcoal-900"
      >
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center bg-charcoal-800/50 backdrop-blur-md p-8 rounded-lg border border-flame-900/30 shadow-flame"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to <span className="text-flame-500">ignite</span> your next project?
            </h2>
            
            <p className="text-charcoal-200 mb-8">
              Let's collaborate and bring your vision to life with the power and precision of Flame Breathing techniques.
            </p>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(255, 77, 31, 0.6)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-flame-600 hover:bg-flame-500 text-white font-medium rounded-md shadow-flame-lg transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </Link>

            <motion.div
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -z-10 inset-0 bg-flame-500/5 rounded-lg blur-xl"
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <FireParticles intensity="low" />
        </div>
      </section>
    </div>
  );
};

export default Home;