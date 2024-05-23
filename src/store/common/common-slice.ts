import { createSlice } from "@reduxjs/toolkit";

interface ICommon {
  infoUserOauth: any;
  login?: boolean;
}

const init: ICommon = {
  infoUserOauth: {},
  login: false,
};
const commonSlice: any = createSlice({
  name: "common",
  initialState: init,
  reducers: {
    commonUpdateOAuthRedux: (state: any, action: any) => ({
      ...state,
      infoUserOauth: action.payload.infoUserOauth,
    }),
    commonUpdateLoginRedux: (state: any, action: any) => ({
      ...state,
      login: action.payload.login,
    }),
  },
});
export const { commonUpdateLoginRedux, commonUpdateOAuthRedux } =
  commonSlice.actions;
export default commonSlice.reducer;
