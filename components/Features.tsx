export default function Features() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://images.unsplash.com/photo-1533591380348-14193f1de18f?q=80&w=1200"
            alt="Van interior"
            className="w-full h-[600px] object-cover rounded-2xl mb-16"
          />
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              Loved by those who believe<br />adventure is mandatory.
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-square">
              <img
                src="https://images.unsplash.com/photo-1533591380348-14193f1de18f?q=80&w=600"
                alt="Adventure photo"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Sarah & Mike</p>
                <p className="text-xs opacity-80">Full-time adventurers</p>
              </div>
            </div>
            <div className="relative aspect-square">
              <img
                src="https://images.unsplash.com/photo-1533591380348-14193f1de18f?q=80&w=600"
                alt="Adventure photo"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Emily & Luna</p>
                <p className="text-xs opacity-80">Weekend warriors</p>
              </div>
            </div>
            <div className="relative aspect-square">
              <img
                src="https://images.unsplash.com/photo-1533591380348-14193f1de18f?q=80&w=600"
                alt="Adventure photo"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Tom & Jessica</p>
                <p className="text-xs opacity-80">Digital nomads</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }