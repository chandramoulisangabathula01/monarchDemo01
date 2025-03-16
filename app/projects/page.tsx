'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Footer from '@/components/footer';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

import { galleryImages, categories, heroContent, ITEMS_PER_PAGE } from '@/data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [filteredProjects, setFilteredProjects] = useState(galleryImages);

  useEffect(() => {
    setFilteredProjects(
      selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(project => project.category === selectedCategory)
    );
    setVisibleItems(ITEMS_PER_PAGE); // Reset visible items when category changes
  }, [selectedCategory]);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const loadMore = () => {
    setVisibleItems(prev => prev + ITEMS_PER_PAGE);
  };

  const hasMore = visibleItems < filteredProjects.length;

  return (
    <main className="min-h-screen bg-[#ede2db]">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative  h-[40vh] sm:h-[50vh] md:h-[60vh] bg-[#711f50] text-white flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/studio/20250120_133706_Edited.webp"
          alt="Projects Hero"
          fill
          className="object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
          priority
        />
        <div className="relative z-20 text-center px-4 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">Our Projects</h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto drop-shadow-md">
            Discover our portfolio of exceptional painting and decorating work
          </p>
        </div>
      </motion.div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-base md:text-lg ${
                selectedCategory === category.id
                  ? 'bg-[#711f50] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8"
        >
          {filteredProjects.slice(0, visibleItems).map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0,  }}
              animate={{ opacity: 1,  }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                layout: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-white"
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
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={loadMore}
              className="bg-[#711f50] text-white px-6 py-3 rounded-full font-medium hover:bg-[#8a2761] transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
            </motion.button>
          </div>
        )}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-gradient-to-br rounded-3xl sm:rounded-3xl from-white to-gray-50 p-0 shadow-lg transform transition-all duration-300 scale-95 open:scale-100 border border-gray-100">
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Close button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-50 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 p-1.5 rounded-full shadow-sm transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="aspect-[3/2] relative group border-2 overflow-hidden rounded-3xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-[#711f50]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-md transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                </div>
              </div>
              
              <div className="p-5 md:p-6 space-y-4 relative">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#711f50]/30 to-transparent"></div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-2xl md:text-3xl font-bold text-[#711f50] leading-tight"
                  >
                    {selectedProject.title}
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex items-center"
                  >
                    <span className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V10"></path>
                        <path d="M18 20V4"></path>
                        <path d="M6 20v-6"></path>
                      </svg>
                      Project #{selectedProject.id}
                    </span>
                  </motion.div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <h3 className="text-base font-semibold text-gray-800 mb-2">Project Details</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                    <button className="bg-[#711f50] hover:bg-[#8a2761] text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-sm hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                        <polyline points="10 17 15 12 10 7"></polyline>
                        <line x1="15" y1="12" x2="3" y2="12"></line>
                      </svg>
                      Request Similar Project
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      <Footer/>
    </main>
  );
}