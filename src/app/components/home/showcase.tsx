import React from "react";
import Image from "next/image";

const Showcase: React.FC = () => {
    return (
      <section>
        <div className="self-center w-full max-w-[1231px] mt-32 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="bg-red-50 flex w-full grow pb-0 flex-col flex-1 mx-auto pl-5 pr-1.5 pt-14 rounded-none max-md:mt-10">
                <h3 className="justify-center text-neutral-600 text-4xl leading-[100%] max-w-[311px] ml-7 max-md:ml-2.5">
                  Chaise Molle
                </h3>
                <p className="justify-center text-neutral-500 text-2xl leading-[100%] ml-7 mt-5 max-md:ml-2.5">
                  $18.00
                </p>
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8c1d3b9-7a10-41bb-8a0b-50fb2a7ac391?apiKey=8747f99d6964435eb0741236b489b06f"
                  alt="Product 4"
                  className="aspect-square object-cover object-center w-full overflow-hidden z-[1] mt-5 max-md:ml-px"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-red-50 flex w-full grow flex-col flex-1 mx-auto pl-4 pr-4 pt-14 pb-0.5 rounded-none max-md:mt-10">
                <h3 className="justify-center text-neutral-600 text-4xl leading-[100%] max-w-[311px] ml-8 max-md:ml-2.5">
                  Chaise Molle
                </h3>
                <p className="justify-center text-neutral-500 text-2xl leading-[100%] ml-8 mt-5 max-md:ml-2.5">
                  $48.00
                </p>
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e0abe66-869d-4faf-a4e8-c1b37af1401b?apiKey=8747f99d6964435eb0741236b489b06f"
                  alt="Product 5"
                  className="aspect-[1.62] object-cover object-center w-full overflow-hidden grow mt-24 max-md:mt-10"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-red-50 flex w-full grow pb-0 flex-col flex-1 mx-auto pl-5 pr-3 pt-14 rounded-none max-md:mt-10">
                <h3 className="justify-center text-neutral-600 text-4xl leading-[100%] max-w-[311px] ml-7 max-md:ml-2.5">
                  Chaise Molle
                </h3>
                <p className="justify-center text-neutral-500 text-2xl leading-[100%] ml-7 mt-5 max-md:ml-2.5">
                  $78.00
                </p>
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b25d88c-5de8-4435-be34-f58ebb0521cd?apiKey=8747f99d6964435eb0741236b489b06f"
                  alt="Product 6"
                  className="aspect-[1.25] object-cover object-center w-full overflow-hidden z-[1] mt-20 max-md:ml-2 max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Showcase;