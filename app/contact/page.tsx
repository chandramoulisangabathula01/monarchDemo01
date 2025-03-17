"use client"
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, User, Phone, Facebook, Instagram, Twitter, Youtube, Globe, Zap, Clock, Award, Users, CheckCircle, MapPin, Mail, ArrowRight } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/footer';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    services: {
      websiteDesign: true,
      uxDesign: true,
      userResearch: false,
      contentCreation: false,
      strategyConsulting: false,
      other: false
    }
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('about');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'user_name') {
      setFormData(prev => ({ ...prev, name: value }));
    } else if (name === 'user_email') {
      setFormData(prev => ({ ...prev, email: value }));
    } else if (name === 'message') {
      setFormData(prev => ({ ...prev, project: value }));
    }
  };

 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        'service_o6is7uj',
        'template_g4wyoks',
        form.current,
        'mmRjUSitj7ijVe0N8'
      );

      console.log('SUCCESS!');
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        project: '',
        services: {
          websiteDesign: false,
          uxDesign: false,
          userResearch: false,
          contentCreation: false,
          strategyConsulting: false,
          other: false
        }
      });

      // Clear form fields
      if (form.current) {
        form.current.reset();
      }

      // Show success message
      alert('Message sent successfully!');
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitStatus('error');
      alert('Failed to send message. Please try again.');
    }
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const formItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

 

  // Background gradient animation
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Team members data
  

 
  return (
    <div className="min-h-screen bg-[#d9c2d4] flex flex-col items-center justify-center overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          transition={{ type: "spring", damping: 50 }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-[#711f50]/20 to-[#711f50]/20 blur-3xl"
          animate={{
            x: mousePosition.x * -0.05,
            y: mousePosition.y * -0.05,
          }}
          transition={{ type: "spring", damping: 50 }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Main Contact Section */}
      <section id="contact" className="w-full max-w-7xl pt-32 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col md:flex-row rounded-[2rem] shadow-2xl overflow-hidden border border-[#711f50]/20 backdrop-blur-md bg-white/90 relative z-10"
        >
          {/* Left Column - Contact Information */}
          <motion.div 
            className="w-full md:w-2/5 bg-[#711f50] text-white p-12 flex flex-col justify-between relative overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#e6ab65]/30 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 space-y-16">
              <motion.div variants={itemVariants} initial="hidden" animate="visible" className="flex items-center gap-4">
                <img 
                  src="/images/logo/logo.png" 
                  alt="Monarch Painters Logo" 
                  className="w-8 sm:w-10 md:w-12" 
                />
                <div>
                  <h2 className="text-2xl font-bold flex items-center mb-2">
                    <span className="inline-block  font-['navlogo'] text-xs bg-gradient-to-r from-[#e6ab65] to-[#ede2db] text-transparent bg-clip-text font-display">MONARCH PAINTERS</span>
                  </h2>
                </div>
              </motion.div>
                  {/* <p className="text-[#ede2db]/90 text-lg">Transform your space with our expert touch</p> */}

              <motion.div className="space-y-12" variants={containerVariants} initial="hidden" animate="visible">
                <motion.div className="flex items-start space-x-6" variants={itemVariants}>
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                    <MessageSquare className="w-7 h-7 text-[#e6ab65]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Let's Talk</h3>
                    <p className="text-[#ede2db]/90 mb-2 text-lg">Have a project in mind?</p>
                    <a href="mailto:contact@monarchpainters.com" className="text-[#e6ab65] hover:text-[#ede2db] transition-colors text-lg font-medium">contact@monarchpainters.com</a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start space-x-6" variants={itemVariants}>
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                    <User className="w-7 h-7 text-[#e6ab65]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Visit Our Studio</h3>
                    <p className="text-[#ede2db]/90 mb-2 text-lg">Experience our work firsthand.</p>
                    <p className="text-white/90 text-lg">6 Hill Top View, Handsacre, </p>                
                    <p className="text-white/90 text-lg">Rugeley WS15 4DG, United Kingdom</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start space-x-6" variants={itemVariants}>
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                    <Phone className="w-7 h-7 text-[#e6ab65]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                    <p className="text-[#ede2db]/90 mb-2 text-lg">Monday – Saturday: 7 AM- 9 PM</p>
                    <a href="tel:+44 7437 531733" className="text-[#e6ab65] hover:text-[#ede2db] transition-colors text-lg font-medium">+44 7437 531733</a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div 
              className="flex space-x-5 mt-16 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { Icon: Facebook, url: "https://www.facebook.com/monarchpainterslimited" },
                { Icon: Twitter, url: "https://twitter.com/MonarchPainters" },
                { Icon: Instagram, url: "https://www.instagram.com/monarchpainter5/" },
                { Icon: Youtube, url: "https://www.youtube.com/channel/UCYNEaGq-om5mCIr5kglKMEQ" },
                { Icon: FaTiktok, url: "http://www.tiktok.com/@monarchpainters" }
              ].map(({ Icon, url }, index) => (
                <motion.a 
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ede2db]/60 hover:text-[#e6ab65] transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="w-full md:w-3/5 p-12  lg:p-16 relative overflow-hidden"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="max-w-2xl relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <motion.h2 
                  className="text-5xl font-bold mb-4 text-[#711f50] font-display"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6ab65] to-[#711f50]">extraordinary</span>
                </motion.h2>
                <motion.p 
                  className="text-[#711f50]/80 text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Share your vision, and we'll bring it to life with precision and artistry.
                </motion.p>
              </motion.div>

              <motion.form 
                ref={form}
                onSubmit={handleSubmit}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div variants={formItemVariants}>
                  <div className="relative group">
                    <motion.input
                      type="text"
                      name="user_name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      className="w-full bg-[#ede2db]/30 border-2 border-[#711f50]/20 rounded-xl px-6 py-4 text-[#711f50] placeholder:text-[#711f50]/50 focus:outline-none focus:border-[#e6ab65]/70 transition-all duration-300"
                      required
                      animate={activeField === 'name' ? { scale: 1.02 } : { scale: 1 }}
                    />
                  </div>
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <div className="relative group">
                    <motion.input
                      type="email"
                      name="user_email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholder="Your email"
                      className="w-full bg-[#ede2db]/30 border-2 border-[#711f50]/20 rounded-xl px-6 py-4 text-[#711f50] placeholder:text-[#711f50]/50 focus:outline-none focus:border-[#e6ab65]/70 transition-all duration-300"
                      required
                      animate={activeField === 'email' ? { scale: 1.02 } : { scale: 1 }}
                    />
                  </div>
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <div className="relative group">
                    <motion.textarea
                      name="message"
                      value={formData.project}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('project')}
                      onBlur={handleBlur}
                      placeholder="Tell us about your project..."
                      className="w-full bg-[#ede2db]/30 border-2 border-[#711f50]/20 rounded-xl px-6 py-4 text-[#711f50] placeholder:text-[#711f50]/50 focus:outline-none focus:border-[#e6ab65]/70 transition-all duration-300 min-h-[120px] resize-none"
                      animate={activeField === 'project' ? { scale: 1.02 } : { scale: 1 }}
                    />
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#711f50] to-[#e6ab65] text-white py-4 px-8 rounded-xl font-medium text-lg hover:opacity-90 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={formItemVariants}
                >
                  <span className="relative z-10">Start Your Project</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#e6ab65] to-[#711f50] opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section id="map" className="w-full max-w-7xl py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-[#711f50] mb-4">Find Us</h2>
          <p className="text-black text-xl max-w-3xl mx-auto">
            Visit our studio to see our work in person and discuss your project with our team.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[500px] relative w-full"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2413.0329420407513!2d-1.9346844839674437!3d52.76330079986076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a0e7f63258b6f%3A0x7f8bd83d6ac2888c!2s6%20Hill%20Top%20View%2C%20Handsacre%2C%20Rugeley%20WS15%204DG%2C%20UK!5e0!3m2!1sen!2s!4v1659012963606!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Monarch Painters Location"
              className="filter grayscale"
            ></iframe>
          </motion.div>

          <motion.div 
            className="md:absolute relative top-8 left-8 bg-slate-900/90 backdrop-blur-md p-8 rounded-xl border border-white/10 max-w-md mt-4 md:mt-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Studio</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#e6ab65] mt-1" />
                <div>
                  <p className="text-white">6 Hill Top View, Handsacre</p>
                  <p className="text-white">Rugeley WS15 4DG, United Kingdom</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#e6ab65] mt-1" />
                <a href='+44 7437 531733' className="text-white">+44 7437 531733</a>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#e6ab65] mt-1" />
                <p className="text-white">contact@monarchpainters.com</p>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#e6ab65] mt-1" />
                <div>
                  <p className="text-white">Monday – Saturday: 7 AM- 9 PM</p>
                  {/* <p className="text-white">Saturday: 10am - 4pm</p> */}
                  {/* <p className="text-white">Sunday: Closed</p> */}
                </div>
              </div>
            </div>
            <motion.a
              href="https://www.google.com/maps/place/6+Hill+Top+View,+Handsacre,+Rugeley+WS15+4DG,+UK"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-gradient-to-r from-[#711f50] to-[#e6ab65] text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:opacity-90 transition-all w-full justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Directions</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

    
     
      <Footer/>
      
    </div>
  );
}

export default App;