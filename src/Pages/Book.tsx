import React, { useEffect, useState } from "react";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useParams, useLocation } from "react-router-dom";
import store, { RootState } from "../redux/store";
import { BookType } from "../Api/types";
import { getBookDataApi } from "../Api/book";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import NotFound from "./NotFound";
import { addToCartListApi } from "../Api/cart";
import Loader from "../Components/Loader";
import { addToCart, selectIsBookInCart } from "../redux/reducers/cartReducer";

const Book: React.FC = () => {
  const { BookId } = useParams();
  const [bookInfo, setBookInfo] = useState<BookType>();
  const { data: userData } = useSelector((store: RootState) => store.user);
  const location = useLocation();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);

  const bookId = BookId ?? "";
  const isBookInCart = useSelector((state: RootState) =>
    selectIsBookInCart(state, bookId)
  );

  console.log(location.state);

  useEffect(() => {
    if (BookId) {
      getBookDataApi(BookId)
        .then((res) => setBookInfo(res))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [BookId]);

  if (!BookId) return null;
  if (loading) return <Loader />;
  if (error) return <NotFound />;

  const isWishlisted = BookId ? userData?.wishList.includes(BookId) : undefined;

  const addItemToCart = (id: string) => {
    if (bookInfo) {
      const { title, imageUrl, price, _id } = bookInfo;
      store.dispatch(addToCart(title, imageUrl, price, _id, BookId));
    }
    addToCartListApi(id);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[88vh]  p-4 justify-center items-center gap-3">
      <div className="flex flex-col justify-center  p-3 max-w-xl w-full">
        <div className="h-full w-full ">
          <img
            src={bookInfo?.imageUrl}
            onError={(e) => {
              e.currentTarget.src = "/Image-Not-Available.png";
              e.currentTarget.onerror = null;
            }}
            alt=""
            loading="lazy"
            className="h-96 w-fit object-contain object-center rounded-md"
          />
        </div>
      </div>
      <div className="   h-full max-w-xl w-full flex flex-col justify-between gap-3">
        <div className=" h-full pl-3 ">
          <h2 className="text-3xl font-Poppins p-1  text-left">
            {bookInfo?.title}
          </h2>
          <div className="flex gap-1 items-center  text-xs">
            {
              <div className=" flex text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            }
            <p> {"3"} Review(s)</p>
            <div className="w-1  border-r border-white " />
            <button className="underline decoration-neutral-300 underline-offset-4 hover:text-blue-500 hover:decoration-blue-500 transition-colors duration-300">
              ADD A REVIEW
            </button>
          </div>
          <div></div>
          <h2 className="mt-10 font-bold text-4xl text-green-500">₹{"2000"}</h2>
          <div className="mt-7">
            <div className="flex">
              <p>Availability:&nbsp;</p>
              <p className="text-green-600">{"In stock"}</p>
            </div>
            <div className="flex">
              <p>Category:&nbsp;</p>
              <div className="text-green-600 flex">
                {bookInfo?.category.slice(0, 3).map((category, index) => {
                  return (
                    <div key={index} className="flex">
                      <div className="">{category}</div>
                      {index !== bookInfo.category.slice(0, 3).length - 1 &&
                        ","}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=""></div>
          </div>
          {/*book description */}

          <p className="mt-7 line-clamp-3">{bookInfo?.description}</p>
        </div>

        <div className="h-48 flex flex-col md:flex-row justify-center gap-3 items-center">
          <>
            <button className="px-4 py-4  w-full md:w-fit bg-black text-white dark:bg-white dark:text-black rounded-sm flex gap-2 items-center justify-center">
              {isWishlisted ? (
                <>
                  <FaHeart />
                </>
              ) : (
                <>
                  <Heart /> <p>Add to Wishlist</p>
                </>
              )}
            </button>
            {!isBookInCart ? (
              <button
                onClick={() => addItemToCart(BookId)}
                className="px-4 py-4 bg-black text-white dark:bg-white dark:text-black  rounded-sm w-full md:w-fit flex gap-2 items-center justify-center"
              >
                <FaShoppingCart size={20} /> Add to Cart
              </button>
            ) : (
              <button className="p-4 border-green-500 border-2 rounded-sm flex justify-center items-center text-green-500 gap-2">
                <FaShoppingCart /> Added to Cart
              </button>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Book;

//aadd availability in book
//add stock
