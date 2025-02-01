/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="bg-bag h-[286px] w-[1420px]">
        <h1 className="text-[40px] text-blue-950  font-bold pt-[125px] ml-52">Blog Page</h1>
      </div>
     
      <div className="ml-20 flex gap-24 mb-10">
        <div>
          <Image src="/bruce-mars-FWVMhUa_wbY-unsplash 2.png" alt=""  width={870} height={453}  className="mt-10"/>
          <Image src="/Group 164.png" alt="" width={360} height={273}className="mt-10" />
          <h1 className="text-blue-950 text-[30px] font-bold mt-10">Mauris at orci non vulputate diam tincidunt nec.</h1>
          <p className="text-para2 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum<br/> eu
            malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
            purus, cursus vulputate id id dictum at.
          </p>
          <button className="text-blue-950 font-semibold text-[18px] mt-5 underline" >Read More</button>
          <Image src="/bruce-mars-FWVMhUa_wbY-unsplash 3.png" alt=""width={870} height={453} className="mt-10" />
          <Image src="/Group 164.png" alt="" className="mt-10"width={360} height={273} />
          <h1 className="text-blue-950 text-[30px] font-bold mt-10">Aenean vitae in aliquam ultrices lectus. Etiam.</h1>
          <p className="text-para2 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum<br/> eu
            malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
            purus, cursus vulputate id id dictum at.
          </p>
          <button className="text-blue-950 font-semibold text-[18px] mt-5 underline" >Read More</button>
          <Image src="/bruce-mars-FWVMhUa_wbY-unsplash 4.png" alt=""width={870} height={453} className="mt-10" />
          <Image src="/Group 164.png" alt="" width={360} height={273}className="mt-10" />
          <h1 className="text-blue-950 text-[30px] font-bold ">Sit nam congue feugiat nisl, mauris amet nisi. </h1>
          <p className="text-para2 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum<br/> eu
            malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
            purus, cursus vulputate id id dictum at.
          </p>
          <button className="text-blue-950 font-semibold text-[18px] mt-5 underline" >Read More</button>
          <ul className="flex gap-7 rounded-md mt-7 cursor-pointer justify-center">
            <li className="border-2 py-2 px-2 w-[45px] text-para2 text-center  hover:bg-pink-500 cursor-pointer  ">1</li>
            <li className="border-2 py-2 px-2 w-[45px] text-para2 text-center  hover:bg-pink-500 cursor-pointer " >2</li>
            <li className="border-2 py-2 px-2 w-[45px] text-para2 text-center  hover:bg-pink-500 cursor-pointer " >3</li>
            <li className="border-2 py-2 px-2 w-[45px] text-para2 text-center  hover:bg-pink-500 cursor-pointer " >4</li>
          </ul>
        </div>
        <div>
            <h1 className="text-blue-950 text-[25px] font-semibold mt-9">Search</h1>
            <input type="text"  placeholder="Search for post" className="py-3 mt-2 px-3 w-[310px] border-2 rounded-md"/>
            <h1 className="text-blue-950 text-[25px] font-semibold mt-8">Categories</h1>
            <ul className="grid grid-cols-2 gap-4 mt-2">
                <li className="text-blue-950 w-[132px] border  py-2 px-2 rounded-sm hover:bg-pink-500 cursor-pointer  ">Hobbies(41)</li>
                <li className="text-blue-950 w-[132px] border py-2 px-2  rounded-sm hover:bg-pink-500 cursor-pointer ">Women(21)</li>
                <li className="text-blue-950 w-[132px] border py-2 px-2  rounded-sm hover:bg-pink-500 cursor-pointer">Women(21)</li>
                <li className="text-blue-950 w-[132px] border py-2 px-2  rounded-sm hover:bg-pink-500 cursor-pointer">Women(21)</li>
                <li className="text-blue-950 w-[132px] border py-2 px-2  rounded-sm hover:bg-pink-500 cursor-pointer">Women(21)</li>
                <li className="text-blue-950 w-[132px] border py-2 px-2  rounded-sm hover:bg-pink-500 cursor-pointer">Women(21)</li>
            </ul>
            <h1 className="text-blue-950 text-[25px] font-semibold mt-8">Recent Post</h1>
            <div>
                <div className="flex gap-4 mt-7">
                    <Image src="/Rectangle 126.png" alt=""width={70} height={51} />
                     <p >It is a long established fact<br/> <span className="text-para2">Aug 09 2020</span></p>
                </div>
                <div className="flex gap-4 mt-7">
                    <Image src="/Rectangle 126 (1).png" alt="" width={70} height={51} />
                    <p>It is a long established fact<br/><span className="text-para2">Aug 09 2020</span></p>
                </div>
                <div className="flex gap-4 mt-7">
                <Image src="/Rectangle 126 (2).png" alt=""width={70} height={51}  />
                <p>It is a long established fact<br/><span className="text-para2">Aug 09 2020</span></p>
                </div>
                <div className="flex gap-4 mt-7">
                <Image src="/Rectangle 126 (3).png" alt=""width={70} height={51}  />
                <p>It is a long established fact<br/><span className="text-para2">Aug 09 2020</span></p>
                </div>
            </div>
            <h1 className="text-blue-950 text-[25px] font-semibold mt-8">Sale Product</h1>
            <div>
                <div className="flex gap-4 mt-7">
                    <Image src="/Rectangle 126 (4).png" alt="" width={70} height={51} />
                     <p >Elit ornare in enim mauris.<br/> <span className="text-para2">Aug 09 2020</span></p>
                </div>
                <div className="flex gap-4 mt-7">
                    <Image src="/Rectangle 126 (5).png" alt=""width={70} height={51}  />
                    <p>Viverra pulvinar et enim.<br/><span className="text-para2">Aug 09 2020</span></p>
                </div>
                <div className="flex gap-4 mt-7">
                <Image src="/Rectangle 126 (6).png" alt=""width={70} height={51}  />
                <p>Mattis varius donec fdsfd <br/><span className="text-para2">Aug 09 2020</span></p>
                </div>
            </div>
            <h1 className="text-blue-950 text-[25px] font-semibold mt-8">Offer Product</h1>
            <div className="grid grid-cols-2">
                <div className="mt-5">
                    <Image src="/Mask Group.png" alt=""width={126} height={80}  className="rounded-sm" />
                    <p className="text-blue-950 font-semibold text-[17px] mt-2 px-2">Duis lectus est.<br/> <span className="text-para2">$12.00 - $15.00</span></p>
                </div>
                <div className="mt-5">
                <Image src="/Mask Group (1).png" alt="" width={126} height={80} className="rounded-sm" />
                <p className="text-blue-950 font-semibold text-[17px] mt-2 px-2">Duis lectus est.<br/> <span className="text-para2">$12.00 - $15.00</span></p>
                </div>
                <div className="mt-5">
                <Image src="/Mask Group (2).png" alt="" width={126} height={80} className="rounded-sm"/>
                <p className="text-blue-950 font-semibold text-[17px] mt-2 px-2">Duis lectus est.<br/> <span className="text-para2">$12.00 - $15.00</span></p>
                </div>
                <div className="mt-5">
                <Image src="/Mask Group (3).png" alt="" width={126} height={80} className="rounded-sm" />
                <p className="text-blue-950 font-semibold text-[17px] mt-2 px-2">Duis lectus est.<br/> <span className="text-para2">$12.00 - $15.00</span></p>
                </div>
            </div>
            <h1 className="text-blue-950 text-[25px] font-semibold mt-8">Follow</h1>
            <ul className="flex gap-3 mt-5 ml-7">
            <li> <Image src="/Group 202.png" alt="" width={14} height={8}  className="w-[25px]" /></li>
            <li> <Image src="/Group 203.png" alt="" width={14} height={8}  className="w-[25px]"/></li>
            <li> <Image src="/Group 204.png" alt="" width={14} height={8}  className="w-[25px]"/></li>
            </ul>
            <h1 className="text-blue-950 text-[25px] font-semibold mt-8">Tags</h1>
            <ul className="grid grid-cols-3 underline text-blue-950 mt-4 text-[19px] cursor-pointer ">
            <li className="hover:text-pink-500">General</li>
            <li className="hover:text-pink-500">Atsanil</li>
            <li className="hover:text-pink-500">Insas.</li>
            <li className="hover:text-pink-500">Bibsaas</li>
            <li className="hover:text-pink-500">Nulla.</li>
            </ul>

        </div>
      </div>
      <div className='flex justify-center mb-16'>
        <img src="/image 1174.png" alt="" />
     </div>
    </div>
  );
};

export default page;
