<template>
<div>

  <article class="card large-screen">
    <div class="card-content has-text-left">
      <table style="width:100%">
        <tr>
          <th>{{ publication.date }}</th>
          <th>{{ publication.name }}</th>
          <th>
            <a :href="publication.source" target="_blank">Read ...</a>
          </th>
        </tr>
      </table>
      <div class="tags">
        <span v-for="tag in publication.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>
    </div>
  </article>

  <article class="card small-screen">
    <div class="card-content has-text-left">
      <table style="width:100%">
        <tr>
          <!-- <th>{{ publication.date }}</th> -->
          <th>{{ publication.name }}</th>
          <!-- <th>
            <a :href="publication.source" target="_blank">Read ...</a>
          </th> -->
        </tr>
      </table>
      <div class="tags">
        <span v-for="tag in publication.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>

    <div class="card-footer">
      <a
        :href="publication.source"
        class="card-footer-item"
        target="_blank"
      >
        More ...
      </a>
    </div>
    </div>
  </article>

</div>
</template>

<script>
export default {
  name: "Publications",
  props: {
    publication: Object
  }
};
</script>

<style scoped>


@media screen and (min-width: 1000px) {
  .large-screen {
    visibility: visible;
    /* display: flex; */
  }

  .small-screen {
    visibility: hidden;
    display: none;
    clear: both;
    float: left;
  }
}

@media screen and (max-width: 1000px) {
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