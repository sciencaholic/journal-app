<template>
  <div class="page">
		<Entry @toggle-highlight="toggleHighlight" :entries="entries" :isHLEnabled="false"></Entry>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'MomentsPage',
  components: {
  },
	data () {
		return {
		}
	},
	methods: {
		getDateForDisplay() {
			for (let i = 0; i < this.entries.length; i++) {
				this.entries[i].display_date = moment(this.entries[i].date).format("MMM DD");
			}
		}
	}
}
</script>