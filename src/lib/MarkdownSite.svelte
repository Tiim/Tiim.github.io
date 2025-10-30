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
      rsvp: "💌RSVP: ",
      reply: "🗨️Reply: ",
      repost: "🔁Share: ",
      like: "👍Like: ",
      projects: "⚙️Project: ",
      note: "📔 ",
    }[site?.type] || "";

  // Helper to add base path only to relative URLs
  function resolveUrl(url) {
    if (!url) return url;
    // If URL has a protocol (http:, https:, etc.), return as-is
    if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url)) {
      return url;
    }
    // Otherwise, prepend base path
    return base + url;
  }
</script>

<svelte:head>
  <title>{site.title} - Tim Bachmann</title>
  <meta property="og:title" content={site.title || "Tim Bachmann"} />
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
  {#if site.cover_image}
    <meta property="og:image" content={resolveUrl(site.cover_image)} />
  {/if}
</svelte:head>

<div>
  <article class="container h-entry">
    {#if site.cover_image}
      <figure>
        <img alt={site.title} src={resolveUrl(site.cover_image)} />
        {#if site.cover_image_txt}
          <figcaption>{site.cover_image_txt}</figcaption>
        {/if}
      </figure>
    {/if}

    <h1>{prefix}<span class="p-name">{site.title || ""}</span></h1>
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

    {#if site.photos}
      <div class="images">
        {#each site.photos as photo}
          <img alt={photo.alt} src={photo.url} />
        {/each}
      </div>
    {/if}

    <slot name="outro" />

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
  figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
  figcaption {
    font-size: 0.8rem;
    color: var(--font-color-muted);
  }
  img {
    max-width: 100%;
    margin-bottom: 0px;
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
