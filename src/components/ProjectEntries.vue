<template>
  <div>
    <div v-for="row in cols" :key="row.id" class="columns">
      <div class="column">
        <Project :project="project" />
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
  },
  data() {
    return {};
  }
};
</script>
