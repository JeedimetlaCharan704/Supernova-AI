import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Persistent background animation - independent of user interactions
  const buttonBackgroundVariants = {
    initial: {
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      boxShadow: "0 0 0px rgba(16, 185, 129, 0)",
    },
    animate: {
      background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #10b981 100%)",
      backgroundSize: "200% 200%",
      boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ai-green/10 via-black to-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-ai-green/20 rounded-full filter blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          />
        </div>
      </div>

      <div className="section-padding relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Icon */}
          <motion.div
            className="w-20 h-20 bg-ai-green rounded-full flex items-center justify-center mx-auto mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-10 h-10 text-black" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="heading-xl mb-6"
            variants={itemVariants}
          >
            Ready to Rise Above the Noise?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Let's build your automation strategy. Your first consultation is free.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mb-8"
            variants={buttonVariants}
          >
            <motion.a
              href="https://calendly.com/ironwingsai/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="premium-cta-button relative overflow-visible px-6 py-3 text-xl transition-none inline-block"
              whileHover={{ scale: 1.02 }} // Subtle hover scale
              whileTap={{ scale: 0.98 }}   // Subtle tap feedback
              style={{ zIndex: 10 }}
            >
              {/* Animated Background Layer - z-0, persistent animation */}
              <motion.div
                className="absolute inset-0 rounded-full"
                variants={buttonBackgroundVariants}
                initial="initial"
                animate="animate"
                style={{ zIndex: 0 }}
              />
              
              {/* Button Content - z-10, separate from background */}
              <div className="relative z-10 flex items-center gap-2">
                Claim Your Free Strategy Call
                <ArrowRight className="w-6 h-6" />
              </div>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-ai-green rounded-full" />
              <span>No sales pressure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-ai-green rounded-full" />
              <span>Custom strategy included</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-ai-green rounded-full" />
              <span>Results-focused approach</span>
            </div>
          </motion.div>

          {/* Additional Trust Badge */}
          <motion.div
            className="mt-12 inline-block"
            variants={itemVariants}
          >
            <div className="bg-white/5 rounded-full px-6 py-3 flex items-center gap-2 border border-white/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gray-600 rounded-full border-2 border-black"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-300 ml-2">
                Join 50+ companies already scaling with AI
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;