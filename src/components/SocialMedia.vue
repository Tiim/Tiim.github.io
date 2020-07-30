<template>
  <div>
    <h2>Contact Me</h2>
    <div class="columns is-centered is-multiline">
      <div
        class="column is-one-fifth"
        v-for="edge in $static.allSocialMedia.edges"
        :key="edge.node.id"
      >
        <a target="_blank" :href="edge.node.link">
          <FA
            v-if="edge.node.icon"
            :icon="edge.node.icon"
            class="icon is-small"
          />
          {{ edge.node.site }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMedia"
};
</script>

<static-query>
  {
    allSocialMedia(sortBy: "index", order: ASC) {
      edges {
        node {
          id
          icon
          site
          link
        }
      }
    }
  }
</static-query>
