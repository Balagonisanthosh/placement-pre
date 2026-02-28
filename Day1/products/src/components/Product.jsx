import React from 'react'
import ProductCard from './ProductCard'

const Product = () => {
    
  return (
    <div>
        <ProductCard productname="Wireless Headphones" 
      price={99}
      addToCart={(name) => console.log(`product ${name} is added to cart`)}
      productDescription="good for noise cancellation"   
      />

      <ProductCard productname="smart watch" 
      price={99}
      addToCart={(name) => console.log(`product ${name} is added to cart`)}
      productDescription="A stylish smart watch with fitness tracking, heart rate monitor, sleep tracking, and smart notifications for daily convenience."/>

      <ProductCard productname="mobile phone" 
      price={99}
      addToCart={(name) => console.log(`product ${name} is added to cart`)}
      productDescription="A high-performance smartphone with vibrant display, powerful processor, long battery life, and advanced camera features for everyday use."/> 
      
    </div>
  )
}

export default Product
