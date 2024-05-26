import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestAuthRegister = (dataRole: string, dataRegister: any) => {
  return axios.post(`${API}/api/v1/auth/users/register?role=${dataRole}`, {
    ...dataRegister,
  });
};

export const requestAuthGetAllRoles = () => {
  return axios.get(`${API}/api/v1/auth/roles`);
};

export const requestAuthLogin = (dataLogin: any) => {
  return axios.post(`${API}/api/v1/auth/users/login`, {
    ...dataLogin,
  });
};

export const requestAuthLogin1 = (dataLogin: any) => {
  const credentials = Buffer.from("abc_client:abc123").toString("base64");
  console.log("🚀 ~ requestAuthLogin1 ~ credentials:", credentials)
  return axios.post(
    `https://shoee.click/api/token`,
    {
      ...dataLogin,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
    }
  );
};

export const requestAuthFetchMe = (accessToken: string) => {
  if (!accessToken) return;
  return axios.get(`${API}/api/v1/auth/candidate/profile`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const requestAuthRefresh = (refreshToken: string) => {
  console.log("🚀 ~ requestAuthRefresh ~ refreshToken:", refreshToken);
  if (!refreshToken) return;
  return axios.post(`${API}/api/v1/auth/user-refresh-token`, null, {
    headers: {
      refreshToken: refreshToken,
    },
  });
};
