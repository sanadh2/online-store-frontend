import React, { useEffect, useState } from "react";
import BookCard, { LazyBookCard } from "../Components/uiwithprops/BookCard";

import { top5BooksApi } from "../Api/book";
import type { BookType } from "../Api/types";

const Home: React.FC = () => {
  const [topFiveBooks, setTopFiveBooks] = useState<BookType[]>([]);

  useEffect(() => {
    const getTop5books = async () => {
      await top5BooksApi().then((res) =>
        setTimeout(() => setTopFiveBooks(res ? res : []), 2000)
      );
    };
    getTop5books();
  }, []);

  return (
    <div className=" ">
      <div className="h-svh flex justify-center items-end dark:items-center py-40 bg-[url('/bg1.jpg')] dark:bg-[url('/bg1-dark.jpg')] bg-cover bg-bottom bg-neutral-300 dark:bg-neutral-900 bg-no-repeat">
        {/* need to add animation using framer motion: first text-black then change it red */}
        <h2 className="text-4xl font-Poppins  font-light">
          Show some love this Valentine's Day Winter Sale On Now
        </h2>
      </div>
      <div className="h-72 justify-center items-center flex">
        {/* need to add animation using pure css */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  break-words relative z-0 rounded-3xl mx-auto font-semibold   font-Poppins p-5 w-full max-w-3xl ">
          Elevate Your Mind with Books That Inspire Change, Empowering You to
          #ReadBetter, #LearnMore, and #GrowEveryDay.
        </h2>
      </div>

      <div className=" mt-5 p-3 w-full">
        <h2 className="text-3xl mb-7 font-Montserrat ml-10 underline underline-offset-8 decoration-border">
          Our Top Books
        </h2>
        <div className="grid grid-flow-col overflow-x-scroll 2xl:overflow-hidden overscroll-contain no-scroll-tab place-items-center gap-4 px-2 ">
          {topFiveBooks.length > 0
            ? topFiveBooks.map((book, index) => (
                <BookCard
                  state="home"
                  key={index}
                  id={String(book._id)}
                  title={book.title}
                  image={book.imageUrl}
                  price={book.price}
                  description={book.description}
                />
              ))
            : [1, 2, 3, 4, 5].map((element) => <LazyBookCard key={element} />)}
        </div>
      </div>
      <div className="h-[70vh] p-3 md:h-svh bg-[url('/bg2.jpg')] dark:bg-[url('/bg2-dark.jpg')] bg-cover bg-bottom mt-20 bg-neutral-400 dark:bg-neutral-800 flex justify-center items-center">
        <h2 className="text-2xl xl:text-5xl font-Poppins  font-black min-w-60 max-w-5xl leading-relaxed ">
          Immerse Yourself in Captivating Reads Year-Round Introducing Our
          Best-Selling Series - Now with Exclusive Features
        </h2>
      </div>
    </div>
  );
};

export default Home;
