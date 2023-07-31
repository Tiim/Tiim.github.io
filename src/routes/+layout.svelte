<script>
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import "normalize.css";
  import "../app.css";

  export let data;
</script>

<div id="app">
  <Header />
  <div class="section">
    <slot />
  </div>
  <div>
    <Footer {data} />
  </div>
</div>
