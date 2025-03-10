// "use client"
// import React, { useState, useEffect, useRef } from 'react';
// import { MessageSquare, User, Phone, Facebook, Twitter, Linkedin, Youtube, Globe, Zap, Clock, Award, Users, CheckCircle, MapPin, Mail, ArrowRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Footer from '@/components/footer';
// import emailjs from '@emailjs/browser';

// function App() {
//   const form = useRef<HTMLFormElement>(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     project: '',
//     services: {
//       websiteDesign: true,
//       uxDesign: true,
//       userResearch: false,
//       contentCreation: false,
//       strategyConsulting: false,
//       other: false
//     }
//   });

//   const [isLoaded, setIsLoaded] = useState(false);
//   const [activeField, setActiveField] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState('about');
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     if (name === 'user_name') {
//       setFormData(prev => ({ ...prev, name: value }));
//     } else if (name === 'user_email') {
//       setFormData(prev => ({ ...prev, email: value }));
//     } else if (name === 'message') {
//       setFormData(prev => ({ ...prev, project: value }));
//     }
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = e.target;
//     setFormData({
//       ...formData,
//       services: {
//         ...formData.services,
//         [name]: checked
//       }
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitStatus('loading');

//     if (!form.current) return;

//     try {
//       await emailjs.sendForm(
//         'service_o6is7uj',
//         'template_g4wyoks',
//         form.current,
//         'mmRjUSitj7ijVe0N8'
//       );

//       console.log('SUCCESS!');
//       setSubmitStatus('success');
      
//       // Reset form
//       setFormData({
//         name: '',
//         email: '',
//         project: '',
//         services: {
//           websiteDesign: false,
//           uxDesign: false,
//           userResearch: false,
//           contentCreation: false,
//           strategyConsulting: false,
//           other: false
//         }
//       });

//       // Clear form fields
//       if (form.current) {
//         form.current.reset();
//       }

//       // Show success message
//       alert('Message sent successfully!');
//     } catch (error) {
//       console.error('FAILED...', error);
//       setSubmitStatus('error');
//       alert('Failed to send message. Please try again.');
//     }
//   };

//   const handleFocus = (fieldName: string) => {
//     setActiveField(fieldName);
//   };

//   const handleBlur = () => {
//     setActiveField(null);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 }
//     }
//   };

//   const formItemVariants = {
//     hidden: { x: 20, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 }
//     }
//   };

//   const checkboxVariants = {
//     unchecked: { scale: 1 },
//     checked: { scale: [1, 1.2, 1], transition: { duration: 0.2 } }
//   };

//   // Background gradient animation
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   // Team members data
//   const teamMembers = [
//     {
//       name: "Sarah Johnson",
//       role: "Creative Director",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
//     },
//     {
//       name: "Michael Chen",
//       role: "Lead Designer",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
//     },
//     {
//       name: "Aisha Patel",
//       role: "UX Specialist",
//       image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
//     },
//     {
//       name: "David Rodriguez",
//       role: "Project Manager",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
//     }
//   ];

//   // FAQ data
//   const faqs = [
//     {
//       question: "What services do you offer?",
//       answer: "We offer a comprehensive range of design services including website design, UX/UI design, user research, content creation, and strategic consulting. Our team works closely with clients to deliver tailored solutions that meet their specific needs and objectives."
//     },
//     {
//       question: "How long does a typical project take?",
//       answer: "Project timelines vary depending on scope and complexity. A simple website redesign might take 4-6 weeks, while a comprehensive UX overhaul could take 2-3 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
//     },
//     {
//       question: "What is your design process?",
//       answer: "Our design process includes discovery (understanding your needs), research (analyzing your audience and competitors), conceptualization (creating initial designs), iteration (refining based on feedback), and implementation (delivering the final product). We maintain open communication throughout to ensure your vision is realized."
//     },
//     {
//       question: "Do you offer ongoing support after project completion?",
//       answer: "Yes, we offer various support packages to ensure your digital products continue to perform optimally. These include maintenance, updates, performance monitoring, and continuous improvement based on user feedback and analytics."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#d9c2d4] flex flex-col items-center justify-center overflow-hidden relative">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div 
//           className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
//           animate={{
//             x: mousePosition.x * 0.05,
//             y: mousePosition.y * 0.05,
//           }}
//           transition={{ type: "spring", damping: 50 }}
//           style={{ top: '10%', left: '10%' }}
//         />
//         <motion.div 
//           className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-[#711f50]/20 to-[#711f50]/20 blur-3xl"
//           animate={{
//             x: mousePosition.x * -0.05,
//             y: mousePosition.y * -0.05,
//           }}
//           transition={{ type: "spring", damping: 50 }}
//           style={{ bottom: '10%', right: '10%' }}
//         />
//       </div>

//       {/* Header Section */}
//       {/* <motion.header 
//         className="w-full bg-slate-900/50 backdrop-blur-md border-b border-white/10 py-6 px-8 fixed top-0 z-50"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//       >
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <motion.div 
//             className="flex items-center space-x-2"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400 }}
//           >
//             <Zap className="w-8 h-8 text-[#e6ab65]" />
//             <span className="text-2xl font-bold text-white">Monarch Painters</span>
//           </motion.div>
          
//           <motion.nav className="hidden md:flex space-x-8">
//             {[
//               { name: "About", href: "#about" },
//               { name: "Services", href: "#services" },
//               { name: "Team", href: "#team" },
//               { name: "FAQ", href: "#faq" },
//               { name: "Contact", href: "#contact" }
//             ].map((item) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href}
//                 className="text-blue-100/80 hover:text-[#e6ab65] transition-colors"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {item.name}
//               </motion.a>
//             ))}
//           </motion.nav>
          
//           <motion.button
//             className="bg-gradient-to-r from-[#711f50] to-[#e6ab65] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get a Quote
//           </motion.button>
//         </div>
//       </motion.header> */}

//       {/* Main Contact Section */}
//       <section id="contact" className="w-full max-w-7xl pt-32 pb-16 px-4">
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="w-full flex flex-col md:flex-row rounded-[2rem] shadow-2xl overflow-hidden border border-[#711f50]/20 backdrop-blur-md bg-white/90 relative z-10"
//         >
//           {/* Left Column - Contact Information */}
//           <motion.div 
//             className="w-full md:w-2/5 bg-[#711f50] text-white p-12 flex flex-col justify-between relative overflow-hidden"
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             {/* Decorative elements */}
//             <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#e6ab65]/30 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
//             <div className="relative z-10 space-y-16">
//               <motion.div variants={itemVariants} initial="hidden" animate="visible">
//                 <h2 className="text-2xl font-bold flex items-center mb-2">
//                   <Zap className="w-8 h-8 mr-2 text-[#e6ab65]" />
//                   <span className="inline-block bg-gradient-to-r from-[#e6ab65] to-[#ede2db] text-transparent bg-clip-text font-display">Monarch Painters</span>
//                 </h2>
//                 <p className="text-[#ede2db]/90 text-lg">Transform your space with our expert touch</p>
//               </motion.div>

//               <motion.div className="space-y-12" variants={containerVariants} initial="hidden" animate="visible">
//                 <motion.div className="flex items-start space-x-6" variants={itemVariants}>
//                   <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
//                     <MessageSquare className="w-7 h-7 text-[#e6ab65]" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-xl mb-2">Let's Talk</h3>
//                     <p className="text-[#ede2db]/90 mb-2 text-lg">Have a project in mind?</p>
//                     <a href="mailto:contact@monarchpainters.com" className="text-[#e6ab65] hover:text-[#ede2db] transition-colors text-lg font-medium">contact@monarchpainters.com</a>
//                   </div>
//                 </motion.div>

//                 <motion.div className="flex items-start space-x-6" variants={itemVariants}>
//                   <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
//                     <User className="w-7 h-7 text-[#e6ab65]" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-xl mb-2">Visit Our Studio</h3>
//                     <p className="text-[#ede2db]/90 mb-2 text-lg">Experience our work firsthand.</p>
//                     <p className="text-white/90 text-lg">123 Creative Avenue</p>
//                     <p className="text-white/90 text-lg">Design District, NY 10001</p>
//                   </div>
//                 </motion.div>

//                 <motion.div className="flex items-start space-x-6" variants={itemVariants}>
//                   <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
//                     <Phone className="w-7 h-7 text-[#e6ab65]" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-xl mb-2">Call Us</h3>
//                     <p className="text-[#ede2db]/90 mb-2 text-lg">Available 7 days a week</p>
//                     <a href="tel:+1234567890" className="text-[#e6ab65] hover:text-[#ede2db] transition-colors text-lg font-medium">+1 (234) 567-890</a>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </div>

//             <motion.div 
//               className="flex space-x-5 mt-16 relative z-10"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//             >
//               {[Facebook, Twitter, Linkedin, Youtube, Globe].map((Icon, index) => (
//                 <motion.a 
//                   key={index}
//                   href="#" 
//                   className="text-[#ede2db]/60 hover:text-[#e6ab65] transition-all duration-300"
//                   whileHover={{ scale: 1.2, rotate: 5 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <Icon className="w-6 h-6" />
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Contact Form */}
//           <motion.div 
//             className="w-full md:w-3/5 p-12  lg:p-16 relative overflow-hidden"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <div className="max-w-2xl relative z-10">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="mb-12"
//               >
//                 <motion.h2 
//                   className="text-5xl font-bold mb-4 text-[#711f50] font-display"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6ab65] to-[#711f50]">extraordinary</span>
//                 </motion.h2>
//                 <motion.p 
//                   className="text-[#711f50]/80 text-xl"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   Share your vision, and we'll bring it to life with precision and artistry.
//                 </motion.p>
//               </motion.div>

