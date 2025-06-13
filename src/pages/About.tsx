import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import FireParticles from '../components/FireParticles';

const About = () => {
  const [profileRef, profileInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { name: "Strength", value: 85, color: "bg-flame-500" },
    { name: "Agility", value: 90, color: "bg-flame-400" },
    { name: "Technique", value: 80, color: "bg-accent-blue" },
    { name: "Concentration", value: 95, color: "bg-accent-purple" },
  ];

  const timeline = [
      {
    title: 'Associate Software Engineer',
    company: 'Basel Dynamic Tech Solutions',
    period: 'Present',
    description: 'Contributing to full-stack projects, working in Agile teams to build scalable applications with optimized UI/UX.',
    type: 'work'
  },
  {
    title: 'Freelancer - Web Developer',
    company: 'SVS Detailing Services',
    period: '2024',
    description: 'Delivered a clean, dynamic web presence for a car detailing service, emphasizing performance and mobile experience.',
    type: 'work'
  },
  {
    title: 'Freelancer - Frontend Developer',
    company: 'SreeTeq Services',
    period: '2024',
    description: 'Developed responsive and interactive business websites tailored to client needs using modern frontend technologies.',
    type: 'work'
  },
  {
    title: 'Web Development Training',
    company: 'Self Learning',
    period: '2023 – 2024',
    description: 'Focused on full-stack web development with MERN stack, enhancing my frontend and backend development expertise.',
    type: 'training'
  },
  {
    title: 'Mechanical Engineering',
    company: 'Anna University',
    period: '2019 – 2023',
    description: 'Completed B.E. in Mechanical Engineering, building a strong foundation in problem-solving and technical skills.',
    type: 'education'
  },
  ];

  return (
    <div className="pt-20 overflow-hidden relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <FireParticles intensity="low" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/95 via-charcoal-900/80 to-charcoal-900/95 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
            >
              Character Profile
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60px' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-flame-500 mx-auto mb-6"
            />
          </div>

          {/* Profile Section */}
          <motion.section
            ref={profileRef}
            initial={{ opacity: 0 }}
            animate={profileInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={profileInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center"
            >
               <h2 className="text-3xl font-bold font-display text-white mb-6 leading-snug">
    <span className="text-flame-500">Passionate Web Developer</span> forging blazing-fast <br />
    digital experiences with precision and creativity.
  </h2>

              <div className="text-charcoal-200 space-y-4 mb-10 max-w-2xl">
                <p>
                  As a dedicated developer, I channel the discipline and precision of Hinokami Kagura in my work.
                  With every project, I strive to create beautiful, functional, and blazingly fast web experiences.
                </p>
                <p>
                  My journey in web development began years ago, and like a Demon Slayer's training, it has been filled with challenges that have forged my skills to perfection.
                  I specialize in frontend development with React, building responsive and elegant UIs, and adding the perfect amount of animation for a delightful user experience.
                </p>
                <p>
                  When I'm not coding, I'm refining my techniques through continuous learning and experimentation — always seeking to master new breathing forms of development.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={profileInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl"
              >
                <div className="bg-charcoal-800/50 backdrop-blur-sm rounded-lg p-4 border border-charcoal-700">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-flame-500 mb-2">
                    <Code className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-white font-medium mb-1">Technical Skills</h3>
                  <p className="text-charcoal-300 text-sm">JavaScript, React, Node.js, TypeScript</p>
                </div>

                <div className="bg-charcoal-800/50 backdrop-blur-sm rounded-lg p-4 border border-charcoal-700">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-flame-500 mb-2">
                    <Award className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-white font-medium mb-1">Specialties</h3>
                  <p className="text-charcoal-300 text-sm">UI/UX Design, Frontend Development, Responsive Design</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Experience Timeline */}
          <motion.section
            ref={timelineRef}
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-3xl font-display font-bold text-white mb-4"
              >
                Journey & Experience
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                animate={timelineInView ? { width: '60px' } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-flame-500 mx-auto mb-6"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={timelineInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-charcoal-200 max-w-2xl mx-auto"
              >
                My path as a developer, forged through dedication and continuous growth.
              </motion.p>
            </div>

            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-charcoal-700 transform md:translate-x-px" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0`}
                  >
                    <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 z-10">
                      <motion.div className="h-10 w-10 rounded-full bg-charcoal-800 border-4 border-charcoal-900 flex items-center justify-center text-flame-500 shadow-flame">
                        {index < 3 ? <Briefcase className="h-4 w-4" /> : <GraduationCap className="h-4 w-4" />}
                      </motion.div>
                    </div>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-charcoal-800/50 backdrop-blur-sm rounded-lg p-6 border border-charcoal-700 hover:border-flame-700 transition-colors duration-300">
                        <h3 className="text-white text-xl font-semibold mb-1">{item.title}</h3>
                        <div className="flex items-center gap-2 mb-3 text-sm text-charcoal-300 justify-start">
                          <span className="text-flame-400 font-medium">{item.company}</span>
                          <span className="h-1 w-1 rounded-full bg-charcoal-500" />
                          <span>{item.period}</span>
                        </div>
                        <p className="text-charcoal-200">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
