<script>
  import PostCardList from "$lib/PostCardList.svelte";

  export let data;
</script>

<div class="container has-text-centered">
  <div class="section">
    <h1>Notes 📒</h1>
  </div>
  <div class="section">
    <PostCardList posts={data.notes} />
  </div>
</div>
