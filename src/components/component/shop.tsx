"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps, useState } from "react"
import {products} from "../data/products"

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Shop Our Collection</h1>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              className="block w-full pl-10 pr-4 py-2 border border-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50 dark:border-gray-800"
              placeholder="Search products..."
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                alt="Product Image"
                className="w-full h-48 object-cover"
                src={product.image}
                style={{
                  aspectRatio: '400/300',
                  objectFit: 'cover',
                }}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">{product.name}</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 font-medium">${product.price}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;


const SearchIcon=(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>)=> {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}