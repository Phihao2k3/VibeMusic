import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@admin": path.resolve(__dirname, "src/admin"),
      "@client": path.resolve(__dirname, "src/client"),
      "@src": path.resolve(__dirname, "src"),
    },
  },
});
