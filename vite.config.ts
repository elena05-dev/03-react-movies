import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/03-react-movies/",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
