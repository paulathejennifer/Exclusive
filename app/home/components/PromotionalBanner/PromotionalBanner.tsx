import React from "react";
import Image from "next/image";

const PromotionalBanner: React.FC = () => {
  return (
    <section className="relative w-full min-h-[280px] bg-[#1a1a1a] text-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-5 md:py-6 overflow-x-hidden max-w-[1200px] mx-auto">
      <div className="relative z-10 flex flex-col gap-4 max-w-full md:max-w-1/2 overflow-hidden">
        <span className="block text-green-500 text-lg mb-2 select-none truncate max-w-full">
          Categories
        </span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5 whitespace-normal max-w-full break-words">
          Enhance Your {"\n"} Music Experience
        </h2>

        <div className="flex flex-wrap gap-3 mb-5">
          {[
            { num: "23", label: "Hours" },
            { num: "05", label: "Days" },
            { num: "59", label: "Minutes" },
            { num: "35", label: "Seconds" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center min-w-[70px]">
              <span className="block text-black font-bold text-xl bg-white rounded-full w-12 h-12 flex items-center justify-center mb-1 select-none">
                {num}
              </span>
              <span className="text-xs text-gray-300 select-none truncate max-w-full">
                {label}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-block px-6 md:px-8 py-3 bg-green-400 hover:bg-green-600 text-white rounded-md text-base md:text-lg font-medium select-none max-w-max truncate"
        >
          Buy Now!
        </a>
      </div>

      <div
        className="relative w-full md:w-1/2 max-w-[600px] sm:max-w-[480px] md:max-w-[600px] select-none pointer-events-none mt-6 md:mt-0"
        style={{ aspectRatio: "993 / 1395", maxHeight: "280px" }}
      >
        <Image
          src="/images/jbl-speaker.png"
          alt="JBL Speaker"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </section>
  );
};

export default PromotionalBanner;
