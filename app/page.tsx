import React from 'react';
import './page.css';
import Homepage from './home/components/Homepage/Homepage';
import PromotionalBanner from './home/components/PromotionalBanner/PromotionalBanner';
import FlashSales from './home/components/FlashSales/FlashSales';
import BrowseByCategory from './home/components/BrowseByCategory/BrowseByCategory';
import BestSellingProducts from './home/components/BestSellingProducts/BestSellingProducts';
import ExploreProducts from './home/components/ExploreProducts/ExploreProducts';
import NewArrival from './home/components/NewArrival/NewArrival';
import Footer from '../shared-components/Footer/Footer';
import ServicesSection from './home/components/ServicesSection/ServicesSection';


const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Homepage />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <PromotionalBanner />
      <ExploreProducts />
      <NewArrival />
      <ServicesSection/>
      <Footer />
    </div>
  );
};

export default Home;