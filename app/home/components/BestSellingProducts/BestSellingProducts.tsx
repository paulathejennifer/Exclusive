"use client";
import React from "react";
import {
  FaHeart,
  FaEye,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }
> = ({ children, className = "", ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-sm" />);
  }
  while (stars.length < 5) {
    stars.push(<FaStar key={`empty-${stars.length}`} className="text-gray-300 text-sm" />);
  }
  return stars;
};

const products = [
  {
    id: 1,
    name: "The north coat",
    originalPrice: 360,
    discountPrice: 260,
    rating: 5,
    reviews: 65,
    image: "/images/north-coat.png",
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    originalPrice: 1160,
    discountPrice: 960,
    rating: 3.5,
    reviews: 65,
    image: "/images/gucci-bag.png",
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    originalPrice: 170,
    discountPrice: 160,
    rating: 4.5,
    reviews: 65,
    image: "/images/cpu-cooler.png",
  },
  {
    id: 4,
    name: "Small BookSelf",
    originalPrice: 360,
    discountPrice: 36,
    rating: 4,
    reviews: 65,
    image: "/images/bookshelf.png",
  },
];

const BestSellingProducts: React.FC = () => {
  return (
    <section className="pt-12 px-3 sm:px-6 font-sans max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-3 md:gap-0">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <span className="font-bold text-red-600 pl-2 border-l-8 border-red-600 rounded-sm text-base leading-none">
            This Month
          </span>
          <h2 className="text-3xl font-semibold leading-none">Best Selling Products</h2>
        </div>

        <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded font-semibold text-base shadow-sm flex items-center justify-center leading-none max-w-[140px] w-full md:w-auto">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-lg border border-gray-200 p-5 text-center flex flex-col"
          >
            <div className="relative mb-3 flex-grow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-contain mx-auto"
              />
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button
                  className="bg-white rounded-full w-7 h-7 flex items-center justify-center shadow hover:bg-gray-100"
                  aria-label="Add to favorites"
                >
                  <FaHeart />
                </button>
                <button
                  className="bg-white rounded-full w-7 h-7 flex items-center justify-center shadow hover:bg-gray-100"
                  aria-label="View details"
                >
                  <FaEye />
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold truncate mb-2">{product.name}</h3>
              <div className="mb-2">
                <span className="text-red-600 font-bold text-lg mr-1">
                  ${product.discountPrice}
                </span>
                {product.originalPrice > product.discountPrice && (
                  <span className="line-through text-gray-500 text-sm">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center gap-1">
                {renderStars(product.rating)}
                <span className="text-gray-500 text-xs">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;
