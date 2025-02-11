import { defineConfig } from "vite";
import {resolve} from 'path'
import react from "@vitejs/plugin-react";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.jsx"),
      name: "chat-widget",
      fileName: "chat-widget"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      },
      
    },
    sourcemap: true,
    minify:false,
    
  }
});