//               <motion.form 
//                 ref={form}
//                 onSubmit={handleSubmit}
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="space-y-8"
//               >
//                 <motion.div variants={formItemVariants}>
//                   <div className="relative group">
//                     <motion.input
//                       type="text"
//                       name="user_name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       onFocus={() => handleFocus('name')}
//                       onBlur={handleBlur}
//                       placeholder="Your name"
//                       className="w-full bg-[#ede2db]/30 border-2 border-[#711f50]/20 rounded-xl px-6 py-4 text-[#711f50] placeholder:text-[#711f50]/50 focus:outline-none focus:border-[#e6ab65]/70 transition-all duration-300"
//                       required
//                       animate={activeField === 'name' ? { scale: 1.02 } : { scale: 1 }}
//                     />
//                   </div>
//                 </motion.div>

//                 <motion.div variants={formItemVariants}>
//                   <div className="relative group">
//                     <motion.input
//                       type="email"
//                       name="user_email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       onFocus={() => handleFocus('email')}
//                       onBlur={handleBlur}
//                       placeholder="Your email"
//                       className="w-full bg-[#ede2db]/30 border-2 border-[#711f50]/20 rounded-xl px-6 py-4 text-[#711f50] placeholder:text-[#711f50]/50 focus:outline-none focus:border-[#e6ab65]/70 transition-all duration-300"
//                       required
//                       animate={activeField === 'email' ? { scale: 1.02 } : { scale: 1 }}
//                     />
//                   </div>
//                 </motion.div>

