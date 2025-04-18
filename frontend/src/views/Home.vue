<template>
  <div class="intro">
    <div class="brand-logo"><img class="homepage-logo" src="@/assets/logo.png"/></div>
    <h2>{{ appname }}</h2>
    <p>{{ blurb }}</p>

    <ul class="pages-list" v-if="!isMobileView">
      <li><a class="base-color-green waves-effect" href="/journal">Journal</a></li> | 
      <li><a class="base-color-green waves-effect" href="/moments">Moments</a></li> | 
      <li><a class="base-color-green waves-effect" href="/tags">Tags</a></li>
    </ul>

    <ul class="pages-list-mobile" v-else>
      <li><a class="base-color-green waves-effect" href="/journal">Journal</a></li>
      <p class="emdash">——————</p>
      <li><a class="base-color-green waves-effect" href="/moments">Moments</a></li>
      <p class="emdash">——————</p>
      <li><a class="base-color-green waves-effect" href="/tags">Tags</a></li>
    </ul>

    <!-- <ul class="pages-list">
      <li></li>
      <li></li>
      <li></li>
    </ul> -->
  </div>
</template>

<script>
import shared from '../shared.js'

export default {
  name: 'Home',
  data () {
    return {
      isMobileView: false,
      appname: '',
      blurb: ''
    }
  },
  created() {
    // Initialize default values in case shared.content is null
    this.appname = 'Chronicle';
    this.blurb = 'A simple journaling application';
    
    // Check if shared.content exists before accessing it
    if (shared && shared.content) {
      this.appname = shared.content.appname ? shared.content.appname.toUpperCase() : this.appname;
      this.blurb = shared.content.blurb || this.blurb;
    }
    
    this.isMobileView = shared && typeof shared.handleView === 'function' ? shared.handleView() : false;
  },
  mounted() {
    window.onresize = () => { 
      this.isMobileView = shared && typeof shared.handleView === 'function' ? shared.handleView() : false;
    }
  }
}
</script>

<style scoped>
.intro {
  width: 50%;
  margin: 10% auto;
  text-align: center;
  justify-content: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
  /* font-weight: 600; */
}
.intro > p {
  font-size: 4vmin;
}
.intro > h2 {
  font-size: 8vmin;
}
.pages-list {
  list-style-type: none;
  padding: 0;
  font-size: 3.5vmin;
}
.pages-list > li {
  display: inline-block;
  margin: 0 1.5vmin;
}
.pages-list-mobile {
  font-size: 3.5vmin;
}
.pages-list-mobile > li {
  display: grid;
}
</style>