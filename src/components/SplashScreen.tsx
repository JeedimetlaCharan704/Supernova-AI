import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Sparkles } from 'lucide-react';

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
          className="fixed inset-0 z-50 bg-dark flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Vibrant Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative">
            {/* Pulsing Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-primary via-neon-purple to-accent/50 rounded-full blur-3xl animate-pulse" />

            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="relative z-10 w-24 h-24 bg-gradient-to-br from-primary via-neon-purple to-accent rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-primary/40 animate-glow-pulse"
            >
              <Zap className="w-12 h-12 text-white fill-current" />
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-3 tracking-wide">
              Supernova<span className="text-gradient-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">.ai</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-4">
              <Sparkles className="w-3 h-3 text-primary animate-pulse" />
              <span>Next-Gen AI Automation</span>
            </div>
            <motion.div
              className="h-1 bg-gradient-to-r from-primary via-neon-purple to-accent rounded-full mx-auto"
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
