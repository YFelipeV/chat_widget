import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cdnImport from "vite-plugin-cdn-import";

export default defineConfig({
  plugins: [
    react(),
    cdnImport({
      modules: [
        {
          name: "react",
          global: "React",
          path: "https://unpkg.com/react@18/umd/react.production.min.js", // ✅ Carga React desde CDN
        },
        {
          name: "react-dom",
          global: "ReactDOM",
          path: "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js", // ✅ Carga ReactDOM desde CDN
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: "src/ChatWidget.jsx",
      name: "ChatWidget",
      fileName: (format) => `chat-widget.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // ✅ Evita incluir React en el bundle
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
