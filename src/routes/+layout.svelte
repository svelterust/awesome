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
    <li><strong>Awesome</strong></li>
  </ul>
  <ul>
    {#if $session.data}
      <li>{$session.data.user.name}</li>
      <li><button onclick={() => authClient.signOut()}>Sign Out</button></li>
    {:else}
      <li><button onclick={() => authClient.signIn.social({ provider: "github" })}>Login</button></li>
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
</style>
