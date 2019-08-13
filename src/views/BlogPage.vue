<template>
  <div>
    <div class="section content">
      <h1>Blog 📖</h1>
      <p>View all my blog posts on <a href="https://dev.to/tiim">Dev.to</a></p>
      <div v-if="loading">
        <div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
    </div>
    <div></div>
    <div class="section content" v-if="!loading">
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
      loading: true,
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
        this.loading = false;
      });
  },
  computed: {
    cols() {
      return chunk(this.articles, 3);
    },
  },
};
</script>
<style scoped>
.spinner {
  margin: 10px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color: thistle;
  height: 100%;
  width: 6px;
  margin: 1px;
  display: inline-block;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
