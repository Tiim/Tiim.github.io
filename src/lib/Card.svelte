<script>
  export let title = "";
  export let image = null;
  export let linksHtml = [];
  export let links = [];
  export let tags = [];
  export let date = null;
</script>

<article class="card">
  <h3 class="card-header">
    {title}
  </h3>
  {#if date}
    <span class="date">{new Date(date).toLocaleDateString()}</span>
  {/if}
  <div class="card-content">
    {#if image}
      <img src={image?.src} alt={image?.alt || title + " title image"} />
    {/if}
    <p>
      <slot />
    </p>
    {#if tags && tags.length > 0}
      <div class="tags">
        {#each tags as tag}
          <a href={`/tags/${tag}`} class="tag">
            {tag}
          </a>
        {/each}
      </div>
    {/if}
  </div>
  <div class="spacer"></div>
  <div class="links-wrap">
    {#if linksHtml && linksHtml.length > 0}
      <div class="links">
        {#each linksHtml as link}
          <span>{@html link}</span>
        {/each}
      </div>
    {/if}
    {#if links && links.length > 0}
      <div class="links">
        {#each links as link}
          <span><a href={link.href}>{link.text}</a></span>
        {/each}
      </div>
    {/if}
  </div>
</article>

<style>
  h3 {
    font-size: 1rem;
    margin-bottom: 0px;
  }
  .date {
    font-size: 0.8rem;
    color: var(--font-color-light);
    margin-top: 0.5rem;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .spacer {
    flex-grow: 1;
    min-height: 0px;
  }
  .card-content {
    padding: 1rem;
    text-align: left;
    overflow-wrap: break-word;
  }
  .links-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .links {
    display: flex;
    justify-content: space-between;
    min-height: 48px;
    gap: 1rem;
  }
  .links span {
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color-light-2);
    border-radius: 0.5rem;
  }
  img {
    max-width: 100%;
  }
</style>
