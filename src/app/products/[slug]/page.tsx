


"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { groq } from "next-sanity";
import { Product } from "@/app/types/product";

// Function to fetch product data
async function getProduct(slug: string): Promise<Product | null> {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      _type,
      image,
      price,
      description,
      category,
      inventory,
      colors
    }`,
    { slug }
  );
  return product || null;
}

// Main Product Page component
export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Product[]>([]); // Cart state

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(slug);
      setProduct(fetchedProduct);
      setLoading(false);
    };
    fetchProduct();
  }, [slug]);

  const addToCart = (product: Product, quantity: number) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item._id === product._id);
    
    if (productIndex !== -1) {
      updatedCart[productIndex].stockLevel += quantity; // Increase quantity if already in cart
    } else {
      updatedCart.push({ ...product,stockLevel: quantity }); // Add new product to cart
    }

    setCart(updatedCart); // Update the cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Optional: store cart in localStorage
    alert(`${product.name} has been added to the cart`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-blue-500">Loading...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  return <ProductDetail product={product} addToCart={addToCart} />;
}

// Product detail component to display the product information and quantity control
const ProductDetail = ({ product, addToCart }: { product: Product; addToCart: (product: Product, quantity: number) => void }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity); // Add to cart function
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section: Product Image */}
        <div className="relative">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name || "Product Image"}
              width={500}
              height={500}
              className="w-full max-w-md h-auto object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mx-auto"
            />
          )}
        </div>

        {/* Right Section: Product Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>

          
          <h2 className="text-3xl font-semibold text-blue-600">
            ${product.price.toLocaleString()}
          </h2>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 bg-gray-200 text-lg font-semibold rounded-lg disabled:opacity-50"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="text-xl font-medium">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 bg-gray-200 text-lg font-semibold rounded-lg"
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
