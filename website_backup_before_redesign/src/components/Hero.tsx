import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

const Hero: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 10,
      });
    }
    setParticles(newParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-12 md:pt-16 lg:pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black" />
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-ai-green rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
         className="px-4 pt-0 pb-8 sm:px-6 lg:px-8 text-center z-10 relative max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Small Label */}
        <motion.div
          className="inline-block mb-6 md:mb-8"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-emerald-400 font-bold tracking-wide uppercase text-xl md:text-2xl lg:text-3xl leading-none">
              IronWings AI
            </span>
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight"
          variants={itemVariants}
        >
          Scale at the
          <br />
          <span className="text-emerald-400">Speed of Light</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          We build intelligent AI systems to automate your operations,
          <br />
          from lead generation to customer support.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          className="flex flex-col items-center gap-2 md:gap-3"
          variants={itemVariants}
        >
          <a 
            href="https://calendly.com/ironwingsai/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-emerald-500 text-black font-semibold text-base md:text-lg px-4 py-2 md:px-6 md:py-3 rounded-lg inline-flex items-center gap-2 md:gap-3 transition-all duration-300 hover:bg-emerald-400 hover:scale-105 group"
          >
            Book Your Free Strategy Call
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          {/* Micro Text */}
          <p className="text-sm text-gray-400">
            No commitment required · Results guaranteed
          </p>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
};

export default Hero;