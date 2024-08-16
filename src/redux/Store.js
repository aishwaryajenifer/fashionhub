import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import authReducer from './AuthSlice';
const rootReducer = {
  cart: cartReducer,
};
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
export default store;