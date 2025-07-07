import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: localStorage.getItem("jwt"),
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("jwt", action.payload);
    },
    removeToken: (state) => {
      state.value = null;
      localStorage.removeItem("jwt");
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
