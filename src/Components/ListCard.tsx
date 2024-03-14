import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import store from "../redux/store";
import { decreaseCount, increaseCount } from "../redux/reducers/cartReducer";
import { FaMinus, FaPlus } from "react-icons/fa";

interface PropType {
  title: string;
  count: number;
  image: string;
  price: number;
  id: string;
  bookID: string;
  deleteItem: (id: string) => void;
}

const ListCard: React.FC<PropType> = ({
  title,
  image,
  price,
  deleteItem,
  id,
  count,
  bookID,
}) => {
  const totalPrice = useMemo(() => price * count, [count, price]);

  return (
    <div className="w-full h-40  dark:bg-black rounded-md bg-gray-300 flex gap-2 items-center justify-between p-3">
      <div className="w-full flex justify-center items-center">
        <Link to={`/book/${bookID}`} className="w-fit ">
          <img
            draggable={false}
            src={image}
            onError={(e) => {
              e.currentTarget.src = "/Image-Not-Available.png";
              e.currentTarget.onerror = null;
            }}
            alt=""
            className="object-center h-32 w-fit object-contain aspect-square"
          />
        </Link>
      </div>

      <Link to={`/book/${bookID}`} className="w-full">
        <h2 className="text-sm sm:text-lg lg:text-xl ">{title}</h2>
      </Link>

      <div className="flex justify-center items-center gap-1 lg:gap-3 w-full">
        <button
          className="bg-green-500 rounded-full p-1 xs:p-1.5 md:p-2"
          onClick={() => store.dispatch(increaseCount(id))}
        >
          <FaPlus className="size-2 xs:size-2.5 sm:size-3 md:size-3.5 lg:size-auto" />
        </button>
        <p> {count}</p>
        <button
          className="bg-green-500 rounded-full p-1 xs:p-1.5 md:p-2"
          onClick={() => store.dispatch(decreaseCount(id))}
        >
          <FaMinus className="size-2 xs:size-2.5 sm:size-3 md:size-3.5 lg:size-auto" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center  md:pr-10 w-full">
        <h2 className="text-lg lg:text-xl">₹{totalPrice}</h2>
        <button className="text-red-500" onClick={() => deleteItem(id)}>
          remove
        </button>
      </div>
    </div>
  );
};

export default ListCard;
