import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Zap } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const caseStudies = [
    {
      icon: TrendingUp,
      company: 'Tech Corp',
      result: '300% ROI',
      description: 'Lead generation automation',
      color: 'text-blue-400',
    },
    {
      icon: Users,
      company: 'ServiceHub',
      result: '24/7 Support',
      description: 'AI customer service implementation',
      color: 'text-green-400',
    },
    {
      icon: Target,
      company: 'SalesPro',
      result: '50% Conversion',
      description: 'Voice agent integration',
      color: 'text-purple-400',
    },
    {
      icon: Zap,
      company: 'FlowState',
      result: '80% Efficiency',
      description: 'Workflow automation',
      color: 'text-yellow-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="success-stories" className="py-24 relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-ai-green/5 to-transparent" />
      </div>

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
            How Industry Leaders Took Flight
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Real results from real businesses that chose to soar above the competition.
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-white/5 rounded-xl p-8 text-center group cursor-pointer border border-white/10 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-ai-green/20"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 ${study.color} rounded-full flex items-center justify-center mb-6 mx-auto`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <study.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Company Name */}
              <h3 className="text-xl font-bold text-white mb-3">
                {study.company}
              </h3>

              {/* Result */}
              <div className={`text-2xl font-bold ${study.color} mb-4`}>
                {study.result}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {study.description}
              </p>


            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-gray-400 mb-6">
            Join dozens of companies transforming their operations with AI
          </p>
          <button className="cta-button">
            View Case Studies →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;