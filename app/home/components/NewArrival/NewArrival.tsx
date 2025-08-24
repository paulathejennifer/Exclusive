import React from 'react';

const ProductCard: React.FC<{ 
  imgSrc: string; 
  title: string; 
  description: string; 
  height: number; 
  isLarge?: boolean 
}> = ({ imgSrc, title, description, height, isLarge }) => {
  const baseClasses = "relative overflow-hidden bg-black text-white";
  const cardClasses = isLarge
    ? "min-h-[400px]"
    : "min-h-[150px]";

  const titleElement = isLarge ? (
    <h2 className="text-2xl font-bold mb-1">{title}</h2>
  ) : (
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
  );

  return (
    <div className={`${baseClasses} ${cardClasses} arrival-product-card`}>
      <img
        src={imgSrc}
        alt={title}
        className={`${isLarge ? "min-h-[400px]" : "min-h-[150px]"} w-full object-contain`}
      />
      <div className="absolute bottom-4 left-4 text-white p-2 text-shadow-md">
        {titleElement}
        <p className="text-sm mb-1">{description}</p>
        <a href="#" className="text-sm underline cursor-pointer hover:text-yellow-400">
          Shop Now
        </a>
      </div>
    </div>
  );
};

const NewArrival: React.FC = () => {
  return (
    <section className="p-5 font-sans">
      <div className="mb-5">
        <div className="flex items-start mb-4">
          <h1 className="text-lg font-semibold text-red-600 border-l-8 border-red-600 pl-2 rounded-sm mb-0">
            Featured
          </h1>
        </div>
        <h1 className="text-3xl font-semibold pb-6">
          New Arrival
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <ProductCard 
          imgSrc="/images/ps5.png" 
          title="PlayStation 5" 
          description="Black and White version of the PS5 coming out on sale." 
          height={400} 
          isLarge={true} 
        />
        <div className="flex flex-col gap-5">
          <ProductCard 
            imgSrc="/images/womens.png" 
            title="Women's Collections" 
            description="Featured woman collections that give you another vibe." 
            height={150} 
          />
          <div className="flex gap-5">
            <ProductCard 
              imgSrc="/images/speakers.png" 
              title="Speakers" 
              description="High-quality wireless Amazon speakers." 
              height={150} 
            />
            <ProductCard 
              imgSrc="/images/perfume.png" 
              title="Perfume" 
              description="Gucci perfume bottle and elegant packaging." 
              height={150} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
