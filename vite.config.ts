import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    proxy: {
      "/api": {
        target: "http://35.197.133.113:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  define: {
    "process.env.VITE_REACT_KEY_MAP": JSON.stringify(
      process.env.VITE_REACT_KEY_MAP
    ),
  },
});
