import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const navItems = isHomePage ? [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'How It Works', href: '#how-it-works' },
  ] : [
    { name: 'Voice Agents', href: '/voice-agents' },
    { name: 'Chat Support', href: '/chat-support' },
    { name: 'Lead Gen', href: '/lead-gen' },
    { name: 'Workflow Magic', href: '/workflow-magic' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass-header py-1.5' 
            : 'bg-transparent py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex items-center justify-between">
          {/* Logo - Smaller for mobile */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary via-neon-purple to-accent rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 shadow-lg shadow-primary/30">
              <Zap className="w-4 h-4 text-white fill-current" />
            </div>
            <span className="text-base md:text-lg font-bold text-white tracking-wide">
              Supernova<span className="text-primary-light">.ai</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group py-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group py-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                </a>
              )
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://calendly.com/supernova-ai-agency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button text-xs py-2 px-4"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full width on small screens */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-dark/80 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[280px] z-50 bg-dark/95 backdrop-blur-xl border-l border-white/10 shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full p-5">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-bold text-white">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    item.href.startsWith('/') ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-base font-medium text-gray-300 hover:text-primary hover:bg-white/5 px-4 py-3 rounded-lg transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-300 hover:text-primary hover:bg-white/5 px-4 py-3 rounded-lg transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <a
                    href="https://calendly.com/supernova-ai-agency/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-button w-full justify-center text-center text-sm py-3"
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
