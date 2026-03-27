import React from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Zap, 
  Clock, 
  Brain, 
  Shield, 
  ChevronRight,
  Settings,
  GitBranch,
  ArrowLeft,
  Play,
  CheckCircle2,
  Database,
  Webhook,
  FileText,
  Bell,
  RefreshCw,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkflowMagicPage: React.FC = () => {
  const features = [
    {
      icon: GitBranch,
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to create complex automations without writing a single line of code.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Decisions',
      description: 'Smart branching logic that adapts based on data, user behavior, and real-time conditions.',
    },
    {
      icon: Layers,
      title: '500+ Integrations',
      description: 'Connect with every tool in your stack — CRM, email, calendar, databases, and more.',
    },
    {
      icon: Clock,
      title: 'Scheduled Automation',
      description: 'Trigger workflows on time-based events, recurring schedules, or custom intervals.',
    },
    {
      icon: Shield,
      title: 'Error Handling',
      description: 'Intelligent error recovery with automatic retries, fallbacks, and alerts.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Execute thousands of tasks per second with our optimized processing engine.',
    },
  ];

  const useCases = [
    {
      title: 'CRM Data Sync',
      description: 'Automatically sync customer data between your CRM, email marketing, and support tools.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    },
    {
      title: 'Onboarding Automation',
      description: 'Create personalized onboarding sequences that welcome, educate, and activate new users.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    },
    {
      title: 'Invoice Processing',
      description: 'Extract data from invoices, validate entries, and update your accounting system automatically.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    },
    {
      title: 'Social Media Scheduling',
      description: 'Queue, schedule, and cross-post content across all platforms from a single dashboard.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
    },
  ];

  const stats = [
    { value: '15+', label: 'Hours Saved Weekly' },
    { value: '500+', label: 'App Integrations' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '10K+', label: 'Tasks Per Second' },
  ];

  const workflowExamples = [
    {
      title: 'Lead Qualification Flow',
      icon: Workflow,
      steps: [
        { name: 'New form submission', icon: FileText },
        { name: 'AI scores lead', icon: Brain },
        { name: 'Route to sales tier', icon: GitBranch },
        { name: 'Send personalized email', icon: Bell },
        { name: 'Create CRM task', icon: Database },
      ],
    },
    {
      title: 'Invoice Processing',
      icon: Workflow,
      steps: [
        { name: 'Email attachment received', icon: Webhook },
        { name: 'AI extracts data', icon: Brain },
        { name: 'Validate against records', icon: CheckCircle2 },
        { name: 'Update accounting system', icon: Database },
        { name: 'Notify finance team', icon: Bell },
      ],
    },
    {
      title: 'Customer Support',
      icon: Workflow,
      steps: [
        { name: 'Support ticket created', icon: FileText },
        { name: 'AI categorizes issue', icon: Brain },
        { name: 'Route to team/agent', icon: GitBranch },
        { name: 'Update knowledge base', icon: RefreshCw },
        { name: 'Send resolution survey', icon: Bell },
      ],
    },
  ];

  const faqs = [
    {
      question: 'Do I need coding skills to use Workflow Magic?',
      answer: 'Not at all! Our visual drag-and-drop builder is designed for non-technical users. If you can use a flowchart, you can build powerful automations. For advanced users, we also offer custom code options.',
    },
    {
      question: 'What apps can I connect?',
      answer: 'We integrate with 500+ apps including Salesforce, HubSpot, Slack, Gmail, Notion, Airtable, Stripe, Shopify, and thousands more. If it has an API, we can connect it.',
    },
    {
      question: 'How do you handle errors?',
      answer: 'Our system includes intelligent error handling with automatic retries, fallback actions, and real-time alerts. If something fails, you\'ll know immediately and can set up recovery workflows.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We\'re SOC 2 Type II certified, use bank-level encryption, and never store sensitive data. All connections are OAuth-secured and you can revoke access anytime.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 via-transparent to-primary/20" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-neon-green/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/20 border border-neon-green/30 text-neon-green mb-6">
                <Workflow className="w-4 h-4" />
                <span className="text-sm font-semibold">Workflow Magic</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Automate Everything.{' '}
                <span className="text-gradient-primary bg-clip-text text-transparent">
                  Save Hours Daily.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Stop doing repetitive tasks manually. Build powerful automations that 
                connect your apps, sync your data, and handle the busywork — so you 
                can focus on growing your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://calendly.com/supernova-ai-agency/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button inline-flex items-center justify-center gap-2 text-base py-3.5 px-8"
                >
                  Start Automating
                  <ChevronRight className="w-5 h-5" />
                </a>
                <button className="modern-button-outline inline-flex items-center justify-center gap-2 text-base py-3.5 px-8">
                  <Settings className="w-5 h-5" />
                  See Templates
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-neon-green/30 to-primary/30 rounded-3xl p-1">
                <div className="bg-dark/90 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green via-primary to-neon-purple" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold">Workflow Builder</h3>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                        <span className="text-xs text-gray-400">Active</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { name: 'Trigger', color: 'from-neon-green to-emerald-400', icon: Play },
                        { name: 'AI Analysis', color: 'from-primary to-neon-purple', icon: Brain },
                        { name: 'Filter', color: 'from-amber-500 to-orange-400', icon: GitBranch },
                        { name: 'Action 1', color: 'from-blue-500 to-cyan-400', icon: Bell },
                        { name: 'Action 2', color: 'from-pink-500 to-rose-400', icon: Database },
                      ].map((step, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                              <step.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-medium">{step.name}</span>
                          </div>
                          {index < 4 && (
                            <div className="flex-1 flex items-center justify-center">
                              <div className="w-0.5 h-6 bg-gradient-to-b from-white/30 to-white/10" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Runs today: 1,247</span>
                        <span className="text-neon-green">✓ All healthy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-neon-green/30 rounded-full blur-2xl animate-pulse" />
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Automate <span className="text-gradient-primary bg-clip-text text-transparent">Like Magic</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful features that make automation accessible to everyone
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-green to-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Examples Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready-Made{' '}
              <span className="text-gradient-primary bg-clip-text text-transparent">Workflow Templates</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Start with proven workflows and customize them for your needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workflowExamples.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="glass-card p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="flex items-center gap-3 mb-6">
                  <workflow.icon className="w-6 h-6 text-neon-green" />
                  <h3 className="text-lg font-bold">{workflow.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neon-green/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-4 h-4 text-neon-green" />
                      </div>
                      <span className="text-sm text-gray-300">{step.name}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full py-3 rounded-xl bg-neon-green/10 text-neon-green text-sm font-semibold hover:bg-neon-green/20 transition-colors flex items-center justify-center gap-2">
                  Use Template
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Automate <span className="text-gradient-primary bg-clip-text text-transparent">Any Process</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From simple tasks to complex business processes
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
                  <Settings className="w-5 h-5 text-neon-green" />
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
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 via-primary/20 to-neon-purple/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/30 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Automate{' '}
              <span className="text-gradient-primary bg-clip-text text-transparent">Your Business?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses saving 15+ hours every week with Workflow Magic. 
              Get started free today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/supernova-ai-agency/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button inline-flex items-center justify-center gap-2 text-base py-4 px-8"
              >
                <Workflow className="w-5 h-5" />
                Start Automating Free
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

export default WorkflowMagicPage;
