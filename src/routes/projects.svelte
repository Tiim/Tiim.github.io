<script>
  import ProjectEntries from "$lib/projects/ProjectEntries.svelte";
  import projects from "$content/project.json";
  import apps from "$content/apps.json";
  import other from "$content/other-links.json";
</script>

<svelte:head>
  <title>Projects and Apps</title>
</svelte:head>

<div class="container has-text-centered">
  <div class="section content">
    <h1>Projects, Utility Apps &amp; other Resources⚙️</h1>
    <p>
      This is a list of some of my current or past projects, as well as some
      useful resources that I compiled. Go check them out!
    </p>
  </div>
  <div class="section content">
    <h2>Apps</h2>
    <ProjectEntries projects={apps} />
  </div>
  <div class="section content">
    <h2>Projects</h2>
    <ProjectEntries {projects} />
  </div>
  <div class="section content">
    <h2>Other</h2>
    <ProjectEntries projects={other} />
  </div>
</div>
