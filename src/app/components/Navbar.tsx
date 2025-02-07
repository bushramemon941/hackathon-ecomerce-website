import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <div>
      <header className="bg-white shadow-sm border-b w-full">
        <div className="bg-[#2A254B] text-white py-2 text-sm flex justify-between items-center px-4 md:px-8 w-full">
          <nav className="flex items-center justify-center w-full font-poppins text-sm leading-[21px]">
            <span className="text-center mx-auto">
              Free delivery on all orders over &pound;50 with code easter
              checkout
            </span>
          </nav>
          <button className="inline-flex items-center py-1 px-3 focus:outline-none text-base">
            <MdOutlineCancel />
          </button>
        </div>
        <div className="bg-white text-[#22202E] py-4 px-4 md:px-8 flex justify-between items-center w-full">
          <div className="text-lg font-bold">Avion</div>
          <div className="flex items-center gap-4 md:gap-10 w-full justify-between md:justify-end">
            <ul className="hidden md:flex text-gray-500 space-x-6">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>
                <Link href="/productb">Product Listing</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <CiSearch />
              <IoCartOutline />
              <RiAccountCircleLine />
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center text-2xl ">
                <MdOutlineCancel />
              </button>
            </div>
          </div>
        </div>
      </header>
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="flex md:hidden items-center text-black ml-auto"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-gray-800">
          <SheetTitle>
            <ul className="flex-col md:hidden text-white">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>
                <Link href="/productb">Product Listing</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </SheetTitle>
        </SheetContent>
      </Sheet>
    </div>
  );
}