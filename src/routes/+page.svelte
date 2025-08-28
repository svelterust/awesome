<script lang="ts">
  import { enhance } from "$app/forms";

  // Props
  const { data, form } = $props();

  // State
  let loading = $state(false);
</script>

<svelte:head>
  <title>Awesome</title>
  <meta name="description" content="Awesome articles that you can read about." />
</svelte:head>

<h1>Articles</h1>
<p>Explore the latest news and insights on various topics.</p>

{#if data.user}
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
      Title
      <input name="title" placeholder="Title" />
    </label>

    <label>
      Content
      <textarea name="content" placeholder="Content" rows="4"></textarea>
    </label>

    <button type="submit" aria-busy={loading} disabled={loading}>
      {#if loading}
        Creating article...
      {:else}
        Create article
      {/if}
    </button>

    {#if form?.error}
      <p class="text:red">{form?.error}</p>
    {/if}
  </form>
{/if}

<div class="grid-cols:2@sm grid-cols:3@lg gap-x:1em mt:1em">
  {#each data.articles as article}
    <article>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <small>Created by <u>{article.username}</u> at <u>{article.createdAt.toLocaleTimeString()}</u></small>
    </article>
  {/each}
</div>
