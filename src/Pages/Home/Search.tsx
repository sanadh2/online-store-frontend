import { SearchIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <div className="bg-primary h-auto w-full mx-auto mt-10 rounded-lg flex p-3 md:p-7 overflow-hidden">
      <div className="w-full md:w-full p-3 flex justify-center items flex-col">
        <h2 className="text-4xl w-full lg:text-6xl font-Poppins font-black flex justify-start items-center">
          Buy your dream shoes
        </h2>
        <div className="flex mt-5 font-medium font-Poppins gap-3 justify-start items-stretch">
          <div className="grid place-items-center">
            <h2 className="text-2xl w-full ml-3">50+</h2>
            <p>Shoe categories</p>
          </div>
          <div className=" w-[1px] inline-block bg-black" />
          <div className="grid place-items-center">
            <h2 className="text-2xl w-full ml-3"> 100+</h2>
            <p>customers</p>
          </div>
        </div>
        <div className="h-12 w-full relative mt-5">
          <button className="absolute left-2 top-1/2 -translate-y-1/2 size-8 flex justify-center items-center bg-primary rounded">
            <SearchIcon className=" w-6 h-6" />
          </button>

          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className="w-full pl-12  lg:text-lg outline-none h-full rounded-md"
          />
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-primary to-secondary rounded-[50px] xl:rounded-[100px] hidden md:flex flex-col  justify-center items-center p-3">
        <img
          src="/Shoes.png"
          alt=""
          className=" max-h-[60vh] h-full object-center w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Search;
