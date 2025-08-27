<script lang="ts">
  import "@master/css";
  import "@fontsource/geist-sans";

  // Props
  const { children } = $props();
</script>

<main class="container mt:2em">
  {@render children()}
</main>

<style>
  :root {
    --pico-font-family: Geist;
  }
</style>
