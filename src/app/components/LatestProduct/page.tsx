// "use client"
// import Image from 'next/image'
// import React ,{useState,useEffect} from 'react'

// import { client } from '@/sanity/lib/client'
// import {four_1} from '@/sanity/lib/queries'
// import { urlFor } from '@/sanity/lib/image'
// import Link from 'next/link'
// import { Product } from '../../../../types/product'
// import { addToCart } from '@/app/actions/actions'
// import Swal from 'sweetalert2'



// const LatestProduct = () => {
//     const [product, setProduct] = useState<Product[]>([])
//     useEffect(() => {
//       async function fetchproduct() {
//         const fetchedproduct:Product[]=await client.fetch(four_1)
//         setProduct(fetchedproduct);
//       }
//     fetchproduct()
//     },[])
//     const handleAddToCart=(e:React.MouseEvent,product:Product) =>{
//   e.preventDefault()
//   Swal.fire({
//     position:"top-right",
//     icon:"success",
//     title: `${product.name} added to cart`,
//     showConfirmButton: false,
//     timer: 1500,
//     timerProgressBar: true,
//     background: '#3490dc',
//     backdrop: `rgba(0,0,0,0.5)`,
//   })
//   addToCart(product)
  
//     }
    
//   return (
//     <div className='mx-w-2xl mx-auto w-[1100px]  px-4 py-8 mt-24'>
//       <h1 className=' text-3xl font-bold mb-6 text-center'>
//        Trendings Product
//       </h1>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4  h-[200px] gap-[30px]'>
//         {product.map((product)=>(
//             <div key={product._id}>
//               <div className=' border rounded-lg  shadow-2xl p-4 hover:shadow-lg transition duration-200 '>
//                 <Link href={`/products/${product.slug?.current}`}>
    


// {product.image && (
// <Image
//   src={urlFor(product.image).url()} alt='image' width={250} height={250} className='w-48 h-40 object-cover rounded-md ml-5'
// />

// )}
// <h2 className='text-md ml-4  font-bold mt-4'>
// {product.name}

// </h2>

// <p className='text-gray-500 mt-2 ml-4'>
// ${product.price}

// </p>
// </Link>
//  <button className=' bg-purple-500 text-white px-10 py-1 font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-3 ml-4' onClick={(e)=> handleAddToCart(e,product)} >Add to Cart</button>
// </div>
           
           
//             </div>
//         ))}
//         </div>
//         </div>
//   )
// }

// export default LatestProduct



"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import { client } from '@/sanity/lib/client'
import { four_1 } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { Product } from '../../../../types/product'
import { addToCart } from '@/app/actions/actions'
import Swal from 'sweetalert2'

const LatestProduct = () => {
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchproduct() {
            const fetchedproduct: Product[] = await client.fetch(four_1)
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
        <div className='max-w-5xl mx-auto px-4 py-8 mt-3'>
            <h1 className='text-3xl font-bold mb-6 text-center'>
                Trending Products
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]'>
                {product.map((product) => (
                    <div key={product._id} className='border rounded-lg shadow-2xl p-4 hover:shadow-lg transition duration-200'>
                        <Link href={`/products/${product.slug?.current}`} passHref>
                            {product.image && (
                                <Image
                                    src={urlFor(product.image).url()} 
                                    alt={product.name} 
                                    width={250} 
                                    height={250} 
                                    className='w-full h-[200px] object-cover rounded-md'
                                />
                            )}
                            <h2 className='text-md font-bold mt-4 text-center'>
                                {product.name}
                            </h2>
                            <p className='text-gray-500 mt-2 text-center'>
                                ${product.price}
                            </p>
                        </Link>
                        <div className='flex justify-center mt-3'>
                            <button 
                                className='bg-purple-500 text-white px-8 py-2 font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out' 
                                onClick={(e) => handleAddToCart(e, product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestProduct
