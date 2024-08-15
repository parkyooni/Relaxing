import { defineConfig } from "vite";
import { pluginExposeRenderer } from "./vite.base.config.mjs";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(env => {
  /** @type {import('vite').ConfigEnv<'renderer'>} */
  const forgeEnv = env;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? "";

  /** @type {import('vite').UserConfig} */
  return {
    root,
    mode,
    base: "./",
    build: {
      outDir: `.vite/renderer/${name}`
    },
    plugins: [pluginExposeRenderer(name), react()],
    resolve: {
      preserveSymlinks: true,
      alias: {
        "@": path.resolve(__dirname, "src/renderer"),
        "@public": path.resolve(__dirname, "public"),
        "@components": path.resolve(__dirname, "src/renderer/components")
      }
    },
    clearScreen: false
  };
});
