import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {nodePolyfills} from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [react(),nodePolyfills()],
  define:{
    "process.env": {},
  },
  build: {
    lib: {
      entry: "src/ChatWidget.jsx", // Archivo principal de tu componente
      name: "ChatWidget",
      fileName: (format) => `chat-widget.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // No incluir React en el bundle
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
