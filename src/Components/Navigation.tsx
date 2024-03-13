import React, { useState, useEffect } from "react";
import Title from "./Title";
import {
  Heart,
  LucideCircleUserRound,
  MenuSquareIcon,
  Search,
  ShoppingCart,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TooltipItem from "./uiwithprops/TooltipItem";
import ModeToggle from "./ToggleTheme";
import DropDownMenu from "./uiwithprops/DropDownMenu";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import LogoutButton from "./LogoutButton";
const server = "http://localhost:2222/";
const MainNavigation: React.FC = () => {
  const [issearchInputFocus, setSearchInputFocus] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  //setting the value of input in the navbar
  const { searchvalue } = useParams();
  const [searchInput, setSearchInput] = useState<string>(
    searchvalue ? searchvalue : ""
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setScroll(true);
      else setScroll(false);
    });
    if (searchvalue) setSearchInput(searchvalue);
    else setSearchInput("");
  }, [searchvalue]);

  const navigate = useNavigate();

  const pressEnterOnInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const trimmedInput = searchInput.trim();
    if (event.key !== "Enter") return;
    else {
      navigate(`search/${trimmedInput}`);
    }
  };
  const pressedSearch = () => {
    const trimmedInput = searchInput.trim();
    navigate(`search/${trimmedInput}`);
  };

  const { loggedIn, data: userData } = useSelector(
    (store: RootState) => store.user
  );
  const { length: cartLength } = useSelector((store: RootState) => store.cart);
  return (
    <nav className="h-20 z-50 sticky top-0 shadow-md backdrop-blur-md shadow-neutral-300 dark:shadow-transparent dark:backdrop-blur-0  bg-transparent dark:bg-neutral-950 dark:text-white flex justify-evenly text-black items-center gap-2 md:gap-4  px-2 md:px-4 lg:px-10">
      <Title
        className={`${issearchInputFocus ? "hidden md:block" : "block"} ${scroll ? "xl:text-4xl" : "xl:text-5xl"} transition-all duration-500 ease-in-out `}
      />
      <div className="w-full min-w-20 relative">
        <input
          type="text"
          name=""
          id=""
          value={searchInput}
          onKeyDown={pressEnterOnInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => {
            setSearchInputFocus(true);
          }}
          onBlur={() => setSearchInputFocus(false)}
          placeholder="Search Books"
          className="h-8 md:h-10 bg-neutral-300 dark:bg-neutral-900 dark:placeholder:text-blue-300/50  placeholder:text-blue-800/50  outline-none  rounded-md md:rounded-lg w-full px-3 text-xs md:text-sm lg:text-lg font-Montserrat font-medium"
        />

        <Search
          tabIndex={0}
          onClick={pressedSearch}
          className="text-black hover:opacity-60 active:opacity-25 dark:text-white cursor-pointer absolute top-1.5 right-1 md:right-2 md:top-2 size-5"
        />
      </div>
      <ModeToggle
        className="shadow-none hidden md:flex hover:opacity-50 active:opacity-25 transition-all ease-in-out  duration-300"
        size="h-6 w-6 md:h-8 md:w-8 "
      />
      {loggedIn ? (
        <>
          <Link to={"my-cart"} className="relative hidden md:block">
            <TooltipItem toolTip="My Cart">
              <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 " />
              <span className="-top-2 -right-2  absolute text-white w-4 h-4 aspect-square flex justify-center items-center rounded-full text-xs bg-green-500 dark:bg-other2">
                {cartLength}
              </span>
            </TooltipItem>
          </Link>
          <Link to={"my-wishlist"} className="relative hidden md:block">
            <TooltipItem toolTip="wish list">
              <Heart className="h-8 w-8 " />
              <span className="-top-2 -right-2  absolute text-white w-4 h-4 aspect-square flex justify-center items-center rounded-full text-xs bg-green-500 dark:bg-other2">
                {userData?.wishList.length}
              </span>
            </TooltipItem>
          </Link>

          <DropDownMenu
            className=""
            trigger={
              <div className="size-8">
                {!userData?.avatar ? (
                  <LucideCircleUserRound className="h-6 w-6 md:h-8 md:w-8 " />
                ) : (
                  <img
                    src={server + userData?.avatar}
                    alt=""
                    loading="lazy"
                    className=" rounded-full  object-cover border-2 hover:border-green-600 dark:border-border border-green-500"
                  />
                )}
              </div>
            }
          >
            <div className=" ml-2 flex flex-col gap-1.5">
              <Link
                to={"/profile"}
                className="flex justify-start hover:opacity-45 transition-opacity duration-300"
              >
                my profile
              </Link>
              <LogoutButton />
            </div>
          </DropDownMenu>
        </>
      ) : (
        <>
          <Link
            to={"/sign-in"}
            className="whitespace-nowrap hidden md:block px-4 py-2 bg-black dark:bg-white rounded text-white dark:text-black hover:bg-sky-400  font-medium transition-all duration-300 "
          >
            Sign In
          </Link>
        </>
      )}

      {/* mobile devices */}
      <DropDownMenu
        className="block md:hidden"
        trigger={<MenuSquareIcon className="h-7 w-7" />}
      >
        <div className=" flex flex-col ml-3 gap-1">
          {loggedIn ? (
            <>
              <Link
                to={"my-cart"}
                className={`relative flex justify-start gap-2 w-full`}
              >
                my cart
              </Link>
              <Link
                to={"my-wishlist"}
                className={`relative flex justify-start gap-2 w-full`}
              >
                wish list
              </Link>
              <Link
                to={"profile"}
                className={`w-full flex justify-start gap-2`}
              >
                my profile
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                to={"/sign-in"}
                className="whitespace-nowrap  flex w-full justify-start gap-2 items-center"
              >
                <p>sign in</p>
              </Link>
            </>
          )}
          <div className="flex justify-start gap-2 items-center">
            <ModeToggle
              trigger={<p>toggle theme</p>}
              className="shadow-none flex bg-white text-black hover:bg-neutral-300 dark:bg-black dark:text-white dark:hover:bg-neutral-900"
              size="h-6 w-6"
            />
          </div>
        </div>
      </DropDownMenu>
    </nav>
  );
};

export default MainNavigation;
