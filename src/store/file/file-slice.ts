import { createSlice } from "@reduxjs/toolkit";

interface IFile {
  file: any;
  loading?: boolean;
  messageFile?: string;
}

const init: IFile = {
  file: {},
  loading: false,
  messageFile: "",
};
const fileSlice: any = createSlice({
  name: "file",
  initialState: init,
  reducers: {
    fileUploadFile: (state: any) => ({
      ...state,
    }),
    fileUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loading: action.payload.loading,
    }),
    fileUpdateMessageRedux: (state: any, action: any) => ({
      ...state,
      messageFile: action.payload.messageFile,
    }),
  },
});
export const {
  fileUploadFile,
  fileUpdateLoadingRedux,
  fileUpdateMessageRedux,
} = fileSlice.actions;
export default fileSlice.reducer;
