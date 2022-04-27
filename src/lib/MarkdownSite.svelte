<script>
  import { base } from "$app/paths";
  export let site;
</script>

<svelte:head>
  <title>{site.title}</title>
  <meta property="og:title" content={site.title} />
  <meta property="og:type" content="article" />
  <meta property="og:description" content={site.description} />
  {#if site.date}
    <meta property="article:published_time" content={site.date} />
  {/if}
  {#if site.date || site.modified}
    <meta
      property="article:modified_time"
      content={site.modified || site.date}
    />
  {/if}
  <meta property="article:author" content="Tim Bachmann" />
  {#each site.tags as tag}
    <meta property="article:tag" content={tag} />
  {/each}
  <meta property="og:image" content={base + site.cover_image} />
</svelte:head>

<article class="container">
  {#if site.cover_image}
    <img alt={site.title} src={base + site.cover_image} />
  {/if}
  <h1>{site.title}</h1>
  {#if !site.published}
    <p class="notification">This site is not published!</p>
  {/if}
  <p class="tags">
    {#each site.tags as tag}<span class="tag">{tag}</span>{/each}
  </p>
  {#if site.date}
    <p class="date">
      {new Date(site.date).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
  {/if}
  {@html site.html}
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
    color: var(--font-color-light);
    margin-top: 0.5rem;
  }
</style>
