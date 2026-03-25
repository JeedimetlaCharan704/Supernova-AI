import React from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, Target, ArrowRight } from 'lucide-react';

const FlightPlan: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Discover',
      description: 'We map your processes to identify key automation opportunities.',
      icon: Search,
    },
    {
      number: '2',
      title: 'Deploy',
      description: 'We build and integrate your custom AI agents seamlessly.',
      icon: Rocket,
    },
    {
      number: '3',
      title: 'Dominate',
      description: 'We monitor and optimize for peak performance and ROI.',
      icon: Target,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    hover: {
      scale: 1.05,
      x: 10,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="section-padding">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="heading-lg mb-6"
            variants={itemVariants}
          >
            Our 3-Step Flight Plan
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            The Eagle's View: From discovery to domination in three strategic moves.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 group cursor-pointer"
              variants={stepVariants}
              whileHover="hover"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <motion.div
                  className="w-20 h-20 bg-ai-green rounded-full flex items-center justify-center text-2xl font-bold text-black mb-4 md:mb-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.number}
                </motion.div>
              </div>

              {/* Icon */}
              <motion.div
                className="w-16 h-16 glass-morphism rounded-full flex items-center justify-center mb-4 md:mb-0"
                variants={iconVariants}
                whileHover="hover"
              >
                <step.icon className="w-8 h-8 text-ai-green" />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-ai-green transition-colors duration-300">
                  Step {step.number} – {step.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              <motion.div
                className="hidden md:block text-gray-400"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <a 
            href="https://calendly.com/ironwingsai/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button text-lg px-12 py-4 inline-flex items-center gap-2"
          >
            Let's Partner Up
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-ai-green/5 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default FlightPlan;