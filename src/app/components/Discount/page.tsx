"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { four_3 } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { Product } from '@/app/types/product'
import { addToCart } from '@/app/actions/actions'
import Swal from 'sweetalert2'

const  Discount = () => {
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await client.fetch(four_3);
        // Ensure product is always an array
        setProduct(Array.isArray(fetchedProduct) ? fetchedProduct : [fetchedProduct]);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      background: '#3490dc',
      backdrop: `rgba(0,0,0,0.5)`,
    });
    addToCart(product);
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8 mt-24'>
      <h1 className='text-3xl  font-bold  text-center'>Discount Item</h1>
      <ul className="flex justify-center gap-5 underline mt-6">
        <li className="text-color underline hover:text-pink-600 cursor-pointer">
          Wood Chair
        </li>
        <li className="text-color underline hover:text-pink-600 cursor-pointer">
          Plastic Chair
        </li>
        <li className="text-color underline hover:text-pink-600 cursor-pointer">
          Sofa Collection
        </li>
      </ul>

      <div className='grid w-[3400px] h-[300px] ml-64 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
        {product.length > 0 ? (
          product.map((product) => (
            <div key={product._id} className=' '>
              <div className='flex items-center gap-4'>
                {/* Product Image (Left Side) */}
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt='image'
                    width={300} 
                    height={300} 
                    className='w-[400px] h-[400px] object-cover rounded-md'
                  />
                )}

                {/* Product Content (Right Side) */}
                <div className="flex flex-col justify-center">
                  <h1 className='text-[24px] font-bold'>20% Discount Of All Product</h1>
                    <h2 className='text-[16px] font-semibold'>{product.name}</h2>
                    <h2 className='mt-3'>{product.description}</h2>
                    
                  
                  {/* Add to Cart Button */}
                  <button
                    className='bg-pink-500 text-white px-6 py-2  w-[150px] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out mt-2'
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products available</p>
        )}
      </div>
    </div>
  )
}

export default Discount
