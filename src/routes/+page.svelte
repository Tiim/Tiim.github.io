<script>
  import SocialMedia from "$lib/SocialMedia.svelte";
  import siteinfo from "$content/site-info.json";
  import remoteImages from "$content/remote-images.json";
</script>

<svelte:head>
  <title>Tim Bachmann</title>
</svelte:head>

<div class="container has-text-centered">
  <div class="section">
    <div class="columns multiline">
      <div class="column">
        <div>
          <h1>{siteinfo.title}</h1>
          {#each siteinfo.subtitles as sub}
            <p class="subtitle">
              {sub}
            </p>
          {/each}
        </div>
      </div>
      <div class="column">
        <figure class="profile-picture">
          <img
            class="profile-picture"
            alt="Tiim's Profile"
            src={remoteImages.profilePicture.link}
          />
        </figure>
      </div>
    </div>
    <div class="section">
      <SocialMedia />
    </div>
  </div>
</div>

<style>
  .subtitle {
    font-size: 1.25rem;
    color: var(--font-color-light);
  }
  .profile-picture {
    border-radius: 50%;
    width: 128px;
    height: 128px;
    display: block;
  }
  .column {
    display: flex;
    justify-content: center;
    min-width: min(100%, 370px);
  }
</style>
