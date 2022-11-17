<script>
  import { base } from "$app/paths";
  import AboutCard from "./AboutCard.svelte";
  import CommentSection from "./commets/CommentSection.svelte";
  import PubDate from "./pub-date.svelte";
  export let site;
  export let about = null;

  let prefix;
  $: prefix =
    {
      projects: "⚙️Project: ",
    }[site?.type] || "";
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
  <article class="container h-entry">
    {#if site.cover_image}
      <img alt={site.title} src={base + site.cover_image} />
    {/if}

    <h1>{prefix}<span class="p-name">{site.title}</span></h1>
    {#if !site.published}
      <p class="notification">This site is not published!</p>
    {/if}

    <p class="tags">
      {#each site.tags as tag}
        <a class="tag p-category" href={`/tags/${tag}`}>
          {tag}
        </a>
      {/each}
    </p>

    <div class="by">
      <address class="author">
        by <a href="/" rel="author">Tim Bachmann</a>
      </address>
      <PubDate {site} />
    </div>

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
    <div class="e-content content">
      {@html site.html}
    </div>

    <AboutCard {about} />

    <div class="post-details">
      {#if site.description}
        <p class="hidden p-summary">{site.description}</p>
      {/if}
      <a class="hidden p-url p-uid" href={`/${site.slug}`}>/{site.slug}</a>
    </div>
  </article>
  {#if site.comments}
    <div class="container">
      <CommentSection comments={site.comments} page={site} />
    </div>
  {/if}
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
  .by {
    font-size: 0.8rem;
    color: var(--font-color-light);
    margin-top: 0.5rem;
  }
  .by > * {
    display: inline-block;
    margin-right: 1rem;
  }
  .links {
    margin-bottom: 2rem;
  }
  .content {
    color: var(--font-color-muted);
    margin-top: 4rem;
  }
  .hidden {
    display: none;
  }
</style>
