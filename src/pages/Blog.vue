<template>
  <Layout>
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
  </Layout>
</template>

<script>
import BlogEntry from "~/components/BlogEntry";
export default {
  name: "ProjectsPage",
  components: { BlogEntry }
};
</script>
