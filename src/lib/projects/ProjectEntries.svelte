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

<style>
  .proj-wrap {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .proj {
    flex-basis: 0;
    flex-grow: 1;
    min-width: 300px;
  }
</style>
