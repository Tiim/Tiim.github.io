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
