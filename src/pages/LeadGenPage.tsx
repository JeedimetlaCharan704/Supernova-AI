import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Brain, 
  Zap, 
  Mail,
  ChevronRight,
  TargetIcon,
  UserPlus,
  LineChart,
  Calendar,
  MousePointerClick,
  Star,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadGenPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Identify and reach your ideal customers using AI-powered demographic and behavioral analysis.',
    },
    {
      icon: UserPlus,
      title: 'Automated Outreach',
      description: 'Multi-channel campaigns across email, LinkedIn, and social media that feel personal.',
    },
    {
      icon: Brain,
      title: 'Lead Scoring AI',
      description: 'ML-powered scoring predicts which leads are most likely to convert, so you focus on the right prospects.',
    },
    {
      icon: Zap,
      title: 'Instant Enrichment',
      description: 'Automatically gather verified contact info, company data, and social profiles for every lead.',
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Auto-book meetings with qualified leads using AI-powered calendar integration.',
    },
    {
      icon: LineChart,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into campaign performance, conversion rates, and ROI.',
    },
  ];

  const useCases = [
    {
      title: 'B2B Lead Generation',
      description: 'Find decision-makers at target companies and start conversations that convert.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    },
    {
      title: 'Real Estate Leads',
      description: 'Identify active buyers and sellers in your target market before your competitors.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    },
    {
      title: 'SaaS User Acquisition',
      description: 'Build targeted lists of companies that fit your ideal customer profile.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
      title: 'Event Registrations',
      description: 'Drive qualified registrations for webinars, conferences, and product launches.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    },
  ];

  const stats = [
    { value: '10x', label: 'More Qualified Leads' },
    { value: '73%', label: 'Cost Reduction' },
    { value: '3.5x', label: 'Conversion Rate' },
    { value: '48h', label: 'Time to First Lead' },
  ];

  const pipelineSteps = [
    {
      step: '01',
      title: 'Define Your Ideal Customer',
      description: 'Tell us about your target market. Our AI analyzes thousands of data points to build a precise ICP.',
      icon: TargetIcon,
    },
    {
      step: '02',
      title: 'AI Finds Perfect Matches',
      description: 'Our algorithms search millions of profiles to find prospects that match your criteria.',
      icon: Users,
    },
    {
      step: '03',
      title: 'Personalized Outreach',
      description: 'Multi-channel campaigns with personalized messaging that drives engagement.',
      icon: Mail,
    },
    {
      step: '04',
      title: 'Convert & Close',
      description: 'Book meetings with qualified leads and watch your pipeline fill with opportunities.',
      icon: MousePointerClick,
    },
  ];

  const faqs = [
    {
      question: 'Where does the lead data come from?',
      answer: 'We aggregate data from 50+ verified sources including company databases, public records, social platforms, and verified business directories. Every contact is validated for accuracy.',
    },
    {
      question: 'How do you ensure email deliverability?',
      answer: 'We use proprietary warming algorithms, domain rotation, and content personalization to achieve 95%+ inbox rates. Our system maintains sender reputation across all campaigns.',
    },
    {
      question: 'Can I target specific industries or companies?',
      answer: 'Absolutely! Target by industry, company size, revenue, technology stack, job title, location, and 100+ other criteria. We can even find companies using specific tools like your competitors.',
    },
    {
      question: 'What kind of results can I expect?',
      answer: 'Most clients see qualified leads within 48 hours and 10x pipeline growth within 30 days. Results vary by industry and targeting criteria, but we provide detailed projections during onboarding.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">Smart Lead Gen</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Find Your Perfect{' '}
                <span className="text-gradient-primary bg-clip-text text-transparent">
                  Customers on Autopilot
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Stop wasting time on cold calls and generic outreach. Our AI finds, 
                qualifies, and nurtures your ideal customers automatically — so you 
                can focus on closing deals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://calendly.com/supernova-ai-agency/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button inline-flex items-center justify-center gap-2 text-base py-3.5 px-8"
                >
                  Start Generating Leads
                  <ChevronRight className="w-5 h-5" />
                </a>
                <button className="modern-button-outline inline-flex items-center justify-center gap-2 text-base py-3.5 px-8">
                  <Target className="w-5 h-5" />
                  See Case Studies
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl p-1">
                <div className="bg-dark/90 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-neon-purple" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                        <Target className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Lead Pipeline</h3>
                        <p className="text-sm text-gray-400">Live activity</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      {[
                        { name: 'Sarah Chen', role: 'VP Engineering @ TechFlow', score: 95, status: 'Hot' },
                        { name: 'Marcus Johnson', role: 'CTO @ ScaleUp Inc', score: 87, status: 'Warm' },
                        { name: 'Emily Rodriguez', role: 'Director @ InnovateCo', score: 78, status: 'Warm' },
                      ].map((lead, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-sm font-bold">
                              {lead.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="text-sm font-semibold">{lead.name}</p>
                              <p className="text-xs text-gray-400">{lead.role}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                              lead.score >= 90 ? 'bg-neon-green/20 text-neon-green' : 'bg-accent/20 text-accent'
                            }`}>
                              {lead.status}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">Score: {lead.score}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>247 leads this week</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        4.9/5 rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Complete Lead <span className="text-gradient-primary bg-clip-text text-transparent">Generation Suite</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to find, qualify, and convert your ideal customers
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 md:p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How Our <span className="text-gradient-primary bg-clip-text text-transparent">Pipeline Works</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A systematic approach that fills your sales pipeline consistently
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="glass-card p-6 h-full relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="text-5xl font-bold text-white/5 absolute top-2 right-4">
                    {item.step}
                  </div>
                  
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-accent/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Works For <span className="text-gradient-primary bg-clip-text text-transparent">Every Industry</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Proven strategies that drive results across all business types
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Common <span className="text-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-bold mb-3 flex items-center gap-3">
                  <Target className="w-5 h-5 text-accent" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-neon-purple/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Fill Your{' '}
              <span className="text-gradient-primary bg-clip-text text-transparent">Pipeline?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses generating qualified leads on autopilot. Get your first 50 leads free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/supernova-ai-agency/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button inline-flex items-center justify-center gap-2 text-base py-4 px-8"
              >
                <TrendingUp className="w-5 h-5" />
                Get 50 Free Leads
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary via-neon-purple to-accent rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-current" />
              </div>
              <span className="text-base font-bold">
                Supernova<span className="text-primary-light">.ai</span>
              </span>
            </div>
            <p className="text-sm text-gray-500">© 2026 Supernova AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeadGenPage;
