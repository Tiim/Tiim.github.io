<template>
  <article class="card">
    <header class="card-header">
      <g-link class="card-header-title is-centered" :to="article.path">
        {{ article.title }}
      </g-link>
    </header>
    <div class="card-content has-text-left">
      <g-image v-if="article.cover_image" :src="article.cover_image" />
      <a target="_blank" :href="article.url"> </a>
      <p class="tags">
        <span v-for="tag in article.tags.split(',')" :key="tag" class="tag">
          {{ tag }}
        </span>
      </p>
      <p>{{ article.description }}</p>
      <p class="is-size-7	has-text-grey-light	">{{ timestamp }}</p>
    </div>
    <div class="card-footer">
      <g-link class="card-footer-item" :to="article.path">
        Read More...
      </g-link>
    </div>
  </article>
</template>

<script>
export default {
  name: "BlogEntry",
  props: {
    article: Object
  },
  computed: {
    timestamp() {
      return new Date(this.article.date).toISOString().substr(0, 10);
    }
  }
};
</script>
