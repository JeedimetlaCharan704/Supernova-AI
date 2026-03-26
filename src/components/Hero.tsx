import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Rocket, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Different for mobile vs laptop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mobile: Smaller blobs, Laptop: Bigger */}
        <div className="absolute top-[-30%] left-[-20%] md:top-[-10%] md:left-[-10%] w-[80%] md:w-[600px] h-[50%] md:h-[600px] bg-primary/20 rounded-full blur-[60px] md:blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-20%] md:top-[20%] md:right-[-10%] w-[60%] md:w-[500px] h-[40%] md:h-[500px] bg-neon-purple/20 rounded-full blur-[50px] md:blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-15%] left-[5%] md:bottom-[-10%] md:left-[20%] w-[50%] md:w-[500px] h-[30%] md:h-[500px] bg-accent/15 rounded-full blur-[40px] md:blur-[120px] animate-blob animation-delay-4000" />
        
        {/* Grid - Only on laptop */}
        <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_30%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        {/* Badge - Different sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-10"
        >
          <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-gray-300">Next-Gen AI Automation</span>
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse hidden md:block" />
        </motion.div>

        {/* Main Heading - Very different for mobile vs laptop */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4 md:mb-8 leading-tight"
        >
          <span className="text-white">Supercharge Your</span>
          <br className="sm:hidden" />
          <span className="sm:hidden" /> 
          <span className="text-gradient-primary"> Business Growth</span>
          <br />
          <span className="text-white">With AI Power</span>
        </motion.h1>

        {/* Subtext - Different sizes */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-400 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
        >
          Transform your operations with intelligent AI that works 24/7. 
          From lead generation to customer support — watch your business soar!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5 mb-10 md:mb-16"
        >
          <a
            href="https://calendly.com/supernova-ai-agency/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button text-xs sm:text-sm md:text-base px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4"
          >
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="#how-it-works"
            className="modern-button-outline text-xs sm:text-sm md:text-base px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-neon-green" />
            <span className="text-xs md:text-sm font-medium">Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-xs md:text-sm font-medium">Lightning Fast</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            <span className="text-xs md:text-sm font-medium">99.9% Uptime</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-gray-600 flex justify-center pt-1.5 md:pt-2">
            <motion.div 
              className="w-1.5 h-2 md:w-1.5 md:h-3 rounded-full bg-gradient-to-b from-primary to-accent"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
