<script>
  import socialMedia from "$content/socialmedia.json";
  import { FA } from "$lib/fa.js";
  $: contact = socialMedia.filter((site) => site.type.includes("follow"));
</script>

<div class="container">
  <h1>Follow Tiim</h1>
  <div class="wrap">
    <div class="grid">
      {#each contact as site}
        <a target="_blank" class="item" rel="me" href={site.link}>
          <span class="ico"><FA icon={site.icon} /></span>
          <div class="text">
            {site.site}
            {#if site.handle}
              <span class="handle">{site.handle}</span>
            {:else}
              <span class="handle">{"."}</span>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  h1 {
    text-align: center;
  }
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
  .ico {
    font-size: 2rem;
  }
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    border-radius: 1rem;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .handle {
    font-size: 0.8rem;
    color: var(--font-color-muted);
  }
  /* 2x2 grid, shrinking on mobile with css grid */
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    background-color: var(--color-ui-3);
    padding: 1rem;
    border-radius: 1rem;
  }
</style>
