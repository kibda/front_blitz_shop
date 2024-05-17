"use client";
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { JSX, SVGProps } from "react"
import { CloudLightningIcon } from "lucide-react";

export const Navbar=() => {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 bg-yellow-400 border-b border-black shadow-md">
      <Link className="flex items-center gap-2 font-semibold" href="#">
      <CloudLightningIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" />
        <span className="text-black">BLITZ-SHOP</span>
        <Separator className="h-6 border-r border-black mx-2" orientation="vertical" />
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-black transition-all duration-300 ease-in-out transform hover:scale-105"
          href="#"
        >
          Products
        </Link>
        <Separator className="h-6 border-r border-black mx-2" orientation="vertical" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-black transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center"
              href="#"
            >
              Categories
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-white shadow-lg rounded-md border border-gray-200 dark:bg-gray-950 dark:border-gray-800 dark:border-gray-800">
            <DropdownMenuItem>
              <Link
                className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                Laptops
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                Desktops
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                Mouses
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                Screens
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                Headsets
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                Keyboards
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Link>
      <nav className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <UserIcon className="h-6 w-6 text-black" />
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-black transition-all duration-300 ease-in-out transform hover:scale-105"
            href="#"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}

function ChevronDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
