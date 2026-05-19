import BrandSlider from "@/components/service/BrandSlider";
import Feedback from "@/components/service/Feedback";
import HeroSection from "@/components/service/Hero";
import Projects from "@/components/service/Projects";
import WhyChooseUs from "@/components/service/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
      <main className="w-full  bg-white">
      <div className="relative">
      <Image
            src="/others/hero_bg.jpg"
            alt="3D Model"
            width={5000}
            height={5000}
            priority={true}
            className="object-cover z-0  w-full  h-220  hidden lg:block"
          />
      <Image
            src="/others/hero_bg_mob.jpg"
            alt="3D Model"
            width={5000}
            height={5000}
            priority={true}
            className=" object-contain z-0 w-full h-full hidden  md:block lg:hidden"
          />
      <Image
            src="/others/hero_bg_mob.png"
            alt="3D_Model"
            width={5000}
            height={5000}
            priority={true}
            className="object-cover z-0 min-w-80 w-full   min-h-206 max-h-220 h-full   block md:hidden"
          />
        <div className="object-contain max-w-350 absolute  left-1/2 -translate-x-1/2  w-full px-1 2xl:px-0  z-10
        top-30
        sm:top-35
        md:top-40
        lg:top-50
        ">
          <HeroSection />
        </div>
      </div>
          <div className="bg-secondary  ">
          <BrandSlider/>
          </div>
          <div className="">
            <Projects/>
            <WhyChooseUs/>
            <Feedback/>
          </div>
      </main>
  );
}
