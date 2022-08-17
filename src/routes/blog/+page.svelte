<script>
  import { FA } from "$lib/fa.js";
  import PostCardList from "$lib/PostCardList.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Blog - Tim Bachmann</title>
</svelte:head>

<div class="container has-text-centered">
  <div class="section">
    <h1>Blog 📖</h1>
    <p>
      Subscribe to my blog via
      <a href="blog/rss.xml" target="_blank">
        <FA icon={["fa", "rss"]} class="icon is-small" /> RSS
      </a>
    </p>
  </div>
  <div class="section">
    <PostCardList posts={data.posts} />
  </div>
</div>
