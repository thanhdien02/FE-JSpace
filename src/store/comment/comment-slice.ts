import { createSlice } from "@reduxjs/toolkit";

interface IComment {
  comments: any;
  commentById: any;
  loadingComment?: boolean;
  messageComment?: string;
  paginationComment?: any;
}
const init: IComment = {
  comments: {},
  commentById: {},
  loadingComment: false,
  messageComment: "",
  paginationComment: {},
};
const commentSlice: any = createSlice({
  name: "comment",
  initialState: init,
  reducers: {
    commentGetComment: () => {},
    commentGetCommentById: () => {},
    commentUpdateLoadingRedux: (state, action) => ({
      ...state,
      loadingComment: action.payload.loadingComment,
    }),
    commentUpdatePaginationRedux: (state, action) => ({
      ...state,
      paginationComment: action.payload.paginationComment,
    }),
    commentUpdateCommentRedux: (state, action) => ({
      ...state,
      comments: action.payload.comments,
    }),
    commentUpdateCommentByIdRedux: (state, action) => ({
      ...state,
      commentById: action.payload.commentById,
    }),
    commentUpdateMessageRedux: (state, action) => ({
      ...state,
      messageComment: action.payload.messageComment,
    }),
  },
});
export const {
  commentGetComment,
  commentGetCommentById,
  commentUpdateLoadingRedux,
  commentUpdatePaginationRedux,
  commentUpdateCommentRedux,
  commentUpdateCommentByIdRedux,
  commentUpdateMessageRedux,
} = commentSlice.actions;
export default commentSlice.reducer;
