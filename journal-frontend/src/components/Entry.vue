<template>
	<div class="child-box-main">
		<div class="entry" :key="entry._id" v-for="entry in entries">
			<highlight-btn 
				v-if="isHLEnabled"
				:isHighlighted="entry.highlight" 
				:entryId="entry._id" 
				@toggle-highlight="this.$emit('toggle-highlight', entry._id)" 
			/>
			<p v-else class="entry-c3">{{entry.display_date}}</p>
			<!-- <p class="entry-c2 ml-1 mr-8">{{entry.text}}</p> -->
			<hashtag-highlight :tags="entry.tags" :text="entry.text"/>
			<p class="entry-c3">{{entry.time}}</p> <!-- :class="{'ml-1 mr-1':!isMobileView, 'm-05':isMobileView}"-->
			<button
				class="transparent z-depth-0 waves-effect waves-black btn-floating delete-btn"
				@click="this.$emit('delete-entry', entry._id)"
			>
				<i class="material-icons delete-icon">clear</i>
			</button>
		</div>
	</div>
</template>

<script>
import shared from '../shared'
import HighlightBtn from './HighlightBtn.vue'
import HashtagHighlight from "./HashtagHighlight.vue";

export default {
  components: { 
		HighlightBtn,
		HashtagHighlight
	},
	name: 'Entry',
	props: {
		entries: [Object],
		isHLEnabled: Boolean
	},
	data() {
		return {
			isMobileView: false
		}
	},
	created() {
		this.isMobileView = shared.handleView();
	},
	methods: {}
}
</script>

<style scoped>
.delete-icon {
	color: #616161;
}
.delete-btn {
	margin: 0 0.5rem;
}
</style>