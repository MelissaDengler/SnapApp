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
import { motion } from 'framer-motion';
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

function App() {
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
      <Seo />
      <CommandMenu />
      <Header />
      <ScrollProgress />
      
      <div className="min-h-screen bg-white dark-mode-transition">
        {/* Hero Section */}
        <SectionTransition>
          <div className="pt-20">
            <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 text-white relative overflow-hidden">
              {/* Abstract Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] bg-repeat rotate-45"></div>
              </div>
              
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
            </div>
          </div>
        </SectionTransition>

        {/* About Section */}
        <SectionTransition>
          <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                Accelerating Digital Innovation
              </h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center transform hover:scale-105 transition duration-300">
                  <Clock className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Lightning Fast Delivery</h3>
                  <p className="text-gray-600">From concept to deployment in record time</p>
                </div>
                <div className="text-center transform hover:scale-105 transition duration-300">
                  <Code className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cutting-Edge Tech</h3>
                  <p className="text-gray-600">Built with the latest technologies</p>
                </div>
                <div className="text-center transform hover:scale-105 transition duration-300">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                  <p className="text-gray-600">Rigorous testing and optimization</p>
                </div>
              </div>
            </div>
          </section>
        </SectionTransition>

        {/* Packages Section */}
        <SectionTransition>
          <section id="packages" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                Development Packages
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Starter Package */}
                <div className="border rounded-lg p-8 hover:shadow-xl transition duration-300 
                            transform hover:-translate-y-2 bg-white shadow-depth hover-lift
                            relative overflow-hidden">
                  {/* Add a subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-50"></div>
                  
                  {/* Package content with enhanced styling */}
                  <div className="relative z-10">
                    <Package className="w-12 h-12 text-emerald-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-4 gradient-text">Rapid MVP</h3>
                    <p className="text-gray-600 mb-6">Perfect for validating your app idea quickly</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                        Core feature development
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                        Basic UI/UX design
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                        2-week delivery
                      </li>
                    </ul>
                    <button className="w-full bg-emerald-500 text-white py-2 rounded-full hover:bg-emerald-600 transition">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Pro Package */}
                <div className="border rounded-lg p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-2 bg-emerald-50 relative">
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                  <Rocket className="w-12 h-12 text-emerald-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Professional Launch</h3>
                  <p className="text-gray-600 mb-6">Complete solution for serious businesses</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                      Full feature set
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                      Advanced UI/UX design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                      4-week delivery
                    </li>
                  </ul>
                  <button className="w-full bg-emerald-500 text-white py-2 rounded-full hover:bg-emerald-600 transition">
                    Learn More
                  </button>
                </div>

                {/* Enterprise Package */}
                <div className="border rounded-lg p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                  <Users className="w-12 h-12 text-emerald-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Enterprise Scale</h3>
                  <p className="text-gray-600 mb-6">Custom solutions for large organizations</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                      Custom architecture
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                      Premium support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                      Flexible timeline
                    </li>
                  </ul>
                  <button className="w-full bg-emerald-500 text-white py-2 rounded-full hover:bg-emerald-600 transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </section>
        </SectionTransition>

        {/* Testimonials Section */}
        <SectionTransition>
          <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                Client Success Stories
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-emerald-600">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionTransition>

        {/* Blog Section */}
        <SectionTransition>
          <Blog />
        </SectionTransition>

        {/* Contact Section */}
        <SectionTransition>
          <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                Get In Touch
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-emerald-500 mr-4" />
                      <span>contact@appsnap.dev</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-emerald-500 mr-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 text-emerald-500 mr-4" />
                      <span>123 Innovation Street, Tech City</span>
                    </div>
                  </div>
                </div>
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-emerald-500 text-white py-2 px-6 rounded-full hover:bg-emerald-600 transition duration-300 flex items-center justify-center"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </SectionTransition>

        {/* PRD Modal */}
        {isPRDModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-0 sm:p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white w-full h-full sm:h-auto sm:rounded-2xl sm:max-w-4xl sm:w-full 
                         sm:max-h-[90vh] overflow-y-auto shadow-depth modal-mobile sm:modal-desktop"
            >
              <div className="sticky top-0 bg-white z-10 border-b border-gray-100 rounded-t-2xl shadow-sm">
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold gradient-text">Project Requirements Document</h2>
                    <p className="text-gray-600 text-sm mt-1">Tell us about your dream project</p>
                  </div>
                  <button 
                    onClick={() => setIsPRDModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors"
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
                      <h3 className="text-lg font-semibold">Project Overview</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div className="form-section hover:shadow-md p-4 rounded-lg relative">
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-sm font-medium text-gray-700">
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
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          rows={3}
                          required
                        />
                      </div>

                      <div className="form-section hover:shadow-md p-4 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
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
                                className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                              />
                              <span>{milestone}</span>
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
                      <h3 className="text-lg font-semibold">Business Requirements</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-section hover:shadow-md p-4 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Business Model
                        </label>
                        <select
                          value={prdFormData.businessModel}
                          onChange={(e) => setPRDFormData({...prdFormData, businessModel: e.target.value})}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          required
                        >
                          <option value="">Select Business Model</option>
                          <option value="b2c">B2C</option>
                          <option value="b2b">B2B</option>
                          <option value="b2b2c">B2B2C</option>
                          <option value="c2c">C2C</option>
                          <option value="marketplace">Marketplace</option>
                        </select>
                      </div>

                      <div className="form-section hover:shadow-md p-4 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
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
                                className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                              />
                              <span>{stream}</span>
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
                      <h3 className="text-lg font-semibold">User Requirements</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div className="form-section hover:shadow-md p-4 rounded-lg relative">
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-sm font-medium text-gray-700">
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
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          rows={3}
                          required
                        />
                      </div>

                      <div className="form-section hover:shadow-md p-4 rounded-lg relative">
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-sm font-medium text-gray-700">
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
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                      <h3 className="text-lg font-semibold">Technical Requirements</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-section hover:shadow-md p-4 rounded-lg relative">
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-sm font-medium text-gray-700">
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
                          <ul className="text-sm text-gray-600 space-y-2">
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
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            >
                              <option value="">Select Target Load Time</option>
                              <option value="1s">Under 1 second</option>
                              <option value="2s">Under 2 seconds</option>
                              <option value="3s">Under 3 seconds</option>
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
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            >
                              <option value="">Select Concurrent Users</option>
                              <option value="100">Up to 100</option>
                              <option value="1000">Up to 1,000</option>
                              <option value="10000">Up to 10,000</option>
                              <option value="100000">Up to 100,000+</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="form-section hover:shadow-md p-4 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
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
                                className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                              />
                              <span>{device}</span>
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
                      <h3 className="text-lg font-semibold">Design Requirements</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-section hover:shadow-md p-4 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
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
                        <label className="block text-sm font-medium text-gray-700 mb-1">
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
                      <h3 className="text-lg font-semibold">Deployment & Maintenance</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-section hover:shadow-md p-4 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Hosting Preference
                        </label>
                        <select
                          value={prdFormData.hostingPreference}
                          onChange={(e) => setPRDFormData({...prdFormData, hostingPreference: e.target.value})}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Select Hosting Preference</option>
                          <option value="aws">AWS</option>
                          <option value="gcp">Google Cloud</option>
                          <option value="azure">Microsoft Azure</option>
                          <option value="custom">Custom Solution</option>
                        </select>
                      </div>

                      <div className="form-section hover:shadow-md p-4 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Update Frequency
                        </label>
                        <select
                          value={prdFormData.updateFrequency}
                          onChange={(e) => setPRDFormData({...prdFormData, updateFrequency: e.target.value})}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Select Update Frequency</option>
                          <option value="weekly">Weekly</option>
                          <option value="biweekly">Bi-weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="quarterly">Quarterly</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Section */}
                  <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4 rounded-b-2xl shadow-depth">
                    <div className="flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setIsPRDModalOpen(false)}
                        className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 
                                 transition duration-300 flex items-center space-x-2"
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
          </motion.div>
        )}
      </div>

      <ChatBot />
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;