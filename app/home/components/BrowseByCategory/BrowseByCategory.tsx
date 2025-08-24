import React from 'react';
import { FaMobileAlt, FaLaptop, FaStopwatch, FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa';

const BrowseByCategory: React.FC = () => {
  const categories = [
    { name: 'Phones', icon: FaMobileAlt },
    { name: 'Computers', icon: FaLaptop },
    { name: 'SmartWatch', icon: FaStopwatch },
    { name: 'Camera', icon: FaCamera, active: true },
    { name: 'HeadPhones', icon: FaHeadphones },
    { name: 'Gaming', icon: FaGamepad },
  ];

  return (
    <section className="browse-category-section px-3 sm:px-6 md:px-10 py-8 select-none">
      <div className="category-label text-red-600 font-semibold text-lg border-l-8 border-red-600 pl-3 mb-3">
        <span>Categories</span>
      </div>
      <h2 className="text-3xl mb-6">Browse By Category</h2>
      <div className="category-container flex items-center gap-3 overflow-x-auto scrollbar-hide">
        <button
          className="nav-btn flex-shrink-0 text-2xl p-2 cursor-pointer select-none"
          aria-label="Previous"
        >
          <span className="arrow text-xl">←</span>
        </button>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              className={`category-card flex flex-col items-center p-4 rounded-lg cursor-pointer flex-shrink-0 min-w-[100px] sm:min-w-[120px] transition ${
                category.active
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-800 hover:bg-red-100'
              }`}
              aria-label={`Browse ${category.name}`}
            >
              <span className="category-icon mb-2 text-4xl">
                <Icon />
              </span>
              <span className="category-name text-base font-medium">{category.name}</span>
            </button>
          );
        })}
        <button
          className="nav-btn flex-shrink-0 text-2xl p-2 cursor-pointer select-none"
          aria-label="Next"
        >
          <span className="arrow text-xl">→</span>
        </button>
      </div>
    </section>
  );
};

export default BrowseByCategory;
