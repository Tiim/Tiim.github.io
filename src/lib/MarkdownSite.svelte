<script>
  import { base } from "$app/paths";
  import CommentSection from "./commets/CommentSection.svelte";
  export let site;

  let prefix =
    {
      projects: "⚙️Project: ",
    }[site.type] || "";
</script>

<svelte:head>
  <title>{site.title} - Tim Bachmann</title>
  <meta property="og:title" content={site.title} />
  <meta property="og:type" content="article" />
  <meta property="og:description" content={site.description} />
  <meta property="uuid" content={site.uuid} />
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

<div>
  <article class="container">
    {#if site.cover_image}
      <img alt={site.title} src={base + site.cover_image} />
    {/if}
    <h1>{prefix}{site.title}</h1>
    {#if !site.published}
      <p class="notification">This site is not published!</p>
    {/if}
    <p class="tags">
      {#each site.tags as tag}<a class="tag" href={`/tags/${tag}`}>{tag}</a
        >{/each}
    </p>
    {#if site.date || site.modified}
      <p class="date">
        {new Date(site.modified || site.date).toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    {/if}
    {#if site.links}
      <blockquote class="links">
        <h2>Links</h2>
        <ul>
          {#each site.links as link}
            <li>{@html link}</li>
          {/each}
        </ul>
      </blockquote>
    {/if}
    {@html site.html}
  </article>
  <div class="container">
    <CommentSection comments={site.comments} page={site} />
  </div>
</div>

<style>
  img {
    max-width: 100%;
  }
  .notification {
    background-color: var(--color-ui-12);
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
  }
  .date {
    font-size: 0.8rem;
    color: var(--font-color-light);
    margin-top: 0.5rem;
  }
  .links {
    margin-bottom: 2rem;
  }
</style>
