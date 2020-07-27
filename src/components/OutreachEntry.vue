<template>
  <article class="card">
    <img :src="outreach.coverImage" class="card-img-top" :alt="outreach.name">
    <header class="card-header">
      <p class="card-header-title is-centered">
        {{ outreach.name }}
      </p>
    </header>
    <div class="card-content has-text-left">
      <p>
        {{ outreach.text }}
      </p>
      <div class="tags">
        <span v-for="tag in outreach.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="card-footer">
      <router-link class="card-footer-item" :to="{ path: (outreach.family + outreach.route) }">
        Read More ...
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: "Outreach",
  props: {
    outreach: Object
  }
};
</script>

<style scoped>

.tags {
  margin-top: 5%;
}

</style>