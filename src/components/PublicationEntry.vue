<template>
<div>

  <article class="card">
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
