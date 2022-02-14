<template>
	<button v-if="isHighlighted"
		:disabled="isDisabled ? isDisabled : false"
		class="transparent z-depth-0 waves-effect waves-black btn-floating p-1"
		@click="this.$emit('toggle-highlight', entryId)"
	>
		<i class="material-icons hl-red">favorite</i>
	</button>
	<button v-else
		:disabled="isDisabled ? isDisabled : false"
		class="transparent z-depth-0 waves-effect waves-black btn-floating p-1"
		@click="this.$emit('toggle-highlight', entryId)"
	>
		<i class="material-icons uhl">favorite_border</i>
	</button>

	<!-- <button v-if="isHighlighted"
		class="transparent z-depth-0 waves-effect waves-black btn-floating p-1"
		@click="this.$emit('toggle-highlight', entryId)"
	>
		<i class="material-icons hl-yellow">star</i>
	</button>
	<button v-else
		class="transparent z-depth-0 waves-effect waves-black btn-floating p-1"
		@click="this.$emit('toggle-highlight', entryId)"
	>
		<i class="material-icons uhl">star_border</i>
	</button> -->
</template>


<script>
export default {
	name: 'HighlightBtn',
	props: {
		isDisabled: Boolean,
		isHighlighted: Boolean,
		entryId: Number
	},
	data() {
		return {}
	},
	methods: {}
}
</script>

<style scoped>
.material-icons.hl-red {
	color: red;
}
.material-icons.hl-yellow {
	color: #eeff41;
}
.material-icons.uhl {
	opacity: 10%;
}
a[disabled="disabled"] {
  pointer-events: none;
}
</style>