<script>
  import PostCardList from "$lib/PostCardList.svelte";
  export let data;
</script>

<svelte:head>
  <title>🏷️{data.details.tag} - Tim Bachmann</title>
</svelte:head>

<div class="container has-text-centered">
  <div class="section">
    <h1>🏷️ Tag: {data.details.tag}</h1>
  </div>
  {#if data.details.html}
    <div class="tag-content section">
      {@html data.details.html}
    </div>
  {/if}
  <div class="section">
    <PostCardList posts={data.posts} />
  </div>
</div>

<style>
  .tag-content {
    text-align: left;
  }
</style>