//                 <motion.div variants={formItemVariants}>
//                   <div className="relative group">
//                     <motion.textarea
//                       name="message"
//                       value={formData.project}
//                       onChange={handleInputChange}
//                       onFocus={() => handleFocus('project')}
//                       onBlur={handleBlur}
//                       placeholder="Tell us about your project..."
//                       className="w-full bg-[#ede2db]/30 border-2 border-[#711f50]/20 rounded-xl px-6 py-4 text-[#711f50] placeholder:text-[#711f50]/50 focus:outline-none focus:border-[#e6ab65]/70 transition-all duration-300 min-h-[120px] resize-none"
//                       animate={activeField === 'project' ? { scale: 1.02 } : { scale: 1 }}
//                     />
//                   </div>
//                 </motion.div>

//                 <motion.button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-[#711f50] to-[#e6ab65] text-white py-4 px-8 rounded-xl font-medium text-lg hover:opacity-90 transition-all duration-300 relative overflow-hidden group"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   variants={formItemVariants}
//                 >
//                   <span className="relative z-10">Start Your Project</span>
//                   <motion.div 
//                     className="absolute inset-0 bg-gradient-to-r from-[#e6ab65] to-[#711f50] opacity-0 group-hover:opacity-100 transition-all duration-500"
//                     initial={{ x: '-100%' }}
//                     whileHover={{ x: 0 }}
//                     transition={{ type: "spring", stiffness: 100 }}
//                   />
//                 </motion.button>
//               </motion.form>
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Map Section */}
//       <section id="map" className="w-full max-w-7xl py-16 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center"
//         >
//           <h2 className="text-4xl font-bold text-[#711f50] mb-4">Find Us</h2>
//           <p className="text-blue-100/80 text-xl max-w-3xl mx-auto">
//             Visit our studio to see our work in person and discuss your project with our team.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[500px] relative"
//         >
//           {/* Map iframe */}
//           <iframe 
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1659012963606!5m2!1sen!2s" 
//             width="100%" 
//             height="100%" 
//             style={{ border: 0 }} 
//             allowFullScreen 
//             loading="lazy" 
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Monarch Painters Location"
//             className="filter grayscale"
//           ></iframe>

