import React, { useState } from 'react';
import { 
  Zap, Code, Rocket, Clock, CheckCircle, Package, 
  Users, ArrowRight, Mail, Phone, MapPin, Star,
  Menu, X, Send, FileText, Upload, AlertCircle
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
    termsAccepted: false
  });

  const scrollPosition = useScrollPosition();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      termsAccepted: false
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
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <SectionTransition>
          <div className="pt-20">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <div className="container mx-auto px-6 py-24 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                  Transform Your Ideas into Reality
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-emerald-100">
                  An App in a Snap™ - Rapid Development Solutions for Modern Businesses
                </p>
                <button 
                  onClick={() => setIsPRDModalOpen(true)}
                  className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition duration-300 flex items-center mx-auto transform hover:scale-105"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </button>
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
                <div className="border rounded-lg p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                  <Package className="w-12 h-12 text-emerald-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Rapid MVP</h3>
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
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Project Requirements Document</h2>
                  <button 
                    onClick={() => setIsPRDModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <form onSubmit={handlePRDSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Name
                      </label>
                      <input
                        type="text"
                        value={prdFormData.projectName}
                        onChange={(e) => setPRDFormData({...prdFormData, projectName: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={prdFormData.companyName}
                        onChange={(e) => setPRDFormData({...prdFormData, companyName: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        value={prdFormData.contactEmail}
                        onChange={(e) => setPRDFormData({...prdFormData, contactEmail: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={prdFormData.phone}
                        onChange={(e) => setPRDFormData({...prdFormData, phone: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        value={prdFormData.budget}
                        onChange={(e) => setPRDFormData({...prdFormData, budget: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      >
                        <option value="">Select Budget Range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Timeline
                      </label>
                      <select
                        value={prdFormData.timeline}
                        onChange={(e) => setPRDFormData({...prdFormData, timeline: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      >
                        <option value="">Select Timeline</option>
                        <option value="1-2months">1-2 Months</option>
                        <option value="2-4months">2-4 Months</option>
                        <option value="4-6months">4-6 Months</option>
                        <option value="6months+">6+ Months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Target Platform(s)
                    </label>
                    <div className="space-x-4">
                      {['Web', 'iOS', 'Android', 'Desktop'].map((platform) => (
                        <label key={platform} className="inline-flex items-center">
                          <input
                            type="checkbox"
                            checked={prdFormData.platform.includes(platform)}
                            onChange={(e) => {
                              const updatedPlatforms = e.target.checked
                                ? [...prdFormData.platform, platform]
                                : prdFormData.platform.filter(p => p !== platform);
                              setPRDFormData({...prdFormData, platform: updatedPlatforms});
                            }}
                            className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                          />
                          <span className="ml-2">{platform}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Description
                    </label>
                    <textarea
                      value={prdFormData.description}
                      onChange={(e) => setPRDFormData({...prdFormData, description: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Key Features
                    </label>
                    <textarea
                      value={prdFormData.features}
                      onChange={(e) => setPRDFormData({...prdFormData, features: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Target Audience
                    </label>
                    <textarea
                      value={prdFormData.targetAudience}
                      onChange={(e) => setPRDFormData({...prdFormData, targetAudience: e.target.value})}
                      rows={2}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Competitors
                    </label>
                    <textarea
                      value={prdFormData.competitors}
                      onChange={(e) => setPRDFormData({...prdFormData, competitors: e.target.value})}
                      rows={2}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Success Criteria
                    </label>
                    <textarea
                      value={prdFormData.successCriteria}
                      onChange={(e) => setPRDFormData({...prdFormData, successCriteria: e.target.value})}
                      rows={2}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      value={prdFormData.additionalInfo}
                      onChange={(e) => setPRDFormData({...prdFormData, additionalInfo: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={prdFormData.termsAccepted}
                      onChange={(e) => setPRDFormData({...prdFormData, termsAccepted: e.target.checked})}
                      className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                      I agree to the terms and conditions and privacy policy
                    </label>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsPRDModalOpen(false)}
                      className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition duration-300 flex items-center"
                    >
                      Submit PRD
                      <Send className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      <ChatBot />
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;