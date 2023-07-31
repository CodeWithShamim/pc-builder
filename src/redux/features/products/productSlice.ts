import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";
import { categoryTypes } from "@/utils/products";

interface IProductState {
  builderProducts: {
    cpu: IProduct[];
    motherboard: IProduct[];
    monitor: IProduct[];
    ram: IProduct[];
    powerSupply: IProduct[];
    storage: IProduct[];
  };
}
const initialState: IProductState = {
  builderProducts: {
    cpu: [],
    motherboard: [],
    monitor: [],
    ram: [],
    powerSupply: [],
    storage: [],
  },
};

const prodcutSlice = createSlice({
  name: "builderProducts",
  initialState,
  reducers: {
    addBuilderProduct: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;

      const isExist = state.builderProducts[product.type as "cpu"]?.filter(
        (bp: IProduct) => bp._id === product._id
      );

      if (!isExist.length) {
        state.builderProducts[product.type as "cpu"].push(product);
      }
    },
  },
});

export const { addBuilderProduct } = prodcutSlice.actions;
export default prodcutSlice.reducer;
