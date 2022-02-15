<template>
	<div>
		<div class="entry" :key="entry.id" v-for="entry in entries">
			<highlight-btn 
				v-if="isHLEnabled"
				:isHighlighted="entry.highlight" 
				:entryId="entry.id" 
				@toggle-highlight="this.$emit('toggle-highlight', entry.id)" 
			/>
			<p v-else class="entry-c2 ml-1 mr-8">{{entry.display_date}}</p>
			<p class="entry-c2 ml-1 mr-8">{{entry.text}}</p>
			<p class="entry-c3 ml-1 mr-1">{{entry.time}}</p>
		</div>
	</div>
</template>

<script>
// import moment from 'moment'
import HighlightBtn from './HighlightBtn.vue'

export default {
  components: { HighlightBtn },
	name: 'Entry',
	props: {
		entries: [Object],
		isHLEnabled: Boolean
	},
	data() {
		return {}
	},
	created() {}, 
	methods: {}
}
</script>

<style scoped>
</style>