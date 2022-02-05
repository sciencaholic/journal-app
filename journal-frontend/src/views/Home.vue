<template>
  <div class="intro">
    <h1>{{ title }}</h1>
    <p>{{ blurb }}</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      title: 'CHRONICLE',
      blurb: 'A place to jot down your thoughts.'
    }
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
  font-weight: 600;
}
.intro > p {
  font-size: 1.5rem;
}
</style>