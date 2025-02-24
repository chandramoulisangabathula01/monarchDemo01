export default function WeekendExperience() {
    return (
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="./images/14.png"
            alt="Weekend experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl font-medium text-white mb-6">
                Professional Services You Can Trust
              </h2>
              <p className="text-white mb-6">
                We take pride in our top-tier craftsmanship and attention to detail, ensuring every project reflects your unique style and vision. From cosy spaces to expansive properties, we approach every job with professionalism and dedication.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors">
                Explore Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }