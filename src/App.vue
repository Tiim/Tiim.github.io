<template>
  <div>
    <Header/>
    <div class="section">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <div class="section">
      <Footer/>
    </div>
  </div>
</template>
<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
</style>
