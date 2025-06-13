import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon

const Footer = () => {
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
      name: 'Email',
      url: 'mailto:kushwinthkumar0215@gmail.com',
      icon: <Mail className="h-5 w-5" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/k_u_s_h_w_i',
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/9390489074?text=Hello Kushwinth! I contacting you through your portfolio.', // <-- replace with your full WhatsApp number
      icon: <FaWhatsapp className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="bg-charcoal-900 border-t border-flame-800/30 mt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
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
              <span className="ml-2 text-lg font-display font-bold text-white">
                <span className="text-flame-500">K</span>ushwi Portfolio
              </span>
            </div>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-charcoal-800 rounded-full text-charcoal-300 hover:text-flame-500 hover:bg-charcoal-700 transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 10px rgba(255, 109, 69, 0.5)' 
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-charcoal-800 mt-8 pt-6 text-center text-charcoal-400 text-sm">
          <p>© {new Date().getFullYear()} Kushwi. All rights reserved.</p>
          <motion.div 
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-flame-500/60 mt-1"
          >
            Designed and Developed by
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
            <span className="font-medium text-flame-500">Kushwi</span>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
