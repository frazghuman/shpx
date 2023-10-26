import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
      <section>
        <div className="self-center w-full max-w-screen-xl mt-64 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[71%] max-md:w-full max-md:ml-0">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a95fbc8-ff26-4d80-853f-b17afe7a3628?apiKey=8747f99d6964435eb0741236b489b06f"
                alt="Image 7"
                className="aspect-[1.13] object-cover object-center w-full overflow-hidden grow rounded-none max-md:max-w-full max-md:mt-10"
                width={300} // Set the width of the image in pixels
        height={200} // Optionally, set the height of the image in pixels
              />
            </div>
            <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:mt-10">
                <h2 className="justify-center text-neutral-600 text-6xl leading-[100%] max-md:text-4xl break-all">
                  Showcase
                </h2>
                <p className="justify-center text-neutral-500 text-2xl leading-[150%] mt-20 max-md:mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, eleifend viverra nam
                  libero tellus. Luctus ornare ac, dolor tempor pellentesque nec.
                </p>
                <div className="flex w-[152px] max-w-full items-start gap-3 mt-20 max-md:mt-10">
                  <Image
                    loading="lazy"
                    src="/assets/Group 8_304_738.svg"
                    alt="Image 8"
                    className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                    width={300} // Set the width of the image in pixels
        height={200} // Optionally, set the height of the image in pixels
                  />
                  <Image
                    loading="lazy"
                    src="/assets/Group 9_304_741.svg"
                    alt="Image 9"
                    className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                    width={300} // Set the width of the image in pixels
        height={200} // Optionally, set the height of the image in pixels
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Footer;