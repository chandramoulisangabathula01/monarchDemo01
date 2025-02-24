import React from "react";
import { Compare } from "@/components/ui/autocompare/compare";
 
export function CompareDemo() {
  return (
    <div className="w-full h-full px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
      <div
        className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 mx-auto w-full h-full"
      >
        <Compare
          firstImage="./images/4.png"
          secondImage="./images/4.2.png"
          firstImageClassName="object-cover object-left-top w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          secondImageClassname="object-cover object-left-top w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}