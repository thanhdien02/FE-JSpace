import authReducer from "./auth/auth-slice";
import commonReducer from "./common/common-slice";
import { combineReducers } from "@reduxjs/toolkit";
  
export const reducer: any = combineReducers({
  auth: authReducer,
  common: commonReducer,
});
