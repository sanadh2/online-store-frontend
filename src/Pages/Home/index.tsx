import React from "react";
import Search from "./Search";
import BestProducts from "./BestProducts";
import About from "./About";
import Categories from "./Categories";
import CustomerReviews from "./CustomerReviews";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <div className="">
      <div className="px-3 md:px-5 lg:px-10 py-10">
        <Search />
        <BestProducts />
        <About />
        <Categories />
        <CustomerReviews />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
