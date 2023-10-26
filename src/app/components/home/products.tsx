import React from "react";

import Product from "../product";
import Image from "next/image";

const Products: React.FC = () => {
    const products: ProductProps[] = [
        {
            title: 'Chaise Molle',
            price: '$18.00',
            imageSrc: '/assets/—Pngtree—3d improvement section sofa furniture_5901883 1_304_706.png',
            imageAlt: 'sofa furniture'
        },
        {
            title: 'Chaise Molle',
            price: '$18.00',
            imageSrc: '/assets/kisspng-table-wardrobe-furniture-living-room-bedroom-tv-cabinet-material-download-5a8126deee57a4 1_304_711.png',
            imageAlt: 'sofa furniture'
        },
        {
            title: 'Chaise Molle',
            price: '$18.00',
            imageSrc: '/assets/5a1ccb9523e3c9 1_304_691.png',
            imageAlt: 'sofa furniture'
        },
        {
            title: 'Chaise Molle',
            price: '$18.00',
            imageSrc: '/assets/kisspng-couch-sofa-bed-furniture-designer-hd-personality-of-the-sofa-5aa384d84b8ba6 1_304_716.png',
            imageAlt: 'sofa furniture'
        },
        {
            title: 'Chaise Molle',
            price: '$18.00',
            imageSrc: '/assets/kisspng-eames-lounge-chair-table-charles-and-ray-eames-chair-5ad2f90b0af8f8 1_304_696.png',
            imageAlt: 'sofa furniture'
        },
        {
            title: 'Chaise Molle',
            price: '$18.00',
            imageSrc: '/assets/kisspng-table-lamp-floor-tripod-wood-lamp-5ac0f4e25b63a0 1_304_701.png',
            imageAlt: 'sofa furniture'
        },
    ];
    return (
      <section className="md:px-[93px] px-[23px] py-[46px]">
        <div className="flex flex-column justify-between">
            <h2 className="text-neutral-600 text-6xl leading-[100%] mt-52 max-md:text-4xl max-md:ml-2.5 max-md:mt-10">
            Products
            </h2>
            <div className="md:hidden flex flex-row justify-between items-end">
                <div className="text-neutral-600 text-2xl font-medium">
                    All
                </div>
                <div>
                    <Image
                        loading="lazy"
                        src="/assets/mobile/gridicons_dropdown_304_788.svg"
                        alt=""
                        className="aspect-[0.81]"
                        width={30}
                        height={30}
                    />
                </div>
            </div>
        </div>
        <div className="self-center flex w-full flex-col mt-14 max-md:max-w-full max-md:mt-10">
          <ul className="items-start self-center flex w-[476px] max-w-full justify-between gap-5 px-5 max-md:flex-wrap max-md:justify-center">
            <li className="w-full lg:w-auto text-neutral-600 text-2xl font-medium leading-[100%] self-stretch">
              <a href="#">All</a>
            </li>
            <li className="w-full lg:w-auto text-neutral-600 text-opacity-50 text-2xl font-medium leading-[100%] self-stretch">
              <a href="#">Lamp</a>
            </li>
            <li className="w-full lg:w-auto text-neutral-600 text-opacity-50 text-2xl font-medium leading-[100%] self-stretch">
              <a href="#">Chair</a>
            </li>
            <li className="w-full lg:w-auto text-neutral-600 text-opacity-50 text-2xl font-medium leading-[100%] self-stretch">
              <a href="#">Table</a>
            </li>
            <li className="w-full lg:w-auto text-neutral-600 text-opacity-50 text-2xl font-medium leading-[100%] self-stretch">
              <a href="#">Sofa</a>
            </li>
          </ul>
          <div className="self-stretch mt-20 px-5 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 flex-wrap">
                {products.map((product: ProductProps, index: number) => (
                    <Product
                    key={index}
                    title={product.title}
                    price={product.price}
                    imageSrc={product.imageSrc}
                    imageAlt={product.imageAlt}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Products;