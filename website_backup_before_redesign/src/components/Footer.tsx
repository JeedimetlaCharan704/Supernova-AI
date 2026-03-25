import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Our Solutions', href: '#solutions' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Our Process', href: '#our-process' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Ethical AI Solutions', href: '#ethical-ai' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/ironwings_ai?igsh=N3poemhwNm1lb3F1', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jeedimetla-charan-089a83339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/JeedimetlaCharan704', label: 'GitHub' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer Content */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Brand Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-ai-green rounded-full flex items-center justify-center">
                <Zap className="w-7 h-7 text-black" />
              </div>
              <span className="text-2xl font-bold">IronWings AI</span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-300 leading-relaxed max-w-md"
              variants={itemVariants}
            >
              Your Business, Uncaged by AI.
              <br />
              We build intelligent automation systems that scale your operations at the speed of light.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-ai-green" />
                <a href="mailto:ironwingsai@gmail.com" className="hover:text-ai-green transition-colors">
                  ironwingsai@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-ai-green" />
                <span>Available 24/7 for consultations</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Quick Links */}
          <motion.div
            className="lg:text-right"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h3
              className="text-lg font-semibold mb-6"
              variants={itemVariants}
            >
              Quick Links
            </motion.h3>
            <motion.div
              className="flex flex-col lg:flex-row lg:justify-end gap-4 mb-8"
              variants={itemVariants}
            >
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-ai-green transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex lg:justify-end gap-4"
              variants={itemVariants}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-ai-green hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Copyright */}
            <motion.p
              className="text-sm text-gray-400"
              variants={itemVariants}
            >
              © 2025 IronWings AI. All rights reserved.
            </motion.p>

            {/* Legal Links */}
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={itemVariants}
            >
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-ai-green transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;