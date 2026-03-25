import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Diamond } from 'lucide-react';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-rich-black flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-luxury-gold/10 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative">
            {/* Pulsing Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-luxury-gold/20 rounded-full blur-3xl animate-pulse" />

            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="relative z-10 w-24 h-24 bg-gradient-to-br from-luxury-gold via-champagne to-luxury-gold-dark rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-luxury-gold/30"
            >
              <Zap className="w-12 h-12 text-rich-black fill-current" />
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-3 tracking-wide">
              IronWings<span className="text-gradient-gold">.ai</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-4">
              <Diamond className="w-3 h-3 text-luxury-gold" />
              <span>Premium AI Solutions</span>
            </div>
            <motion.div
              className="h-1 bg-gradient-to-r from-luxury-gold via-champagne to-luxury-gold rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
