<script>
  import mf2 from "$content/mf2.json";
  export let about;
</script>

<div class="author-info p-author h-card">
  <div class="author-avatar">
    <img src={mf2.photo} alt={`Photo of ${mf2.name}`} class="u-photo" />
  </div>
  <div>
    <p class="author-bio p-note">{@html about.html}</p>
    <div class="author-detail">
      <span class="hidden p-name">{mf2.name}</span>
      <span class="hidden p-gender-identity">{mf2.gender_identity}</span>
      <span class="hidden p-locality">{mf2.locality}</span>
      <span class="hidden p-country-name">{mf2.country_name}</span>
      <span class="hidden p-org">{mf2.org}</span>
      <span class="hidden p-role">{mf2.role}</span>
      <a href={`mailto:${mf2.email}`} class="p-email">{mf2.email}</a>
      <a class="p-url" href={mf2.url}>{mf2.url}</a>
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
