<script context="module">
  import { base } from "$app/paths";
  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const post = await fetch(`${base}/blog/${slug}.json`).then((r) => r.json());
    return {
      props: { post },
    };
  }
</script>

<script>
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

<div class="container">
  <article class="content">
    {#if post.cover_image}
      <img alt={post.title} src={base + post.cover_image} />
    {/if}
    <h1>{post.title}</h1>
    <p class="is-size-8	has-text-grey-light	">
      {new Date(post.date).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
    {@html post.html}
  </article>
</div>
