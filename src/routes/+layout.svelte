<script lang="ts">
  import "@master/css";
  import "@fontsource/geist-sans";
  import { authClient } from "$lib/session";

  // Props
  const { children } = $props();

  // State
  const session = authClient.useSession();
</script>

<nav class="container">
  <ul>
    <li><a href="/"><h3>Awesome</h3></a></li>
  </ul>
  <ul>
    {#if $session.data}
      <li>{$session.data.user.name}</li>
      <li><button onclick={() => authClient.signOut()}>Sign Out</button></li>
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
