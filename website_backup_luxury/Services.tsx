import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Target, Briefcase, Sparkles, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Phone,
      title: 'AI Voice Agents',
      description: 'Human-like intelligent voice systems that handle complex customer interactions 24/7 with zero downtime.',
    },
    {
      icon: MessageSquare,
      title: 'AI Chat & Support',
      description: 'Instant, context-aware response systems that resolve queries at scale while maintaining personal touch.',
    },
    {
      icon: Target,
      title: 'AI Lead Generation',
      description: 'Automated prospecting engines that identify, qualify, and nurture high-value leads on autopilot.',
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      description: 'Smart workflow automation that optimizes team efficiency and predicts project bottlenecks before they occur.',
    },
  ];

  return (
    <section id="solutions" className="py-32 relative bg-rich-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-luxury-gold/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-luxury-gold/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Our Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Solutions That <span className="text-gradient-gold">Transform</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We engineer sophisticated AI systems that work tirelessly to elevate your business operations to unprecedented levels.
          </p>
          <div className="luxury-divider mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-luxury-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-800/80 to-black border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-luxury-gold/5 group-hover:shadow-luxury-gold/15 group-hover:border-luxury-gold/20">
                    <service.icon className="w-7 h-7 text-white group-hover:text-luxury-gold transition-colors duration-300" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-luxury-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              
              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
