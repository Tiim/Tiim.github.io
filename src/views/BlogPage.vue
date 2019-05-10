<template>
  <div>
    <div class="section content">
      <h1>Blog 📖</h1>
      <p>View all my blog posts on <a href="https://dev.to/tiim">Dev.to</a></p>
    </div>
    <div class="section content">
      <div v-for="row in cols" :key="row.id" class="columns">
        <div
          v-for="article in row"
          :key="article.id"
          class="column is-one-third"
        >
          <BlogEntry :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogEntry from '../components/BlogEntry';
import chunk from '../utils/chunk';

export default {
  name: 'ProjectsPage',
  components: { BlogEntry },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    fetch('https://dev.to/api/articles?username=tiim')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(JSON.stringify(myJson, null, 2));
        this.articles = myJson;
      });
  },
  computed: {
    cols() {
      return chunk(this.articles, 3);
    },
  },
};
</script>
