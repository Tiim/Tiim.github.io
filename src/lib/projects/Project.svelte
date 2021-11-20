<script>
  export let project = {
    name: "",
    text : "",
    links : [],
    tags: []
  };
</script>
<article class="card">
  <header class="card-header">
    <p class="card-header-title is-centered">
      { project.name }
    </p>
  </header>
  <div class="card-content has-text-left">
    <p>
      { project.text }
    </p>
    <div class="tags">
      {#each project.tags as tag}
      <span class="tag">
        { tag }
      </span>
      {/each}
    </div>
  </div>
  <div class="card-footer">
    {#each project.links as link}
    <a
      href={link.url}
      class="card-footer-item"
      target="_blank"
    >
      { link.name }
    </a>
    {/each}
  </div>
</article>