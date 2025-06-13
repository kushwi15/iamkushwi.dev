import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-5 h-5 rounded-full mix-blend-difference bg-white z-50 pointer-events-none"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      
      {/* Trailing flame particles */}
      <motion.div
        className="fixed w-14 h-14 rounded-full bg-flame-500/30 z-40 pointer-events-none blur-sm"
        animate={{
          x: mousePosition.x - 28,
          y: mousePosition.y - 28,
          opacity: isClicking ? 0.8 : 0.3,
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 200,
          mass: 0.8,
        }}
      />
      
      {/* Click effect */}
      {isClicking && (
        <motion.div
          initial={{ 
            opacity: 0.7, 
            scale: 0.2, 
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
          }}
          animate={{ 
            opacity: 0, 
            scale: 1.5,
          }}
          transition={{ duration: 0.5 }}
          className="fixed w-20 h-20 rounded-full bg-flame-500/50 z-30 pointer-events-none blur-md"
        />
      )}
    </>
  );
};

export default Cursor;