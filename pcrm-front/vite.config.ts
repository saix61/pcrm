import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3000", // адрес вашего бэкенда
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""), // удаляет /api из пути
      },
    },
  },
});
