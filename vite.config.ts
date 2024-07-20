import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambia esto al puerto que tu entorno de despliegue espera
    host: true, // Permite el acceso desde fuera del localhost
  },
  build: {
    rollupOptions: {
      external: ["framer-motion"],
    },
  },
});
