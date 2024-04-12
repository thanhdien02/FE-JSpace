import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export const API =
  "https://jspace-service-2a930e79346f.herokuapp.com/jspace-service";
