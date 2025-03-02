'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Living Room Transformation',
    category: 'interior',
    image: '/images/1.png',
    description: 'Complete interior renovation with premium finishes'
  },
  {
    id: 2,
    title: 'Commercial Office Space',
    category: 'commercial',
    image: '/images/4.png',
    description: 'Professional painting for corporate environment'
  },
  {
    id: 3,
    title: 'Exterior Home Makeover',
    category: 'exterior',
    image: '/images/17.png',
    description: 'Weather-resistant exterior painting'
  },
  {
    id: 4,
    title: 'Luxury Apartment Complex',
    category: 'commercial',
    image: '/images/8.png',
    description: 'High-end residential complex renovation'
  },
  {
    id: 5,
    title: 'Victorian Home Restoration',
    category: 'exterior',
    image: '/images/11.2.png',
    description: 'Historical property restoration'
  },
  {
    id: 6,
    title: 'Modern Kitchen Redesign',
    category: 'interior',
    image: '/images/5.2.png',
    description: 'Contemporary kitchen transformation'
  },
  // Add more projects as needed
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setFilteredProjects(
      selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory)
    );
  }, [selectedCategory]);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'commercial', label: 'Commercial' }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[50vh] bg-[#711f50] text-white flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/4.png"
          alt="Projects Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover our portfolio of exceptional painting and decorating work
          </p>
        </div>
      </motion.div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#711f50] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                layout: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden">
          {selectedProject && (
            <div className="relative">
              <div className="aspect-[16/9] relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-[#711f50]">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}