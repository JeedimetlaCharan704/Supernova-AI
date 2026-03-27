import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Bot, 
  Zap, 
  Clock, 
  Brain, 
  Shield, 
  ChevronRight,
  MessageCircle,
  Send,
  Users,
  Globe,
  ArrowLeft,
  Sparkles,
  Heart,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatSupportPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Chatbot',
      description: 'AI-powered responses that understand context, intent, and sentiment for accurate answers.',
    },
    {
      icon: Brain,
      title: 'Deep Learning NLP',
      description: 'State-of-the-art natural language processing that understands typos, slang, and context.',
    },
    {
      icon: Clock,
      title: 'Instant Responses',
      description: 'Respond to customer inquiries in seconds, not hours. Keep them engaged and satisfied.',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade encryption and compliance with GDPR, CCPA, and SOC 2 standards.',
    },
    {
      icon: Globe,
      title: 'Multi-Platform',
      description: 'Deploy on your website, WhatsApp, Facebook Messenger, and 20+ other channels.',
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Detects customer emotions and adjusts tone appropriately for empathetic interactions.',
    },
  ];

  const useCases = [
    {
      title: 'Website Live Chat',
      description: 'Instantly answer visitor questions, qualify leads, and boost conversions in real-time.',
      image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=600&q=80',
    },
    {
      title: 'WhatsApp Business',
      description: 'Automated responses and order tracking for your WhatsApp customer base.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
    },
    {
      title: 'Support Ticket Deflection',
      description: 'Resolve common issues automatically, reducing ticket volume by up to 70%.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    },
    {
      title: 'Product Recommendations',
      description: 'Suggest products based on customer preferences and browsing behavior.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    },
  ];

  const stats = [
    { value: '92%', label: 'Issue Resolution Rate' },
    { value: '4.8x', label: 'Faster Response Time' },
    { value: '45%', label: 'More Leads Captured' },
    { value: '24/7', label: 'Always Available' },
  ];

  const conversationFlows = [
    {
      title: 'Lead Capture',
      steps: ['Greet visitor', 'Understand needs', 'Qualify lead', 'Collect contact', 'Schedule follow-up'],
    },
    {
      title: 'Customer Support',
      steps: ['Identify issue', 'Gather details', 'Provide solution', 'Confirm resolution', 'Rate experience'],
    },
    {
      title: 'Order Assistance',
      steps: ['Verify order', 'Track shipment', 'Update details', 'Process returns', 'Confirm completion'],
    },
  ];

  const faqs = [
    {
      question: 'Can the chatbot handle complex customer issues?',
      answer: 'Our chatbot resolves 85% of inquiries autonomously. For complex issues, it seamlessly transfers to human agents with full conversation context, ensuring no customer frustration.',
    },
    {
      question: 'How does it learn and improve over time?',
      answer: 'The AI continuously learns from every interaction. You can train it with your knowledge base, FAQs, and product information. Our team helps optimize performance monthly.',
    },
    {
      question: 'Can I customize the chatbot personality?',
      answer: 'Yes! Define your brand voice, tone, and style. Choose from 50+ avatars or upload your own. Create custom conversation flows for different scenarios.',
    },
    {
      question: 'How long does implementation take?',
      answer: 'Most clients launch within 48 hours. We provide templates for common industries, and our team handles the technical setup so you can focus on your business.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-accent/20" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-neon-purple/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/20 border border-neon-purple/30 text-neon-purple mb-6">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm font-semibold">AI Chat Support</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Instant Support That{' '}
                <span className="text-gradient-primary bg-clip-text text-transparent">
                  Delights Customers
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Provide 24/7 instant responses that actually solve problems. 
                Our AI chat support understands context, shows empathy, and converts 
                visitors into loyal customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://calendly.com/supernova-ai-agency/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button inline-flex items-center justify-center gap-2 text-base py-3.5 px-8"
                >
                  Start Free Trial
                  <ChevronRight className="w-5 h-5" />
                </a>
                <button className="modern-button-outline inline-flex items-center justify-center gap-2 text-base py-3.5 px-8">
                  <MessageCircle className="w-5 h-5" />
                  See Live Demo
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-neon-purple/30 to-accent/30 rounded-3xl p-1">
                <div className="bg-dark/90 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple via-accent to-primary" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple to-accent flex items-center justify-center">
                        <Bot className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">AI Assistant</h3>
                        <p className="text-sm text-gray-400">Online now</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="w-4 h-4 text-neon-purple" />
                        </div>
                        <div className="bg-white/5 rounded-2xl rounded-tl-sm p-4 max-w-[85%]">
                          <p className="text-sm">"Hi! I'm looking for a laptop for video editing. Can you help?"</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 justify-end">
                        <div className="bg-gradient-to-r from-neon-purple to-accent rounded-2xl rounded-tr-sm p-4 max-w-[85%]">
                          <p className="text-sm">"Absolutely! For video editing, I'd recommend our Creator Pro series with 32GB RAM and RTX 4070. Want me to show you the specs?"</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Bot className="w-4 h-4 text-accent" />
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="w-4 h-4 text-neon-purple" />
                        </div>
                        <div className="bg-white/5 rounded-2xl rounded-tl-sm p-4 max-w-[85%]">
                          <p className="text-sm">"Yes, show me the options!"</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                      <Search className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">Type a message...</span>
                      <Send className="w-4 h-4 text-neon-purple ml-auto" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-neon-purple/30 rounded-full blur-2xl animate-pulse" />
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Powerful <span className="text-gradient-primary bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built with cutting-edge AI to deliver human-like conversations
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple to-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / Conversation Flows */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Smart <span className="text-gradient-primary bg-clip-text text-transparent">Conversation Flows</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Visual conversation builders that handle any scenario with ease
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {conversationFlows.map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="glass-card p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-neon-purple" />
                  <h3 className="text-lg font-bold">{flow.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {flow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-neon-purple/20 flex items-center justify-center text-xs font-bold text-neon-purple">
                        {stepIndex + 1}
                      </div>
                      <span className="text-sm text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
        
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
              Transform customer interactions across every channel
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
                  <MessageCircle className="w-5 h-5 text-neon-purple" />
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
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-accent/20 to-primary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/30 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Delight Your{' '}
              <span className="text-gradient-primary bg-clip-text text-transparent">Customers?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already providing instant, intelligent support around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/supernova-ai-agency/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button inline-flex items-center justify-center gap-2 text-base py-4 px-8"
              >
                <MessageSquare className="w-5 h-5" />
                Start Free Trial
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

export default ChatSupportPage;
