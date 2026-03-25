import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Rocket, Sparkles } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36 relative overflow-hidden bg-dark flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[700px]">
      {/* Background - Different sizes */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark pointer-events-none" />

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[700px] lg:h-[700px] bg-primary/10 rounded-full blur-[60px] md:blur-[100px] lg:blur-[150px] animate-pulse-slow" />
      </div>

      {/* Corner Accents - Different sizes */}
      <div className="absolute top-0 left-0 w-12 h-12 md:w-20 lg:w-40 border-l border-t border-primary/30 rounded-tl-xl md:rounded-tl-2xl lg:rounded-tl-3xl animate-pulse" />
      <div className="absolute top-0 right-0 w-12 h-12 md:w-20 lg:w-40 border-r border-t border-neon-purple/30 rounded-tr-xl md:rounded-tr-2xl lg:rounded-tr-3xl animate-pulse animation-delay-1000" />
      <div className="absolute bottom-0 left-0 w-12 h-12 md:w-20 lg:w-40 border-l border-b border-accent/30 rounded-bl-xl md:rounded-bl-2xl lg:rounded-bl-3xl animate-pulse animation-delay-2000" />
      <div className="absolute bottom-0 right-0 w-12 h-12 md:w-20 lg:w-40 border-r border-b border-primary/30 rounded-br-xl md:rounded-br-2xl lg:rounded-br-3xl animate-pulse animation-delay-3000" />

      {/* Floating shapes - Only on laptop */}
      <div className="hidden lg:block absolute top-20 left-[10%] w-4 h-4 bg-primary rounded-full animate-pulse" />
      <div className="hidden lg:block absolute top-40 right-[15%] w-3 h-3 bg-accent rounded-full animate-pulse animation-delay-1000" />
      <div className="hidden lg:block absolute bottom-32 left-[20%] w-2 h-2 bg-neon-purple rounded-full animate-pulse animation-delay-2000" />

      <div className="relative z-10 max-w-lg md:max-w-xl lg:max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-10 lg:mb-12 inline-block relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-neon-purple to-accent blur-xl md:blur-2xl lg:blur-3xl opacity-30 animate-pulse" />
          <div className="w-16 h-16 md:w-20 lg:w-28 bg-gradient-to-br from-primary via-neon-purple to-accent rounded-xl md:rounded-2xl lg:rounded-3xl flex items-center justify-center relative z-10 shadow-xl lg:shadow-2xl shadow-primary/20 lg:shadow-primary/30">
            <Rocket className="w-8 h-8 md:w-10 lg:w-14 text-white" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 lg:mb-8 tracking-tight"
        >
          Ready to <span className="text-gradient-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Explode?</span>
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs md:text-base lg:text-xl text-gray-400 mb-6 md:mb-10 lg:mb-12 max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed"
        >
          Don't let your competitors get ahead! Get started today and watch your business grow faster than ever before.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://calendly.com/ironwingsai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button group text-xs md:text-sm lg:text-lg px-6 md:px-10 lg:px-12 py-2.5 md:py-3.5 lg:py-5"
          >
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 animate-pulse" />
            <span>Start Free Trial</span>
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 md:mt-10 lg:mt-12 flex flex-wrap justify-center gap-3 md:gap-5 lg:gap-6 text-xs md:text-sm lg:text-base text-gray-500"
        >
          <div className="flex items-center gap-1.5 md:gap-2">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
            <span>No Obligation</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
            <span>100% Free Trial</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
            <span>Cancel Anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
