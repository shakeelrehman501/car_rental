
import React from 'react'
import FeedbackCarousel from './FeedbackCarousel';


function Feedback() {
  
  return (
    <div className=" w-full bg-secondary relative">
  
  <div
    className="absolute inset-0 z-0  dark:hidden"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,1) 1px, transparent 1px),
        radial-gradient(circle 500px at 100% 100%, rgba(139,92,246,0.05), transparent),
        radial-gradient(circle 500px at 100% 100%, rgba(59,130,246,0.05), transparent)
      `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
  

    <div className="py-15 space-y-10">
        
      <div className="w-full mx-auto   flex justify-center items-center">
        <div  className="text-4xl font-semibold text-secondary-foreground z-1">
          FeedBack
        </div>
      </div>
      <div >
      <FeedbackCarousel/>
      </div>
    </div>
     
    </div>
  );
}
export default Feedback;
