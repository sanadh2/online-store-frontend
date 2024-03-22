import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import store, { RootState } from "../redux/store";
import {
  deleteFromCart,
  setCartList,
  setError,
} from "../redux/reducers/cartReducer";
import { getCartListApi, removeFromCartListApi } from "../Api/cart";
import NotLoggedIn from "../Components/NotLoggedIn";
import Loader from "../Components/Loader";
import ListCard from "../Components/ListCard";

const Cart: React.FC = () => {
  const { loggedIn } = useSelector((store: RootState) => store.user);
  const { loading, cartList } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    getCartListApi()
      .then((res) => {
        store.dispatch(setCartList(res ? res : []));
      })
      .catch((error: string) => {
        console.error("Error fetching cart list:", error);
        store.dispatch(setError(error));
      });
  }, []);

  if (!loggedIn) return <NotLoggedIn />;
  if (loading) return <Loader />;

  const deleteItem = (id: string) => {
    store.dispatch(deleteFromCart(id));
    removeFromCartListApi(id);
  };

  return (
    <div className="p-3 md:p-5 lg:p-10 ">
      <h2 className="text-3xl font-Poppins font-light underline underline-offset-8">
        My Cart
      </h2>
      <div className="mt-10 flex flex-col justify-center items-center w-full gap-2">
        {cartList.length > 0 ? (
          cartList.map((item) => (
            <ListCard
              key={item._id}
              title={item.book.title}
              count={item.count}
              image={item.book.imageUrl}
              price={item.book.price}
              id={item._id}
              deleteItem={deleteItem}
              bookID={item.book._id}
            />
          ))
        ) : (
          <div className="text-red-500">Nothing here</div>
        )}
      </div>
      <button
        type="button"
        className="mt-5 px-4 py-4 rounded bg-green-600 float-right"
      >
        Check out
      </button>
    </div>
  );
};

export default Cart;
