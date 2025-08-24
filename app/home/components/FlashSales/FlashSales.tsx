"use client";
import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaEye,
  FaStar,
  FaStarHalfAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Button from "../../../../shared-components/Button/Button";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    originalPrice: 150,
    discountPrice: 120,
    discountPercent: 20,
    rating: 4.5,
    reviews: 120,
    image: "/images/gamepad.png",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    originalPrice: 250,
    discountPrice: 200,
    discountPercent: 20,
    rating: 4.0,
    reviews: 85,
    image: "/images/keyboard.png",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    originalPrice: 80,
    discountPrice: 65,
    discountPercent: 18,
    rating: 5,
    reviews: 150,
    image: "/images/monitor.png",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    originalPrice: 100,
    discountPrice: 85,
    discountPercent: 15,
    rating: 4.5,
    reviews: 90,
    image: "/images/chair.png",
  },
  {
    id: 5,
    name: "LED Desk Lamp",
    originalPrice: 60,
    discountPrice: 50,
    discountPercent: 16,
    rating: 4.0,
    reviews: 70,
    image: "/images/lamp.png",
  },
];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-lg" />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-lg" />);
  }
  while (stars.length < 5) {
    stars.push(<FaStar key={`empty-${stars.length}`} className="text-gray-300 text-lg" />);
  }
  return stars;
};

const FlashSales: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 15,
    minutes: 30,
    seconds: 0,
  });
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
              else clearInterval(timer);
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? products.length - visibleCount : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + visibleCount >= products.length ? 0 : prev + 1));
  };

  let visibleProducts = products.slice(startIndex, startIndex + visibleCount);
  if (visibleProducts.length < visibleCount) {
    visibleProducts = [...visibleProducts, ...products.slice(0, visibleCount - visibleProducts.length)];
  }

  return (
    <section className="max-w-[1180px] mx-auto my-10 px-2 sm:px-4 md:px-6 select-none">
      <header className="flex flex-col sm:flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-2 md:gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-red-600 text-white font-semibold px-4 py-1 rounded-md text-sm whitespace-nowrap">Today's</div>
        </div>

        <h2 className="text-4xl font-bold mt-1 sm:mt-2 md:mt-0">Flash Sales</h2>

        <div className="flex flex-wrap gap-4 text-gray-900 font-semibold select-text justify-center md:justify-start">
          <div className="flex flex-col items-center">
            <span className="text-3xl">{countdown.days.toString().padStart(2, "0")}</span>
            <span className="text-xs text-gray-500">Days</span>
          </div>
          <span className="text-3xl text-red-600 select-none">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl">{countdown.hours.toString().padStart(2, "0")}</span>
            <span className="text-xs text-gray-500">Hours</span>
          </div>
          <span className="text-3xl text-red-600 select-none">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl">{countdown.minutes.toString().padStart(2, "0")}</span>
            <span className="text-xs text-gray-500">Minutes</span>
          </div>
          <span className="text-3xl text-red-600 select-none">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl">{countdown.seconds.toString().padStart(2, "0")}</span>
            <span className="text-xs text-gray-500">Seconds</span>
          </div>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <button onClick={prevSlide} aria-label="Previous" className="w-9 h-9 bg-gray-200 rounded-full grid place-items-center hover:bg-red-600 hover:text-white transition">
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} aria-label="Next" className="w-9 h-9 bg-gray-200 rounded-full grid place-items-center hover:bg-red-600 hover:text-white transition">
            <FaArrowRight />
          </button>
        </div>
      </header>

      <div className="flex gap-5 overflow-hidden flex-wrap justify-center md:justify-start">
        {visibleProducts.map((product, idx) => (
          <div key={product.id + "-" + idx} className="bg-gray-100 rounded-lg p-4 w-[330px] flex-shrink-0 flex flex-col relative shadow-md hover:shadow-lg transition">
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded select-none">-{product.discountPercent}%</div>
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button
  aria-label="Add to favorites"
  className="icon-btn bg-white border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer transition hover:bg-gray-100"
>
  <FaHeart />
</button>
<button
  aria-label="View details"
  className="icon-btn bg-white border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer transition hover:bg-gray-100"
>
  <FaEye />
</button>

            </div>

            <div className="flex justify-center items-center mb-4 h-[130px]">
              <img src={product.image} alt={product.name} className="max-w-[160px] max-h-[130px] object-contain" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 select-text">{product.name}</h3>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-red-600 font-bold text-lg select-text">${product.discountPrice}</span>
                <span className="line-through text-gray-500 select-text">${product.originalPrice}</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400 select-none">
                {renderStars(product.rating)}
                <span className="text-gray-600 text-sm select-text">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button className="mt-10 px-6 py-2 max-w-[180px] mx-auto bg-red-600 hover:bg-red-700 text-white rounded font-semibold text-base transition">View All Products</Button>
    </section>
  );
};

export default FlashSales;
