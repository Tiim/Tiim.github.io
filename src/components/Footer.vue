<template>
  <div class="container">
    <footer class="footer">
      <div class="content">
        <p>
          <a
            target="_blank"
            href="https://twitter.com/messages/compose?recipient_id=459225229"
          >Contact me on Twitter</a>
        </p>
        <p>&copy;Tim Bachmann {{year}}</p>
        <i>
          Built with Vue.js and hosted on GitHub Pages.
          <br>Fork me on
          <a href="https://github.com/Tiim/Tiim.github.io">GitHub</a>
        </i>
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
