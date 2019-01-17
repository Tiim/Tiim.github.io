<template>
  <div>
    <div v-for="row in cols" :key="row.id" class="columns">
      <div v-for="project in row" :key="project.id" class="column is-one-third">
        <Project :project="project"/>
      </div>
    </div>
  </div>
</template>

<script>
import Project from './Project';
import chunk from '../utils/chunk';

import projectsData from '../data/projects.json';

export default {
  name: 'Projects',
  components: {
    Project,
  },
  data() {
    return {
      projects: projectsData,
    };
  },
  computed: {
    cols() {
      return chunk(this.projects, 3);
    },
  },
};
</script>
