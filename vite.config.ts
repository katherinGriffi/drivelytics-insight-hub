import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // --- LÓGICA INTELIGENTE ---
  // Si el comando es 'serve' (npm run dev), usa la base que te funciona localmente.
  // Si no (es 'build'), usa la base para el dominio personalizado.
  const base = command === 'serve' ? '/drivelytics-insight-hub/' : '/';

  return {
    base: base, // <-- Aquí se aplica la base correcta automáticamente

    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      // El plugin de tagger solo se aplica en modo desarrollo
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});