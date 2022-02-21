<template>
  <div class="intro">
    <h2>{{ title }}</h2>
    <p>{{ blurb }}</p>

    <ul class="pages-list">
      <li><a class="base-color-green waves-effect" href="/journal">Journal</a></li> | 
      <li><a class="base-color-green waves-effect" href="/moments">Moments</a></li> | 
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
    return {}
  },
  created() {
    this.title = shared.content.title.toUpperCase();
    this.blurb = shared.content.blurb;
  }
}
</script>

<style scoped>
.intro {
  width: 50%;
  margin: 0 auto;
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
li {
  display: inline-block;
  margin: 0 1.5vmin;
}

@media only screen and (min-width: 601px) {
  .intro > p {
    font-size: 1.5rem;
  }
  .intro > h2 {
    font-size: 5rem;
  }
  .pages-list {
    font-size: 1.5rem;
  }
}
</style>