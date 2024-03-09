import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../Api/types";

type StateType = {
  loading: boolean;
  error: null | string;
  data: null | UserType;
  loggedIn: boolean;
};

const initialState: StateType = {
  loading: true,
  data: null,
  error: null,
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggIn: (state) => {
      state.loggedIn = true;
    },

    fetchUserData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.loggedIn = true;
    },
    fetching: (state) => {
      state.loading = true;
    },
    fetchUserError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserData: (state) => {
      state.data = null;
      state.error = null;
      state.loggedIn = false;
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
export const {
  fetchUserData,
  fetchUserError,
  fetching,
  deleteUserData,
  setLoggIn,
} = userSlice.actions;
