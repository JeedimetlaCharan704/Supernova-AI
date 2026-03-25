import React from 'react';

import { Zap, Mail, Phone, Instagram, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/ironwings_ai?igsh=N3poemhwNm1lb3F1', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jeedimetla-charan-089a83339', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/JeedimetlaCharan704', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-rich-black border-t border-white/[0.05] relative overflow-hidden pt-24 pb-10">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-luxury-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold to-luxury-gold-dark rounded-xl flex items-center justify-center text-rich-black shadow-lg shadow-luxury-gold/20 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="text-2xl font-bold text-white tracking-wide group-hover:text-luxury-gold transition-colors duration-300">
                IronWings<span className="text-luxury-gold">.ai</span>
              </span>
            </a>
            <p className="text-gray-400 text-base leading-relaxed max-w-md mb-8">
              We craft intelligent automation systems that scale your operations to unprecedented heights. Your business, elevated to excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:bg-luxury-gold hover:text-rich-black hover:border-luxury-gold transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-luxury-gold rounded-full" />
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  How it works
                </a>
              </li>
              <li>
                <a href="#success-stories" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-luxury-gold rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:ironwingsai@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-luxury-gold transition-colors duration-300 group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>ironwingsai@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>Available 24/7</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2025 IronWings AI. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-gray-500 hover:text-luxury-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-luxury-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Big Watermark */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none select-none whitespace-nowrap">
        <span className="text-[20vw] font-black text-white">IRONWINGS</span>
      </div>
    </footer>
  );
};

export default Footer;
