import React, { useState } from 'react'
import { Button } from '../ui/button'
import axios from 'axios';


const CartItem = ({item,cartState}) => {
    const [itemNum, setItemNum] = useState( cartState.cart.find((cartItem) => cartItem.product.product_id === item.product.product_id).quantity);

    const addItems = () => {
        setItemNum(itemNum + 1);
        const newCart = cartState.cart.map((cartItem) => {
            if (cartItem.product.product_id === item.product.product_id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        });
        cartState.setCart(newCart);
    }

    const removeItems = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API}cart/delete/`,{
            product_id: item.product.id,
            quantity: itemNum
        }, { withCredentials: true });
        }
        catch (error) {
            console.error('Failed to fetch user acrt:', error);
        }
        if (itemNum === 1) {
            removeItem();
            return;
        }else{
          setItemNum(itemNum - 1)
        const newCart = cartState.cart.map((cartItem) => {
            if (cartItem.product.product_id === item.product.product_id) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        });
        cartState.setCart(newCart);
        }
        
    }

    const removeItem=async ()=>{
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API}cart/delete/`,{
            product_id: item.product.id
        }, { withCredentials: true });

        const newCart = cartState.cart.filter((cartItem) => cartItem.product.product_id !== item.product.product_id);
        cartState.setCart(newCart);
    }
    catch (error) {
        console.error('Failed to fetch user acrt:', error);
    }}


  return (
    <div  className="flex items-center gap-4">
                      <img
                        alt="Product Image"
                        className="rounded-md object-cover"
                        height="64"
                        src={item.product.product_photo}
                        style={{
                          aspectRatio: "64/64",
                          objectFit: "cover",
                        }}
                        width="64"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium"> {item.product.product_name} </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.product.product_price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="ghost" onClick={removeItems} >
                          <MinusIcon className="h-4 w-4" />
                        </Button>
                        <span>{itemNum}</span>
                        <Button size="icon" variant="ghost" onClick={addItems} >
                          <PlusIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button size="icon" variant="ghost" onClick={removeItem} >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
  )
}

export default CartItem


function MinusIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
      </svg>
    )
  }

  function ShoppingCartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }
  
  
  function TrashIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    )
  }
  
  

  
  
  function PlusIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }