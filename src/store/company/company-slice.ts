import { createSlice } from "@reduxjs/toolkit";

interface ICompany {
  companys: any;
  companyById: any;
  loadingCompany?: boolean;
  messageCompany?: string;
  paginationCompany?: any;
}

const init: ICompany = {
  companys: {},
  companyById: {},
  loadingCompany: false,
  messageCompany: "",
  paginationCompany: {},
};
const companySlice: any = createSlice({
  name: "company",
  initialState: init,
  reducers: {
    companyGetCompany: () => {},
    companyGetCompanyById: () => {},
    companyUpdateLoadingRedux: (state, action) => ({
      ...state,
      loadingCompany: action.payload.loadingCompany,
    }),
    companyUpdatePaginationRedux: (state, action) => ({
      ...state,
      paginationCompany: action.payload.paginationCompany,
    }),
    companyUpdateCompanyRedux: (state, action) => ({
      ...state,
      companys: action.payload.companys,
    }),
    companyUpdateCompanyByIdRedux: (state, action) => ({
      ...state,
      companyById: action.payload.companyById,
    }),
    companyUpdateMessageRedux: (state, action) => ({
      ...state,
      messageCompany: action.payload.messageCompany,
    }),
  },
});
export const {
  companyUpdateLoadingRedux,
  companyUpdateMessageRedux,
  companyGetCompany,
  companyGetCompanyById,
  companyUpdatePaginationRedux,
  companyUpdateCompanyRedux,
  companyUpdateCompanyByIdRedux,
} = companySlice.actions;
export default companySlice.reducer;
