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
  <title>Home</title>
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
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .post {
    flex-basis: 0;
    flex-grow: 1;
    min-width: 350px;
  }
</style>
