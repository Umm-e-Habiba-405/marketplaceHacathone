/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from 'next/image';

export function Newspaper() {
  return (
    <section className="py-16 mt-28">
      <div className="relative bg-pink-100 py-20 sm:py-28 md:py-52">
        <div className="absolute inset-0">
          <Image
            src="/Rectangle 102 (1).png" // Replace with your image path
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-[25px] sm:text-[28px] md:text-xl font-bold text-gray-800 mb-4 px-4 sm:px-8">
            Get Latest Update By Subscribe Our Newsletter
          </h1>
          <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-64 sm:w-80 md:w-[400px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 w-full sm:w-auto"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
