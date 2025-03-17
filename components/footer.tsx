import { motion } from 'framer-motion';
import { Facebook, Globe, Mail, MapPin, Phone, Twitter, Youtube, Zap, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { ConsentRevocationLink } from './ConsentRevocationLink';
import { footerContent } from '@/data/landingpage';
import React from 'react';

export default function Footer() {
  return (
    
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
                  { Icon: Instagram, link: footerContent.socialLinks.instagram },
                  { Icon: Youtube, link: footerContent.socialLinks.youtube },
                  { Icon: FaTiktok, link: footerContent.socialLinks.tiktok }
                  
                ].map(({ Icon, link }, index) => (
                  <motion.a 
                    key={index}
                    href={link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100/60 hover:text-[#e6ab65] transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* <div>
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
            </div> */}

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Company</h3>
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
              <h3 className="text-lg md:text-xl mb-2 font-bold text-white">Contact</h3>
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
                {/* <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#e6ab65]" />
                  <a href="mailto:{footerContent.contact.email}" className="text-sm md:text-base text-blue-100/70 hover:text-[#e6ab65] transition-colors break-all">
                    {footerContent.contact.email}
                  </a>
                </li> */}
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