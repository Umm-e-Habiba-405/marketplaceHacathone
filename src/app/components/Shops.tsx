/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const Shops = () => {
  return (
    <div className="text-[20px] w-[1160px] ml-24 ">
      <h1 className="text-color text-center font-bold mt-24 text-[24px] sm:text-[36px] ">
        What Shopex Offer!
      </h1>
      <div className="flex flex-wrap justify-center  mt-2">
        {/* Card 1 */}
        <div className="bg-whiteHex w-full sm:w-[270px] h-[306px] text-center p-4">
          <Image
            src="/free-delivery 1.png"
            alt=""
            width={100}
            height={100}
            className="mx-auto mt-11"
          />
          <p className="mt-3 text-color font-bold">24/7 Support</p>
          <p className="mt-3 text-gray-500 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem dicta voluptatibus minima.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-whiteHex w-full sm:w-[270px] h-[306px] text-center p-4">
          <Image
            src="/cashback 1.png"
            alt=""
            width={100}
            height={100}
            className="mx-auto mt-11"
          />
          <p className="mt-3 text-color font-bold">24/7 Support</p>
          <p className="mt-3 text-gray-500 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem dicta voluptatibus minima.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-whiteHex w-full sm:w-[270px] h-[306px] text-center p-4">
          <Image
            src="/premium-quality 1.png"
            alt=""
            width={100}
            height={100}
            className="mx-auto mt-11"
          />
          <p className="mt-3 text-color font-bold">24/7 Support</p>
          <p className="mt-3 text-gray-500 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem dicta voluptatibus minima.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-whiteHex w-full sm:w-[270px] h-[306px] text-center p-4">
          <Image
            src="/24-hours-support 1.png"
            alt=""
            width={100}
            height={100}
            className="mx-auto mt-11"
          />
          <p className="mt-3 text-color font-bold">24/7 Support</p>
          <p className="mt-3 text-gray-500 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem dicta voluptatibus minima.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shops;
