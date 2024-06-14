import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestProductGetProduct = (
  page: string = "1",
  size: string = "10"
) => {
  return axios.get(`${API}/api/v1/products?page=${page}&size=${size}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
