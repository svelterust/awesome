<script lang="ts">
  import { enhance } from "$app/forms";

  // Props
  const { form } = $props();

  // State
  let loading = $state(false);
</script>

<svelte:head>
  <title>Login - Awesome</title>
  <meta name="description" content="Login to this awesome website" />
</svelte:head>

<h1>Login</h1>

<form
  method="POST"
  use:enhance={() => {
    loading = true;
    return async ({ update }) => {
      await update();
      loading = false;
    };
  }}
>
  <label>
    Email
    <input name="email" placeholder="Email" type="email" />
  </label>

  <label>
    Password
    <input name="password" placeholder="Password" type="password" />
  </label>

  <button type="submit" aria-busy={loading} disabled={loading}>
    {#if loading}
      Logging in...
    {:else}
      Login
    {/if}
  </button>

  {#if form?.error}
    <p class="text:red">{form?.error}</p>
  {/if}
</form>
