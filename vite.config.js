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
      external: ["react", "react-dom"], // 📌 No incluir React en el bundle
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
