import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/api/products",
    }),

    singleProduct: builder.query({
      query: (id: string) => `/api/products?id=${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useSingleProductQuery } = bookApi;
