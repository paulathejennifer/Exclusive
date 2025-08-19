"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="bg-black text-white text-xs py-2 text-center">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold underline cursor-pointer ml-2">ShopNow</span>
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-6 bg-white max-w-7xl mx-auto">
        <span className="font-bold text-2xl tracking-tight mb-4 md:mb-0">Exclusive</span>
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 items-center font-medium mb-4 md:mb-0">
          <li><Link href="/" className="hover:text-accent">Home</Link></li>
          <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          <li><Link href="/about" className="hover:text-accent">About</Link></li>
          <li><Link href="/signup" className="hover:text-accent">Sign Up</Link></li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-4">
          <select className="border rounded px-2 py-1 text-xs font-medium">
            <option>English</option>
          </select>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border rounded px-3 py-1 text-xs outline-none w-32 md:w-48"
          />
          <span className="material-icons text-gray-500 text-xl cursor-pointer">search</span>
          <span className="material-icons text-gray-500 text-xl cursor-pointer">favorite_border</span>
          <span className="material-icons text-gray-500 text-xl cursor-pointer">shopping_cart</span>
        </div>
      </div>
    </nav>
  );
}