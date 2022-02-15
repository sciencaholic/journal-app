<template>
  <div class="page">
		<!-- <calendar-dial /> -->
    <Journal />
  </div>
</template>

<script>
import Journal from '../components/Journal.vue'
// import CalendarDial from './CalendarDial.vue'

export default {
  name: 'JournalPage',
  components: {
    Journal,
		// CalendarDial,
  },
	data () {
		return {
			start: undefined,
			end: undefined
		}
	}
}
</script>

<style scoped>
.page {
	width: 100%;
}
</style>