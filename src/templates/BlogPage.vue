<template>
  <Layout>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <div class="content">
            <h1 class="title">
              {{ $page.post.title }}
            </h1>
            <div class="text">
              <div v-html="$page.post.content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "BlogPage",
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
<style scoped>
.title {
  text-align: center;
  margin: 3em;
}

.text {
  background-color: #dfdfdf;
  padding: 2em;
  border-radius: 10px;
}
</style>

<page-query>
  query BlogPost($id: ID!) {
    post: blogPost(id: $id) {
      title
      path
      date(format: "D. MMMM YYYY")
      timeToRead
      description
      content
      cover_image(width: 860, blur: 10)
    }
  }
</page-query>
