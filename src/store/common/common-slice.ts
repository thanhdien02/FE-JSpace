import { createSlice } from "@reduxjs/toolkit";

interface ICommon {
  infoUserOauth: any;
}

const init: ICommon = {
    infoUserOauth: {},
};
const commonSlice: any = createSlice({
  name: "common",
  initialState: init,
  reducers: {
    commonUpdateOAuthRedux: (state: any, action: any) => ({
      ...state,
      infoUserOauth: action.payload.infoUserOauth,
    }),
  },
});
export const { commonChange, commonUpdateOAuthRedux } = commonSlice.actions;
export default commonSlice.reducer;