//           {/* Map overlay with location details */}
//           <motion.div 
//             className="absolute top-8 left-8 bg-slate-900/90 backdrop-blur-md p-8 rounded-xl border border-white/10 max-w-md"
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-bold text-white mb-4">Our Studio</h3>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-4">
//                 <MapPin className="w-6 h-6 text-[#e6ab65] mt-1" />
//                 <div>
//                   <p className="text-white">123 Creative Avenue</p>
//                   <p className="text-white">Design District, NY 10001</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <Phone className="w-6 h-6 text-[#e6ab65] mt-1" />
//                 <p className="text-white">+1 (234) 567-890</p>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <Mail className="w-6 h-6 text-[#e6ab65] mt-1" />
//                 <p className="text-white">contact@monarchpainters.com</p>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <Clock className="w-6 h-6 text-[#e6ab65] mt-1" />
//                 <div>
//                   <p className="text-white">Monday - Friday: 9am - 6pm</p>
//                   <p className="text-white">Saturday: 10am - 4pm</p>
//                   <p className="text-white">Sunday: Closed</p>
//                 </div>
//               </div>
//             </div>
//             <motion.button
//               className="mt-6 bg-gradient-to-r from-[#711f50] to-[#e6ab65] text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:opacity-90 transition-all w-full justify-center"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span>Get Directions</span>
//               <ArrowRight className="w-5 h-5" />
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* About Us Section */}
//       {/* <section id="about" className="w-full max-w-7xl py-16 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center"
//         >
//           <h2 className="text-4xl font-bold text-white mb-4">About Monarch Painters</h2>
//           <p className="text-blue-100/80 text-xl max-w-3xl mx-auto">
//             We're a team of passionate designers and artists dedicated to transforming spaces with creativity and precision.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="rounded-2xl overflow-hidden h-full"
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80" 
//               alt="Our studio" 
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <h3 className="text-3xl font-bold text-white">Our Story</h3>
//             <p className="text-blue-100/80 text-lg">
//               Founded in 2010, Monarch Painters began with a simple mission: to create beautiful, functional spaces that inspire and delight. Over the years, we've grown from a small team of passionate artists to a full-service design studio with clients across the globe.
//             </p>
//             <p className="text-blue-100/80 text-lg">
//               Our approach combines artistic vision with technical expertise, allowing us to deliver exceptional results that exceed expectations. We believe that great design should be accessible to everyone, which is why we work closely with each client to understand their unique needs and preferences.
//             </p>

//             <div className="grid grid-cols-2 gap-6 pt-4">
//               <motion.div 
//                 className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/10"
//                 whileHover={{ y: -5, scale: 1.03 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Award className="w-10 h-10 text-[#e6ab65] mb-4" />
//                 <h4 className="text-xl font-bold text-white mb-2">Award Winning</h4>
//                 <p className="text-blue-100/80">Recognized for excellence in design and innovation</p>
//               </motion.div>

//               <motion.div 
//                 className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/10"
//                 whileHover={{ y: -5, scale: 1.03 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Users className="w-10 h-10 text-[#e6ab65] mb-4" />
//                 <h4 className="text-xl font-bold text-white mb-2">Expert Team</h4>
//                 <p className="text-blue-100/80">Talented professionals with years of experience</p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section> */}

