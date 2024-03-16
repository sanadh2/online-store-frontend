import React, { useEffect, useState } from "react";
import Title from "./Title";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User } from "lucide-react";

const Navigation: React.FC = () => {
  const [scrollPos, setScrollPos] = useState<number>(0);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrollPos > 3 && "shadow"} transition-all ease-in-out duration-300 flex h-20 bg-neutral-100 dark:bg-neutral-800  sticky z-30 top-0 px-3 md:px-5 lg:px-10 gap-5 lg:gap-20 font-Poppins items-center justify-between`}
    >
      <Title
        className={`${scrollPos < 100 ? "md:text-4xl lg:text-5xl " : "lg:text-3xl"} transition-all ease-in duration-300 `}
      />
      <ul className="w-full hidden md:flex text-sm lg:text-base items-center  justify-start gap-3 lg:gap-8 font-semibold text-neutral-400 ">
        <Link
          className={`${location.pathname === "/" ? "text-black" : "hover:text-neutral-600"}`}
          to={"/"}
        >
          Home
        </Link>
        <Link
          to={"/products"}
          className={` ${location.pathname === "/products" ? "text-black" : "hover:text-neutral-600"} transition-colors`}
        >
          Products
        </Link>
        <Link
          to={"/contacts"}
          className={` ${location.pathname === "/contacts" ? "text-black" : "hover:text-neutral-600"}`}
        >
          Contacts
        </Link>
      </ul>
      <div className="flex justify-center gap-3 lg:gap-8 items-center  text-neutral-500">
        <Link
          to={"/my-cart"}
          className={` ${location.pathname === "/my-cart" ? "text-black" : "hover:text-neutral-600"} h-6 w-6`}
        >
          <ShoppingBag className="h-6 w-6" />
        </Link>
        <Link
          to={"/profile"}
          className={` ${location.pathname === "/profile" ? "text-black" : "hover:text-neutral-600"} h-6 w-6`}
        >
          <User className="h-6 w-6" />
        </Link>
        <div className="bg-neutral-500 w-[2px] h-6  inline" />
        <button type="button" className="text-neutral-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className="fill-neutral-500"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M4 5a1 1 0 000 2h16a1 1 0 100-2H4zm1 7a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zm2 6a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
