import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Zap, ArrowUpRight, Trophy } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stats = [
    {
      id: 1,
      label: 'Average ROI',
      value: '300',
      suffix: '%+',
      description: 'Return on investment in first 6 months',
      icon: TrendingUp,
      gradient: 'from-primary via-neon-purple to-accent',
    },
    {
      id: 2,
      label: 'Time Saved',
      value: '40',
      suffix: 'hrs',
      description: 'Weekly hours saved per team member',
      icon: Zap,
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
    },
    {
      id: 3,
      label: 'Cost Reduction',
      value: '65',
      suffix: '%',
      description: 'Decrease in operational costs',
      icon: Target,
      gradient: 'from-neon-green via-teal-400 to-blue-500',
    },
    {
      id: 4,
      label: 'Response Time',
      value: '<1',
      suffix: 'sec',
      description: 'Instant customer support responses',
      icon: Users,
      gradient: 'from-pink-500 via-rose-500 to-red-500',
    },
  ];

  return (
    <section id="success-stories" className="py-12 md:py-20 lg:py-28 relative bg-dark overflow-hidden">
      {/* Background - Different sizes */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-primary/10 rounded-full blur-[60px] md:blur-[100px] lg:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-accent/10 rounded-full blur-[40px] md:blur-[80px] lg:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-14 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-primary/20 to-neon-purple/20 border border-primary/30 text-primary text-xs md:text-sm font-semibold mb-5 md:mb-8">
            <Trophy className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>Amazing Results</span>
          </div>

          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-5 px-2">
            Results That <span className="text-gradient-primary bg-clip-text text-transparent">WOW!</span>
          </h2>
          <p className="text-xs md:text-base lg:text-lg text-gray-400 max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4">
            Join hundreds of happy businesses already scaling faster with our AI magic!
          </p>
        </motion.div>

        {/* Mobile: 2 cols, Laptop: 4 cols */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-card p-3 md:p-5 lg:p-8 relative group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className={`absolute top-0 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-2 md:mb-4 lg:mb-6">
                  <div className={`p-1.5 md:p-2 lg:p-3 rounded-lg bg-gradient-to-br ${stat.gradient}`}>
                    <stat.icon className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gray-500 group-hover:text-white transition-all duration-300" />
                </div>

                <div className="mb-1">
                  <span className={`text-lg md:text-2xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-lg lg:text-2xl font-bold text-gray-400 ml-0.5">{stat.suffix}</span>
                </div>

                <h3 className="text-xs md:text-sm lg:text-lg font-bold text-white mb-0.5 md:mb-1 lg:mb-2">{stat.label}</h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
