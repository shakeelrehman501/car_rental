import BrandSlider from "@/components/service/BrandSlider";
import Feedback from "@/components/service/Feedback";
import HeroSection from "@/components/service/Hero";
import Projects from "@/components/service/Projects";
import WhyChooseUs from "@/components/service/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
      <main className="w-full h-500 bg-primary-foreground">
      <div className="relative">
      <Image
            src="/others/hero_bg.jpg"
            alt="3D Model"
            width={5000}
            height={5000}
            priority={true}
            className="object-contain  w-full h-full hidden lg:block"
          />
      <Image
            src="/others/hero_bg_mob.jpg"
            alt="3D Model"
            width={5000}
            height={5000}
            priority={true}
            className="object-contain w-full h-full block lg:hidden"
          />
        <div className="max-w-350 px-3 2xl:px-0 mx-auto ">
          <HeroSection />
        </div>
      </div>
          {/* <div className="bg-secondary px-3  2xl:px-0 ">
          <BrandSlider/>
          </div>
          <div className="">
            <Projects/>
            <WhyChooseUs/>
            <Feedback/>
          </div> */}
      </main>
  );
}
