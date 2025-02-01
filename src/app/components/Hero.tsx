/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className="container flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
          
          {/* Image Section */}
          <div className="flex-1">
            <Image
              src="/image 32.png" // Updated to Next.js Image
              alt="Hero Image"
              layout="responsive"
              width={800} // Replace with actual dimensions
              height={600} // Replace with actual dimensions
              className="-mt-64 w-full lg:w-auto"
            />
          </div>

          {/* Content Section */}
          <div className="max-w-xl text-center lg:text-left flex-1">
            <h3 className="text-pink-600 font-bold text-[18px] lg:text-[25px] -ml-16">
              New Furniture for Castle
            </h3>
            <h1 className="text-2xl lg:text-4xl font-bold mt-4 -ml-16">
              New Furniture Collection Trends in 2024
            </h1>
            <p className="text-violet-600 text-[16px] lg:text-[21px] mt-6 -ml-16">
              Discover our latest collection of modern furniture designs to enhance your living space.
            </p>
            <button className="bg-pink-500 text-white px-6 lg:px-8 py-3 mt-6 rounded-md hover:bg-pink-600 -ml-16">
              Shop Now
            </button>
          </div>

          {/* Right Section with Featured Chair */}
          <div className="relative flex-1">
            <div className="absolute top-8 lg:top-16 right-0 text-white rounded-full px-4 py-2">
              <Image
                src="/Vector 14.png" // Updated to Next.js Image
                alt="Sale Vector"
                layout="fixed"
                width={80} // Adjust dimensions as needed
                height={80}
                className="text-center"
              />
              <p className="text-sm lg:text-base -mt-11 px-3">50% off</p>
            </div>
            <Image
              src="/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png" // Updated to Next.js Image
              alt="Featured Chair"
              layout="responsive"
              width={629} // Replace with actual dimensions
              height={629} // Replace with actual dimensions
              className="mt-8 lg:mt-24 w-full lg:w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
