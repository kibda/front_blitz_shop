import Link from "next/link"
import { JSX, SVGProps } from "react"

export const Footer=()=> {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link className="flex items-center space-x-2" href="#">
            <CloudLightningIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" />
            <span className="text-2xl font-bold">BLITZ-SHOP</span>
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            BLITZ-SHOP is a leading e-commerce platform offering a wide range of high-quality products at competitive
            prices.
          </p>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <nav className="grid gap-2">
            <Link className="text-gray-400 hover:text-white" href="#">
              About
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              Shop
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              Contact
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              FAQ
            </Link>
          </nav>
        </div>
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link className="text-gray-400 hover:text-white" href="#">
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              <InstagramIcon className="w-6 h-6" />
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-400 text-sm">© 2024 BLITZ-SHOP. All rights reserved.</p>
      </div>
    </footer>
  )
}

function CloudLightningIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
}


function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
