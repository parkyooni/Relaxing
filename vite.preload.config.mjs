import { defineConfig, mergeConfig } from "vite";
import {
  getBuildConfig,
  external,
  pluginHotRestart
} from "./vite.base.config.mjs";

export default defineConfig(env => {
  /** @type {import('vite').ConfigEnv<'build'>} */
  const forgeEnv = env;
  const { forgeConfigSelf } = forgeEnv;
  /** @type {import('vite').UserConfig} */
  const config = {
    build: {
      rollupOptions: {
        external,
        input: forgeConfigSelf.entry,
        output: {
          format: "cjs",
          inlineDynamicImports: true,
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]"
        }
      }
    },
    plugins: [pluginHotRestart("reload")]
  };

  return mergeConfig(getBuildConfig(forgeEnv), config);
});
