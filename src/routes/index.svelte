<script context="module">
  export const prerender = true;
</script>

<script>
  import SocialMedia from "$lib/SocialMedia.svelte";
  import siteinfo from "$content/site-info.json";
  import remoteImages from "$content/remote-images.json";
</script>

<svelte:head>
  <title>Tim Bachmann</title>
</svelte:head>

<div class="container has-text-centered">
  <div class="section content">
    <div class="columns">
      <div class="column">
        <h1 class="title">{siteinfo.title}</h1>
        {#each siteinfo.subtitles as sub}
          <p class="subtitle">
            {sub}
          </p>
        {/each}
      </div>
      <div class="column is-4">
        <figure class="image is-128x128 is-inline-block">
          <img
            class="is-rounded"
            alt="Tiim's Profile"
            src={remoteImages.profilePicture.link}
          />
        </figure>
      </div>
    </div>
    <div class="section content">
      <SocialMedia />
    </div>
  </div>
</div>
