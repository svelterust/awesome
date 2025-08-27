<script lang="ts">
  import "@master/css";

  // Props
  const { children } = $props();
</script>

<main class="container mt:2em">
  {@render children()}
</main>
