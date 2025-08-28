import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import masterCSS from "@master/css.vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    masterCSS({ mode: "pre-render" }),
    svelteInspector({
      toggleKeyCombo: "shift-meta",
    }),
  ],
});
