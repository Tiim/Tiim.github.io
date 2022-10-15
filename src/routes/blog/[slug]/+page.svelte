<script>
  import MarkdownSite from "$lib/MarkdownSite.svelte";
  export let data;
</script>

<MarkdownSite site={data.post} about={data.about} />
