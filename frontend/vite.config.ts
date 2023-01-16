import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 4200 },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#FFA57A",
          "link-color": "#1DA57A",
          "border-radius-base": "10px",
          "table-row-hover-bg": "#1DA57A11",
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
