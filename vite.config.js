import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import inject from "@rollup/plugin-inject";

export default defineConfig({
  plugins: [
    react(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    inject({
      process: "process", // Inyecta un objeto `process` falso para evitar errores
    }),
  ],
  define: {
    "process.env": {}, // Evita que el navegador se queje
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
