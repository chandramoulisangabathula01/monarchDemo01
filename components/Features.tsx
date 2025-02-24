export default function Features() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="./images/16.png"
            alt="Professional painting"
            className="w-full h-[600px] object-cover rounded-2xl mb-16"
          />
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              Transforming Spaces Across Staffordshire
            </h2>
            <p className="text-lg text-gray-600">
              Serving Rugeley, Lichfield, Tamworth, Sutton Coldfield, Birmingham, and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-square">
              <img
                src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=600"
                alt="Office painting"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Commercial Painting</p>
                <p className="text-xs opacity-80">Boosting productivity & brand image</p>
              </div>
            </div>
            <div className="relative aspect-square">
              <img
                src="https://images.unsplash.com/photo-1613977257365-6d0409f843ca?q=80&w=600"
                alt="Residential painting"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Residential Decorating</p>
                <p className="text-xs opacity-80">Bringing your vision to life</p>
              </div>
            </div>
            <div className="relative aspect-square">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
                alt="Exterior painting"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Exterior Solutions</p>
                <p className="text-xs opacity-80">Durable & weather-resistant finishes</p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-4">Our Materials</h3>
              <p className="text-gray-600 mb-4">
                We use only premium quality paints including Emperor Masonry Paint, 
                Wethertex AP77, and Dulux Weathershield for exterior surfaces.
              </p>
              <p className="text-gray-600">
                For interiors, we recommend Isomat Premium Colour and Crown Trade Clean Extreme.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-4">Our Approach</h3>
              <p className="text-gray-600">
                With over 30 years of experience, we deliver precise execution, 
                on-time delivery, and strict adherence to health and safety guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }