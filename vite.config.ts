import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  // El sitio son tres HTML estáticos: la portada y una página por sector.
  // Cada página nueva se añade aquí y en public/sitemap.xml.
  build: {
    rollupOptions: {
      input: {
        portada: path.resolve(__dirname, "index.html"),
        abogados: path.resolve(__dirname, "abogados/index.html"),
        clinicas: path.resolve(__dirname, "clinicas-dentales/index.html"),
      },
    },
  },
}));
