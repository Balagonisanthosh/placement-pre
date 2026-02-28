import React, { useState } from 'react'

const ProductCard = ({ productname, price, addToCart, productDescription }) => {
    const[showProductDetails,setShowProductDetails]=useState(false);
    const handleProductDetails=()=>{
        setShowProductDetails((pre)=>!pre);
    }
  return (
    <div className="w-150 bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden">
      
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Product Details
        </h1>
        <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
      </div>

      {/* Product Info */}
      <div className="flex-1 mt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 tracking-wide">
          {productname}
        </h2>

        <p className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
          ${price}
        </p>
      </div>

      <div className='flex gap-3'>
      <button
        onClick={() => addToCart(productname)}
        className="mt-auto w-full bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
      >
         Add to Cart
      </button>
      <button onClick={handleProductDetails} className="mt-auto w-full bg-green-400 text-white py-3 rounded-2xl font-semibold hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md">{showProductDetails ? "hide products details" : "show product details"}</button>
      </div>
      {
        showProductDetails && <p className='font-bold text-xl'>{productDescription}</p>
      }
    </div>
    
  )
}

export default ProductCard