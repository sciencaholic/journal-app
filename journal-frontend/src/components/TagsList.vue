<template>
	<div class="child-box-tag">
		<div class="tags-list" :key="tag" v-for="tag in tagsList">
			<button 
				class="chip btn-flat lowercase"
				:class="(currentTag == tag) ? 'selected-chip' : 'unselected-chip'"
				@click="this.$emit('select-tag', tag)"	
			>{{tag}}</button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'TagsList',
  components: {},
	props: {
		tagsList: Array,
		currentTag: String
	},
	data() {
		return {}
	}
}
</script>

<style scoped>
.tags-list {
	display: inline;
	/* height: max-content; */
	overflow-x: auto;
}
.selected-chip {
	background-color: #1fb393;
	color: white;
}
.unselected-chip {
	background-color: white;
	color: #1fb393;
}
.lowercase {
	text-transform: unset !important;
}
.child-box-tag {
	width: 75%;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
	padding-bottom: 1rem;
  margin-left: 2rem;
}
.child-box-tag::-webkit-scrollbar {
  /* width: 0.50rem;               width of the entire scrollbar */
	height: 0.75rem;
}
.child-box-tag::-webkit-scrollbar-track {
  border-radius: 2rem;       /* roundness of the scroll thumb */
  background: #545454;        /* color of the tracking area */
}
.child-box-tag::-webkit-scrollbar-thumb {
  background-color: #1fb393;    /* color of the scroll thumb */
  border-radius: 2rem;       /* roundness of the scroll thumb */
  border: 3px solid #545454;  /* creates padding around scroll thumb */
}
</style>