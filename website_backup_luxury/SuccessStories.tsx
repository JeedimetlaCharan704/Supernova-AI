import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Zap, ArrowUpRight, Award } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stats = [
    {
      id: 1,
      label: 'Average ROI',
      value: '300',
      suffix: '%+',
      description: 'Return on investment within the first 6 months',
      icon: TrendingUp,
      color: 'from-luxury-gold via-champagne to-luxury-gold-light',
    },
    {
      id: 2,
      label: 'Time Saved',
      value: '40',
      suffix: 'hrs',
      description: 'Weekly hours reclaimed per employee',
      icon: Zap,
      color: 'from-amber-400 via-yellow-300 to-amber-400',
    },
    {
      id: 3,
      label: 'Cost Reduction',
      value: '65',
      suffix: '%',
      description: 'Decrease in operational overhead',
      icon: Target,
      color: 'from-emerald-400 via-teal-400 to-emerald-400',
    },
    {
      id: 4,
      label: 'Response Time',
      value: '<1',
      suffix: 'sec',
      description: 'Instant customer support resolution',
      icon: Users,
      color: 'from-purple-400 via-fuchsia-400 to-purple-400',
    },
  ];

  return (
    <section id="success-stories" className="py-32 relative bg-rich-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-luxury-gold/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-sm font-medium mb-8">
            <Award className="w-4 h-4" />
            <span>Proven Results</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Numbers That <span className="text-gradient-gold">Speak</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Our track record speaks for itself. Real metrics from real transformations.
          </p>
          <div className="luxury-divider mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 relative group"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`} />

              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 bg-clip-border`}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-luxury-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>

              <div className="mb-3">
                <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
                <span className="text-2xl font-semibold text-gray-500 ml-1">{stat.suffix}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-luxury-gold transition-colors duration-300">{stat.label}</h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
