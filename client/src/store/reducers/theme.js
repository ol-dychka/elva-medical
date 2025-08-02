import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: localStorage.getItem("theme") || "light",
  },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("theme", state.value);
    },
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.value);
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
