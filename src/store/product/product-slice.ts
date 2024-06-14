import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  products: any;
  productById: any;
  paginationProduct?: any;
  loadingProduct?: boolean;
  messageProduct?: string;
}

const init: IUser = {
  products: [],
  productById: [],
  paginationProduct: {},
  loadingProduct: false,
  messageProduct: "",
};

const companyrequestreviewSlice: any = createSlice({
  name: "product",
  initialState: init,
  reducers: {
    productGetProduct: () => {},
    productUpdateProductRedux: (state: any, action: any) => ({
      ...state,
      products: action.payload.products,
    }),
    productUpdatePaginationRedux: (state: any, action: any) => ({
      ...state,
      paginationProduct: action.payload.paginationProduct,
    }),
    productUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingProduct: action.payload.loadingProduct,
    }),
    productUpdateMessageRedux: (state: any, action: any) => ({
      ...state,
      messageProduct: action.payload.messageProduct,
    }),
  },
});
export const {
  productGetProduct,
  productUpdateProductRedux,
  productUpdatePaginationRedux,
  productUpdateLoadingRedux,
  productUpdateMessageRedux,
} = companyrequestreviewSlice.actions;
export default companyrequestreviewSlice.reducer;
