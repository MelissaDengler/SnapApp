import React, { useState, useEffect } from 'react';
import { 
  Zap, Code, Rocket, Clock, CheckCircle, Package, 
  Users, ArrowRight, Mail, Phone, MapPin, Star,
  Menu, X, Send, FileText, Upload, AlertCircle, Shield,
  BarChart, Palette, Cloud, Info
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Header } from './components/layout/Header';
import { CommandMenu } from './components/CommandMenu';
import { Seo } from './components/Seo';
import { useScrollPosition } from './hooks/use-scroll-position';
import { ChatBot } from './components/ui/ChatBot';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { SectionTransition } from './components/ui/SectionTransition';
import { Tooltip } from './components/ui/Tooltip';
import { Blog } from './components/sections/Blog';
import { HeartsAnimation } from './components/ui/HeartsAnimation';
import { useDarkMode } from '@/hooks/useDarkMode';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface PRDFormData {
  projectName: string;
  companyName: string;
  contactEmail: string;
  phone: string;
  budget: string;
  timeline: string;
  platform: string[];
  description: string;
  features: string;
  targetAudience: string;
  competitors: string;
  successCriteria: string;
  additionalInfo: string;
  termsAccepted: boolean;
  industryType: string;
  existingTech: string;
  userAuthentication: boolean;
  dataStorage: boolean;
  thirdPartyIntegrations: string[];
  monetizationStrategy: string;
  scalabilityRequirements: string;
  accessibilityRequirements: string;
  securityRequirements: string[];
  analyticsRequirements: boolean;
  multiLanguageSupport: boolean;
  offlineCapabilities: boolean;
  projectGoals: string;
  projectScope: string;
  keyMilestones: string[];
  projectConstraints: string;
  businessModel: string;
  revenueStreams: string[];
  marketStrategy: string;
  competitiveAdvantage: string;
  successMetrics: string[];
  userPersonas: string;
  userJourneys: string;
  userPainPoints: string;
  accessibilityNeeds: string[];
  preferredTechnologies: string[];
  existingSystemsIntegration: string;
  performanceRequirements: {
    loadTime: string;
    concurrent: string;
    availability: string;
  };
  deviceSupport: string[];
  browserSupport: string[];
  dataTypes: string[];
  dataRetention: string;
  backupStrategy: string;
  dataCompliance: string[];
  brandGuidelines: boolean;
  designPreferences: string;
  moodboardLinks: string;
  specialAnimations: boolean;
  hostingPreference: string;
  maintenancePlan: string;
  monitoringRequirements: string[];
  updateFrequency: string;
}

interface TooltipState {
  [key: string]: boolean;
}

