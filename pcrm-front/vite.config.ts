import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3100", // адрес вашего бэкенда
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@store": resolve(__dirname, "src/store"),
      "@api": resolve(__dirname, "src/api"),
      "@utilities": resolve(__dirname, "src/utilities"),
      "@page": resolve(__dirname, "src/page"),
      "@components": resolve(__dirname, "src/components"),
    },
  },
});
