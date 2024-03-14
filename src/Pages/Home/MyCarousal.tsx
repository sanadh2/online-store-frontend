import React, { useEffect, useState } from "react";
import axios, { AxiosResponse, isAxiosError } from "axios";
import { BookType } from "../../Api/types";
import { ArrowBigLeft, ArrowBigRight, Dot } from "lucide-react";

type myResponseType = {
  success: boolean;
  featuredBooks: BookType[];
};

const MyCarousal: React.FC = () => {
  const [featuredBooks, setFeaturedBooks] = useState<BookType[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  useEffect(() => {
    const getFeaturedBooksApi = async () => {
      try {
        const result: AxiosResponse<myResponseType> = await axios.get(
          "http://localhost:2222/book/featured"
        );
        return result.data.featuredBooks;
      } catch (error) {
        if (isAxiosError(error)) {
          // console.log(error.response?.data || error.message);
          throw new Error(error.message);
        } else {
          throw new Error("error finding featuredBooks");
        }
      }
    };
    getFeaturedBooksApi()
      .then((res) => setFeaturedBooks(res))
      .catch((err) => console.log(err));
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextBook = () => {
    if (featuredBooks.length === 0 || isHovered) return;
    setCurrentSlide((prev) => (prev + 1) % featuredBooks.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + featuredBooks.length) % featuredBooks.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextBook, 1000);
    return () => clearInterval(interval);
  }, [nextBook]);
  return (
    <div className="w-[50vh] h-full flex flex-col justify-center items-center ">
      <div className="w-full relative">
        <button
          onClick={prevSlide}
          className="size-8 absolute -left-10 top-1/2 -translate-y-1/2 opacity-20 hover:opacity-50 focus:opacity-80 active:opacity-100 transition-opacity ease-in-out duration-200 bg-black text-white dark:text-black dark:bg-white aspect-square rounded-full flex justify-center items-center"
        >
          <ArrowBigLeft className="" />
        </button>

        <div className="flex overflow-hidden w-full h-[20rem]">
          {featuredBooks.map((book, index) => {
            console.log("index is", index, " currentSlide is ", currentSlide);
            return (
              <div
                key={book._id}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ translate: `${-100 * currentSlide}%` }}
                className={`w-full border rounded-md p-3 flex justify-center items-center transition-all duration-500 ease-in-out shrink-0 grow-0`}
              >
                <img
                  src={book.imageUrl}
                  alt=""
                  className={`size-full object-contain `}
                />
              </div>
            );
          })}
        </div>
        <button
          onClick={nextBook}
          className="size-8 absolute -right-10 top-1/2 -translate-y-1/2 opacity-20 hover:opacity-50 focus:opacity-80 active:opacity-100 transition-opacity ease-in-out duration-200 bg-black text-white dark:text-black dark:bg-white aspect-square rounded-full flex justify-center items-center"
        >
          <ArrowBigRight className="" />
        </button>
        <div className="absolute flex gap-1 justify-center items-center  px-3">
          {featuredBooks.map((_, index) => (
            <button
              onClick={() => setCurrentSlide(index)}
              className={`${index !== currentSlide ? "opacity-50" : "opacity-100"} hover:opacity-80 size-6 hover:scale-150 transition-all duration-300 ease-in-out`}
            >
              <Dot className="size-full scale-110 p-0 " />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCarousal;
