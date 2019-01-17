<template>
  <div>
    <div class="section content">
      <h1>Projects⚙️</h1>
      <p>This is a list of all my current or past projects. Go check them out!</p>
      <p>
        <i>This page is not complete yet.</i>
      </p>
    </div>
    <div class="section content">
      <Projects/>
    </div>
  </div>
</template>

<script>
import Projects from '../components/Projects';
export default {
  name: 'ProjectsPage',
  components: {
    Projects,
  },
};
</script>
