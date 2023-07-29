import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";

interface IProductState {
  product: IProduct[] | [];
  isLoading: boolean;
}
const initialState: IProductState = {
  product: [],
  isLoading: false,
};

const prodcutSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.product = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addProduct, setLoading } = prodcutSlice.actions;
export default prodcutSlice.reducer;
