import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import inject from "@rollup/plugin-inject";

export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": JSON.stringify("production"), // 📌 Reemplaza `process.env.NODE_ENV` con "production"
        "process.env": JSON.stringify({}), // 📌 Evita cualquier otra referencia a `process.env`
      },
    }),
    inject({
      process: "process", // 📌 Inyecta un objeto `process` para evitar errores
    }),
  ],
  define: {
    "process.env": {}, // 📌 Define `process.env` como un objeto vacío
  },
  build: {
    lib: {
      entry: "src/ChatWidget.jsx", // 📌 Asegúrate de que este es el archivo correcto de entrada
      name: "ChatWidget",
      fileName: (format) => `chat-widget.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // 📌 Evita incluir React en el bundle
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
