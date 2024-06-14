import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useAppContext } from '@/contexts/UserContext';
import axios from 'axios';

const ProdCard = ({product}) => {

  let {cart, setCart} = useAppContext();
  let [prodInCart, setProdInCart] = useState( cart.find((cartItem) => cartItem.product.id === product.id));

  const handleAddToCart = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}cart/add/`,{
      product_id: product.id,
  }, { withCredentials: true });
  }
  catch (error) {
      console.error('Failed to fetch user acrt:', error);
  }
  
  setCart([...cart, {
    product: {
      id: product.id,
      product_name: product.name,
      product_price: product.price,
      product_photo: product.photo,
      product_description: product.description,
      product_brand: product.brand,
      product_category: product.category,
      product_model_id: product.model_id,
      product_quantity: product.quantity
    },
    quantity: 1
  }]);
  setProdInCart(true);
  
  }

  return (
    <Link href={`/products/view/${product.id}`}>
    <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer ">
              <img
                alt="Product Image"
                className="w-full  object-scale-down"
                src={product.photo}
                style={{
                  aspectRatio: '400/300',

                }}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">{product.name}</h3>
                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">{product.brand}</h4>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{product.description.slice(0, 25) + (product.description.length > 25 ? '...' : '')}</p>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{product.quantity}</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 font-medium">${product.price}</span>
                  {prodInCart ? 
                  <Button size="sm" variant="ghost" disabled>Added to Cart</Button> 
                    :
                  <Button size="sm" onClick={handleAddToCart} >Add to Cart</Button>
                  }
                  
                </div>
              </div>
            </div>
            </Link>
  )
}

export default ProdCard