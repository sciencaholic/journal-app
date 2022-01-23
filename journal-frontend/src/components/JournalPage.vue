<template>
  <div class="page">
    <Journal />
		<calendar-dial />
  </div>
</template>

<script>
import Journal from './Journal.vue'
import CalendarDial from './CalendarDial.vue'

export default {
  name: 'JournalPage',
  components: {
    Journal,
		CalendarDial
  }
}
</script>