import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

const prerenderRoutes = [
  "/",
  "/script",
  "/pricing",
  "/blog",
  "/blog/future-of-film-budgeting-ai-2026",
  "/blog/interview-indie-filmmaker-sarah-jenkins",
  "/blog/script-breakdown-ultimate-guide",
  "/blog/streaming-wars-production-impact-2026",
  "/blog/location-scouting-digital-age",
  "/blog/production-accounting-essentials",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      prerender({
        staticDir: path.resolve(__dirname, "dist"),
        routes: prerenderRoutes,
        renderer: new prerender.PuppeteerRenderer({
          renderAfterTime: 3000,
        }),
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
