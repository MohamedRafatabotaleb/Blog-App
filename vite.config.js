import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path-browserify";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      path: "path-browserify", // استبدال path بـ path-browserify
    },
  },
  plugins: [react()],
});
