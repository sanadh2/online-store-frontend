import React, { useEffect, useState } from "react";
import Title from "./Title";
import { Link, useLocation } from "react-router-dom";
import { Heart, ShoppingBag, User } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { baseURL } from "../Api/server";

const Navigation: React.FC = () => {
  const { loggedIn, data: userData } = useSelector(
    (store: RootState) => store.user
  );
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
      className={`navbar ${scrollPos > 3 && "shadow"} transition-all ease-in-out duration-300 flex h-14 md:h-20 bg-neutral-100 dark:bg-neutral-800  sticky z-30 top-0 px-3 md:px-5 lg:px-10 gap-5 md:gap-10 xl:gap-20 font-Poppins items-center justify-between`}
    >
      <Title
        className={`${scrollPos < 100 ? "md:text-3xl lg:text-4xl " : "lg:text-3xl"} transition-all ease-in duration-300 `}
      />
      <ul className="w-full hidden md:flex text-sm lg:text-base items-center  justify-start gap-3 lg:gap-5 xl:gap-8 font-semibold text-neutral-400 ">
        <Link
          className={`${location.pathname === "/" ? "text-black underline underline-offset-4 decoration-wavy decoration-primary-divert" : "hover:text-neutral-600"} animate-in animate-accordion-down transition-all ease-in-out duration-700`}
          to={"/"}
        >
          Home
        </Link>
        <Link
          to={"/products"}
          className={` ${location.pathname === "/products" ? "text-black underline underline-offset-4 decoration-wavy decoration-primary-divert" : "hover:text-neutral-600"} animate-in animate-accordion-down transition-all ease-in-out duration-700`}
        >
          Products
        </Link>
        <Link
          to={"/contacts"}
          className={` ${location.pathname === "/contacts" ? "text-black underline underline-offset-4 decoration-wavy decoration-primary-divert" : "hover:text-neutral-600"} animate-in animate-accordion-down transition-all ease-in-out duration-700`}
        >
          Contacts
        </Link>
      </ul>
      <div className="flex justify-center gap-3 lg:gap-8 items-center  text-neutral-500">
        {loggedIn ? (
          <>
            <Link
              to={"/my-cart"}
              className={` ${location.pathname === "/my-cart" ? "text-black " : "hover:text-neutral-600"} h-6 w-6 relative`}
            >
              <ShoppingBag className="size-full " />
              <span className="absolute -top-2 -right-2 size-5 rounded-full bg-primary flex justify-center items-center text-xs ">
                {userData?.cartList.length}
              </span>
            </Link>
            <Link
              to={"/wish-list"}
              className={` ${location.pathname === "/my-cart" ? "text-black " : "hover:text-neutral-600"} h-6 w-6 relative`}
            >
              <Heart className="size-full" />
              <span className="absolute -top-2 -right-2 size-5 rounded-full bg-primary flex justify-center items-center text-xs ">
                {userData?.wishList.length}
              </span>
            </Link>
            <Link
              to={"/profile"}
              className={` ${location.pathname === "/profile" ? "text-black" : "hover:text-neutral-600"} size-fit`}
            >
              {userData ? (
                <div className="size-10 rounded-full aspect-square border border-black">
                  <img
                    src={baseURL + userData.avatar}
                    onError={(e) => {
                      if (userData.gender === "male")
                        e.currentTarget.src = "/male-avatar.jpg";
                      else if (userData.gender === "female")
                        e.currentTarget.src = "/female-avatar.jpg";
                      else if (userData.gender === "others")
                        e.currentTarget.src = "/others-avatar.jpg";
                      e.currentTarget.onerror = null;
                    }}
                    className="w-full h-full rounded-full aspect-square"
                    alt=""
                  />
                </div>
              ) : (
                <User className="h-6 w-6" />
              )}
            </Link>
          </>
        ) : (
          <>
            <Link
              to={"/sign-in"}
              className="px-4 py-1 whitespace-nowrap bg-primary rounded-md text-black hover:bg-primary-hover transition-colors"
            >
              Sign In
            </Link>
          </>
        )}
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
