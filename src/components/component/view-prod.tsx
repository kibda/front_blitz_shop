"use client";

import { Label } from "@/components/ui/label";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

import { use, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/contexts/UserContext";

export function ViewProd({ id }) {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  let {cart, setCart} = useAppContext();
  let [prodInCart, setProdInCart] = useState( cart.find((cartItem) => cartItem.product.id == id)!==undefined);
  // console.log("hedha test",cart.map((cartItem) => cartItem.product.id));
  // console.log("hedha test id ",id);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    console.log("cart tbadel");
    setProdInCart(cart.find((cartItem) => cartItem.product.id == id)!==undefined);
  }, [cart]);

  useEffect(() => {
    if (id) {

      axios.get(`${process.env.NEXT_PUBLIC_API}/products/detail/${id}`)
        .then(response => {
          setProduct(response.data.product);
        })
        .catch(error => {
          console.error('Error fetching product:', error);
        });
    }
  }, [id]);

  

  const handleAddToCart = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}cart/add/`,{
      product_id: product.id,
      quantity: quantity
  }, { withCredentials: true });
  }
  catch (error) {
      console.error('Failed to fetch user acrt:', error);
  }
  
  setCart([...cart, {
    product: {
      id: product.id,
      product_name: product.product_name,
      product_price: product.product_price,
      product_photo: product.product_photo,
      product_description: product.product_description,
      product_brand: product.product_brand,
      product_category: product.product_category,
      product_model_id: product.product_model_id,
      product_quantity: product.product_quantity
    },
    quantity: quantity
  }]);
  setProdInCart(true);
  
  }

  return (
    <>
      {product === null ? (
        <></>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6 ">
            <div className="grid gap-4 md:gap-10 items-start">
              <div className="hidden md:flex items-start">
                <div className="grid gap-4">
                  <h1 className="font-bold text-3xl lg:text-4xl">{product.product_name}</h1>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">{product.product_brand}</p>
                  </div>
                  <div className="text-3xl font-bold">{product.product_price}</div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Look out for special offers...</p>
                  </div>
                  { !prodInCart && <div className="flex items-center gap-2">
                    <Label className="text-base" htmlFor="quantity">Quantity</Label>
                    <Select defaultValue={quantity.toString()} onValueChange={(newValue) => {
                      console.log(parseInt(newValue));
                      setQuantity(parseInt(newValue)); }} >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: product.product_quantity }, (_, index) => (
                          <SelectItem key={index} value={String(index + 1)}  >
                            {index + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span className="text-gray-500 dark:text-gray-400">({product.product_quantity} in stock)</span>
                  </div>}
                  <div className="flex gap-2">
                  {prodInCart ? 
                  <Button size="lg" variant="ghost" disabled>Added to Cart</Button> 
                    :
                  <Button size="lg" onClick={handleAddToCart} >Add to Cart</Button>
                  }
                    <Button size="lg" variant="outline">
                      <HeartIcon className="w-4 h-4 mr-2" />
                      Add to Wishlist
                    </Button>
                    
                  </div>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4 text-sm leading-loose">
                <p>{product.product_description}</p>
              </div>
            </div>
            <div className="grid gap-3 items-start">
              <div className="grid gap-4">
                <img
                  alt="Product Image"
                  className="aspect-square object-scale-down border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height={600}
                  src={product.product_photo}
                  width={600}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}