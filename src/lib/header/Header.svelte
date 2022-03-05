<script>
  import siteinfo from "$content/site-info.json";
  let mobileMenuOpen = false;

  function tapBurger() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeBurger() {
    mobileMenuOpen = false;
  }
</script>

<nav class="navbar has-shadow is-spaced" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item has-text-weight-bold" href="/">{siteinfo.name}</a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        role="button"
        aria-label="Menu"
        on:click={tapBurger}
        class="navbar-burger burger"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div class="navbar-menu" class:is-active={mobileMenuOpen}>
      <div class="navbar-start">
        <a on:click={closeBurger} href="/" class="navbar-item">Home</a>
        <a on:click={closeBurger} href="/projects" class="navbar-item"
          >Projects</a
        >
        <a on:click={closeBurger} href="/blog" class="navbar-item">Blog</a>
        <a class="navbar-item" target="_blank" href={siteinfo.contact}>
          Contact</a
        >
      </div>
    </div>
  </div>
</nav>
