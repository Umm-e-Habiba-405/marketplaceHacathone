/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from 'next/image';

const LatestBlog = () => {
  return (
    <div>
      <div className="py-12">
        <h2 className="text-center text-[32px] sm:text-[40px] font-bold text-indigo-900 mb-8">
          Latest Blog
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Blog 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-[320px]">
            <Image
              src="/Frame 3 (2).png"
              alt="Top essential Trends in 2021"
              className="w-full h-48 object-cover"
              width={320}
              height={192}
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">✍ Saber Ali</span>
                <span>📅 21 August 2020</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Top essential Trends in 2021
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                More of this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-pink-500 underline"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Blog 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-[320px]">
            <Image
              src="/Frame 4.png"
              alt="Top essential trends in 2021"
              className="w-full h-48 object-cover"
              width={320}
              height={192}
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">✍ Surfavioun</span>
                <span>📅 21 August 2020</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Top essential trends in 2021
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                More of this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-pink-500 underline"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Blog 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-[320px]">
            <Image
              src="/2dcYhvbHV-M.png"
              alt="Top essential Trends in 2021"
              className="w-full h-48 object-cover"
              width={320}
              height={192}
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">✍ Saber Ali</span>
                <span>📅 21 August 2020</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Top essential Trends in 2021
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                More of this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-pink-500 underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
