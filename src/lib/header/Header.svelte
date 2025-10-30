<script>
  import mf2 from "$content/mf2.json";

  let mobileOpen = false;

  function nav() {
    mobileOpen = false;
  }
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">{mf2.name}</a>
  </div>
  <div class="navbar-menu desktop">
    <a href="/" class="navbar-item">Home</a>
    <a href="/projects" class="navbar-item">Projects</a>
    <a href="/blog" class="navbar-item">Blog</a>
    <a href="/pages/uses" class="navbar-item">Uses</a>
    <a class="navbar-item" href="/contact">Contact</a>
    <a class="navbar-item" href="/follow">Follow</a>
  </div>
  <div class="navbar-menu mobile">
    <div>
      <input
        bind:checked={mobileOpen}
        id="header-toggle"
        class="header-checkbox"
        type="checkbox"
      />
      <label for="header-toggle" class="toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    {#if mobileOpen}
      <div class="mobile-dropdown">
        <a on:click={nav} class="navbar-item" href="/">Home</a>
        <a on:click={nav} class="navbar-item" href="/projects">Projects</a>
        <a on:click={nav} class="navbar-item" href="/blog">Blog</a>
        <a on:click={nav} class="navbar-item" href="/pages/uses">Uses</a>
        <a on:click={nav} class="navbar-item" href="/contact">Contact</a>
        <a on:click={nav} class="navbar-item" href="/follow">Follow</a>
      </div>
    {/if}
  </div>
</nav>

<style>
  .header-checkbox {
    display: none;
  }
  .toggle {
    position: relative;
    cursor: pointer;
    display: block;
    width: 36px;
    height: 36px;
  }

  .toggle:hover {
    background-color: var(--background-color-light-2);
  }

  .toggle span {
    position: absolute;
    display: block;
    width: 26px;
    right: 5px;
    height: 2px;
    background-color: #fff;
    border-radius: 2px;
    transition: background-color 0.2s ease-in-out;
  }

  .toggle span:nth-child(1) {
    top: 10px;
  }
  .toggle span:nth-child(2) {
    top: calc(50% - 1px);
  }
  .toggle span:nth-child(3) {
    bottom: 10px;
  }

  .mobile-dropdown {
    position: absolute;
    top: 80px;
    right: 10px;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color-light-2);
    border-radius: 0.5rem;
  }

  .navbar {
    height: 60px;
    padding: 1rem var(--padding-side);
    display: flex;
    align-items: stretch;
    gap: var(--header-gap);
    background-color: var(--background-color-light);
    position: relative;
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

  .navbar-menu.mobile {
    display: none;
  }
  @media only screen and (max-width: 800px) {
    .navbar-menu.desktop {
      display: none;
    }
    .navbar-menu.mobile {
      display: flex;
    }
    .navbar {
      justify-content: space-between;
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

  .mobile .navbar-item:hover {
    background-color: var(--background-color-light-3);
  }
</style>
