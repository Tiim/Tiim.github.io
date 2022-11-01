<script>
  export let about;
</script>

<div class="author-info h-card">
  <div class="author-avatar">
    <img
      src={about.mf2.photo}
      alt={`Photo of ${about.mf2.name}`}
      class="u-photo"
    />
  </div>
  <div>
    <p class="author-bio p-note">{@html about.html}</p>
    <div class="author-detail">
      <span class="hidden p-gender-identity">{about.mf2.gender_identity}</span>
      <a href={`mailto:${about.mf2.email}`} class="p-email">{about.mf2.email}</a
      >
      <a class="p-url" href={about.mf2.url}>{about.mf2.url}</a>
    </div>
  </div>
</div>

<style>
  .author-info {
    margin-top: 5rem;
    padding: 1rem;
    background-color: var(--background-color-light-2);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }
  .author-info > :global(:first-child) {
    margin-top: 0;
  }
  .author-avatar img {
    width: 7rem;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
  }
  .author-detail {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 1rem;
    flex-wrap: wrap;
    font-size: 0.7rem;
  }
  .hidden {
    display: none;
  }
</style>
