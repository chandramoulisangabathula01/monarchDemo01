'use client';

import { features2Content } from '@/data/landingpage';

export default function Features2() {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[#711f50]">
            {features2Content.title}
          </h2>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            {features2Content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-[#711f50] p-4 sm:p-6 md:p-8 rounded-2xl">
            <div className="aspect-w-16 aspect-h-9 mb-4 sm:mb-5 md:mb-6">
              <img
                src={features2Content.premiumQuality.image}
                alt="Premium Quality Work"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl text-[#e6ab65] font-bold mb-2 sm:mb-3">{features2Content.premiumQuality.title}</h3>
            <p className="text-white text-base sm:text-lg md:text-xl">
              {features2Content.premiumQuality.description}
            </p>
          </div>

          <div className="grid grid-rows-1 gap-4 md:gap-6">
            <div className="bg-[#711f50] p-4 md:p-6 rounded-2xl block">
              <h3 className="text-xl md:text-2xl text-[#e6ab65] font-bold mb-2 md:mb-3">{features2Content.experiencedTeam.title}</h3>
              {features2Content.experiencedTeam.points.map((point, index) => (
                <p key={index} className="text-white flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-3 flex-shrink-0 md:w-6 md:h-6">
                    <path fill="#711f50" d="M20 6.91L17.09 4a2.92 2.92 0 0 0-4.11 0L3.91 13.09a2.92 2.92 0 0 0 0 4.11L6.82 20a2.92 2.92 0 0 0 4.11 0l9.07-9.07a2.92 2.92 0 0 0 0-4.11zM9.88 18.94a1.92 1.92 0 0 1-2.71 0l-2.91-2.91a1.92 1.92 0 0 1 0-2.71l9.07-9.07a1.92 1.92 0 0 1 2.71 0l2.91 2.91a1.92 1.92 0 0 1 0 2.71l-9.07 9.07z"/>
                    <path fill="#e6ab65" d="M16.5 7.5l-9 9"/>
                  </svg>
                  {point}
                </p>
              ))}
            </div>
            <div className="bg-[#a6785c]/50 text-[#711f50] p-4 md:p-6 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{features2Content.freeQuotes.title}</h3>
              {features2Content.freeQuotes.points.map((point, index) => (
                <p key={index} className="text-black flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-3 flex-shrink-0 md:w-6 md:h-6">
                    <path fill="#711f50" d="M20 6.91L17.09 4a2.92 2.92 0 0 0-4.11 0L3.91 13.09a2.92 2.92 0 0 0 0 4.11L6.82 20a2.92 2.92 0 0 0 4.11 0l9.07-9.07a2.92 2.92 0 0 0 0-4.11zM9.88 18.94a1.92 1.92 0 0 1-2.71 0l-2.91-2.91a1.92 1.92 0 0 1 0-2.71l9.07-9.07a1.92 1.92 0 0 1 2.71 0l2.91 2.91a1.92 1.92 0 0 1 0 2.71l-9.07 9.07z"/>
                    <path fill="#e6ab65" d="M16.5 7.5l-9 9"/>
                  </svg>
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}