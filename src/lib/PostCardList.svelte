<script>
  import PostCard from "$lib/PostCard.svelte";

  export let posts = [];
</script>

<div class="proj-wrap">
  {#each posts as post}
    <PostCard {post} />
  {/each}
</div>

<!--TODO: create card-list component or something-->
<style>
  .proj-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
    justify-content: center;
  }
</style>
