<script>
  import MarkdownSite from "$lib/MarkdownSite.svelte";
  export let page;
  if (page) {
    page.date = null;
  }
</script>

<MarkdownSite site={page} />
