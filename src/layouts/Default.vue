<template>
  <div id="app">
    <Header />
    <div class="section">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>
