export default function WeekendExperience() {
    return (
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533591380348-14193f1de18f?q=80&w=1200"
            alt="Weekend experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl font-medium text-white mb-6">
                Experience the Noovo life<br />for a weekend.
              </h2>
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }