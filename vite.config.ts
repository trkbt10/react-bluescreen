/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

import path from "node:path";

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
  },
  build: {
    outDir: "lib",
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      formats: ["es", "cjs"],
      name: "react-bluescreen",
      fileName: (format) => {
        switch (format) {
          case "es":
            return "index.mjs";
          case "cjs":
            return "index.cjs";
        }
        return "index.js";
      },
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
