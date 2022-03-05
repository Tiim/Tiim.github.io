<script>
  export let project = {
    title: "",
    html: "",
    links: [],
    tags: [],
  };
</script>

<article class="card">
  <header class="card-header">
    <p class="card-header-title is-centered">
      {project.title}
    </p>
  </header>
  <div class="card-content has-text-left">
    <p>
      {@html project.html}
    </p>
    <div class="tags">
      {#each project.tags as tag}
        <span class="tag">
          {tag}
        </span>
      {/each}
    </div>
  </div>
  <div class="card-footer">
    {#each project.links as link}
      <span class="card-footer-item">
        {@html link}
      </span>
    {/each}
  </div>
</article>

<style>
  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
