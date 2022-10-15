<script>
  export let about;
</script>

<div class="author-info">
  {@html about}
</div>

<style>
  .author-info {
    margin-top: 5rem;
    padding: 1rem;
    background-color: var(--background-color-light-2);
  }
  .author-info > :global(:first-child) {
    margin-top: 0;
  }
</style>
