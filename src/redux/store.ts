import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import productReducer from "./features/products/productSlice";

const store = configureStore({
  reducer: {
    book: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
