<template>
  <nav
    class="navbar has-shadow is-spaced"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold" href="/">Guy Meyer</a>
        <a
          role="button"
          aria-label="Menu"
          @click="tapBurger"
          class="navbar-burger burger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div :class="{ 'navbar-menu': true, 'is-active': mobileMenuOpen }">
        <div class="navbar-start">
          <router-link @click.native="closeBurger" to="/" class="navbar-item"
            >Home</router-link
          >
          <router-link
            @click.native="closeBurger"
            to="/projects"
            class="navbar-item"
            >Projects</router-link
          >
          <router-link
            @click.native="closeBurger"
            to="/blog"
            class="navbar-item"
            >Blog</router-link
          >
          <a
            class="navbar-item"
            target="_blank"
            href="https://www.linkedin.com/in/meyerguy/"
            >Contact</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      mobileMenuOpen: false
    };
  },
  methods: {
    tapBurger() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeBurger() {
      this.mobileMenuOpen = false;
    }
  }
};
</script>
