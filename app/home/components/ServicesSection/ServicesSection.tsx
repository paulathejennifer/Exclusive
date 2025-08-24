import React from 'react';
import { FaTruck, FaHeadphones, FaShieldAlt } from 'react-icons/fa';

const ServicesSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center py-20 flex-grow">
      <div className="flex flex-col md:flex-row justify-around w-[70%] max-w-[900px] gap-8 md:gap-12 px-4">

        <div className="text-center px-4 flex flex-col items-center">
          <div
            role="img"
            aria-label="Free and Fast Delivery"
            className="w-[100px] h-[100px] border-9 border-gray-300 rounded-full flex items-center justify-center mb-5 bg-black"
          >
            <FaTruck className="text-white text-4xl" />
          </div>
          <div className="text-center max-w-[190px] -translate-x-4 md:-translate-x-8">
            <h2 className="text-lg text-gray-800 font-semibold mb-1">FREE AND FAST DELIVERY</h2>
            <p className="text-sm text-gray-600 m-0">Free delivery for all orders over $140</p>
          </div>
        </div>


        <div className="text-center px-4 md:px-20 flex flex-col items-center">
          <div
            role="img"
            aria-label="Customer Service"
            className="w-[100px] h-[100px] border-9 border-gray-300 rounded-full flex items-center justify-center mb-5 bg-black"
          >
            <FaHeadphones className="text-white text-4xl" />
          </div>
          <div className="text-center max-w-[190px] -translate-x-3 md:-translate-x-7">
            <h2 className="text-lg text-gray-800 font-semibold mb-1">24/7 CUSTOMER SERVICE</h2>
            <p className="text-sm text-gray-600 m-0">Friendly 24/7 customer support</p>
          </div>
        </div>


        <div className="text-center px-4 flex flex-col items-center">
          <div
            role="img"
            aria-label="Money Back Guarantee"
            className="w-[100px] h-[100px] border-9 border-gray-300 rounded-full flex items-center justify-center mb-5 bg-black"
          >
            <FaShieldAlt className="text-white text-4xl" />
          </div>
          <div className="text-center max-w-[190px] -translate-x-4 md:-translate-x-8">
            <h2 className="text-lg text-gray-800 font-semibold mb-1">MONEY BACK GUARANTEE</h2>
            <p className="text-sm text-gray-600 m-0">We refund money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
