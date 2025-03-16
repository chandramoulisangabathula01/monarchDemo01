import { motion } from 'framer-motion';
import { Facebook, Globe, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ConsentRevocationLink } from './ConsentRevocationLink';
import { footerContent } from '@/data/landingpage';
import React from 'react';

export default function Footer() {
  return (
    // <footer className="bg-black text-white py-8">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex flex-col md:flex-row justify-between items-start gap-8">
    //       <div className="flex-shrink-0">
    //         <Link href="/" className="flex items-center gap-2">
    //           <Image 
    //             src="/images/logo2.png" 
    //             alt={footerContent.logo.alt} 
    //             width={40} 
    //             height={40} 
    //             className="w-8"
    //           />
    //           <span className="text-xl font-bold text-[#e6ab65]">
    //             Monarch Painters
    //           </span>
    //         </Link>
    //       </div>

    //       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    //         <div>
    //           <h4 className="text-sm font-medium mb-4">Shop</h4>
    //           <ul className="space-y-2 text-sm text-gray-400">
    //             <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
    //             <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
    //             <li><Link href="/contact" className="hover:text-white transition-colors">About</Link></li>
    //           </ul>
    //         </div>
    //         {/* <div>
    //           <h4 className="text-sm font-medium mb-4">About Us</h4>
    //           <ul className="space-y-2 text-sm text-gray-400">
    //             <li><Link href="/about" className="hover:text-white transition-colors">Company</Link></li>
    //             <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
    //             <li><Link href="/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
    //           </ul>
    //         </div> */}
    //         <div>
    //           <h4 className="text-sm font-medium mb-4">Support</h4>
    //           <ul className="space-y-2 text-sm text-gray-400">
    //             <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
    //             <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
    //             <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h4 className="text-sm font-medium mb-4">Contact</h4>
    //           <ul className="space-y-2 text-sm text-gray-400">
    //             <li>123 Painter's Lane</li>
    //             <li>Staffordshire, ST4 1AB</li>
    //             <li>01234 567890</li>
    //           </ul>
    //         </div>
    //       </div>

    //       <div className="flex gap-4 md:flex-col items-center md:items-end">
    //         <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    //           <svg className="w-6 h-6 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    //             <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    //           </svg>
    //         </Link>
    //         <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    //           <svg className="w-6 h-6 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    //             <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    //           </svg>
    //         </Link>
    //         <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
    //           <svg className="w-6 h-6 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    //             <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-2.32V11.9a6.32 6.32 0 00-1-.05A6.34 6.34 0 006 20.14a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-2-.4z" />
    //           </svg>
    //         </Link>
    //       </div>
    //     </div>

    //     <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
    //       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    //         <div className="flex-shrink-0 w-full flex justify-center items-center mb-8">
    //           {/* <Link href="/" className="flex items-center gap-4">
    //             <Image 
    //               src="/images/logo2.png" 
    //               alt={footerContent.logo.alt} 
    //               width={60} 
    //               height={60} 
    //               className="w-12"
    //             />
    //             <span className="text-3xl font-bold text-[#e6ab65]">
    //               Monarch Painters
    //             </span>
    //           </Link> */}
    //         </div>
        
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="w-full bg-[#711f50] backdrop-blur-md border-t border-white/10 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* <div className="flex justify-center items-center mb-8">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src={footerContent.logo.src} 
                alt={footerContent.logo.alt} 
                className="w-8 sm:w-10 md:w-12" 
              />
              <span className="font-['navlogo'] text-xl sm:text-2xl md:text-3xl leading-loose" style={{ color: '#e6ab65' }}>
                MONARCH PAINTERS
              </span>
            </Link>
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-2 md:col-span-1 space-y-4 md:space-y-6">
              <p className="text-sm md:text-base text-blue-100/70">
                {footerContent.companyDescription}
              </p>
              <div className="flex space-x-3 md:space-x-4">
                {[
                  { Icon: Facebook, link: footerContent.socialLinks.facebook },
                  { Icon: Twitter, link: footerContent.socialLinks.twitter },
                  { Icon: Linkedin, link: footerContent.socialLinks.linkedin },
                  { Icon: Youtube, link: footerContent.socialLinks.youtube },
                  { Icon: Globe, link: footerContent.socialLinks.website }
                ].map(({ Icon, link }, index) => (
                  <motion.a 
                    key={index}
                    href={link} 
                    className="text-blue-100/60 hover:text-[#e6ab65] transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">Services</h3>
              <ul className="space-y-3 md:space-y-4">
                {footerContent.services.map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-sm md:text-base text-blue-100/70 hover:text-[#e6ab65] transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">Company</h3>
              <ul className="space-y-3 md:space-y-4">
                {footerContent.companyLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path} className="text-sm md:text-base text-blue-100/70 hover:text-[#e6ab65] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">Contact</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#e6ab65] mt-1" />
                  <span className="text-sm md:text-base text-blue-100/70">
                    {footerContent.contact.address.map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < footerContent.contact.address.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#e6ab65]" />
                  <a href="tel:+1234567890" className="text-sm md:text-base text-blue-100/70 hover:text-[#e6ab65] transition-colors">
                    {footerContent.contact.phone}
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#e6ab65]" />
                  <a href="mailto:{footerContent.contact.email}" className="text-sm md:text-base text-blue-100/70 hover:text-[#e6ab65] transition-colors break-all">
                    {footerContent.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col items-center">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img 
                src={footerContent.logo.src} 
                alt={footerContent.logo.alt} 
                className="w-8 sm:w-10 md:w-12" 
              />
              <span className="font-['navlogo'] text-xl sm:text-xs md:text-md leading-loose" style={{ color: '#e6ab65' }}>
                MONARCH PAINTERS
              </span>
            </Link>
            <div className="w-full flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs md:text-sm text-blue-100/60">
                © {new Date().getFullYear()} Monarch Painters. All rights reserved.
              </p>
              <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
                {footerContent.legalLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.path} 
                    className="text-xs md:text-sm text-blue-100/60 hover:text-[#e6ab65] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <ConsentRevocationLink className="text-xs md:text-sm text-blue-100/60 hover:text-[#e6ab65] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    
  );
}