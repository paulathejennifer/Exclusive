import React from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';
import Button from '../../../../shared-components/Button/Button';

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span key={`full-${i}`} className="star filled select-none">★</span>);
    } else if (i === fullStars && halfStar) {
      stars.push(<span key={`half-${i}`} className="star half select-none">★</span>);
    } else {
      stars.push(<span key={`empty-${i}`} className="star select-none">★</span>);
    }
  }
  return stars;
};


export const products = [
  {
    id: 1,
    name: 'Breed Dry Dog Food',
    price: 100,
    rating: 4.5,
    stock: 95,
    image: '/images/dog-food.png',
    hasAddToCart: false,
    isNew: false,
  },
  {
    id: 2,
    name: 'CANON EOS DSLR Camera',
    price: 360,
    rating: 4.5,
    stock: 95,
    image: '/images/camera.png',
    hasAddToCart: true,
    isNew: false,
  },
  {
    id: 3,
    name: 'ASUS FHD Gaming Laptop',
    price: 1700,
    rating: 4.5,
    stock: 328,
    image: '/images/laptop.png',
    hasAddToCart: false,
    isNew: false,
  },
  {
    id: 4,
    name: 'Curology Product Set',
    price: 500,
    rating: 4.5,
    stock: 145,
    image: '/images/curology-set.png',
    hasAddToCart: false,
    isNew: false,
  },
  {
    id: 5,
    name: 'Kids Electric Car',
    price: 960,
    rating: 4.5,
    stock: 65,
    image: '/images/electric-car.png',
    hasAddToCart: false,
    isNew: true,
  },
  {
    id: 6,
    name: 'Jr. Zoom Soccer Cleats',
    price: 110,
    rating: 4.5,
    stock: 35,
    image: '/images/soccer-cleats.png',
    hasAddToCart: false,
    isNew: false,
  },
  {
    id: 7,
    name: 'GPI Shooter USB Gamepad',
    price: 660,
    rating: 4.5,
    stock: 55,
    image: '/images/gamepad.png',
    hasAddToCart: false,
    isNew: true,
  },
  {
    id: 8,
    name: 'Quilted Satin Jacket',
    price: 660,
    rating: 4.5,
    stock: 55,
    image: '/images/jacket.png',
    hasAddToCart: false,
    isNew: false,
  },
];

const ExploreProducts: React.FC = () => {
  return (
    <section className="explore-products-section pt-12 px-2 sm:px-4 md:px-6 font-sans">
      <div className="section-header mb-4">
        <h1 className="our-products text-lg font-semibold text-red-600 border-l-8 border-red-600 pl-2 rounded-sm mb-0">
          Our Products
        </h1>
      </div>
      <h2 className="text-2xl mb-8">Explore Our Products</h2>
      <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card border border-gray-200 rounded-lg overflow-hidden bg-white text-center p-2 relative min-w-0"
          >
            <div className="product-image relative mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[150px] object-contain"
              />
              {(product.id === 5 || product.id === 7) && (
                <span className="new-label absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-sm text-xs font-bold select-none">
                  New
                </span>
              )}
              <div className="product-icons absolute top-2 right-2 flex flex-col gap-1">
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

            </div>
            {product.hasAddToCart && product.id === 2 && (
              <div className="product-cart-button mb-4">
                <button className="add-to-cart-btn w-full bg-black text-white py-2 rounded-b-lg cursor-pointer text-sm font-semibold transition hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            )}
            <div className="product-info px-1">
              <div className="product-name mb-1 overflow-hidden whitespace-nowrap text-ellipsis">
                <h3 className="text-base font-medium text-gray-700 leading-tight select-text">{product.name}</h3>
              </div>
              <div className="product-details flex items-center justify-center gap-3 text-sm text-gray-600">
                <span className="price font-bold text-red-600 mt-1">${product.price}</span>
                {product.id !== 2 && (
                  <div className="rating flex space-x-[2px]">{renderStars(product.rating)}</div>
                )}
                <span className="stock text-gray-500">({product.stock})</span>
              </div>
              {product.id > 4 && (
                <div className="options flex justify-center gap-2 mt-2">
                  <span className="switch-option w-[20px] h-[20px] bg-white border-2 border-gray-300 rounded-full cursor-pointer transition hover:border-gray-400 hover:bg-gray-100 relative">
                    <span className="block w-[10px] h-[10px] bg-gray-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition hover:bg-gray-600"></span>
                  </span>
                  <span className="switch-option w-[20px] h-[20px] bg-white border-2 border-gray-300 rounded-full cursor-pointer transition hover:border-gray-400 hover:bg-gray-100"></span>
                  <span className="switch-option w-[20px] h-[20px] bg-white border-2 border-gray-300 rounded-full cursor-pointer transition hover:border-gray-400 hover:bg-gray-100"></span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Button className="view-all-btn block mx-auto mt-5 px-6 py-3 bg-red-600 text-white rounded text-base font-semibold hover:bg-red-700 transition max-w-xs w-full">
        View All Products
      </Button>
    </section>
  );
};

export default ExploreProducts;
