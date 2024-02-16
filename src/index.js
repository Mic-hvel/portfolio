import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import themeReducer from "./redux/theme/themeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: themeReducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App id="app" />
    </Provider>
  </React.StrictMode>
);
