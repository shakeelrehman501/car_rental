

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  {
    name: "Acura",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Acura-logo.png",
  },
  {
    name: "Ford",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
  },
  {
    name: "Bentley",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Bentley_logo_2.svg",
  },
  {
    name: "Chevrolet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Chevrolet-logo.png",
  },
  {
    name: "Ferrari",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d1/Ferrari-Logo.svg",
  },
  {
    name: "Mercedes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
  },
];

 function BrandSlider() {
  return (
    <section className="bg-[#f5f5f5] py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-sm font-semibold tracking-wide text-red-500 uppercase">
          Find Your Car By Brand
        </p>

        <h2 className="mt-2 text-center text-4xl font-bold text-gray-800">
          Browse By Brands
        </h2>

        <div className="relative mt-10">
          {/* arrows */}
          <button className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow md:flex">
            <ChevronLeft className="size-6 text-gray-400" />
          </button>

          <button className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow md:flex">
            <ChevronRight className="size-6 text-gray-400" />
          </button>

          {/* fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-[5] h-full w-24 bg-gradient-to-r from-[#f5f5f5] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-[5] h-full w-24 bg-gradient-to-l from-[#f5f5f5] to-transparent" />

          {/* slider */}
          <div className="group flex overflow-hidden">
            <div className="animate-marquee flex min-w-max gap-6">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex h-[170px] w-[170px] shrink-0 flex-col items-center justify-center border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-16 w-24">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#1d2340]">
                    {brand.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BrandSlider;