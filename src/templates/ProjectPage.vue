<template>
  <Layout>
    <div class="container">
      <div class="crop">
        <img :src="$page.post.cover_image">
      </div>
      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <div class="content">
            <router-link to="/projects">Back to Projects</router-link>
            <h1 class="title">
              {{ $page.post.title }}
            </h1>
            <h6 class="subtitle">
              {{ $page.post.subtitle }}
            </h6>
            <div class="text">
              <div v-html="$page.post.content" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <g-image class="is-square bottom-icon" alt="logo" src="~/../static/assets/img/favicon-96.png"/>
  </Layout>
</template>

<script>
export default {
  name: "ProjectPage",
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
<style scoped>

@media screen and (max-width: 850px) {
  .crop {
    visibility: hidden;
    display: none;
    clear: both;
    float: left;
  }

  /deep/ .caption {
    visibility: hidden;
    display: none;
    clear: both;
    float: left;
  }

  /deep/ figure {
    margin: 0;
  }

  /deep/ img, /deep/ iframe {
    width: 100%;
  }
}

.bottom-icon {
  width: 5%; 
  float: right;
  margin: 2%;
}

.title {
  text-align: center;
  margin-top: 2em;
}

.subtitle {
  text-align: center;
  margin-bottom: 2em;
}

.text {
  background-color: #fff;
  padding: 2em;
  border-radius: 10px;
}

.crop {
  width: 100%;
  height: 15em;
  margin-bottom: 2%;
  overflow: hidden;
}

.crop img {
  width: 100%;
  object-position: 0 -200px;
}
</style>

<page-query>
  query ProjectPost($id: ID!) {
    post: projectPost(id: $id) {
      route
      title
      subtitle
      path
      date(format: "D. MMMM YYYY")
      timeToRead
      description
      content
      cover_image
    }
  }
</page-query>
