<template>
  <div class="container pt-5">
    <nav-bar v-if="isMobileView"></nav-bar>
    <nav-bar-desktop v-else></nav-bar-desktop>
    <!-- <transition appear name="fade"> -->
      <router-view :isMobileView="isMobileView" />
    <!-- </transition> -->
  </div>
</template>

<script>
import materialize from 'materialize-css'
import NavBarDesktop from './components/NavBarDesktop.vue'
import NavBar from './components/NavBar.vue'
import shared from './shared.js'

export default {
  name: 'App',
  components: {
    NavBarDesktop,
    NavBar
  },
  data() {
    return {
      isMobileView: false
    }
  },
  created() {
    this.isMobileView = shared.handleView();
  },
  mounted () {
    materialize.AutoInit();
    window.onresize = () => { this.isMobileView = shared.handleView(); }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
@import url('https://fonts.googleapis.com/css?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap'); */

@import './assets/base.css';
</style>
