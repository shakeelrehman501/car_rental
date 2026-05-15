import BrandSlider from "@/components/service/BrandSlider";
import HeroSection from "@/components/service/Hero";
import Image from "next/image";

export default function Home() {
  return (
      <main className="w-full  ">
      <div className="relative">
      <Image
            src="/hero_bg.jpg"
            alt="3D Model"
            width={5000}
            height={5000}
            priority={true}
            className="object-contain  w-full h-full"
          />
        <div className="max-w-350 px-3 2xl:px-0 mx-auto">
          <HeroSection />
        </div>
      </div>
          <div className="bg-secondary px-3  2xl:px-0 ">
          <BrandSlider/>
          </div>
      </main>
  );
}
