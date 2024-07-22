import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loginRegisterReducer from "./loginRegisterSlice";
import optionsReducer from "./optionsSlice";
import blogPostWebSocketReducer from "./blogPostSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    loginRegister: loginRegisterReducer,
    options: optionsReducer,
    blogPostWebSocket: blogPostWebSocketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
