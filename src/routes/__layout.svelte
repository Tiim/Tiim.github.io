<script>
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import "normalize.css";
  import "../app.css";
</script>

<div id="app">
  <Header />
  <div class="section">
    <slot />
  </div>
  <div class="section has-text-centered">
    <Footer />
  </div>
</div>
