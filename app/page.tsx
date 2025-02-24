"use client";

import {
  // Search,
  // Compass,
  Building2,
  Building,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
// import { Button } from "@/components/ui/button";
import Testimonials from "@/components/testimonials";
// import { Input } from "@/components/ui/input";
// import { Select } from "../components/ui/select";
import Features from "@/components/Features";
import WeekendExperience from "@/components/wekendedExperiment";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
// import { motion } from "framer-motion";
import "./globals.css";
import { Hero } from "@/components/hero";
import Hero2 from "@/components/hero2";
export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-[28px]">
      {/* Hero Section */}
      <Hero />
      <Hero2 />

      {/* Expertise Section */}
      <div className="bg-black text-white px-4 md:px-8 py-8 md:py-16 rounded-3xl mx-4 md:mx-8">
        <div className="flex justify-between items-center mb-4 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
          <ArrowUpRight className="w-6 h-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {[
            {
              image: "./images/4.png",
              title: "Residential",
              description: "Transforming homes with precision and care",
            },
            {
              image: "./images/6.png",
              title: "Commercial",
              description: "Professional painting for business spaces",
            },
            {
              image: "./images/7.png",
              title: "Quality",
              description: "Using premium tools and materials",
            },
            {
              image: "./images/8.png",
              title: "Reliability",
              description: "35+ years of trusted service",
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="relative h-64 rounded-xl overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Why Choose Monarch Painters?
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Professional painting services you can trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-gray-50 p-4 md:p-8 rounded-2xl">
            <img
              src="./images/7.png"
              alt="Property Insurance"
              className="w-full rounded-xl mb-4"
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              We use only the highest quality paints and materials for lasting
              results.
            </p>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="bg-gray-50 p-4 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Experienced Team</h3>
              <p className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                  <path d="M20.71 3.29a1 1 0 0 0-1.42 0l-6.29 6.3-1.42-1.42a1 1 0 0 0-1.42 0L3.29 13.29a1 1 0 0 0 0 1.42l6.29 6.29a1 1 0 0 0 1.42 0l6.29-6.29a1 1 0 0 0 0-1.42l-1.42-1.42 6.3-6.29a1 1 0 0 0 0-1.42z"/>
                </svg>
                Our skilled painters have 35+ years of combined experience.
              </p>
              <p className="text-gray-600 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                  <path d="M20.71 3.29a1 1 0 0 0-1.42 0l-6.29 6.3-1.42-1.42a1 1 0 0 0-1.42 0L3.29 13.29a1 1 0 0 0 0 1.42l6.29 6.29a1 1 0 0 0 1.42 0l6.29-6.29a1 1 0 0 0 0-1.42l-1.42-1.42 6.3-6.29a1 1 0 0 0 0-1.42z"/>
                </svg>
                We specialize in industrial painting with minimal downtime, using only the highest quality products for maximum durability.
              </p>
            </div>
            <div className="bg-blue-500 text-white p-4 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Free Quotes</h3>
              <p className="text-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                  <path d="M20.71 3.29a1 1 0 0 0-1.42 0l-6.29 6.3-1.42-1.42a1 1 0 0 0-1.42 0L3.29 13.29a1 1 0 0 0 0 1.42l6.29 6.29a1 1 0 0 0 1.42 0l6.29-6.29a1 1 0 0 0 0-1.42l-1.42-1.42 6.3-6.29a1 1 0 0 0 0-1.42z"/>
                </svg>
                Get a no-obligation quote for your painting project today.
              </p>
              <p className="text-blue-100 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                  <path d="M20.71 3.29a1 1 0 0 0-1.42 0l-6.29 6.3-1.42-1.42a1 1 0 0 0-1.42 0L3.29 13.29a1 1 0 0 0 0 1.42l6.29 6.29a1 1 0 0 0 1.42 0l6.29-6.29a1 1 0 0 0 0-1.42l-1.42-1.42 6.3-6.29a1 1 0 0 0 0-1.42z"/>
                </svg>
                Our home decorators create spaces that reflect your personality while enhancing your home's aesthetics. Contact us for a personalized consultation!
              </p>
              <p className="text-blue-100 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                  <path d="M20.71 3.29a1 1 0 0 0-1.42 0l-6.29 6.3-1.42-1.42a1 1 0 0 0-1.42 0L3.29 13.29a1 1 0 0 0 0 1.42l6.29 6.29a1 1 0 0 0 1.42 0l6.29-6.29a1 1 0 0 0 0-1.42l-1.42-1.42 6.3-6.29a1 1 0 0 0 0-1.42z"/>
                </svg>
                We're committed to excellence, delivering unparalleled quality in every project, whether it's industrial, commercial, or residential.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Weekend Experience Section */}
      <WeekendExperience />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
