<script>
  import socialMedia from "$content/socialmedia.json";
  import { FA } from "$lib/fa.js";
</script>

<div>
  <h2>Social Media</h2>
  <div class="columns multiline">
    {#each socialMedia as site}
      <div class="column">
        <a target="_blank" rel="me" href={site.link}>
          <FA icon={site.icon} class="icon is-small" />
          {site.site}
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .column {
    flex: none;
    min-width: 18%;
    margin: 0.5rem;
  }
</style>
