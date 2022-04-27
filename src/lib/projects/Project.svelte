<script>
  import Card from "../Card.svelte";
  export let project = {
    title: "",
    html: "",
    links: [],
    tags: [],
  };
</script>

<Card title={project.title} linksHtml={project.links} tags={project.tags}>
  <div>{@html project.html}</div>
</Card>
