<script lang="ts">
  const items = [
    {
      title: "The Rise of AI in Everyday Life",
      content: "Artificial intelligence is transforming how we work, communicate, and solve problems in ways we never imagined.",
      likes: 42,
      comments: 8,
    },
    {
      title: "Exploring the Depths of the Ocean",
      content: "Recent discoveries in marine biology reveal fascinating ecosystems thriving in the planet's deepest trenches.",
      likes: 27,
      comments: 12,
    },
    {
      title: "The Future of Sustainable Energy",
      content: "Solar and wind technologies are becoming more efficient and affordable, paving the way for a cleaner tomorrow.",
      likes: 156,
      comments: 23,
    },
  ];
</script>

<h1>Articles</h1>
<p>Explore the latest news and insights on various topics.</p>
<div class="grid-cols:3 gap-x:1em mt:1em">
  {#each items as item}
    <article>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <footer class="grid-cols:2 gap:1em">
        <button>Like {item.likes}</button>
        <button class="secondary">Comment {item.comments}</button>
      </footer>
    </article>
  {/each}
</div>
