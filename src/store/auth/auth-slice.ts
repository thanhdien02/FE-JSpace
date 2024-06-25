import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  user: any;
  accessToken: string;
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
  roles: [],
  loading: false,
  messageAuth: "",
};
const authSlice: any = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    authChange: (state: any, action: any) => ({
      ...state,
      user: action.payload,
    }),
    authLogin: (state: any) => ({
      ...state,
    }),
    authLogout: (state: any) => ({
      ...state,
    }),
    authRegister: (state: any) => ({
      ...state,
    }),
    authLoginWithEmailPassword: (state: any) => ({
      ...state,
    }),
    authRefreshToken: () => {},
    authUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loading: action.payload.loading,
    }),
    authUpdateMessageRedux: (state: any, action: any) => ({
      ...state,
      messageAuth: action.payload.messageAuth,
    }),
    authFetchMe: (state: any) => ({
      ...state,
    }),
    authGetRoles: (state: any) => ({
      ...state,
    }),
    authUpdateRolesRedux: (state: any, action: any) => ({
      ...state,
      roles: action.payload.roles,
    }),
    authUpdateFetchRedux: (state: any, action: any) => ({
      ...state,
      accessToken: action.payload.accessToken,
      user: action.payload.user,
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
} = authSlice.actions;
export default authSlice.reducer;
