import React from "react";
import Image from "next/image";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaArrowRight,
  FaGreaterThan,
} from "react-icons/fa";
import { SiApple } from "react-icons/si";

const Homepage: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">
      <div className="bg-black text-white text-xs sm:text-sm flex justify-center items-center gap-1.5 relative select-none py-2">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <a
          href="#"
          className="font-bold underline whitespace-nowrap cursor-pointer"
        >
          ShopNow
        </a>
        <select
          aria-label="Select language"
          className="absolute right-4 sm:right-5 bg-black text-white border-none text-xs sm:text-sm cursor-pointer py-0.5 px-2 appearance-none"
        >
          <option>English</option>
        </select>
      </div>

      <nav className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-14 border-b border-gray-300 py-5 sm:py-6">
        <h1 className="font-bold text-lg cursor-pointer">Exclusive</h1>

        <ul className="flex gap-4 sm:gap-8 flex-grow">
          <li>
            <a
              href="#"
              className="text-black text-sm sm:text-base font-medium border-b-2 border-transparent pb-1 hover:border-black active:border-black font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black text-sm sm:text-base font-medium border-b-2 border-transparent pb-1 hover:border-black"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black text-sm sm:text-base font-medium border-b-2 border-transparent pb-1 hover:border-black"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="text-black text-sm sm:text-base font-medium border-b-2 border-transparent pb-1 hover:border-black"
            >
              Sign Up
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4 sm:gap-6 min-w-[200px] sm:min-w-[280px]">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="What are you looking for?"
              aria-label="Search"
              className="w-full py-2 pl-3 pr-9 border border-gray-300 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
            <FaSearch className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm sm:text-base pointer-events-none" />
          </div>
          <button
            aria-label="Favorites"
            className="text-black text-lg cursor-pointer p-1.5"
          >
            <FaHeart />
          </button>
          <button
            aria-label="Cart"
            className="text-black text-lg cursor-pointer p-1.5"
          >
            <FaShoppingCart />
          </button>
        </div>
      </nav>

      <main className="flex flex-col lg:flex-row gap-4 lg:gap-10 py-6 sm:py-8">
        <aside className="border-r border-gray-300 pr-4 lg:pr-6 min-w-full lg:min-w-[200px] select-none">
          <ul className="flex flex-row lg:flex-col gap-3 lg:gap-4 text-xs sm:text-base text-gray-900 overflow-x-auto lg:overflow-visible">
            {[
              { label: "Woman's Fashion", hasArrow: true },
              { label: "Men's Fashion", hasArrow: true },
              { label: "Electronics", hasArrow: false },
              { label: "Home & Lifestyle", hasArrow: false },
              { label: "Medicine", hasArrow: false },
              { label: "Sports & Outdoor", hasArrow: false },
              { label: "Baby's & Toys", hasArrow: false },
              { label: "Groceries & Pets", hasArrow: false },
              { label: "Health & Beauty", hasArrow: false },
            ].map(({ label, hasArrow }) => (
              <li
                key={label}
                className="flex justify-between items-center cursor-pointer whitespace-nowrap lg:whitespace-normal"
              >
                {label}{" "}
                {hasArrow && (
                  <FaGreaterThan className="text-gray-500 text-xs sm:text-sm" />
                )}
              </li>
            ))}
          </ul>
        </aside>

        <section className="bg-black text-white rounded-md flex flex-col md:flex-row max-w-full md:min-w-[840px] p-8 md:p-[45px_60px] justify-between items-center gap-6 md:gap-10 select-none">
          <div className="max-w-full md:max-w-[380px] flex flex-col gap-4">
            <span className="text-sm md:text-base flex items-center gap-2.5">
              <SiApple className="text-[28px] mb-2" />
              iPhone 14 Series
            </span>
            <h2 className="text-[32px] sm:text-[38px] md:text-[45px] font-bold leading-[1.1] mb-2">
              Up to 10% <br />
              <strong>off Voucher</strong>
            </h2>
            <a
              href="#"
              className="text-[28px] sm:text-[32px] md:text-[35px] font-light underline cursor-pointer flex items-center gap-1.5 select-none w-max"
            >
              Shop Now <FaArrowRight className="text-lg" />
            </a>

            <div className="flex gap-3 mt-5">
              <span className="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-red-600 cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></span>
            </div>
          </div>
<div className="relative w-full md:w-auto aspect-[16/9] max-w-[400px]" style={{ position: "relative" }}>
  <Image
    src="/images/iphone-banner.png"
    alt="iPhone 14 Series"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
    style={{ objectFit: "contain" }}
    priority
  />
</div>

        </section>
      </main>
    </div>
  );
};

export default Homepage;
