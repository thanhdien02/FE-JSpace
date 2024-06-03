import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  define: {
    "process.env.VITE_REACT_KEY_MAP": JSON.stringify(
      process.env.VITE_REACT_KEY_MAP
    ),
  },
});
