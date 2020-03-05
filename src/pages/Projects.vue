<template>
  <Layout>
    <div class="container has-text-centered">
      <div class="section content">
        <h1>Projects &amp; Demos⚙️</h1>
        <p>
          This is a list of some of my current or past projects. Go check them
          out!
        </p>
      </div>
      <div class="section content" v-if="projects.length">
        <h2>Projects</h2>
        <ProjectEntries :data="projects" />
      </div>
      <div class="section content" v-if="demos.length">
        <h2>Demos</h2>
        <ProjectEntries :data="demos" />
      </div>
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
    title: "Projects & Demos"
  },
  computed: {
    projects() {
      return this.$page.projects?.edges ?? [];
    },
    demos() {
      return this.$page.demos?.edges ?? [];
    }
  }
};
</script>
<page-query>
  {
    projects: allProject {
      edges {
        node {
          id
          name
          links {
            url
            name
          }
          text
          tags
        }
      }
    }
  }
</page-query>
