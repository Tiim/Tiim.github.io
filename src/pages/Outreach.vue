<template>
  <Layout>
    <div class="container has-text-centered">
      <div class="section content">
        <h1>Outreach</h1>
      </div>
        <OutreachEntries :data="outreach" />
    </div>
  </Layout>
</template>

<script>
import OutreachEntries from "../components/OutreachEntries";
export default {
  name: "OutreachPage",
  components: {
    OutreachEntries
  },
  metaInfo: {
    title: "Outreach"
  },
  computed: {
    outreach() {
      return this.$page.outreach?.edges ?? [];
    },
  }
};
</script>
<page-query>
  {
    outreach: allOutreach(sortBy: "index", order: ASC) {
      edges {
        node {
          id
          name
          route
          family
          text
          tags
        }
      }
    }
  }
</page-query>
