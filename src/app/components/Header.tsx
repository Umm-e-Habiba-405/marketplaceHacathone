/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      {/* Top Bar with contact info and actions */}
      <div className="bg-purple-600 text-white h-[56px] text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-2 px-4">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
            <span className="flex items-center text-[19px]  ml-28">
              <i className="fas fa-envelope mr-2 "></i>ummehabibah61@gmail.com
            </span>
            <span className="flex items-center text-[19px] ">
              <i className="fas fa-phone mr-2 "></i> (12345)67890
            </span>
          </div>

          {/* Language and Currency, Login, Wishlist */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 text-[17px] mt-4 sm:mt-0 space-y-2 sm:space-y-0">
            <span>English</span>
            <span>USD</span>
            <Link href="/login" className="hover:text-pink-500">
              Login
            </Link>
            <span>Wishlist ♡</span>
            <Link href={'/cart'}>
            <span  className='cursor-pointer'>🛒</span>

            </Link>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
