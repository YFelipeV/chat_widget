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
        "process.env.NODE_ENV": JSON.stringify("production"),
        "process.env": JSON.stringify({}), // Reemplaza cualquier referencia a `process.env`
      },
    }),
    inject({
      process: "process", // Inyecta `process` en caso de que alguna librería lo requiera
    }),
  ],
  define: {
    "process.env": {}, // Define `process.env` como un objeto vacío
  },
  build: {
    lib: {
      entry: "src/ChatWidget.jsx",
      name: "ChatWidget",
      fileName: (format) => `chat-widget.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
