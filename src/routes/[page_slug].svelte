<script>
  import MarkdownSite from "$lib/MarkdownSite.svelte";
  export let page;
  page.date = null;
</script>

<MarkdownSite site={page} />
