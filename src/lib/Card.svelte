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
          <span class="tag">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
  </div>
  {#if linksHtml && linksHtml.length > 0}
    <div class="links">
      {#each linksHtml as link}
        <span>{@html link}</span>
      {/each}
    </div>
  {:else if links && links.length > 0}
    <div class="links">
      {#each links as link}
        <span><a href={link.href}>{link.text}</a></span>
      {/each}
    </div>
  {/if}
</article>

<style>
  h3 {
    font-size: 1rem;
    margin-bottom: 0px;
  }
  .date {
    font-size: 0.8rem;
    color: #888;
    margin-top: 0.5rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-content {
    padding: 1rem;
    text-align: left;
  }
  .links {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid hsl(0deg, 0%, 93%);
    min-height: 48px;
  }
  .links span {
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
  }
  .links span:not(:last-child) {
    border-right: 1px solid hsl(0deg, 0%, 93%);
  }
  img {
    max-width: 100%;
  }
</style>
