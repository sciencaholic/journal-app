<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ blurb }}</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      title: 'Journal',
      blurb: 'This is a place to jot down your thoughts.'
    }
  }
}
</script>