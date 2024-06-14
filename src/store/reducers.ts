import authReducer from "./auth/auth-slice";
import commonReducer from "./common/common-slice";
import fileReducer from "./file/file-slice";
import jobReducer from "./job/job-slice";
import productReducer from "./product/product-slice";
import applyReducer from "./apply/apply-slice";
import companyReducer from "./company/company-slice";
import candidateReducer from "./candidate/candidate-slice";
import { combineReducers } from "@reduxjs/toolkit";

export const reducer: any = combineReducers({
  auth: authReducer,
  candidate: candidateReducer,
  file: fileReducer,
  common: commonReducer,
  job: jobReducer,
  product: productReducer,
  apply: applyReducer,
  company: companyReducer,
});
