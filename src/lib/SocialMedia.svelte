<script>
  import socialMedia from "$content/socialmedia.json";
  import { FA } from "$lib/fa.js";
</script>

<div>
  <h2>Social Media</h2>
  <div class="columns is-centered is-multiline">
    {#each socialMedia as site}
      <div class="column is-one-fifth">
        <a target="_blank" href={site.link}>
          <FA icon={site.icon} class="icon is-small" />
          {site.site}
        </a>
      </div>
    {/each}
  </div>
</div>
