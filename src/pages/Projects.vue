<template>
  <Layout>
    <div class="container has-text-centered">
      <div class="section content">
        <h1>Projects ⚙️</h1>
      </div>
        <ProjectEntries :data="projects" />
    </div>
  </Layout>
</template>

<script>
import ProjectEntries from "../components/ProjectEntries";
export default {
  name: "ProjectsPage",
  components: {
    ProjectEntries
  },
  metaInfo: {
    title: "Projects"
  },
  computed: {
    projects() {
      return this.$page.projects?.edges ?? [];
    },
  }
};
</script>
<page-query>
  {
    projects: allProject(sortBy: "index", order: ASC) {
      edges {
        node {
          id
          name
          route
          family
          text
          tags
        }
      }
    }
  }
</page-query>
