import React from "react";
import Image from "next/image";
import MyButton from "@/components/myComponents/MyButton";

import Link from "next/link";

function HeroSection() {
  return (
    <div className="absolute top-0 mt-32 sm:mt-40 lg:sm:mt-45 xl:mt-50 flex justify-center items-center flex-col-reverse lg:flex-row  lg:justify-between gap-5 pb-4 sm:pb-8 xl:pb-15">
      <div
        className="w-full pb-12 sm:pb-20 max-w-138 min-w-80 flex flex-col justify-between items-center  text-center   space-y-5
        sm:w-96 sm:space-y-6
        md:w-125 md:space-y-7
        lg:w-130 lg:justify-start lg:items-start lg:text-left lg:space-y-8 
        xl:w-138 xl:space-y-10"
      >
        <div className="leading-18">
        <div className="text-[50px] font-semibold">LUXURY</div>

        <div
          className="text-[80px] italic font-extrabold flex flex-col  tracking-tight text-secondary "
        >
          <div className="flex gap-2">
            <span className="text-primary">WHEEL</span> 
            <span> RENTAL</span>
          </div>
        </div>
        <div className="text-[50px] font-semibold">FAST SECURE</div>
        </div>
        <div
          className="  text-secondary 
          text-sm 
           font-extralight
          sm:text-lg  
          md:text-xl"
        >
          <div>
            Experience the thrill of driving premium vehicles at affordable
            prices. Book your dream car today.
          </div>
        </div>
          <div>
            <Link href="/contact">
              <MyButton variant="solid"> Get in touch </MyButton>
            </Link>
          </div>
        
      </div>
      <div className="flex  justify-end items-end">
        <div>
          <Image
            src="/hero_img.png"
            alt="3D Model"
            width={2000}
            height={2000}
            priority={true}
            className="object-contain  max-w-190 min-w-80 w-60 sm:w-120 md:w-140 lg:w-140 xl:w-170 2xl:w-190"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
