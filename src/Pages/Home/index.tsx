import React from "react";
import Search from "./Search";
import BestProducts from "./BestProducts";
import About from "./About";
import Categories from "./Categories";

const Home: React.FC = () => {
  return (
    <div className="px-3 md:px-5 lg:px-10 my-10">
      <Search />
      <BestProducts />
      <About />
      <Categories />
    </div>
  );
};

export default Home;
