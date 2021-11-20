<script>
  import ProjectEntries from "$lib/projects/ProjectEntries.svelte";
  import projects from "$content/project.json";
  import apps from "$content/apps.json";
</script>

<div class="container has-text-centered">
  <div class="section content">
    <h1>Projects &amp; Utility Apps⚙️</h1>
    <p>
      This is a list of some of my current or past projects. Go check them
      out!
    </p>
  </div>
  <div class="section content">
    <h2>Apps</h2>
    <ProjectEntries projects={apps} />
  </div>
  <div class="section content">
    <h2>Projects</h2>
    <ProjectEntries projects={projects} />
  </div>
</div>