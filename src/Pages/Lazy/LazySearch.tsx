import React from "react";

const LazyBookCard: React.FC = () => {
  return (
    <div className="w-52 h-96 bg-neutral-300 dark:bg-neutral-900 flex flex-col items-center gap-3 p-5 rounded-md animate-pulse">
      <div className="bg-neutral-400 dark:bg-neutral-800   w-full h-40 rounded"></div>
      <p className="rounded-full w-full h-5 bg-neutral-400 dark:bg-neutral-800"></p>
      <p className="rounded-full w-full indent-2 h-3 bg-neutral-400 dark:bg-neutral-800"></p>
    </div>
  );
};

const Cards = [1, 1, 21, 1, 1, 1, 1, 1, 1, 1];
const LazySearch: React.FC = () => {
  return (
    <div className="w-full flex min-h-svh">
      <div className=" hidden px-4  w-60  md:flex flex-col gap-5 justify-center items-center h-svh fixed top-0 left-0">
        <div className=" w-full bg-neutral-300 dark:bg-neutral-900 h-8 rounded-full"></div>
        <div className=" w-full bg-neutral-300 dark:bg-neutral-900 h-8 rounded-full"></div>
        <div className=" w-full bg-neutral-300 dark:bg-neutral-900 h-8 rounded-full"></div>
      </div>
      <div className="hidden px-4  w-60  md:flex lg:w-96 border-r min-h-full border-black dark:border-white"></div>
      <div className="p-4 ml-5 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6 place-self-center gap-10">
        {Cards.map((_, index) => (
          <LazyBookCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default LazySearch;
