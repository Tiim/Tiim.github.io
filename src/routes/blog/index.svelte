<script context="module">
  import { base } from "$app/paths";
  export async function load({ fetch }) {
    const posts = await fetch(`${base}/blog/posts.json`).then((r) => r.json());
    return {
      props: { posts },
    };
  }
</script>

<script>
  import BlogPost from "$lib/blog/BlogPost.svelte";
  export let posts;
</script>

<svelte:head>
  <title>Blog - Tim Bachmann</title>
</svelte:head>

<div class="container has-text-centered">
  <div class="section content">
    <h1>Blog 📖</h1>
  </div>
  <div class="section content">
    <div class="blog-posts">
      {#each posts as post}
        <div class="post">
          <BlogPost {post} />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .blog-posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
    justify-content: center;
  }
</style>
