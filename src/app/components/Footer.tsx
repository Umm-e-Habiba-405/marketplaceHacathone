/* eslint-disable react/no-unescaped-entities */
import React from "react";
export const Footer = () => {
  return (
    <footer className="bg-banner ">
      <div className="container mx-auto px-6 md:px-12 lg:px-32">
        <h3 className="text-[25px] text-left font-bold mt-12">Hekto</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Newsletter Section */}
          <form className="mt-5">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-2 rounded border border-gray-300 mb-2"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded w-full">
              Sign Up
            </button>
            <p className="text-gray-600 text-[16px] mt-4">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </form>
          
          {/* Categories Section */}
          <div>
            <h2 className="font-bold text-[21px] leading-10">Categories</h2>
            <p>Laptops & Computers</p>
            <p>Cameras & Photography</p>
            <p>Smart Phones & Tablets</p>
            <p>Video Games & Consoles</p>
            <p>Waterproof Headphones</p>
          </div>
          
          {/* Customer Care Section */}
          <div>
            <h1 className="font-bold text-[21px] leading-10">Customer Care</h1>
            <p>My Account</p>
            <p>Discount</p>
            <p>Returns/Orders History</p>
            <p>Orders History</p>
            <p>Order Tracking</p>
          </div>
          
          {/* Pages Section */}
          <div>
            <h1 className="font-bold text-[21px] leading-10">Pages</h1>
            <p>Blog</p>
            <p>Browse the Shop</p>
            <p>Category</p>
            <p>Pre-Built Pages</p>
            <p>Visual Composer Elements</p>
            <p>WooCommerce Pages</p>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="border-t pt-6 text-center text-gray-500 text-[16px]">
          ©2024 Hekto. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
