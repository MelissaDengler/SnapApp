import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white fixed w-full z-50"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className="w-8 h-8" />
          <span className="text-2xl font-bold">AppSnap</span>
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
          <a href="#about" className="hover:text-emerald-200 transition">About</a>
          <a href="#services" className="hover:text-emerald-200 transition">Services</a>
          <a href="#packages" className="hover:text-emerald-200 transition">Packages</a>
          <a href="#testimonials" className="hover:text-emerald-200 transition">Testimonials</a>
          <a href="#contact" className="hover:text-emerald-200 transition">Contact</a>
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