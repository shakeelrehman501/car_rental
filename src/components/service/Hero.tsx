import React from "react";
import Image from "next/image";
import MyButton from "@/components/myComponents/MyButton";

import Link from "next/link";

function HeroSection() {
  return (
    <div className="flex min-w-50 w-full flex-col gap-6  justify-between">

      {/* Left Side */}
        <div className="space-y-5 xl:space-y-18 flex flex-col items-center">
          {/* 
      w-full  pb-12 sm:pb-20 max-w-138 min-w-80 flex flex-col justify-between items-center  text-center   space-y-5 
        sm:w-96 sm:space-y-6
        md:w-125 md:space-y-7
        lg:w-130 lg:justify-start lg:items-start lg:text-left lg:space-y-8 
        xl:w-138 xl:space-y-10 */}
          <div className="text-white  text-center
          leading-13
          lg:leading-26
          xl:leading-28
          ">
          {/* text-[50px] leading-12 font-semibold flex flex-col tracking-tight text-primary-foreground  
          sm:text-[80px] sm:leading-18 
          md:text-[90px] md:leading-20 
          lg:text-[80px] lg:leading-18 
          xl:text-[102px] xl:leading-22 */}
            <div className="text-[42px] lg:text-[70px] xl:text-[82px] font-medium">Luxury</div>

            <div className="font-extrabold  tracking-wide">
              <div className="text-[60px] lg:text-[120px] xl:text-[140px]  gap-2 ">
                <div className="text-primary ">Car</div>
                <div > Rental</div>
              </div>
            </div>
            <div className="text-[50px] lg:text-[80px] xl:text-[102px]  font-medium">In Lahore</div>
          </div>

          <div>
            <Link href="/contact">
              <MyButton variant="solid"> Get in touch </MyButton>
            </Link>
          </div>
        </div>

      {/* Right Side */}
      <div className=" flex items-end justify-center lg:justify-end">
        <div>
          <Image
            src="/hero_img.png"
            alt="3D Model"
            width={3000}
            height={3000}
            priority={true}
            className="object-contain w-full min-w-90 max-w-130"
          />
          {/* sm:w-120 md:w-140 lg:w-170 xl:w-210 2xl:w-220 */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
