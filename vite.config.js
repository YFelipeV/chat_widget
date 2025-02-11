import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import inject from "@rollup/plugin-inject";

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {
      NODE_ENV: '"production"',
    },
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
      plugins: [
        inject({
          process: "process",
        }),
      ],
    },
  },
});
