<script>
  export let post = "";
</script>

<article class="card">
  <header class="card-header">
    <a class="card-header-title is-centered" href={`blog/${post.slug}`}>
      {post.title}
    </a>
  </header>
  <div class="card-content has-text-left">
    <img alt={post.title} src={post.cover_image} />
    <p class="tags">
      {#each post.tags.split(",") as tag}
        <span class="tag">
          {tag}
        </span>
      {/each}
    </p>
    <p>{post.description}</p>
    <p class="is-size-7	has-text-grey-light	">
      {new Date(post.date).toLocaleDateString()}
    </p>
  </div>
  <div class="card-footer">
    <a class="card-footer-item" href={`blog/${post.slug}`}> Read More... </a>
  </div>
</article>
