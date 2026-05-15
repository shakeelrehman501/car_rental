"use client";

// import {AnimatedSection} from "@/components/ui/AnimatedSection"
// import {AnimatedItem} from "@/components/ui/AnimatedItem"

type Props = {
  heading?: string;
  gradientHeading?: string;
  paragraph?: string;
  className?: string;
};

function Heading({ heading, gradientHeading, paragraph, className }: Props) {
  return (
    <div className="text-center mb-16">
      <div >
      <div className="flex w-fit mx-auto gap-2.5 font-bold">
        <h1 className="text-4xl  leading-12 lg:text-[48px] text-secondary-foreground  ">
          {heading}
        </h1>
              
        <h1
          className={`text-4xl lg:text-[48px] leading-12 
            text-primary ${className}`}
        >
          {gradientHeading}
        </h1>
      </div>
        </div>
      <div >
      <p className="text-base font-normal  text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
        {paragraph}
      </p>
      </div>

      <div>
      <div className="mt-6 mx-auto w-24 h-2 rounded-full bg-gradient-to-r from-secondary-foreground to-primary" />
      </div>

    </div>
  );
}

export default Heading;
