import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env': JSON.stringify({}),
      'process': JSON.stringify({
        env: {
          NODE_ENV: process.env.NODE_ENV || 'production'
        }
      })
    })
  ],
  define: {
    'process.env': {},
    'global': {},
  },
  build: {
    lib: {
      entry: "src/ChatWidget.jsx",
      name: "ChatWidget",
      fileName: (format) => `chat-widget.${format}.js`,
      formats: ['es', 'umd']

    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        format: 'umd',
        name: 'ChatWidget',
        inlineDynamicImports: true
      },
    },
  },
});