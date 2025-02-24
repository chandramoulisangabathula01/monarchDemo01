// import { ColourfulText } from "./colourful-text";
// import { CompareDemo } from "./compare-demo";

import { CompareDemo } from "./demo";
import { ColourfulText } from "./ui/colourful-text";

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full px-4 md:px-8 py-8 md:py-16">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center text]= items-center md:items-start text-center md:text-left space-y-4 md:space-y-8 order-1">
        <div className="space-y-2 md:space-y-4">
          <h1 className="font-bold leading-tight text-4xl md:text-6xl">
            TRANSFORM YOUR
          </h1>
          <h1 className="font-bold leading-tight text-4xl md:text-6xl">
            SPACE WITH
          </h1>
          <h1 className="font-bold leading-tight text-4xl md:text-6xl">
            <div className="block md:hidden">
              <ColourfulText text="MONARCH"/>
              <ColourfulText text="PAINTERS" />
            </div>
            <div className="hidden md:block">
              <ColourfulText text="MONARCH " />
              <ColourfulText text="PAINTERS" />
            </div>
          </h1>
        </div>
        <p className="text-gray-600 text-sm md:text-base">
          Staffordshire's premier painting and decorating service with 35+ years
          of expertise.
        </p>
        <div className="flex flex-row gap-8 w-full justify-center md:justify-start">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-blue-500">35+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-blue-500">1000+</h3>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
        </div>
      </div>

      {/* Image/Compare Section */}
      <div className="flex-1 order-2 md:order-2">
        {/* Mobile View - Image */}
        <div className="w-full h-96 bg-gray-200 rounded-3xl mb-8 md:hidden">
          <img src="/path/to/mobile-image.jpg" alt="Mobile View" className="w-full h-full object-cover rounded-3xl" />
        </div>
        
        {/* Tablet/Desktop View - CompareDemo */}
        <div className="hidden md:block relative overflow-hidden rounded-3xl h-full">
          <CompareDemo />
        </div>
      </div>
    </div>
  );
}
// 