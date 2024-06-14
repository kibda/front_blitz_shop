import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerClose, DrawerFooter, DrawerContent, Drawer } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import axios from "axios"
import CartItem from "./CartItem"
import { useAppContext } from "@/contexts/UserContext"



const Cart = () => {

  let {cart, setCart} = useAppContext();
  
  


const handleDrawerClose = () => {
  
  if (cart.length === 0) {
    return;
  }
  try {
    const cartItems = cart.map(item => ({ id: item.product_id, quantity: item.quantity }));
    const response = axios.post(`${process.env.NEXT_PUBLIC_API}cart/update/`, {
      cart: cartItems
    }, { withCredentials: true });
  } catch (error) {
    console.error('Failed to fetch user acrt:', error);
  }
}


 const sum = cart.reduce((acc, item) => acc + (parseFloat(item.product.product_price) * item.quantity), 0).toFixed(2);

  return (
    <Drawer  onClose={handleDrawerClose} >
              <DrawerTrigger asChild>
                <div className="relative cursor-pointer mr-3">
                  <ShoppingCartIcon className="h-6 w-6" />
                  <Badge className="absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-white">
                    {cart.length}
                  </Badge>
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Your Cart</DrawerTitle>
                  <DrawerDescription>Review and manage your cart items.</DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-6">
                  <div className="grid gap-6">
                  { cart.map((item) => (
                      <CartItem key={item.product_id}  item={item}  cartState={{ cart, setCart }} />
                  ))}

                    
                    

                  </div>
                </div>
                <DrawerFooter>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium">{  sum    }</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Shipping</span>
                      <span className="font-medium">$5.00</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between font-medium">
                      <span>Total</span>
                      <span>{sum+5}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1">Checkout</Button>
                    <DrawerClose asChild>
                      <Button className="flex-1" variant="outline" onClick={handleDrawerClose} >
                        Continue Shopping
                      </Button>
                    </DrawerClose>
                  </div>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
  )
}

export default Cart


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
  