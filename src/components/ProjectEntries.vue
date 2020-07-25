<template>
  <div>
    <div class="row" :key="i" v-for="i in rowCount">
      <span
        v-for="project in itemCountInRow(i)"
        :key="project.id"
        class="column is-one-third is-multiline"
        style="margin: 0;"
      >
        <Project :project="project.node" />
      </span>
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
  data: () => ({
    itemsPerRow: 3
  }),
  computed: {
    rowCount: function() {    
      return Math.ceil(this.data.length / this.itemsPerRow);
    },
  },
  methods: {
    itemCountInRow: function(index) {
      console.log(index);
     return this.data.slice((index - 1) * this.itemsPerRow, index * this.itemsPerRow);
    }
  }
};
</script>

<style scoped>

.row {
  display: flex;
}

</style>