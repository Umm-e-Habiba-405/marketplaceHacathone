

// "use client"
// import React from 'react'
// import { useEffect,useState } from 'react'
// import { Product } from '../../../../types/product'
// import { client } from '@/sanity/lib/client'
// import { four_2 } from '@/sanity/lib/queries'
// import Image from 'next/image'
// import { urlFor } from '@/sanity/lib/image'
// import Link from 'next/link'
// import { addToCart } from '@/app/actions/actions'
// import Swal from 'sweetalert2'


// const Latest = () => {
//       const [product, setProduct] = useState<Product[]>([])
//         useEffect(() => {
//           async function fetchproduct() {
//             const fetchedproduct:Product[]=await client.fetch(four_2)
//             setProduct(fetchedproduct);
//           }
//         fetchproduct()
//         },[])
//         const handleAddToCart=(e:React.MouseEvent,product:Product) =>{
//           e.preventDefault()
//           Swal.fire({
//             position:"top-right",
//             icon:"success",
//             title: `${product.name} added to cart`,
//             showConfirmButton: false,
//             timer: 1500,
//             timerProgressBar: true,
//             background: '#3490dc',
//             backdrop: `rgba(0,0,0,0.5)`,
//           })
//           addToCart(product)
          
//             }
//   return (
//     <div className='mx-w-xl mx-auto w-[1100px] mt-28  px-4 py-8'>
//     <h1 className=' text-2xl font-bold mb-6 text-center'>
//      Latest Product
//     </h1>
//     <ul className="flex flex-wrap justify-center gap-4 lg:gap-10 text-blue-950 text-[16px] lg:text-[18px] font-medium mt-4 lg:mt-6">
//         <li className="underline hover:text-pink-600 cursor-pointer">New Arrival</li>
//         <li className="underline hover:text-pink-600 cursor-pointer">Best Seller</li>
//         <li className="underline hover:text-pink-600 cursor-pointer">Featured</li>
//         <li className="underline hover:text-pink-600 cursor-pointer">Special Offer</li>
//       </ul>
//     <div className='grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4  h-[200px] gap-[30px] mt-7'>
//       {product.map((product)=>(
//           <div key={product._id}>
//             <div className=' border rounded-lg  shadow-2xl p-4 hover:shadow-lg transition duration-200 '>
//             <Link href={`/products/${product.slug?.current}`}>
  


// {product.image && (
// <Image
// src={urlFor(product.image).url()} alt='image' width={250} height={250} className='w-48 h-40 object-cover rounded-md ml-2'
// />

// )}
// <h2 className='text-md ml-4  font-bold mt-4'>
// {product.name}

// </h2>

// <p className='text-gray-500 mt-2 ml-4'>
// ${product.price}

// </p>
// </Link>
// <button className=' bg-purple-500 text-white px-10 py-1 font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-3 ml-4' onClick={(e)=> handleAddToCart(e,product)} >Add to Cart</button>

// </div>
         
         
//           </div>
//       ))}
//       </div>
//       </div>
//   )
// }

// export default Latest


"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../../../../types/product'
import { client } from '@/sanity/lib/client'
import { four_2 } from '@/sanity/lib/queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { addToCart } from '@/app/actions/actions'
import Swal from 'sweetalert2'

const Latest = () => {
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchproduct() {
      const fetchedproduct: Product[] = await client.fetch(four_2)
      setProduct(fetchedproduct);
    }
    fetchproduct()
  }, [])

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      background: '#3490dc',
      backdrop: `rgba(0,0,0,0.5)`,
    })
    addToCart(product)
  }

  return (
    <div className='max-w-6xl w-full mx-auto mt-28 px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6 text-center'>
        Latest Product
      </h1>

      {/* Category Links */}
      <ul className="flex flex-wrap justify-center gap-4 lg:gap-10 text-blue-950 text-sm sm:text-base lg:text-lg font-medium mt-4 lg:mt-6">
        <li className="underline hover:text-pink-600 cursor-pointer">New Arrival</li>
        <li className="underline hover:text-pink-600 cursor-pointer">Best Seller</li>
        <li className="underline hover:text-pink-600 cursor-pointer">Featured</li>
        <li className="underline hover:text-pink-600 cursor-pointer">Special Offer</li>
      </ul>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7'>
        {product.map((product) => (
          <div key={product._id} className='border rounded-lg shadow-2xl p-4 hover:shadow-lg transition duration-200'>
            <Link href={`/products/${product.slug?.current}`}>
              <div className="flex flex-col items-center">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt='image'
                    width={250}
                    height={250}
                    className='w-48 h-40 object-cover rounded-md'
                  />
                )}
                <h2 className='text-md font-bold mt-4 text-center'>{product.name}</h2>
                <p className='text-gray-500 mt-2'>${product.price}</p>
              </div>
            </Link>

            {/* Add to Cart Button */}
            <button
              className='bg-purple-500 text-white px-6 py-2 w-full font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out mt-3'
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Latest  
