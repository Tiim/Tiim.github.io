<script>
  import MarkdownSite from "$lib/MarkdownSite.svelte";
  export let data;
  const pr = `https://github.com/Tiim/Tiim.github.io/tree/source/content/${data.post.slug}.md`;
</script>

<MarkdownSite site={data.post} about={data.about}>
  <div class="outro" slot="outro">
    <em>
      You found an error in this post? Open a
      <a href={pr}>pull request</a>.
    </em>
  </div>
</MarkdownSite>

<style>
  .outro {
    margin-top: 4em;
    font-size: 0.8em;
    color: var(--font-color-light);
  }
</style>
