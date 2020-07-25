<template>
  <div id="app">
    <Header />
    <div class="section">
      <slot />
    </div>
    <div class="section has-text-centered">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
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
