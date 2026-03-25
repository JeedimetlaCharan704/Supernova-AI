import React from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, Target, Star } from 'lucide-react';

const DetailedProcess: React.FC = () => {
  const processSteps = [
    {
      title: 'Step 1: Discover – The Strategy Session',
      description: 'This is where we dive deep into your current systems, identify bottlenecks, and map out a custom automation strategy.',
      highlight: 'The Free Strategy Call is your starting point.',
      icon: Search,
      bgColor: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-500/30',
    },
    {
      title: 'Step 2: Deploy – The AI Build & Integration',
      description: 'We build your custom AI solutions and integrate them with your existing tools (CRMs, email platforms, project management systems).',
      highlight: 'Seamless integration with zero disruption to your workflow.',
      icon: Rocket,
      bgColor: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
    },
    {
      title: 'Step 3: Dominate – Optimization & Support',
      description: 'We provide ongoing support, monitoring, and optimization to ensure maximum ROI.',
      highlight: 'Continuous improvement for sustained competitive advantage.',
      icon: Target,
      bgColor: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
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
      y: -15,
      scale: 1.02,
      boxShadow: '0 25px 50px rgba(16, 185, 129, 0.3)',
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="our-process" className="py-24 relative bg-gradient-to-b from-black to-gray-900">
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
            Your Path to Effortless Automation
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We've simplified the journey to scaling your business with AI.
            <br />
            Here's our transparent, 3-step flight plan.
          </motion.p>
        </motion.div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative bg-white/5 rounded-2xl p-8 border ${step.borderColor} hover:bg-white/10 transition-all duration-300 group hover:shadow-lg hover:shadow-ai-green/20`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} rounded-2xl opacity-50`} />

              {/* Icon */}
              <motion.div
                className="relative w-16 h-16 bg-ai-green rounded-full flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <step.icon className="w-8 h-8 text-black" />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="relative text-xl font-bold text-white mb-4 leading-tight"
                variants={itemVariants}
              >
                {step.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="relative text-gray-300 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                {step.description}
              </motion.p>

              {/* Highlight */}
              <motion.div
                className="relative flex items-start gap-2 p-4 bg-ai-green/10 rounded-lg border border-ai-green/20"
                variants={itemVariants}
              >
                <Star className="w-5 h-5 text-ai-green flex-shrink-0 mt-0.5" />
                <p className="text-sm text-ai-green font-medium">
                  {step.highlight}
                </p>
              </motion.div>


            </motion.div>
          ))}
        </div>

        {/* Bottom Promise */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-morphism rounded-full">
            <div className="w-2 h-2 bg-ai-green rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              Every step is designed to deliver measurable ROI within 90 days
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedProcess;