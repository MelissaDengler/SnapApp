import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle1, ThemeToggle2 } from '../ui/ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a 
              href="/" 
              className="relative group flex items-center space-x-2"
            >
              {/* Logo Icon with Pop Animation */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <Camera className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
                </motion.div>
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 -z-10 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-full blur-lg"
                />
              </motion.div>

              {/* App Name with Glow Animation */}
              <div className="relative">
                <motion.span 
                  className="text-2xl font-bold relative z-10 flex items-center space-x-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative inline-block group-hover:scale-[1.02] transition-transform duration-300
                               bg-clip-text text-transparent bg-gradient-to-r 
                               from-emerald-600 to-emerald-500
                               dark:from-emerald-400 dark:to-emerald-300"
                  >
                    Snap
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="relative inline-block text-emerald-600 dark:text-emerald-400 
                             group-hover:scale-[1.02] transition-transform duration-300"
                  >
                    App
                  </motion.span>
                </motion.span>

                {/* Enhanced Glow Effect */}
                <motion.div
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 
                                blur-xl rounded-full" />
                </motion.div>

                {/* Sparkle Effects */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  initial={false}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-emerald-400/50 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Packages', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-200 hover:text-emerald-500 
                         dark:hover:text-emerald-400 transition-colors relative
                         after:absolute after:left-0 after:bottom-0 after:h-0.5 
                         after:w-0 after:bg-emerald-500 dark:after:bg-emerald-400
                         after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions section with Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle1 />
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" /> : 
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
          >
            <div className="container mx-auto px-6 py-4">
              <motion.div 
                className="flex flex-col space-y-4"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {['About', 'Packages', 'Testimonials', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-200 hover:text-emerald-500 
                             dark:hover:text-emerald-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 