//       {/* Services Section */}
//       {/* <section id="services" className="w-full max-w-7xl py-16 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center"
//         >
//           <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
//           <p className="text-blue-100/80 text-xl max-w-3xl mx-auto">
//             We offer a comprehensive range of design services to help bring your vision to life.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Interior Painting",
//               description: "Transform your indoor spaces with our expert interior painting services. We use premium materials and techniques to create stunning, long-lasting results.",
//               icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#e6ab65]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M12 13V2"/><path d="M4.2 10.4 12 2.6l7.8 7.8"/></svg>
//             },
//             {
//               title: "Exterior Painting",
//               description: "Enhance your property's curb appeal with our exterior painting services. We provide durable, weather-resistant finishes that protect and beautify your home.",
//               icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#e6ab65]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l-3 3"/><path d="m15 9 6 6"/><path d="m13.8 17.8-1.8.6.6-1.8 7.4-7.4 1.2 1.2-7.4 7.4Z"/></svg>
//             },
//             {
//               title: "Commercial Painting",
//               description: "Create a professional environment for your business with our commercial painting services. We work efficiently to minimize disruption to your operations.",
//               icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#e6ab65]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><path d="M9 21v-6"/><path d="M15 21v-6"/></svg>
//             },
//             {
//               title: "Decorative Finishes",
//               description: "Add unique texture and depth to your walls with our decorative finishing techniques, including faux finishes, textured walls, and custom murals.",
//               icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#e6ab65]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M6 12v8"/><path d="M18 12v8"/><path d="M12 12v8"/><path d="M2 8h20"/><path d="M2 4h20"/></svg>
//             },
//             {
//               title: "Color Consultation",
//               description: "Unsure about color choices? Our expert color consultants will help you select the perfect palette to achieve your desired aesthetic and mood.",
//               icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#e6ab65]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="19" cy="17" r="2"/><circle cx="6" cy="12" r="2.5"/><circle cx="10" cy="17" r="2"/></svg>
//             },
//             {
//               title: "Cabinet Refinishing",
//               description: "Revitalize your kitchen or bathroom with our cabinet refinishing services. We can transform worn cabinets into stunning focal points without full replacement.",
//               icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#e6ab65]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><path d="M9 21v-6"/><path d="M15 21v-6"/></svg>
//             }
//           ].map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10, scale: 1.03 }}
//               className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col h-full"
//             >
//               <div className="mb-6">{service.icon}</div>
//               <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
//               <p className="text-blue-100/80 flex-grow">{service.description}</p>
//               <motion.a
//                 href="#contact"
//                 className="mt-6 text-[#e6ab65] flex items-center space-x-2 group"
//                 whileHover={{ x: 5 }}
//               >
//                 <span>Learn more</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </motion.a>
//             </motion.div>
//           ))}
//         </div>
//       </section> */}

//       {/* Team Section */}
//       {/* <section id="team" className="w-full max-w-7xl py-16 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center"
//         >
//           <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
//           <p className="text-blue-100/80 text-xl max-w-3xl mx-auto">
//             The talented professionals behind our exceptional work.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//               className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
//             >
//               <div className="h-64 overflow-hidden">
//                 <img 
//                   src={member.image} 
//                   alt={member.name} 
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                 />
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
//                 <p className="text-[#e6ab65]">{member.role}</p>
//                 <div className="flex justify-center space-x-4 mt-4">
//                   {[Twitter, Linkedin, Mail].map((Icon, i) => (
//                     <motion.a
//                       key={i}
//                       href="#"
//                       className="text-blue-100/60 hover:text-[#e6ab65] transition-colors"
//                       whileHover={{ scale: 1.2, rotate: 5 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <Icon className="w-5 h-5" />
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section> */}

