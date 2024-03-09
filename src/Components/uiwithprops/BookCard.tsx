import React from "react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

type PropTypes = {
  title: string;
  image: string;
  price: number;
  discount?: number;
  description: string | undefined;
  className?: string;
  id: string;
  state?: string;
};

const BookCard: React.FC<PropTypes> = ({
  title,
  image,
  price,
  description,
  discount,
  className,
  id,
  state,
}) => {
  return (
    <Link
      to={`/book/${id}`}
      state={state}
      className="overflow-hidden"
      style={{ width: "15rem", height: "24rem" }}
    >
      <div
        className={cn(
          "dark:bg-neutral-950 flex  justify-between  p-5 items-center flex-col  shadow-md shadow-neutral-400 dark:shadow-transparent w-full h-full rounded-md ",
          className
        )}
      >
        <div className="h-60 dark:bg-neutral-900 w-full flex  justify-center items-center">
          <img
            src={image}
            alt=""
            className="object-contain h-full"
            loading="lazy"
          />
        </div>
        <div className="group flex flex-col w-full">
          <h2 className="line-clamp-1 group-hover:line-clamp-2 transition-all duration-500 text-left text-lg font-bold font-Outfit">
            {title}
          </h2>
          <p className="line-clamp-1  transition-all duration-300 text-sm font-light font-sans tracking-wider opacity-50">
            {description}
          </p>
        </div>
        <div className="flex justify-evenly gap-2">
          {discount ? (
            <>
              <p className={"text-green-500"}>
                ₹{(price * (100 - discount)) / 100}
              </p>
              <p className="line-through">₹${price}</p>
            </>
          ) : (
            <p>₹{price}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

export const LazyBookCard: React.FC = () => {
  return (
    <div className="h-96 w-60 bg-gray-200 dark:bg-zinc-700 p-3 flex animate-pulse flex-col gap-2 justify-center items-center rounded-lg">
      <span className="w-full bg-gray-300 dark:bg-zinc-600 h-full rounded-md"></span>
      <div className=" flex justify-center  gap-2 flex-col h-fit w-full">
        <span className="h-6 w-full bg-gray-300 dark:bg-zinc-600 rounded-md"></span>
        <span className="h-4 w-3/4 bg-gray-300 dark:bg-zinc-600 rounded-md"></span>
      </div>
    </div>
  );
};
