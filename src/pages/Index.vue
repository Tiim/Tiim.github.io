<template>
  <Layout>
    <div class="section content">
      <div class="columns">
        <div class="column">
          <h1 class="title">Hey, I'm Tim😊</h1>
          <p class="subtitle">
            I'm a swimmer, swim coach and CS student in Switzerland
          </p>
          <p class="subtitle">🏊💻</p>
        </div>
        <div class="column is-4">
          <figure class="image is-128x128 is-inline-block">
            <img
              class="is-rounded"
              alt="profile picture"
              src="https://avatars.io/twitter/tiimb/medium"
            />
          </figure>
        </div>
      </div>
      <div class="section content">
        <SocialMedia />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
