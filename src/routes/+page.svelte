<script lang="ts">
  // Props
  const { data } = $props();
</script>

<h1>Articles</h1>
<p>Explore the latest news and insights on various topics.</p>

{#if data.user}
  <form method="POST" class="max-w:640px">
    <label>
      Title
      <input name="title" placeholder="Title" />
    </label>

    <label>
      Content
      <textarea name="content" placeholder="Content" rows="4"></textarea>
    </label>

    <button type="submit">Create article</button>
  </form>
{/if}

<div class="grid-cols:2@sm grid-cols:3@lg gap-x:1em mt:1em">
  {#each data.articles as article}
    <article>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
      <small>Created by <u>{article.username}</u> at <u>{article.createdAt.toLocaleTimeString()}</u></small>
    </article>
  {/each}
</div>
