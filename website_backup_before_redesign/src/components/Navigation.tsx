import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Our Process', href: '#our-process' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full border-b border-gray-700/30 bg-black/80 backdrop-blur-sm z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-black" />
            </div>
            <span className="text-xl font-bold text-white">IronWings AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://calendly.com/ironwingsai/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-emerald-400 transition-colors duration-300"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Slide-in Panel */}
            <motion.div
              className="absolute top-0 right-0 h-full w-80 bg-gray-900/95 border-l border-gray-700/30 backdrop-blur-sm"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2 mb-12">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-xl font-bold text-white">IronWings AI</span>
                </div>

                {/* Navigation Items */}
                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a 
                    href="https://calendly.com/ironwingsai/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-emerald-400 transition-colors duration-300 justify-center mt-8 block text-center"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;