<template>
  <div>
    <div class="row large-screen" :key="i" v-for="i in rowCount">
      <span
        v-for="project in itemCountInRow(i)"
        :key="project.id"
        class="column is-one-third is-multiline"
        style="margin: 0;"
      >
        <Project :project="project.node" />
      </span>
    </div>

    <div class="column small-screen">
      <span
        v-for="project in this.data"
        :key="project.id"
        class="project-item is-one-third is-multiline"
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


@media screen and (min-width: 600px) {
  .large-screen {
    visibility: visible;
    display: flex;
  }

  .small-screen {
    visibility: hidden;
    display: none;
    clear: both;
    float: left;
  }
}

@media screen and (max-width: 600px) {
  .large-screen {
    visibility: hidden;
    display: none;
    clear: both;
    float: left;
  }

  .small-screen {
    visibility: visible;
    display: flex;
    flex-wrap: wrap;
  }

  .project-item {
    margin-bottom: 10%;
  }
}

</style>