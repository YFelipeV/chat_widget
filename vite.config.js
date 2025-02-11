import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  build: {
    lib: {
      entry: "src/components/chatbot/ChatBot.jsx",
      name: "ChatBot",
      fileName: (format) => `chatbot.${format}.js`,
      formats: ['umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        format: 'umd',
        name: 'ChatBot',
        inlineDynamicImports: true
      }
    },
    minify: 'esbuild', // Usamos esbuild en lugar de terser
    sourcemap: true,
    target: 'es2015'
  },
  esbuild: {
    // Configuración de esbuild
    minify: true,
    target: ['es2015']
  }
});