<template>
  <div>
    <div v-for="row in cols" :key="row.id" class="columns">
      <div v-for="project in row" :key="project.id" class="column is-one-third">
        <Project :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import Project from './Project';
import chunk from '../utils/chunk';

export default {
  name: 'Projects',
  components: {
    Project,
  },
  props: {
    data: Array,
  },
  data() {
    return {};
  },
  computed: {
    cols() {
      return chunk(this.data, 3);
    },
  },
};
</script>
