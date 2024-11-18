import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // تحديد alias للمسارات
      "@components": "/src/components", // يمكنك الوصول إلى المجلد عبر @components بدلاً من كتابة المسار الطويل
      "@assets": "/src/assets", // نفس الشيء بالنسبة للمجلدات الأخرى
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"], // يمكنك تحديد أنواع الملفات التي يجب معالجتها
  },
});
