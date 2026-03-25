import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Star, Crown } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-rich-black flex items-center justify-center min-h-[700px]">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-luxury-gold/[0.02] to-rich-black pointer-events-none" />

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-luxury-gold/5 rounded-full blur-[150px] animate-pulse-glow" />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-luxury-gold/20 rounded-tl-3xl" />
      <div className="absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 border-luxury-gold/20 rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 border-luxury-gold/20 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-luxury-gold/20 rounded-br-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 inline-block relative"
        >
          <div className="absolute inset-0 bg-luxury-gold blur-3xl opacity-15 animate-pulse" />
          <div className="w-28 h-28 bg-gradient-to-br from-luxury-gold via-champagne to-luxury-gold-dark rounded-3xl flex items-center justify-center relative z-10 shadow-2xl shadow-luxury-gold/30">
            <Crown className="w-14 h-14 text-rich-black fill-rich-black" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
        >
          Ready to <span className="text-gradient-gold">Ascend?</span>
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          The future of your business is waiting. Claim your exclusive strategy session and let's map your path to greatness.
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
            className="group relative inline-flex items-center gap-4 px-12 py-5 bg-luxury-gold text-rich-black font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-luxury-gold/40 hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/30 translate-y-full skew-x-12 transition-transform group-hover:-translate-y-full duration-700" />
            <Zap className="w-6 h-6 relative z-10 fill-current" />
            <span className="relative z-10">Book Strategy Call</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-luxury-gold/60" />
            <span>No Obligation</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-luxury-gold/60" />
            <span>100% Free Strategy</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-luxury-gold/60" />
            <span>Immediate Insights</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
