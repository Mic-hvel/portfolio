import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    lightTheme: (state) => {
      state.theme = "light";
    },
    goldTheme: (state) => {
      state.theme = "dark-theme";
    },
    orangeTheme: (state) => {
      state.theme = "light-theme";
    },
    violetTheme: (state) => {
      state.theme = "violet";
    },
  },
});

export const { lightTheme, goldTheme, orangeTheme, violetTheme } =
  themeSlice.actions;

export default themeSlice.reducer;
