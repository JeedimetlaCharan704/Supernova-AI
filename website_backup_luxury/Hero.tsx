import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Luxurious Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-luxury-gold/5 rounded-full blur-[150px] animate-drift" />
        <div className="absolute top-[10%] right-[-15%] w-[40%] h-[60%] bg-luxury-gold/5 rounded-full blur-[120px] animate-drift animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[10%] w-[60%] h-[50%] bg-purple-500/5 rounded-full blur-[150px] animate-drift animation-delay-4000" />
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] bg-luxury-gold/3 rounded-full blur-[80px] animate-pulse-glow" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-10 hover:bg-white/[0.06] transition-all duration-500 cursor-default"
        >
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold" />
            <Star className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold" />
            <Star className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold" />
          </div>
          <span className="text-sm font-medium text-gray-300">Premium AI Automation</span>
          <div className="w-1 h-1 rounded-full bg-luxury-gold/50" />
          <Sparkles className="w-4 h-4 text-luxury-gold" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          <span className="text-white">Elevate Your</span>
          <br />
          <span className="text-gradient-gold font-display">Business Beyond</span>
          <br />
          <span className="text-white">Imagination</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting intelligent AI solutions that transform operations, amplify growth, and redefine what's possible for visionary enterprises.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="https://calendly.com/ironwingsai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button group"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#how-it-works"
            className="luxury-button-outline"
          >
            Discover More
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-luxury-gold/60" />
            <span>Enterprise-Grade Security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-luxury-gold/60" />
            <span>24/7 Dedicated Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-luxury-gold/60" />
            <span>99.9% Uptime SLA</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
