<script lang="ts">
  // Props
  const { form } = $props();
</script>

<h1>Register</h1>

<form method="POST" class="max-w:640px">
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

  <button type="submit">Register</button>

  {#if form?.error}
    <p class="text:red">{form?.error}</p>
  {/if}
</form>
