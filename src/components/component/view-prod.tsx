"use client";

import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

import { useEffect, useState } from "react"
import axios from "axios";

export function ViewProd({id}) {

  const [product, setProduct] = useState(null);

useEffect(() => {
  if (id) {
    // Replace with your actual API endpoint
    axios.get(`${process.env.NEXT_PUBLIC_API}/products/detail/${id}`)
      .then(response => {
        setProduct(response.data.product);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }
}, [id]);

  return (
<>
{product === null ? (
      <></>
    ): (
<>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6 ">
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="hidden md:flex items-start">
            <div className="grid gap-4">
              <h1 className="font-bold text-3xl lg:text-4xl"> {product.product_name}</h1>

              <div>
                <p className="text-gray-500 dark:text-gray-400"> {product.product_brand} </p>
              </div>
              <div className="text-3xl font-bold"> {product.product_price} </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Look out for special offers...</p>
              </div>
              <div className="flex items-center gap-2">
                <Label className="text-base" htmlFor="quantity">
                  Quantity
                </Label>
                <Select  defaultValue="1" >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: product.product_quantity }, (_, index) => (
                      <SelectItem key={index} value={String(index + 1)}>
                        {index + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="text-gray-500 dark:text-gray-400">({product.product_quantity} in stock)</span>
              </div>
              <div className="flex gap-2">
                <Button size="lg">Add to Cart</Button>
                <Button size="lg" variant="outline">
                  <HeartIcon className="w-4 h-4 mr-2" />
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
          <Separator />
          <div className="grid gap-4 text-sm leading-loose">
            <p>
              {product.product_description}
            </p>
            
          </div>
        </div>
        <div className="grid gap-3 items-start">
          <div className="flex md:hidden items-start">
            <div className="grid gap-4">
              <h1 className="font-bold text-2xl sm:text-3xl">Acme Prism Tee: The Cozy Chromatic Blend</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">(4.3 / 5)</span>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Acme Brand</p>
              </div>
              <div className="text-3xl font-bold">$99.99</div>
            </div>
          </div>
          <div className="grid gap-4">
            <img
              alt="Product Image"
              className="aspect-square object-scale-down border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src={product.product_photo}
              width={600}
            />
            {/* 
            <div className="hidden md:flex gap-4 items-start">
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Preview thumbnail"
                  className="aspect-square object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 1</span>
              </button>
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Preview thumbnail"
                  className="aspect-square object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 2</span>
              </button>
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Preview thumbnail"
                  className="aspect-square object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 3</span>
              </button>
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Preview thumbnail"
                  className="aspect-square object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 4</span>
              </button>
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Preview thumbnail"
                  className="aspect-square object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 4</span>
              </button>
            </div>   */}
          </div>
        </div>
      </div>

      {/* 
       
      <div className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32">
        <div className="container max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <img
                  alt="Related Product 1"
                  className="aspect-square object-cover rounded-t-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">Acme Prism Tee: The Cozy Chromatic Blend</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">(4.3 / 5)</span>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    60% combed ringspun cotton/40% polyester jersey tee.
                  </p>
                </div>
                <div className="mt-4 font-bold text-lg">$99.99</div>
                <div className="mt-4">
                  <Button size="sm">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  alt="Related Product 2"
                  className="aspect-square object-cover rounded-t-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">Acme Prism Tee: The Cozy Chromatic Blend</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">(4.3 / 5)</span>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    60% combed ringspun cotton/40% polyester jersey tee.
                  </p>
                </div>
                <div className="mt-4 font-bold text-lg">$99.99</div>
                <div className="mt-4">
                  <Button size="sm">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  alt="Related Product 3"
                  className="aspect-square object-cover rounded-t-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">Acme Prism Tee: The Cozy Chromatic Blend</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">(4.3 / 5)</span>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    60% combed ringspun cotton/40% polyester jersey tee.
                  </p>
                </div>
                <div className="mt-4 font-bold text-lg">$99.99</div>
                <div className="mt-4">
                  <Button size="sm">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="container max-w-6xl px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-0.5">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">4.5 / 5</span>
                  </div>
                  <div>
                    <p>
                      This is the most comfortable and stylish t-shirt I ve ever owned. The quality is amazing and the fit is perfect. Highly recommend!
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <img
                      alt="User Avatar"
                      className="rounded-full"
                      height={40}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width={40}
                    />
                    <div>
                      <h4 className="font-semibold">Jane Doe</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Verified Buyer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-0.5">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    */}
    </>
    )}
</>
   
    
  )
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
  )
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
  )
}
