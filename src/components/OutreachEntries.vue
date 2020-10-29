<template>
  <div>
    <div class="row large-screen" :key="i" v-for="i in rowCount">
      <span
        v-for="outreach in itemCountInRow(i)"
        :key="outreach.id"
        class="column is-one-third is-multiline"
        style="margin: 0;"
      >
        <Outreach :outreach="outreach.node" />
      </span>
    </div>

    <div class="column small-screen">
      <span
        v-for="outreach in this.data"
        :key="outreach.id"
        class="outreach-item is-one-third is-multiline"
      >
        <Outreach :outreach="outreach.node" />
      </span>
    </div>
  </div>
</template>

<script>
import Outreach from "./OutreachEntry";

export default {
  name: "OutreachEntries",
  components: {
    Outreach
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

  .outreach-item {
    margin-bottom: 10%;
  }
}

</style>