/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <nav className="bg-white shadow-md max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="text-[32px] font-bold text-black">Hekto</div>

          {/* Links */}
          <div className="hidden md:flex  space-x-6 text-[16px] font-medium text-gray-700">
            <Link href="/" className="hover:text-pink-500">
              Home
            </Link>
          
            <Link href="#" className="hover:text-pink-500">
              Products
            </Link>
            <Link href="/blogPage" className="hover:text-pink-500">
              Blog
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Shop
            </Link>
            <Link href="/contact" className="hover:text-pink-500">
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-l-md px-4 py-1 focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-1 rounded-r-md">
              🔍
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
