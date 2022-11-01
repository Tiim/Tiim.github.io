<script>
  import MarkdownSite from "$lib/MarkdownSite.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<MarkdownSite site={data.page} about={data.about} />
