<template>
	<div>
		<h2 class="head-date ml-2">{{date}}</h2>
		<div :key="entry.id" v-for="entry in entries">
			<Entry :text="entry.text"></Entry>
		</div>
	</div>
</template>

<script>
import Entry from './components/Entry.vue'

export default {
	name: 'Journal',
	components: {
		Entry
	},
	data() {
		return {
			date: "January 22, 2022",
			entries: [Object]
		}
	}
}
</script>

<style scoped>
.head-date {
	color: white;
	padding: 1rem;
	font-size: 3rem;
}
</style>