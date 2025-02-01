

"use client"
import React from 'react'
import { useEffect,useState } from 'react'
import { Product } from '../../../../types/product'
import { client } from '@/sanity/lib/client'
import { four_4 } from '@/sanity/lib/queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'


const TopCategories = () => {
      const [product, setProduct] = useState<Product[]>([])
        useEffect(() => {
          async function fetchproduct() {
            const fetchedproduct:Product[]=await client.fetch(four_4)
            setProduct(fetchedproduct);
          }
        fetchproduct()
        },[])
  return (
    <div className='mx-w-xl mx-auto w-[1100px] mt-16  px-4 py-8'>
    <h1 className=' text-[24px] font-bold mb-6 text-center'>
    Top Categories
    </h1>

    <div className='grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4  h-[200px] gap-[30px] mt-7'>
      {product.map((product)=>(
          <div key={product._id}>
            <div className=' border rounded-lg  shadow-2xl p-4 hover:shadow-lg transition duration-200 '>
            <Link href={`/products/${product.slug?.current}`}>
  


{product.image && (
<Image
src={urlFor(product.image).url()} alt='image' width={250} height={250} className='w-48 h-40 object-cover  ml-2'
/>

)}
<h2 className='text-md ml-4  font-bold mt-4'>
{product.name}

</h2>
<p className='ml-3'>{product.description}</p>
<p className='text-blue-800 mt-2 ml-4 font-bold'>
${product.price}

</p>
</Link>


</div>
         
         
          </div>
      ))}
      </div>
      </div>
  )
}

export default TopCategories