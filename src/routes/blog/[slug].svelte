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

<div class="container">
  <article class="content">
    {#if post.cover_image}
      <img alt={post.title} src={post.cover_image} />
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
