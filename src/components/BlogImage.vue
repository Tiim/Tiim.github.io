<template>
  <div>
    <a :href="article.url" target="_blank">
      <div v-if="article.cover_image"><img :src="article.cover_image" /></div>
      <div v-else>
        <img :src="fallback" />
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'BlogImage',
  props: {
    article: Object,
  },
  computed: {
    fallback() {
      return `http://dev.to/social_previews/article/${this.article.id}.png`;
    },
  },
};
</script>
