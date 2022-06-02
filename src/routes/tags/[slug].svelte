<script>
  import PostCardList from "$lib/PostCardList.svelte";
  export let details;
  export let posts;
</script>

<svelte:head>
  <title>🏷️{details.tag} - Tim Bachmann</title>
</svelte:head>

<div class="container has-text-centered">
  <div class="section">
    <h1>🏷️ Tag: {details.tag}</h1>
  </div>
  {#if details.html}
    <div class="tag-content section">
      {@html details.html}
    </div>
  {/if}
  <div class="section">
    <PostCardList {posts} />
  </div>
</div>

<style>
  .tag-content {
    text-align: left;
  }
</style>
