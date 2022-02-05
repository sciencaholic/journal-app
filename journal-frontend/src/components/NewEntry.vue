<template>
 <div>
	<div class="entry">
		<highlight-btn />
		<p class="entry-c2 ml-1 mr-8"><input type="text"></p> <!---->
		<div class="entry-c3 ml-1 mr1">
			<button class="entry-add-btn waves-effect waves-black btn-floating">
				<i class="material-icons">add</i>
			</button>
		</div>
		
		<!-- <p class="entry-c3 ml-1 mr-1">20:36</p> -->
	</div>
 </div>
</template>

<script>
import HighlightBtn from './HighlightBtn.vue'
export default {
  components: { HighlightBtn },
	name: 'NewEntry',
	props: {},
	data() {
		return {}
	},
	methods: {}
}
</script>

<style scoped>
/* .entry-add-btn {} */
</style>
