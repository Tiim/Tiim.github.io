<script>
  export let data;
</script>

<footer>
  <div>
    {@html data.footer.html}
  </div>
  <p class="copyright">&copy;Tim Bachmann {new Date().getFullYear()}</p>
</footer>

<style>
  .copyright {
    text-align: center;
    margin-top: 3rem;
    font-size: 0.8rem;
  }
  footer {
    margin-top: 2rem;
    border-top: dashed 2px var(--color-ui-12);
    background-color: var(--background-color-light);
    color: var(--font-color-muted);
    padding: 2rem;
  }
</style>
