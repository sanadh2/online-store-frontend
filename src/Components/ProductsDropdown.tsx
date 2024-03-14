import React, { useEffect, useState } from "react";
import { booksData } from "../static/userData";

type PropTypes = {
  search: string;
  dropdown: boolean;
};
type BookType = {
  title: string;
  description?: string;
  author: string;
  category?: string[];
  seller?: number;
  imageUrl: string;
  rating: number;
  language: string;
  sold: number;
};
const ProductsDropdown: React.FC<PropTypes> = ({ search, dropdown }) => {
  const [searchResult, setSearchResult] = useState<BookType[]>([]);

  useEffect(() => {
    if (search.length < 3) return;
    const books = booksData.filter((book) => {
      if (book.title.toLowerCase().includes(search.toLowerCase())) return book;
    });
    setSearchResult(books);
  }, [search]);

  return (
    <div
      id="productdropdown"
      className={`${search.length > 0 ? (dropdown ? "flex" : "hidden") : "hidden"} absolute   py-2 top-16 rounded  flex-col items-center bg-neutral-200 dark:bg-neutral-800 w-full`}
    >
      {searchResult.length == 0 ? (
        <div className="w-full p-1">
          <p className="text-center text-red-500 border-b w-fit mx-auto border-red-500">
            no matching books
          </p>
        </div>
      ) : (
        <div className="no-scroll-tab overflow-y-scroll max-h-[50svh] w-full  px-2">
          {searchResult.map((book) => (
            <div key={book.author} className="w-full p-1 flex gap-2 h-10">
              <img
              draggable={false}
                loading="lazy"
                src={book.imageUrl}
                alt={book.title}
                className="object-contain h-full w-full"
              />
              <p> {book.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsDropdown;
