import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": JSON.stringify("production"), // ✅ Reemplaza `process.env.NODE_ENV`
        "process.env": JSON.stringify({}), // ✅ Evita cualquier referencia a `process.env`
        "process": JSON.stringify({}) // ✅ Elimina cualquier referencia a `process`
      },
    }),
  ],
  define: {
    "process.env": {}, // ✅ Define `process.env` globalmente para evitar errores
  },
  build: {
    lib: {
      entry: "src/ChatWidget.jsx",
      name: "ChatWidget",
      fileName: (format) => `chat-widget.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // ✅ Evita incluir React en el bundle final
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
