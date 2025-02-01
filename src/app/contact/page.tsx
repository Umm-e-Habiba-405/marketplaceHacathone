/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mb-20">
      <div className="bg-bag h-[286px] w-[1920px]">
        <h1 className="text-[40px]  text-blue-950 font-bold pt-[125px] ml-52">Contact Us</h1>
      </div>
     
      <div className="flex ml-28 gap-24 mt-2 w-[1191px]">
        <div>
          <h1 className="text-[34px] text-blue-950 font-bold">
            Information About Us
          </h1>
          <p className="text-para2 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices <br /> mattis aliquam, malesuada diam est. Malesuada
            sem tristique amet erat vitae
            <br /> eget dolor lobortis. Accumsan faucibus vitae lobortis quis
            bibendum quam.
          </p>
          <div className="flex gap-2  mt-4">
            <p className="w-5 h-5 bg-yellow-500 rounded-full "></p>
            <p className="w-5 h-5 bg-red-500 rounded-full"></p>
            <p className="w-5 h-5 bg-blue-500 rounded-full"></p>
          </div>
        </div>
        <div>
          <h1 className="text-[34px] text-blue-950 font-bold">Contact Way</h1>
          <div>
            <div className="grid grid-cols-4  gap-7 mt-8">
              <p className="w-7 h-7  bg-blue-700 rounded-full flex "> </p>
              <p className="text-[17px] -ml-20 text-para2 -mt-3">
                Tel: 877-67-88-99
                <br />
                E-Mail: shop@store.com
              </p>
              <p className="w-7 h-7 bg-pink-500 rounded-full"></p>
              <p className="text-[17px] -ml-20 text-para2 -mt-3">
                Support Forum
                <br />
                For over 24hr
              </p>
              <p className="w-7 h-7  bg-orange-600 rounded-full "></p>
              <p className="text-[17px] -ml-20 text-para2 -mt-3">
                20 Margaret st, London
                <br />
                Great britain, 3NM98-LK
              </p>
              <p className="w-7 h-7  bg-green-500 rounded-full "></p>
              <p className="text-[17px] -ml-20 text-para2 -mt-3">
                Free standard shipping
                <br />
                on all orders.
              </p>
            </div>
          </div>
          <p></p>
        </div>
      </div>

      <div className="flex gap-20 mt-20 ml-28 justify-center w-[1191px]">
        <div>
       < h1 className="text-[34px] text-blue-950 font-bold">
            Get In Touch
          </h1>
          <p className="text-para2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices<br /> tristique amet erat vitae eget dolor los vitae lobortis quis
            bibendum quam.
          </p>
          <div className="py-3 px-3 mt-10 w-[525px] ">
            <input type="text"  placeholder=" Your Name*" className="border-2 text-para2 h-[50px] w-[225px] rounded-md"/>
            <input type="text" placeholder=" Your Email "   className="border-2 text-para2 ml-8 h-[50px] w-[225px] rounded-md" />
            <div>
            <input type="text" placeholder="Subject*"  className="border-2 text-para2 h-[50px] w-[500px] mt-8 rounded-md"         />
            </div>
           <div>
            <input type="text" placeholder=" Type Your Message"  className="border-2 text-para2 h-[160px] w-[500px] mt-8 pb-20 rounded-md"  />
            </div>
          </div>
          <button className="py-3 px-3 w-[200px] ml-5 bg-pink-600 text-white font-semibold text-[17px] rounded-sm mt-8">Send Email</button>
        </div>
        
        <div>
          <Image   src="/Group 197.png" alt=""width={683} height={683} />
        </div>
      </div>
    </div>
  );
};

export default page;
