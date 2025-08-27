<script lang="ts">
  import "@master/css";
  import "@fontsource/geist-sans";
  import { authClient } from "$lib/session";
  import { goto, invalidateAll } from "$app/navigation";

  // Props
  const { data, children } = $props();
</script>

<nav class="container">
  <ul>
    <li><a href="/"><h3>Awesome</h3></a></li>
  </ul>
  <ul>
    {#if data.user}
      <li>{data.user.name}</li>
      <li>
        <button
          onclick={async () => {
            await authClient.signOut();
            await goto("/", { invalidateAll: true });
          }}>Sign Out</button
        >
      </li>
    {:else}
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>
    {/if}
  </ul>
</nav>

<main class="container">
  {@render children()}
</main>

<style>
  :root {
    --pico-font-family: Geist;
  }

  .container {
    max-width: 1280px;
  }
</style>
