import React from 'react';
import { Zap, Mail, Phone, Instagram, Linkedin, Github, Twitter, ArrowUpRight, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/ironwings_ai?igsh=N3poemhwNm1lb3F1', label: 'Instagram', gradient: 'from-pink-500 via-purple-500 to-pink-500' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jeedimetla-charan-089a83339', label: 'LinkedIn', gradient: 'from-blue-500 via-cyan-500 to-blue-500' },
    { icon: Github, href: 'https://github.com/JeedimetlaCharan704', label: 'GitHub', gradient: 'from-gray-600 via-gray-400 to-gray-600' },
    { icon: Twitter, href: '#', label: 'Twitter', gradient: 'from-sky-400 via-blue-500 to-sky-400' },
  ];

  return (
    <footer className="bg-dark relative overflow-hidden pt-20 md:pt-28 lg:pt-36 pb-10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[400px] bg-gradient-to-b from-primary/10 to-transparent" />
        
        {/* Side glows */}
        <div className="absolute top-20 left-0 w-[300px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-0 w-[300px] h-[400px] bg-neon-purple/10 rounded-full blur-[120px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-[15%] w-3 h-3 bg-neon-purple rounded-full animate-pulse animation-delay-1000" />
        <div className="absolute bottom-1/4 left-[20%] w-2 h-2 bg-accent rounded-full animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Top Section - Brand & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-24">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-4 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary via-neon-purple to-accent rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Zap className="w-6 h-6 md:w-7 md:h-7 fill-current" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Supernova<span className="text-gradient-primary">.ai</span>
              </span>
            </a>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-8">
              We craft intelligent automation systems that supercharge your business growth. 
              Transform your operations and leave competitors behind!
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group relative"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-r ${social.gradient} p-[1px]`}>
                    <div className="w-full h-full bg-dark rounded-xl flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                      <social.icon className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA & Links */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {/* Company Links */}
            <div>
              <h4 className="text-white font-bold text-lg md:text-xl mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-gradient-to-b from-primary to-neon-purple rounded-full" />
                Company
              </h4>
              <ul className="space-y-4">
                {['How it works', 'Success Stories', 'Solutions', 'About Us'].map((item, i) => (
                  <li key={i}>
                    <a 
                      href={i === 0 ? '#how-it-works' : i === 1 ? '#success-stories' : i === 2 ? '#solutions' : '#'} 
                      className="text-gray-400 hover:text-white transition-colors text-sm md:text-base flex items-center gap-2 group"
                    >
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-lg md:text-xl mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-gradient-to-b from-accent to-primary rounded-full" />
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:supernova.ai.agency@gmail.com" 
                    className="text-gray-400 hover:text-primary transition-colors text-sm md:text-base flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    supernova.ai.agency@gmail.com
                  </a>
                </li>
                <li>
                  <div className="text-gray-400 text-sm md:text-base flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-emerald-400" />
                    </div>
                    Available 24/7
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-gray-500 text-xs mt-4">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span>Response within 1 hour</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8">
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-primary rounded-full" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            &copy; 2025 <span className="text-white font-semibold">Supernova AI</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-neon-purple transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Big Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <div className="text-[20vw] font-black text-white whitespace-nowrap -translate-x-1/4">
          SUPERNOVA • AI AUTOMATION • SMART SOLUTIONS •
        </div>
      </div>
    </footer>
  );
};

export default Footer;
