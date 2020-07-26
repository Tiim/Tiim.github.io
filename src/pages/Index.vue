<template>
  <Layout>
    <div class="container has-text-centered">
      <div class="section content">
        <div class="columns">
          <div class="column">
            <h1 class="title">{{ $page.text.title }}</h1>
            <div class="highlights__title">
              <h5>Highlights</h5>
              <p v-for="item in $page.text.highlights" :key="item" class="highlights__text">
                {{ item }}
              </p>
            </div>
            <div class="funfacts__title">
              <h5>Fun Facts</h5>
              <p v-for="item in $page.text.funfacts" :key="item" class="funfacts__text">
                {{ item }}
              </p>
            </div>
          </div>
          <div class="column is-4">
            <figure class="image is-inline-block" style="width: 60%;">
              <img class="is-square" alt="profile picture" src="@/assets/images/profile_pic.jpeg"/>
            </figure>
          </div>
        </div>
        <div class="section content">
          <SocialMedia />
        </div>
        <div class="credits">
          <p>Thank you <a href="https://github.com/Tiim" target="_blank">Tiim</a> for coding the template</p>
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

<style scoped lang="scss">

.title {
  text-align: left;
}

.highlights, .funfacts {

  &__title {
    margin: 5%;
    text-align: left;
  }

  &__text {
    margin: 0;
    text-align: left;
  }
}

.credits {
  margin-top: 10em;
}

</style>

<page-query>
  query {
    text: metadata {
      title
      highlights
      funfacts
    }
  }
</page-query>
