<script lang="ts">
  import { enhance } from "$app/forms";

  // Props
  const { form } = $props();

  // State
  let loading = $state(false);
</script>

<svelte:head>
  <title>Register - Awesome</title>
  <meta name="description" content="Create an account for this awesome website" />
</svelte:head>

<h1>Register</h1>

<form
  method="POST"
  class="max-w:640px"
  use:enhance={() => {
    loading = true;
    return async ({ update }) => {
      await update();
      loading = false;
    };
  }}
>
  <label>
    Name
    <input name="name" placeholder="Name" />
  </label>

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
      Registering...
    {:else}
      Register
    {/if}
  </button>

  {#if form?.error}
    <p class="text:red">{form?.error}</p>
  {/if}
</form>
