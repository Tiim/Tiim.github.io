<template>
  <div>
    <div class="section content">
      <div class="columns">
        <div class="column">
          <h1 class="title">Hey, I'm Tim😊</h1>
          <p class="subtitle">I'm a swimmer, swim coach and CS student in Switzerland</p>
          <p class="subtitle">🏊💻</p>
          <i>This website is still WIP</i>
        </div>
        <div class="column is-4">
          <figure class="image is-128x128 is-inline-block">
            <img class="is-rounded" src="https://avatars.io/twitter/tiimb/medium">
          </figure>
        </div>
      </div>
      <div class="section content">
        <SocialMedia/>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from '../components/SocialMedia';
export default {
  name: 'Home',
  components: {
    SocialMedia,
  },
};
</script>
