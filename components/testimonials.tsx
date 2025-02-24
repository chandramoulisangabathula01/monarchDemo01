export default function Testimonials() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients who have transformed their spaces with Monarch Painters.
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
                  <p className="text-sm text-gray-600">Rugeley Homeowner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The attention to detail from Monarch Painters was incredible. They transformed our living space with their professional approach and high-quality finishes."
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
                  <p className="text-sm text-gray-600">Birmingham Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Our office transformation was completed on time and on budget. The team's use of dustless extraction systems made the process clean and efficient."
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
                  <p className="text-sm text-gray-600">Lichfield Resident</p>
                </div>
              </div>
              <p className="text-gray-600">
                "From the initial consultation to the final touches, Monarch Painters exceeded our expectations. Their use of premium materials ensures our walls look stunning."
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }