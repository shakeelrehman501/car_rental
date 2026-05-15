import { CheckCircle2 } from "lucide-react";
import { whyChooseUsFeatures } from "../../lib/data/constant";


export default function WhyChooseUs() {
  
  return (
    <section id="about" className="py-20 bg-white">
      <div
        
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 `}
      >
        <h2 className="text-center text-3xl md:text-4xl mb-16 text-[#0B0B0B]">
          Why Choose us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Car Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80"
                alt="Car"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            {/* Decorative Background */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#FF2E2E]/10 rounded-lg -z-10"></div>
          </div>

          {/* Right - Features */}
          <div>
            <p className="text-lg text-[#6B7280] mb-8">
              We offer the best experience with our rental deals. Discover the
              perfect car for your journey with unbeatable service and pricing.
            </p>

            <div className="space-y-6">
              {whyChooseUsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg hover:bg-[#F5F5F5] transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#FF2E2E]" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-[#0B0B0B]">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B7280]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
