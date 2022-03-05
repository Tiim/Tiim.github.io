<script>
  export let post = "";
</script>

<article class="card">
  <header class="card-header">
    <a class="card-header-title is-centered" href={`/blog/${post.slug}`}>
      {post.title}
    </a>
  </header>
  <div class="card-content has-text-left">
    <img class="post-img" alt={post.title} src={post.cover_image} />
    <p class="tags">
      {#each post.tags as tag}
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
    <a class="card-footer-item" href={`/blog/${post.slug}`}> Read More... </a>
  </div>
</article>

<style>
  .post-img {
    margin: 0.5rem;
  }
  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .card-content {
    flex-grow: 1;
  }
</style>
