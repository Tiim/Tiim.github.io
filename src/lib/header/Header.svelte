<script>
  import siteinfo from "$content/site-info.json";
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">{siteinfo.name}</a>
  </div>
  <div class="navbar-menu">
    <a href="/" class="navbar-item">Home</a>
    <a href="/projects" class="navbar-item">Projects</a>
    <a href="/blog" class="navbar-item">Blog</a>
    <a class="navbar-item" target="_blank" href={siteinfo.contact}> Contact</a>
  </div>
</nav>

<style>
  .navbar {
    height: 60px;
    padding: 1rem var(--padding-side);
    display: flex;
    align-items: stretch;
    gap: var(--header-gap);
    background-color: var(--background-color-light);
  }

  .navbar-brand {
    font-weight: bolder;
    display: none;
  }

  .navbar-brand .navbar-item {
    color: var(--color-syntax-1);
    font-size: 1.1rem;
    letter-spacing: 2px;
    margin-right: 2rem;
  }

  .navbar-brand,
  .navbar-menu {
    display: flex;
    align-items: center;
    gap: var(--header-gap);
  }

  @media only screen and (max-width: 600px) {
    .navbar-brand {
      display: none;
    }
  }

  .navbar-item {
    padding: 1rem;
    display: inline;
    text-decoration: none;
    text-align: center;
    color: var(--font-color-light);
    border-radius: 0.5rem;
  }

  .navbar-brand .navbar-item {
    padding: 0px;
    background-color: transparent !important;
  }

  .navbar-item:hover {
    background-color: var(--background-color-light-2);
  }
</style>
