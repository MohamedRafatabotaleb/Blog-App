import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path-browserify"; // استخدام path-browserify

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      // استبدال path بـ path-browserify
      path: "path-browserify",
    },
  },
  plugins: [react()],
});
