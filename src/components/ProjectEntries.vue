<template>
  <div>
    <div class="columns">
      <div
        v-for="project in data"
        :key="project.id"
        class="column is-one-third is-multiline"
      >
        <Project :project="project.node" />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./ProjectEntry";

export default {
  name: "ProjectEntries",
  components: {
    Project
  },
  props: {
    data: Array
  }
};
</script>