//       {/* FAQ Section */}
//       {/* <section id="faq" className="w-full max-w-7xl py-16 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center"
//         >
//           <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
//           <p className="text-blue-100/80 text-xl max-w-3xl mx-auto">
//             Find answers to common questions about our services and process.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
//             >
//               <h3 className="text-xl font-bold text-white mb-4 flex items-start">
//                 <span className="text-[#e6ab65] mr-4 text-2xl">Q.</span>
//                 {faq.question}
//               </h3>
//               <p className="text-blue-100/80 pl-8">{faq.answer}</p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-12 text-center"
//         >
//           <p className="text-blue-100/80 text-lg mb-6">
//             Still have questions? We're here to help!
//           </p>
//           <motion.a
//             href="#contact"
//             className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#711f50] to-[#e6ab65] text-white px-8 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span>Contact Us</span>
//             <ArrowRight className="w-5 h-5" />
//           </motion.a>
//         </motion.div>
//       </section> */}

//       {/* Testimonials Section */}
//       <section id="testimonials" className="w-full max-w-7xl py-16 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center"
//         >
//           <h2 className="text-4xl font-bold text-[#711f50] mb-4">What Our Clients Say</h2>
//           <p className="text-black text-xl max-w-3xl mx-auto">
//             Don't just take our word for it - hear from our satisfied clients.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               name: "Emily Johnson",
//               role: "Homeowner",
//               image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
//               quote: "Monarch Painters transformed our living room beyond our expectations. Their attention to detail and color expertise made all the difference. Highly recommend!"
//             },
//             {
//               name: "Marcus Chen",
//               role: "Restaurant Owner",
//               image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
//               quote: "Working with Monarch Painters for our restaurant renovation was a fantastic experience. They understood our vision and executed it flawlessly, all while staying on schedule."
//             },
//             {
//               name: "Sarah Williams",
//               role: "Interior Designer",
//               image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
//               quote: "As an interior designer, I have high standards for the contractors I work with. Monarch Painters consistently exceeds my expectations with their craftsmanship and professionalism."
//             }
//           ].map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-[#711f50]/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative"
//             >
//               <div className="absolute -top-6 left-8">
//                 <svg className="w-12 h-12 text-[#e6ab65]" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
//                 </svg>
//               </div>
//               <div className="pt-6">
//                 <p className="text-blue-100/80 mb-6 italic">{testimonial.quote}</p>
//                 <div className="flex items-center">
//                   <img 
//                     src={testimonial.image} 
//                     alt={testimonial.name} 
//                     className="w-12 h-12 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <h4 className="text-white font-bold">{testimonial.name}</h4>
//                     <p className="text-blue-100/60 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       {/* <section id="newsletter" className="w-full max-w-7xl py-16 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-[#711f50] to-[#e6ab65]/80 rounded-3xl p-12 relative overflow-hidden"
//         >
//           <div className="absolute inset-0 overflow-hidden">
//             <svg className="absolute top-0 right-0 text-white/5 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//               <path fill="currentColor" d="M45.3,-51.2C58.3,-40.9,68.5,-25.4,71.8,-8.2C75.1,9,71.5,27.9,61.3,41.2C51.2,54.5,34.5,62.3,16.8,67.2C-0.9,72.1,-19.6,74.1,-35.9,67.7C-52.3,61.3,-66.3,46.4,-72.5,28.7C-78.7,11,-77,-9.5,-68.5,-25.3C-60,-41.1,-44.7,-52.2,-29.4,-61.4C-14.1,-70.6,1.2,-77.9,15.1,-74.5C29,-71.1,41.5,-57,45.3,-51.2Z" transform="translate(100 100)" />
//             </svg>
//           </div>

//           <div className="relative z-10 max-w-3xl mx-auto text-center">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="text-4xl font-bold text-white mb-4"
//             >
//               Stay Updated with Our Latest Projects
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="text-white/90 text-xl mb-8"
//             >
//               Subscribe to our newsletter for design inspiration, tips, and exclusive offers.
//             </motion.p>
//             <motion.form
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-grow px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
//                 required
//               />
//               <motion.button
//                 type="submit"
//                 className="px-8 py-4 bg-white text-[#711f50] font-medium rounded-xl hover:bg-white/90 transition-colors"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Subscribe
//               </motion.button>
//             </motion.form>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="text-white/70 text-sm mt-4"
//             >
//               We respect your privacy. Unsubscribe at any time.
//             </motion.p>
//           </div>
//         </motion.div>
//       </section> */}

//       {/* Footer */}
//       <Footer/>
      
//     </div>
//   );
// }

// export default App;