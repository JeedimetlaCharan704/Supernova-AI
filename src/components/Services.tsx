import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Bot, Headphones, TrendingUp, Workflow } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Voice Agents',
      description: 'Human-like voice AI that handles customer calls 24/7. Never miss a lead again!',
      gradient: 'from-primary to-neon-purple',
    },
    {
      icon: Headphones,
      title: 'AI Chat Support',
      description: 'Instant responses that actually help. Delight your customers instantly.',
      gradient: 'from-neon-purple to-accent',
    },
    {
      icon: TrendingUp,
      title: 'Smart Lead Gen',
      description: 'Automatically find and nurture your perfect customers on autopilot.',
      gradient: 'from-accent to-primary',
    },
    {
      icon: Workflow,
      title: 'Workflow Magic',
      description: 'Streamline operations and save hours every week with smart automation.',
      gradient: 'from-neon-green to-primary',
    },
  ];

  return (
    <section id="solutions" className="py-12 md:py-20 lg:py-28 relative bg-dark overflow-hidden">
      {/* Background - Different sizes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] md:w-[500px] md:h-[400px] lg:w-[800px] lg:h-[800px] bg-primary/10 rounded-full blur-[60px] md:blur-[100px] lg:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[150px] md:w-[350px] md:h-[300px] lg:w-[500px] lg:h-[500px] bg-neon-purple/10 rounded-full blur-[40px] md:blur-[80px] lg:blur-[100px] pointer-events-none" />
      
      {/* Floating shapes - Only on laptop */}
      <div className="hidden lg:block absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-pulse" />
      <div className="hidden lg:block absolute top-40 right-40 w-3 h-3 bg-accent rounded-full animate-pulse animation-delay-1000" />
      <div className="hidden lg:block absolute bottom-40 left-1/4 w-2 h-2 bg-neon-purple rounded-full animate-pulse animation-delay-2000" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-14 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs md:text-sm font-semibold mb-5 md:mb-8">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 animate-pulse" />
            <span>Powerful Features</span>
          </div>

          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-5 px-2">
            Supercharge Your <span className="text-gradient-primary bg-clip-text text-transparent">Business</span>
          </h2>
          <p className="text-xs md:text-base lg:text-lg text-gray-400 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4">
            Cutting-edge AI tools that work around the clock to grow your business while you focus on what matters.
          </p>
        </motion.div>

        {/* Mobile: 1 col, Tablet: 2 cols, Laptop: 4 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-card p-4 md:p-5 lg:p-8 group relative overflow-hidden card-glow"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3 md:mb-4 lg:mb-6">
                  <div className={`w-10 h-10 md:w-12 lg:w-14 rounded-xl lg:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <service.icon className="w-5 h-5 md:w-6 lg:w-7 text-white" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 md:w-5 text-gray-500 group-hover:text-white transition-all duration-300" />
                </div>

                <h3 className="text-sm md:text-base lg:text-xl font-bold text-white mb-1.5 md:mb-2 lg:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              
              <div className={`absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
