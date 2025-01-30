import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 glass-effect border-b border-emerald-100/20"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="w-8 h-8 text-emerald-500" />
            </motion.div>
            <span className="text-2xl font-bold gradient-text">AppSnap</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Services', 'Packages', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-700 hover:text-emerald-500 transition-colors
                         after:content-[''] after:absolute after:left-0 after:bottom-0
                         after:h-0.5 after:w-0 after:bg-emerald-500
                         after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions section */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-emerald-600 px-6 py-4`}>
        <div className="flex flex-col space-y-4">
          <a href="#about" className="hover:text-emerald-200 transition" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" className="hover:text-emerald-200 transition" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#packages" className="hover:text-emerald-200 transition" onClick={() => setIsMenuOpen(false)}>Packages</a>
          <a href="#testimonials" className="hover:text-emerald-200 transition" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="hover:text-emerald-200 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </motion.header>
  );
} 