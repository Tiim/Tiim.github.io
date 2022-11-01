<script>
  export let data;
</script>

<div class="container">
  <div class="section has-text-centered">
    <h1>Tags 🏷️</h1>
  </div>
  <div class="section">
    <ul>
      {#each data.tags as tag}
        <li class="tag-item">
          <a href={tag.slug || `/tags/${tag.tag}`}>{tag.tag}</a>
          {#if tag.abstract}
            {@html tag.abstract}
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .tag-item :global(p) {
    margin: 0;
    display: inline-block;
  }
</style>
