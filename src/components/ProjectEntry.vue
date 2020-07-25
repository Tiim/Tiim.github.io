<template>
  <article class="card">
    <header class="card-header">
      <p class="card-header-title is-centered">
        {{ project.name }}
      </p>
    </header>
    <div class="card-content has-text-left">
      <p>
        {{ project.text }}
      </p>
      <div class="tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="card-footer">
      <router-link class="card-footer-item" :to="{ path: (project.family + project.route) }">
        Read More ...
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: "Projects",
  props: {
    project: Object
  }
};
</script>

<style scoped>

.tags {
  margin-top: 5%;
}

</style>