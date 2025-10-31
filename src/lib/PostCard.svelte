<script>
  import Card from "./Card.svelte";

  export let post;

  let linksHtml = [];
  $: linksHtml = Array.isArray(post.links) ? post.links : undefined;
  let links = [{ href: `/${post.slug}`, text: "Read More..." }];
  let image;
  $: image = post.cover_image
    ? { src: post.cover_image, alt: post.title }
    : undefined;
</script>

<Card
  title={post.title || ""}
  {image}
  tags={post.tags}
  {links}
  {linksHtml}
  date={post.date}
  url={`/${post.slug}`}
>
  <div>
    {@html post.description || post.abstract}
  </div>
</Card>