const queryClient = new QueryClient();

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isPRDModalOpen, setIsPRDModalOpen] = useState(false);
  const [prdFormData, setPRDFormData] = useState<PRDFormData>({
    projectName: '',
    companyName: '',
    contactEmail: '',
    phone: '',
    budget: '',
    timeline: '',
    platform: [],
    description: '',
    features: '',
    targetAudience: '',
    competitors: '',
    successCriteria: '',
    additionalInfo: '',
    termsAccepted: false,
    industryType: '',
    existingTech: '',
    userAuthentication: false,
    dataStorage: false,
    thirdPartyIntegrations: [],
    monetizationStrategy: '',
    scalabilityRequirements: '',
    accessibilityRequirements: '',
    securityRequirements: [],
    analyticsRequirements: false,
    multiLanguageSupport: false,
    offlineCapabilities: false,
    projectGoals: '',
    projectScope: '',
    keyMilestones: [],
    projectConstraints: '',
    businessModel: '',
    revenueStreams: [],
    marketStrategy: '',
    competitiveAdvantage: '',
    successMetrics: [],
    userPersonas: '',
    userJourneys: '',
    userPainPoints: '',
    accessibilityNeeds: [],
    preferredTechnologies: [],
    existingSystemsIntegration: '',
    performanceRequirements: {
      loadTime: '',
      concurrent: '',
      availability: ''
    },
    deviceSupport: [],
    browserSupport: [],
    dataTypes: [],
    dataRetention: '',
    backupStrategy: '',
    dataCompliance: [],
    brandGuidelines: false,
    designPreferences: '',
    moodboardLinks: '',
    specialAnimations: false,
    hostingPreference: '',
    maintenancePlan: '',
    monitoringRequirements: [],
    updateFrequency: ''
  });

  const scrollPosition = useScrollPosition();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [tooltips, setTooltips] = useState<TooltipState>({});

  const [showHearts, setShowHearts] = useState(false);

  const [isDark] = useDarkMode();

  useEffect(() => {
    // Add dark mode class to html element
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTooltip = (fieldId: string) => {
    setTooltips(prev => ({
      ...prev,
      [fieldId]: !prev[fieldId]
    }));
  };

  // Add scroll-based animations and effects
  const handleScroll = () => {
    // Your scroll logic
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handlePRDSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('PRD Form submitted:', prdFormData);
    // Handle form submission here
    setIsPRDModalOpen(false);
    setPRDFormData({
      projectName: '',
      companyName: '',
      contactEmail: '',
      phone: '',
      budget: '',
      timeline: '',
      platform: [],
      description: '',
      features: '',
      targetAudience: '',
      competitors: '',
      successCriteria: '',
      additionalInfo: '',
      termsAccepted: false,
      industryType: '',
      existingTech: '',
      userAuthentication: false,
      dataStorage: false,
      thirdPartyIntegrations: [],
      monetizationStrategy: '',
      scalabilityRequirements: '',
      accessibilityRequirements: '',
      securityRequirements: [],
      analyticsRequirements: false,
      multiLanguageSupport: false,
      offlineCapabilities: false,
      projectGoals: '',
      projectScope: '',
      keyMilestones: [],
      projectConstraints: '',
      businessModel: '',
      revenueStreams: [],
      marketStrategy: '',
      competitiveAdvantage: '',
      successMetrics: [],
      userPersonas: '',
      userJourneys: '',
      userPainPoints: '',
      accessibilityNeeds: [],
      preferredTechnologies: [],
      existingSystemsIntegration: '',
      performanceRequirements: {
        loadTime: '',
        concurrent: '',
        availability: ''
      },
      deviceSupport: [],
      browserSupport: [],
      dataTypes: [],
      dataRetention: '',
      backupStrategy: '',
      dataCompliance: [],
      brandGuidelines: false,
      designPreferences: '',
      moodboardLinks: '',
      specialAnimations: false,
      hostingPreference: '',
      maintenancePlan: '',
      monitoringRequirements: [],
      updateFrequency: ''
    });
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "AppSnap delivered our MVP in just 2 weeks. The quality and speed were exceptional!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateCo",
      content: "The professional package was perfect for our needs. Great communication throughout.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, Enterprise Solutions",
      content: "Their enterprise solutions are top-notch. Highly recommend for large-scale projects.",
      rating: 5
    }
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Seo />
        <CommandMenu />
        <Header />
        <ScrollProgress />

        {/* Hero Section */}
        <section className="pt-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 
                           dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 text-white">
          <div className="container mx-auto px-6 py-24 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Transform Your Ideas into
                <span className="block mt-2 text-emerald-200">Reality</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-2xl mx-auto">
                An App in a Snap™ - Rapid Development Solutions for Modern Businesses
              </p>
              <div className="mt-8 flex items-center justify-center relative">
                <button
                  onClick={() => {
                    setShowHearts(true);
                    // Open PRD modal after a slight delay for hearts animation
                    setTimeout(() => setIsPRDModalOpen(true), 300);
                    // Reset hearts animation
                    setTimeout(() => setShowHearts(false), 2000);
                  }}
                  className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold 
                             hover:bg-emerald-50 transition duration-300 flex items-center space-x-2
                             shadow-depth hover-lift"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                {showHearts && <HeartsAnimation />}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-white via-emerald-50 to-white 
                           dark:from-gray-900 dark:via-emerald-900/10 dark:to-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              Accelerating Digital Innovation
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center transform hover:scale-105 transition duration-300">
                <Clock className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">From concept to deployment in record time</p>
              </div>
              <div className="text-center transform hover:scale-105 transition duration-300">
                <Code className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cutting-Edge Tech</h3>
                <p className="text-gray-600 dark:text-gray-300">Built with the latest technologies</p>
              </div>
              <div className="text-center transform hover:scale-105 transition duration-300">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-gray-600 dark:text-gray-300">Rigorous testing and optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-24 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-50 
                           dark:from-emerald-900/40 dark:via-emerald-800/20 dark:to-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Our Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Package */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 
                                 shadow-lg hover:shadow-xl transition duration-300 
                                 border border-emerald-100 dark:border-emerald-800">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Rapid MVP
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Perfect for validating your app idea quickly and efficiently
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Core feature development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Basic user authentication</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Essential UI/UX design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">2-week delivery timeline</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    $10,000
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/ project</span>
                </div>
              </div>

              {/* Pro Package */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 
                                 shadow-lg hover:shadow-xl transition duration-300 
                                 border border-emerald-100 dark:border-emerald-800 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Professional Launch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Complete solution for serious businesses ready to scale
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Full feature development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Advanced authentication & security</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Premium UI/UX with animations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">API integration & documentation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">4-6 week delivery timeline</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    $20,000
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/ project</span>
                </div>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 
                                 shadow-lg hover:shadow-xl transition duration-300 
                                 border border-emerald-100 dark:border-emerald-800">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Enterprise Scale
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Custom solutions for large organizations with complex needs
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Custom architecture & scaling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Enterprise-grade security</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Dedicated project manager</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">24/7 priority support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Custom timeline & roadmap</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    Contact Us
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 block mt-1 text-sm">
                    For custom enterprise pricing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-50 
                           dark:from-emerald-900/40 dark:via-emerald-800/20 dark:to-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 
                             shadow-lg hover:shadow-xl transition duration-300 
                             border border-emerald-100 dark:border-emerald-800"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-emerald-500 dark:text-emerald-400 fill-current" 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-emerald-100 dark:border-emerald-800/50 pt-4">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 
                           dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <Blog />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-white to-emerald-50 
                           dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200 dark:bg-emerald-800/30 
                            rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-200 dark:bg-teal-800/30 
                            rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-float delay-300" />
          </div>

          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Get In Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Ready to transform your idea into reality? Let's start the conversation.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 
                              shadow-lg border border-gray-100 dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                                 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400
                                 transition-colors duration-200 ease-in-out
                                 placeholder-gray-400 dark:placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                                 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400
                                 transition-colors duration-200 ease-in-out
                                 placeholder-gray-400 dark:placeholder-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400
                               transition-colors duration-200 ease-in-out
                               placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
                      <a href="mailto:contact@appsnap.dev" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors">
                        <Mail className="w-5 h-5" />
                        <span>contact@appsnap.dev</span>
                      </a>
                      <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors">
                        <Phone className="w-5 h-5" />
                        <span>+1 (234) 567-890</span>
                      </a>
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-emerald-500 text-white px-8 py-3 rounded-full 
                               hover:bg-emerald-600 transform hover:-translate-y-0.5 
                               transition-all duration-200 flex items-center space-x-2
                               shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </div>
                </form>
              </div>

              {/* Social proof or additional contact info */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Trusted by companies worldwide
                </p>
                <div className="flex justify-center items-center space-x-8 opacity-50">
                  {/* Add your client logos here */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRD Modal */}
        {isPRDModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-0 sm:p-4"
          >
            <AnimatePresence>
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-gray-900 w-full h-full sm:h-auto sm:rounded-2xl sm:max-w-4xl sm:w-full 
                           sm:max-h-[90vh] overflow-y-auto shadow-depth modal-mobile sm:modal-desktop"
              >
                <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 border-b border-gray-100 dark:border-gray-800 rounded-t-2xl shadow-sm">
                  <div className="p-6 flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project Requirements Document</h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Tell us about your dream project</p>
                    </div>
                    <button 
                      onClick={() => setIsPRDModalOpen(false)}
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 
                               hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <form onSubmit={handlePRDSubmit} className="space-y-8">
                    {/* Project Overview Section */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Overview</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6">
                        <div className="form-section hover:shadow-md p-4 rounded-lg relative dark:bg-gray-800/50">
                          <div className="flex items-center justify-between mb-1">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              Project Goals
                            </label>
                            <button
                              type="button"
                              onClick={() => toggleTooltip('projectGoals')}
                              className="text-gray-400 hover:text-emerald-500 transition-colors"
                            >
                              <Info className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <Tooltip
                            isOpen={tooltips.projectGoals}
                            onClose={() => toggleTooltip('projectGoals')}
                          >
                            "To create a mobile app that helps users track their daily water intake, 
                            set hydration goals, and receive smart reminders. The app should increase 
                            user's daily water consumption by 30% within the first month."
                          </Tooltip>
                          
                          <textarea
                            value={prdFormData.projectGoals}
                            onChange={(e) => setPRDFormData({...prdFormData, projectGoals: e.target.value})}
                            placeholder="What are the main objectives of your project?"
                            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 
                                     dark:text-gray-100 dark:placeholder-gray-500
                                     focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            rows={3}
                            required
                          />
                        </div>

                        <div className="form-section hover:shadow-md p-4 rounded-lg dark:bg-gray-800/50">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Key Milestones
                          </label>
                          <div className="space-y-2">
                            {['MVP Launch', 'Beta Testing', 'Full Release', 'Market Expansion'].map((milestone) => (
                              <label key={milestone} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={prdFormData.keyMilestones.includes(milestone)}
                                  onChange={(e) => {
                                    const updatedMilestones = e.target.checked
                                      ? [...prdFormData.keyMilestones, milestone]
                                      : prdFormData.keyMilestones.filter(m => m !== milestone);
                                    setPRDFormData({...prdFormData, keyMilestones: updatedMilestones});
                                  }}
                                  className="rounded border-gray-300 dark:border-gray-600 text-emerald-500 
                                           focus:ring-emerald-500 dark:bg-gray-700"
                                />
                                <span className="text-gray-700 dark:text-gray-300">{milestone}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Business Requirements Section */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <BarChart className="w-5 h-5 text-emerald-500" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business Requirements</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-section hover:shadow-md p-4 rounded-lg">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Business Model
                          </label>
                          <select
                            value={prdFormData.businessModel}
                            onChange={(e) => setPRDFormData({...prdFormData, businessModel: e.target.value})}
                            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 
                                     dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            required
                          >
                            <option value="" className="dark:text-gray-900">Select Business Model</option>
                            <option value="b2c" className="dark:text-gray-900">B2C</option>
                            <option value="b2b" className="dark:text-gray-900">B2B</option>
                            <option value="b2b2c" className="dark:text-gray-900">B2B2C</option>
                            <option value="c2c" className="dark:text-gray-900">C2C</option>
                            <option value="marketplace" className="dark:text-gray-900">Marketplace</option>
                          </select>
                        </div>

                        <div className="form-section hover:shadow-md p-4 rounded-lg">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Revenue Streams
                          </label>
                          <div className="space-y-2">
                            {[
                              'Subscription Fees',
                              'Transaction Fees',
                              'Advertising',
                              'Premium Features',
                              'Data Monetization',
                              'Affiliate Marketing'
                            ].map((stream) => (
                              <label key={stream} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={prdFormData.revenueStreams.includes(stream)}
                                  onChange={(e) => {
                                    const updatedStreams = e.target.checked
                                      ? [...prdFormData.revenueStreams, stream]
                                      : prdFormData.revenueStreams.filter(s => s !== stream);
                                    setPRDFormData({...prdFormData, revenueStreams: updatedStreams});
                                  }}
                                  className="rounded border-gray-300 dark:border-gray-600 text-emerald-500 
                                           focus:ring-emerald-500 dark:bg-gray-700"
                                />
                                <span className="text-gray-700 dark:text-gray-300">{stream}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* User Requirements Section */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="w-5 h-5 text-emerald-500" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Requirements</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6">
                        <div className="form-section hover:shadow-md p-4 rounded-lg relative dark:bg-gray-800/50">
                          <div className="flex items-center justify-between mb-1">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              User Personas
                            </label>
                            <button
                              type="button"
                              onClick={() => toggleTooltip('userPersonas')}
                              className="text-gray-400 hover:text-emerald-500 transition-colors"
                            >
                              <Info className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <Tooltip
                            isOpen={tooltips.userPersonas}
                            onClose={() => toggleTooltip('userPersonas')}
                          >
                            "Primary: Health-conscious professionals (25-40 years old) who use smartphones daily.
                            Secondary: Fitness trainers who want to track their clients' hydration.
                            Both groups are tech-savvy and value convenience."
                          </Tooltip>
                          
                          <textarea
                            value={prdFormData.userPersonas}
                            onChange={(e) => setPRDFormData({...prdFormData, userPersonas: e.target.value})}
                            placeholder="Describe your target users (age, occupation, tech-savviness, etc.)"
                            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 
                                     dark:text-gray-100 dark:placeholder-gray-500
                                     focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            rows={3}
                            required
                          />
                        </div>

                        <div className="form-section hover:shadow-md p-4 rounded-lg dark:bg-gray-800/50">
                          <div className="flex items-center justify-between mb-1">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              User Pain Points
                            </label>
                            <button
                              type="button"
                              onClick={() => toggleTooltip('userPainPoints')}
                              className="text-gray-400 hover:text-emerald-500 transition-colors"
                            >
                              <Info className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <Tooltip
                            isOpen={tooltips.userPainPoints}
                            onClose={() => toggleTooltip('userPainPoints')}
                            title="Pain Points Example:"
                          >
                            <ul className="space-y-2">
                              <li>• Users struggle to maintain consistent water intake due to busy schedules</li>
                              <li>• Existing apps don't consider individual hydration needs based on activity level</li>
                              <li>• No easy way to track water intake across different container sizes</li>
                              <li>• Lack of meaningful insights about hydration patterns over time</li>
                              <li>• Missing social features to encourage accountability</li>
                            </ul>
                          </Tooltip>
                          
                          <textarea
                            value={prdFormData.userPainPoints}
                            onChange={(e) => setPRDFormData({...prdFormData, userPainPoints: e.target.value})}
                            placeholder="What problems are your users facing that your app will solve?"
                            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 
                                     dark:text-gray-100 dark:placeholder-gray-500
                                     focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            rows={3}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Technical Requirements Section */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Code className="w-5 h-5 text-emerald-500" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Technical Requirements</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-section hover:shadow-md p-4 rounded-lg relative dark:bg-gray-800/50">
                          <div className="flex items-center justify-between mb-1">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              Performance Requirements
                            </label>
                            <button
                              type="button"
                              onClick={() => toggleTooltip('performance')}
                              className="text-gray-400 hover:text-emerald-500 transition-colors"
                            >
                              <Info className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <Tooltip
                            isOpen={tooltips.performance}
                            onClose={() => toggleTooltip('performance')}
                          >
                            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                              <li>• Under 1s: Best for consumer apps with frequent use</li>
                              <li>• Under 2s: Standard for most business applications</li>
                              <li>• Under 3s: Acceptable for data-heavy operations</li>
                            </ul>
                          </Tooltip>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm text-gray-600">Page Load Time</label>
                              <select
                                value={prdFormData.performanceRequirements.loadTime}
                                onChange={(e) => setPRDFormData({
                                  ...prdFormData,
                                  performanceRequirements: {
                                    ...prdFormData.performanceRequirements,
                                    loadTime: e.target.value
                                  }
                                })}
                                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 
                                         dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                              >
                                <option value="" className="dark:text-gray-900">Select Target Load Time</option>
                                <option value="1s" className="dark:text-gray-900">Under 1 second</option>
                                <option value="2s" className="dark:text-gray-900">Under 2 seconds</option>
                                <option value="3s" className="dark:text-gray-900">Under 3 seconds</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="text-sm text-gray-600">Concurrent Users</label>
                              <select
                                value={prdFormData.performanceRequirements.concurrent}
                                onChange={(e) => setPRDFormData({
                                  ...prdFormData,
                                  performanceRequirements: {
                                    ...prdFormData.performanceRequirements,
                                    concurrent: e.target.value
                                  }
                                })}
                                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 
                                         dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                              >
                                <option value="" className="dark:text-gray-900">Select Concurrent Users</option>
                                <option value="100" className="dark:text-gray-900">Up to 100</option>
                                <option value="1000" className="dark:text-gray-900">Up to 1,000</option>
                                <option value="10000" className="dark:text-gray-900">Up to 10,000</option>
                                <option value="100000" className="dark:text-gray-900">Up to 100,000+</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="form-section hover:shadow-md p-4 rounded-lg">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Device & Browser Support
                          </label>
                          <div className="space-y-2">
                            {['iOS', 'Android', 'Windows', 'macOS', 'Linux'].map((device) => (
                              <label key={device} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={prdFormData.deviceSupport.includes(device)}
                                  onChange={(e) => {
                                    const updatedDevices = e.target.checked
                                      ? [...prdFormData.deviceSupport, device]
                                      : prdFormData.deviceSupport.filter(d => d !== device);
                                    setPRDFormData({...prdFormData, deviceSupport: updatedDevices});
                                  }}
                                  className="rounded border-gray-300 dark:border-gray-600 text-emerald-500 
                                           focus:ring-emerald-500 dark:bg-gray-700"
                                />
                                <span className="text-gray-700 dark:text-gray-300">{device}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Design Requirements Section */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Palette className="w-5 h-5 text-emerald-500" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Design Requirements</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-section hover:shadow-md p-4 rounded-lg">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Brand Guidelines
                          </label>
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={prdFormData.brandGuidelines}
                                onChange={(e) => setPRDFormData({...prdFormData, brandGuidelines: e.target.checked})}
                                className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                              />
                              <span>Existing Brand Guidelines Available</span>
                            </label>
                          </div>
                          <textarea
                            value={prdFormData.designPreferences}
                            onChange={(e) => setPRDFormData({...prdFormData, designPreferences: e.target.value})}
                            placeholder="Describe your design preferences, color schemes, or specific style requirements"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 mt-4"
                            rows={3}
                          />
                        </div>

                        <div className="form-section hover:shadow-md p-4 rounded-lg">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Special Requirements
                          </label>
                          <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={prdFormData.specialAnimations}
                                onChange={(e) => setPRDFormData({...prdFormData, specialAnimations: e.target.checked})}
                                className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                              />
                              <span>Custom Animations Required</span>
                            </label>
                          </div>
                          <input
                            type="url"
                            value={prdFormData.moodboardLinks}
                            onChange={(e) => setPRDFormData({...prdFormData, moodboardLinks: e.target.value})}
                            placeholder="Links to inspiration/moodboard (optional)"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 mt-4"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Deployment & Maintenance Section */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Cloud className="w-5 h-5 text-emerald-500" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Deployment & Maintenance</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-section hover:shadow-md p-4 rounded-lg">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Hosting Preference
                          </label>
                          <select
                            value={prdFormData.hostingPreference}
                            onChange={(e) => setPRDFormData({...prdFormData, hostingPreference: e.target.value})}
                            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 
                                     dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          >
                            <option value="" className="dark:text-gray-900">Select Hosting Preference</option>
                            <option value="aws" className="dark:text-gray-900">AWS</option>
                            <option value="gcp" className="dark:text-gray-900">Google Cloud</option>
                            <option value="azure" className="dark:text-gray-900">Microsoft Azure</option>
                            <option value="custom" className="dark:text-gray-900">Custom Solution</option>
                          </select>
                        </div>

                        <div className="form-section hover:shadow-md p-4 rounded-lg">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Update Frequency
                          </label>
                          <select
                            value={prdFormData.updateFrequency}
                            onChange={(e) => setPRDFormData({...prdFormData, updateFrequency: e.target.value})}
                            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 
                                     dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          >
                            <option value="" className="dark:text-gray-900">Select Update Frequency</option>
                            <option value="weekly" className="dark:text-gray-900">Weekly</option>
                            <option value="biweekly" className="dark:text-gray-900">Bi-weekly</option>
                            <option value="monthly" className="dark:text-gray-900">Monthly</option>
                            <option value="quarterly" className="dark:text-gray-900">Quarterly</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Submit Section */}
                    <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 
                                   p-4 rounded-b-2xl shadow-depth">
                      <div className="flex justify-between items-center">
                        <button
                          type="button"
                          onClick={() => setIsPRDModalOpen(false)}
                          className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-full 
                                   hover:bg-gray-50 dark:hover:bg-gray-800 
                                   transition duration-300 flex items-center space-x-2
                                   text-gray-700 dark:text-gray-300"
                        >
                          <X className="w-4 h-4" />
                          <span>Cancel</span>
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 
                                   transition duration-300 flex items-center space-x-2 shadow-depth hover-lift"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit PRD</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}

        <ChatBot />
        <Analytics />
      </div>
    </QueryClientProvider>
  );
}

export default App;