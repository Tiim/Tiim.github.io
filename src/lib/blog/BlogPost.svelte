<script>
  import Card from "../Card.svelte";
  export let post;
</script>

<Card
  title={post.title}
  image={{ src: post.cover_image, alt: post.title }}
  tags={post.tags}
  links={[{ href: "/" + post.slug, text: "Read More..." }]}
  date={post.date}
>
  <p>
    {@html post.description}
  </p>
</Card>
