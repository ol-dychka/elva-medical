import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import themeReducer from "./reducers/theme";
import tokenReducer from "./reducers/token";

export default configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    theme: themeReducer,
  },
  devTools: true,
});
