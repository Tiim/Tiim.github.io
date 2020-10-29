<template>
  <Layout>
    <div class="container has-text-centered">
      <div class="section content">
        <h1>Academic Work 📖</h1>
      </div>
      <div class="section content">
        <div
          v-for="publication in $page.publications.edges"
          :key="publication.node.id"
          class="column"
        >
          <PublicationEntry :publication="publication.node" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import PublicationEntry from "~/components/PublicationEntry";
export default {
  name: "PublicationsPage",
  components: { PublicationEntry },
  metaInfo: {
    title: "Publication"
  }
};
</script>
<page-query>
  query {
    publications: allPublication(sortBy: "date", order: DESC) {
      edges {
        node {
          id
          name
          source
          date
          text
          tags
        }
      }
    }
  }
</page-query>
