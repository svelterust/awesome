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
    <li>
      <div>
        {#if $session.data}
          <div>
            <p>
              {$session?.data?.user.name}
            </p>
            <button
              onclick={async () => {
                await authClient.signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        {:else}
          <button
            onclick={async () => {
              await authClient.signIn.social({
                provider: "github",
              });
            }}
          >
            Login
          </button>
        {/if}
      </div>
    </li>
  </ul>
</nav>

<main class="container mt:2em">
  {@render children()}
</main>

<style>
  :root {
    --pico-font-family: Geist;
  }
</style>
