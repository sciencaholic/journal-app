<template>
	<div class="journal ml-2">
		<h3 class="head-date">{{date}}</h3>
			<Entry :entries="entries"></Entry>
	</div>
</template>

<script>
import Entry from './Entry.vue'

export default {
	name: 'Journal',
	components: {
		Entry
	},
	data() {
		return {
			date: "January 22, 2022",
			entries: [
				{
					id: 1,
					highlight: true,
					time: "08:45",
					text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
						eiusmod tempor incididunt ut labore et dolore magna aliqua. #awesome`
				},
				{
					id: 2,
					highlight: false,
					time: "10:00",
					text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
						eiusmod tempor incididunt ut labore et dolore magna aliqua. #productive #work`
				},
				{
					id: 3,
					highlight: false,
					time: "13:20",
					text: `Lorem ipsum dolor sit amet. @JohnDoe`
				},
				{
					id: 4,
					highlight: true,
					time: "18:30",
					text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
						eiusmod tempor incididunt ut labore et dolore magna aliqua.`
				},
				{
					id: 5,
					highlight: false,
					time: "20:45",
					text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
						eiusmod tempor incididunt ut labore et dolore magna aliqua.`
				},
			]
		}
	}
}
</script>

<style scoped>
.head-date {
	color: white;
	font-size: 3rem;
	margin: 1.2rem;
	font-family: 'Montserrat', sans-serif;
}

</style>