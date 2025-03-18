'use client';

import { useState, useEffect } from 'react';
import { featuresContent } from '@/data/services';

const ProductCard = ({ 
  images, 
  title, 
  description, 
  products 
}: {
  images: Array<{ src: string; alt: string }>;
  title: string;
  description: string;
  products: string[];
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-40 sm:h-48 mb-4 rounded-xl overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#711f50]">{title}</h3>
      <p className="text-gray-800 mb-2">{description}</p>
      <ul className="text-gray-800 space-y-1">
        {products.map((product, index) => (
          <li key={index} className="flex items-center gap-1 group">
            • <a 
                href={featuresContent.paintProductLinks[product]}
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#711f50] transition-colors duration-300 flex items-center gap-1"
              >
                {product}
                <svg 
                  className="w-4 h-4 -rotate-45 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Features() {
  return (
    <section className="py-4 md:py-6 bg-gradient-to-t from-[#f7d5c5] to-[#ede2db] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#711f50]">
            {featuresContent.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-800 max-w-3xl mx-auto">
            {featuresContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {featuresContent.services.map((service, index) => (
            <div key={index} className="relative aspect-square w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-3 sm:p-4 rounded-full">
                <p className="text-sm sm:text-base font-medium text-white">{service.title}</p>
                <p className="text-xs sm:text-sm text-white/90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#711f50] text-center">Premium Paint Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {featuresContent.paintProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 bg-gray-50 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#711f50]">{featuresContent.approach.title}</h3>
            <p className="text-sm sm:text-base text-gray-800 max-w-full ">
              {featuresContent.approach.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}