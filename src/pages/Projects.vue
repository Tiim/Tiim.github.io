<template>
  <div>
    <div class="section content">
      <h1>Projects &amp; Demos⚙️</h1>
      <p>
        This is a list of some of my current or past projects. Go check them
        out!
      </p>
    </div>
    <div class="section content" v-if="projectsData.length">
      <h2>Projects</h2>
      <Projects :data="projectsData" />
    </div>
    <div class="section content" v-if="demosData.length">
      <h2>Demos</h2>
      <Projects :data="demosData" />
    </div>
  </div>
</template>

<script>
import Projects from "../components/ProjectEntries";
export default {
  name: "ProjectsPage",
  components: {
    Projects
  },
  data() {
    return {
      projectsData,
      demosData
    };
  }
};
</script>
