"use client";


import { MapPin, Mail, Phone, DollarSign, Car, Clock } from 'lucide-react';

function About() {
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[400px] w-full">
        <img
          src="https://images.unsplash.com/photo-1686257295697-e3b5711822a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjaXR5JTIwc2t5bGluZSUyMHJvYWQlMjBoaWdod2F5fGVufDF8fHx8MTc3ODg1NjUzOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="City Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Company Name Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
          Company Name
        </h2>

        {/* About Us Section 1 */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
            About Us:
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            We take pride in our relationship with each of our partners and strive to exceed their expectations on a daily basis. We've
            highly trained team of experienced people, we are able to offer a wide range of services and solutions to all of our customers
            at competitive prices. We're located in a prime location, close to major highways and airports, making it easy for our clients
            and they provide all of our customers with the attention and care they deserve. What it comes to service, we don't cut corners
            or settle for second best. We believe that every single transaction and relationship for us is an investment in our success
            and reputation to provide excellent and personalized service to all of our clients.
          </p>
        </div>

        {/* About Us Section 2 */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
            About Us:
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            We take pride in our relationship with each of our partners and strive to exceed their expectations on a daily basis. We've
            highly trained team of experienced people, we are able to offer a wide range of services and solutions to all of our customers
            at competitive prices. We're located in a prime location, close to major highways and airports, making it easy for our clients
            and they provide all of our customers with the attention and care they deserve. What it comes to service, we don't cut corners
            or settle for second best. We believe that every single transaction and relationship for us is an investment in our success
            and reputation to provide excellent and personalized service to all of our clients.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Feature 1 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">
                  Best price guaranteed
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Find a lower price? We'll refund you 100% of the difference.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <Car className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">
                  Experience driver
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Don't have a driver? Don't worry, we have many experienced and professional drivers for you.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">
                  24 hour car delivery
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Book your car anytime and we will deliver it directly to you.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">
                  Best price guaranteed
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Find a lower price? We'll refund you 100% of the difference.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <Car className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">
                  Experience driver
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Don't have a driver? Don't worry, we have many experienced and professional drivers for you.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">
                  24 hour car delivery
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Book your car anytime and we will deliver it directly to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
