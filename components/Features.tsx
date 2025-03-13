export default function Features() {
    return (
      <section className="py-4 md:py-6 bg-gradient-to-t from-[#f7d5c5] to-[#ede2db] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <img
            src="./images/16.png"
            alt="Professional painting"
            className="w-full h-[600px] object-cover rounded-2xl mb-16"
          /> */}
          
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#711f50]">
              Staffordshire's Premier Painters
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Serving Rugeley, Lichfield, Tamworth, Sutton Coldfield, Birmingham, and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="relative aspect-square w-full">
              <img
                src="/images/gallery/steps 4.jpg"
                alt="Office painting"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-3 sm:p-4 rounded-full">
                <p className="text-sm sm:text-base font-medium text-white">Commercial Painting</p>
                <p className="text-xs sm:text-sm text-white/90">Boosting productivity & brand image</p>
              </div>
            </div>
            <div className="relative aspect-square flex-shrink-0 w-[85vw] md:w-auto snap-center">
              <img
                src="/images/gallery/outdoor 3.jpg"
                alt="Residential painting"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-4 rounded-full">
                <p className="text-sm font-medium text-white">Residential Decorating</p>
                <p className="text-xs text-white/90">Bringing your vision to life</p>
              </div>
            </div>
            <div className="relative aspect-square flex-shrink-0 w-[85vw] md:w-auto snap-center">
              <img
                src="/images/gallery/outdoor 1.jpg"
                alt="Commercial painting"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-4 rounded-full">
                <p className="text-sm font-medium text-white">Exterior Solutions</p>
                <p className="text-xs text-white/90">Durable & weather-resistant finishes</p>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#711f50] text-center">Premium Paint Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 sm:h-48 mb-4 rounded-xl overflow-hidden">
                  <img
                    src="/images/tech1.jpg"
                    alt="Emperor Masonry Paint"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#711f50]">Exterior Masonry</h3>
                <p className="text-gray-600 mb-2">Premium choices:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Emperor Masonry Paint</li>
                  <li>• Wethertex AP77</li>
                  <li>• Dulux Weathershield</li>
                </ul>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 sm:h-48 mb-4 rounded-xl overflow-hidden">
                  <img
                    src="/images/tech2.webp"
                    alt="Interior Paint"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#711f50]">Interior Walls</h3>
                <p className="text-gray-600 mb-2">Recommended products:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Isomat Premium Colour</li>
                  <li>• Crown Trade Clean Extreme</li>
                  <li>• Benjamin Moore Scuff-X</li>
                </ul>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 sm:h-48 mb-4 rounded-xl overflow-hidden">
                  <img
                    src="/images/tech3.webp"
                    alt="Woodwork Paint"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#711f50]">Woodwork</h3>
                <p className="text-gray-600 mb-2">Professional finishes:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Zinsser AllCoat</li>
                  <li>• Caparol PU System</li>
                  <li>• Sikkens HLS Plus</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 bg-gray-50 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#711f50]">Our Approach</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
                With over 30 years of experience, we deliver precise execution, 
                on-time delivery, and strict adherence to health and safety guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }