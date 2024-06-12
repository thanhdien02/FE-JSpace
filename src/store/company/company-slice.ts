import { createSlice } from "@reduxjs/toolkit";

interface ICompany {
  companys: any;
  relativeCompanys: any;
  followedCompanys: any;
  companyById: any;
  loadingCompany?: boolean;
  messageCompany?: string;
  paginationCompany?: any;
  paginationRelativeCompany?: any;
  paginationFollowedCompany?: any;
}

const init: ICompany = {
  companys: {},
  relativeCompanys: {},
  followedCompanys: {},
  companyById: {},
  loadingCompany: false,
  messageCompany: "",
  paginationCompany: {},
  paginationRelativeCompany: {},
  paginationFollowedCompany: {},
};
const companySlice: any = createSlice({
  name: "company",
  initialState: init,
  reducers: {
    companyGetCompany: () => {},
    companyGetRelativeCompany: () => {},
    companyGetFollowedCompany: () => {},
    companyGetCompanyById: () => {},
    companyUpdateLoadingRedux: (state, action) => ({
      ...state,
      loadingCompany: action.payload.loadingCompany,
    }),
    companyUpdatePaginationRedux: (state, action) => ({
      ...state,
      paginationCompany: action.payload.paginationCompany,
    }),
    companyUpdateRelativeCompanyPaginationRedux: (state, action) => ({
      ...state,
      paginationRelativeCompany: action.payload.paginationRelativeCompany,
    }),
    companyUpdateFollowedCompanyPaginationRedux: (state, action) => ({
      ...state,
      paginationFollowedCompany: action.payload.paginationFollowedCompany,
    }),
    companyUpdateCompanyRedux: (state, action) => ({
      ...state,
      companys: action.payload.companys,
    }),
    companyUpdateRelativeCompanyRedux: (state, action) => ({
      ...state,
      relativeCompanys: action.payload.relativeCompanys,
    }),
    companyUpdateFollowedCompanyRedux: (state, action) => ({
      ...state,
      followedCompanys: action.payload.followedCompanys,
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
  companyUpdateRelativeCompanyRedux,
  companyGetRelativeCompany,
  companyUpdateRelativeCompanyPaginationRedux,
  companyGetFollowedCompany,
  companyUpdateFollowedCompanyPaginationRedux,
  companyUpdateFollowedCompanyRedux,
} = companySlice.actions;
export default companySlice.reducer;
