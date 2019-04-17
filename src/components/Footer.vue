<template>
  <div class="container">
    <footer class="footer">
      <div class="content">
        <p>&copy;Tim Bachmann {{year}}</p>
        <p>
          <i>Built with Vue.js and hosted on GitHub Pages.</i>
          <br>
          <i>
            View this website on
            <a href="https://github.com/Tiim/Tiim.github.io">GitHub</a>!
          </i>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
