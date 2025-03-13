import Script from 'next/script';

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-t from-[#ede2db] to-[#f7d5c5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="md:text-5xl font-bold mb-4 text-[#711f50] sm:text-4xl text-3xl">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read authentic reviews from our satisfied clients on Google.
          </p>
        </div>

        <div className="trustmary-widget">
          {/* Replace YOUR_WIDGET_ID with the actual widget ID from TrustMary */}
          <div data-trustmary-widget="YOUR_WIDGET_ID"></div>
          <Script
            src="https://widget.trustmary.com/embed-1.js"
            strategy="afterInteractive"
          />
        </div>

        <div className="text-center mt-8">
          <a
            href="https://widget.trustmary.com/give-review?id=YOUR_WIDGET_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#711f50] hover:bg-[#8b2762] transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
}