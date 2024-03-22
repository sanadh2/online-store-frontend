import { FC, useState } from "react";
import SearchButton from "./SearchButton";
import BestProducts from "./BestProducts";
import About from "./About";
import Categories from "./Categories";
import CustomerReviews from "./CustomerReviews";
import Footer from "./Footer";
import Search from "./Search";

const Home: FC = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  return (
    <div
      className={`overflow-hidden ${searchFocus ? "fixed" : ""} w-full h-full`}
    >
      <div className="px-3 md:px-5 lg:px-10 py-10">
        <SearchButton setSearchFocus={() => setSearchFocus(true)} />
        <BestProducts />
        <About />
        <Categories />
        <CustomerReviews />
      </div>
      <Footer />
      {searchFocus && (
        <div
          className={` flex z-50 fixed h-svh w-svw backdrop-blur-md backdrop-brightness-50  left-0 top-10  justify-center items-center px-3 md:px-5 lg:px-7 xl:px-10`}
        >
          <Search close={() => setSearchFocus(false)} />
        </div>
      )}
    </div>
  );
};

export default Home;
