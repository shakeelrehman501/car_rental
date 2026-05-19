import React from "react";
import Image from "next/image";
import MyButton from "@/components/myComponents/MyButton";

import Link from "next/link";

function HeroSection() {
  return (
    <div
      className="flex min-w-50 w-full flex-col 
    justify-between
    gap-6
    sm:gap-10
    lg:flex-row
    "
    >
      {/* Left Side */}
      <div
        className="space-y-3 xl:space-y-12 flex flex-col items-center
      lg:items-start lg:px-2
      "
      >
        
        <div
          className="text-white text-center
          leading-13
          sm:leading-16
          lg:leading-26 lg:text-start
          xl:leading-28          "
        >
          <div
            className="font-medium
            text-[42px] 
            sm:text-[50px]
            lg:text-[70px] 
            xl:text-[75px]"
          >
            Luxury
          </div>

          <div className="font-extrabold  tracking-wide">
            <div
              className="
              text-[60px] gap-2
              sm:text-[75px] sm:gap-4
              lg:text-[110px] 
              xl:text-[110px]  "
            >
              <div className="text-primary flex gap-6">Car <span className="text-white">Rental</span></div>
            </div>
          </div>
          <div
            className="font-medium
            text-[50px] 
            lg:text-[80px] 
            xl:text-[94px]"
          >
            In Lahore
          </div>
        </div>
          <div className="text-white">
            <p className="text-[19px] font-light">Discover premium car rentals offering exceptional comfort, trusted reliability, and the most competitive pricing for your journeys</p>
          </div>

        <div>
          <Link href="/contact">
            <MyButton variant="solid"> Book now</MyButton>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className=" flex items-end justify-center lg:justify-end">
        <div>
          <Image
            src="/hero_img.png"
            alt="3D Model"
            width={4000}
            height={4000}
            priority={true}
            className="object-contain w-full min-w-90 
            max-w-120
            sm:max-w-140
            md:max-w-160
            lg:max-w-200
            xl:w-280
            "
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
