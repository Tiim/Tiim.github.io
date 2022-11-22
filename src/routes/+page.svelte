<script>
  import SocialMedia from "$lib/SocialMedia.svelte";
  import remoteImages from "$content/links.json";
  import PostCardList from "$lib/PostCardList.svelte";

  export let data;
</script>

<svelte:head>
  <title>Tim Bachmann</title>
</svelte:head>

<div class="container has-text-centered h-card">
  <div class="section">
    <div class="columns multiline">
      <div class="column">
        <div class="content">
          {@html data.indexMeta.html}
        </div>
      </div>
      <div class="column">
        <figure class="profile-picture">
          <img
            class="profile-picture u-photo"
            alt="Tiim's Profile"
            src={remoteImages.profilePicture}
          />
        </figure>
      </div>
    </div>
    <div class="hidden">
      <span class="p-name">{data.mf2.name}</span>
      <span class="p-family-name">{data.mf2.family_name}</span>
      <span class="p-nickname">{data.mf2.nickname}</span>
      <a class="u-email" href={`mailto:${data.mf2.email}`}>{data.mf2.email}</a>
      <a class="u-url" href={data.mf2.url}>{data.mf2.url}</a>
      <span class="p-locality">{data.mf2.locality}</span>
      <span class="p-gender-identity">{data.mf2.gender_identity}</span>
    </div>
    <div class="section">
      <SocialMedia />
    </div>
    <div>
      <h2>Recent activity</h2>
      <PostCardList posts={data.recent} />
      <p>
        <a href="/blog">View all blog posts</a>
        |
        <a href="/mf2">View all microposts</a>
        |
        <a href="projects">View all projects</a>
      </p>
    </div>
  </div>
</div>

<style>
  .content :global(strong) {
    font-size: 1.25rem;
    color: var(--font-color-light);
    font-weight: normal;
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
  .hidden {
    display: none;
  }
</style>
