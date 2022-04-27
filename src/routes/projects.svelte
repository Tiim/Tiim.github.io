<script>
  import ProjectEntries from "$lib/projects/ProjectEntries.svelte";
  export let sections;
</script>

<svelte:head>
  <title>Projects and Apps</title>
</svelte:head>

<div class="container has-text-centered">
  <div class="section">
    <h1>Projects, Utility Apps &amp; other Resources⚙️</h1>
    <p>
      This is a list of some of my current or past projects, as well as some
      useful resources that I compiled. Go check them out!
    </p>
  </div>
  {#each sections as section}
    <div class="section content">
      <h2>{section.section}</h2>
      <ProjectEntries projects={section.values} />
    </div>
  {/each}
</div>
