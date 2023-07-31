import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";
import { categoryTypes } from "@/utils/products";

interface IProductState {
  builderProducts: IProduct[];
}
const initialState: IProductState = {
  builderProducts: [],
};

const prodcutSlice = createSlice({
  name: "builderProducts",
  initialState,
  reducers: {
    addBuilderProduct: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;

      const isExist = state.builderProducts.filter(
        (bp: IProduct) => bp._id === product._id
      );

      if (!isExist?.length) {
        state.builderProducts.push(product);
      }
    },
    removeBuilderProduct: (state) => {
      state.builderProducts = [];
    },
  },
});

export const { addBuilderProduct, removeBuilderProduct } = prodcutSlice.actions;
export default prodcutSlice.reducer;
