import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = 'IronWings AI';

  useEffect(() => {
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Show splash screen for 3 seconds then fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onComplete();
      }, 800); // Allow fade-out animation to complete
    }, 3000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn" as const,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeIn" as const,
      },
    },
  };

  const subtextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 2.0,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Main Content */}
          <div className="relative z-10 text-center px-8">
            {/* Main typing text */}
            <motion.div
              className="mb-8"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-mono tracking-wider">
                {text}
                <span 
                  className={`inline-block w-1 h-12 md:h-16 lg:h-20 bg-emerald-400 ml-1 align-middle ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-100`}
                />
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              variants={subtextVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide">
                AI Automation Agency
              </p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-emerald-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Background subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 pointer-events-none" />
          
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(52, 211, 153, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(52, 211, 153, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;