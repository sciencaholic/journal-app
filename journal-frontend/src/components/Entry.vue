<template>
	<div>
		<div class="entry" :key="entry.id" v-for="entry in entries">
			<button class="transparent z-depth-0 waves-effect waves-black btn-floating p-1" v-if="entry.highlight">
				<i class="material-icons hl">favorite</i>
			</button>
			<button class="transparent z-depth-0 waves-effect waves-black btn-floating p-1" v-else>
				<i class="material-icons uhl">favorite_border</i>
			</button>
			<p class="entry-text pl-1 pr-8">{{entry.text}}</p>
			<p class="entry-time pl-1 pr-1">{{entry.time}}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Entry',
	props: {
		entries: [Object]
	},
	data() {
		return {}
	}
}
</script>

<style scoped>
.entry {
	display:flex; 
	flex-direction: row; 
	justify-content: center; 
	align-items: center;
	color: #ffffff;
	font-size: 1.25rem;
	width: 75%;
}
.entry-text {
	/* width: 60%; */
	flex:2;
}
.material-icons.hl {
	color: red;
}
.material-icons.uhl {
	opacity: 0%;
}
</style>