export default function Footer() {
  return (
    <footer className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-4">Subscribe to be part of our latest news.</h3>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-black/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1533591380348-14193f1de18f?q=80&w=100"
                alt="Review"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1 text-yellow-400">
                  ★★★★★
                </div>
                <p className="text-sm text-gray-600">via Google</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "I love your build because you made it for people like us who don't know what we're doing. It just works!"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200">
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Features</li>
              <li>Pricing</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>info@noovo.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold">noovo</div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-black">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-black">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-black">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}