<template>
  <Layout>
    <div class="container has-text-centered">
      <div class="section content">
        <h1>Blog 📖</h1>
        <p>
          View all my blog posts on <a href="https://dev.to/tiim">Dev.to</a>
        </p>
      </div>
      <div class="section content">
        <div class="columns">
          <div
            v-for="article in $page.blogPosts.edges"
            :key="article.node.id"
            class="column is-one-third"
          >
            <BlogEntry :article="article.node" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BlogEntry from "~/components/BlogEntry";
export default {
  name: "ProjectsPage",
  components: { BlogEntry },
  metaInfo: {
    title: "Blog"
  }
};
</script>
<page-query>
{
  blogPosts: allBlogPost(filter: { published: { eq: true } }) {
    edges {
      node {
        id
        title
        published
        description
        tags
        cover_image
        date
        path
      }
    }
  }
}
</page-query>
