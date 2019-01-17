<template>
  <div>
    <h2>Social Media</h2>
    <div class="columns is-centered" v-for="row in cols" :key="row.id">
      <div class="column is-one-fifth" v-for="c in row" :key="c.id">
        <a target="_blank" :href="c.l">
          <font-awesome-icon v-if="c.ico" :icon="c.ico"/>
          {{c.t}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import chunk from '../utils/chunk.js';
import socialMediaData from '../data/socialmedia.json';
export default {
  name: 'SocialMedia',
  data: () => ({
    socialMedia: socialMediaData,
  }),
  computed: {
    cols() {
      return chunk(this.socialMedia, 5);
    },
  },
};
</script>
