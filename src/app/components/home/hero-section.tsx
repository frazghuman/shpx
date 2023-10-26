import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
    return (
      <section>
        <div className="flex justify-center gap-5 md:h-[666px] h-[300px] relative">
          <div className="absolute z-30 md:w-[663px] w-[66%] md:bottom-0 bottom-[25%] left-0">
            <div className="justify-center items-start backdrop-blur-[10px] bg-white bg-opacity-80 flex grow flex-col mx-auto md:px-28 px-10 md:py-16 py-8 max-md:max-w-full max-md:mt-10">
              <h2 className="justify-center text-neutral-600 md:text-6xl text-2xl leading-[100%] max-md:max-w-full max-md:text-2xl max-md:leading-5">
                Modern Interior for your Dream House
              </h2>
              <p className="text-neutral-500 md:text-2xl text-base leading-[120%] max-w-full">
                We custom make design to suits your needs.
              </p>
            </div>
          </div>
          <div className="absolute z-20 w-full flex justify-center max-md:max-h-[350px]">
            <Image
              loading="lazy"
              src="/assets/image 1_304_728.png"
              alt="Image 3"
              className="aspect-[1.47] object-cover object-center w-[963px] overflow-hidden max-w-full"
                width={963}
                height={100}
            />
          </div>
          <div className="absolute z-10 right-0">
            <Image
              loading="lazy"
              src="/assets/Rectangle%202_304_727.svg"
              alt="Image 4"
              className="aspect-[3.75] object-cover object-center w-[776px] fill-red-50 overflow-hidden max-w-full mt-14 max-md:mt-10"
                width={776}
                height={100}
            />
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;