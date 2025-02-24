export default function Testimonials() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              Stories from the road
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our community of adventurers who have made the leap into van life.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100"
                  alt="Testimonial author"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">3 months on the road</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The attention to detail in our Noovo van is incredible. Every inch of space is thoughtfully designed, making our transition to van life seamless."
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
                  alt="Testimonial author"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">Mike Chen</h3>
                  <p className="text-sm text-gray-600">1 year of adventures</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As digital nomads, having a reliable workspace was crucial. Noovo nailed it with their ergonomic design and power solutions."
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
                  alt="Testimonial author"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">Emily Parker</h3>
                  <p className="text-sm text-gray-600">6 months exploring</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The 24/7 support has been a game-changer. Knowing we have backup whenever we need it gives us the confidence to explore further."
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }