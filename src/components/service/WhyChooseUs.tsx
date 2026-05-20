import { CheckCircle2 } from "lucide-react";
import { whyChooseUsFeatures } from "../../lib/data/constant";
import Heading from "@/components/myComponents/Heading";


export default function WhyChooseUs() {
  
  return (
    <section id="about" className="py-20 bg-white">
      <div
        
        className={` sm:px-6 lg:px-8 transition-all duration-1000 `}
      >
        <Heading
          heading="Why"
          gradientHeading="Choose Us"
          paragraph="Discover the best car rental experience with unbeatable deals, reliable service, and top-quality vehicles designed to make every journey smooth and comfortable."
        />

        <div className="w-full max-w-350 min-w-66 mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Car Image */}
          <div className="relative">
            
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80"
                alt="Car"
                className="w-full h-120 object-cover rounded-lg"
              />
            </div>
            
          </div>

          {/* Right - Features */}
          <div>
            
            <div className="space-y-1 flex flex-col justify-between">
              {whyChooseUsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className="flex items-start gap-6 hover:bg-gray-100 px-3 py-4 rounded-sm">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                      <feature.icon className="w-5.5 h-5.5 text-red-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-[18px]">
                        {feature.title}
                      </h4>
                      <p className="text-[16px] text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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
