import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-3 sm:px-6 font-sans select-none">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-20 px-6">
          

        <div>
          <div className="text-xl font-semibold mb-3">Exclusive</div>
          <div className="text-lg font-medium mb-2">Subscribe</div>
          <div className="text-gray-300 mb-5">Get 10% off your first order</div>
          <form className="flex border border-gray-500 rounded-md overflow-hidden">
            <input
              className="bg-transparent flex-grow text-white px-3 py-2 text-base placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="bg-gray-900 px-4 flex items-center justify-center cursor-pointer transition hover:bg-gray-800"
              type="submit"
              aria-label="Subscribe"
            >
              <span className="material-icons text-base select-none">arrow_forward</span>
            </button>
          </form>
        </div>

        <div>
          <div className="text-xl font-semibold mb-3">Support</div>
          <p className="text-gray-300 mb-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-gray-300 mb-2">exclusive@gmail.com</p>
          <p className="text-gray-300">+88015-88888-9999</p>
        </div>


        <div>
          <div className="text-xl font-semibold mb-3">Account</div>
          <p className="text-gray-300 mb-2 cursor-pointer hover:text-yellow-400 transition">My Account</p>
          <p className="text-gray-300 mb-2 cursor-pointer hover:text-yellow-400 transition">Login / Register</p>
          <p className="text-gray-300 mb-2 cursor-pointer hover:text-yellow-400 transition">Cart</p>
          <p className="text-gray-300 mb-2 cursor-pointer hover:text-yellow-400 transition">Wishlist</p>
          <p className="text-gray-300 cursor-pointer hover:text-yellow-400 transition">Shop</p>
        </div>


        <div>
          <div className="text-xl font-semibold mb-3">Quick Link</div>
          <p className="text-gray-300 mb-2 cursor-pointer hover:text-yellow-400 transition">Privacy Policy</p>
          <p className="text-gray-300 mb-2 cursor-pointer hover:text-yellow-400 transition">Terms Of Use</p>
          <p className="text-gray-300 mb-2 cursor-pointer hover:text-yellow-400 transition">FAQ</p>
          <p className="text-gray-300 cursor-pointer hover:text-yellow-400 transition">Contact</p>
        </div>

        <div>
          <div className="text-xl font-semibold mb-3">Download App</div>
          <div className="text-gray-300 mb-5">
            Save $3 with App New User Only
          </div>
          <div className="flex items-center gap-4 mb-5">
            <img src="/images/qr.png" alt="QR Code" className="w-20 h-20 rounded border border-gray-700 object-contain" />
            <div className="flex flex-col gap-3">
              <img src="/images/google-play.png" alt="Google Play" className="w-36 h-9 object-contain rounded border border-white bg-black" />
              <img src="/images/app-store.png" alt="App Store" className="w-36 h-9 object-contain rounded border border-white bg-black" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <FaFacebookF className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition" />
            <FaTwitter className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition" />
            <FaInstagram className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition" />
            <FaLinkedinIn className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition" />
          </div>
        </div>
      </div>

      <div className="text-center border-t border-gray-800 text-gray-500 pt-8 text-sm select-none">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}
