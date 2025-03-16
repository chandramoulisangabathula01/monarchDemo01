"use client";
// bg-[#f5e6da]
// bg-[#d9c2d4]
// bg-[#ede2db]
// bg-[#f7d5c5]
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
// import Testimonials from "@/components/testimonials";
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
import Expertise from "@/components/Expertise ";
import Features2 from "@/components/Features2";
import Tools from "@/components/tools";
import Testimonials from "@/components/testimonials";
// import { Testimonials } from "@/components/testimonials";

// import { Preview } from "@/components/demo2";
export default function Home() {
  return (
    <main className="min-h-screen  bg-[#ede2db] pt-[28px] overflow-hidden">
      {/* Hero Section */}
      <Hero />
      <Hero2 />
      {/* <Hero3/> */}
     <Expertise/>
      {/* Features Section */}
      <Features2 />
      {/* Features Section */}
      <Features />

      <Tools/>
      {/* Testimonials Section */}
      {/* <Testimonials /> */}
      {/* Weekend Experience Section */}
      <WeekendExperience />
      {/* FAQ Section */}
      <FAQ />
      {/* Footer Section */}
      <Footer />

      {/* #e6ab65 */}


    </main>
  );
}
