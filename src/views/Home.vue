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
        <div class="column is-3">
          <figure class="image is-128x128">
            <img class="is-rounded" src="https://avatars.io/twitter/tiimb/medium">
          </figure>
        </div>
      </div>
      <div>
        <h2>Social Media</h2>
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
