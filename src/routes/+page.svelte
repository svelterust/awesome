<script lang="ts">
  // Props
  const { data } = $props();
</script>

<h1>Articles</h1>
<p>Explore the latest news and insights on various topics.</p>
<div class="grid-cols:2@sm grid-cols:3@lg gap-x:1em mt:1em">
  {#each data.articles as article}
    <article>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
      <small>Created <u>{article.createdAt.toLocaleString()}</u></small>
    </article>
  {/each}
</div>
