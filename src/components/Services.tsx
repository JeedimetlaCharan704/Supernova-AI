import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Bot, Headphones, TrendingUp, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Voice Agents',
      description: 'Human-like voice AI that handles customer calls 24/7. Never miss a lead again!',
      gradient: 'from-primary to-neon-purple',
      link: '/voice-agents',
    },
    {
      icon: Headphones,
      title: 'AI Chat Support',
      description: 'Instant responses that actually help. Delight your customers instantly.',
      gradient: 'from-neon-purple to-accent',
      link: '/chat-support',
    },
    {
      icon: TrendingUp,
      title: 'Smart Lead Gen',
      description: 'Automatically find and nurture your perfect customers on autopilot.',
      gradient: 'from-accent to-primary',
      link: '/lead-gen',
    },
    {
      icon: Workflow,
      title: 'Workflow Magic',
      description: 'Streamline operations and save hours every week with smart automation.',
      gradient: 'from-neon-green to-primary',
      link: '/workflow-magic',
    },
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 relative bg-dark overflow-hidden">
      {/* Background - Different sizes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] md:w-[600px] md:h-[400px] lg:w-[900px] lg:h-[900px] bg-primary/10 rounded-full blur-[100px] md:blur-[120px] lg:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[600px] bg-neon-purple/10 rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px] pointer-events-none" />
      
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
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Powerful Features</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Supercharge Your <span className="text-gradient-primary bg-clip-text text-transparent">Business</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            Cutting-edge AI tools that work around the clock to grow your business while you focus on what matters.
          </p>
        </motion.div>

        {/* 2x2 Grid - All cards same size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 md:p-8 group relative overflow-hidden card-glow cursor-pointer h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div className={`w-12 h-12 md:w-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 md:w-7 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-all duration-300" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                </div>
                
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
