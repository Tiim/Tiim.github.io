<template>
  <Layout>
    <div class="container has-text-centered">
      <div class="section content">
        <div class="columns">
          <div class="column">
            <h1 class="title">{{ $page.text.title }}</h1>
            <div class="subtitles">
              <p v-for="sub in $page.text.subtitles" :key="sub" class="subtitle">
                {{ sub }}
              </p>
            </div>
          </div>
          <div class="column is-4">
            <figure class="image is-inline-block" style="width: 50%;">
              <img class="is-square" alt="profile picture" src="@/assets/images/profile_pic.jpeg"/>
            </figure>
          </div>
        </div>
        <div class="section content">
          <SocialMedia />
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import SocialMedia from "../components/SocialMedia";

export default {
  name: "Index",
  components: { SocialMedia },
  metaInfo: {
    title: "Home"
  }
};
</script>

<style scoped>

.title {
  text-align: left;
}

.subtitles {
  margin: 5%;
  text-align: left;
}

</style>

<page-query>
  query {
    text: metadata {
      title
      subtitles
    }
  }
</page-query>
