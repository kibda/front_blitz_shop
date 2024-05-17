import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export const Shop=() => {
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
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">Stylish T-Shirt</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">A comfortable and fashionable t-shirt.</p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-medium">$24.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">Cozy Sweater</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">A warm and stylish sweater for the winter.</p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-medium">$39.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">Leather Backpack</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">A durable and stylish backpack for everyday use.</p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-medium">$59.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">Wireless Headphones</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                High-quality wireless headphones for music lovers.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-medium">$79.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">Minimalist Watch</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">A sleek and modern watch for everyday wear.</p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-medium">$49.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">Fitness Tracker</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                Track your fitness goals with this advanced tracker.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-medium">$99.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">Portable Speaker</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                Enjoy high-quality sound on the go with this portable speaker.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-medium">$69.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">Stylish Sunglasses</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                Protect your eyes in style with these fashionable sunglasses.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-medium">$29.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
