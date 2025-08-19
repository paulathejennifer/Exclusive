export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
        <div>
          <div className="font-bold text-lg mb-2">Exclusive</div>
          <div className="mb-2 text-sm">Subscribe</div>
          <p className="mb-3 text-xs">Get 10% off your first order</p>
          <form className="flex border border-gray-600 rounded overflow-hidden">
            <input
              className="p-2 text-white text-xs bg-transparent outline-none flex-1 placeholder-gray-400"
              placeholder="Enter your email"
            />
            <button className="bg-[#222] px-3 text-white" type="submit">
              <span className="material-icons text-base">arrow_forward</span>
            </button>
          </form>
        </div>
        <div>
          <div className="font-bold mb-2 text-sm">Support</div>
          <div className="text-xs space-y-1">
            <div>111 Bijoy sarani, Dhaka,</div>
            <div>DH 1515, Bangladesh.</div>
            <div>exclusive@gmail.com</div>
            <div>+88015-88888-9999</div>
          </div>
        </div>
        <div>
          <div className="font-bold mb-2 text-sm">Account</div>
          <div className="text-xs space-y-1">
            <div>My Account</div>
            <div>Login / Register</div>
            <div>Cart</div>
            <div>Wishlist</div>
            <div>Shop</div>
          </div>
        </div>
        <div>
          <div className="font-bold mb-2 text-sm">Quick Link</div>
          <div className="text-xs space-y-1">
            <div>Privacy Policy</div>
            <div>Terms Of Use</div>
            <div>FAQ</div>
            <div>Contact</div>
          </div>
        </div>
        <div>
          <div className="font-bold mb-2 text-sm">Download App</div>
          <p className="text-xs mb-2">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mb-2">
            <img src="/images/qr.png" alt="QR" className="w-16 h-16" />
            <div className="flex flex-col">
              <img src="/images/google-play.png" alt="Google Play" className="w-24 h-8 mb-1" />
              <img src="/images/app-store.png" alt="App Store" className="w-24 h-8" />
            </div>
          </div>
          <div className="flex space-x-4 mt-2 text-lg">
            <span className="material-icons cursor-pointer">facebook</span>
            <span className="material-icons cursor-pointer">twitter</span>
            <span className="material-icons cursor-pointer">instagram</span>
            <span className="material-icons cursor-pointer">linkedin</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-2 text-center text-xs text-gray-400">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}