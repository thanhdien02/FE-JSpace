import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  user: any;
  accessToken: string;
  publicProfile: boolean;
  defaultResume: any;
  roles: IRole[];
  loading?: boolean;
  messageAuth?: string;
}
interface IRole {
  id: number;
  code: string;
  name: string;
  description: string;
}

const init: IAuth = {
  user: {},
  accessToken: "",
  publicProfile: false,
  defaultResume: {},
  roles: [],
  loading: false,
  messageAuth: "",
};
const authSlice: any = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    authLogin: () => {},
    authLogout: () => {},
    authRegister: () => {},
    authLoginWithEmailPassword: () => {},
    authRefreshToken: () => {},
    authFetchMe: () => {},
    authGetRoles: () => {},
    authUpdatePublicProfileRedux: (state: any, action: any) => ({
      ...state,
      publicProfile: action.payload.publicProfile,
    }),
    authUpdateDefaultResumeRedux: (state: any, action: any) => ({
      ...state,
      defaultResume: action.payload.defaultResume,
    }),
    authUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loading: action.payload.loading,
    }),
    authUpdateMessageRedux: (state: any, action: any) => ({
      ...state,
      messageAuth: action.payload.messageAuth,
    }),
    authUpdateRolesRedux: (state: any, action: any) => ({
      ...state,
      roles: action.payload.roles,
    }),
    authUpdateFetchRedux: (state: any, action: any) => ({
      ...state,
      accessToken: action.payload.accessToken,
      user: action.payload.user,
      defaultResume: action.payload.defaultResume,
      publicProfile: action.payload.publicProfile,
    }),
    authUpdateSetDefaultResumeRedux: (state: any, action: any) => ({
      ...state,
      defaultResume: action.payload.defaultResume,
      publicProfile: action.payload.publicProfile,
    }),
    authChange: (state: any, action: any) => ({
      ...state,
      user: action.payload,
    }),
  },
});
export const {
  authChange,
  authLogin,
  authUpdateRolesRedux,
  authGetRoles,
  authFetchMe,
  authRegister,
  authLogout,
  authUpdateLoadingRedux,
  authUpdateFetchRedux,
  authUpdateMessageRedux,
  authRefreshToken,
  authLoginWithEmailPassword,
  authUpdatePublicProfileRedux,
  authUpdateDefaultResumeRedux,
  authUpdateSetDefaultResumeRedux,
} = authSlice.actions;
export default authSlice.reducer;
