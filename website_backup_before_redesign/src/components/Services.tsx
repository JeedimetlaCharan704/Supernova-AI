import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  Target, 
  Briefcase 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Phone,
      title: 'AI Voice Agents',
      description: 'Intelligent voice systems that handle customer interactions 24/7',
    },
    {
      icon: MessageSquare,
      title: 'AI Chat & Support',
      description: 'Instant response systems that resolve queries at scale',
    },
    {
      icon: Target,
      title: 'AI Lead Generation',
      description: 'Automated prospecting that identifies and qualifies leads',
    },
    {
      icon: Briefcase,
      title: 'Project Management AI',
      description: 'Smart workflow automation that optimizes team efficiency',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)',
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section id="solutions" className="py-24 relative bg-black">
      <div className="section-padding relative z-10">
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
            Automations We Command
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Your Business, Uncaged by AI.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 rounded-xl p-6 border border-white/10 group cursor-pointer transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-ai-green/20 hover:border-ai-green/30"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-ai-green rounded-full flex items-center justify-center mb-6 mx-auto"
                variants={iconVariants}
              >
                <service.icon className="w-8 h-8 text-black" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-ai-green transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;