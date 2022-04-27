<script>
  import { base } from "$app/paths";
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta property="og:title" content={post.title} />
  <meta property="og:type" content="article" />
  <meta property="og:description" content={post.description} />
  <meta property="article:published_time" content={post.date} />
  <meta property="article:modified_time" content={post.modified || post.date} />
  <meta property="article:author" content="Tim Bachmann" />
  {#each post.tags as tag}
    <meta property="article:tag" content={tag} />
  {/each}
  <meta property="og:image" content={base + post.cover_image} />
</svelte:head>

<article class="container">
  {#if post.cover_image}
    <img alt={post.title} src={base + post.cover_image} />
  {/if}
  <h1>{post.title}</h1>
  {#if !post.published}
    <p class="notification">This post is not published!</p>
  {/if}
  <p class="tags">
    {#each post.tags as tag}<span class="tag">{tag}</span>{/each}
  </p>
  <p class="date">
    {new Date(post.date).toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </p>
  {@html post.html}
</article>

<style>
  img {
    max-width: 100%;
  }
  .notification {
    background: wheat;
    padding: 1rem;
    border-radius: 10px;
  }
  .date {
    font-size: 0.8rem;
    color: #888;
    margin-top: 0.5rem;
  }
</style>
