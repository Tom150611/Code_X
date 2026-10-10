import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "ve-clb.html"),
        founder: resolve(__dirname, "founder.html"),
        members: resolve(__dirname, "thanh-vien.html"),
        learn: resolve(__dirname, "hoc-tap.html"),
        contests: resolve(__dirname, "cuoc-thi.html"),
        join: resolve(__dirname, "tham-gia.html"),
      },
    },
  },
});
