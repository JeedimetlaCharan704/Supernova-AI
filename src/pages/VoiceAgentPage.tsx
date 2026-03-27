import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mic, 
  Clock, 
  Brain, 
  Zap, 
  Shield, 
  ChevronRight,
  PhoneIncoming,
  PhoneOutgoing,
  MessageSquare,
  Globe,
  Headphones,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VoiceAgentPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Natural Voice Synthesis',
      description: 'Hyper-realistic voices that sound human with natural pauses, accents, and emotional responses.',
    },
    {
      icon: Brain,
      title: 'Smart Context Understanding',
      description: 'Understands customer intent, context, and sentiment to provide relevant responses.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a call again. Handle unlimited calls simultaneously, day or night.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with SOC 2, HIPAA, and GDPR standards.',
    },
    {
      icon: Zap,
      title: 'Instant Integration',
      description: 'Connect with your existing phone systems, CRM, and helpdesk in minutes.',
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Speak to customers in 50+ languages with native-level fluency.',
    },
  ];

  const useCases = [
    {
      title: 'Inbound Customer Support',
      description: 'Handle product inquiries, technical support, and order status calls automatically.',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&q=80',
    },
    {
      title: 'Outbound Sales Calls',
      description: 'Qualify leads, schedule appointments, and follow up with prospects at scale.',
      image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=600&q=80',
    },
    {
      title: 'Appointment Scheduling',
      description: 'Let callers book, reschedule, or cancel appointments without human intervention.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    },
    {
      title: 'Lead Qualification',
      description: 'Qualify leads in real-time with intelligent questioning and instant CRM updates.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    },
  ];

  const stats = [
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '60%', label: 'Cost Reduction' },
    { value: '3x', label: 'More Calls Handled' },
    { value: '<1s', label: 'Response Time' },
  ];

  const faqs = [
    {
      question: 'How does the voice AI handle complex customer issues?',
      answer: 'Our voice AI uses advanced natural language understanding to handle 80%+ of inquiries autonomously. For complex issues, it intelligently transfers to human agents with full context, ensuring seamless handoffs.',
    },
    {
      question: 'Can I customize the voice and personality?',
      answer: 'Absolutely! Choose from 100+ pre-built voices or create a custom voice clone. Define conversation flows, tone, and personality traits to match your brand perfectly.',
    },
    {
      question: 'How long does it take to set up?',
      answer: 'Most clients are making live calls within 48 hours. Our team handles the technical integration while you provide conversation scripts and brand guidelines.',
    },
    {
      question: 'Does it integrate with my existing systems?',
      answer: 'Yes! We integrate with major CRMs (Salesforce, HubSpot), helpdesks (Zendesk, Freshdesk), calendar systems, and phone providers (Twilio, RingCentral, etc.).',
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-neon-purple/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />
        
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">AI Voice Agents</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your 24/7 Voice Agent That{' '}
                <span className="text-gradient-primary bg-clip-text text-transparent">
                  Never Sleeps
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Handle unlimited customer calls with human-like voice AI. Qualify leads, 
                book appointments, and resolve issues around the clock — all while you focus on growing your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://calendly.com/supernova-ai-agency/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button inline-flex items-center justify-center gap-2 text-base py-3.5 px-8"
                >
                  Book Demo Call
                  <ChevronRight className="w-5 h-5" />
                </a>
                <button className="modern-button-outline inline-flex items-center justify-center gap-2 text-base py-3.5 px-8">
                  <Phone className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-primary/30 to-neon-purple/30 rounded-3xl p-1">
                <div className="bg-dark/90 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-neon-purple to-accent" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-neon-purple flex items-center justify-center">
                        <Headphones className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Live Call</h3>
                        <p className="text-sm text-gray-400">In progress...</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <PhoneIncoming className="w-4 h-4 text-neon-green" />
                        </div>
                        <div className="bg-white/5 rounded-2xl rounded-tl-sm p-4 max-w-[80%]">
                          <p className="text-sm">"Hi, I'd like to schedule an appointment for next week."</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 justify-end">
                        <div className="bg-gradient-to-r from-primary to-neon-purple rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
                          <p className="text-sm">"Of course! I have availability Tuesday at 2pm or Wednesday at 10am. Which works better for you?"</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <PhoneOutgoing className="w-4 h-4 text-accent" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Duration: 2:34</span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                        Connected
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-pulse" />
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Powerful <span className="text-gradient-primary bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to deliver exceptional voice experiences at scale
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-neon-purple flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How It <span className="text-gradient-primary bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get started in minutes with our simple 3-step setup process
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Your Systems',
                description: 'Integrate with your phone system, CRM, and calendar in just a few clicks. No technical expertise required.',
                icon: Phone,
              },
              {
                step: '02',
                title: 'Customize Your Agent',
                description: 'Choose your voice, define conversation flows, and train your AI with your brand knowledge and FAQs.',
                icon: Brain,
              },
              {
                step: '03',
                title: 'Go Live',
                description: 'Launch your voice agent and start handling calls. Monitor performance and optimize in real-time.',
                icon: Zap,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative"
              >
                <div className="glass-card p-8 h-full relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-neon-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="text-6xl font-bold text-white/5 absolute top-4 right-4">
                    {item.step}
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-neon-purple/20 flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-primary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Use <span className="text-gradient-primary bg-clip-text text-transparent">Cases</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From startups to enterprises, see how businesses transform with voice AI
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
                  <MessageSquare className="w-5 h-5 text-primary" />
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-neon-purple/20 to-accent/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="text-gradient-primary bg-clip-text text-transparent">Customer Calls?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already using AI voice agents to scale their customer support and sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/supernova-ai-agency/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button inline-flex items-center justify-center gap-2 text-base py-4 px-8"
              >
                <Phone className="w-5 h-5" />
                Book Free Strategy Call
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

export default VoiceAgentPage;
