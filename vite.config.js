import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/ChatWidget.jsx", // 📌 Widget principal
      name: "Widget",
      fileName: (format) => `widget.${format}.js`,
    },
    rollupOptions: {
      external: [], // 📌 No incluir React en el bundle
    },
  },
});
