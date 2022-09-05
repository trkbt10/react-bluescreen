import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  base: "",
  plugins: [],
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
