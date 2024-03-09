import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
type Item = {
  book: {
    title: string;
    imageUrl: string;
    price: number;
    _id: string;
  };
  count: number;
  _id: string;
};

type StateTypes = {
  cartList: Item[];
  loading: boolean;
  length: number;
  error: null | string;
};

const initialState: StateTypes = {
  cartList: [],
  loading: true,
  length: 0,
  error: null,
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setCartLength(state, action: PayloadAction<number>) {
      state.length = action.payload;
    },
    setCartList: {
      reducer(state, action: PayloadAction<Item[]>) {
        state.cartList = action.payload;
        state.loading = false;
      },
      prepare(data: Item[]) {
        return { payload: data };
      },
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    addToCart: {
      reducer(state, action: PayloadAction<Item>) {
        const isThereItem = state.cartList.filter(
          (item) => item._id == action.payload._id
        );
        if (isThereItem.length < 1) {
          state.cartList.push(action.payload);
          state.length = state.length + 1;
        }
      },
      prepare(
        title: string,
        imageUrl: string,
        price: number,
        _id: string,
        bookID: string
      ) {
        const newItem: Item = {
          book: { imageUrl, price, title, _id: bookID },
          _id,
          count: 1,
        };
        return {
          payload: newItem,
        };
      },
    },
    deleteFromCart(state, action) {
      state.cartList = state.cartList.filter(
        (item) => item._id != action.payload
      );
      state.length = state.length - 1;
    },
    increaseCount(state, action: PayloadAction<string>) {
      state.cartList = state.cartList.map((item) => {
        if (item._id == action.payload) item.count = item.count + 1;
        return item;
      });
    },
    decreaseCount(state, action: PayloadAction<string>) {
      state.cartList = state.cartList.map((item) => {
        if (item._id == action.payload && item.count > 1)
          item.count = item.count - 1;
        return item;
      });
    },
  },
});

export const selectIsBookInCart = (state: RootState, bookId: string) => {
  const foundBook = state.cart.cartList.find(
    (item) => item.book._id === bookId
  );
  return !!foundBook;
};

export const {
  setCartList,
  addToCart,
  decreaseCount,
  deleteFromCart,
  increaseCount,
  setCartLength,
  setError,
} = cartSlice.actions;
export default cartSlice.reducer;
