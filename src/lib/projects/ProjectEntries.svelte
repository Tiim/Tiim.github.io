<script>
  import Project from "./Project.svelte";
  export let projects = [];
</script>

<div>
  <div class="proj-wrap">
    {#each projects as proj}
      <div class="proj">
        <Project project={proj} />
      </div>
    {/each}
  </div>
</div>

<!--TODO: create card-list component or something-->
<style>
  .proj-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
    justify-content: center;
  }
</style>
