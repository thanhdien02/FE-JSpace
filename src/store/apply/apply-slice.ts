import { createSlice } from "@reduxjs/toolkit";

interface IFile {
  applied?: any;
  loadingApply?: boolean;
  messageApply?: string;
  paginationApply?: any;
}

const init: IFile = {
  applied: {},
  loadingApply: false,
  messageApply: "",
  paginationApply: {},
};
const applySlice: any = createSlice({
  name: "apply",
  initialState: init,
  reducers: {
    applyJobApply: () => {},
    applyUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingApply: action.payload.loadingApply,
    }),
    applyUpdateMessageRedux: (state: any, action: any) => ({
      ...state,
      messageApply: action.payload.messageApply,
    }),
    applyPaginationRedux: (state: any, action: any) => ({
      ...state,
      paginationApply: action.payload.paginationApply,
    }),
  },
});
export const {
  paginationApply,
  applyJobApply,
  applyUpdateLoadingRedux,
  applyUpdateMessageRedux,
} = applySlice.actions;
export default applySlice.reducer;
