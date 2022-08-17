<script>
  import MarkdownSite from "$lib/MarkdownSite.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  if (data.page) {
    data.page.date = null;
  }
</script>

<MarkdownSite site={data.page} />
