<template>
  <div class="container">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import materialize from 'materialize-css'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted () {
    materialize.AutoInit()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
@import url('https://fonts.googleapis.com/css?family=Poiret+One&display=swap');
@import './assets/base.css';
</style>
