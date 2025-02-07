import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <>
      <div>
        <header className="bg-white shadow-sm border-b mx-auto w-full">
          <div className="bg-white text-[#22202E] py-2 text-sm flex justify-between items-center px-4 md:px-8 w-full">
            <CiSearch className="w-6 h-6 md:w-8 md:h-8" />
            <div className="text-center flex-1 text-gray-700 text-xl font-bold">
              Avion
            </div>
            <div className="flex gap-4">
              <IoCartOutline className="w-6 h-6 md:w-8 md:h-8" />
              <VscAccount className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          </div>
        </header>
        <div className="flex items-center gap-4 md:gap-10 w-full justify-between md:justify-center">
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
        </div>
      </div>
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
    </>
  );
}
