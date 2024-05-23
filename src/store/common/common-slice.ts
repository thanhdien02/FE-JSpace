import { createSlice } from "@reduxjs/toolkit";

interface ICommon {
  infoUserOauth: any;
  loginCheck?: boolean;
}

const init: ICommon = {
  infoUserOauth: {},
  loginCheck: false,
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
      loginCheck: action.payload.loginCheck,
    }),
  },
});
export const { commonUpdateLoginRedux, commonUpdateOAuthRedux } =
  commonSlice.actions;
export default commonSlice.reducer;
