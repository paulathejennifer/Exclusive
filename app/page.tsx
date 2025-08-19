import Navbar from "@/shared-components/Navbar";
import Footer from "@/shared-components/Footer";
import Button from "@/shared-components/Button";
import ImageWithFallback from "@/shared-components/ImageWithFallback";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6">
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-12">
          <ImageWithFallback
            src="/images/banner-iphone.png"
            alt="iPhone 14 Series"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center pl-4 md:pl-8 text-white">
            <p className="text-sm md:text-base">Apple</p>
            <h2 className="text-2xl md:text-4xl font-bold">iPhone 14 Series</h2>
            <p className="text-lg md:text-2xl mt-2">Up to 10% off Voucher</p>
            <Button className="mt-4 w-max">Shop Now →</Button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          </div>
        </div>
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-6 bg-accent rounded mr-2"></span>
            <span className="text-accent font-medium">Categories</span>
          </div>
          <h2 className="text-2xl font-bold mb-6">Browse By Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {["Phones", "Computers", "SmartWatch", "Camera", "Headphones", "Gaming"].map((cat, idx) => (
              <div key={idx} className="border rounded p-4 text-center hover:shadow-md cursor-pointer">
                <div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-full"></div>
                <div className="text-sm font-medium">{cat}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-6 bg-accent rounded mr-2"></span>
            <span className="text-accent font-medium">This Month</span>
          </div>
          <h2 className="text-2xl font-bold mb-6">Best Selling Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "The north coat", price: 260, oldPrice: 360, img: "/images/product-coat.png", rating: 5, reviews: 65 },
              { name: "Gucci duffle bag", price: 960, oldPrice: 1160, img: "/images/product-bag.png", rating: 5, reviews: 65 },
              { name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, img: "/images/product-cooler.png", rating: 4, reviews: 65 },
              { name: "Small BookSelf", price: 360, img: "/images/product-bookshelf.png", rating: 5, reviews: 65 },
            ].map((prod, idx) => (
              <div key={idx} className="bg-white rounded shadow p-4">
                <div className="relative">
                  <ImageWithFallback
                    src={prod.img}
                    alt={prod.name}
                    className="w-full h-40 object-contain mx-auto"
                  />
                  <span className="absolute top-2 right-2 material-icons text-gray-400 cursor-pointer">favorite_border</span>
                </div>
                <div className="mt-2 font-medium text-sm">{prod.name}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-accent font-semibold">${prod.price}</span>
                  {prod.oldPrice && <span className="text-gray-400 line-through">${prod.oldPrice}</span>}
                </div>
                <div className="flex items-center gap-1 text-yellow-400 mt-1 text-xs">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-icons text-base">{i < prod.rating ? 'star' : 'star_border'}</span>
                  ))}
                  <span className="text-gray-500">({prod.reviews})</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button>View All</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}