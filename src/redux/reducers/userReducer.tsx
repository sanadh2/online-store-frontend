import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../Api/types";

type StateType = {
  loading: boolean;
  error: null | string;
  data: null | UserType;
  loggedIn: boolean;
  trigger: boolean;
};

const initialState: StateType = {
  loading: true,
  data: null,
  error: null,
  loggedIn: false,
  trigger: true,
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
    triggerUserData: (state) => {
      state.trigger = !state.trigger;
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
  triggerUserData,
} = userSlice.actions;
