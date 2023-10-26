import React from "react";
import Image from "next/image";

const Product: React.FC<ProductProps> = ({ title, price, imageSrc, imageAlt }) => {
    return (
      <article className="bg-red-50 flex min-w-[32%] mb-[100px] grow pb-0 flex-col flex-1 md:mx-auto pt-14 px-5 rounded-none border-radius max-md:mt-10">
        <div className="self-center z-[1] flex ml-0 w-full max-w-full flex-col">
          <h3 className="justify-center text-neutral-600 text-4xl leading-[100%]">{title}</h3>
          <p className="justify-center text-neutral-500 text-2xl leading-[100%] mt-5">{price}</p>
          <div className="w-full flex justify-center product-img">
          <Image
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="aspect-[0.81]"
            width={200}
            height={300}
          />
          </div>
        </div>
      </article>
    );
  };

  export default Product;