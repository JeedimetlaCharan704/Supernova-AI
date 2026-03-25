import React from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, Target, ArrowRight, Compass } from 'lucide-react';

const FlightPlan: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your workflows to pinpoint high-impact automation opportunities that yield immediate ROI.',
      icon: Search,
    },
    {
      id: '02',
      title: 'Development & Deployment',
      description: 'Our engineers build bespoke AI agents tailored to your business logic, ensuring seamless integration.',
      icon: Rocket,
    },
    {
      id: '03',
      title: 'Optimization & Scale',
      description: 'We continuously monitor performance, refining models to adapt to your growing business needs.',
      icon: Target,
    },
  ];

  return (
    <section id="how-it-works" className="py-32 relative bg-rich-black overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/2 rounded-full blur-[120px] pointer-events-none opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-sm font-medium mb-8">
            <Compass className="w-4 h-4" />
            <span>Our Process</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Path to <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A meticulously crafted journey from concept to reality.
          </p>
          <div className="luxury-divider mx-auto mt-8" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-luxury-gold/30 via-luxury-gold/50 to-luxury-gold/30 md:-translate-x-1/2" />

          <div className="space-y-20 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon/Number Column */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-rich-black border border-luxury-gold/30 flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.15)] group hover:border-luxury-gold/50 transition-all duration-500">
                    <step.icon className="w-7 h-7 md:w-9 md:h-9 text-luxury-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-luxury-gold flex items-center justify-center text-sm font-bold text-rich-black border-2 border-rich-black shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content Column */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right text-left'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Empty Column for grid balance */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://calendly.com/ironwingsai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button group"
          >
            <span>Begin Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FlightPlan;
