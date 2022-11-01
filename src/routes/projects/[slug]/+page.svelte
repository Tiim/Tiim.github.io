<script>
  import MarkdownSite from "$lib/MarkdownSite.svelte";

  export let data;
</script>

<MarkdownSite site={data.project} about={data.about} />
