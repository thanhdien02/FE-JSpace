import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  user: any;
  accessToken: string;
  roles: IRole[];
  loading: boolean;
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
    authRegister: (state: any) => ({
      ...state,
    }),
    authUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loading: action.payload.loading,
    }),
    authGetRoles: (state: any) => ({
      ...state,
    }),
    authUpdateRolesRedux: (state: any, action: any) => ({
      ...state,
      roles: action.payload.roles,
    }),
    authUpdateInfoLoginRedux: (state: any, action: any) => ({
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
  authRegister,
  authUpdateLoadingRedux,
} = authSlice.actions;
export default authSlice.reducer;
