<template>
  <div id="app">
    <Header />
    <div class="section">
      <div class="container has-text-centered">
        <slot />
      </div>
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
    Header,
    Footer
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
