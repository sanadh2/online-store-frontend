import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { filterBookApi } from "../Api/book";
import { BookType } from "../Api/types";
import FilterSearch from "../Components/FilterSearch";
import BookCard from "../Components/uiwithprops/BookCard";

const Search: React.FC = () => {
  const { searchvalue } = useParams();
  const location = useLocation();
  const [queryParams] = useState(new URLSearchParams(location.search));
  const categoryParams = queryParams.get("category");
  const ratingParams = queryParams.get("rating");
  const authorParams = queryParams.get("author");
  const languageParams = queryParams.get("language");
  const pageParams = queryParams.get("page");

  const [books, setBooks] = useState<BookType[] | null>(null);
  const [page, setPage] = useState<number>(
    pageParams ? parseInt(pageParams) : 0
  );
  const [nbh, setNbh] = useState<number>(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    const search = searchvalue;
    filterBookApi(search, page, categoryParams, ratingParams, languageParams)
      .then((result) => {
        if (result) {
          setBooks(result.books);
          setNbh(result.nbh);
          setCategories(result.category);
          setLanguages(result.language);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    searchvalue,
    page,
    categoryParams,
    ratingParams,
    authorParams,
    languageParams,
  ]);

  const startIndex = page * 10 + 1;
  const endIndex = Math.min((page + 1) * 10, nbh);
  return (
    <div className="flex min-h-svh pb-10">
      <aside className="w-40 sm:w-52 md:w-60 lg:w-72 border-r flex flex-col items-center ">
        <div className=" w-full px-4 h-[50svh] sticky top-20">
          <FilterSearch
            categoryParams={categoryParams}
            authorParams={authorParams}
            languageParams={languageParams}
            ratingParams={ratingParams}
            categories={categories}
            languages={languages}
          />
        </div>
      </aside>
      <div className="mt-20 flex justify-center h-full items-center flex-col w-full">
        <ul className="ml-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6 place-self-auto gap-10">
          {books?.map((el) => (
            <BookCard
              key={el._id}
              image={el.imageUrl}
              description={el.description}
              price={el.price}
              title={el.title}
              discount={el.discount}
              className=""
              id={el._id}
            />
          ))}
        </ul>
        <div className="flex justify-between w-full mt-20 items-center px-10">
          <div className="">
            <p>
              Showing {startIndex} to {endIndex} of {nbh}
            </p>
          </div>

          <form action="" method="get" className="flex gap-2">
            <button
              type="submit"
              onClick={() => setPage(page - 1)}
              className={`${page == 0 ? "hidden" : "block"} px-4 py-1 border border-current rounded bg-neutral-900 text-white text-lg dark:text-black dark:bg-neutral-100`}
            >
              previous
            </button>
            <input type="number" name="page" value={page} className="sr-only" />
            <button
              type="submit"
              onClick={() => setPage(page + 1)}
              className={`${endIndex === nbh && "hidden"} px-4 py-1 border border-current rounded bg-fuchsia-500 text-lg text-black`}
            >
              next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
