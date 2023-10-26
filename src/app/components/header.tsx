import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
    return (
      <header>
        <nav className="flex md:flex-row flex-col justify-between lg:px-[93px] px-[23px] py-[46px]">
          <div className="flex md:flex-col justify-between">
            <div>
                <h1 className="text-neutral-600 text-4xl leading-[95.6%] self-stretch">SHPX</h1>
            </div>
            <div className="md:hidden flex">
                <Image
                    loading="lazy"
                    src="/assets/mobile/ci_menu-alt-05_304_765.svg"
                    alt="Image 1"
                    className="aspect-square object-cover object-center overflow-hidden flex-1"
                    width={32}
                    height={32}
                />
            </div>
          </div>
          <ul className="flex w-[492px] max-w-full justify-between gap-5 md:my-auto my-10 max-md:flex-wrap max-md:justify-center">
            <li className="w-full md:w-auto text-neutral-600 text-2xl font-medium leading-[95.6%] self-stretch">
              <a href="#">Home</a>
            </li>
            <li className="w-full md:w-auto text-neutral-600 text-2xl font-medium leading-[95.6%] self-stretch">
              <a href="#">About</a>
            </li>
            <li className="w-full md:w-auto text-neutral-600 text-2xl font-medium leading-[95.6%] self-stretch">
              <a href="#">Products</a>
            </li>
            <li className="w-full md:w-auto text-neutral-600 text-2xl font-medium leading-[95.6%] self-stretch">
              <a href="#">Contact</a>
            </li>
          </ul>
            <div className="justify-between items-center self-stretch md:flex hidden gap-3 w-[50px]">
                <Image
                    loading="lazy"
                    src="/assets/ph_magnifying-glass_304_683.svg"
                    alt="Image 1"
                    className="aspect-square object-cover object-center overflow-hidden flex-1"
                    width={32}
                    height={32}
                />
                <Image
                    loading="lazy"
                    src="/assets/ph_shopping-cart_304_685.svg"
                    alt="Image 2"
                    className="aspect-square object-cover object-center overflow-hidden flex-1"
                    width={32}
                    height={32}
                />
            </div>
        </nav>
      </header>
    );
  };

  export default Header;