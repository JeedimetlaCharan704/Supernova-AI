import React from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, Target, ArrowRight, Compass, Sparkles } from 'lucide-react';

const FlightPlan: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business to find the best AI opportunities for maximum impact and ROI.',
      icon: Search,
      gradient: 'from-primary to-neon-purple',
    },
    {
      id: '02',
      title: 'Build & Launch',
      description: 'Our experts create custom AI solutions tailored perfectly to your needs with seamless integration.',
      icon: Rocket,
      gradient: 'from-neon-purple to-accent',
    },
    {
      id: '03',
      title: 'Grow & Scale',
      description: 'Watch your business soar as our AI works 24/7 to drive more customers, leads, and revenue.',
      icon: Target,
      gradient: 'from-accent to-primary',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-20 lg:py-32 relative bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[900px] lg:h-[900px] bg-primary/10 rounded-full blur-[60px] md:blur-[100px] lg:blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-purple text-sm font-semibold mb-6">
            <Compass className="w-4 h-4" />
            <span>How It Works</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple 3-Step <span className="text-gradient-primary bg-clip-text text-transparent">Magic</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-xl mx-auto">
            Get started in minutes and see results faster than you thought possible!
          </p>
        </motion.div>

        {/* Timeline with connecting line */}
        <div className="relative">
          {/* Animated Vertical Line - Glowing effect */}
          <div className="absolute left-[21px] md:left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-neon-purple to-accent md:-translate-x-1/2">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-neon-purple to-accent blur-sm opacity-50" />
          </div>

          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start gap-6 md:gap-8 lg:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon Circle with number - Always on alternating sides */}
                <div className="flex-shrink-0 relative z-10">
                  {/* Outer glow ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.gradient} blur-md opacity-40 animate-pulse`} />
                  
                  {/* Icon container */}
                  <div className={`relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-xl shadow-primary/25 border-4 border-dark`}>
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  
                  {/* Number badge */}
                  <div className="absolute -bottom-1 -right-1 md:hidden w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-xs font-bold text-white border-2 border-dark">
                    {index + 1}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 pt-2 ${
                  index % 2 === 0 
                    ? 'md:text-left lg:pr-20' 
                    : 'md:text-right lg:pl-20'
                }`}>
                  {/* Step Number - Desktop only */}
                  <span className="hidden md:inline-block text-xs font-bold text-primary mb-1">
                    STEP {index + 1}
                  </span>
                  
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <a
            href="https://calendly.com/ironwingsai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button group text-sm md:text-base px-8 py-3 md:py-4"
          >
            <Sparkles className="w-4 h-4 md:w-5" />
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4 md:w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FlightPlan;
