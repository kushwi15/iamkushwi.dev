import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import FireParticles from '../components/FireParticles';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    submitting: boolean;
    error: string | null;
    success: boolean;
  }>({
    submitted: false,
    submitting: false,
    error: null,
    success: false,
  });
  
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [contactInfoRef, contactInfoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus({
      ...formStatus,
      submitting: true,
      error: null,
    });
    
    try {
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', formState.subject);
      formData.append('message', formState.message);
      formData.append('access_key', 'da3d0f25-8051-46a6-9645-b7442c0c75a1'); // Replace with your Web3Forms access key

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormStatus({
          submitted: true,
          submitting: false,
          error: null,
          success: true,
        });
        
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset after a delay
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            submitting: false,
            error: null,
            success: false,
          });
        }, 5000);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        error: error instanceof Error ? error.message : 'There was an error submitting your message. Please try again.',
        success: false,
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "kushwinthkumar0215@gmail.com",
      link: "mailto:kushwinthkumar0215@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Banglore, India",
      link: "https://maps.app.goo.gl/2CQiyvZC6MtZtCJRA"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9390489074",
      link: "tel:+919390489074"
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kushwi15',
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kushwinthkumar/',
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/k_u_s_h_w_i',
      icon: <Instagram className="h-5 w-5" />,
    },
     
  ];

  return (
    <div className="pt-20 pb-20 relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <FireParticles intensity="low" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/95 via-charcoal-900/80 to-charcoal-900/95 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
            >
              Send a <span className="text-flame-500">Message</span>
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60px' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-flame-500 mx-auto mb-6"
            ></motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-charcoal-200 max-w-2xl mx-auto"
            >
              Have a project in mind or just want to connect? Send me a message and let's create something amazing together.
            </motion.p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Information - 30% width */}
            <motion.div
              ref={contactInfoRef}
              initial={{ opacity: 0, x: -50 }}
              animate={contactInfoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[35%]"
            >
              <div className="bg-charcoal-800/50 backdrop-blur-sm rounded-lg p-6 border border-charcoal-700 h-full">
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Let's <span className="text-flame-500">Connect</span>
                </h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={contactInfoInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="rounded-full bg-charcoal-700 p-3 text-flame-500 group-hover:bg-flame-500 group-hover:text-white transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-charcoal-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-flame-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                
                <div className="border-t border-charcoal-700 pt-6">
                  <h3 className="text-white font-medium mb-4">Follow Me</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={contactInfoInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: '0 0 10px rgba(255, 109, 69, 0.5)' 
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-charcoal-800 rounded-full text-charcoal-300 hover:text-flame-500 hover:bg-charcoal-700 transition-colors"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form - 70% width */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[65%]"
            >
              <div className="bg-charcoal-800/50 backdrop-blur-sm rounded-lg p-6 border border-charcoal-700 h-full">
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Send a <span className="text-flame-500">Message</span>
                </h2>
                
                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-error/20 border border-error/30 rounded-lg p-4 mb-6 text-center"
                  >
                    <p className="text-error">{formStatus.error}</p>
                  </motion.div>
                )}
                
                {formStatus.success ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-success/20 border border-success/30 rounded-lg p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="mx-auto w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mb-4"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-charcoal-300">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={formInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <label htmlFor="name" className="block text-charcoal-300 font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full bg-charcoal-700 border border-charcoal-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-flame-500/50 focus:border-flame-500 transition-colors"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={formInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <label htmlFor="email" className="block text-charcoal-300 font-medium mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full bg-charcoal-700 border border-charcoal-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-flame-500/50 focus:border-flame-500 transition-colors"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="mb-6"
                    >
                      <label htmlFor="subject" className="block text-charcoal-300 font-medium mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full bg-charcoal-700 border border-charcoal-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-flame-500/50 focus:border-flame-500 transition-colors"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="Project Inquiry">Project Inquiry</option>
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Other">Other</option>
                      </select>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="mb-6"
                    >
                      <label htmlFor="message" className="block text-charcoal-300 font-medium mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full bg-charcoal-700 border border-charcoal-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-flame-500/50 focus:border-flame-500 transition-colors resize-none"
                      ></textarea>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="text-right"
                    >
                      <motion.button
                        whileHover={{ 
                          scale: 1.03,
                          boxShadow: '0 0 20px rgba(255, 77, 31, 0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={formStatus.submitting}
                        className={`relative overflow-hidden px-6 py-3 bg-flame-600 hover:bg-flame-500 text-white font-medium rounded-md transition-all duration-300 flex items-center ${
                          formStatus.submitting ? 'opacity-80' : ''
                        }`}
                      >
                        {formStatus.submitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message
                          </span>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                            <motion.span
                              initial={{ width: 0 }}
                              whileHover={{ width: '100%' }}
                              className="absolute inset-0 -z-10 bg-flame-500/20"
                            />
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;