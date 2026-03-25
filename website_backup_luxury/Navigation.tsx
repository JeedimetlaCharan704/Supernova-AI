import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Diamond } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Our Process', href: '#our-process' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-header py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-luxury-gold via-luxury-gold-light to-luxury-gold-dark rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-luxury-gold/20">
                <Zap className="w-5 h-5 text-rich-black fill-current" />
              </div>
              <div className="absolute -inset-1 bg-luxury-gold/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide group-hover:text-luxury-gold transition-colors duration-300">
              IronWings<span className="text-luxury-gold">.ai</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://calendly.com/ironwingsai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-button text-sm py-2.5"
            >
              <Diamond className="w-4 h-4" />
              Get in touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-80 z-50 bg-rich-black/95 backdrop-blur-xl border-l border-white/5 shadow-2xl md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-xl font-bold text-white">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      href={item.href}
                      className="text-lg font-medium text-gray-300 hover:text-luxury-gold hover:bg-white/[0.03] px-4 py-3 rounded-xl transition-all border border-transparent hover:border-luxury-gold/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href="https://calendly.com/ironwingsai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-button w-full justify-center text-center"
                  >
                    Book Strategy Call
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
