<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title is-centered">{{project.name}}</p>
    </header>
    <div class="card-content has-text-left">
      <p>{{project.text}}</p>

      <div class="tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{tag}}</span>
      </div>
    </div>
    <div class="card-footer">
      <a
        v-for="link in project.links"
        :key="link.url"
        :href="link.url"
        class="card-footer-item"
        target="_blank"
      >{{link.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    project: Object,
  },
};
</script>
