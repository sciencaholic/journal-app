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
			<p class="entry-c3 ml-1 mr-1">{{entry.time}}</p>
			<button
				class="transparent z-depth-0 waves-effect waves-black btn-floating p-1"
				@click="this.$emit('delete-entry', entry._id)"
			>
				<i class="material-icons delete-btn">clear</i>
			</button>
			<!-- <router-view/> -->
		</div>
	</div>
</template>

<script>
// import moment from 'moment'
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
		return {}
	},
	created() {}, 
	methods: {}
}
</script>

<style scoped>
.delete-btn {
	color: #616161;
}
</style>