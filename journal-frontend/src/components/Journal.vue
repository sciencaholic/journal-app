<template>
	<div class="journal ml-2">
		<h3 class="head-date">{{date}}</h3>
			<Entry @toggle-highlight="toggleHighlight" :entries="entries"></Entry>
			<new-entry @add-task="addTask" />
	</div>
</template>

<script>
import moment from 'moment'
import Entry from './Entry.vue'
import NewEntry from './NewEntry.vue'

export default {
	name: 'Journal',
	components: {
		Entry,
		NewEntry
	},
	data() {
		return {
			date: "January 22, 2022",
			entries: [
				{
					id: 1,
					highlight: true,
					date: moment().format("2022-01-22T08:45:51+05:30"),
					text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
						eiusmod tempor incididunt ut labore et dolore magna aliqua. #awesome`
				},
				{
					id: 2,
					highlight: false,
					date: moment().format("2022-01-22T10:00:51+05:30"),
					text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
						eiusmod tempor incididunt ut labore et dolore magna aliqua. #productive #work`
				},
				{
					id: 3,
					highlight: false,
					date: moment().format("2022-01-22T13:20:51+05:30"),
					text: `Lorem ipsum dolor sit amet. @JohnDoe`
				},
				{
					id: 4,
					highlight: true,
					date: moment().format("2022-01-22T18:30:51+05:30"),
					text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
						eiusmod tempor incididunt ut labore et dolore magna aliqua.`
				},
				{
					id: 5,
					highlight: false,
					date: moment().format("2022-01-22T20:45:51+05:30"),
					text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
						eiusmod tempor incididunt ut labore et dolore magna aliqua.`
				},
			]
		}
	},
	created() {
		this.getTimeForDisplay(); // TODO: optimize
	},
	methods: {
		toggleHighlight(id) {
			this.entries = this.entries.map(e => e.id === id ? {...e, highlight:!e.highlight} : e);
		},
    addTask(entry) {
      this.entries = [...this.entries, entry];
			this.getTimeForDisplay(); // TODO: optimize
    },
		getTimeForDisplay() {
			for (let i = 0; i < this.entries.length; i++) {
				this.entries[i].time = moment(this.entries[i].date).format("hh:mm");
			}
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